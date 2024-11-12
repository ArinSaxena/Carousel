
import slides from "data/data.js";
import Carousel from "components/Carousel/Carousel.jsx";
function App() {
  return (
    <div className="App" >
      <h1>Hello carousel</h1>
      <Carousel slides={slides}/>
    </div>
  );
}

export default App;

