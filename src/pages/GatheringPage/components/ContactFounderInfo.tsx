import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import { GatheringTagArea, GatheringPopularityTag } from 'pages/SearchPage/components/Infowindow';
import { HostDescription } from 'pages/SearchPage/components/FounderInfo';

export default function ContactFounderInfo({
  founder,
  address,
  great,
  good,
  contact,
  contactNum,
  postStatus,
}: any) {
  const navigate = useNavigate();
  const user_idx = localStorage.getItem('user_idx');

  const moveReviewPage = () => {
    navigate(`/review`);
  };

  return (
    <HostInfoArea>
      <HostInfoDescArea>
        <User1 />
        <HostDescription>
          {user_idx === '1' ? (
            <Typography variant='paragraph' size={3} color={color.gray[9]}>
              {founder} 외 <ContactNum>{contactNum}명</ContactNum>
            </Typography>
          ) : (
            <Typography variant='paragraph' size={3} color={color.gray[9]}>
              {founder}
            </Typography>
          )}
          {user_idx === '1' ? (
            <PaymentCheckTagArea>
              <CheckTag kakao={'kakao'}>
                <Typography variant='caption' size={1} color={color.gray[9]}>
                  카카오 pay 결제
                </Typography>
              </CheckTag>
              <CheckTag>
                <Typography variant='caption' size={1} color={color.gray[9]}>
                  가상계좌 입금
                </Typography>
              </CheckTag>
            </PaymentCheckTagArea>
          ) : (
            <Typography variant='caption' size={2} color={color.gray[6]}>
              {address}
            </Typography>
          )}
          {user_idx === '2' && (
            <GatheringTagArea gap={4}>
              <GatheringPopularityTag>
                <Typography variant='caption' size={4} color={color.main[1]}>
                  최고에요 {great}
                </Typography>
              </GatheringPopularityTag>
              <GatheringPopularityTag>
                <Typography variant='caption' size={4} color={color.main[2]}>
                  좋아요 {good}
                </Typography>
              </GatheringPopularityTag>
            </GatheringTagArea>
          )}
        </HostDescription>
      </HostInfoDescArea>
      {postStatus === 'N' ? (
        <ContactButton>
          <Typography variant='paragraph' size={4} color={color.main[1]}>
            {contact} 으로 연락 하기
          </Typography>
        </ContactButton>
      ) : (
        <ReviewButton onClick={moveReviewPage}>
          <Typography variant='paragraph' size={4} color={color.white}>
            리뷰 작성하기
          </Typography>
        </ReviewButton>
      )}
    </HostInfoArea>
  );
}

const HostInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${color.gray[4]};
`;

const HostInfoDescArea = styled.div`
  display: flex;
  column-gap: 12px;
`;

const ContactNum = styled.span`
  color: ${color.main[1]};
`;

const PaymentCheckTagArea = styled.div`
  display: flex;
  column-gap: 4px;
`;

const CheckTag = styled.div<{ kakao?: string }>`
  padding: 2px 12px;
  border-radius: 19px;
  background-color: ${({ kakao }) => (kakao ? color.main[7] : color.gray[3])};
`;

const ContactButton = styled.button`
  width: 100%;
  padding: 10.5px 0;
  border-radius: 4px;
  border: 1px solid ${color.main[1]};
`;

const ReviewButton = styled.button`
  width: 100%;
  padding: 10.5px 0;
  border-radius: 4px;
  background-color: ${color.main[1]};
`;