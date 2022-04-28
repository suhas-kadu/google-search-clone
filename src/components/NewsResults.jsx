import React from "react";
import { Loading } from "./Loading";

const NewsResults = ({ results }) => {
  if (results === undefined) return <Loading />;

  //   console.log(results.entires);
  console.log(typeof results);

  return (
    <div className="sm:px-16 grid lg:grid-cols-3 md:grid-cols-2  gap-4 gap-x-6  sm:content-center sm:justify-center justify-items-stretch">
      {results?.entries?.map(({ id, links, source, title }) => (
        <div key={id} className=" p-2">
          <a
            href={links?.[0].href}
            target="_blank"
            rel="noreferrer "
            className="hover:underline "
          >
            <p className="text-lg dark:text-blue-300 text-blue-700 line-clamp-2">
              {title}
            </p>
          </a>
          <div className="flex gap-4">
            <a
              href={source?.href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-blue-300 line-clamp-1"
            >
              <span className="text-gray">Source: </span>
              {source?.href}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsResults;
