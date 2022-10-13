import React, { useState } from "react";
import Botao from "../botao";
import { Itarefa } from "../../types/Itarefa";
import style from "./formulario.module.scss"
import { v4 as uuidv4 } from "uuid"

interface props {
	setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

function Formulario({setTarefas}: props){
	const [tarefa, setTarefa] = useState("");
	const [tempo, setTempo] = useState("00:00");

	function adicionaTarefa(e: React.FormEvent) {
		e.preventDefault();
		setTarefas(tarefasAntigas => [
			...tarefasAntigas,
			{tarefa, tempo , selecionado: false, completado: false, id: uuidv4() },

		])
		setTarefa("")
		setTempo("00:00")
	}
	return (
		<form className={style.novaTarefa} onSubmit={adicionaTarefa}>
			<div className={style.inputContainer}>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input type="text"
					name="tarefa"
					id="tarefa"
					placeholder="O que você quer estudar"
					value={tarefa}
					onChange={e => {
						setTarefa( e.target.value)
					}}
					required
				/>
			</div>

			<div className={style.inputContainer}>
				<label htmlFor="tempo">Tempo</label>
				<input type="time"
					step="1"
					name="tempo"
					id="tempo"
					min="00:00:00"
					max="01:30:00"
					value={tempo}
					onChange={e => {
						setTempo( e.target.value);
					}}
					required
				/>
			</div>
			<Botao type="submit">Adicionar</Botao>
		</form>
	);
}

export default Formulario;