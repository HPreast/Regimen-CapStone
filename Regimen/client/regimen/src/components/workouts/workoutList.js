import React, { useEffect, useState } from "react";
import { getAllWorkouts } from "../../modules/workoutManager";
import { WorkoutCard } from "./workoutCard";
import { Link } from "react-router-dom";

export const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);

    const getAll = () => {
        return getAllWorkouts()
            .then(res => setWorkouts(res))

    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            <h2>My Workouts</h2>
            <div>
                <Link to={`/workoutForm`}><button>Create New</button></Link>
                {workouts?.map(workout => {
                    return <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                })}
            </div>
        </>
    )
}