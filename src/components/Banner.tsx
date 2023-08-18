import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh] min-w-[98.5vw]"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?w=740&t=st=1692340800~exp=1692341400~hmac=2306d65f5d0adbc7577c1d968bc51a3bb4a43454699fd64e78b8f6d76416e101')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Start Your Amazing Reading Experience
          </h1>
          <p className="py-6 text-[#eee4e4]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/books" className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
