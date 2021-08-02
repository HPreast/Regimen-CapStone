import React from "react";
import { Button } from "reactstrap";


export const MyExercises = ({ exercise, handleDeleteExercise }) => {

    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.apiId}`}>
                <h6>{exercise.name}</h6>
            </a>
            <Button className="btn btn-danger" onClick={() => handleDeleteExercise(exercise.id)}>Remove</Button>
        </>
    )
}