import kit from "../../public/icons/kit-logo.png";
import Image from "next/Image";
import updatebarStyles from "../../styles/components/Updatebar.module.scss";

function UpdateBar() {
  return (
    <>
      <div className={updatebarStyles.welcomeContainer}>
        <div className={updatebarStyles.contentBox}>
          We are back and we are so happy to be back.
          <br />
          We are now raising our pre-seed raise, we would never have been able
          to
          <br />
          do this without your continued support. Thank you!
        </div>
      </div>
    </>
  );
}

export default UpdateBar;
