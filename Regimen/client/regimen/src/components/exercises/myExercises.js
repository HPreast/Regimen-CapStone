import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";


export const MyExercises = ({ exercise, handleDeleteExercise }) => {

    return (
        <>

            <div className="exercise">
                <a href={`/exercises/exerciseDetails/${exercise.apiId}`} style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'red' }}>{exercise.name}
                    <p>{exercise.numOfSets}x repetitions of {exercise.numOfReps} with {exercise.weight}lbs.</p></a>
                <FontAwesomeIcon icon={faTrash} className="delete" style={{ color: 'red' }} onClick={() => handleDeleteExercise(exercise.id)}></FontAwesomeIcon>
            </div>

        </>
    )
}