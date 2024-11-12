
import slides from "data/data.js";
import Carousel from "components/Carousel/Carousel.jsx";
function App() {
  return (
    <div className="App" >
      <Carousel slides={slides}/>
    </div>
  );
}

export default App;

