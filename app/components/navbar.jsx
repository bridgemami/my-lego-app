import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <h1 className="heading1">My Lego App</h1>
      </Link>
    </nav>
  );
}
