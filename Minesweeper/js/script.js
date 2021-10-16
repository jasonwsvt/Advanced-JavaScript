function createMinefield(width, height) {
	let minefield = {}
	minefield.rows = []
	minefield.height = height
	minefield.width = width

	for (let y = 0; y < height; y++) {
		let row = {}
		row.spots = []

		for (let x = 0; x < width; x++) {
			let spot = {}
			spot.isCovered = true
			spot.content = "empty"
			row.spots.push(spot)
		}
		minefield.rows.push(row)
	}
	placeRandomMines(minefield)
	determineAllAdjacentMines(minefield)
	return minefield
}

function getSpot(minefield, row, spot) {
	return minefield.rows[row].spots[spot]
}

function placeRandomMines(minefield) {
	for (let i = 0; i < 10; i++) {
		let row = Math.floor(Math.random() * minefield.height)
		let column = Math.floor(Math.random() * minefield.width)
		let spot = getSpot(minefield, row, column)
		while (spot.content === "mine") {
			row = Math.floor(Math.random() * minefield.height)
			column = Math.floor(Math.random() * minefield.width)
			spot = getSpot(minefield, row, column)
		}
		spot.content = "mine"
	}
}

function tallyAdjacentMines(minefield, row, column) {
	console.log(row, column)
	let thisSpot = getSpot(minefield, row, column)

	//if this spot contains a mine then we can't place a number here
	if (thisSpot.content === "mine") return

	let mineCount = 0

	let startColumn = (column === 0) ? 0 : column - 1
	let endColumn = (column === minefield.width) ? minefield.width : column + 1
	let startRow = (row === 0) ? 0 : row - 1
	let endRow = (row === minefield.height) ? minefield.height : row + 1

	for (let x = startColumn; x <= endColumn; x++) {
		for (let y = startRow; y <= endRow; y++) {
			if ((x !== column && y !== row) || (x !== column && y === row) || (x === column && y !== row)) {
				if (getSpot(minefield, y, x).content === "mine") mineCount++
			}
		}
	}

	if (mineCount) thisSpot.content = mineCount
}

function determineAllAdjacentMines(minefield) {
	for (let y = 0; y < minefield.height; y++) {
		for (let x = 0; x < minefield.width; x++) {
			tallyAdjacentMines(minefield, y, x)
		}
	}
}

function clickAllAdjacentEmptySpaces(minefield, row, column) {

}

function reset(minefield) {

}

function hasWon(minefield) {
	for (let y = 0; y < minefield.height; y ++) {
		for (let x = 0; x < minefield.width; x++) {
			let spot = getSpot(minefield, y, x)
			if (spot.isCovered && spot.content != "mine") return false
		}
	}
	return true
}

const minesweeperModule = angular.module('MinesweeperApp', [])

const MinesweeperController = function($scope) {
	$scope.minefield = createMinefield(8, 8)
	$scope.uncoverSpot = function(spot) {
		spot.isCovered = false;

		if (spot.content === "mine") $scope.hasLostMessageVisible = true
		else {
			uncoverAdjacentSpots()
			if (hasWon($scope.minefield)) $scope.hasWonMessageVisible = true
		}
	}
}

minesweeperModule.controller('MinesweeperController', MinesweeperController)