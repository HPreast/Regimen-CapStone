import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWeekdays, getWorkoutById } from "../../modules/workoutManager";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { addWorkoutDay, getAllWorkoutDays } from "../../modules/workoutDayManager";
import { WorkoutdayCard } from "./workoutDayCard";

export const WorkoutDetails = () => {
    const [workout, setWorkout] = useState({});
    const [weekdays, setWeekdays] = useState([]);
    const [workoutDay, setWorkoutDay] = useState({
        workoutId: 0,
        name: "",
        dayId: 0
    });
    const [workoutDays, setWorkoutDays] = useState([]);
    const [saveState, setSaveState] = useState(false);
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [toggle, setToggle] = useState({
        workoutDay: false
    })

    const { id } = useParams();

    const displayDetails = () => {
        getWorkoutById(id)
            .then(res => setWorkout(res))
    }

    const toggleModal = () => setModal(!modal);

    const fetchDays = () => {
        return getWeekdays()
            .then(res => setWeekdays(res))
    }

    const fetchWorkoutDays = () => {
        return getAllWorkoutDays()
            .then(res => setWorkoutDays(res))
    }

    const handleDropdown = (event) => {
        let newDay = { ...workoutDay };
        newDay.dayId = parseInt(event.target.id);
        setWorkoutDay(newDay)
        console.log(workoutDay)
    }

    const handleInputChange = (event) => {
        let newDay = { ...workoutDay };
        newDay.name = event.target.value;
        setWorkoutDay(newDay);
        console.log(workoutDay);
    }

    const handleSave = () => {
        let newDay = { ...workoutDay }
        newDay.workoutId = workoutDay.workoutId
        addWorkoutDay(workoutDay)
            .then(() => setSaveState(!saveState))
    }

    useEffect(() => {
        displayDetails();
        fetchWorkoutDays();
    }, [saveState])

    return (
        <>
            <h2>{workout.name}</h2>
            <Button className="btn btn-success mx-5 mt-3" onClick={() => {
                toggleModal();
                fetchDays();
            }} disabled={isLoading}>Add New Day</Button>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>New Workout Day</ModalHeader>
                <ModalBody>
                    <Input type="text" placeholder="Name..." onChange={handleInputChange}></Input>
                    <Dropdown isOpen={toggle.workoutDay} toggle={() => setToggle({ workoutDay: !toggle.workoutDay })}>
                        <DropdownToggle caret>
                            Weekday
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
                    }} disabled={isLoading}>Save New Day</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <div>
                {workoutDays?.map(day => {
                    return <WorkoutdayCard key={day.id} day={day} />
                })}
            </div>
        </>
    )
}