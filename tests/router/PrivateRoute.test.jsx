/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";




describe('PrivateRoute tests', () => {

    test('should show the children if is not logged', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Goku',
                id: 'ABC'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>private route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug();
        expect( screen.getByText('private route') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });

})