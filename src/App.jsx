import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<ComingSoon title="견종 둘러보기" />} />
          <Route path="/match" element={<ComingSoon title="나와 맞는 강아지 찾기" />} />
          <Route path="/photo" element={<ComingSoon title="사진으로 견종 알아보기" />} />
          <Route path="/about" element={<ComingSoon title="만든 과정" />} />
          <Route path="*" element={<ComingSoon title="페이지를 찾을 수 없어요" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
