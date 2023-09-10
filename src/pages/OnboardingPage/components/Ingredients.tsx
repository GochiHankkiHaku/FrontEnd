import styled from 'styled-components';
import { radius } from 'styles/constants';
import { flexSet } from 'styles/minxin';
import { Typography } from 'components/Typography';
import { Ingredient } from 'apis/lib/menu/type';

const bgCols = ['#FFF2DE', '#DEFFF9', '#E8FFDD'];

interface IngredientsProps {
  ingredients: Ingredient[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <>
      {ingredients.map((ingredient) => (
        <IngredientItem
          key={ingredient.idx}
          ingredient={ingredient.ingredient}
          price={ingredient.price}
          url={ingredient.url}
        />
      ))}
    </>
  );
}

interface IngredientItemProps {
  ingredient: string;
  price: number;
  url: string;
}

function IngredientItem({ url: img, ingredient, price }: IngredientItemProps) {
  return (
    <IngredientWrap>
      <ImgWrap $id={0}>
        <img src={img} alt='음식 썸네일' />
      </ImgWrap>
      <div>
        <Typography variant='title' size={5} mb={4}>
          {ingredient}
        </Typography>
        <Typography variant='paragraph' size={2}>
          {`평균 ${price.toLocaleString()}`}
        </Typography>
      </div>
    </IngredientWrap>
  );
}

const IngredientWrap = styled.div`
  display: flex;

  & + & {
    margin-top: 8px;
  }
`;

const ImgWrap = styled.div<{ $id: number }>`
  margin-right: 8px;

  width: 80px;
  height: 80px;
  border-radius: ${radius[4]}px;

  background-color: ${({ $id }) => bgCols[$id % 3]};

  position: relative;
  ${flexSet()}
  .mid {
    position: absolute;
  }
`;
