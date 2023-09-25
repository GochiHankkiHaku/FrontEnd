import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { IngredientItemProps } from '../utils/searchPage.type';

export default function IngredientInfo({ img, ingredient, price }: IngredientItemProps) {
  return (
    <IngredientInfoItem>
      <IngredientImg src={img} />
      <IngredientDescription>
        <Typography variant='title' size={5} color={color.gray[9]}>
          {ingredient}
        </Typography>
        <Typography variant='paragraph' size={2} color={color.gray[9]}>
          평균 {price.toLocaleString()}원
        </Typography>
      </IngredientDescription>
    </IngredientInfoItem>
  );
}

const IngredientInfoItem = styled.li`
  display: flex;
  gap: 8px;
`;

const IngredientImg = styled.img`
  width: 80px;
  height: 80px;
  background-color: #aed8ff;
  border-radius: 4px;
`;

const IngredientDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px - 8px);
  row-gap: 4px;
`;
