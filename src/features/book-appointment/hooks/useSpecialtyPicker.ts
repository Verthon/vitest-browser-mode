import { useReducer } from "react";

import { pickerReducer, initialState, canNext, createKeyHandler } from "../services/specialtyPicker";


export const useSpecialtyPicker = () => {
	const [state, dispatch] = useReducer(pickerReducer, initialState);
	return {
		state,
		dispatch,
		canNext: canNext(state),
		keyHandler: createKeyHandler(dispatch),
	};
};
