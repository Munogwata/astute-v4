import navbarstyles from "../../styles/components/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={navbarstyles.navContainer}>
        <div className={navbarstyles.linksContainer}>
          <div>
            <Link href='/'>
              <a>astute</a>
            </Link>
            <button
              onClick={function myFunction() {
                var x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                  x.style.display = "none";
                } else {
                  x.style.display = "block";
                }
              }}
            >
              close
            </button>

            <div id='myLinks'>
              <a>Test 2</a>
              <a>Test 3</a>
              <a>Test 3</a>
            </div>
          </div>

          {/* desktop menu*/}

          <div className={navbarstyles.linkBox}>
            <span>
              <Link href='/'>
                <a
                  className={
                    router.pathname == "/"
                      ? navbarstyles.activeLogoLink
                      : router.pathname == "/make"
                      ? navbarstyles.makeLogoLink
                      : router.pathname == "/keep"
                      ? navbarstyles.keepLogoLink
                      : router.pathname == "/grow"
                      ? navbarstyles.growLogoLink
                      : router.pathname == "/money"
                      ? navbarstyles.moneyLogoLink
                      : navbarstyles.deactiveLogoLink
                  }
                >
                  astute
                </a>
              </Link>
            </span>

            <div className={navbarstyles.linkAlignment}>
              <span>
                <ul className={navbarstyles.makeFullLinks}>
                  <li>
                    <Link href='/make'>
                      <a
                        className={
                          router.pathname == "/make"
                            ? navbarstyles.makeMenuLink
                            : navbarstyles.makeDeactivateLink
                        }
                      >
                        Make
                      </a>
                    </Link>

                    <span className={navbarstyles.sublinkBox}>
                      <ul className={navbarstyles.makeSublinks}>
                        <span className={navbarstyles.test3}>
                          <li className={navbarstyles.test}>business</li>
                          <li>business</li>
                          <li>business</li>
                        </span>
                      </ul>
                    </span>
                  </li>
                </ul>
              </span>

              <span>
                <ul className={navbarstyles.keepFullLinks}>
                  <li>
                    <Link href='/keep'>
                      <a
                        className={
                          router.pathname == "/keep"
                            ? navbarstyles.keepMenuLink
                            : navbarstyles.deactiveMenuLink
                        }
                      >
                        Keep
                      </a>
                    </Link>
                    <span className={navbarstyles.sublinkBox}>
                      <ul className={navbarstyles.keepSublinks}>
                        <li>link 1</li>
                        <li>link 2</li>
                        <li>link 3</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </span>

              <span>
                <ul className={navbarstyles.growFullLinks}>
                  <li>
                    <Link href='/grow'>
                      <a
                        className={
                          router.pathname == "/grow"
                            ? navbarstyles.growMenuLink
                            : navbarstyles.deactiveMenuLink
                        }
                      >
                        Grow
                      </a>
                    </Link>

                    <ul className={navbarstyles.growSublinks}>
                      <li>Link 1</li>
                      <li>Link 1</li>

                      <li>Link 1</li>
                    </ul>
                  </li>
                </ul>
              </span>

              <span>
                <ul className={navbarstyles.moneyFullLinks}>
                  <li>
                    <Link href='/money'>
                      <a>
                        <button
                          className={
                            router.pathname == "/money"
                              ? navbarstyles.activeGrowButton
                              : navbarstyles.inActiveGrowButton
                          }
                        >
                          Money
                        </button>
                      </a>
                    </Link>

                    <ul className={navbarstyles.moneySublinks}>
                      <li>link 2</li>
                      <li>link 2</li>
                      <li>link 2</li>
                      <li>link 2</li>
                    </ul>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
