import { Link } from 'react-router-dom';

export default function StoreCard({ store }) {
  return (
    <Link to={`/store/${store.id}`} className="flex items-center gap-4 py-4 border-b border-gray-100">
      <div className="w-18 h-18 bg-gray-200 rounded-xl flex-shrink-0" />
      <div className="flex-1">
        <p className="text-base font-bold text-gray-900 mb-1">{store.name}</p>
        <p className="text-xs text-gray-500 mb-1">⭐ {store.rating} ({store.reviewCount.toLocaleString()})</p>
        <p className="text-xs text-gray-400">
          {store.minOrderPrice.toLocaleString()}~{(store.minOrderPrice + 5000).toLocaleString()}원 · 배달비 {store.deliveryFee.toLocaleString()}원
        </p>
      </div>
    </Link>
  );
}