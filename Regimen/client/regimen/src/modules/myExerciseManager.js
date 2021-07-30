import "firebase/auth";
import { getToken } from "./authManager";

const _apiUrl = "/api/Exercise"

export const addExercise = (exercise) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exercise)
        })
            .then(res => res.json());
    })
}

export const getExercisesByWorkoutDay = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json());
    })
}