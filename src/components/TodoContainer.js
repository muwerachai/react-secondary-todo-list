import PageLimit from "./PageLimit";
import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";
import Sort from "./Sort";
import Todolist from "./TodoList";
import Pagination from "./Pagination";

function TodoContainer() {
  return (
    <>
      <div className="my-2 d-flex gap-3">
        <SearchText />
        <SearchStatus />
      </div>
      <div className="my-2 d-flex justify-content-between">
        <PageLimit />
        <Sort />
      </div>
      <Todolist />
      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        <Pagination />
      </div>
    </>
  );
}

export default TodoContainer;
