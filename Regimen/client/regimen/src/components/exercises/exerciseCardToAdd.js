import React, { useState } from "react";

export const ExerciseCardToAdd = ({ exercise, workoutDayId, id }) => {
    return (
        <>
            <a href={`/exercises/exerciseDetails/${exercise.id}/${workoutDayId}/${id}`} style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'red' }}>
                <div className="exercise">
                    {exercise.name}
                </div>
            </a>
        </>
    )
}