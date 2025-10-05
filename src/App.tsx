import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { NewOfferStepper } from "./pages/NewOfferRouting.tsx";
import { MyOffers } from "./pages/MyOffers.tsx";
import { NewOfferProvider } from "./context/NewOffer/NewOfferProvider.tsx";

function App() {
  return (
    <>
      <Header />
      <NewOfferProvider>
        <main className="flex-1">
          <Routes>
            <Route path="/newOffer" element={<NewOfferStepper />} />
            <Route path="/newOffer/:id" element={<NewOfferStepper />} />
            <Route path="/myOffers" element={<MyOffers />} />

            <Route
              path="/myOffers/*"
              element={<Navigate to="/myOffers" replace />}
            />

            <Route path="*" element={<Navigate to="/newOffer" replace />} />
          </Routes>
        </main>
      </NewOfferProvider>
    </>
  );
}

export default App;
