import GatheringApplyListPage from './GatheringApplyListPage';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PostApi } from 'apis/lib/post';

export default function GatheringApplyMainPage() {
  const [latlngData, setLatlngData] = useState<any>([]);
  const { post_idx } = useParams();

  const getData = async () => {
    try {
      const res = await PostApi.getPost(post_idx as string);
      setLatlngData(res.data);
    } catch (err: any) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <>{latlngData && <GatheringApplyListPage detailData={latlngData} />}</>;
}
