import styled from 'styled-components';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  gap: 8px;
  color: #333333;
  border-bottom: 1px solid #dfdfdf;

  > .detail_header-text {
    width: 288px;
    text-align: center;
  }
`;

const DetailCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 350px;
  border: 1px solid red;
`;

const MenuInfoTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
`;

const MenuInfoContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  > .menu_image {
    width: 144px;
    height: 144px;
    background-color: lightgray;
  }

  > .menu_text {
  }
`;

function DetailListPage({ detailData }: any) {
  return (
    <>
      <DetailHeader>
        <ArrowChevron />
        <div className='detail_header-text'>모임 신청하기</div>
      </DetailHeader>
      <DetailCheck>모임 정보를 확인해보세요.</DetailCheck>
      <DetailInfo>
        <MenuInfo>
          <MenuInfoTitle>요리 정보</MenuInfoTitle>
          <MenuInfoContent>
            <div className='menu_image'></div>
            <div>
              <div>자리돔조림</div>
              <div>제주 연안에 서식하는 자리돔을 간장으로 조린 음식</div>
              <div>NN명이 만들었어요.</div>
            </div>
          </MenuInfoContent>
        </MenuInfo>
      </DetailInfo>
    </>
  );
}

export default DetailListPage;
