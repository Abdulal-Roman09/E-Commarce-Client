import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "@/components/ui/button";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";

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
      </Routes>
    </>
  );
}

export default App;
