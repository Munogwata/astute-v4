import Navbar from '../universal/Navbar'
import Footer from '../universal/Footer'

export default function Layout ({ children }) {
    return (
        <div>

            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}