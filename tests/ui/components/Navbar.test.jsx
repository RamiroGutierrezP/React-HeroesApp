/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Navbar tests', () => {

    const contextValue = {
        logged: true,
        user: {
            logged: true,
            name: 'Rama'
        },
        logout: jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show the name of the logged user', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect(screen.getByText('Rama')).toBeTruthy();
        screen.debug()
    });

    test('should call the logout and navigate when click the button', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
    });
})