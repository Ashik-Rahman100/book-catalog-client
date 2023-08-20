import { useState } from "react";
import Lodader from "../components/shared/Lodader";
import BookCard from "../components/ui/BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";

const AllBooks = () => {
  const [search, setSearchValue] = useState("");
  const [genre, setGenreValue] = useState("");
  const [publishedAt, setPublishedAtValue] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { data, isLoading } = useGetAllBooksQuery(
    {
      searchTerm: search,
      author: author,
      genre: genre,
      publishedAt: publishedAt,
      title: title,
    },
    { refetchOnMountOrArgChange: true }
  );

  type ITarget = {
    target: { name: string; value: string };
  };
  const handleOnChange = (event: ITarget) => {
    const { name, value } = event.target;

    if (name === "searchTerm") {
      setSearchValue(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "genre") {
      setGenreValue(value);
    } else if (name === "author") {
      setAuthor(value);
    } else if (name === "publishedAt") {
      // console.log(name, value);
      setPublishedAtValue(value);
    }
  };

  if (isLoading) {
    return <Lodader />;
  }
  // console.log(data);
  return (
    <div className="mb-8">
      <div className="pt-6 flex flex-col sm:flex-row justify-center gap-x-2">
        <input
          type="search"
          name="searchTerm"
          placeholder="Search"
          value={search}
          className="input input-bordered input-primary w-full max-w-[15rem]"
          onChange={handleOnChange}
        />
        <input
          type="search"
          name="title"
          placeholder="Title"
          value={title}
          className="input input-bordered input-primary w-full max-w-[15rem]"
          onChange={handleOnChange}
        />
        <input
          type="search"
          name="author"
          placeholder="Author"
          value={author}
          className="input input-bordered input-primary w-full max-w-[15rem]"
          onChange={handleOnChange}
        />
        <input
          type="search"
          name="genre"
          placeholder="Genre"
          value={genre}
          className="input input-bordered input-primary w-full max-w-[15rem]"
          onChange={handleOnChange}
        />
        <input
          type="search"
          name="publishedAt"
          placeholder="Published At"
          value={publishedAt}
          className="input input-bordered input-primary w-full max-w-[15rem]"
          onChange={handleOnChange}
        />
      </div>
      <h2 className="text-4xl text-center my-8 font-bold">All Books</h2>
      <div className="grid sm:grid-cols-1 sm:mx-2  md:grid-cols-4 items-center">
        {data?.data?.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
