import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React, { useEffect, useState } from "react";
import { getWeekdays } from '../../modules/workoutManager';
import { addWorkoutDay } from '../../modules/workoutDayManager';
import { Link, useHistory } from "react-router-dom"
import { CardBody, Card } from "reactstrap";
import { getExercises, getExercisesByWorkoutDay } from '../../modules/myExerciseManager';
import { MyExercises } from '../exercises/myExercises';

export const WorkoutdayCard = ({ day, id }) => {
    const [workoutDay, setWorkoutDay] = useState({
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
    const [saveState, setSaveState] = useState(false);
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

    const handleSave = () => {
        let newDay = { ...workoutDay }
        // newDay.workoutId = workoutDay.id
        addWorkoutDay(workoutDay)
            .then(() => setSaveState(!saveState))
        // .then(() => history.push(`/workouts/workoutDetails/${id}`))
    }

    useEffect(() => {
        fetchExercises();
    }, [])

    return (
        <>
            <CardBody>
                <Card>
                    <h2>{day.name}</h2>
                    <h6>{day.dayName}</h6>
                </Card>
                <div>
                    {exercises?.map(exercise => {
                        return <MyExercises key={exercise.id} exercise={exercise} />
                    })}
                </div>
                <Link to={`/exercises/${day.id}/${id}`}><Button>Add an Exercise</Button></Link>
            </CardBody>
            <Button className="btn btn-success mx-5 mt-3" onClick={() => {
                toggleModal();
                fetchDays();
            }} disabled={isLoading}>Edit</Button>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>New Workout Day</ModalHeader>
                <ModalBody>
                    <Input type="text" placeholder="Name..." onChange={handleInputChange}></Input>
                    <Dropdown isOpen={toggle.workoutDay} toggle={() => setToggle({ workoutDay: !toggle.workoutDay })}>
                        <DropdownToggle caret>
                            {workoutDay.dayName ? workoutDay.dayName : <>Weekday</>}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Choose a Day</DropdownItem>
                            {weekdays.map(day => {
                                return <DropdownItem id={day.id} key={day.id} onClick={handleDropdown}>{day.name}</DropdownItem>
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => {
                        handleSave()
                        toggleModal()
                    }} disabled={isLoading}>Update Day</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}