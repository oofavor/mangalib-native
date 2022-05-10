import { useEffect, useState } from 'react';
import { getBookmarks } from '../services';

const useBookmarks = (userId, type, onFetch) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [current, setCurrent] = useState(type);

  useEffect(() => {
    setCurrent(type);
    setBookmarks([]);
    setIsLoading(false);
    setAllLoaded(false);
    setPage(1);
  }, [type]);

  useEffect(() => {
    if (page === 1) {
      fetch();
    }
  }, [page]);

  const fetch = async () => {
    if (isLoading || allLoaded) return;
    setIsLoading(true);
    const res = await getBookmarks(userId, page, current);
    setBookmarks((prev) => prev.concat(res.content));
    setPage((prev) => prev + 1);
    onFetch(res.props);
    setIsLoading(false);
    if (res.content.length < 50) setAllLoaded(true);
  };

  return { fetch, bookmarks, isLoading, allLoaded };
};

export default useBookmarks;
