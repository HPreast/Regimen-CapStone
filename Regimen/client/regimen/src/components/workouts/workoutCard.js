import React from "react";
import { Card, CardBody, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";

export const WorkoutCard = ({ workout, handleDeleteWorkout }) => {
    return (
        <Card className="card">
            <Link to={`/workouts/workoutDetails/${workout.id}`}>
                <CardBody>
                    {workout.name}
                </CardBody>
            </Link>
            <ButtonGroup>
                <Link to={`/workouts/edit/${workout.id}`}>
                    <Button className="btn btn-primary">Edit</Button>
                </Link>
                <Button className="btn btn-danger" onClick={() => handleDeleteWorkout(workout.id)}>Delete</Button>
            </ButtonGroup>
        </Card>
    )
}