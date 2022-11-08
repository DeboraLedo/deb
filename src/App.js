import { Aboutme } from "./components/Aboutme";
import { Contactme } from "./components/Contactme";
import { Name } from "./components/Name";
import { Navbar } from "./components/Navbar";
import { Projets } from "./components/Projects";
import { Study } from "./components/Study";



function App() {
  return (
    <div>
     <Navbar/>
     <Name/>
     <Aboutme/>
     <Study/>
     <Projets/>
     <Contactme/>
    </div>
  );
}

export default App;

