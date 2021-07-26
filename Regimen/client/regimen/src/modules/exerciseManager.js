const baseUrl = "https://wger.de/api/v2"

export const GetAbsExercises = () => {
    return fetch(`${baseUrl}/exercise/?category=10&language=2`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const GetArmExercises = () => {
    return fetch(`${baseUrl}/exercise/?category=8&language=2`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const GetBackExercises = () => {
    return fetch(`${baseUrl}/exercise/?language=2&category=12`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}