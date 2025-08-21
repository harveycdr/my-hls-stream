import movies from "../data/movie";
import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">🎥 Danh sách phim</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <a href={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </a>
        ))}
      </div>
    </div>
  );
}
