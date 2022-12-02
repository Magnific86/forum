import { useContext } from "react";
import ButtonAdmin from "./Buttons/ButtonAdmin";
import ButtonForm from "./Buttons/ButtonForm";
import Container from "./Container";
import { Context } from "./contexts/Context";
import Html from "./Courses/Html";
import Css from "./Courses/Css";
import Js from "./Courses/Js";
import Reac from "./Courses/Reac";
import Next from "./Courses/Next";
import Ethers from "./Courses/Ethers";
import Post from "./Post";

export default function Main() {
  /* const {css, handleCss} = useContext(CoursesContext) */
  const {
    main,
    searchText,
    handleSearchText,
    filtered,
    loader,
  } = useContext(Context);
  if (main) {
    return (
      <Container>
        <div className="flex flex-col container mx-auto">
          <div className="flex justify-around text-4xl py-8">
            <h1>Приветствую</h1>
            <ButtonForm />
            <ButtonAdmin />
          </div>
          <div className="flex"></div>
          <div className="min-h-max">
            <ul className="flex container mx-auto justify-around text-5xl">
              <li>
                <Html />
              </li>
              <li>
                <Css />
              </li>
              <li>
                <Js />
              </li>
              <li>
                <Reac />
              </li>
              <li>
                <Next />
              </li>
              <li>
                <Ethers />
              </li>
            </ul>
            <label
              className="text-4xl text-center mt-6 py-20 pr-6"
              htmlFor="search"
            >
              Поиск по названию поста
            </label>
            <input
              className="bg-transparent w-1/3 border-b border-purple-300 mx-auto outline-none my-4"
              type="text"
              id="search"
              placeholder="Поиск..."
              value={searchText}
              onChange={(e) => handleSearchText(e)}
            />
            <ul>
              {loader === true && (
                <p className="text-5xl text-red-500">Loading...</p>
              )}
              {filtered && filtered.map((post) => (
                <li key={post.id}>
                  <Post post={post} />
                </li>
              ))}
              {!filtered.length && <p>Посты не найдены!</p>}
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}
