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
</div>

           
            
            
            </div>
            
        </div>
    )
}

export default Footer
