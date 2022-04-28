import React from "react";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";

const VideoResults = ({ results }) => {
  if (results === undefined) return <Loading />;

  return (
    <div className="sm:px-16 grid lg:grid-cols-3 md:grid-cols-2  gap-6  sm:content-center sm:justify-center justify-items-stretch">
      {results?.results?.map(({ title, link }, index) => {
        const url = link.search("youtube")
          ? link.replace("watch?v=", "embed/")
          : link;

        // if (link.search("youtube") === true) {
        return (
          <div key={index} className="py-6 px-2 lg:px-4">
            <iframe
              title="index"
              src={url}
              className="w-full h-full overflow-clip"
            />
            <p className="text-lg dark:text-blue-300 line-clamp-1 mb-1">
              {title}
            </p>
          </div>
        );
        // }
      })}
    </div>
  );
};

export default VideoResults;
