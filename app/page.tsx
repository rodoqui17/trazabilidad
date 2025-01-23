"use client";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      {<Authentication />}
    </div>
    // <Router>
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<Authentication />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </main>
    // </Router>
  );
}

// Componentes adicionales
// function About() {
//   return <div>About Page</div>;
// }

// function Contact() {
//   return <div>Contact Page</div>;
// }
