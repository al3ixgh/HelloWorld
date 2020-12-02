'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getCountries = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get('https://restcountries.eu/rest/v2/all');

                    case 2:
                        result = _context.sent;

                        console.log('result: ', result.data);
                        return _context.abrupt('return', result.data);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getCountries() {
        return _ref.apply(this, arguments);
    };
}();

var countries = getCountries();

var getCountry = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(countryCode) {
        var result, countries, country;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return axios.get('https://restcountries.eu/rest/v2/all');

                    case 2:
                        result = _context2.sent;
                        countries = result.data;
                        country = countries.find(function (country) {
                            return country.alpha2Code.toLowerCase() === countryCode.toLowerCase();
                        });

                        console.log(country.name);
                        return _context2.abrupt('return', country);

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getCountry(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var country = getCountry('en');

var getCountryNameByIP = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var ipInfo, countryCode, result, countries, country;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return axios.get('https://ipinfo.io/json?token=2ad24e9889b095');

                    case 2:
                        ipInfo = _context3.sent;

                        console.log('ipInfo: ', ipInfo.data.country);
                        countryCode = ipInfo.data.country;
                        _context3.next = 7;
                        return axios.get('https://restcountries.eu/rest/v2/all');

                    case 7:
                        result = _context3.sent;
                        countries = result.data;
                        country = countries.find(function (country) {
                            return country.alpha2Code.toLowerCase() === countryCode.toLowerCase();
                        });

                        console.log(country.name);
                        render(country.name);

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function getCountryNameByIP() {
        return _ref3.apply(this, arguments);
    };
}();

getCountryNameByIP();

var appRoot = document.getElementById('appRoot');

var render = function render(country) {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Te encuentras en: ',
            country
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
