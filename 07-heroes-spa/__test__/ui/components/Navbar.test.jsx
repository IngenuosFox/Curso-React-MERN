import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context"
import { AppRouter } from "../../../src/router/AppRouter"
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => {
	return {
		...jest.requireActual("react-router-dom"),
		useNavigate: () => mockedUseNavigate
	}
})

describe('Pruebas en <Navbar />', () => {
	
	const contextValue = {
		logged: true, 
		user: {id: "ABC", name: "Jonathan Raya Rios"},
		logout: jest.fn()
	}

	beforeEach(() => jest.clearAllMocks())

	test('debe de mostrar el nombre del ususario', () => {

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(screen.getByText(contextValue.user.name).innerHTML).toEqual(contextValue.user.name)
	})

	test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={["/marvel"]}>
					<AppRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		)

		const logoutButton = screen.getByText("Logout")
		fireEvent.click(logoutButton)

		expect(contextValue.logout).toHaveBeenCalled()
		expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {replace: true})
	})
})