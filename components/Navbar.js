import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
          <Link href="/skills">
            <a>
              <li>Skills</li>
            </a>
          </Link>
          <Link href="/work">
            <a>
              <li>Work</li>
            </a>
          </Link>
          <Link href="/certificate">
            <a>
              <li>Certificate</li>
            </a>
          </Link>
        </ul>
      </nav>
    </>
  );
}
