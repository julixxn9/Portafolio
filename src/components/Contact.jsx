import { Link, useNavigate } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {   

    const nav = useNavigate();

    const handler = () => {
        nav('/')
        console.log("viajando")
    }

  return (
    <div className="contact-container">
        <h2>Contact</h2>
        <Link to="/about" >Sobre mi</Link>
        <img src="https://placehold.co/200" onClick={handler} alt="" />
    </div>
  )
}

export default Contact