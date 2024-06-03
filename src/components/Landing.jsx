import Footer from "./footer/Footer";
import Header from "./header/Header";
import ScrollToTop from "./helpers/ScrollToTop";
import Main from "./main/Main";



function Landing() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Landing;