import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, ContentWrapper } from './assets/Styles/AppStyled';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./contex/authContex";

function App() {
  return (
    <AppContainer>
      <ContentWrapper>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Register />}></Route>
              <Route path="/register" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
