import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAbsExercises, GetArmExercises, GetBackExercises, GetCalveExercises, GetChestExercises, GetLegExercises, GetShoulderExercises } from "../../modules/exerciseManager";
import { ExerciseCardToAdd } from "./exerciseCardToAdd";
import { Button } from "reactstrap";

export const ExerciseListToAdd = () => {
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

    const { workoutDayId, id } = useParams();

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
            <h2>Exercises</h2>
            <div className="card">
                {isAbsVisible === false ?
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsAbsVisible(true)}>Abs</Button>
                    </> :
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsAbsVisible(false)}>Abs</Button>
                        {abExercises?.map(exercise => {
                            return <ExerciseCardToAdd
                                key={exercise.id}
                                exercise={exercise}
                                workoutDayId={workoutDayId}
                                id={id}
                            />
                        })}
                    </>
                }
            </div>
            <div className="card">
                {isArmsVisible === false ?
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsArmsVisible(true)}>Arms</Button>
                    </> :
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsArmsVisible(false)}>Arms</Button>
                        {armExercises?.map(exercise => {
                            return <ExerciseCardToAdd
                                key={exercise.id}
                                exercise={exercise}
                                workoutDayId={workoutDayId}
                                id={id}
                            />
                        })}
                    </>
                }
            </div>
            <div className="card">
                {isBackVisible === false ?
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsBackVisible(true)}>Back</Button>
                    </> :
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsBackVisible(false)}>Back</Button>
                        {backExercises?.map(exercise => {
                            return <ExerciseCardToAdd
                                key={exercise.id}
                                exercise={exercise}
                                workoutDayId={workoutDayId}
                                id={id}
                            />
                        })}
                    </>
                }
            </div>
            <div className="card">
                {isCalveVisible === false ?
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsCalveVisible(true)}>Calves</Button>
                    </> :
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsCalveVisible(false)}>Calves</Button>
                        {calveExercises?.map(exercise => {
                            return <ExerciseCardToAdd
                                key={exercise.id}
                                exercise={exercise}
                                workoutDayId={workoutDayId}
                                id={id}
                            />
                        })}
                    </>
                }
            </div>
            <div className="card">
                {isChestVisible === false ?
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsChestVisible(true)}>Chest</Button>
                    </> :
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsChestVisible(false)}>Chest</Button>
                        {chestExercises?.map(exercise => {
                            return <ExerciseCardToAdd
                                key={exercise.id}
                                exercise={exercise}
                                workoutDayId={workoutDayId}
                                id={id}
                            />
                        })}
                    </>
                }
            </div>
            <div className="card">
                {isLegVisible === false ?
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsLegVisible(true)}>Legs</Button>
                    </> :
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsLegVisible(false)}>Legs</Button>
                        {legExercises?.map(exercise => {
                            return <ExerciseCardToAdd
                                key={exercise.id}
                                exercise={exercise}
                                workoutDayId={workoutDayId}
                                id={id}
                            />
                        })}
                    </>
                }
            </div>
            <div className="card">
                {isShoulderVisible === false ?
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsShoulderVisible(true)}>Shoulders</Button>
                    </> :
                    <>
                        <Button type="button" className="btn btn-primary" onClick={() => setIsShoulderVisible(false)}>Shoulders</Button>
                        {shoulderExercises?.map(exercise => {
                            return <ExerciseCardToAdd
                                key={exercise.id}
                                exercise={exercise}
                                workoutDayId={workoutDayId}
                                id={id}
                            />
                        })}
                    </>
                }
            </div>
        </>
    )
}