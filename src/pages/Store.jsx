// import { useParams } from 'react-router-dom';
// import TopBar from '../components/TopBar';
// import MenuItem from '../components/MenuItem';
// import OrderBar from '../components/OrderBar';
// import { stores } from '../models/stores';
// import { useCart } from '../context/CartContext';

// export default function Store() {
//   const { storeId } = useParams();
//   const store = stores.find((s) => s.id === Number(storeId)) || stores[0];
//   const { totalPrice } = useCart();

//   return (
//     <div className="flex flex-col h-full">
//       <TopBar title="가게 메뉴 리스트" showBack />
//       <div className="flex-1 overflow-y-auto px-5 py-4">
//         <div className="w-full h-44 bg-gray-200 rounded-xl mb-4" />
//         <h2 className="text-xl font-extrabold text-gray-900 mb-1">{store.name}</h2>
//         <p className="text-sm text-gray-500 mb-1">⭐ {store.rating} 리뷰 {store.reviewCount.toLocaleString()}</p>
//         <p className="text-xs text-gray-400 leading-relaxed">
//           최소주문 {store.minOrderPrice.toLocaleString()}원 · 배달시간 {store.deliveryTime}
//         </p>
//         <h3 className="text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-1 mt-4">샐러드</h3>
//         {store.menuItems.map((item) => (
//           <MenuItem key={item.id} item={item} store={store} />
//         ))}
//       </div>
//       <OrderBar totalPrice={totalPrice} to="/cart" />
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MenuItem from '../components/MenuItem';
import OrderBar from '../components/OrderBar';
import { useCart } from '../context/CartContext';

const API_URL = 'http://localhost:3001/stores';

export default function Store() {
  const { storeId } = useParams();
  const { totalPrice } = useCart();
  const [store, setStore] = useState(null);

  // ✅ GET - 특정 가게 데이터 불러오기
  useEffect(() => {
    fetch(`${API_URL}/${storeId}`)
      .then((res) => res.json())
      .then((data) => setStore(data))
      .catch((err) => console.error('GET 실패:', err));
  }, [storeId]);

  if (!store) {
    return (
      <div className="flex flex-col h-full">
        <TopBar title="가게 메뉴 리스트" showBack />
        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
          로딩 중...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <TopBar title="가게 메뉴 리스트" showBack />
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="w-full h-44 bg-gray-200 rounded-xl mb-4" />
        <h2 className="text-xl font-extrabold text-gray-900 mb-1">{store.name}</h2>
        <p className="text-sm text-gray-500 mb-1">⭐ {store.rating} 리뷰 {store.reviewCount.toLocaleString()}</p>
        <p className="text-xs text-gray-400 leading-relaxed">
          최소주문 {store.minOrderPrice.toLocaleString()}원 · 배달시간 {store.deliveryTime}
        </p>
        <h3 className="text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-1 mt-4">샐러드</h3>
        {store.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} store={store} />
        ))}
      </div>
      <OrderBar totalPrice={totalPrice} to="/cart" />
    </div>
  );
}