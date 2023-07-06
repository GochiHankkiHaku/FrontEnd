import { Typography } from 'components/Typography';
import styled from 'styled-components/macro';
import { color, fontFamily } from 'styles/constants';
import GatheringInfo from './components/GatheringInfo';
import Slider from './components/Slider';
import { useEffect, useState } from 'react';
import { PostApi, PostResponse } from 'apis/lib/post';
import { Header } from 'components/Header';
import { ReactComponent as PotIcon } from 'assets/icons/pot.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { flexSet } from 'styles/minxin';
import CustomToast from 'components/CustomToast';
import { toast } from 'react-toastify';

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
      try {
        const res = await PostApi.getList();
        console.log('res :>> ', res);
        setPost(res);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };

    getPost();
  }, []);

  return (
    <Wrap>
      <Header>
        <PotIcon fill={color.main[1]} />
        <HeaderText>한 끼 하쿠</HeaderText>
      </Header>
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
            idx={idx}
            thumbnail={post.img}
            title={`${post.menuname} 요리 모집`}
            address='제주 서귀포시 성산읍 고성리 296-8'
            recruitedCnt={post.application}
            totalCnt={post.number}
          />
        ))}
      </ContentsWrap>
      <CreateBtn>
        <PlusIcon /> <span>모임</span>
      </CreateBtn>
      <CustomToast />
    </Wrap>
  );
}

const HeaderText = styled.p`
  display: flex;
  align-items: center;

  margin-left: 8px;
  color: ${color.gray[9]};
  font-family: ${fontFamily.EF_JEJU};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  /* line-height: 165%; */
`;

const Wrap = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
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

const CreateBtn = styled.button`
  position: fixed;
  bottom: 90px;
  right: 20px;
  ${flexSet()}

  width: 92px;
  height: 44px;

  background-color: ${color.main[2]};
  border-radius: 50px;
  color: white;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  span {
    margin-left: 8px;
  }
`;
