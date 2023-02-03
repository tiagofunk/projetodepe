import { Header } from "components/Header/Header";
import { Whatsapp } from "components/Whatsapp/Whatsapp";
import { RoutePaths } from "enums/RoutePaths";
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
        <Routes>
          <Route path={RoutePaths.HOME} element={<Main />} />
          <Route path={RoutePaths.DONATIONS} element={<Donation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
