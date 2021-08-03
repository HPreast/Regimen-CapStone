import React from "react";
import { Card, CardBody, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
                    <Button className="btn btn-primary"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Button>
                </Link>
                <Button className="btn btn-danger" onClick={() => handleDeleteWorkout(workout.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
            </ButtonGroup>
        </Card >
    )
}