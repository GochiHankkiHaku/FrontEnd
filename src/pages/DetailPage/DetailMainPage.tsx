import DetailListPage from './DetailListPage';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DetailMainPage() {
  const [latlngData, setLatlngData] = useState<any>([]);
  const { post_idx } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(`https://gochihankkihaku.shop/post/${post_idx}`);
      setLatlngData(res.data);
    } catch (err: any) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <>{latlngData && <DetailListPage detailData={latlngData} />}</>;
}
