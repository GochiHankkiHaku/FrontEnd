import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function GatheringItem({ list }: any) {
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate(`/gathering/${list.post_idx}`, {
      state: {
        list,
      },
    });
  };

  return (
    <ItemWrap onClick={moveDetailPage}>
      <Typography variant='paragraph' size={1} color={color.active}>
        {list.gathering_state}
      </Typography>
      <MenuInfoArea>
        <MenuImg />
        <MenuInfo>
          <Typography variant='paragraph' size={1} color={color.gray[9]}>
            {list.menuname}
          </Typography>
          <Typography variant='caption' size={2} color={color.gray[6]}>
            제주 서귀포시 성산읍 고성리 296-8
          </Typography>
          <Typography variant='title' size={5} color={color.main[1]}>
            {list.money}원
          </Typography>
          <MoveDetailBtn>자세히 보기</MoveDetailBtn>
        </MenuInfo>
      </MenuInfoArea>
    </ItemWrap>
  );
}

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: 15px;

  /* border: 1px solid green; */
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

  font-size: 12px;
  font-weight: 500;
  color: #6f6f6f;
`;
