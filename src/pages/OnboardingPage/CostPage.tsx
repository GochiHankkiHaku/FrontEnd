import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Footer from './components/Footer';
import { usePage } from './hooks/usePage';
import HelperText from './components/HelperText';

const prices = {
  '구살국(성게국)': 13000,
  자리돔조림: 14000,
  '한치 물회 덮밥': 11000,
};
const formatPrice = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default function CostPage() {
  const { goNextPage } = usePage();

  const notify = () => {
    toast.success('모임이 생성되었습니다 !', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const [price, setPrice] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedPrice = formatPrice(event.target.value);
    setPrice(formattedPrice);
  };

  const handleNext = async () => {
    localStorage.setItem('money', String(price));
    const date2 = localStorage.getItem('date') ?? '';
    const time = localStorage.getItem('time') ?? '';
    const number = localStorage.getItem('number') ?? '';
    const money = localStorage.getItem('money') ?? '';
    const menuname = localStorage.getItem('menuname') ?? '';

    // const res = await PostApi.write(date2, time, Number(number), menuname, Number(money));
    goNextPage();

    localStorage.setItem('success', 'true');
  };
  const menuName = localStorage.getItem('menuname') ?? '';

  return (
    <>
      <Wrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={3}>
          얼마로 할까요?
        </Typography>
        <Typography variant='paragraph' size={6} color={color.gray[6]}>
          {localStorage.getItem('menuname')}의 평균 가격은 1인당 <b>13,000</b>원이에요.
        </Typography>
        <InputContainer>
          <Input type='text' value={price} onChange={handleChange} placeholder='13,000' />
          <Text>원</Text>
        </InputContainer>
        <HelperText>
          가격 측정 기준은 해양 수산부의 수산물이력제를 기반으로
          <br /> 측정 되었습니다.
        </HelperText>
      </Wrap>
      <Footer onClick={handleNext} />
    </>
  );
}

const Wrap = styled.div`
  flex: 1;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  position: relative;

  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid ${color.gray[4]};
  border-radius: 8px;
  padding: 11px 20px;

  background-color: white;
`;

const Input = styled.input`
  font-size: 16px;
  margin-right: 5px;
`;

const Text = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: ${color.gray[9]};

  position: absolute;
  right: 20px;
`;
