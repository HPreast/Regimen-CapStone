import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ButtonGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React, { useEffect, useState } from "react";
import { getWeekdays } from '../../modules/workoutManager';
import { editWorkoutDay, getWorkoutDaysByWorkoutId, deleteWorkoutDay } from '../../modules/workoutDayManager';
import { Link, useHistory } from "react-router-dom"
import { CardBody, Card } from "reactstrap";
import { getExercises, getExercisesByWorkoutDay } from '../../modules/myExerciseManager';
import { deleteExercise } from "../../modules/myExerciseManager";
import { MyExercises } from '../exercises/myExercises';

export const WorkoutdayCard = ({ day, id, handleDelete, saveState, setSaveState }) => {
    const [workoutDay, setWorkoutDay] = useState({
        id: 0,
        workoutId: 0,
        name: "",
        dayId: 0,
        dayName: ""
    });
    const [modal, setModal] = useState(false);
    const [weekdays, setWeekdays] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [toggle, setToggle] = useState({
        workoutDay: false
    })
    // const [saveState, setSaveState] = useState(false);
    const [exercises, setExercises] = useState([]);

    const history = useHistory();


    const toggleModal = () => setModal(!modal);

    const fetchDays = () => {
        return getWeekdays()
            .then(res => setWeekdays(res))
    }

    const fetchExercises = () => {
        return getExercisesByWorkoutDay(day.id)
            .then(res => setExercises(res))
    }

    const handleInputChange = (event) => {
        let newDay = { ...workoutDay };
        newDay.name = event.target.value;
        setWorkoutDay(newDay);
    }

    const handleDropdown = (event) => {
        let newDay = { ...workoutDay };
        newDay.dayName = event.target.innerText
        newDay.dayId = parseInt(event.target.id);

        setWorkoutDay(newDay)
    }

    const handleEdit = () => {
        // debugger
        let newDay = { ...workoutDay }
        newDay.id = day.id
        newDay.workoutId = id
        editWorkoutDay(newDay)
            .then(() => setSaveState(!saveState))
    }

    const handleDeleteExercise = (id) => {
        let yes = window.confirm("Are you sure you want to remove this exercise from your workout?")
        if (yes === true) {
            deleteExercise(id)
                .then(() => fetchExercises())
        }
        // else {
        //     history.push(`/workouts/workoutDetails/${id}`)
        // }
    }

    useEffect(() => {
        fetchExercises();
    }, [])

    return (
        <>
            <CardBody>
                <Card>
                    <ButtonGroup>
                        <Button className="btn btn-success mx-5 mt-3" onClick={() => {
                            toggleModal();
                            fetchDays();
                        }} disabled={isLoading}>Edit</Button>
                        <Button className="btn btn-danger" onClick={() => handleDelete(day.id)}>Delete</Button>
                    </ButtonGroup>
                    <h3>{day.name}</h3>
                    <h6>{day.dayName}</h6>
                    <Link to={`/exercises/${day.id}/${id}`}><Button>Add an Exercise</Button></Link>
                </Card>
                <div>
                    {exercises?.map(exercise => {
                        return <MyExercises key={exercise.id} exercise={exercise} handleDeleteExercise={handleDeleteExercise} />
                    })}
                </div>
            </CardBody>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Edit {day.name}</ModalHeader>
                <ModalBody>
                    <Input type="text" placeholder={day.name} onChange={handleInputChange} defaultValue={day.name}></Input>
                    <Dropdown isOpen={toggle.workoutDay} toggle={() => setToggle({ workoutDay: !toggle.workoutDay })}>
                        <DropdownToggle caret>
                            {day.dayName ? day.dayName : <>Weekday</>}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Choose a Day</DropdownItem>
                            {weekdays.map(day => {
                                return <DropdownItem id={day.id} key={day.id} onClick={handleDropdown} defaultValue={day.name}>{day.name}</DropdownItem>
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => {
                        handleEdit()
                        toggleModal()
                    }} disabled={isLoading}>Update Day</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}