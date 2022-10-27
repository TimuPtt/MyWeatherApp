import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className='flex justify-between'>
      <Link to='/'>Weather</Link>
    </nav>
  );
}
