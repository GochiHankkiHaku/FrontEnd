import styled from 'styled-components/macro';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { useEffect, useState } from 'react';
import { MenuApi } from 'apis/lib/menu';
import MenuItem from './components/MenuItem';
import Search from './components/Search';
import Footer from './components/Footer';
import { usePage } from './hooks/usePage';
export const menus = [
  {
    idx: 1,
    name: '구살국(성게국)',
    content: '옛 제주에서 귀한 손님을 위해 대접한 음식',
    item: null,
    img: 'https://hibit2bucket.s3.ap-northeast-2.amazonaws.com/m_%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%A6%E1%84%80%E1%85%AE%E1%86%A8.png',
    cost: 13000,
  },
  {
    idx: 2,
    name: '자리돔조림',
    content: '제주 연안에서 서식하는 자리돔을 간장으로 조린 음식',
    item: null,
    img: 'https://hibit2bucket.s3.ap-northeast-2.amazonaws.com/m_%E1%84%8C%E1%85%A1%E1%84%85%E1%85%B5%E1%84%83%E1%85%A9%E1%86%B7%E1%84%8C%E1%85%A9%E1%84%85%E1%85%B5%E1%86%B7.png',
    cost: 14000,
  },
  {
    idx: 3,
    name: '한치 물회 덮밥',
    content: '싱싱한 오징어와 된장, 식초를 곁들인 물회',
    item: null,
    img: 'https://hibit2bucket.s3.ap-northeast-2.amazonaws.com/%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%209.png',
    const: 11000,
  },
];

const bgCols = ['#D6F0FF', '#FFF2DE', '#E8FFDD'];

export default function CookPage() {
  const { goNextPage } = usePage();

  const [selectedMenu, setSelectedMenu] = useState('');

  const handleSelectMenu = (name: string) => {
    setSelectedMenu(name);
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        // const res = await MenuApi.getMenu();
      } catch (error) {
        console.log('error :>> ', error);
      }
    };

    getPost();
  }, []);

  return (
    <>
      <Wrap>
        <Search />
        <Typography variant='title' size={3} color={color.gray[9]} mt={24} mb={44}>
          어떤 요리를 할까요?
        </Typography>
        <Container>
          {menus.map((menu) => (
            <MenuItem
              key={menu.idx}
              name={menu.name}
              content={menu.content}
              img={menu.img}
              idx={menu.idx}
              onSelectMenu={() => handleSelectMenu(menu.name)}
              isSelected={selectedMenu === menu.name}
              isAnySelected={selectedMenu !== ''}
            />
          ))}
        </Container>
      </Wrap>
      <Footer
        isDisabled={selectedMenu === ''}
        onClick={() => {
          goNextPage();
          localStorage.setItem('menuname', selectedMenu);
        }}
      />
    </>
  );
}

const Wrap = styled.div`
  position: relative;

  padding: 12px 20px 100px 20px;
  display: flex;
  flex-direction: column;

  flex: 1;
`;

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: auto;
`;
