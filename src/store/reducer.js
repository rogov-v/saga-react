import * as types from './types';

const initialState = {};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.DO_SOMETHING:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false,
				},
			];
		default:
			return state;
	}
};

export default rootReducer;
