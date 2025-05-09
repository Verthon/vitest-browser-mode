import { useReducer } from "react";

import {
	canNext,
	initialState,
	timeFrameReducer,
} from "../services/timeFramePicker";

export const useTimeFramePicker = () => {
	const [state, dispatch] = useReducer(timeFrameReducer, initialState);
	return { state, dispatch, canNext: canNext(state) };
};
