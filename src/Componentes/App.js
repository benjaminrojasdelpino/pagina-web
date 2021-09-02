import "../Assets/App.css"
import Menu from "./Menu/menu";
import Footer from "./Footer/footer";
import Inicio from "./Inicio/inicio";
import Lista_terrenos from "./Lista_terrenos/lista_terrenos";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div>
      <Menu></Menu>
      <Lista_terrenos></Lista_terrenos>
      <Footer></Footer>
    </div>
  );
}
export default App;
