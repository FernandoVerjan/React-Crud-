import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import courseModel from '../../models/courseModel';


interface alertProps{
    isOpen: boolean;
    curso?: courseModel;
    onClose: Function;
    peticion: Function;
}

export default function ModalAlert(alertProps: alertProps) {

  return (

    <Modal isOpen={alertProps.isOpen} onClose={() => alertProps.onClose()}>
        <ModalHeader>
          <div>
            <h3>Eliminar Curso</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <p>
            Confirma que desea eliminar el curso:{" "}
            <b>{alertProps.curso && alertProps.curso.nombre}</b>?{" "}
          </p>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => alertProps.peticion()}>
            Sí
          </button>
          <button
            className="btn btn-danger"  
            onClick={() => alertProps.onClose()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

  )

}