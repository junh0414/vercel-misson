// import TopBar from '../components/TopBar';
// import StoreCard from '../components/StoreCard';
// import OrderBar from '../components/OrderBar';
// import { stores } from '../models/stores';
// import { useCart } from '../context/CartContext';

// export default function Stores() {
//   const { totalPrice } = useCart();

//   return (
//     <div className="flex flex-col h-full">
//       <TopBar title="샐러드" showBack />
//       <div className="flex-1 overflow-y-auto px-5">
//         {stores.map((store) => (
//           <StoreCard key={store.id} store={store} />
//         ))}
//       </div>
//       <OrderBar totalPrice={totalPrice} to="/cart" />
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import StoreCard from '../components/StoreCard';
import OrderBar from '../components/OrderBar';
import { useCart } from '../context/CartContext';

const API_URL = 'http://localhost:3001/stores';

export default function Stores() {
  const { totalPrice } = useCart();
  const [stores, setStores] = useState([]);
  const [newStoreName, setNewStoreName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  // ✅ GET - 가게 목록 불러오기
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setStores(data))
      .catch((err) => console.error('GET 실패:', err));
  }, []);

  // ✅ POST - 가게 추가
  const handleAddStore = () => {
    if (!newStoreName.trim()) return;

    const newStore = {
      name: newStoreName.trim(),
      rating: 0.0,
      reviewCount: 0,
      category: '샐러드',
      minOrderPrice: 13000,
      deliveryFee: 2000,
      deliveryTime: '13분~30분',
      menuItems: [],
    };

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStore),
    })
      .then((res) => res.json())
      .then((created) => {
        setStores((prev) => [...prev, created]);
        setNewStoreName('');
      })
      .catch((err) => console.error('POST 실패:', err));
  };

  // ✅ DELETE - 가게 삭제
  const handleDeleteStore = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setStores((prev) => prev.filter((s) => s.id !== id));
      })
      .catch((err) => console.error('DELETE 실패:', err));
  };

  // ✅ PATCH - 가게 이름 수정
  const handleEditStore = (id) => {
    if (!editingName.trim()) return;

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editingName.trim() }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setStores((prev) => prev.map((s) => (s.id === id ? updated : s)));
        setEditingId(null);
        setEditingName('');
      })
      .catch((err) => console.error('PATCH 실패:', err));
  };

  const startEditing = (store) => {
    setEditingId(store.id);
    setEditingName(store.name);
  };

  return (
    <div className="flex flex-col h-full">
      <TopBar title="샐러드" showBack />
      <div className="flex-1 overflow-y-auto px-5">

        {/* 가게 목록 */}
        {stores.map((store) => (
          <div key={store.id} className="border-b border-gray-100">
            {editingId === store.id ? (
              /* 수정 모드 */
              <div className="flex items-center gap-2 py-3">
                <input
                  className="flex-1 border border-blue-400 rounded-lg px-3 py-2 text-sm outline-none"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleEditStore(store.id)}
                  autoFocus
                />
                <button
                  className="text-xs bg-blue-500 text-white px-3 py-2 rounded-lg"
                  onClick={() => handleEditStore(store.id)}
                >
                  저장
                </button>
                <button
                  className="text-xs bg-gray-200 text-gray-600 px-3 py-2 rounded-lg"
                  onClick={() => setEditingId(null)}
                >
                  취소
                </button>
              </div>
            ) : (
              /* 일반 모드 */
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <StoreCard store={store} />
                </div>
                <div className="flex flex-col gap-1 py-4 flex-shrink-0">
                  <button
                    className="text-xs bg-yellow-400 text-white px-2 py-1 rounded-md"
                    onClick={() => startEditing(store)}
                  >
                    수정
                  </button>
                  <button
                    className="text-xs bg-red-400 text-white px-2 py-1 rounded-md"
                    onClick={() => handleDeleteStore(store.id)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* ✅ POST - 가게 추가 입력 */}
        <div className="flex items-center gap-2 py-4">
          <input
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
            placeholder="새 가게 이름 입력"
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddStore()}
          />
          <button
            className="text-sm bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={handleAddStore}
          >
            추가
          </button>
        </div>

      </div>
      <OrderBar totalPrice={totalPrice} to="/cart" />
    </div>
  );
}