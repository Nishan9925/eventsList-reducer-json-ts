import { Action, ActionTypes, FilterTypes, IState } from "./Types";
import { IEvent } from "./Types";
export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionTypes.Set_Events:
      return {
        ...state,
        events: action.payload as IEvent[],
      };
    case ActionTypes.Set_Filter:
      return {
        ...state,
        currentFilter: action.payload as FilterTypes
      }
      case ActionTypes.Set_Delete:
      return {
        ...state,
        events: action.payload as IEvent[],
      }
    default:
      return state;
  }
};
