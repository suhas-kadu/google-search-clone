import React from "react";
import { Loading } from "./Loading";

const ImageResults = ({ results }) => {
  if (results === undefined) return <Loading />;

  return (
    <div
      className="sm:px-14
     grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4  sm:content-center sm:justify-center justify-items-stretch"
    >
      {results?.image_results?.map(
        ({ image, link: { href, title } }, index) => {
          return (
            <div className="p-6 justify-self-center self-center " key={index}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer "
                className="hover:underline "
              >
                <img
                  className="w-full h-48 object-cover mb-1"
                  src={image?.src}
                  alt={title}
                  loading="lazy"
                />
                <p className="text-lg dark:text-blue-300 text-center line-clamp-1">
                  {title}
                </p>
              </a>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ImageResults;
