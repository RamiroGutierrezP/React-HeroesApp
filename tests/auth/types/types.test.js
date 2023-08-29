import { types } from "../../../src/auth/types/types"

/* eslint-disable no-undef */
describe('types tests', () => {  

    test('should return this types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })

    })

})