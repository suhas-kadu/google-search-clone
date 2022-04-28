import React from "react";
import { Loading } from "./Loading";

const SearchResults = ({ results }) => {
  if (results === undefined) return <Loading />;

  console.log(typeof results);

  return (
    <div className="sm:px-16 grid  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-4 gap-x-6  sm:content-center sm:justify-center justify-items-stretch ">
      {results?.results?.map((res, index) => (
        <div className="p-2 overflow-clip" key={index}>
          <a className="" href={res.link} target="_blank" rel="noreferrer">
            <p
              title={res.title}
              className="overflow-clip line-clamp-1 text-lg hover:underline dark:text-blue-300 text-blue-700 mb-1"
            >
              {res.title}
            </p>

            <p title={res.link} className="overflow-clip text-sm line-clamp-1">
              {res.link.length > 30
                ? res.link.substring(0, 27) + "..."
                : res.link}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
