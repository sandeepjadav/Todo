import Todolist from './Todo/Todolist';
// import Todo2 from './Todo/Todo2';
// import Tode3 from "./Todo/Tode3";

import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTodo } from './Component/AddTodo';
import { TodoLists } from './Component/TodoLists';
import HomeTodo from './Todo/HomeTodo';

function App() {
  return (
    <>
    {/* <Todolist/> */}
    {/* <Todo2/> */}
    {/* <Tode3/> */}
    <HomeTodo/>
{/* 
    <div className="container p-4 mt-2">
      <h2>Todo Application</h2>
      <AddTodo />
      <TodoLists />
    </div> */}
    </>
  );
}

export default App;
