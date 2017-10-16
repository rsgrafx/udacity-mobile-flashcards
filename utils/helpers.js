import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = '@mobileflashcards:Notifications';

export function clearLocalNotification() {
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync());
}

function createNotification() {
  return {
    title: 'Quiz Time with Brains++',
    body: 'Do not forget to test your skills today',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

function setDate(days = 1, hours = 20, minutes = 5) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + days);
  tomorrow.setHours(hours);
  tomorrow.setMinutes(minutes);
  return tomorrow;
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: setDate(),
                repeat: 'day'
              }
            );
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
