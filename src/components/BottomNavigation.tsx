import { BOTTOM_NAVIGATION_HEIGHT, MAXWIDTH } from 'common/constants';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as MainIcon } from 'assets/icons/main.svg';
import { ReactComponent as MapIcon } from 'assets/icons/map.svg';
import { ReactComponent as PotIcon } from 'assets/icons/pot.svg';
import { color, typograpy } from 'styles/constants';

const staticServerUri = process.env.REACT_APP_PATH || '';

export default function BottomNavigation() {
  return (
    <Nav>
      <NavItem to={staticServerUri + '/main'}>
        {({ isActive }) => (
          <>
            <MainIcon fill={isActive ? color.main[2] : color.gray[3]} />
            <span>메인</span>
          </>
        )}
      </NavItem>
      <NavItem to={staticServerUri + '/map'}>
        {({ isActive }) => (
          <>
            <MapIcon fill={isActive ? color.main[2] : color.gray[3]} />
            <span>탐색</span>
          </>
        )}
      </NavItem>
      <NavItem to={staticServerUri + '/gathering'}>
        {({ isActive }) => (
          <>
            <PotIcon fill={isActive ? color.main[2] : color.gray[3]} />
            <span>모임</span>
          </>
        )}
      </NavItem>
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${MAXWIDTH}px;
  height: ${BOTTOM_NAVIGATION_HEIGHT}px;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid ${color.gray[3]};
  padding: 10px 0;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${color.gray[2]};

  span {
    margin-top: 2px;

    font-size: ${typograpy.paragraph[1].fontSize}px;
    font-weight: ${typograpy.paragraph[1].fontWeight};
    line-height: ${typograpy.paragraph[1].lineHeight}%;
    color: ${color.gray[4]};
  }

  &.active {
    color: ${color.main[2]};

    span {
      color: ${color.main[2]};
    }
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
