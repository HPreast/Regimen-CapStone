import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetExerciseById } from "../../modules/exerciseManager";

export const ExerciseDetails = () => {
    const [exercise, setExercise] = useState({});

    const { id } = useParams()

    const displayDetails = () => {
        GetExerciseById(id)
            .then(res => {
                res.description = res.description.replace(/(<([^>]+)>)/ig, "")
                setExercise(res)
            })
    }

    useEffect(() => {
        displayDetails()
    }, [id])

    return (
        <>
            <div>
                <h2>{exercise.name}</h2>
            </div>
            <div className="exerciseCategory">
                <h4>Category:</h4>
                <p>{exercise.category?.name}</p>
            </div>
            <div className="exerciseDescription">
                <h4>Description:</h4>
                {exercise.description}
            </div>
            <div className="exerciseEquipment">
                {exercise.equipment?.length === 0 ?
                    <></> :
                    <>
                        <h4>Equipment:</h4>
                        {exercise.equipment?.map(equip => {
                            return <p>{equip.name}</p>
                        })}
                    </>}
            </div>
            <div className="exerciseMuscles">
                {exercise.muscles?.length === 0 ?
                    <></> :
                    <>
                        <h4>Primary Muscles:</h4>
                        {exercise.muscles?.map(muscle => {
                            return <p>{muscle.name}</p>
                        })}
                    </>}
            </div>
            <div className="exerciseMuscles">
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