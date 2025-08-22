import { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Contacto.css";

const Contacto = () => {
  const [status, setStatus] = useState("iniciando"); // iniciando , enviado, error, exito 
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();

 const enviarCorreo = async (data) => {
    try {
      const resp = await fetch("http://localhost:3000/Portafolio/Contacts", { // URL de mi servidor
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!resp.ok) throw new Error("error al enviar"); // si no es un 200 o 201, lanzo error
      alert("Mensaje enviado con exito!");
      reset(); // reseteo el formulario
    } catch (error) {
      console.error(error);
      alert("hubo un problema al enviar el mensaje sapo");
    } finally { // para que no se repita el mensaje de error
      setTimeout(() => setStatus("iniciando"), 3000); // 3 segundos para que se vea el mensaje de exito
    }
  };

  const manejardorSubmit = handleSubmit(enviarCorreo);

  /* Filtra solo letras en el nombre */
  const filtrarLetras = () => {
    const valor = getValues("nombre");
    setValue("nombre", valor.replace(/[^a-zA-Z\s]/g, ""));
  };

  return (
    <section className="Contacto">
      <h2 className="titulo">¡Contáctame!</h2>

      <form className="formulario-contacto" onSubmit={manejardorSubmit}>
        {/* Nombre */}
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            placeholder="nombre"
            className={`input-formulario ${errors.nombre ? "border-error" : ""}`}
            {...register("nombre", {
              required: "El campo nombre es requerido",
              minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
              maxLength: { value: 20, message: "Máximo 20 caracteres" },
              onChange: filtrarLetras,
            })}
          />
          {errors.nombre && <span className="error">{errors.nombre.message}</span>}
        </div>

        {/* Email */}
        <div className="campo">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="correo"
            className={`input-formulario ${errors.email ? "border-error" : ""}`}
            {...register("email", {
              required: "El campo correo es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El correo no es válido",
              },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        {/* Asunto */}
        <div className="campo">
          <label htmlFor="asunto">Asunto</label>
          <input
            id="asunto"
            placeholder="asunto"
            className={`input-formulario ${errors.asunto ? "border-error" : ""}`}
            {...register("asunto", {
              required: "El campo asunto es requerido",
              maxLength: { value: 50, message: "Máximo 50 caracteres" },
            })}
          />
          {errors.asunto && <span className="error">{errors.asunto.message}</span>}
        </div>

        {/* Mensaje */}
        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows="5"
            placeholder="mensaje"
            className={`input-formulario ${errors.mensaje ? "border-error" : ""}`}
            {...register("mensaje", {
              required: "El mensaje no puede estar vacío",
              minLength: { value: 10, message: "El mensaje debe tener al menos 10 caracteres" },
            })}
          ></textarea>
          {errors.mensaje && <span className="error">{errors.mensaje.message}</span>}
        </div>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>

        {status === "success" && <p className="success">¡Mensaje enviado!</p>}
        {status === "error" && <p className="error">Error al enviar. Inténtalo de nuevo.</p>}
      </form>
    </section>
  );
};

export default Contacto;
