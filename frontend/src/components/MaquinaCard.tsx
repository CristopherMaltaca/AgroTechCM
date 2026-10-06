import type { Maquina } from "../types/Maquina";

interface Props {
  maquina: Maquina;
}

function MaquinaCard(props: Props) {
  return (
    <div>
      {props.maquina.nome}
      {props.maquina.status}
      {props.maquina.horasTrabalhadas}
    </div>
  );
}

export default MaquinaCard;