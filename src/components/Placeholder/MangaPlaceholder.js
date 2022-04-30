import { Rect } from 'react-content-loader/native';

const MangaPlaceholder = ({ x, y }) => (
  <>
    <Rect height={160} width={110} rx={5} x={x} y={y} />
    <Rect height={10} width={110} rx={5} x={x} y={y + 170} />
  </>
);

export default MangaPlaceholder;
