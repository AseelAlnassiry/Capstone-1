import { useQuery } from "@apollo/client";
import { useState } from "react";
import GET_SEARCH from "../apollo/search";
import { Link } from "react-router-dom";

const truncate = (str) => {
  return str.length > 30 ? str.substring(0, 30) + "..." : str;
};

const SearchModal = () => {
  const [search, setSearch] = useState("");

  const { data } = useQuery(GET_SEARCH, {
    variables: { term: search },
  });

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box mt-20 flex h-fit w-fit flex-col gap-2 self-start bg-transparent shadow-none"
        >
          <input
            type="text"
            placeholder="What's to watch these days?"
            className="input w-80 rounded-full bg-base-200 md:w-96"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {data && data.Page.media[0] && (
            <ul className="menu rounded-box w-80 bg-base-200 md:w-96">
              {data.Page.media.map((anime) => (
                <li key={anime.id}>
                  <Link
                    to={`/${anime.id}`}
                    onClick={() => {
                      setSearch("");
                      window.my_modal_2.close();
                    }}
                  >
                    <img
                      className="h-5 w-5 rounded-full shadow sm:h-10 sm:w-10"
                      src={anime.coverImage.extraLarge}
                      alt=""
                    />
                    <span>
                      {anime.title.english
                        ? truncate(anime.title.english)
                        : truncate(anime.title.romaji)}
                    </span>
                    {anime.isAdult && (
                      <span className="badge bg-accent">Adult</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </form>
        <form method="dialog" className="modal-backdrop bg-black opacity-60">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default SearchModal;
