import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";
import SearchResults from "./SearchResults";
import ImageResults from "./ImageResults";
import NewsResults from "./NewsResults";
import VideoResults from "./VideoResults";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm}&num=20 videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=20`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  console.log(location.pathname);
  switch (location.pathname) {
    case "/search":
      return <SearchResults results={results} />;

    case "/image":
      return <ImageResults results={results} />;
    case "/news":
      return <NewsResults results={results} />;
    case "/video":
      return <VideoResults results={results} />;

    default:
      return "ERROR";
  }
};
