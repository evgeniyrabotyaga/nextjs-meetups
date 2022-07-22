import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <h1>NextJS Meetups</h1>
        <ul>
          <li>
            <Link href="/">
              <a className={currentPath === "/" ? "active-link" : ""}>
                All Meetups
              </a>
            </Link>
          </li>
          <li>
            <Link href="/new-meetup">
              <a className={currentPath === "/new-meetup" ? "active-link" : ""}>
                Add New Meetup
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
