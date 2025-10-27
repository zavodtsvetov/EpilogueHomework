const randomFigure = Math.floor(Math.random() * 2) === 0 ? "X" : "O";
const initialState = {
	field: ["", "", "", "", "", "", "", "", ""],
	currentPlayer: randomFigure,
	isGameEnded: false,
	isDraw: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_FIELD": {
			return { ...state, field: payload };
		}
		case "SET_STEP": {
			return {
				...state,
				currentPlayer: payload,
			};
		}
		case "IS_GAME_ENDED": {
			return { ...state, isGameEnded: payload };
		}
		case "IS_DRAW": {
			return {
				...state,
				isDraw: payload,
			};
		}
		case "RESTART": {
			return {
				...state,
				field: initialState.field,
				currentPlayer: initialState.currentPlayer,
				isGameEnded: initialState.isGameEnded,
				isDraw: initialState.isDraw,
			};
		}
		default:
			return state;
	}
};
