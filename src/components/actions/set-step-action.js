export const SET_STEP = (currentPlayer) => ({
	type: "SET_STEP",
	payload: currentPlayer === "X" ? "O" : "X",
});
