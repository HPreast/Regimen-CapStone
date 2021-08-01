import React from "react";
import { Button } from "reactstrap";
import { deleteExercise } from "../../modules/myExerciseManager";

export const MyExercises = ({ exercise }) => {
    const handleDelete = (id) => {
        let yes = window.confirm("Are you sure you want to remove this exercise from your workout?")
        if (yes === true) {
            deleteExercise(id)
        }
    }
    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.apiId}`}>
                <h6>{exercise.name}</h6>
            </a>
            <Button className="btn btn-danger" onClick={() => handleDelete(exercise.id)}>Remove</Button>
        </>
    )
}