export default function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={() => onClick(movie)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition transform"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.genre}</p>
      </div>
    </div>
  );
}
