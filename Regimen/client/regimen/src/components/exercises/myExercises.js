import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from 'reactstrap';
import { editExercise } from "../../modules/myExerciseManager";
import { GetExerciseById } from "../../modules/exerciseManager";
import { useEffect } from "react/cjs/react.production.min";


export const MyExercises = ({ exercise, handleDeleteExercise }) => {
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [saveState, setSaveState] = useState(false);

    const history = useHistory();

    const { id } = useParams()
    const [myExercise, setMyExercise] = useState({
        id: 0,
        name: "",
        workoutDayId: 0,
        apiId: 0,
        numOfSets: "",
        numOfReps: "",
        weight: ""
    })

    const toggleModal = () => setModal(!modal);

    const getEdit = () => {
        return GetExerciseById(myExercise.id)
            .then(res => {
                setMyExercise(res);
            })
    }

    const handleInputChange = (event) => {
        let newExercise = { ...myExercise }
        const key = event.target.id
        const value = event.target.value
        newExercise[key] = value;
        setMyExercise(newExercise);
    }

    const handleEditExercise = (e) => {
        let newExercise = { ...myExercise }
        newExercise.name = exercise.name
        newExercise.workoutDayId = exercise.workoutDayId
        newExercise.numOfSets = myExercise.numOfSets
        newExercise.numOfReps = myExercise.numOfReps
        newExercise.weight = myExercise.weight
        newExercise.id = exercise.id
        setMyExercise(newExercise);
        editExercise(newExercise)
            .then(() => setSaveState(!saveState))
        // .then(() => history.push(`/workouts/workoutDetails/${id}`))
    }

    // const refreshEdit = () => {
    //     history.push(`/workouts/workoutDetails/${id}`)
    // }

    // useEffect(() => {
    //     refreshEdit();
    // }, [saveState])
    return (
        <>

            <div className="exercise">
                <a href={`/exercises/exerciseDetails/${exercise.apiId}`} style={{ color: 'white', textDecoration: 'none' }} activestyle={{ color: 'red' }}><h6>{exercise.name}</h6>
                    <p>{exercise.numOfSets}x sets of {exercise.numOfReps} repitions with {exercise.weight}lbs.</p></a>
                <FontAwesomeIcon icon={faTrash} className="delete" style={{ color: 'red' }} onClick={() => handleDeleteExercise(exercise.id)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faEdit} className="edit" style={{ color: '#6FAE57' }} onClick={() => {
                    toggleModal();
                    // getEdit();
                }}></FontAwesomeIcon>
            </div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Edit Reps</ModalHeader>
                <ModalBody>
                    <Input id="numOfSets" type="text" placeholder={"Number of Sets"} onChange={handleInputChange}></Input>
                    <Input id="numOfReps" type="text" placeholder={"Repetitions"} onChange={handleInputChange}></Input>
                    <Input id="weight" type="text" placeholder={"Weight (in lbs)"} onChange={handleInputChange}></Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => {
                        handleEditExercise();
                        toggleModal();
                    }} disabled={isLoading}>Update Exercise</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </>
    )
}