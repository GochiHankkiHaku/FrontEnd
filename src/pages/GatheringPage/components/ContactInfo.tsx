import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import { ReactComponent as User4 } from 'assets/icons/user4.svg';
import {
  GatheringTagArea,
  GatheringPopularityTag,
} from 'pages/SearchPage/components/MarkerInfoWindow';
import { HostDescription } from 'pages/SearchPage/components/FounderInfo';
import { ContactInfoProps } from '../utils/gatheringPage.type';

export default function ContactInfo({
  founder,
  participant,
  address,
  great,
  good,
  contact,
  contactNum,
  postStatus,
  isReviewWritten,
  onMoveReviewPage,
  matchingStatus,
}: ContactInfoProps) {
  const user_idx = localStorage.getItem('user_idx');

  return (
    <>
      {matchingStatus === 'OK' || matchingStatus === 'HOLDING' || user_idx === '2' ? (
        <HostInfoArea border={'solid'}>
          <HostInfoDescArea>
            <User1 />
            <HostDescription>
              {user_idx === '1' ? (
                <Typography variant='paragraph' size={3} color={color.gray[9]}>
                  {participant} 외 <ContactNum>{contactNum}명</ContactNum>
                </Typography>
              ) : (
                <Typography variant='paragraph' size={3} color={color.gray[9]}>
                  {founder}
                </Typography>
              )}
              {user_idx === '2' && (
                <>
                  <Typography variant='caption' size={2} color={color.gray[6]}>
                    {address}
                  </Typography>
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
                </>
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
            !isReviewWritten && (
              <ReviewButton onClick={onMoveReviewPage}>
                <Typography variant='paragraph' size={4} color={color.white}>
                  리뷰 작성하기
                </Typography>
              </ReviewButton>
            )
          )}
        </HostInfoArea>
      ) : (
        <HostInfoArea border={'dashed'}>
          <HostInfoDescArea>
            <User4 />
            <HostDescription>
              <Typography variant='paragraph' size={3} color={color.gray[9]}>
                새로운 참가자와의
                <br />
                만남을 기다려보세요.
              </Typography>
            </HostDescription>
          </HostInfoDescArea>
        </HostInfoArea>
      )}
    </>
  );
}

const HostInfoArea = styled.div<{ border: string }>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px ${({ border }) => (border === 'solid' ? 'solid' : 'dashed')} ${color.gray[4]};
`;

const HostInfoDescArea = styled.div`
  display: flex;
  column-gap: 12px;
`;

const ContactNum = styled.span`
  color: ${color.main[1]};
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
