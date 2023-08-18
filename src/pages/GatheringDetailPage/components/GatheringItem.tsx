import styled from 'styled-components';

export default function GatheringItem({ list }: any) {
  return (
    <>
      <div>{list.menuname}</div>
    </>
  );
}

const Test = styled.li`
  border: 1px solid blue;
  font-size: 15px;
`;
