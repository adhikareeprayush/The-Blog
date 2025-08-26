import { authRoutes } from "../utils/axios/api";
interface LoginFormElements extends HTMLFormControlsCollection {
  identifier: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginForm extends HTMLFormElement {
  elements: LoginFormElements;
}
const Login = () => {
  const { loginUser } = authRoutes;

  const handleLogin = async (e: React.FormEvent<LoginForm>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await loginUser(data);
    if (response.status === 200) {
      alert("Login Successful");
      localStorage.setItem("token", response.data.token);
    }
  };
  return (
    <div className="flex-1 grid grid-cols-2">
      <div className="col-span-1 flex flex-col gap-5 items-start justify-center">
        <div className="flex flex-col">
          <h3 className="text-center w-fit text-4xl">Welcome Back User</h3>
          <span className="text-lg text-lightGray">
            Sharing knowledge one at a time
          </span>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col w-[500px] gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="identifier">Username or Email</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center text-center bg-purple w-[120px] text-white px-3 py-2 text-xl rounded-lg font-semibold cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
      <div className="cols-span-1 h-full relative">
        <hr className="absolute inset-0 w-full h-full border border-gray-300" />
      </div>
    </div>
  );
};

export default Login;
