// import elements from "./data.json"
// import Hello from "./alt-components/Hello";
// import  RenderComponent  from "./functions/RenderComponent"
import  RenderWeb  from "./functions/RenderWeb";

function App() {


  return (
    <div className="App">
      <RenderWeb />
      {/* {elements.map((element)=>{
        return (
            <RenderComponent element={element} />
        ) 
      })}  */}
    </div>
  )
}

export default App
