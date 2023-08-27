import React from 'react';
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import styled from 'styled-components';

interface HelperTextProps {
  children: React.ReactNode;
}
export default function HelperText({ children }: HelperTextProps) {
  return (
    <Caption>
      <InfoIcon />
      <Typography variant='caption' size={1} color={color.gray[5]} ml={4}>
        {children}
      </Typography>
    </Caption>
  );
}
const Caption = styled.div`
  display: flex;
`;
