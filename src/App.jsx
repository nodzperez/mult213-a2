// import the stuff - components, css and image
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";
import Card from "./Card";
import pikaImage from "./assets/pika.jpg";

// create array for the todo list items
const todos = [
  { id: 1, text: "Complete React assignment", completed: false },
  { id: 2, text: "Complete the Mobile App assignment", completed: false },
  { id: 3, text: "Sleep", completed: false },
];

export default function App() {
  return (
    // fragment
    <>
      <Header
        title="Welcome to the Assignment Page!"
        message="Thanks for visiting this page!"
      />
      <TodoList todos={todos} />
      <Card
        title="ILLUSTRATOR"
        subtitle="Pokemon Illustrator"
        content="We certify that your illustration is an excellent entry in the Pokemon Card Game Illustration Contest. Therefore, we state that you are an Officially Authorized Pokemon Card Illustrator and admire your skill."
        image={pikaImage}
      />
      <Footer message="Contact me at matterbaby69@nodzperez.com" />
    </>
  );
}
