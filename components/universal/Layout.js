import Navbar from "../universal/Navbar";
import Footer from "../universal/Footer";
import pagestyles from "../../styles/components/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
