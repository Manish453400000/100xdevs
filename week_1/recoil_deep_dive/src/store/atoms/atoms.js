import axios from "axios";
import { atom, selector } from "recoil";

// export const notificationsAtom = atom({
//   key: "notification",
//   default: {
//     network: 0,
//     jobs: 0,
//     message: 0,
//     notification: 0,
//   },
// });

//Asyncronous data query
export const notificationsAtom = atom({
  key: "notification",
  default: selector({
    key: "notificationSelector",
    get: async () => {
      // await new Promise((r) => setTimeout(r, 5000)); // wait for 5s
      const res = await axios.get("/api/notification");
      return res.data;
    },
  }),
});

export const totlaNotificationSelector = selector({
  key: "totalNotification",
  get: ({ get }) => {
    const notifications = get(notificationsAtom);
    return (
      notifications.jobs +
      notifications.message +
      notifications.network +
      notifications.notification
    );
  },
});

//Things to learn
