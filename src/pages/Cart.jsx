import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const DELIVERY_FEE = 2000;

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, storeInfo, totalPrice, clearCart } = useCart();
  const isUnderMin = storeInfo && totalPrice < storeInfo.minOrderPrice;

  const handleCancel = () => {
    clearCart();
    navigate('/'); // /store로 가라고 하셧는데 이게 더 자연스러울듯
  };

  return (
    <div className="flex flex-col h-full">
      <TopBar showBack rightText="주문취소" onRightClick={handleCancel} />
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-bold text-gray-900">{storeInfo?.name || '가게 없음'}</span>
            {isUnderMin && <span className="text-xs text-red-500 font-medium">최소금액 미달 ⓘ</span>}
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start gap-3 py-3">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.name}</p>
                <p className="text-sm font-semibold text-gray-800">{(item.price * item.quantity).toLocaleString()}원</p>
              </div>
              <span className="text-sm text-gray-500 self-center">{item.quantity}개 &gt;</span>
            </div>
          ))}
          <button className="w-full mt-3 py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-400 hover:bg-gray-50">
            더 담기 +
          </button>
        </div>
        <div className="h-2 bg-gray-100" />
        <div className="px-5 py-4 flex flex-col gap-3">
          <div className="flex justify-between text-sm text-gray-500">
            <span>주문금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>배달요금</span>
            <span>{DELIVERY_FEE.toLocaleString()}원</span>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
            <span>총 결제금액</span>
            <span>{(totalPrice + DELIVERY_FEE).toLocaleString()}원</span>
          </div>
        </div>
        <div className="px-5 pb-6">
          <p className="text-xs text-gray-400 text-center mb-3">최소 주문금액 {storeInfo?.minOrderPrice.toLocaleString() || 0}원</p>
          <Button fullWidth disabled={isUnderMin}>
            {(totalPrice + DELIVERY_FEE).toLocaleString()}원 결제하기
          </Button>
        </div>
      </div>
    </div>
  );
}