export const setCurrentUser = user => ({
	type: 'SET_CURRENT_USER', //its in uppercsae with _ because it should never change
	payload: user
});