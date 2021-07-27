import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetExerciseById } from "../../modules/exerciseManager";
import { ExerciseDetails } from "./exerciseDetails";

export const ExerciseCard = ({ exercise }) => {
    return (
        <>
            {/* <p>{exercise.name}</p> */}
            {/* <a href={`/exercises/exerciseDetails/${exercise.id}`}>{exercise.name}</a> */}
            <Link to={`/exercises/exerciseDetails/${exercise.id}`}><button className="btn btn-primary" type="button">{exercise.name}</button></Link>
        </>
    )
}