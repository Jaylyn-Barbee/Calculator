import './App.css';
import Calculator from "./components/Calculator";

function App() {
  return (
    <main>
      <Calculator />
    </main>
  );
}

export default App;

/*
class App extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }
}
*/