import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import "./App.css";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/profile/edit");
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          navigate("/profile/progress");
        }}
      >
        Progress
      </button>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
const Edit = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Back
      </button>
    </div>
  );
};
const Progress = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Back
      </button>
    </div>
  );
};
export const Dashboard = () => {
  return <div>wellcome, to dashboard</div>;
};
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/edit" element={<Edit />} />
          <Route path="/profile/progress" element={<Progress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
