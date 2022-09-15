const empleados = [
    {
        id: 1,
        nombre: 'Rodrigo',
    },
    {
        id: 2,
        nombre: 'Pedro',
    },
    {
        id: 3,
        nombre: 'Maria',
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
]

const getEmpleado = (id) =>{

    return new Promise((resolve, reject) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        (empleado) 
            ? resolve(empleado) 
            : reject(`No existe el empleado con el id ${id}`); // operador ternario
        
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) =>{
        const salario = salarios.find((s) => s.id === id)?.salario;

        (salario) ? resolve(salario) : reject(`El salario del empleado con el id ${id} no existe`);
    });
}

let id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(error => console.log(error));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(error => console.log(error));

getEmpleado(id)
    .then(empleado =>{

        getSalario(id)
            .then(salario =>{
                console.log(`El empleado ${empleado} tiene un sueldo de ${salario}`);
            })
            .catch(error => console.log(error));
    })
    .catch(error => console.log(error));