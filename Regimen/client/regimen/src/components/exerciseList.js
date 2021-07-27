import React, { useEffect, useState } from "react";
import { GetAbsExercises, GetArmExercises, GetBackExercises, GetCalveExercises, GetChestExercises, GetLegExercises, GetShoulderExercises } from "../modules/exerciseManager";
import { ExerciseCard } from "./exerciseCard";

export const ExerciseList = () => {
    const [abExercises, setAbExercises] = useState([]);
    const [isAbsVisible, setIsAbsVisible] = useState(false);
    const [armExercises, setArmExercises] = useState([]);
    const [isArmsVisible, setIsArmsVisible] = useState(false);
    const [backExercises, setBackExercises] = useState([]);
    const [isBackVisible, setIsBackVisible] = useState(false);
    const [calveExercises, setCalveExercises] = useState([]);
    const [isCalveVisible, setIsCalveVisible] = useState(false);
    const [chestExercises, setChestExercises] = useState([]);
    const [isChestVisible, setIsChestVisible] = useState(false);
    const [legExercises, setLegExercises] = useState([]);
    const [isLegVisible, setIsLegVisible] = useState(false);
    const [shoulderExercises, setShoulderExercises] = useState([]);
    const [isShoulderVisible, setIsShoulderVisible] = useState(false);

    const getAbExercises = async () => {
        let array = await GetAbsExercises()
        setAbExercises(array.results)
    }

    const getArmsExercises = async () => {
        let armsArray = await GetArmExercises()
        setArmExercises(armsArray.results)
    }

    const getBackExercises = async () => {
        let backArray = await GetBackExercises()
        setBackExercises(backArray.results)
    }

    const getCalveExercises = async () => {
        let calveArray = await GetCalveExercises()
        setCalveExercises(calveArray.results)
    }

    const getChestExercises = async () => {
        let chestArray = await GetChestExercises()
        setChestExercises(chestArray.results)
    }

    const getLegExercises = async () => {
        let legArray = await GetLegExercises()
        setLegExercises(legArray.results)
    }

    const getShoulderExercises = async () => {
        let shoulderArray = await GetShoulderExercises()
        setShoulderExercises(shoulderArray.results)
    }

    useEffect(() => {
        getAbExercises()
        getArmsExercises()
        getBackExercises()
        getCalveExercises()
        getChestExercises()
        getLegExercises()
        getShoulderExercises()
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
                            return <ExerciseCard
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
                            return <ExerciseCard
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
                            return <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        })}
                    </>
                }
            </div>
            <div className="calveCard">
                {isCalveVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsCalveVisible(true)}>Calves</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsCalveVisible(false)}>Calves</button>
                        {calveExercises?.map(exercise => {
                            return <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        })}
                    </>
                }
            </div>
            <div className="chestCard">
                {isChestVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsChestVisible(true)}>Chest</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsChestVisible(false)}>Chest</button>
                        {chestExercises?.map(exercise => {
                            return <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        })}
                    </>
                }
            </div>
            <div className="legCard">
                {isLegVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsLegVisible(true)}>Legs</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsLegVisible(false)}>Legs</button>
                        {legExercises?.map(exercise => {
                            return <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        })}
                    </>
                }
            </div>
            <div className="legCard">
                {isShoulderVisible === false ?
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsShoulderVisible(true)}>Shoulders</button>
                    </> :
                    <>
                        <button type="button" className="btn btn-primary" onClick={() => setIsShoulderVisible(false)}>Shoulders</button>
                        {shoulderExercises?.map(exercise => {
                            return <ExerciseCard
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