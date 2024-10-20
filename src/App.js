import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, ContentWrapper } from './assets/Styles/AppStyled';
import Presentation from "./pages/Presentation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./contex/authContex";
import Home from "./pages/Home";

function App() {
  return (
    <AppContainer>
      <ContentWrapper>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Presentation />}></Route>
              <Route path="/register" element={<Register />}></Route>Home
              <Route path="/login" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
