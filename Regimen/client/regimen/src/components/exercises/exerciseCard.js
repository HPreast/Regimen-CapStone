import React, { useState } from "react";

export const ExerciseCard = ({ exercise }) => {
    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.id}`}>
                <div>
                    {exercise.name}
                </div>
            </a>
        </>
    )
}