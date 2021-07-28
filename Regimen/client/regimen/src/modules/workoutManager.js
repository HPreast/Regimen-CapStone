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
}

export const addWorkout = (workout) => {
    return getToken().then((token) => {
        debugger
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