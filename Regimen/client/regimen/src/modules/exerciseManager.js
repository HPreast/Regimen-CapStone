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

export const GetCalveExercises = () => {
    return fetch(`${baseUrl}/exercise/?language=2&category=14`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const GetChestExercises = () => {
    return fetch(`${baseUrl}/exercise/?language=2&category=11`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const GetLegExercises = () => {
    return fetch(`${baseUrl}/exercise/?language=2&category=9`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const GetShoulderExercises = () => {
    return fetch(`${baseUrl}/exercise/?language=2&category=13`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const GetExerciseById = (id) => {
    return fetch(`${baseUrl}/exerciseinfo/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}