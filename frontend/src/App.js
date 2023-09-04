import { useState, useEffect  } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate  } from "react-router-dom";
import Chart from "./components/Charts/Chart";
import OrcamentoList from "./pages/Orcamento/List";
import OrcamentoNovo from "./pages/Orcamento/New";
import ItemsList from "./pages/Itens/List";
import CategoriaList from "./pages/Categoria/List";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";

function App() {

  const mobileScreen = useSelector((state) => state.dashboard.mobileView);
  // console.log("🚀 ~ file: App.js:23 ~ App ~ mobileScreen:", mobileScreen)
  
  const [token, setToken] = useState("");
  

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  // Componente para redirecionar da raiz para a rota de índice customizada
  const RedirectToIndex = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      navigate('/sign-in');
    }, [navigate]);
    
    return null;
  };
    
  return (
    <div className="">
    
      
      <BrowserRouter>
          <main class={mobileScreen? "content": "mobile-screen-version"}>
            <Routes>
              <Route index element={<RedirectToIndex />} />
              <Route index path="/sign-in" element={<SignIn />}  />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/items" element={<ItemsList />} />
              <Route path="/category" element={<CategoriaList />} />
              <Route path="/orcamentos" element={<OrcamentoList />} />
              <Route path="/orcamento-novo" element={<OrcamentoNovo />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
          </main>
        </BrowserRouter> :   
  
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
