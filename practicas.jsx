import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Contact from "./Contact.jsx";
// import Numero from "./Numero.jsx";

// function App() {
//   return (
//     <BrowserRouter basename="/Portafolio/" >
//         <header>
//             <h1>
//                 Welcome to my app
//             </h1>
//             <nav>
//                 <Link to="/" >home</Link>
//                 <Link to="/about" >about</Link>
//                 <Link to="/contact" >contact</Link>
//                 <Link to="/numeros/1">Numero 1</Link>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<p>Lorem ipsum dolor sit amet.</p>} />
//                 <Route path="/about" element={<h2>About me</h2>} />
//                 <Route path="/contact" element={<Contact/>} />
//                 <Route path="/numeros/:num" element={<Numero/>}/>
//                 <Route path="/numeros/:num/:nombre" element={<Numero/>}/>
//                 {/* el /:num son los parámetros de la ruta */}
//                 <Route path="*" element={<p>error del cliente 404</p>} />
//             </Routes>
//         </header>
//     </BrowserRouter>
//   )
// }

// export default App