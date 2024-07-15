import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <Link href="/purchased"><li>Purchased</li></Link>
        <Link href="/wishlist"><li>Wishlist</li></Link>
      </ul>
    </nav>
  )
}
