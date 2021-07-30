import firebase from "firebase/app";
import "firebase/auth";
import { getToken } from "./authManager";

const _apiUrl = "/api/Workout";

export const getAllWorkouts = () => {
    return getToken().then((token) =>
        fetch(`${_apiUrl}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }))
        .then(res => res.json());
};

export const addWorkout = (workout) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
            .then(res => res.json());
    });
};

export const editWorkout = (workout) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${workout.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
    })
};

export const getWorkoutById = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Something went wrong :(")
            }
        })
    })
};

export const deleteWorkout = (id) => {
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

export const getWeekdays = () => {
    return getToken().then((token) =>
        fetch(`/api/DaysOfWeek`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }))
        .then(res => res.json());
};