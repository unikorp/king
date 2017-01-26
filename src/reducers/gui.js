import { getMuiTheme } from 'material-ui/styles';
import { blueGrey900, blueGrey700, grey400 } from 'material-ui/styles/colors';

import { TOGGLE_LEFT_NAV } from '../constants/ActionTypes';

const initialState = {
  muiTheme: getMuiTheme({
    palette: {
      primary1Color: blueGrey900,
      primary2Color: blueGrey700,
      primary3Color: grey400,
    },
  }),
  leftNavOpened: false,
};

export default function gui(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LEFT_NAV:
      return {
        ...state,
        leftNavOpened: !state.leftNavOpened,
      };

    default:
      return state;
  }
}
