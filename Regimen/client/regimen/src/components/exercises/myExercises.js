import React from "react";
import { Button } from "reactstrap";


export const MyExercises = ({ exercise, handleDeleteExercise }) => {

    return (
        <>

            <div className="exercise">
                <a href={`/exercises/exerciseDetails/${exercise.apiId}`}>{exercise.name}</a>
                <Button className="btn btn-danger" onClick={() => handleDeleteExercise(exercise.id)}>Remove</Button>
            </div>

        </>
    )
}