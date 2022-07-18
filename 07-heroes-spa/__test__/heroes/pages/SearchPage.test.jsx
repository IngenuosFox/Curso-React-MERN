import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/"

const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => {
	return {
		...jest.requireActual("react-router-dom"),
		useNavigate: () => mockedUseNavigate
	}
})

describe('Pruebas en <SearchPage />', () => {

	beforeEach(() => jest.clearAllMocks())

	test('debe de mostrarse correctamente con valores por defecto', () => {
		const {container} = render (
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		)

		expect(container).toMatchSnapshot()
	})

	test('debe de mostrar a Batman y el input con el valor del quryString', () => {
		render (
			<MemoryRouter initialEntries={["/serach?q=batman"]}>
				<SearchPage />
			</MemoryRouter>
		)

		const input = screen.getByRole("textbox")
		expect(input.value).toBe("batman")

		const img = screen.getByRole("img")
		expect(img.src).toContain("/assets/heroes/dc-batman.jpg")

		const noResultsDanger = screen.getByLabelText("noResultsDanger")
		expect(noResultsDanger.style.display).toBe("none")
	})

	test('debe de mostrar un error si no se encuentra el heroe (batman123)', () => {
		render (
			<MemoryRouter initialEntries={["/serach?q=batman123"]}>
				<SearchPage />
			</MemoryRouter>
		)

		const noResultsDanger = screen.getByLabelText("noResultsDanger")
		expect(noResultsDanger.style.display).not.toBe("none")
	})

	test('debe de llamar al navigate a la pantalla nueva', () => {
		render (
			<MemoryRouter initialEntries={["/search"]}>
				<SearchPage />
			</MemoryRouter>
		)

		const input = screen.getByRole("textbox")
		fireEvent.change(input, {target: {value: "batman", name: "searchText"}})

		const form = screen.getByRole("form")
		fireEvent.submit(form)

		expect(mockedUseNavigate).toHaveBeenCalledWith("?q=batman")
	})
}) 