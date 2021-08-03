import React, { useState } from "react";

export const ExerciseCard = ({ exercise, workoutDayId, id }) => {
    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.id}`}>
                <div className="exercise">
                    {exercise.name}
                </div>
            </a>
        </>
    )
}