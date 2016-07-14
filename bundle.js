/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _addOnclicks = __webpack_require__(1);

	var _addOnclicks2 = _interopRequireDefault(_addOnclicks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _addOnclicks2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addOnclicks;

	var _userMove = __webpack_require__(2);

	var _userMove2 = _interopRequireDefault(_userMove);

	var _clearBoard = __webpack_require__(7);

	var _clearBoard2 = _interopRequireDefault(_clearBoard);

	var _clearScores = __webpack_require__(8);

	var _clearScores2 = _interopRequireDefault(_clearScores);

	var _config = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clearGameBoard = document.getElementById('clearBoard');
	var clearGameScores = document.getElementById('clearScores');

	function addOnclicks() {
	  _config.buttons.forEach(function (button, index) {
	    button.onclick = function () {
	      return (0, _userMove2.default)(index);
	    };
	  });

	  clearGameBoard.onclick = function () {
	    return (0, _clearBoard2.default)();
	  };
	  clearGameScores.onclick = function () {
	    return (0, _clearScores2.default)();
	  };
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userMove;

	var _checkWin = __webpack_require__(3);

	var _checkWin2 = _interopRequireDefault(_checkWin);

	var _config = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var currentValue = void 0;

	function userMove(number) {
	  if (currentValue === 'X') {
	    currentValue = 'O';
	    _config.whosTurn.innerHTML = "X's turn";
	  } else {
	    currentValue = 'X';
	    _config.whosTurn.innerHTML = "O's turn";
	  }

	  _config.buttons[number].innerHTML = currentValue;
	  _config.buttons[number].disabled = true;

	  (0, _checkWin2.default)(currentValue);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkWin;

	var _checkWinner = __webpack_require__(4);

	var _checkWinner2 = _interopRequireDefault(_checkWinner);

	var _checkTie = __webpack_require__(6);

	var _checkTie2 = _interopRequireDefault(_checkTie);

	var _config = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// let possibleWins = [
	//   [0,1,2],
	//   [3,4,5],
	//   [6,7,8],
	//   [0,3,6],
	//   [1,4,7],
	//   [2,5,8],
	//   [0,4,8],
	//   [2,4,6]
	// ]

	function checkWin(move) {

	  // let currentValues = buttons.map((button, index) => {
	  //   if(button.innerHTML === move) return index
	  //   return null
	  // })
	  // .filter(item => item || item === 0)
	  // console.log(currentValues)
	  //
	  //
	  // if(possibleWins.includes(currentValues)){
	  //   console.log(move + 'win')
	  // }
	  //
	  // possibleWins.map(possibleWin => {
	  //   console.log(possibleWin)
	  //   if(possibleWin == currentValues){
	  //     alert('win')
	  //   }
	  // })

	  // possibleWins.map(possibleWin => {
	  //   possibleWin.map(possibleW => {
	  //     if(possibleW.includes(currentValues)){
	  //       console.log('win')
	  //     }
	  //   })
	  // })

	  if (_config.buttons[0].innerHTML === move && _config.buttons[1].innerHTML === move && _config.buttons[2].innerHTML === move || _config.buttons[3].innerHTML === move && _config.buttons[4].innerHTML === move && _config.buttons[5].innerHTML === move || _config.buttons[6].innerHTML === move && _config.buttons[7].innerHTML === move && _config.buttons[8].innerHTML === move || _config.buttons[0].innerHTML === move && _config.buttons[3].innerHTML === move && _config.buttons[6].innerHTML === move || _config.buttons[1].innerHTML === move && _config.buttons[4].innerHTML === move && _config.buttons[7].innerHTML === move || _config.buttons[2].innerHTML === move && _config.buttons[5].innerHTML === move && _config.buttons[8].innerHTML === move || _config.buttons[0].innerHTML === move && _config.buttons[4].innerHTML === move && _config.buttons[8].innerHTML === move || _config.buttons[2].innerHTML === move && _config.buttons[4].innerHTML === move && _config.buttons[6].innerHTML === move) {
	    (0, _checkWinner2.default)(move, _config.wins);
	  } else {
	    (0, _checkTie2.default)(_config.wins);
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkWinner;

	var _config = __webpack_require__(5);

	function checkWinner(move, wins) {
	  wins[move] += 1;
	  document.getElementById(move + '-holder').innerHTML = wins[move];
	  _config.winner.innerHTML = move + ' Wins!';
	  _config.buttons.forEach(function (button) {
	    return button.disabled = true;
	  });
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	module.exports = {
	  buttons: [].concat(_toConsumableArray(document.querySelectorAll(".row > button"))),
	  winner: document.getElementById('winner'),
	  whosTurn: document.getElementById('whos-turn'),
	  wins: {
	    X: 0,
	    O: 0,
	    ties: 0
	  }
	  // board: [
	  //   [0,0,0]
	  //   [0,0,0]
	  //   [0,0,0]
	  // ]
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkTie;

	var _config = __webpack_require__(5);

	function checkTie(wins) {
	  var isThereATie = _config.buttons.map(function (button) {
	    return button.disabled ? true : null;
	  }).filter(function (i) {
	    return i;
	  }).length === 9;

	  if (isThereATie) {
	    wins['ties'] += 1;
	    document.getElementById('ties-holder').innerHTML = wins['ties'];
	    winner.innerHTML = 'Tie!';
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = clearBoard;

	var _config = __webpack_require__(5);

	function clearBoard(currentValue) {
	  _config.buttons.forEach(function (button) {
	    button.disabled = false;
	    button.innerHTML = ' ';
	  });

	  winner.innerHTML = ' ';
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = clearScores;

	var _config = __webpack_require__(5);

	var _clearBoard = __webpack_require__(7);

	var _clearBoard2 = _interopRequireDefault(_clearBoard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function clearScores() {
	  for (var i in _config.wins) {
	    _config.wins[i] = 0;
	    document.getElementById(i + '-holder').innerHTML = _config.wins[i];
	  }

	  (0, _clearBoard2.default)();
	}

/***/ }
/******/ ]);