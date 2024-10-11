import { useDispatch, useSelector } from "react-redux";
import { selectToDos } from "../../../store/slices/toDoSlice/toDoSlice";
import {
  fetchClearAll,
  fetchClearComp,
} from "../../../store/slices/toDoSlice/API";

const ToDoFooter = () => {
  const toDos = useSelector(selectToDos);
  const dispatch = useDispatch();

  return (
    <footer>
      <p>
        {toDos.filter((el) => el.isComp).length} / {toDos.length}
      </p>
      <div className="btns">
        <button onClick={() => dispatch(fetchClearAll(toDos))}>
          Clear All
        </button>
        <button onClick={() => dispatch(fetchClearComp(toDos))}>
          Clear Comp
        </button>
      </div>
    </footer>
  );
};

export default ToDoFooter;
