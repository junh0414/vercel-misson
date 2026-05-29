export default function CategoryButton({ emoji, name }) {
  return (
    <button className="flex flex-col items-center justify-center w-full aspect-square bg-gray-100 rounded-xl gap-1 hover:bg-blue-50 transition-colors">
      <span className="text-2xl">{emoji}</span>
      <span className="text-xs text-gray-500 font-medium">{name}</span>
    </button>
  );
}