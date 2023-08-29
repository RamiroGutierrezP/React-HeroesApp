import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../src/router/AppRouter"
import { AuthContext } from "../../src/auth"

/* eslint-disable no-undef */
describe('AppRouter tests', () => {

    test('should show the login if is not logged', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        // screen.debug()
        expect(screen.getAllByText('Login').length).toBe(2)
    })

    test('should show the marvel component if is logged', () => {
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Goku',
                id: 'ABC'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                        <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug()
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })
})