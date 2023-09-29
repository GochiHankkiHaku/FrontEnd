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
import { axiosClient } from 'apis/apiClient';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { PATH } from 'common/constants';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ContactInfo({
  matchingDetail,
  postStatus,
  getMatchingDetail,
}: ContactInfoProps) {
  const user_idx = localStorage.getItem('user_idx');
  const matchingUser = matchingDetail.matchingUsers;
  const { post_idx } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const acceptGatheringHandler = async () => {
    try {
      await axiosClient.put(`matching/ok/${matchingUser[0]?.matchingIndex}`);
      if (getMatchingDetail) {
        getMatchingDetail();
      }
      toast.success('모임을 수락했습니다. 참가자에게 연락해 보세요.');
    } catch (err) {
      console.error(err);
    }
  };

  const moveReviewPage = () => {
    navigate(`/${PATH.review}`, {
      state: {
        postIdx: post_idx,
        matchingDetail: matchingDetail,
      },
    });
  };

  return (
    <>
      {matchingUser[0]?.status === 'OK' || matchingUser[0]?.status === 'HOLDING' ? (
        <HostInfoArea border={'solid'}>
          <HostInfoDescArea>
            <User1 />
            <HostDescription>
              {user_idx === '1' ? (
                <Typography variant='paragraph' size={3} color={color.gray[9]}>
                  {matchingUser[0]?.username} 외 <ContactNum>{matchingUser.length}명</ContactNum>
                </Typography>
              ) : (
                <Typography variant='paragraph' size={3} color={color.gray[9]}>
                  {matchingDetail.writer}
                </Typography>
              )}
              {user_idx === '2' ||
                (location.pathname === '/review' && (
                  <>
                    <Typography variant='caption' size={2} color={color.gray[6]}>
                      {matchingDetail.address}
                    </Typography>
                    <GatheringTagArea gap={4}>
                      <GatheringPopularityTag>
                        <Typography variant='caption' size={4} color={color.main[1]}>
                          최고에요 {matchingDetail.great}
                        </Typography>
                      </GatheringPopularityTag>
                      <GatheringPopularityTag>
                        <Typography variant='caption' size={4} color={color.main[2]}>
                          좋아요 {matchingDetail.good}
                        </Typography>
                      </GatheringPopularityTag>
                    </GatheringTagArea>
                  </>
                ))}
            </HostDescription>
          </HostInfoDescArea>
          {postStatus === 'N' ? (
            matchingUser[0]?.status === 'HOLDING' && user_idx === '1' ? (
              <ContactButton onClick={acceptGatheringHandler} background={true}>
                <Typography variant='paragraph' size={4} color={color.white}>
                  모임 수락하기
                </Typography>
              </ContactButton>
            ) : (
              <ContactButton background={false}>
                <Typography variant='paragraph' size={4} color={color.main[1]}>
                  {matchingUser[0]?.contactMethod} 으로 연락 하기
                </Typography>
              </ContactButton>
            )
          ) : (
            !matchingUser[0]?.review &&
            location.pathname !== '/review' && (
              <ContactButton onClick={moveReviewPage} background={true}>
                <Typography variant='paragraph' size={4} color={color.white}>
                  리뷰 작성하기
                </Typography>
              </ContactButton>
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

const ContactButton = styled.button<{ background: boolean }>`
  width: 100%;
  padding: 10.5px 0;
  border-radius: 4px;
  border: 1px solid ${color.main[1]};
  background-color: ${({ background }) => (background ? color.main[1] : color.white)};
`;
