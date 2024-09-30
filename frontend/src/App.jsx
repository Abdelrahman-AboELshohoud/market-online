import Header from "./components/header/Header.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import { useAppContext } from "./contexts/AppContext.jsx";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <BrowserRouter>
      <Layout>
        {isLoggedIn ? (
          <></>
        ) : (
          <Routes>
            <Route element={<Login />} path="/login" />
          </Routes>
        )}
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CreateProduct />} path="/create-product" />
          {/* <Route element={<Navigate to="/" />} path="*" /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
