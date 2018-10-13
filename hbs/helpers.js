const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalize', (text) => {
    let palabras = text.split(' ');
    console.log(palabras);
    palabras.forEach((palabra,idx) => {
        let slices = palabra[0].slice(1);
        console.log(slices);
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});