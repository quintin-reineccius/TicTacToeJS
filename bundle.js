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

	var _clearBoard = __webpack_require__(11);

	var _clearBoard2 = _interopRequireDefault(_clearBoard);

	var _clearScores = __webpack_require__(12);

	var _clearScores2 = _interopRequireDefault(_clearScores);

	var _config = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clearGameBoard = document.getElementById('clearBoard');
	var clearGameScores = document.getElementById('clearScores');

	function addOnclicks() {
	  var row = 0;
	  var column = 0;

	  for (var i = 0; i < _config.buttons.length; i++) {
	    _config.buttons[i].forEach(function (button) {
	      if (column === 3) {
	        column = 0;
	        row++;
	      }
	      column++;

	      button.onclick = function (column, row) {
	        return function () {
	          return (0, _userMove2.default)(column - 1, row);
	        };
	      }(column, row);
	    });
	  }

	  clearGameBoard.onclick = function () {
	    return (0, _clearBoard2.default)({ buttons: _config.buttons, board: _config.board, winner: _config.winner, table: _config.table, tbody: _config.tbody });
	  };
	  clearGameScores.onclick = function () {
	    return (0, _clearScores2.default)({ buttons: _config.buttons, board: _config.board, winner: _config.winner, wins: _config.wins, table: _config.table, tbody: _config.tbody });
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

	var _checkMove = __webpack_require__(3);

	var _checkMove2 = _interopRequireDefault(_checkMove);

	var _config = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var currentValue = void 0;

	function userMove(column, row) {
	  if (currentValue === 'X') {
	    currentValue = 'O';
	    _config.whosTurn.innerHTML = "X's turn";
	  } else {
	    currentValue = 'X';
	    _config.whosTurn.innerHTML = "O's turn";
	  }

	  _config.buttons[row][column].innerHTML = currentValue;
	  _config.buttons[row][column].disabled = true;
	  _config.board[row][column] = currentValue;

	  (0, _checkMove2.default)({ column: column, row: row, currentValue: currentValue, board: _config.board }, currentValue);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkMove;

	var _currentRow = __webpack_require__(4);

	var _currentRow2 = _interopRequireDefault(_currentRow);

	var _currentColumn = __webpack_require__(5);

	var _currentColumn2 = _interopRequireDefault(_currentColumn);

	var _currentDiagonalLeft = __webpack_require__(6);

	var _currentDiagonalLeft2 = _interopRequireDefault(_currentDiagonalLeft);

	var _currentDiagonalRight = __webpack_require__(7);

	var _currentDiagonalRight2 = _interopRequireDefault(_currentDiagonalRight);

	var _fullBoardCheck = __webpack_require__(8);

	var _fullBoardCheck2 = _interopRequireDefault(_fullBoardCheck);

	var _updateHtml = __webpack_require__(9);

	var _updateHtml2 = _interopRequireDefault(_updateHtml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function checkMove(data, currentValue) {
	  if ((0, _currentRow2.default)(data) || (0, _currentColumn2.default)(data) || (0, _currentDiagonalLeft2.default)(data) || (0, _currentDiagonalRight2.default)(data)) {
	    (0, _updateHtml2.default)(currentValue);
	  } else if ((0, _fullBoardCheck2.default)(data)) {
	    currentValue = 'ties';
	    (0, _updateHtml2.default)(currentValue);
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = currentRow;
	function currentRow(_ref) {
	  var column = _ref.column;
	  var row = _ref.row;
	  var currentValue = _ref.currentValue;
	  var board = _ref.board;

	  var currentRowCheck = board[row].filter(function (value) {
	    return value === currentValue;
	  }).length;

	  if (currentRowCheck === 3) {
	    return true;
	  }

	  return false;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = currentColumn;
	function currentColumn(_ref) {
	  var column = _ref.column;
	  var row = _ref.row;
	  var currentValue = _ref.currentValue;
	  var board = _ref.board;

	  var currentColumnCheck = board.map(function (row) {
	    return row[column];
	  }).filter(function (item) {
	    return item === currentValue;
	  }).length;

	  if (currentColumnCheck === 3) {
	    return true;
	  }

	  return false;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = currentDiagonalLeft;
	function currentDiagonalLeft(_ref) {
	  var column = _ref.column;
	  var row = _ref.row;
	  var currentValue = _ref.currentValue;
	  var board = _ref.board;

	  var DiagonalWinValues = board.map(function (row, index) {
	    return row[index];
	  }).filter(function (item) {
	    return item === currentValue;
	  }).length;

	  if (DiagonalWinValues === 3) {
	    return true;
	  }

	  return false;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = currentDiagonalRight;
	function currentDiagonalRight(_ref) {
	  var column = _ref.column;
	  var row = _ref.row;
	  var currentValue = _ref.currentValue;
	  var board = _ref.board;

	  var index = 2;
	  var DiagonalWinValues = board.map(function (row) {
	    return row[index--];
	  }).filter(function (item) {
	    return item === currentValue;
	  }).length;

	  if (DiagonalWinValues === 3) {
	    return true;
	  }

	  return false;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fullBoardCheck;
	function fullBoardCheck(_ref) {
	  var board = _ref.board;

	  var isThereATie = board.map(function (row) {
	    return row.filter(Boolean).length === 3;
	  }).filter(Boolean).length === 3;

	  if (isThereATie) {
	    return true;
	  }

	  return false;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = updateHTML;

	var _config = __webpack_require__(10);

	function updateHTML(currentValue) {
	  if (currentValue === 'ties') {
	    _config.winner.innerHTML = 'Tie!';
	  } else {
	    _config.winner.innerHTML = currentValue + ' Wins!';

	    _config.table.classList.add("winnerGif");
	    _config.tbody.classList.add("removeBlack");

	    _config.buttons.forEach(function (row) {
	      row.forEach(function (column) {
	        column.disabled = true;
	        column.classList.add("removeWhite");
	      });
	    });
	  }

	  _config.wins[currentValue] += 1;
	  document.getElementById(currentValue + '-holder').innerHTML = _config.wins[currentValue];
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	module.exports = {
	  buttons: [[].concat(_toConsumableArray(document.querySelectorAll(".row1 > td > button"))), [].concat(_toConsumableArray(document.querySelectorAll(".row2 > td > button"))), [].concat(_toConsumableArray(document.querySelectorAll(".row3 > td > button")))],
	  table: document.querySelector('table'),
	  tbody: document.querySelector('tbody'),
	  winner: document.getElementById('winner'),
	  whosTurn: document.getElementById('whos-turn'),
	  wins: {
	    X: 0,
	    O: 0,
	    ties: 0
	  },
	  board: [[false, false, false], [false, false, false], [false, false, false]]
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = clearBoard;
	function clearBoard(_ref) {
	  var buttons = _ref.buttons;
	  var board = _ref.board;
	  var winner = _ref.winner;
	  var table = _ref.table;
	  var tbody = _ref.tbody;

	  table.classList.remove("winnerGif");
	  tbody.classList.remove("removeBlack");

	  buttons.forEach(function (row) {
	    row.forEach(function (column) {
	      column.disabled = false;
	      column.innerHTML = '';
	      column.classList.remove('removeWhite');
	    });
	  });

	  board.forEach(function (row, rowIndex) {
	    row.forEach(function (column, columnIndex) {
	      board[rowIndex][columnIndex] = false;
	    });
	  });

	  winner.innerHTML = '';
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = clearScores;

	var _clearBoard = __webpack_require__(11);

	var _clearBoard2 = _interopRequireDefault(_clearBoard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function clearScores(_ref) {
	  var buttons = _ref.buttons;
	  var board = _ref.board;
	  var winner = _ref.winner;
	  var wins = _ref.wins;
	  var table = _ref.table;
	  var tbody = _ref.tbody;

	  for (var i in wins) {
	    wins[i] = 0;
	    document.getElementById(i + '-holder').innerHTML = wins[i];
	  }

	  (0, _clearBoard2.default)({ buttons: buttons, board: board, winner: winner, table: table, tbody: tbody });
	}

/***/ }
/******/ ]);