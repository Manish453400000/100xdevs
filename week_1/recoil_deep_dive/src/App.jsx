import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  notificationsAtom,
  totlaNotificationSelector,
} from "./store/atoms/atoms";
import { todoAtomFamily } from "./store/atoms/todo_atom";

const App = () => {
  return (
    <RecoilRoot>
      <UpdateComponent />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
};

const UpdateComponent = () => {
  const updateTodo = useSetRecoilState(todoAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: 2,
        title: "new Todo",
        description: "fuck off",
      });
    }, 5000);
  }, []);

  return <div></div>;
};

const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return (
    <div>
      <p>{currentTodo.title}</p>
      <p>{currentTodo.description}</p>
    </div>
  );
};

// when to use selector in recoil
// if u know that a state is dependent on another atom/state

const MainApp = () => {
  const [notification, setNotification] = useRecoilState(notificationsAtom);
  const totalNotification = useRecoilValue(totlaNotificationSelector);

  // This is ugly approach
  // useEffect(() => {
  //   //fetch
  //   axios
  //     .get("/api/notification")
  //     .then((res) => {
  //       setNotification(res.data);

  //       console.log(res.data);
  //       console.log(notification);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <button className="btn">Home</button>

      <button className="btn">My Network ({notification.network})</button>
      <button className="btn">Jobs ({notification.jobs})</button>
      <button className="btn">Messaging({notification.message})</button>
      <button className="btn">
        Notification(
        {notification.notification})
      </button>

      <button className="btn">Me({totalNotification})</button>
    </div>
  );
};
export default App;
