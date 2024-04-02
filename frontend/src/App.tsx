import "./App.css";
import imagePlants from "./images/plant.png"
import QueryBox from "./components/QueryBox";

function App() {
  return (
    <div>
      <img src = {imagePlants} width={250}/>
      <QueryBox />
      <br />
      <textarea
        placeholder= "Enter your journling response here"
        rows={10} // Adjust the number of rows as needed
        cols={150} // Adjust the number of columns as needed
        color ="green"
      />
      <br />
    </div>
  );
}

export default App;
