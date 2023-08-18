import { Link } from "react-router-dom";
import { IData } from "../../types/globalTypes";

type IProps = {
  book: IData;
};
const BookCard = ({ book }: IProps) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.freepik.com/free-psd/realistic-book-cover-presentation_1310-24.jpg?w=740&t=st=1692340914~exp=1692341514~hmac=b2ca09e4176decfe8d22af9ad4091c159f27ae585220e7299d01698a57d77b58"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`book/${book._id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
