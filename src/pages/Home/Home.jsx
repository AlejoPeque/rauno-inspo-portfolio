import Spline from "@splinetool/react-spline";
import "./home.css";

import { FaSquareFull } from "react-icons/fa";

import LiveClockUpdate from "../../components/LiveClockUpdate/LiveClockUpdate";

const Home = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Spline scene="https://prod.spline.design/hYC9yzXXyYHBKKVR/scene.splinecode" />
      </div>

      <div className="hero-header">
        <h1>Artistry and Engineering</h1>
        <h1>Alejo Pequeño</h1>
      </div>

      <div className="home-logo">
        <FaSquareFull size="16px" style={{ color: "#fff" }} />
      </div>

      <div className="live-clock">
        <LiveClockUpdate />
      </div>
    </>
  );
};

export default Home;
