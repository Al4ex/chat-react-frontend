import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalError from "../components/ModalError";
import useAuth from "../hooks/useAuth";
import * as Yup from 'yup';
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('La contraseña es requerida'),
  email: Yup.string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  username: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('El nombre es requerido'),
  
})
const RegisterPage = () => {
  const { register, error, setError } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = form;

    // Llamar al backend
    try {
      // await validationSchema.validate({ email:formValues.email, name: formValues.name , message: formValues.message }, { abortEarly: false })
      await validationSchema.validate({ email, password, username })

      await register(username, email, password);
    
        // la validación ha sido exitosa, podemos enviar el formulario
    } catch (error) {
      toast.error(error.message);

    }

    
    // console.log(ok);
  };
  useEffect(() => {
    console.log(form);

  }, [])
  
  return (
    <>
      {error && <ModalError />}
      <div className="bg-white px-10 py-20 lg:py-10 sm:w-3/5 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold">Registrate</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Vamos a iniciar poniendo tus datos
        </p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mt-8">
            <div className="relative">
              <input
                value={form.username}
                onChange={handleChange}
                type="text"
                className="peer w-full border-2 border-gray-300 placeholder-transparent rounded-xl p-4 mt-1 bg-transparent"
                placeholder="username"
                name="username"
                id="username"
              />
              <label
                htmlFor="username"
                className="absolute cursor-text select-none  -top-7 left-0  peer-placeholder-shown:text-gray-400  peer-placeholder-shown:text-base peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-[1.12rem]  peer-placeholder-shown:font-normal  font-medium text-lg transition-all duration-100
              peer-focus:-top-7 peer-focus:text-gray-700 peer-focus:font-medium peer-focus:left-0 peer-focus:text-lg"
              >
                Nombre usuario
              </label>
            </div>
            <div className="relative mt-7">
              <input
                value={form.email}
                onChange={handleChange}
                type="text"
                className="peer w-full border-2 border-gray-300 placeholder-transparent rounded-xl p-4 mt-1 bg-transparent"
                placeholder="email"
                name="email"
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute cursor-text select-none  -top-7 left-0  peer-placeholder-shown:text-gray-400  peer-placeholder-shown:text-base peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-[1.12rem]  peer-placeholder-shown:font-normal  font-medium text-lg transition-all duration-100
              peer-focus:-top-7 peer-focus:text-gray-700 peer-focus:font-medium peer-focus:left-0 peer-focus:text-lg"
              >
                Email
              </label>
            </div>
            <div className="relative mt-7">
              <input
                value={form.password}
                onChange={handleChange}
                type="password"
                className="peer w-full border-2 border-gray-300 placeholder-transparent rounded-xl p-4 mt-1 bg-transparent"
                placeholder="password"
                name="password"
                id="password"
              />
              <label
                htmlFor="password"
                className={`absolute cursor-text select-none  -top-7 left-0  peer-placeholder-shown:text-gray-400  peer-placeholder-shown:text-base peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-[1.12rem]  peer-placeholder-shown:font-normal  font-medium text-lg transition-all duration-100
              peer-focus:-top-7  peer-focus:text-lg ${form.password ? "peer-focus:text-gray-700 peer-focus:font-medium peer-focus:left-0" : ''} peer-focus:text-gray-700 peer-focus:font-medium peer-focus:left-0`}
              >
                Password
              </label>
            </div>
            {/* <div className="mt-8 flex justify-between items-center">
          <div className="">
            <input type="checkbox" name="frogot" id="forgot" className="" />
            <label htmlFor="forgot" className="ml-2 font-medium text-base">
              recuerdame
            </label>
          </div>
          <button className=" font-medium text-base text-violet-500">
            Olvide mi contraseña
          </button>
        </div> */}
          </div>
          <div className="mt-8 flex flex-col gap-y-8">
            <button className="bg-violet-500 text-white font-bold text-lg py-3 rounded-xl hover:bg-violet-600 active:scale-95 active:duration-200 transition-all hover:scale-105">
              Registrar
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center mt-8 ">
          <p className="font-medium text-base">Ya tienes cuenta?</p>
          <button className="text-violet-500 text-base font-medium ml-2">
            <Link to={"/auth/login"}>Ingresa a tu cuenta</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
