import Card from "./components/Card";
import Header from "./components/Header";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="wrapper clear">
      <Overlay />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb  -40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск... " />
          </div>
        </div>
        <div className="d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
