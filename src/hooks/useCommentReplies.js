import { useEffect, useState } from 'react';
import { getComments } from '../services';

const useCommentReplies = (mangaId, onCommentsChange) => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    if (!isLoading && !allLoaded && !isError) {
      setIsLoading(true);
      try {
        const data = await getComments(mangaId, page);
        setPage(page + 1);
        setComments(comments.concat(data));
        // onCommentsChange(chapters.concat(data));
        if (data.length === 0) setAllLoaded(true);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    }
  };

  return {
    comments,
    fetch,
    allLoaded,
    isLoading,
    isError,
  };
};

export default useComments;
