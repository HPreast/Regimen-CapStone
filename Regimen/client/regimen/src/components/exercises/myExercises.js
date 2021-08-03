import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";


export const MyExercises = ({ exercise, handleDeleteExercise }) => {

    return (
        <>

            <div className="exercise">
                <a href={`/exercises/exerciseDetails/${exercise.apiId}`}>{exercise.name}</a>
                <Button className="btn btn-danger" onClick={() => handleDeleteExercise(exercise.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
            </div>

        </>
    )
}