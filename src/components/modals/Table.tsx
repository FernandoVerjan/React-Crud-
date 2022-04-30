import React, {useState, useEffect} from 'react'
import axios from 'axios'



interface tableProps{
    onClose: Function;
    selectCourse: Function;
}

export default function Table(tableProps: tableProps) {
  const baseUrl = "http://localhost:3000/cursos/";

  const [cursos, setCursos] = useState<any[]>([])

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setCursos(response.data.cursos);
    });
};
      
      useEffect(() => {
        const fetchData = async () => {
          await peticionGet();
        };
        fetchData();
      });
    

  return (
    <div className="App text-center">
      
      <h2>Cursos</h2>
      <br />
      <button className="btn btn-success" onClick={() => tableProps.onClose()}>
        Agregar
      </button>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Creditos</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso._id}>
              <td>{curso.nombre}</td>
              <td>{curso.creditos}</td>
              <td>{curso.descripcion}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => tableProps.selectCourse(curso, "Editar")}
                >
                  Editar
                </button>{" "}
                {"   "}
                <button
                  className="btn btn-danger"
                  onClick={() => tableProps.selectCourse(curso, "Eliminar")}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  )
}