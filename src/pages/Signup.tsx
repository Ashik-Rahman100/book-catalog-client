import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Lodader from "../components/shared/Lodader";
import { useCreateUserMutation } from "../redux/features/auth/authApi";
import { IUser } from "../types/globalTypes";

const Signup = () => {
  const { register, handleSubmit } = useForm<IUser>();
  const createUserMutaion = useCreateUserMutation();
  const [createUser, { isLoading }] = createUserMutaion;
  if (isLoading) {
    return <Lodader />;
  }

  const handleSubmitData = async (data: IUser) => {
    try {
      await createUser(data);
      toast.success("User Created");
      localStorage.setItem("user", JSON.stringify(data.email));
      window.location.href = "/";
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                <button type="submit" className="btn btn-primary ">
                  Signup
                </button>
              </div>
            </form>
            <p className="pt-8">
              If you haven an account please
              <Link
                className="underline underline-offset-4 hover:text-pink pl-2 text-primary"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="text-center w-2/4 lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
