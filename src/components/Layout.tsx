import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import styled from 'styled-components';

const MainContent = styled.div`
  padding-bottom: 60px; // This should be enough space to not have content hidden behind the BottomNavigation
`;

const Layout: React.FC = () => {
  return (
    <Wrap>
      <MainContent>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </MainContent>
      <BottomNavigation />
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  width: 100%;
`;
