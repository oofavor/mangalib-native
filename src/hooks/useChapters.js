import { useState } from 'react';
import { getChapters } from '../services';

const useChapters = (initialBranch, onChapterChange, count = 100) => {
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [branch, setBranch] = useState(initialBranch);
  const changeBranch = (newBranch) => {
    setBranch(newBranch);
    setPage(1);
    setChapters([]);
    setIsError(false);
    setIsLoading(false);
    setAllLoaded(false);
    fetch();
  };
  const fetch = async () => {
    if (!isLoading && !allLoaded && !isError) {
      setIsLoading(true);

      try {
        const data = await getChapters(branch.id, page, count);
        setPage(page + 1);
        setChapters(chapters.concat(data));
        onChapterChange(chapters.concat(data));
        if (data.length === 0) setAllLoaded(true);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    }
  };

  return {
    chapters,
    fetch,
    allLoaded,
    isLoading,
    isError,
  };
};

export default useChapters;
