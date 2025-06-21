import "../styles/Contacto.css";
import { useForm } from "react-hook-form";

const Contacto = () => {

    const { handleSubmit, register, formState: { errors }, setValue, getValues
  
  } = useForm();
    const manejardorSubmit = handleSubmit((data) => {
        console.log(errors)

    });

    const filtrarNumeros = (cual) => {
      let valores = ""
      valores = getValues(cual)
      setValue("nombre", valores.replace(/[^0-9]/g,""));
    }
    const filtrarLetras = (cual) => {
      let valores = ""
      valores = getValues(cual)
      setValue("nombre", valores.replace(/[^a-zA-Z]/g,""))
    }

  return (
    <section className="Contacto">
      <h2 className="titulo">Contacto</h2>
      <form className="formulario-contacto" onSubmit={manejardorSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" className={`input-formulario ${errors.nombre ? "border-error" : ""}` } name="nombre" placeholder="nombre"
          {...register("nombre",
            {
                required: {
                    value: true,
                    message: "El campo nombre es requerido",
                    borderError: "1px solid red"
                },
                minLength: {
                    value: 5,
                    message: "El campo nombre debe tener al menos 5 caracteres",
                    borderError: "1px solid red"
                },
                maxLength: {
                    value: 20,
                    message: "El campo nombre debe tener como máximo 20 caracteres",
                    borderError: "1px solid red"
                },
                onChange: () => filtrarLetras("nombre")
            }
        )} />
        {errors.nombre && <span style={{color:"red"}} >Error: {errors.nombre.message}</span>}
        </div>

        <div className="campo">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" className={`input-formulario ${errors.email ? "border-error" : ""}` } placeholder="correo" 
          {
            ...register("email",{
              required: {
                value: true,
                message: "El campo correo es requerido",
              },
              validate: (value) => {
                const evaluacion = (/[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,]/).test(valor)
                if(!evaluacion){
                  return "El correo no puede incluir la letra 'a'"
                }
              }
            })}/>
          {errors.email && <span style={{color:"red"}} >Error: {errors.email.message}</span>}
        </div>

        <div className="campo">
          <label htmlFor="asunto">Asunto</label>
          <input id="asunto" name="asunto" placeholder="asunto" {...register("asunto")}></input>
        </div>
        
        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" placeholder="mensaje" {...register("mensaje")}></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
