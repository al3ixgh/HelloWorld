'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

    var key = '6041ed75bb19debef4838826c9c456a5';
    var city = 'Reus';

    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key;
    var getWeather = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return axios.get(url);

                        case 2:
                            result = _context.sent;

                            console.log(result.data.main);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function getWeather() {
            return _ref.apply(this, arguments);
        };
    }();

    getWeather();
    //const appRoot = document.getElementById('appRoot')

    ReactDOM.render(template, appRoot);
};

render();
