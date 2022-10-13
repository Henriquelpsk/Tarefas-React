import React, { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../components/cronometro';
import style from './app.module.scss'
import { Itarefa } from '../types/Itarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
      tarefas={tarefas} 
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado = {selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
