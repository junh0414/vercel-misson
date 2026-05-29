import { useNavigate } from 'react-router-dom';

export default function TopBar({ title, showBack = false, rightText, onRightClick }) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 w-full h-12 flex items-center justify-between px-4 bg-white border-b border-gray-100 z-50">
      <div className="flex items-center">
        {showBack && (
          <button
            className="text-3xl text-gray-800 cursor-pointer mr-2 border-none bg-transparent"
            onClick={() => navigate(-1)}
          >
            ‹
          </button>
        )}
        <span className="text-lg font-bold text-gray-900">{title}</span>
      </div>

      {rightText && (
        <button
          className="text-sm text-black-500 cursor-pointer border-none bg-transparent"
          onClick={onRightClick}
        >
          {rightText}
        </button>
      )}
    </div>
  );
}