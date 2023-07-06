import { Typography } from 'components/Typography';
import styled from 'styled-components/macro';
import { color } from 'styles/constants';
import GatheringInfo from './components/GatheringInfo';
import Slider from './components/Slider';
import { useEffect, useState } from 'react';
import { PostApi, PostResponse } from 'apis/lib/post';

// const menuImg = {
//   '구살국(성게국)':
//   '자리돔조림':
//   '한치 물회 덮밥':
//   '갈치 조림'
// }

export default function MainPage() {
  const [posts, setPost] = useState<PostResponse[]>([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await PostApi.getList();
      console.log('res :>> ', res);
      setPost(res);
    };

    getPost();
  }, []);

  return (
    <Wrap>
      <SliderWrap>
        <Slider />
      </SliderWrap>
      <ContentsWrap>
        <Typography variant='title' size={3} color={color.gray[9]}>
          내 주변 요리 모임
        </Typography>
        {posts.map((post, idx) => (
          <GatheringInfo
            key={idx}
            thumbnail='https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/catlab/20210525034607713vblk.jpg'
            title={`${post.menuname} 요리 모집`}
            address='제주 서귀포시 성산읍 고성리 296-8'
            recruitedCnt={post.application}
            totalCnt={post.number}
          />
        ))}
      </ContentsWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  background-color: white;
`;

const SliderWrap = styled.div`
  /* background-color: aqua; */
  position: relative;
`;

const ContentsWrap = styled.div`
  /* background-color: pink; */
  padding: 24px 20px;
`;
const StyledTypography = styled(Typography)`
  background-color: aqua;
  width: auto;
  position: fixed;
  /* bottom: 0; */
  /* right: 0; */
  top: 0;
  text-align: end;
  text-align: right;
  z-index: 100;
`;
