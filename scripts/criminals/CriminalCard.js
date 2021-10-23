//Name
// Age
// Conviction
// Dates of incarceration

export const Criminal = (Object) => {
    return `
        <section>
        <h3>${Object.name}</h3>
        <p>Age: ${Object.age}</p>
        <p>Crime: ${Object.conviction}</p>
        <p>Term Start: ${new Date(Object.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term End: ${new Date(Object.incarceration.end).toLocaleDateString('en-US')}</p>
        </section>
    `
}