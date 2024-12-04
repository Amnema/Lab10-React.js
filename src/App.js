import "./App.css";
import Block from "./Wish";
import img2 from "../src/img/f3.png";
import img3 from "../src/img/f4.png";
import img4 from "../src/img/f5.png";

function App() {
  return(
    <>
      <section className="info">
        <div className="container">
          <div className="question">
            <h1>Что Вам необходимо?</h1>
        </div>
          <div className="blocks">
          <Block img={img2} title="Первый блок"/>
          <Block img={img3} title="Второй блок"/>
          <Block img={img4} title="Третий блок"/>
          </div>
        </div>
      </section>
    </>
  );
}
 

export default App; 