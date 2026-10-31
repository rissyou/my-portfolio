import { Link } from 'react-router-dom';
import breeds from '../data/breeds.json';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>나와 꼭 맞는 강아지를 찾아보세요</h1>
          <p>견종마다 성격이 달라요. 나와 우리 가족에게 맞는 강아지를 알아보고, 입양을 차근차근 고민해 봐요.</p>
          <div className="hero-actions">
            <Link to="/match" className="btn btn-primary">나와 맞는 강아지 찾기</Link>
            <Link to="/photo" className="btn btn-outline">사진으로 견종 알아보기</Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>견종 둘러보기</h2>
          <Link to="/breeds">더보기 &gt;</Link>
        </div>
        <ul className="card-grid">
          {breeds.map((breed) => (
            <li key={breed.id} className="card">
              <div className="card-photo" aria-hidden="true">🐶</div>
              <div className="card-body">
                <h3>{breed.name}</h3>
                <span className="tag">{breed.size}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container section">
        <div className="notice">
          <h2>보호소 강아지 대부분은 믹스견이에요</h2>
          <p>성격은 품종보다 강아지마다 차이가 더 커요. 직접 만나 보면 나와 맞는 친구를 찾을 수 있어요.</p>
          <a href="https://www.animal.go.kr" target="_blank" rel="noreferrer">
            국가동물보호정보시스템에서 입양 정보 보기 &gt;
          </a>
        </div>
      </section>
    </>
  );
}
