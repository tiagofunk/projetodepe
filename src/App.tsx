import { Header } from "components/Header/Header";
import { Professionals } from "components/Professionals/Professionals";
import { Whatsapp } from "components/Whatsapp/Whatsapp";
import { RoutePaths } from "enums/RoutePaths";
import { About } from "pages/About/About";
import { Donation } from "pages/Donation/Donation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main/Main";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Whatsapp variant={"icon"} />
        <div className="app-body">
          <Routes>
            <Route path={RoutePaths.HOME} element={<Main />} />
            <Route path={RoutePaths.ABOUT} element={<About />} />
            <Route
              path={RoutePaths.PROFESSIONALS}
              element={<Professionals />}
            />
            <Route path={RoutePaths.DONATIONS} element={<Donation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
