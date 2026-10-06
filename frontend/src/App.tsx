import type { Maquina } from "./types/Maquina";
import MaquinaCard from "./components/MaquinaCard";

function App() {
  const maquinas: Maquina[] = [
    {
      id: 1,
      nome: "Trator 01",
      status: "Em operação",
      horasTrabalhadas: 127
    },
    {
      id: 2,
      nome: "Trator 02",
      status: "Parada",
      horasTrabalhadas: 84
    },
    {
      id: 3,
      nome: "Colheitadeira 01",
      status: "Em operação",
      horasTrabalhadas: 231
    }
  ];

  return (
    <div>
      <h1>AgroControl</h1>
      <h2>Máquinas</h2>

      <div>
        {maquinas.map((maquina) => (
          <MaquinaCard
            key={maquina.id}
            maquina={maquina}
          />  
        ))}
      </div>
    </div>
  );
}

export default App;