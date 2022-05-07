import navbarstyles from "../../styles/components/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Navbar() {
  const router = useRouter();
  const [makeHover, viewMakeSublinks] = useState(false);
  const [keepHover, viewKeepSublinks] = useState(false);
  const [growHover, viewGrowSublinks] = useState(false);
  const [moneyHover, viewMoneySublinks] = useState(false);

  return (
    <>
      <div className={navbarstyles.topRow}>
        <div className={navbarstyles.linksContainer}>
          {/*insert links */}
          <Link href='/'>
            <a
              className={
                router.pathname == "/"
                  ? navbarstyles.homeLink
                  : navbarstyles.textLogo
              }
            >
              astute
            </a>
          </Link>

          <div className={navbarstyles.linksRow}>
            {/*Make links  */}
            <span>
              <Link href='/make'>
                <a
                  className={
                    router.pathname == "/make"
                      ? navbarstyles.makeLink
                      : navbarstyles.menuMakeLink
                  }
                >
                  <span>Make</span>
                </a>
              </Link>

              <span>
                <button onClick={() => viewMakeSublinks(!makeHover)}>+</button>
              </span>
            </span>

            <Link href='/keep'>
              <a
                className={
                  router.pathname == "/keep"
                    ? navbarstyles.keepLink
                    : navbarstyles.menuKeepLink
                }
              >
                Keep
              </a>
            </Link>

            <Link href='/grow'>
              <a
                className={
                  router.pathname == "/grow"
                    ? navbarstyles.growLink
                    : navbarstyles.menuGrowLink
                }
              >
                Grow
              </a>
            </Link>

            <div>
              <Link href='/money'>
                <a
                  className={
                    router.pathname == "/money"
                      ? navbarstyles.activeButton
                      : navbarstyles.button
                  }
                >
                  {" "}
                  Your Money
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* this is the second row */}

      {makeHover ? (
        <div className={navbarstyles.secondRow}>
          <div className={navbarstyles.linksContainer}>
            <div className={navbarstyles.textLogoHidden}>astute</div>
            <h1> test content</h1>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
