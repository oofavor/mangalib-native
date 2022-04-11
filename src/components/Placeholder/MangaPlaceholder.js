import ContentLoader, { Rect } from 'react-content-loader/native';
import { View } from 'react-native';

const MangaPlaceholder = () => (
  <ContentLoader width={110} height={160}>
    <Rect height={160} width={110} rx={5} />
  </ContentLoader>
);

export default MangaPlaceholder;
