import styled from 'styled-components/macro';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { useEffect, useState } from 'react';
import { MenuApi } from 'apis/lib/menu';
import MenuItem from './components/MenuItem';
import Search from './components/Search';
import Footer from './components/Footer';
import { usePage } from './hooks/usePage';
import { useFormActions, useApplyForm } from './store/formStore';
import { Menu } from 'apis/lib/menu/type';

const bgCols = ['#D6F0FF', '#FFF2DE', '#E8FFDD'];

export default function CookPage() {
  const { goNextPage } = usePage();

  const { menu: selectedMenu } = useApplyForm();
  const { setMenu } = useFormActions();
  const [menus, setMenus] = useState<Menu[] | null>(null);

  const handleSelectMenu = (name: Menu) => {
    setMenu(name);
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await MenuApi.getMenu();
        setMenus(res);
        console.log(res);
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
          {menus?.map((menu) => (
            <MenuItem
              key={menu.menu_idx}
              id={menu.menu_idx}
              name={menu.name}
              content={menu.content}
              img={menu.img}
              onSelectMenu={() => handleSelectMenu(menu)}
              isSelected={selectedMenu?.name === menu.name}
              isAnySelected={selectedMenu !== null}
            />
          ))}
        </Container>
      </Wrap>
      <Footer
        isDisabled={selectedMenu == null}
        onClick={() => {
          goNextPage();
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
