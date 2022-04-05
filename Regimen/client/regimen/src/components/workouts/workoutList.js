import React, { useEffect, useState } from "react";
import { getAllWorkouts, deleteWorkout } from "../../modules/workoutManager";
import { WorkoutCard } from "./workoutCard";
import { Link } from "react-router-dom";

export const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);

    const getAll = () => {
        return getAllWorkouts()
            .then(res => setWorkouts(res))

    }

    const handleDeleteWorkout = (id) => {
        let yes = window.confirm("Are you sure you want to delete this workout?")
        if (yes === true) {
            deleteWorkout(id)
                .then(getAll())
        }
    }

    useEffect(() => {
        getAll()
    }, [])


    return (
        <>
            <h2>My Workouts</h2>
            <Link to={`/workoutForm`}><button className="button">Create New</button></Link>
            <div>
                {workouts?.map(workout => {
                    return <WorkoutCard
                        key={workout.id}
                        workout={workout}
                        handleDeleteWorkout={handleDeleteWorkout}
                    />
                })}
            </div>
        </>
    )
}