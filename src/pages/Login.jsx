import { useState } from "react";
import { FaEye, FaEyeSlash, FaHashtag, FaLock } from "react-icons/fa";

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const num = e.target.num.value;
    const password = e.target.password.value;
    onLogin(num, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="mt-10 p-8 bg-ruta_blue text-white rounded-3xl">

      <form onSubmit={handleLogin}>
        <div className="flex items-center justify-center mb-4 pb-2">
          <img
            alt="Logo"
            src="/images/kappo.svg"
            className="w-2/3 inline-block"
          />
        </div>

        <h5 className="font-semibold text-center text-3xl my-6">
          Accedi
        </h5>

        <div className="mt-4">
          <div className="row">
            <label
              className="flex items-center gap-2 font-bold mb-1"
              htmlFor="num"
            >
              <FaHashtag /> Numero maglia
            </label>
          </div>

          <input
            type="number"
            id="num"
            className="w-full rounded-lg px-4 py-2 text-black"
            required
          />
        </div>

        <div className="mt-4">
          <div className="row">
            <label
              className="flex items-center gap-2 font-bold mb-1"
              htmlFor="password"
            >
              <FaLock /> Password
            </label>
          </div>

          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full rounded-l-lg px-4 py-2 text-black"
              required
            />
            <button
              className="flex items-center justify-center p-3 rounded-r-lg bg-ruta_yellow-dark text-black"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="mt-8 mb-3">
          <button
            className="w-full py-2 rounded-lg font-semibold bg-ruta_yellow-dark text-black"
            type="submit"
          >
            Accedi
          </button>
        </div>
      </form>

    </section>
  );
};

export default Login;
