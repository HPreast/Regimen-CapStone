import React, { useEffect, useState } from "react";
import { getAbsExercises } from "../modules/exerciseManager";
import { AbsExerciseCard } from "./absExerciseCard";

export const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [isAbsVisible, setIsAbsVisible] = useState(false);

    const getAbExercises = async () => {
        let array = await getAbsExercises()
        setExercises(array.results)
    }

    useEffect(() => {
        getAbExercises();
    }, [])

    return (
        <>
            <div>
                {isAbsVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsAbsVisible(true)}>Abs</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsAbsVisible(false)}>Abs</button>
                        {exercises?.map(exercise => {
                            return <AbsExerciseCard
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