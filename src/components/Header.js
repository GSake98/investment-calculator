export default function Header({ title, icon }) {
  return (
    <div>
      <header id="header">
        <img src={icon} alt="home-page-icon" />
        <h1>{title}</h1>
      </header>
    </div>
  );
}
