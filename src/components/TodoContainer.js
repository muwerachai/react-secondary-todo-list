import PageLimit from "./PageLimit";
import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";
import Sort from "./Sort";

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
    </>
  );
}

export default TodoContainer;
