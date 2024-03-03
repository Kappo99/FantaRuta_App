import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { HiMiniEyeSlash } from "react-icons/hi2";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onLogin(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="h-screen bg-slate-100">
      <div className="container py-6 h-full">
        <div className="h-full flex items-center justify-center mx-auto">
          <div className="w-full md:w-10/12">
            <div className="rounded-3xl bg-white shadow-xl">
              <div className="grid grid-cols-12 g-0">
                <div className="hidden md:col-span-6 lg:col-span-5 md:flex items-center justify-center">
                  <img
                    alt=""
                    src="https://fledertech.com/assets/img/servizi/infermieri.png"
                    className="object-contain p-16"
                  />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-7 flex items-center">
                  <div className="h-full p-8 lg:p-12 text-black bg-ruta_blue rounded-3xl">
                    <form onSubmit={handleLogin}>
                      <div className="flex items-center mb-4 pb-2">
                        <img
                          alt=""
                          src="/images/logo/fleder.png"
                          width="50%"
                          height="50%"
                          className="inline-block"
                        />{" "}
                      </div>

                      <h5 className="font-semibold text-gray-100 text-3xl my-10">
                        Accedi con le tue credenziali
                      </h5>

                      <div className="mt-6">
                        <div className="row">
                          <label
                            className="flex items-center gap-2 text-gray-100 font-bold mb-1"
                            htmlFor="email"
                          >
                            <MdEmail /> Indirizzo email
                          </label>
                        </div>

                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-lg px-4 py-2"
                          required
                        />
                      </div>

                      <div className="mt-6">
                        <div className="row">
                        <label
                          className="flex items-center gap-2 text-gray-100 font-bold mb-1"
                          htmlFor="password"
                        >
                          <RiLockPasswordFill /> Password
                        </label>
                        </div>
                       
                        <div className="flex items-center">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="w-full rounded-l-lg px-4 py-2"
                            required
                          />
                          <button
                            className="flex items-center justify-center p-3 rounded-r-lg bg-ruta_purple text-white"
                            type="button"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <HiMiniEyeSlash /> : <IoEyeSharp />}
                          </button>
                        </div>
                      </div>

                      <div className="mt-12 mb-3">
                        <button
                          className="w-full py-2 rounded-lg font-semibold bg-ruta_purple text-white"
                          type="submit"
                        >
                          Accedi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
