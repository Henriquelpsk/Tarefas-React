import React from "react";
import style from "./botao.module.scss"

interface props{
	type?: "button" | "submit" | "reset" | undefined,
	children?: React.ReactNode
	onClick?:() => void,
}

function Botao({type, children, onClick}: props){
	return (
		<button onClick={onClick} type={type} className={style.botao}>
			{children}
		</button>
	)
}

export default Botao;