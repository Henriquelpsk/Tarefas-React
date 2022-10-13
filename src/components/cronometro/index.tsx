import Button from "../botao"
import Relogio from "./relogio"
import style from  "./cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/Itarefa";
import { useEffect, useState } from "react";

interface props {
	selecionado: Itarefa | undefined
	finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: props){
	const [tempo, setTempo] = useState<number>();

	useEffect(() => {
		if(selecionado?.tempo) {
			setTempo(tempoParaSegundos(String(selecionado?.tempo)))
		}
	},[selecionado])

	function regressiva(contador: number = 0){
		setTimeout(() => {
			if(contador > 0){
				setTempo(contador - 1);
				return regressiva(contador - 1)
			}
			finalizarTarefa();
		},1000)
	}
	return(
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
			<div className={style.relogioWrapper}>
				<Relogio tempo={tempo}/>
			</div>
			<Button onClick={() => regressiva(tempo)}>Começar</Button>
		</div>
		
	);
}