import navbarstyles from "../../styles/components/Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <div className={navbarstyles.topRow}>
      <div className={navbarstyles.linksContainer}>
        <Link href='/'>
          <a className={navbarstyles.textLogo}>astute</a>
        </Link>

        <div className={navbarstyles.linksContainer}>
          <Link href='/make'>
            <a className={navbarstyles.menuLink}>Make</a>
          </Link>

          <Link href='/keep'>
            <a className={navbarstyles.menuLink}>Keep</a>
          </Link>

          <Link href='/grow'>
            <a className={navbarstyles.menuLink}>Grow</a>
          </Link>

          <div className={navbarstyles.button}>
            <Link href='/money'>
              <a className={navbarstyles.buttonLink}> Your Money</a>
            </Link>
          </div>
        </div>

        {/*the hover states */}
        <h1 className={navbarstyles.hoverContainerMake}>hover state </h1>
      </div>
    </div>
  );
}

export default Navbar;
