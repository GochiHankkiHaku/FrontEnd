import { MAXWIDTH } from 'common/constants';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export default function BottomNavigation() {
  return (
    <Nav>
      <NavItem to='/home'>
        <img src='/assets/home-icon.png' alt='Home' />
        <span>Home</span>
      </NavItem>
      <NavItem to='/search'>
        <img src='/assets/search-icon.png' alt='Search' />
        <span>Search</span>
      </NavItem>
      <NavItem to='/profile'>
        <img src='/assets/profile-icon.png' alt='Profile' />
        <span>Profile</span>
      </NavItem>
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${MAXWIDTH}px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 10px 0;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #616161;

  &.active {
    color: #2196f3;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
