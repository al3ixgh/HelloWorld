'use strict';

var personaA = {
    nombre: 'Perico',
    edad: 26,
    city: 'Reus'
};

var personaB = {
    nombre: 'Sultana',
    edad: 26,
    city: 'Riba Roja d\'Ebre'
};

console.log(personaA.nombre);

var sumar = function sumar(e) {
    personaA.edad = personaA.edad + 1;
    //personaA.edad += 1
    //personaA.edad ++
    render();
};

var restar = function restar(e) {
    personaA.edad = personaA.edad - 1;
    //personaA.edad -= 1
    //personaA.edad --
    render();
};

var reset = function reset(e) {
    personaA.edad = 0;
    //personaA.edad += 1
    //personaA.edad ++
    render();
};

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            personaA.nombre
        ),
        React.createElement(
            'p',
            null,
            personaA.edad
        ),
        React.createElement(
            'p',
            null,
            personaA.city
        ),
        React.createElement(
            'button',
            { onClick: sumar },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: restar },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    //const appRoot = document.getElementById('appRoot')

    ReactDOM.render(template, appRoot);
};

render();
