// export default function Button({ children, onClick, disabled, fullWidth }) {
//   return (
//     <button
//       className={`btn-primary${disabled ? ' btn-disabled' : ''}${fullWidth ? ' btn-full' : ''}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// }

// 테일
export default function Button({ children, onClick, disabled, fullWidth }) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-5 py-3 text-sm cursor-pointer whitespace-nowrap
        ${disabled ? 'bg-blue-200 cursor-not-allowed' : ''}
        ${fullWidth ? 'w-full' : ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}