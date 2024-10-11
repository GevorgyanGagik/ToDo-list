import { selectToDos } from "../../../store/slices/toDoSlice/toDoSlice";
import { fetchToDos } from "../../../store/slices/toDoSlice/API";
import { useDispatch, useSelector } from "react-redux";
import { searchedToDos } from "../../../store/slices/searchSlice/searchSlice";

const ToDoSearch = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(selectToDos);

  return (
    <div className="input">
      <input
        type="search"
        placeholder="search toDos . . ."
        onChange={(ev) =>
          dispatch(searchedToDos({ toDos, title: ev.target.value }))
        }
      />
      <button onClick={() => dispatch(fetchToDos())}>Reset</button>
    </div>
  );
};

export default ToDoSearch;
