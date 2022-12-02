import React, { createContext, useState, useEffect, useMemo } from "react";

const Context = createContext();

function Provider({ children }) {
  const [list, setList] = useState([]);
  const [form, setForm] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [loader, setLoader] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [info, setInfo] = useState(false);
  const [main, setMain] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selector, setSelector] = useState("");

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setList(data));
  }

  useEffect(() => {
    getPosts();
    setLoader(false);
  }, []);

  function handleSelector(e) {
    setSelector(e.target.value);
  }

  const filtered = useMemo(() => {
    return list.filter((post) => {
      console.log("Новый фильтр");
      return post.title.toLowerCase().includes(searchText.toLocaleLowerCase());
    });
  }, [list, searchText]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    if (admin) {
      document.title = "Hello, admin!";
    } else if (form) {
      document.title = "Fill in form";
    } else if (!admin + form) {
      document.title = "Posts";
    }
  }, [admin, form]);

  function handleAdmin() {
    setAdmin(true);
    setForm(false);
    setMain(false);
    setInfo(false);
  }

  function handleForm() {
    setForm(true);
    setAdmin(false);
    setMain(false);
    setInfo(false);
  }

  function handleMain() {
    setMain(true);
    setAdmin(false);
    setForm(false);
    setInfo(false);
  }

  function handleInfo() {
    setInfo(!info);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleBody(e) {
    setBody(e.target.value);
  }

  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, { id: Date.now(), title, body }]);
    setTitle("");
    setBody("");
  }

  return (
    <Context.Provider
      value={{
        admin,
        form,
        title,
        body,
        handleAdmin,
        handleForm,
        handleTitle,
        handleBody,
        handleSubmit,
        handleMain,
        main,
        theme,
        handleTheme,
        info,
        handleInfo,
        searchText,
        handleSearchText,
        filtered,
        loader,
        selector,
        handleSelector,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
