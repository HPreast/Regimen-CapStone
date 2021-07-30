import React from "react";
import { useParams } from "react-router-dom";

export const MyExercises = ({ exercise }) => {
    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.apiId}`}>
                <h6>{exercise.name}</h6>
            </a>
        </>
    )
}