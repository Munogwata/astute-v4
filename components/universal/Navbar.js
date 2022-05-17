import navbarstyles from "../../styles/components/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/Image";
import kit from "../../public/icons/kit-logo.png";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={navbarstyles.navContainer}>
        <div className={navbarstyles.linksContainer}>
          <div className={navbarstyles.tabletMenuLinksBox}>
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
            <span className={navbarstyles.burgerMenuLinks}>
              <span className={navbarstyles.buttonBurger}>
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
              </span>
              <div id='myLinks'>
                <span className={navbarstyles.burgerMenuLinks}>
                  <ul className={navbarstyles.makeMobileLink}>
                    {/* Mobile - navigation links - Make*/}

                    <li>
                      <Link href='/make'>
                        <a>Make</a>
                      </Link>
                    </li>
                    <ul>
                      <li className={navbarstyles.makeMobileSubLinks}>
                        <Link href='/make'>
                          <a>Career</a>
                        </Link>
                      </li>
                      <li className={navbarstyles.makeMobileSubLinks}>
                        <Link href='/make'>
                          <a>Entrepreneurship</a>
                        </Link>
                      </li>
                    </ul>
                  </ul>

                  <ul className={navbarstyles.keepMobileLink}>
                    {/* Mobile - navigation links - Make*/}

                    <li>
                      <Link href='/keep'>
                        <a>Keep</a>
                      </Link>
                    </li>
                    <ul>
                      <li className={navbarstyles.keepMobileSubLinks}>
                        <Link href='/keep'>
                          <a>Career</a>
                        </Link>
                      </li>
                      <li className={navbarstyles.keepMobileSubLinks}>
                        <Link href='/keep'>
                          <a>Entrepreneurship</a>
                        </Link>
                      </li>
                    </ul>
                  </ul>

                  <ul className={navbarstyles.growMobileLink}>
                    {/* Mobile - navigation links - Make*/}

                    <li>
                      <Link href='/grow'>
                        <a>Grow</a>
                      </Link>
                    </li>
                    <ul>
                      <li className={navbarstyles.growMobileSubLinks}>
                        <Link href='/grow'>
                          <a>Career</a>
                        </Link>
                      </li>
                      <li className={navbarstyles.growMobileSubLinks}>
                        <Link href='/grow'>
                          <a>Entrepreneurship</a>
                        </Link>
                      </li>
                    </ul>
                  </ul>

                  <ul className={navbarstyles.moneyMobileLink}>
                    {/* Mobile - navigation links - Make*/}

                    <li>
                      <Link href='/money'>
                        <a>Your Money</a>
                      </Link>
                    </li>
                    <ul>
                      <li className={navbarstyles.moneyMobileSubLinks}>
                        <Link href='/money'>
                          <a>Career</a>
                        </Link>
                      </li>
                      <li className={navbarstyles.moneyMobileSubLinks}>
                        <Link href='/money'>
                          <a>Entrepreneurship</a>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </span>
              </div>
            </span>
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
                        <span className={navbarstyles.sublinksContainer}>
                          <li className={navbarstyles.hiddenLogo}>astute</li>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.makeSubMenuLink}>
                              <Link href='/make'>
                                <a>Career</a>
                              </Link>
                            </li>

                            <span className={navbarstyles.blogsContainer}>
                              <li className={navbarstyles.makeSubMenuLink}>
                                <Link href='/make'>
                                  <a>Entrepreneurship</a>
                                </Link>
                              </li>
                            </span>
                          </span>
                        </span>
                      </ul>
                    </span>
                  </li>
                </ul>
              </span>

              {/*Keep links*/}
              <span>
                <ul className={navbarstyles.makeFullLinks}>
                  <li>
                    <Link href='/keep'>
                      <a
                        className={
                          router.pathname == "/keep"
                            ? navbarstyles.keepMenuLink
                            : navbarstyles.keepDeactivateLink
                        }
                      >
                        Keep
                      </a>
                    </Link>

                    <span className={navbarstyles.sublinkBox}>
                      <ul className={navbarstyles.makeSublinks}>
                        <span className={navbarstyles.sublinksContainer}>
                          <li className={navbarstyles.hiddenLogo}>astute</li>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.keepSubMenuLink}>
                              <Link href='/keep'>
                                <a>Taxes</a>
                              </Link>
                            </li>
                          </span>
                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.makeSubMenuLink}>
                              <Link href='/keep'>
                                <a>Savings</a>
                              </Link>
                            </li>
                          </span>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.keepSubMenuLink}>
                              <Link href='/keep'>
                                <a>Debt</a>
                              </Link>
                            </li>
                          </span>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.keepSubMenuLink}>
                              <Link href='/keep'>
                                <a>Insurance</a>
                              </Link>
                            </li>
                          </span>
                        </span>
                      </ul>
                    </span>
                  </li>
                </ul>
              </span>

              {/*Grow links*/}
              <span>
                <ul className={navbarstyles.makeFullLinks}>
                  <li>
                    <Link href='/grow'>
                      <a
                        className={
                          router.pathname == "/grow"
                            ? navbarstyles.growMenuLink
                            : navbarstyles.growDeactivateLink
                        }
                      >
                        Grow
                      </a>
                    </Link>

                    <span className={navbarstyles.sublinkBox}>
                      <ul className={navbarstyles.makeSublinks}>
                        <span className={navbarstyles.sublinksContainer}>
                          <li className={navbarstyles.hiddenLogo}>astute</li>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.growSubMenuLink}>
                              <Link href='/keep'>
                                <a>Investing Fundamentals</a>
                              </Link>
                            </li>
                          </span>
                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.growSubMenuLink}>
                              <Link href='/keep'>
                                <a>Market Analysis</a>
                              </Link>
                            </li>
                          </span>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.growSubMenuLink}>
                              <Link href='/keep'>
                                <a>Opinion</a>
                              </Link>
                            </li>
                          </span>
                        </span>
                      </ul>
                    </span>
                  </li>
                </ul>
              </span>

              {/*money links Grow button should be called money button*/}
              <span>
                <ul className={navbarstyles.makeFullLinks}>
                  <li>
                    <Link href='/grow'>
                      <a
                        className={
                          router.pathname == "/money"
                            ? navbarstyles.activeGrowButton
                            : navbarstyles.moneyDeactivateLink
                        }
                      >
                        Your Money
                      </a>
                    </Link>

                    <span className={navbarstyles.sublinkBox}>
                      <ul className={navbarstyles.makeSublinks}>
                        <span className={navbarstyles.sublinksContainer}>
                          <span className={navbarstyles.toolkit}>
                            <li>
                              <span className={navbarstyles.imageBox}>
                                <Image src={kit} />
                              </span>
                              <span className={navbarstyles.moneySubMenuLink}>
                                Toolkit
                              </span>
                            </li>
                          </span>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.moneySubMenuLink}>
                              <Link href='/money'>
                                <a>Personal Finance</a>
                              </Link>
                            </li>
                          </span>
                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.moneySubMenuLink}>
                              <Link href='/money'>
                                <a>DeFi</a>
                              </Link>
                            </li>
                          </span>

                          <span className={navbarstyles.blogsContainer}>
                            <li className={navbarstyles.moneySubMenuLink}>
                              <Link href='/money'>
                                <a>Money Journeys</a>
                              </Link>
                            </li>
                          </span>
                        </span>
                      </ul>
                    </span>
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
