const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'}
]

let instructor_names = []

//foreach method
instructors.forEach(instructor => {
    instructor_names.push(instructor.name)
})

//map method
const instructorNames = instructors.map(instructor => instructor.name)


