import productBarStyles from "../../styles/components/ProductBar.module.scss";
import kit from "../../public/icons/kit-logo.png";
import Image from "next/Image";
import Link from "next/Link";

function ProductBar() {
  return (
    <>
      <div className={productBarStyles.navbarContainer}>
        <div className={productBarStyles.navbarContainerToolkit}>
          <div className={productBarStyles.navbarContainerToolkitContent}>
            <span className={productBarStyles.align}>
              <span className={productBarStyles.logo}>
                <Image src={kit} />
              </span>
              <span className={productBarStyles.toolkitHeading}>
                Personal Toolkit
              </span>
            </span>

            <span className={productBarStyles.productBodyToolkit}>
              Manage your debt and building your savings.
              <span className={productBarStyles.hide}>
                addition text for the purposes of retain alignment
              </span>
            </span>

            <span className={productBarStyles.buttonRowToolkit}>
              <Link href='/'>
                <a>Get Started</a>
              </Link>
            </span>
          </div>
        </div>

        <div className={productBarStyles.navbarContainerWavy}>
          <div className={productBarStyles.navbarContainerWavyContent}>
            <span className={productBarStyles.align}>
              <span className={productBarStyles.logo}>
                <Image src={kit} />
              </span>
              <span className={productBarStyles.wavyHeading}>Wavy</span>
            </span>
            <span className={productBarStyles.productBodyWavy}>
              Artificial intelligence is here to help you find the best
              investments for your financial goals.
            </span>
            <span className={productBarStyles.buttonRowWavy}>
              <Link href='/'>
                <a>Get Started</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBar;
