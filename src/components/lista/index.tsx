import Item from "./item";
import style from "./lista.module.scss"
import { Itarefa } from "../../types/Itarefa";

interface props{
	tarefas: Itarefa[];
	selecionaTarefa: (tarefaSeelcionada: Itarefa)	=> void;
}

function Lista({tarefas, selecionaTarefa}: props) {
	return (
		<aside className={style.listaTarefas}>
			<h2 >Estudos do dia</h2>
			<ul>
				{tarefas.map((item) => (
					<Item 
					selecionaTarefa={selecionaTarefa}
					key={item.id}
					{...item}/>
				))}
			</ul>
		</aside>
	);
}

export default Lista;