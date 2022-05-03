import footerstyles from "../../styles/components/Footer.module.scss";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [astute, setShow] = useState(true);
  const [contact, viewContact] = useState(false);
  const [account, viewAccount] = useState(false);
  const [sitemap, viewSitemap] = useState(false);
  const [helpline, viewHelpline] = useState(false);
  const [legal, viewLegal] = useState(false);

  return (
    <>
      <div className={footerstyles.footerContainer}>
        <div className={footerstyles.footerContentContainer}>
          <div className={footerstyles.footerTopRow}>
            <div className={footerstyles.footerColumnOne}>
              <span className={footerstyles.textLogo}>
                <Link href='/'>
                  <a>astute</a>
                </Link>
              </span>
              <span className={footerstyles.footerLink}>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </span>
              <span className={footerstyles.footerLink}>
                <Link href='/career'>
                  <a>Careers</a>
                </Link>
              </span>
              <span className={footerstyles.footerLink}>
                <Link href='/media'>
                  <a>Media</a>
                </Link>
              </span>
            </div>

            <div className={footerstyles.footerColumnTwo}>
              <div className={footerstyles.headingBox}>
                <span className={footerstyles.footerHeadings}>
                  We want to hear from you
                </span>
              </div>

              <span className={footerstyles.footerLink}>
                <Link href='/submit'>
                  <a>Submit Article</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/contact'>
                  <a>Contact Us</a>
                </Link>
              </span>
            </div>

            <div className={footerstyles.footerColumnThree}>
              <div className={footerstyles.headingBox}>
                <span className={footerstyles.footerHeadings}>Account</span>
              </div>

              <span className={footerstyles.footerLink}>
                <Link href='/account'>
                  <a>Manage Your Account</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/pricing'>
                  <a>Pricing</a>
                </Link>
              </span>
            </div>
          </div>

          <div className={footerstyles.rowSpace}></div>

          <div className={footerstyles.footerSecondRow}>
            <div className={footerstyles.footerColumnOne}>
              <div class={footerstyles.headingBox}>
                <span className={footerstyles.footerHeadings}>Sitemap</span>
              </div>

              <span className={footerstyles.footerLink}>
                <Link href='/make'>
                  <a>Make</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/keep'>
                  <a>Keep</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/grow'>
                  <a>Grow</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/money'>
                  <a>Your Money</a>
                </Link>
              </span>
            </div>

            <div className={footerstyles.footerColumnTwo}>
              <div className={footerstyles.headingBox}>
                <span className={footerstyles.footerHeadings}>
                  We are here to help
                </span>
              </div>
              <span className={footerstyles.footerLink}>
                <Link href='/submit'>
                  <a>Submit Issues</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/support'>
                  <a>Get Support</a>
                </Link>
              </span>
            </div>

            <div className={footerstyles.footerColumnThree}>
              <div className={footerstyles.headingBox}>
                <span className={footerstyles.footerHeadings}>Legal</span>
              </div>

              <span className={footerstyles.footerLink}>
                <Link href='/privacy'>
                  <a>Privacy Policy</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/disclaimer'>
                  <a>Disclaimer</a>
                </Link>
              </span>

              <span className={footerstyles.footerLink}>
                <Link href='/advisor'>
                  <a>Financial Advisory</a>
                </Link>
              </span>
            </div>
          </div>

          <div className={footerstyles.rowSpace}></div>

          <div className={footerstyles.line}></div>

          <div className={footerstyles.mobileFooter}>
            <div className={footerstyles.mobilefooterRow}>
              <Link href='/'>
                <a className={footerstyles.textLogo}>astute</a>
              </Link>

              <button
                className={footerstyles.footerbutton}
                onClick={() => setShow(!astute)}
              >
                <img src={"/icons/add-icon.svg"} />
              </button>
            </div>

            <div className={footerstyles.footerlinksContainer}>
              {astute ? (
                <span className={footerstyles.footerLink}>
                  <Link href='/about'>
                    <a className={footerstyles.footersublinks}>About us</a>
                  </Link>
                  <Link href='/career'>
                    <a className={footerstyles.footersublinks}>Careers</a>
                  </Link>
                  <Link href='/media'>
                    <a className={footerstyles.footersublinks}>Media</a>
                  </Link>
                </span>
              ) : null}
            </div>

            {/* get in touch links */}
            <div className={footerstyles.mobilefooterRow}>
              <span className={footerstyles.footermobileHeading}>
                Get in touch
              </span>

              <button
                className={footerstyles.footerbutton}
                onClick={() => viewContact(!contact)}
              >
                <img src={"/icons/add-icon.svg"} />
              </button>
            </div>

            <div className={footerstyles.footerlinksContainer}>
              {contact ? (
                <span className={footerstyles.footerLink}>
                  <Link href='/submit'>
                    <a className={footerstyles.footersublinks}>
                      Submit Article
                    </a>
                  </Link>
                  <Link href='/contact'>
                    <a className={footerstyles.footersublinks}>Contact us</a>
                  </Link>
                </span>
              ) : null}
            </div>

            {/* account links */}

            <div className={footerstyles.mobilefooterRow}>
              <span className={footerstyles.footermobileHeading}>Account</span>

              <button
                className={footerstyles.footerbutton}
                onClick={() => viewAccount(!account)}
              >
                <img src={"/icons/add-icon.svg"} />
              </button>
            </div>

            <div className={footerstyles.footerlinksContainer}>
              {account ? (
                <span className={footerstyles.footerLink}>
                  <Link href='/account'>
                    <a className={footerstyles.footersublinks}>
                      Manage Your Account
                    </a>
                  </Link>
                  <Link href='/pricing'>
                    <a className={footerstyles.footersublinks}>Pricing</a>
                  </Link>
                </span>
              ) : null}
            </div>

            {/* sitemap links */}

            <div className={footerstyles.mobilefooterRow}>
              <span className={footerstyles.footermobileHeading}>Sitemap</span>

              <button
                className={footerstyles.footerbutton}
                onClick={() => viewSitemap(!sitemap)}
              >
                <img src={"/icons/add-icon.svg"} />
              </button>
            </div>

            <div className={footerstyles.footerlinksContainer}>
              {sitemap ? (
                <span className={footerstyles.footerLink}>
                  <Link href='/make'>
                    <a className={footerstyles.footersublinks}>Make</a>
                  </Link>
                  <Link href='/keep'>
                    <a className={footerstyles.footersublinks}>Keep</a>
                  </Link>
                  <Link href='/grow'>
                    <a className={footerstyles.footersublinks}>Grow</a>
                  </Link>
                  <Link href='/money'>
                    <a className={footerstyles.footersublinks}>Your Money</a>
                  </Link>
                </span>
              ) : null}
            </div>

            {/* helpline links */}

            <div className={footerstyles.mobilefooterRow}>
              <span className={footerstyles.footermobileHeading}>Helpline</span>

              <button
                className={footerstyles.footerbutton}
                onClick={() => viewHelpline(!helpline)}
              >
                <img src={"/icons/add-icon.svg"} />
              </button>
            </div>
            <div className={footerstyles.footerlinksContainer}>
              {helpline ? (
                <span className={footerstyles.footerLink}>
                  <Link href='/make'>
                    <a className={footerstyles.footersublinks}>Submit Issues</a>
                  </Link>
                </span>
              ) : null}
            </div>

            {/* legal links */}

            <div className={footerstyles.mobilefooterRow}>
              <span className={footerstyles.footermobileHeading}>Legal</span>

              <button
                className={footerstyles.footerbutton}
                onClick={() => viewLegal(!legal)}
              >
                <img src={"/icons/add-icon.svg"} />
              </button>
            </div>
            <div className={footerstyles.footerlinksContainer}>
              {legal ? (
                <span className={footerstyles.footerLink}>
                  <Link href='/privacy'>
                    <a className={footerstyles.footersublinks}>
                      Privacy Policy
                    </a>
                  </Link>
                  <Link href='/disclaimer'>
                    <a className={footerstyles.footersublinks}>Disclaimer</a>
                  </Link>
                  <Link href='/advisor'>
                    <a className={footerstyles.footersublinks}>
                      Financial Advisory
                    </a>
                  </Link>
                </span>
              ) : null}
            </div>

            {/* this leads outside of the mobile footer container */}
          </div>

          <div className={footerstyles.bottomRow}>
            <span className={footerstyles.footerlegals}>
              {" "}
              Copyright 2022. All rights reserved.
            </span>
            <span className={footerstyles.footerlegals}> South Africa</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
