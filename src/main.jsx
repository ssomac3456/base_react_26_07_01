import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Day07 from "./pages/day07/Day07";
/* import Day06 from "./pages/day06/Day06"; */
/* import Day05 from "./pages/day05/Day05"; */
/* import App from './App.jsx' app.jsx지웠으니까 경로도지워야함 */
/* 임폴트 컨포넌트이름 프롬 경로 */
/* import Day01 from "./pages/day01/Day01"; */
/* import Day02 from "./pages/day02/Day02"; */
/* import Day03 from "./pages/day03/Day03"; */
/* import Music from "./pages/music/Music"; */
/* import Day04 from "./pages/day04/Day04"; */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* </App> 컴포넌트 
    대문자로 시작
    =>함수
    */}
    {/* <Day01 /> */}
    {/* <Day02 /> */}
    {/*  <Day03 />  */}
    {/* <Music /> */}
    {/* <Day04 /> */}
    {/* <Day05 /> */}
    {/* <Day06 /> */}
    <Day07 />
  </StrictMode>,
);
