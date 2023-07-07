import styled from 'styled-components';
import ProgressBar from './components/ProgressBar';
import Back from './components/Back';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { PostApi } from 'apis/lib/post';
import CustomToast from 'components/CustomToast';
import { toast } from 'react-toastify';

const formatPrice = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export default function CostPage() {
  const notify = () => {
    toast.success('모임이 생성되었습니다 !', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const navigate = useNavigate();

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

    const res = await PostApi.write(date2, time, Number(number), menuname, Number(money));
    navigate(staticServerUri + '/main');
    console.log('res :>> ', res);

    localStorage.setItem('success', 'true');
  };

  return (
    <Wrap>
      <ProgressBar currentStep={4} />
      <Back page='/onboarding/menu' text='요리' />
      <Container>
        <Typography variant='title' size={3} color={color.gray[9]} mb={3}>
          얼마로 할까요?
        </Typography>
        <Typography variant='paragraph' size={6} color={color.gray[6]}>
          구살국(성게국)의 평균 가격은 1인당 13,000원이에요.
        </Typography>
        <InputContainer>
          <Input type='text' value={price} onChange={handleChange} placeholder='Enter price' />
          <Text>원</Text>
        </InputContainer>
      </Container>
      <Button col='white' bgCol={color.main[2]} onClick={handleNext}>
        다음으로
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;

  height: 100%;
  /* background-color: pink; */
`;
const Container = styled.div`
  /* background-color: red; */
  flex: 1;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const InputContainer = styled.div`
  margin-top: 30px;
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

const Currency = styled.span`
  font-size: 16px;
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
