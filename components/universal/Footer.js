import footerstyles from '../../styles/components/Footer.module.scss';
import Link from 'next/link';


const Footer = () => { 
    return (
        <div className={footerstyles.footerContainer}>

            <div className={footerstyles.footerContentContainer}>

<div className={footerstyles.footerTopRow}>
<div className={footerstyles.footerColumnOne}>
                <span className={footerstyles.textLogo}>
                    <Link href='/'>
                    <a>
                    astute
                    </a>
                    </Link>
                    </span>
                    <span className={footerstyles.footerLink}>
                    <Link href='/about'>
                    <a>
                 About
                    </a>
                    </Link>
                    </span>
                    <span className={footerstyles.footerLink}>
                    <Link href='/career'>
                    <a>
                 Careers
                    </a>
                    </Link>
                    </span>
                    <span className={footerstyles.footerLink}>
                    <Link href='/media'>
                    <a>
                 Media
                    </a>
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
                    <a>
                Submit Article
                    </a>
                    </Link>
                    </span>

                    <span className={footerstyles.footerLink}>
                    <Link href='/contact'>
                    <a>
                Contact Us
                    </a>
                    </Link>
                    </span>
            </div>



<div className={footerstyles.footerColumnThree}>
<div className={footerstyles.headingBox}>
<span className={footerstyles.footerHeadings}>
    Account
</span>
</div>

<span className={footerstyles.footerLink}>
                    <Link href='/account'>
                    <a>
              Manage Your Account
                    </a>
                    </Link>
                    </span>



<span className={footerstyles.footerLink}>
                    <Link href='/pricing'>
                    <a>
                Pricing
                    </a>
                    </Link>
                    </span>


</div>



</div>


<div className={footerstyles.rowSpace}></div>

<div className={footerstyles.footerSecondRow}>
<div className={footerstyles.footerColumnOne}>
    <div class={footerstyles.headingBox}>
        <span className={footerstyles.footerHeadings}>
            Sitemap
        </span>

    </div>


    <span className={footerstyles.footerLink}>
                    <Link href='/make'>
                    <a>
                Making
                    </a>
                    </Link>
                    </span>

                    <span className={footerstyles.footerLink}>
                    <Link href='/keep'>
                    <a>
                Keep
                    </a>
                    </Link>
                    </span>

                    <span className={footerstyles.footerLink}>
                    <Link href='/grow'>
                    <a>
                Grow
                    </a>
                    </Link>
                    </span>

                    <span className={footerstyles.footerLink}>
                    <Link href='/money'>
                    <a>
                Your Money
                    </a>
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
                    <a>
                Submit Issues
                    </a>
                    </Link>
                    </span>

                    <span className={footerstyles.footerLink}>
                    <Link href='/support'>
                    <a>
               Get Support
                    </a>
                    </Link>
                    </span>


     </div>


<div className={footerstyles.footerColumnThree}>
    <div className={footerstyles.headingBox}>
        <span className={footerstyles.footerHeadings}>
            Legal
        </span>
    </div>

    <span className={footerstyles.footerLink}>
                    <Link href='/privacy'>
                    <a>
                Privacy Policy
                    </a>
                    </Link>
                    </span>

                    <span className={footerstyles.footerLink}>
                    <Link href='/disclaimer'>
                    <a>
              Disclaimer
                    </a>
                    </Link>
                    </span>

                    <span className={footerstyles.footerLink}>
                    <Link href='/advisor'>
                    <a>
              Financial Advisory
                    </a>
                    </Link>
                    </span>



</div>



</div>

<div className={footerstyles.rowSpace}></div>

<div className={footerstyles.line}></div>

<div className={footerstyles.bottomRow}>
<span className={footerstyles.footerlegals}> Copyright 2022. All rights reserved.</span>
<span className={footerstyles.footerlegals}> South Africa</span>

</div>

            
            </div>
            
        </div>

        
    )
}

export default Footer
