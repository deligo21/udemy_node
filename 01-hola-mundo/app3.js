console.log('Inicio de programa');

setTimeout(() => {
    console.log('Primer timeout');
}, 3000);

setTimeout(() => {
    console.log('Segundo timeout');
}, 1000);

setTimeout(() => {
    console.log('Tercer timeout');
}, 1000);

console.log('Fin de programa');