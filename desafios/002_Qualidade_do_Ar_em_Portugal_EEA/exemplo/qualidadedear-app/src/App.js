import "./App.css";
import Chart from "./chart";
import Dropdown from "./dropdown";
import data from "./assets/qualidade_ar.json";
import { useState } from "react";

function App() {
  const [selectedEstacao, setselectedEstacao] = useState("-");
  const [hoveredElement, setHoveredElement] = useState(false);
  const handleChangeEstacao = (event) => {
    setselectedEstacao(event.target.value);
  };
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#495057",
          color: "white",
          fontWeight: 600,
          padding: "5px",
          margin: "10px",
          fontSize: "14px",
          display: "inline-block",
        }}
      >
        Qualidade do ar
      </div>
      <h2 style={{ color: "#212529", marginTop: "0" }}>
        Como varia o nível médio anual de poluentes registado nos diferentes
        pontos de medição do país?
      </h2>
      <div
        style={{
          // display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "12px" }}>
          Escolhe uma estação para destacá-la no gráfico{" "}
        </p>
        <Dropdown
          data={data}
          selectedEstacao={selectedEstacao}
          setselectedEstacao={setselectedEstacao}
          handleChangeEstacao={handleChangeEstacao}
        ></Dropdown>
      </div>
      {/* <div>
        <p>
          Ou selecciona uma nos gráficos para veres detalhes sobre todos os
          poluentes
        </p>
      </div> */}
      <Chart
        selectedEstacao={selectedEstacao}
        data={data}
        hoveredElement={hoveredElement}
        setHoveredElement={setHoveredElement}
      ></Chart>
      <p style={{ textAlign: "left", margin: "5px", fontSize: "12px" }}>
        Fonte: EEA (dados tratados pela DSSG)
      </p>
    </div>
  );
}

export default App;
