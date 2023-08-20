import { useParams } from "react-router-dom";
import Lodader from "../components/shared/Lodader";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";

const SingleBook = () => {
  const { _id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(_id);
  const book: IBook = data?.data;
  // console.log(data?.data);

  if (isLoading) {
    return <Lodader />;
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto items-center border-b border-gray-300">
      <div className="">
        <img
          src="https://img.freepik.com/free-psd/realistic-book-cover-presentation_1310-24.jpg?w=740&t=st=1692340914~exp=1692341514~hmac=b2ca09e4176decfe8d22af9ad4091c159f27ae585220e7299d01698a57d77b58"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold">{book.title}</h1>
        <p className="text-xl mt-6">
          <span className="font-bold">Author :</span> {book.author}
        </p>
        <p className="text-xl">
          <span className="font-bold">Genre :</span> {book.genre}
        </p>
        <p className="text-xl">
          <span className="font-bold">Published At:</span> {book.publishedAt}
        </p>
        <p className="mt-4"> {book.description}</p>

        <button className="btn btn-primary mt-4">Add to cart</button>
      </div>
    </div>
    // <ProductReview id={id!} />
  );
};

export default SingleBook;
