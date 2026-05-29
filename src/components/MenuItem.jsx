// import Button from './Button';

// export default function MenuItem({ item }) {
//   return (
//     <div className="menu-item">
//       <div className="menu-item__img" />
//       <div className="menu-item__info">
//         <div className="menu-item__name-row">
//           <span className="menu-item__name">{item.name}</span>
//           {item.isBest && <span className="menu-item__badge">BEST</span>}
//         </div>
//         <p className="menu-item__price">{item.price.toLocaleString()}원</p>
//         <p className="menu-item__desc">{item.description}</p>
//       </div>
//       <Button>담기</Button>
//     </div>
//   );
// }

// import Button from './Button';

// export default function MenuItem({ item }) {
//   return (
//     <div className="flex items-start gap-3 py-4 border-b border-gray-100">
//       <div className="w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0" />
//       <div className="flex-1">
//         <div className="flex items-center gap-2 mb-1">
//           <span className="text-base font-bold text-gray-900">{item.name}</span>
//           {item.isBest && (
//             <span className="text-xs font-bold text-blue-500 bg-blue-50 rounded px-1 py-0.5">BEST</span>
//           )}
//         </div>
//         <p className="text-sm font-semibold text-gray-800 mb-1">{item.price.toLocaleString()}원</p>
//         <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.description}</p>
//       </div>
//       <Button>담기</Button>
//     </div>
//   );
// }

import Button from './Button';
import { useCart } from '../context/CartContext';

export default function MenuItem({ item, store }) {
  const { addItem } = useCart();

  return (
    <div className="flex items-start gap-3 py-4 border-b border-gray-100">
      <div className="w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base font-bold text-gray-900">{item.name}</span>
          {item.isBest && (
            <span className="text-xs font-bold text-blue-500 bg-blue-50 rounded px-1 py-0.5">BEST</span>
          )}
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-1">{item.price.toLocaleString()}원</p>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.description}</p>
      </div>
      <Button onClick={() => addItem(item, store)}>담기</Button>
    </div>
  );
}