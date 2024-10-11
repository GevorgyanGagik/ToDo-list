import { fetchAddToDo } from "../../../store/slices/toDoSlice/API";
import { useDispatch, useSelector } from "react-redux";
import moonImg from "../../../images/moon-img.png";
import sunImg from "../../../images/sun-img.png";
import ToDoSearch from "../ToDoSearch/ToDoSearch";
import {
  searchToDos,
  selectSearch,
} from "../../../store/slices/searchSlice/searchSlice";
import { fetchChangeMode } from "../../../store/slices/nightSlice/API";
import { selectNight } from "../../../store/slices/nightSlice/nightSlice";
import { selectToDos } from "../../../store/slices/toDoSlice/toDoSlice";

const ToDoHeader = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(selectSearch);
  const night = useSelector(selectNight);
  const toDos = useSelector(selectToDos);

  const handlerSubmit = (ev) => {
    ev.preventDefault();
    dispatch(fetchAddToDo(ev.target[0].value));
    ev.target.reset();
  };

  return (
    <header>
      <div className="header-top">
        <h1>ToDo List</h1>

        {night ? (
          <button
            onClick={() => dispatch(fetchChangeMode(night))}
            className="app-button"
          >
            <img src={sunImg} alt="sun" />
          </button>
        ) : (
          <button
            onClick={() => dispatch(fetchChangeMode(night))}
            className="app-button"
          >
            <img src={moonImg} alt="moon" />
          </button>
        )}

        <button onClick={() => dispatch(searchToDos(toDos))}>Search</button>
      </div>

      {search ? (
        <ToDoSearch />
      ) : (
        <form className="input" onSubmit={(ev) => handlerSubmit(ev)}>
          <input type="text" placeholder="add toDo . . ." required />
          <button>add</button>
        </form>
      )}
    </header>
  );
};

export default ToDoHeader;
