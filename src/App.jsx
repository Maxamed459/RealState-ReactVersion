import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PropertyListing from "./pages/PropertyListing";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/PropertyListing" element={<PropertyListing />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </>
  )
}

export default App;