import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, ContentWrapper } from './assets/Styles/AppStyled';
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <AppContainer>
      <ContentWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
