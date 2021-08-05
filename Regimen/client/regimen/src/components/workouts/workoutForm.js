import React, { useState } from "react";
import { useHistory } from "react-router";
import { ButtonGroup, Button } from "reactstrap";
import { addWorkout } from "../../modules/workoutManager";

export const WorkoutForm = () => {
    const [workout, setWorkout] = useState({
        name: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

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

        addWorkout(newWorkout)
            .then(() => history.push("/workouts"))
    }

    return (
        <>
            <fieldset>
                <form action="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required className='form-control' placeholder='Enter a title' />
                </form>
            </fieldset>
            {/* <ButtonGroup> */}
            <Button className='button' type='button' disabled={isLoading} variant='primary' onClick={handleSave}>Save Workout</Button>
            <Button className='button' type='button' disabled={isLoading} variant='primary' onClick={() => history.push("/workouts")}>Cancel</Button>
            {/* </ButtonGroup> */}
        </>
    )
}