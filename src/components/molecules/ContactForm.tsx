import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    formState: { errors },
  } = useForm<FormDataProps>();
  const [submit,setSubmit] = useState(false)

  useEffect(() => {
    const sendFormByEmail = async () => {
      const res = await fetch('../../api/send.ts',{ method: 'POST'})
      console.log(res)
    }
    sendFormByEmail()
  },[submit])
  return (
    <form className="space-y-8" onSubmit={() => setSubmit(true)}>
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
            id="name"
            className="shadow-sm bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 placeholder:text-violet-500"
            placeholder="John Doe"
            {...register("name", {
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
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
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
            id="email"
            className="shadow-sm bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 d placeholder:text-violet-500"
            placeholder="name@developez.es"
            {...register("email", {
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
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Tu Asunto
        </label>
        <input
          type="subject"
          id="subject"
          className="shadow-sm bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 placeholder:text-violet-500"
          placeholder="name@developez.es"
          {...register("subject", {
            required: {
              value: true,
              message: "Tienes que poner tu asunto",
            },
          })}
        />
        {errors.subject && (
          <span className="text-red-500 text-xs">{errors.subject.message}</span>
        )}
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
