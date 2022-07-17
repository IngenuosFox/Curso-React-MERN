const { render, screen, fireEvent } = require("@testing-library/react")
const { MultipleCustomHooks } = require("../../src/03-examples")
const { useFetch } = require("../../src/hooks/useFetch")
const { useCounter } = require("../../src/hooks/useCounter")

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('Pruebas en MultipleCustomHooks', () => {
    
    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasErros: true
        })

        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole("button", {name: "Next quote"})

        expect(screen.getByText("Loading..."))
        expect(screen.getByText("BreakingBad Quotes"))
        expect(nextButton.disabled).toBeTruthy()
    })

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{author: "Mireia", quote: "Hola Mundo"}],
            isLoading: false,
            hasErros: true
        })

        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole("button", {name: "Next quote"})

        expect(screen.getByText("Hola Mundo")).toBeTruthy()
        expect(screen.getByText("Mireia")).toBeTruthy()
        expect(nextButton.disabled).toBeFalsy()
    })

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{author: "Mireia", quote: "Hola Mundo"}],
            isLoading: false,
            hasErros: true
        })

        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole("button", {name: "Next quote"})

        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()
    })
})