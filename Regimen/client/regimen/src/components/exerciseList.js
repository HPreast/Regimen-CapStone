import React, { useEffect, useState } from "react";
import { GetAbsExercises, GetArmExercises, GetBackExercises } from "../modules/exerciseManager";
import { AbsExerciseCard } from "./absExerciseCard";
import { ArmsExerciseCard } from "./armsExerciseCard";
import { BackExerciseCard } from "./backExerciseCard";

export const ExerciseList = () => {
    const [abExercises, setAbExercises] = useState([]);
    const [isAbsVisible, setIsAbsVisible] = useState(false);
    const [armExercises, setArmExercises] = useState([]);
    const [isArmsVisible, setIsArmsVisible] = useState(false);
    const [backExercises, setBackExercises] = useState([]);
    const [isBackVisible, setIsBackVisible] = useState(false);

    const getAbExercises = async () => {
        let array = await GetAbsExercises()
        setAbExercises(array.results)
        console.log("abs", array)
    }

    const getArmsExercises = async () => {
        let armsArray = await GetArmExercises()
        setArmExercises(armsArray.results)
        console.log("arms", armsArray)
    }

    const getBackExercises = async () => {
        let backArray = await GetBackExercises()
        setBackExercises(backArray.results)
        console.log("back", backArray)
    }

    useEffect(() => {
        getAbExercises()
        getArmsExercises()
        getBackExercises()
    }, [])

    return (
        <>
            <div className="absCard">
                {isAbsVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsAbsVisible(true)}>Abs</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsAbsVisible(false)}>Abs</button>
                        {abExercises?.map(exercise => {
                            return <AbsExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        })}
                    </>
                }
            </div>
            <div className="armsCard">
                {isArmsVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsArmsVisible(true)}>Arms</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsArmsVisible(false)}>Arms</button>
                        {armExercises?.map(exercise => {
                            return <ArmsExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        })}
                    </>
                }
            </div>
            <div className="backCard">
                {isBackVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsBackVisible(true)}>Back</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsBackVisible(false)}>Back</button>
                        {backExercises?.map(exercise => {
                            return <BackExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        })}
                    </>
                }
            </div>
        </>
    )
}