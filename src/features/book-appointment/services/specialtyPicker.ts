export type PickerState = { selectedId: string | null };

export const initialState: PickerState = { selectedId: null };

export type PickerAction = { type: "select"; id: string } | { type: "reset" };

export const pickerReducer = (
	state: PickerState,
	action: PickerAction
): PickerState => {
	switch (action.type) {
		case "select":
			return { selectedId: action.id };
		case "reset":
			return initialState;
		default:
			return state;
	}
};

export const canNext = (state: PickerState) => Boolean(state.selectedId);

export const createKeyHandler =
	(dispatch: (a: PickerAction) => void) =>
	(id: string) =>
	(e: KeyboardEvent) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			dispatch({ type: "select", id });
		}
	};
