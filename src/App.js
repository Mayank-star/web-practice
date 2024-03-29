import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Counter from "./features/counter/Counter";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import Details from "./components/Details";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import AuthProvider from "./components/Auth";
import Login from "./components/Login";
import RequiredAuth from "./components/RequiredAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* scripttv-ckt.png */}
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="product" element={<Product />}>
            <Route index element={<FeaturedProduct />} />
            <Route path="feature" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProduct />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<Details />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="profile" element={<RequiredAuth><Profile /></RequiredAuth>} />
          <Route path="login" element={<Login/>} />
        </Routes>
        {/* <Counter/> */}
      </AuthProvider>
    </>
  );
};

export default App;
