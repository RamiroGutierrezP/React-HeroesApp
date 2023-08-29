/* eslint-disable no-undef */

import { authReducer, types } from "../../../src/auth";


describe('authReducer tests', () => {

    test('should return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });
    })
    
    test('should authenticate and place the user name', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Ramiro',
                id: 21
            }
        };
        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ logged: true, user: { name: 'Ramiro', id: 21 } });
    })
    
    test('should delete the user name and logged in false', () => {
        const action = {
            type: types.logout
        };
        const state = authReducer({ logged: true, user: { name: 'Ramiro', id: 21 } }, action);
        expect( state ).toEqual({ logged: false });
    })
})