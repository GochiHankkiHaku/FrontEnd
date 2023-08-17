import styled from 'styled-components';

export default function GatheringListPage() {
  return (
    <Test>
      <MapHeader>
        <div className='header_title'>모임 정보</div>
      </MapHeader>
    </Test>
  );
}

const Test = styled.div`
  /* border: 1px solid red; */
`;

const MapHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 20px;

  > .header_title {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #333333;
  }
`;
