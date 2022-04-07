import React, { useEffect, useState } from "react";
import { getAllWorkouts, deleteWorkout } from "../../modules/workoutManager";
import { WorkoutCard } from "./workoutCard";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

export const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);

    const currentUser = firebase.auth().currentUser;
    const getAll = () => {
        return getAllWorkouts()
            .then(res => setWorkouts(res));

    }

    const handleDeleteWorkout = (id) => {
        let yes = window.confirm("Are you sure you want to delete this workout?")
        if (yes === true) {
            deleteWorkout(id)
                .then(getAll())
        }
    }

    console.log(currentUser);
    console.log(workouts);
    useEffect(() => {
        getAll()
    }, [])


    return (
        <>
            <h2>My Workouts</h2>
            <Link to={`/workoutForm`}><button className="button">Create New</button></Link>
            <div>
                {workouts?.map(workout => {
                    // if (workout.userId === currentUser.Id) {

                    return <WorkoutCard
                        key={workout.id}
                        workout={workout}
                        handleDeleteWorkout={handleDeleteWorkout}
                    />
                    // }
                })}
            </div>
        </>
    )
}