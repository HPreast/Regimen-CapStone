import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetExerciseById } from "../../modules/exerciseManager";

export const ExerciseDetails = () => {
    const [exercise, setExercise] = useState({});

    const { exerciseId } = useParams()
    console.log("hello")
    const displayDetails = () => {
        debugger
        GetExerciseById(exerciseId)
            .then(res => setExercise(res))
    }

    useEffect(() => {
        displayDetails(exerciseId)
    }, [exerciseId])

    return (
        <>
            <p>{exercise.name}</p>
        </>
    )
}