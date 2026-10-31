import { Link, NavLink } from 'react-router-dom';

const menu = [
  { to: '/breeds', label: '견종 둘러보기' },
  { to: '/match', label: '나와 맞는 강아지 찾기' },
  { to: '/photo', label: '사진으로 알아보기' },
  { to: '/about', label: '만든 과정' },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span aria-hidden="true">🐾</span> 나와 맞는 강아지
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="nav-list">
            {menu.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
