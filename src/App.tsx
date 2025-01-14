import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router";
import Home from "./components/home";
import Contact from "./components/landing/Contact";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
