import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ButtonGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { GetExerciseById } from "../../modules/exerciseManager";
import { addExercise } from "../../modules/myExerciseManager";

export const ExerciseDetailsToAdd = () => {
    const [exercise, setExercise] = useState({});
    const [myExercise, setMyExercise] = useState({
        id: 0,
        name: "",
        workoutDayId: 0,
        apiId: 0,
        numOfSets: 0,
        numOfReps: 0,
        weight: 0
    })
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const { id, workoutDayId, workoutId } = useParams()

    const displayDetails = () => {
        GetExerciseById(id)
            .then(res => {
                res.description = res.description.replace(/(<([^>]+)>)/ig, "")
                setExercise(res)
            })
    }

    const toggleModal = () => setModal(!modal);

    const handleInputChange = (event) => {
        let newExercise = { ...myExercise }
        const key = event.target.id
        const value = event.target.value
        newExercise[key] = value;
        setMyExercise(newExercise);
    }

    const handleAdd = () => {
        let newExercise = { ...myExercise }
        newExercise.name = exercise.name
        newExercise.workoutDayId = workoutDayId
        newExercise.numOfSets = myExercise.numOfSets
        newExercise.numOfReps = myExercise.numOfReps
        newExercise.weight = myExercise.weight
        newExercise.apiId = exercise.id
        setMyExercise(newExercise);
        addExercise(newExercise)
            .then(() => history.push(`/workouts/workoutDetails/${workoutId}`))
    }

    useEffect(() => {
        displayDetails()
    }, [id])

    return (
        <>
            <div className="exerciseHeader">
                <h2>{exercise.name}</h2>
            </div>
            <div className="exerciseDetails">
                <h4>Category:</h4>
                <p>{exercise.category?.name}</p>
            </div>
            <div className="exerciseDetails">
                <h4>Description:</h4>
                {exercise.description}
            </div>
            <div className="exerciseDetails">
                {exercise.equipment?.length === 0 ?
                    <></> :
                    <>
                        <h4>Equipment:</h4>
                        {exercise.equipment?.map(equip => {
                            return <p>{equip.name}</p>
                        })}
                    </>}
            </div>
            <div className="exerciseDetails">
                {exercise.muscles?.length === 0 ?
                    <></> :
                    <>
                        <h4>Primary Muscles:</h4>
                        {exercise.muscles?.map(muscle => {
                            return <p>{muscle.name}</p>
                        })}
                    </>}
            </div>
            <div className="exerciseDetails">
                {exercise.muscles_secondary?.length === 0 ?
                    <></> :
                    <>
                        <h4>Secondary Muscles:</h4>
                        {exercise.muscles_secondary?.map(muscles => {
                            return <p>{muscles.name}</p>
                        })}
                    </>}
            </div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Set Reps</ModalHeader>
                <ModalBody>
                    <Input id="numOfSets" type="text" placeholder={"Number of Sets"} onChange={handleInputChange}></Input>
                    <Input id="numOfReps" type="text" placeholder={"Repetitions"} onChange={handleInputChange}></Input>
                    <Input id="weight" type="text" placeholder={"Weight (in lbs)"} onChange={handleInputChange}></Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => {
                        handleAdd()
                        toggleModal()
                    }} disabled={isLoading}>Add Set</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Button className="button" onClick={toggleModal}>Add to Workout</Button>
        </>
    )
}