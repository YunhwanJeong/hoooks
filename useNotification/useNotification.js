export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
    const fireNotification = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((userChoice) => {
          if (userChoice !== "granted") {
            return;
          }
          new Notification(title, options);
        });
      }
      new Notification(title, options);
    };
    return fireNotification;
  };