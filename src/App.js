
import slides from "data/data.js";
import Carousel from "components/Carousel/Carousel.jsx";
function App() {
  return (
    <div className="App" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw"}} >
      <Carousel slides={slides}/>
    </div>
  );
}

export default App;

