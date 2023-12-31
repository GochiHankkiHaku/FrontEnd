import { Typography } from 'components/Typography';
import styled, { css } from 'styled-components/macro';
import { color, fontFamily } from 'styles/constants';
import GatheringInfo from './components/GatheringInfo';
import Slider from './components/Slider';
import { useEffect, useState } from 'react';
import { PostApi } from 'apis/lib/post';
import { Header } from 'components/Header';
import { ReactComponent as PotIcon } from 'assets/icons/pot.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { flexSet } from 'styles/minxin';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from 'components/Spinner';
import { PostResponse } from 'apis/lib/post/type';
import { BOTTOM_NAVIGATION_HEIGHT, MAXWIDTH, PATH, STORAGE } from 'common/constants';

export default function MainPage() {
  const navigate = useNavigate();
  const [posts, setPost] = useState<PostResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const res = await PostApi.getPosts();
        const notRecruited = res.filter((post) => post.status === 'N');
        setPost(notRecruited);
        setLoading(false);
      } catch (error) {
        console.error('error :>> ', error);
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
        {loading ? (
          <Spinner backgroundHeight='100%' />
        ) : posts.length === 0 ? (
          '현재 모집 중인 모임이 없습니다.'
        ) : (
          posts.map((post, idx: number) => (
            <Link key={post.post_idx} to={`/detail/${post.post_idx}`}>
              <GatheringInfo key={idx} colorIdx={idx} {...post} />
            </Link>
          ))
        )}
      </ContentsWrap>
      {localStorage.getItem(STORAGE.userIdx) === '1' && (
        <CreateBtn onClick={() => navigate(`/${PATH.onBoarding}/${PATH.location}`)}>
          <PlusIcon /> <span>모임</span>
        </CreateBtn>
      )}
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
  display: flex;
  flex-direction: column;

  height: calc(100vh - ${BOTTOM_NAVIGATION_HEIGHT}px);

  position: relative;
  background-color: white;
`;

const SliderWrap = styled.div`
  position: relative;
`;

const ContentsWrap = styled.div`
  padding: 24px 20px;
  padding-bottom: ${BOTTOM_NAVIGATION_HEIGHT}px;
  flex: 1;
`;

const CreateBtn = styled.button`
  position: fixed;

  z-index: 100;
  bottom: 90px;
  ${() => {
    if (window.innerWidth > MAXWIDTH) {
      return css`
        right: calc((${window.innerWidth}px - ${MAXWIDTH}px) / 2 + 20px);
      `;
    }
    return css`
      right: 20px;
    `;
  }}

  ${flexSet()}

  width: 92px;
  height: 44px;

  background-color: ${color.main[1]};
  border-radius: 50px;
  color: white;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  span {
    margin-left: 8px;
  }
`;
