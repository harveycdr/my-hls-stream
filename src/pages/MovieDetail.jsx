import { useParams } from "react-router-dom";
import movies from "../data/movie";
import Player from "../components/Player";
import { useState } from "react";

export default function MovieDetail() {
  const [url, setUrl] = useState("");
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <p className="text-center text-red-500">Không tìm thấy phim!</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-3 ">
      <a
        href="/"
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 cursor-pointer w-30"
      >
        ⬅ Quay lại
      </a>
      <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
      <h3 className="text-lg mb-2">{movie.description}</h3>

      <div className="flex flex-col w-full gap-2">
        <h3>Danh sách tập phim</h3>
        <div className="flex flex-wrap gap-2">
          {movie?.episode.map((mvi) => (
            <div
              onClick={() => setUrl(mvi.url)}
              className=" cursor-pointer bg-green-400 rounded-xl overflow-hidden "
            >
              <p className=" p-2 text-white font-semibold hover:bg-black/20 text-nowrap">
                {mvi.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Player src={url} poster={movie.poster} />
    </div>
  );
}
