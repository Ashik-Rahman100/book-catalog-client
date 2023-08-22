import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Lodader from "../components/shared/Lodader";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { IUserApiData } from "../types/globalTypes";

const Login = () => {
  const { register, handleSubmit } = useForm<IUserApiData>();
  const loginUserMutation = useLoginUserMutation();
  const [loginUser, { isLoading }] = loginUserMutation;
  if (isLoading) {
    return <Lodader />;
  }

  const handleSubmitData = async (data: IUserApiData) => {
    try {
      await loginUser(data);
      toast.success("User logged in!");
      localStorage.setItem("user", JSON.stringify(data.email));
      window.location.href = "/";
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="hero min-h-[80vh]">
      <div className="hero-content flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In</h1>
          <p className="py-6 w-[80%]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSubmitData)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                  })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="font-semibold">
              Already have an account?{" "}
              <Link className="text-blue-600" to="/signup">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
