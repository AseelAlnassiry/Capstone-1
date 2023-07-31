import { useState } from "react";
import axiosInstance from "../axiosConfig";
import Loading from "./Loading";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axiosInstance.post("/auth", { email, password });
      login(res.data.user);
      setLoading(false);
      setError(false);
      setEmail("");
      setPassword("");
      nav("/");
      window.login_modal.close();
    } catch (error) {
      setError("Sorry, unable to log you in with those credentials");
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="relative flex flex-col justify-center overflow-hidden">
        <div className="m-auto w-full rounded-md p-6 shadow-md lg:max-w-lg">
          <div className="h-16">
            {loading && <Loading />}
            {!loading && (
              <h1 className="text-center text-3xl font-semibold text-accent">
                レノ国
              </h1>
            )}
            {error && (
              <span className="inline-block w-full text-center text-error">
                {error}
              </span>
            )}
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered input-secondary w-full"
                autoComplete="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered input-secondary w-full"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {/* <a href="#" className="text-xs text-gray-600 hover:text-blue-600 hover:underline">
              Forget Password?
            </a> */}
            <div>
              <button
                className="btn btn-secondary disabled:btn-accent"
                disabled={loading ? true : false}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
