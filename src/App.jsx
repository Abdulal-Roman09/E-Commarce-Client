import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import Products from "./pages/admin-view/Products";
import Orders from "./pages/admin-view/Orders";
import Features from "./pages/admin-view/Features";
import ShoppingLayout from "./pages/shopping-view/layout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import CheckoutPage from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import UnAuthPage from "./pages/unauth-page";
import AdminDashbord from "./pages/admin-view/Dashbord";
import NotFoundPage from "./pages/not-found/not-found";
import CheckAuth from "./components/common/chack-auth";

function App() {
  const isAuthenticated = false;
  const user = null;

  return (
    <>
      <Routes>
        {/* AUTH ROUTES */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashbord />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>

        {/* SHOPPING ROUTES */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>

        {/* UnAuth Page */}
        <Route path="/unauth-page" element={<UnAuthPage />} />

        {/* Catch all → Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
