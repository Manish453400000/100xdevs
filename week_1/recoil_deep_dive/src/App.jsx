import React from "react";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "./store/atoms/atoms";

const App = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
};

// when to use selector in recoil
// if u know that a state is dependent on another atom/state

const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  return (
    <div>
      <button className="btn">Home</button>

      <button className="btn">
        My Network (
        {networkNotificationCount >= 99 ? "99+" : networkNotificationCount})
      </button>
      <button className="btn">
        Jobs ({jobsNotificationCount >= 99 ? "99+" : jobsNotificationCount})
      </button>
      <button className="btn">
        Messaging(
        {messageCount >= 99 ? "99+" : messageCount})
      </button>
      <button className="btn">
        Notification(
        {notificationCount >= 99 ? "99+" : notificationCount})
      </button>

      <button className="btn">Me</button>
    </div>
  );
};
export default App;
