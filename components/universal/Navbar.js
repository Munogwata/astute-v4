import navbarstyles from "../../styles/components/Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className={navbarstyles.navContainer}>
        <div className={navbarstyles.linksContainer}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
