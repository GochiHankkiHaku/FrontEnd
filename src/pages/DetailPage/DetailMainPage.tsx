import DetailListPage from './DetailListPage';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { log } from 'console';

export default function DetailMainPage() {
  const [latlngData, setLatlngData] = useState<any>([]);
  const { post_idx } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get('http://15.164.155.242:8080/post/listall');
      console.log('sdfafds', res);
      setLatlngData(res.data);
    } catch (err: any) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const detailData = latlngData.filter((value: any) => value.post_idx === Number(post_idx));

  // console.log(detailData);

  console.log(latlngData);

  return <>{detailData && <DetailListPage detailData={detailData[0]} />}</>;
}
