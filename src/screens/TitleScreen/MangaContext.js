import { createContext, useContext } from 'react';

export const MangaContext = createContext(null);

export const useManga = () => {
  const data = useContext(MangaContext);
  return data;
};
