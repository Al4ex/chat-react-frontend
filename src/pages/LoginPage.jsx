import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as Yup from 'yup';
import toast from "react-hot-toast";
import ModalError from "../components/ModalError";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida'),
  
});
const LoginPage = () => {
  


  // hook para usar el authcontext
  const { login, error, setError } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberme: false,
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setForm({
        ...form,
        email,
        rememberme: true,
      });
    }
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const toggleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await validationSchema.validate({ email:formValues.email, name: formValues.name , message: formValues.message }, { abortEarly: false })
      await validationSchema.validate({ email:form.email, password: form.password })
      form.rememberme
      ? localStorage.setItem("email", form.email)
      : localStorage.removeItem("email");
    // Llamar al backend
    const { email, password } = form;

    const ok = await login(email, password);
    
        // la validación ha sido exitosa, podemos enviar el formulario
    } catch (error) {
      toast.error(error.message);

    }
    
    // console.log(ok);
  };
  return (
    <>
      {error && <ModalError />}
      <div
        className={`${
          error ? "select-none" : ""
        } bg-white px-10 py-20 lg:py-10 sm:w-3/5 rounded-3xl border-2 border-gray-100`}
      >
        <h1 className="text-5xl font-semibold">Bienvenido</h1>

        <p className="font-medium text-lg text-gray-500 mt-4">Inicia sesion</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-8">
            <div className="relative">
              <input
                value={form.email}
                onChange={handleChange}
                name="email"
                type="text"
                className="peer w-full border-2 border-gray-300 placeholder-transparent rounded-xl p-4 mt-1 bg-transparent"
                placeholder="email"
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute cursor-text select-none -top-7 left-0  peer-placeholder-shown:text-gray-400  peer-placeholder-shown:text-base peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-[1.12rem]  peer-placeholder-shown:font-normal  font-normal text-lg transition-all duration-100
                peer-focus:-top-7 peer-focus:text-gray-700 peer-focus:font-normal peer-focus:left-0 peer-focus:text-lg"
              >
                Email
              </label>
            </div>
            <div className="relative mt-7">
              <input
                value={form.password}
                onChange={handleChange}
                name="password"
                type="password"
                className="peer w-full border-2 border-gray-300 placeholder-transparent rounded-xl p-4 mt-1 bg-transparent"
                placeholder="password"
                id="password"
                autoComplete="off"
              />
              <label
                htmlFor="password"
                className="absolute cursor-text select-none -top-7 left-0  peer-placeholder-shown:text-gray-400  peer-placeholder-shown:text-base peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-[1.12rem]  peer-placeholder-shown:font-normal  font-normal text-lg transition-all duration-100
                peer-focus:-top-7 peer-focus:text-gray-700 peer-focus:font-normal peer-focus:left-0 peer-focus:text-lg"
              >
                Password
              </label>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div className="" onClick={toggleCheck}>
                <input
                  checked={form.rememberme}
                  readOnly
                  name="rememberme"
                  type="checkbox"
                  id="rememberme"
                  className=""
                />
                <label htmlFor="forgot" className="ml-2 font-medium text-base">
                  recuerdame
                </label>
              </div>
              {/* <button className=" font-medium text-base text-violet-500">
                Olvide mi contraseña
              </button> */}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-y-8">
            <button className="bg-violet-500 text-white font-bold text-lg py-3 rounded-xl hover:bg-violet-600 active:scale-95 active:duration-200 transition-all hover:scale-105">
              Iniciar
            </button>
            {/* <button className="flex items-center justify-center active:scale-95 active:duration-200 transition-all hover:scale-105 border-2 border-gray-400 py-3 rounded-xl">
              ahoy google
            </button> */}
          </div>
        </form>
        <div className="flex justify-center items-center mt-8 ">
          <p className="font-medium text-base">No tienes cuenta?</p>
          <button className="text-violet-500 text-base font-medium ml-2">
            <Link to={"/auth/register"}>Registrate</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
