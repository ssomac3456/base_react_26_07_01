//=>리액트 라우터 돔 구글에검색 x
//=>npm구글에 검색 거기서 리액트라우터 돔 검색
//=>패키지.제이슨에서 확인됨

import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/Errorpage";

//=>npm i react-router-dom터미널에서치기
export default function Day06() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sub01" element={<Sub01 />} />
        <Route path="sub02" element={<Sub02 />} />
        <Route path="sub03" element={<Sub03 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
