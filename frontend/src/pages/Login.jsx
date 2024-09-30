import { useEffect, useMemo, useState } from "react";
import { LoginFunc, LoginGoogleFunc } from "../api-calls";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Login = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAppContext();
  const [status, setStatus] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = {
      email_phone: emailPhone,
      password,
    };
    const res = await LoginFunc(formData);
    // console.log(res);
    if (res.status) {
      setStatus(res.status);
      setIsLoggedIn(res.status);
    }
  };
  // const handleLoginGoogle = () => {
  //   LoginGoogleFunc();
  // };
  // console.log(res);

  // useMemo(() => {
  //   navigate("/");
  // }, [status]);
  return (
    <section className="p-4 rounded-lg shadow-md shadow-slate-600 flex flex-col gap-2 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold ">Login</h2>
      <form action="submit" onSubmit={handleLogin}>
        <label className="block text-sm font-medium cursor-pointer mb-4">
          Email or Phone Number
          <input
            name="email_phone"
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-input border rounded-lg focus:border-primary"
            placeholder="Enter your email or phone phone"
            required
          />
        </label>
        <label
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block text-sm font-medium cursor-pointer mb-4"
        >
          Password
          <input
            name="password"
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:border-primary"
            placeholder="Enter your password"
            required
          />
        </label>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox text-primary border-primary rounded cursor-pointer"
            />
            <span className="ml-2 text-sm select-none">Remember me</span>
          </label>
          <a href="#" className="text-accent hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full font-semibold bg-primary text-mblack py-3 px-4 rounded-lg hover:bg-primary/80"
        >
          Login
        </button>
      </form>
      <div className="flex flex-row justify-between items-center">
        <hr className="h-0.5 bg-slate-400 w-5/12" />
        <div className="font-semibold text-slate-400">OR</div>
        <hr className="h-0.5 bg-slate-400 w-5/12" />
      </div>
      <button
        // type="submit"
        onClick={LoginGoogleFunc}
        className="w-full flex justify-center gap-2 bg-slate-200 text-mblack items-center py-2.5 px-16 rounded-lg shadow-md border border-slate-200 border-opacity-10 hover:bg-slate-200/80"
      >
        <img src="./google.svg" alt="" className="w-6 h-6 self-start" />
        Continue with Google
      </button>
      <div className="text-md font-semibold flex flex-row gap-1.5 text-center justify-center items-center">
        <div>{`Don't have an account?`}</div>
        <Link
          to="/register"
          className="underline text-blue-500 hover:font-normal transition"
        >
          Sign up here
        </Link>
      </div>
    </section>
  );
};

export default Login;
