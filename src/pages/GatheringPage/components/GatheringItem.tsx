import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function GatheringItem({ data }: any) {
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate(`/gathering/${data.postIdx}`, {
      state: {
        postDate: data.postDate,
        matchingIdx: data.matchingIdx,
      },
    });
  };

  return (
    <Wrap>
      <Typography
        variant='paragraph'
        size={1}
        color={data.postStatus === 'N' ? color.complete : color.active}
      >
        {data.postStatus === 'N' ? '모임 중' : '모임 완료'}
      </Typography>
      <MenuInfoArea>
        <MenuImg src={data.img} alt='메뉴 이미지' />
        <MenuInfo>
          <Typography variant='paragraph' size={1} color={color.gray[9]}>
            {data.menuName}
          </Typography>
          <Typography variant='caption' size={2} color={color.gray[6]}>
            {data.address}
          </Typography>
          <Typography variant='title' size={5} color={color.main[1]}>
            {data.menuPrice}원
          </Typography>
          <MoveDetailBtn onClick={moveDetailPage}>
            <Typography variant='caption' size={2} color={color.gray[7]}>
              자세히 보기
            </Typography>
          </MoveDetailBtn>
        </MenuInfo>
      </MenuInfoArea>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const MenuInfoArea = styled.div`
  display: flex;
  column-gap: 12px;
`;

const MenuImg = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 3px;
  background-color: peachpuff;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 12px - 116px);
`;

const MoveDetailBtn = styled.button`
  width: 100%;
  padding: 5px 0;
  border-radius: 4px;
  border: 1px solid #a5a5a5;
`;
