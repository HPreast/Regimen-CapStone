import React, { useState } from "react";

export const ExerciseCard = ({ exercise, workoutDayId, id }) => {
    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.id}/${workoutDayId}/${id}`}>
                <div>
                    {exercise.name}
                </div>
            </a>
        </>
    )
}