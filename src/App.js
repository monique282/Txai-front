import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, ContentWrapper } from './assets/Styles/AppStyled';
import Home from "./Pages/Home";

function App() {
  return (
    <AppContainer>
      <ContentWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
