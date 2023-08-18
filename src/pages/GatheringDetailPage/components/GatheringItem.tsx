import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function GatheringItem({ list }: any) {
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate(`/gathering/${list.post_idx}`, {
      state: {
        list,
      },
    });
  };
  return (
    <Test onClick={moveDetailPage}>
      <div>{list.menuname}</div>
    </Test>
  );
}

const Test = styled.div`
  border: 1px solid green;
  font-size: 15px;
  cursor: pointer;
`;
