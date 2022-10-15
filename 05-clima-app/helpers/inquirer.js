import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1'.yellow}. Buscar ciudad`,
            },
            {
                value: 2,
                name: `${'2'.yellow}. Historial`,
            },
            {
                value: 0,
                name: `${'0'.yellow}. Salir`,
            },
        ]
    }
];


const inquirerMenu = async() => {
    
    console.clear();
    
    console.log('======================='.yellow);
    console.log(' Seleccione una opcion '.white);
    console.log('=======================\n'.yellow);
    
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const inquirerPausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'Enter'.yellow} para continuar\n`
        }
    ]
    console.log('\n');
    const {enter} = await inquirer.prompt(question);
    return enter;
}

const leerInput = async(message) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if(value.length === 0){
                return 'Por favor ingrese un valor'
            }
            return true;
        }
    }

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async(lugares = []) => {

    const choices = lugares.map((lugar, i) => {

        const idx = `${i + 1}.`.yellow;

        return{
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`,
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.yellow + 'Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccionar lugar:',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;

}

const confirmar = async(message) => {
    
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoCheckList = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.yellow;

        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });


    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);

    return ids;

}

export { inquirerMenu, inquirerPausa, leerInput, listarLugares, confirmar, mostrarListadoCheckList };