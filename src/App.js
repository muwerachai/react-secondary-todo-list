import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm />
      </div>
      <TodoContainer />
      <TodoList />

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        <Pagination />
        {/* ********** PAGINATION ********** */}

        {/* ********** END PAGINATION ********** */}
      </div>
    </div>
  );
}

export default App;
