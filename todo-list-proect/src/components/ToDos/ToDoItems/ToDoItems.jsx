import { useDispatch, useSelector } from "react-redux";
import {
  changeEdit,
  selectToDos,
} from "../../../store/slices/toDoSlice/toDoSlice";
import {
  fetchChangeComp,
  fetchChangeTitle,
  fetchDeleteItem,
} from "../../../store/slices/toDoSlice/API";
import { selectSearch } from "../../../store/slices/searchSlice/searchSlice";

const ToDoItems = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(selectToDos);
  const { search, searchToDos } = useSelector(selectSearch);

  return (
    <div className="toDos">
      {search
        ? searchToDos.map((el) => {
            return (
              <div key={el.id} className="toDo">
                <p>{el.text}</p>
              </div>
            );
          })
        : toDos.map((el) => {
            return (
              <div key={el.id} className="toDo">
                {el.isEdit ? (
                  <form
                    onSubmit={(ev) => {
                      ev.preventDefault();
                      dispatch(
                        fetchChangeTitle({
                          item: el,
                          newText: ev.target[0].value,
                        })
                      );
                    }}
                  >
                    <input type="text" placeholder="change toDo" required />
                    <button>change</button>
                  </form>
                ) : (
                  <div className="toDo-desc">
                    <input
                      type="checkBox"
                      checked={el.isComp}
                      onChange={() => dispatch(fetchChangeComp(el))}
                    />
                    <p className={el.isComp ? "comp" : ""}>{el.text}</p>
                  </div>
                )}
                <div className="toDo-desc">
                  <button onClick={() => dispatch(changeEdit(el))}>Edit</button>
                  <button onClick={() => dispatch(fetchDeleteItem(el.id))}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default ToDoItems;
