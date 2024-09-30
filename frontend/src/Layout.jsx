import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;