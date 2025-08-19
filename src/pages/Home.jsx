import { useState } from "react";
import MovieCard from "../components/MovieCard";
import Player from "../components/Player";
import movies from "../data/movie";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  if (!selectedMovie) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">🎥 Danh sách phim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={setSelectedMovie}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col items-center">
        <button
          onClick={() => setSelectedMovie(null)}
          className="mb-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 cursor-pointer"
        >
          ⬅ Quay lại
        </button>
        <h2 className="text-xl font-bold mb-2">{selectedMovie.title}</h2>
        <h3 className="text-xl mb-2">{selectedMovie.description}</h3>
        <Player src={selectedMovie.url} poster={selectedMovie.poster} />
      </div>
    </div>
  );
}
