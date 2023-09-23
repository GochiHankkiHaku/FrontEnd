import styled from 'styled-components';
import { axiosClient } from 'apis/apiClient';
import { color } from 'styles/constants';
import { Typography } from 'components/Typography';
import { toast } from 'react-toastify';

interface RejectModalProps {
  contactName: string;
  contactNum: number;
  setIsRejectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  matchingIdx: number;
}

export default function RejectModal({
  contactName,
  contactNum,
  setIsRejectModalOpen,
  matchingIdx,
}: RejectModalProps) {
  const rejectGathering = async () => {
    try {
      await axiosClient.put(`matching/no/${matchingIdx}`);
      setIsRejectModalOpen(false);
      document.body.style.removeProperty('overflow');
      toast.error('참가자 거절이 완료 되었어요.');
    } catch (err) {
      console.error(err);
    }
  };

  const closeRejectModal = () => {
    setIsRejectModalOpen(false);
    document.body.style.removeProperty('overflow');
  };

  return (
    <ModalBack>
      <ModalView>
        <AlertText>
          <Typography variant='title' size={5} color={color.black}>
            {contactName} 외 {contactNum}명 그룹의 요청을
            <br />
            거절하시겠습니까?
          </Typography>
        </AlertText>
        <RejectButtonArea>
          <CancelButton onClick={closeRejectModal}>
            <Typography variant='paragraph' size={2} color={color.black}>
              아니요
            </Typography>
          </CancelButton>
          <RejectButton onClick={rejectGathering}>
            <Typography variant='paragraph' size={1} color={color.white}>
              거절할게요
            </Typography>
          </RejectButton>
        </RejectButtonArea>
      </ModalView>
    </ModalBack>
  );
}

const ModalBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  max-width: 330px;
  padding: 30px 12px 16px 12px;
  border-radius: 8px;
  background-color: ${color.white};
  transform: translate(-50%, -50%);
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const AlertText = styled.div`
  text-align: center;
`;

const RejectButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  column-gap: 8px;
`;

const CancelButton = styled.button`
  width: 50%;
  padding: 13.5px 10px;
  border-radius: 4px;
  background-color: ${color.gray[3]};
`;

const RejectButton = styled.button`
  width: 50%;
  padding: 13.5px 10px;
  border-radius: 4px;
  background-color: ${color.main[1]};
`;
