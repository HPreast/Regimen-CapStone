const baseUrl = "https://wger.de/api/v2"

export const getAbsExercises = () => {
    return fetch(`${baseUrl}/exerciseinfo/?language=2&category=10`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}