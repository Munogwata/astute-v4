import footerstyles from '../../styles/components/Footer.module.scss';
import Link from 'next/link';


const Footer = () => { 
    return (
        <div className={footerstyles.footerContainer}>

            <div className={footerstyles.footerContentContainer}>
            <div className={footerstyles.footerColumnOne}>
                <span className={footerstyles.textLogo}>
                    <Link href='/'>
                    <a>
                    astute
                    </a>
                    </Link>
                    </span>
                    <span className={footerstyles.textLogo}>
                    <Link href='/about'>
                    <a>
                 About
                    </a>
                    </Link>
                    </span>
              
            </div>
            
            
            </div>
            
        </div>
    )
}

export default Footer
