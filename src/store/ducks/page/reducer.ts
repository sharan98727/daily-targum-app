import { types, State } from './types';

const initialState: State = {
  items: {}
};

export default function reducer(state = initialState, action: any) {
  const items: any = Object.assign({}, state.items);
  switch (action.type) {
    case types.LOAD_PAGE:
      items[action.payload.slug] = action.payload.data;
      return {
        ...state,
        items
      };
    case types.SET_NOT_FOUND:
      items[action.payload.slug] = null;
      return {
        ...state,
        items
      };
    default:
      return state;
  }
}