import Canvas from "./canvas"
import Customizer from "./page/Customizer"
import Home from "./page/Home"

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
