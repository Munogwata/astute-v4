import Navbar from "../universal/Navbar";
import Footer from "../universal/Footer";
import pagestyles from "../../styles/components/Layout.module.scss";
import ProductBar from "../universal/Products";
import UpdateBar from "../universal/Updatebar";

export default function Layout({ children }) {
  return (
    <>
      <UpdateBar />
      <ProductBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
