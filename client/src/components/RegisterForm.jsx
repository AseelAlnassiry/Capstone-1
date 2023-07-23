import { useState } from "react";
import axiosInstance from "../axiosConfig";
import Loading from "./Loading";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const nav = useNavigate;
  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (password !== confirmPassword)
        throw new Error("Your password doesn't match!");
      const res = await axiosInstance.post("/register", {
        email,
        displayName,
        password,
      });
      login(res.data);
      setLoading(false);
      setError(false);
      window.register_modal.close();
      nav("/");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="relative flex flex-col justify-center overflow-hidden">
        <div className="m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-lg">
          <div className="h-16">
            {loading && <Loading />}
            {!loading && (
              <h1 className="text-center text-3xl font-semibold text-accent">
                レノ国
              </h1>
            )}
            {error && (
              <span className="inline-block w-full text-center text-secondary">
                {error}
              </span>
            )}
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered input-primary w-full"
                autoComplete="username"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Display Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Display Name"
                className="input input-bordered input-primary w-full"
                autoComplete="username"
                required
                maxLength={12}
                minLength={6}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
                value={displayName}
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
                className="input input-bordered input-primary w-full"
                autoComplete="new-password"
                required
                minLength={10}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered input-primary w-full"
                autoComplete="confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={10}
                value={confirmPassword}
              />
            </div>

            <div>
              <button
                className="btn btn-primary disabled:btn-secondary"
                disabled={loading ? true : false}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
