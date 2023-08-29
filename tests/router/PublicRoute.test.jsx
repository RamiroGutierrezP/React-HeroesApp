/* eslint-disable no-undef */

const { render, screen } = require("@testing-library/react")
const { PublicRoute } = require("../../src/router/PublicRoute")
const { AuthContext } = require("../../src/auth");
const { MemoryRouter, Route, Routes } = require("react-router-dom");


describe('PublicRoute tests', () => {

    test('should show the children if is not logged', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>hola mundo</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        // screen.debug();
        expect( screen.getByText('hola mundo') ).toBeTruthy();
    });

    test('should show the children if is logged', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Goku',
                id: 'ABC'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>hola mundo</h1>
                            </PublicRoute>
                        }></Route>
                        <Route path='marvel' element={ <h1>Página Marvel</h1>}></Route>
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();
        expect( screen.queryByText('hola mundo') ).not.toBeTruthy();

    })

})