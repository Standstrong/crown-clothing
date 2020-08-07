import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER, //its in uppercsae with _ because it should never change
	payload: user
});

