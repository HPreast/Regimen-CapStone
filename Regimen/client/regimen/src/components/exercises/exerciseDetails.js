import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Button } from "reactstrap";
import { GetExerciseById } from "../../modules/exerciseManager";
import { addExercise } from "../../modules/myExerciseManager";

export const ExerciseDetails = () => {
    const [exercise, setExercise] = useState({});
    const [myExercise, setMyExercise] = useState({
        id: 0,
        name: "",
        workoutDayId: 0,
        apiId: 0
    })

    const history = useHistory();

    const { id, workoutDayId, workoutId } = useParams()

    const displayDetails = () => {
        GetExerciseById(id)
            .then(res => {
                res.description = res.description.replace(/(<([^>]+)>)/ig, "")
                setExercise(res)
            })
    }

    // const handleAdd = () => {
    //     let newExercise = { ...myExercise }
    //     newExercise.name = exercise.name
    //     newExercise.workoutDayId = workoutDayId
    //     newExercise.apiId = exercise.id
    //     setMyExercise(newExercise);
    //     addExercise(newExercise)
    //         .then(() => history.push(`/workouts/workoutDetails/${workoutId}`))
    // }

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
        </>
    )
}