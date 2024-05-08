export enum NavTypes {
  SET_MOB,
}

interface NavAction {
  type: NavTypes;
  payload: boolean;
}

export interface NavState {
  isMobile: boolean;
}

export function NavbarRedu(state: NavState, action: NavAction) {
  switch (action.type) {
    case NavTypes.SET_MOB:
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
}
