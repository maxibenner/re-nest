import "./App.css";
import { PhoneWrapper } from "./components/phoneWrapper/PhoneWrapper";
import { TodoWrapper } from "./contexts/todoContext";
import { AddTodoPage } from "./pages/addTodoPage/AddTodoPage";
import { MainPage } from "./pages/mainPage/MainPage";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchPage } from "./pages/searchPage/SearchPage";

function App() {
  const [page, setPage] = useState<"mainPage" | "addTodoPage" | "searchPage">(
    "mainPage"
  );

  return (
    <TodoWrapper>
      <PhoneWrapper>
        <MainPage
          onNav={() => setPage("addTodoPage")}
          onSearch={() => setPage("searchPage")}
        />
        <AnimatePresence>
          {page === "searchPage" && (
            <SearchPage key="search" onCancel={() => setPage("mainPage")} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {page === "addTodoPage" && (
            <AddTodoPage key="add" onNav={() => setPage("mainPage")} />
          )}
        </AnimatePresence>
      </PhoneWrapper>
    </TodoWrapper>
  );
}

export default App;
