import styled from 'styled-components';
import { ReactComponent as XIcon } from 'assets/icons/xmark.svg';
import { Typography } from 'components/Typography';

export default function RecheckPage() {
  return (
    <Wrap>
      <Header>
        <CancelRow>
          <XIcon />
        </CancelRow>
        <Typography variant='title' size={2} mt={20} mb={20}>
          지금까지 작성한 내용이에요.
        </Typography>
        <Typography variant='title' size={5}>
          장소
        </Typography>
      </Header>
    </Wrap>
  );
}

const Wrap = styled.div``;
const Header = styled.div`
  padding: 0 20px;
`;

const CancelRow = styled.div`
  background-color: yellow;
  margin: 12px 0;
`;
