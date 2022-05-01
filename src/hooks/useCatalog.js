import { getCatalogMetadata, getCatalog } from '../services';
import { useEffect, useMemo, useState } from 'react';
import structuredClone from 'realistic-structured-clone';

const useCatalog = (setDataProvider) => {
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [config, setConfig] = useState();
  const [inProgressNetworkReq, setInProgressNetworkReq] = useState(false);
  const [needRefetch, setNeedRefetch] = useState(false);
  const [sort, setSort] = useState('rating');
  const [order, setOrder] = useState('-');
  const ordering = useMemo(
    () => [
      { text: 'По новизне', value: 'id' },
      { text: 'По последним обновлениям', value: 'chapter_date' },
      { text: 'По популярности', value: 'rating' },
      { text: 'По лайкам', value: 'votes' },
      { text: 'По просмотрам', value: 'views' },
      { text: 'По кол-ву глав', value: 'count_chapters' },
      { text: 'Мне повезет', value: 'random' },
    ],
    []
  );

  const handleConfig = (obj, handleThree = false) => {
    let configCopy = structuredClone(config);
    if (handleThree) {
      switch (config[obj.type][obj.idx].state) {
        case 'none':
          configCopy[obj.type][obj.idx].state = 'yes';
          break;
        case 'yes':
          configCopy[obj.type][obj.idx].state = 'no';
          break;
        case 'no':
          configCopy[obj.type][obj.idx].state = 'none';
          break;
      }
    } else {
      switch (config[obj.type][obj.idx].state) {
        case 'none':
          configCopy[obj.type][obj.idx].state = 'yes';
          break;
        case 'yes':
          configCopy[obj.type][obj.idx].state = 'none';
          break;
      }
    }
    setConfig(configCopy);
    setNeedRefetch(true);
  };

  const getIncluded = () => {
    const included = [];
    for (const key in config) {
      included.push(...config[key].filter((item) => item.state === 'yes'));
    }
    return included;
  };

  const getExcluded = () => {
    const excluded = [];
    for (const key in config) {
      excluded.push(...config[key].filter((item) => item.state === 'no'));
    }
    return excluded;
  };

  const refetch = () => {
    if (needRefetch) {
      // here order matters
      // setPage(1) -> setManga([])
      // useEffect will get prev page state otherwise
      setPage(1);
      setManga([]);
      setDataProvider((e) => e.cloneWithRows([]));

      setNeedRefetch(false);
      setInProgressNetworkReq(false);
      setAllLoaded(false);
    }
  };
  useEffect(() => {
    getCatalogMetadata().then((res) => {
      for (const key in res) {
        // settings type for each item
        // for easier passing to fetchMore
        // and managing checkbox state
        res[key] = res[key].map((item, idx) => ({
          ...item,
          type: key,
          state: 'none',
          idx,
        }));
      }
      setConfig(res);
    });
  }, []);

  useEffect(() => {
    if (!manga.length) {
      fetchMore();
    }
  }, [manga]);

  const fetchMore = () => {
    if (allLoaded) return;
    if (!inProgressNetworkReq) {
      setInProgressNetworkReq(true);
      getCatalog(page, 50, getCurrentSort(), getIncluded(), getExcluded()).then(
        (data) => {
          setInProgressNetworkReq(false);
          setManga((e) => e.concat(data));
          setDataProvider((e) => e.cloneWithRows(manga.concat(data)));
          setPage((e) => e + 1);
          if (data.length === 0) {
            setAllLoaded(true);
          }
        }
      );
    }
  };

  // '-' is descinding order
  // ''  is ascending order
  // if the value is same without the order is same, then change the order
  // otherwise change the value and set order to '-'
  
  const handleSort = (value) => {
    if (value.value === sort) {
      setOrder(order === '-' ? '' : '-');
    } else {
      setOrder('-');
      setSort(value.value);
    }
    setNeedRefetch(true);
    console.log(!!order);
    return order;
  };

  const getCurrentSort = () => order + sort;

  return {
    sort,
    setSort,
    manga,
    allLoaded,
    fetchMore,
    config,
    getIncluded,
    getExcluded,
    handleConfig,
    inProgressNetworkReq,
    refetch,
    ordering,
    handleSort,
  };
};

export default useCatalog;
