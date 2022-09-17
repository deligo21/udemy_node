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

const getInfoUsuario = async(id) => {
    
    try {
        
        const empleado = await getEmpleado (id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;

    } catch (error) {
        
        throw error;
    }

    
}
let id = 5;

getInfoUsuario(id)
    .then(msg => {
        console.log('Todo bien');
        console.log(msg)
    })
    .catch(error => {
        console.log('Todo mal');
        console.log(error);
    })
