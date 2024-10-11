import { fetchToDos } from "../../store/slices/toDoSlice/API";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import ToDoItems from "./ToDoItems/ToDoItems";
import ToDoFooter from "./ToDoFooter/ToDoFooter";

const ToDos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, []);

  return (
    <div>
      <ToDoHeader />
      <ToDoItems />
      <ToDoFooter />
    </div>
  );
};

export default ToDos;
