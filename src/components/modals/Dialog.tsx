import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import courseModel from "../../models/courseModel";


interface dialogProps{
    isOpen: boolean;
    onClose: Function;
    curso?: courseModel;
    onChange: Function;
    peticion: Function;
}

export default function ModalDialog(dialogProps: dialogProps) {

  return (

    <Modal isOpen={dialogProps.isOpen} onClose={() => dialogProps.onClose()}>
    <ModalHeader>
      <div>
        <h3>{dialogProps.curso ? 'Editar' : 'Insertar'} Curso</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <div className="form-group">
        <label>Nombre</label>
        <input
          className="form-control"
          type="text"
          name="nombre"
          value={dialogProps.curso?.nombre && dialogProps.curso?.nombre}
          onChange={(e)=> dialogProps.onChange(e)}
        />
        <br />

        <label>Creditos</label>
        <input
          className="form-control"
          type="number"
          name="creditos"
          value={dialogProps.curso?.creditos && dialogProps.curso?.creditos }
          onChange={(e)=> dialogProps.onChange(e)}
        />
        <br />

        <label>Descripcion</label>
        <input
          className="form-control"
          type="text"
          name="descripcion"
          value={dialogProps.curso?.descripcion && dialogProps.curso?.descripcion}
          onChange={(e)=> dialogProps.onChange(e)}
        />
        <br />
      </div>
    </ModalBody>
    <ModalFooter>
      <button className="btn btn-primary" onClick={() => dialogProps.peticion()}>
        {dialogProps.curso ? 'Editar' : 'Insertar'}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dialogProps.onClose()}
      >
        Cancelar
      </button>
    </ModalFooter>
  </Modal>

  )
}