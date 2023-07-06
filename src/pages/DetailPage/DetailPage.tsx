import { dummyData } from 'common/utils/dummyData';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams();
  const detailData = dummyData.filter((value: any) => value.id === Number(id));

  return <div>{detailData[0].title}</div>;
}
