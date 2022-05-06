import { useEffect, useState } from 'react';
import { getChapters } from '../services';

const useChapters = (branch, onChapterChange, count = 100) => {
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentBranch, setCurrentBranch] = useState(branch);

  useEffect(() => {
    fetch();
  }, [currentBranch]);

  const fetch = async () => {
    if (!isLoading && !allLoaded && !isError) {
      setIsLoading(true);
      try {
        const data = await getChapters(currentBranch.id, page, count);
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

  const changeBranch = (newBranch) => {
    setAllLoaded(false);
    setIsLoading(false);
    setIsError(false);
    setPage(1);
    setChapters([]);
    setCurrentBranch(newBranch);
  };

  return {
    chapters,
    fetch,
    allLoaded,
    isLoading,
    isError,
    changeBranch,
    currentBranch,
  };
};

export default useChapters;
