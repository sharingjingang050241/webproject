'use strict';

import {
	Alert
} from 'react-native';
const initialState = {
	spwd:false,
};

export default function logIn(state=initialState, action){
	switch(action.type){

		case "TYPES_LOGGED_PWDING":
			return {
				...state,
				spwd: true
			};

		default: 
			return state;
	}

}