import { Link } from 'react-router-dom';

export default function ComingSoon({ title }) {
  return (
    <section className="container section">
      <h1>{title}</h1>
      <p>지금 열심히 만들고 있어요. 조금만 기다려 주세요.</p>
      <Link to="/" className="btn btn-outline">홈으로 가기</Link>
    </section>
  );
}
