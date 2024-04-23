import { useLocalStorage } from "@/hooks/storage";

export enum HomeTypes {
  ADD = "ADICIONAR",
  REMOVE = "REMOVER",
}

interface HomeAction {
  type: HomeTypes;
  payload: number;
}

export interface HomeState {
  count: number;
}

export function HomeRedu(state: HomeState, action: HomeAction) {
  const storage = useLocalStorage();
  switch (action.type) {
    case HomeTypes.ADD:
      storage.setItem("count", state.count + action.payload);
      return {
        ...state,
        count: storage.getItem("count"),
      };
    case HomeTypes.REMOVE:
      storage.setItem("count", state.count - action.payload);
      return {
        ...state,
        count: storage.getItem("count"),
      };
    default:
      return state;
  }
}
