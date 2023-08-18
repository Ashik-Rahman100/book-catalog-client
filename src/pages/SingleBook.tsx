import { useParams } from "react-router-dom";
import { IData } from "../types/globalTypes";

const SingleBook = () => {
  const id = useParams();
  const data: IData[] = [
    { _id: 1, title: "Learn with C", des: "lorem ipsum " },
    { _id: 2, title: "Learn with C", des: "lorem ipsum " },
    { _id: 3, title: "Learn with C", des: "lorem ipsum " },
    { _id: 4, title: "Learn with C", des: "lorem ipsum " },
  ];
  //! Temporary code, should be replaced with redux

  const book = data?.find((item) => item._id === Number(id));
  console.log(book, id);
  return (
    <div className="card w-96 glass">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book?.title}</h2>
        <p>{book?.des}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
