import BookCard from "../components/ui/BookCard";
import { IData } from "../types/globalTypes";

const AllBooks = () => {
  const data: IData[] = [
    { _id: 1, title: "Learn with C", des: "lorem ipsum " },
    { _id: 2, title: "Learn with C", des: "lorem ipsum " },
    { _id: 3, title: "Learn with C", des: "lorem ipsum " },
    { _id: 4, title: "Learn with C", des: "lorem ipsum " },
  ];
  return (
    <div className="mb-8">
      <h2 className="text-4xl text-center my-8 font-bold">All Books</h2>
      <div className="grid grid-cols-4 m-2">
        {data.map((book: IData) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
