'use strict'

import React, { useReducer } from 'react';

import { INITIAL_STATES, reducerHandler } from '../Reducer/index';

export const AllTour = React.createContext();

export default function Context(props) {

    const [state, dispatch] = useReducer(reducerHandler, INITIAL_STATES)

    return (
        <AllTour.Provider value={{ state, dispatch }}>
            {props.children}
        </AllTour.Provider>
    )
}