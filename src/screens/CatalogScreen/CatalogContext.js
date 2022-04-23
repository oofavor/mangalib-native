import { createContext, useContext } from 'react';
import { getCatalogMetadata } from '../../services';

export const CatalogContext = createContext(null);

export const useCatalog = () => {
  const data = useContext(CatalogContext);
  const [config, setConfig] = useState({});

  useEffect(() => {
    data && getCatalogMetadata().then((res) => setConfig(metadata));
  }, []);

  const edit = (newConfig) => {
    setConfig(newConfig);
    console.log('set new config');
  };
  return { config, edit };
};
