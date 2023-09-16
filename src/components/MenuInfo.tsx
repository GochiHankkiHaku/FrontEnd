import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { MenuInfoProps } from '../pages/SearchPage/utils/interface';

export default function MenuInfo({ img, menuname, menuContent }: MenuInfoProps) {
  return (
    <MenuInfoArea>
      <MenuImg src={img} alt='menu_img' />
      <MenuDescription>
        <Typography variant='paragraph' size={1} color={color.gray[9]}>
          {menuname}
        </Typography>
        <Typography variant='paragraph' size={6} color={color.gray[7]}>
          {menuContent}
        </Typography>
      </MenuDescription>
    </MenuInfoArea>
  );
}

const MenuInfoArea = styled.div`
  display: flex;
  gap: 12px;
`;

const MenuImg = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 4px;
  background-color: peachpuff;
`;

const MenuDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc(100% - 12px - 144px);
`;
