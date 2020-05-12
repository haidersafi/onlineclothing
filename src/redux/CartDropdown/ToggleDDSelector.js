import {createSelector} from 'reselect';

export const selectToggle=state=>state.toggle;
export const toggleDD=createSelector([selectToggle],toggle=>toggle.toggledropdown)