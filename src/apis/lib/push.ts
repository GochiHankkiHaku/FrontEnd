import axios from 'axios';

const SERVICE_APP_ADMIN_KEY = '8b451569492047435124d662b5d1c2a0'; // Replace this with your admin key

export async function registerPushNotification(token: string) {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://kapi.kakao.com/v2/push/register',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `KakaoAK ${SERVICE_APP_ADMIN_KEY}`,
      },
      data: `uuid=1234&device_id=0f365b39-c33d-39be-bdfc-74aaf5534470&push_type=fcm&push_token=${token}`,
      // data: `uuid=1234&device_id=0f365b39-c33d-39be-bdfc-74aaf5534470&push_type=fcm&push_token=${encodeURIComponent(token)}`,
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function sendPushNotification() {
  try {
    const uuids = JSON.stringify(['1234', '5678']);
    const pushMessage = JSON.stringify({
      for_apns: {
        badge: 3,
        sound: 'sound_file',
        push_alert: true,
        message: 'Kildong Hong and 2 others commented.',
        custom_field: {
          article_id: '111',
          comment_id: '222',
        },
      },
      for_fcm: {
        collapse: 'articleId123',
        delay_while_idle: false,
        custom_field: {
          article_id: 111,
          comment_id: 222,
          comment_preview: 'Accept my comment!...(Omitted)',
        },
      },
    });

    const response = await axios({
      method: 'POST',
      url: 'https://kapi.kakao.com/v2/push/send',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `KakaoAK ${SERVICE_APP_ADMIN_KEY}`,
      },
      data: `uuids=${encodeURIComponent(uuids)}&push_message=${encodeURIComponent(pushMessage)}`,
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

sendPushNotification();
