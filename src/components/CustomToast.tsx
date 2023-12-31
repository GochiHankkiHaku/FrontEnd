import React from 'react';
import styled from 'styled-components';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color, radius } from 'styles/constants';

interface CustomToastProps {
  hideProggressBar?: boolean;
}
export default function CustomToast({ hideProggressBar = true }: CustomToastProps) {
  return (
    <Wrap>
      <ToastContainer
        closeButton={false}
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={hideProggressBar}
        theme='dark'
        transition={Slide}
        className={'custom-toast-position'}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  //토스트 커스텀
  /* 테마별 색상 바꾸기 */
  --toastify-color-light: #fff;
  --toastify-color-dark: ${color.gray[8]};
  --toastify-color-info: #3498db;
  --toastify-color-success: #00ae84;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);
  /* 테마별 아이콘 색상 바꾸기 */
  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);
  /* 기본 적용 스타일 바꾸기 */
  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: 'SUIT Variable';
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;

  .Toastify__toast {
    width: 300px;
    border-radius: ${radius[8]}px;
    font-size: 16px;
    font-weight: 500;
  }

  .custom-toast-position {
    /* top: 50px !important; */
    bottom: 80px !important;
  }
`;
