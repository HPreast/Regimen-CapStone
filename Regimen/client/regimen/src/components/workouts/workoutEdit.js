import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { editWorkout, getWorkoutById } from "../../modules/workoutManager";

export const WorkoutEdit = () => {
    const [workout, setWorkout] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const { id } = useParams();

    const getById = () => {
        return getWorkoutById(id)
            .then(res => setWorkout(res))
    }

    const handleControlledInputChange = (e) => {
        let newWorkout = { ...workout };
        let selectedVal = e.target.value

        if (e.target.id.includes(`Id`)) {
            selectedVal = parseInt(selectedVal)
        }

        newWorkout[e.target.id] = selectedVal;
        setWorkout(newWorkout)
    }

    const handleSave = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let newWorkout = { ...workout };

        editWorkout(newWorkout)
            .then(() => history.push("/workouts"))
    }

    useEffect(() => {
        getById()
    }, [])
    return (
        <>
            <fieldset>
                <form action="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required className='form-control' placeholder='Enter a title' defaultValue={workout.name} />
                </form>
            </fieldset>
            <div className='save-button'>
                <button className='button' type='button' disabled={isLoading} variant='primary' onClick={handleSave}>Save Workout</button>
                <button className='button' onClick={() => history.push("/workouts")}>Cancel</button>
            </div>
        </>
    )
}