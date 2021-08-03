import React, { useState } from "react";

export const ExerciseCardToAdd = ({ exercise, workoutDayId, id }) => {
    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.id}/${workoutDayId}/${id}`}>
                <div className="exercise">
                    {exercise.name}
                </div>
            </a>
        </>
    )
}