import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [tarefas, setTarefas] = useState([]);
  const [dados, setDados] = useState("");
  const [ids, setIds] = useState(tarefas.length);

  const renderTarefas = () => {

    let linhas = [];

    tarefas.forEach((tarefa) =>
      linhas.push(
        <tr key={tarefa.id}>
          <th scope="row">{tarefa.id + 1}</th>
          <td className="text-left">
            {tarefa.texto}
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => remover(tarefa.id)}>Remover</button>
          </td>
        </tr>
      )
    )
    return linhas;
  }

  const addTarefa = (event) => {
    event.preventDefault();
    let novaTarefa = { id: ids, texto: dados };
    setIds(ids + 1);
    setTarefas([...tarefas, novaTarefa]);
  };

  const remover = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className="container text-center">
      <form onSubmit={(event) => addTarefa(event)}>
        <div className="form-inline justify-content-center">
          <label className="m-2 text-white">Nova Tarefa</label>
          <input className="form-control m-2" onChange={(event) => setDados(event.target.value)} placeholder="Digite sua tarefa" />
          <button className="btn btn-primary m-2" type="submit">Adicionar</button>
        </div>
      </form>
      <table class="table table-light" >
        <thead>
          <tr>
            <th className="w-25" scope="col">#</th>
            <th className="w-50 text-left" scope="col">Tarefas</th>
            <th className="w-25" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {renderTarefas()}
        </tbody>
      </table>
    </div>
  )

}

export default App;
