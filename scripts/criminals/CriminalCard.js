//Name
// Age
// Conviction
// Dates of incarceration

export const Criminal = (Object) => {
    return `
        <section>
        <h3>${Object.name}</h3>
        <br>
        <p>Age:${Object.age}</p>
        <p>${Object.conviction}</p>
        <p>${Object.incarceration.start}</p>
        <p>${Object.incarceration.end}</p>
        </section>
    `
}