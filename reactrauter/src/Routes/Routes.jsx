import { Routes, Route } from "react-router";
// import { Home } from "../Components/Home/Home";
// import { Section } from "../Components/Section/Section";
// import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
// import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../components/Navbar/Navbar";
import {LoginSignUp} from "../components/LoginSignUp";
import {Home} from "../components/Home";
import {Product} from "../components/Product";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route exact path="/loginsignup" element={<LoginSignUp/>} />
        <Route exact path="/product" element={<Product/>} />

        {/* <Route exact path="/bookdetailspage/:id" element={} /> */}
        {/* <Route exact path="*" element={<NotFound/>} /> */}
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
