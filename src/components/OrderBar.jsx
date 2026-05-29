import { Link } from 'react-router-dom';
import Button from './Button';

export default function OrderBar({ totalPrice, to = '/cart' }) {
  return (
    <div className="relative bottom-0 left-0 w-full flex items-center justify-between px-5 py-3 bg-white border-t border-gray-100 z-50">
      <span className="text-sm text-gray-800 font-medium">총 주문금액 {totalPrice.toLocaleString()}원</span>
      <Link to={to}>
        <Button>주문하기</Button>
      </Link>
    </div>
  );
}