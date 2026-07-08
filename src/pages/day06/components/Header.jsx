import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul className="py-6 border-b text-[18px] flex font-bold space-x-12">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/sub01"}>Sub01</Link>
        </li>
        <li>
          <Link to={"/sub02"}>Sub02</Link>
        </li>
        <li>
          <Link to={"/sub03"}>Sub03</Link>
        </li>
      </ul>
    </header>
  );
}
