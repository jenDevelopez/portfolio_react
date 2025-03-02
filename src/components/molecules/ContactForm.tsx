import { useForm } from "react-hook-form";
<<<<<<< HEAD
<<<<<<< HEAD
import { FormDataProps } from "../../types";


=======
=======
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
import { useRef } from "react";
import emailjs from "@emailjs/browser";


interface FormDataProps {
  user_name: string;
  user_email: string;
  
  message: string;
}
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = () => {
   if (form.current!== null) {
      emailjs
       .sendForm("service_u9valm3", "template_c78bg4m", form.current, "EToqoiwQleMd4DadZ")
       .then((result) => {
          console.log(result.text);
          location.reload()
        })
       .catch((error) => {
          console.error(error.text);
        });
      }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-8" autoComplete="off">
      <div className="lg:flex lg:justify-between">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tu nombre
          </label>
          <input
            type="text"
            id="user_name"
            className="shadow-sm bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 placeholder:text-violet-500"
            placeholder="Tu nombre aqui..."
            {...register("user_name", {
              required: {
                value: true,
                message: "Tienes que poner tu nombre",
              },
              minLength: {
                value: 2,
                message: "Tu nombre no puede tener menos de 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Tu nombre no puede tener menos de 20 caracteres",
              },
            })}
          />
          {errors.user_name && (
            <span className="text-red-500 text-xs">{errors.user_name.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tu email
          </label>
          <input
            type="email"
            id="user_email"
            className="shadow-sm bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 d placeholder:text-violet-500"
            placeholder="Tu email aqui..."
            {...register("user_email", {
              required: {
                value: true,
                message: "Tienes que poner tu email",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El email no es válido",
              },
            })}
          />
          {errors.user_email && (
            <span className="text-red-500 text-xs">{errors.user_email.message}</span>
          )}
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Tu mensaje
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-violet-100 rounded-lg shadow-sm border border-gray-300 focus:ring-violet-500 focus:border-violet-500 placeholder:text-violet-500"
          placeholder="Tu mensaje va aqui..."
          {...register("message", {
            required: {
              value: true,
              message: "Tienes que poner tu mensaje",
            },
          })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-xs">{errors.message.message}</span>
        )}
      </div>
      <div className="md:flex md:justify-center">
        <button className="w-full py-3 px-10 text-sm font-medium text-center text-black rounded-lg bg-blue-400 md:w-1/2 mx-auto  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
