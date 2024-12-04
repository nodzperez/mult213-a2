import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";

const todos = [
  { id: 1, text: "Complete React assignment", completed: false },
  { id: 2, text: "Study for math test", completed: false },
  { id: 3, text: "Do laundry", completed: false },
];

export default function App() {
  return (
    // fragment
    <> 
      <Header title="Welcome to the Assignment Page!" message="Thanks for visiting this page!" />
      <TodoList todos={todos} />
      <Footer message="Contact me at matterbaby69@nodzperez.com" />
    </>
  )

}