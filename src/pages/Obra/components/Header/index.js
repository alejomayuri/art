import './Header.css'

export default function ObraHeader({ name, sub }) {
  return (
    <header className="op-header">
      <div>
        <h1>{name}</h1>
        <p>{sub}</p>
      </div>
    </header>
  );
}