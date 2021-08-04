import React from "react";
import { Card, CardBody, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const WorkoutCard = ({ workout, handleDeleteWorkout }) => {
    return (
        <Card className="card">
            <Link to={`/workouts/workoutDetails/${workout.id}`} style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'red' }}>
                <CardBody>
                    {workout.name}
                </CardBody>
            </Link>
            <ButtonGroup>
                <Link to={`/workouts/edit/${workout.id}`} style={{ color: '#6FAE57' }}>
                    <FontAwesomeIcon icon={faEdit} className="edit"></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon icon={faTrash} className="delete" style={{ color: 'red' }} onClick={() => handleDeleteWorkout(workout.id)}></FontAwesomeIcon>
                {/* <Button className="btn btn-danger" onClick={() => handleDeleteWorkout(workout.id)}><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteWorkout(workout.id)}></FontAwesomeIcon></Button> */}
            </ButtonGroup>
        </Card >
    )
}