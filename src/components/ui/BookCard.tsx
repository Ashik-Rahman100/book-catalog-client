import { Link } from "react-router-dom";
import { IBook } from "../../types/globalTypes";

type IProps = {
  book: IBook;
};
const BookCard = ({ book }: IProps) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl m-2 md:h-[400px] ">
      <figure>
        <Link to={`/book/${book._id}`}>
          <img
            src="https://img.freepik.com/free-psd/realistic-book-cover-presentation_1310-24.jpg?w=740&t=st=1692340914~exp=1692341514~hmac=b2ca09e4176decfe8d22af9ad4091c159f27ae585220e7299d01698a57d77b58"
            alt="Shoes"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p className="ml-1 badge badge-primary">{book.genre}</p>
        <p className="font-thin my-2">Publised At : {book.publishedAt}</p>

        <p>Author: {book.author}</p>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default BookCard;
