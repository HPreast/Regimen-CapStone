import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const WorkoutCard = ({ workout, handleDeleteWorkout }) => {
    return (
        <>
            <CardBody>
                <Card>
                    {workout.name}
                </Card>
                <Link to={`/workouts/edit/${workout.id}`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
                <button className="btn btn-primary" onClick={() => handleDeleteWorkout(workout.id)}>Delete</button>
            </CardBody>
        </>
    )
}