import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "@/components/ui/button";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashbord from "./pages/admin-view/Dashbord";
import Products from "./pages/admin-view/Products";
import Orders from "./pages/admin-view/Orders";
import Features from "./pages/admin-view/Features";
import ShoppingLayout from "./pages/shopping-view/layout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ChackOutPage from "./pages/shopping-view/checkout";
import ShoppingAccout from "./pages/shopping-view/account";

function App() {
  return (
    <>
      <Routes>
        {/* Parent Layout */}
        <Route path="/auth" element={<AuthLayout />}>
          {/* Child Routes */}
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashbord" element={<AdminDashbord />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ChackOutPage />} />
          <Route path="account" element={<ShoppingAccout />} />
        </Route>
        <Route path="*" />
      </Routes>
    </>
  );
}

export default App;
