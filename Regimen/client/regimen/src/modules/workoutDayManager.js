import "firebase/auth";
import { getToken } from "./authManager";

const _apiUrl = "/api/WorkoutDay";

export const getAllWorkoutDays = () => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
    })
}

export const getWorkoutDaysByWorkoutId = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
    })
}

export const addWorkoutDay = (workoutDay) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(workoutDay)
        })
            .then(res => res.json());
    })
}

export const editWorkoutDay = (workoutDay) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${workoutDay.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(workoutDay)
        })
    })
}

export const deleteWorkoutDay = (id) => {
    return getToken().then((token) => {
        fetch(`${_apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
    })
}