import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/hooks/useTodos"

jest.mock("../../src/hooks/useTodos")

describe('Pruebas en <TodoApp />', () => {
    
    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: "TODO #1", done: false},
            {id: 2, description: "TODO #2", done: true}
        ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<TodoApp />)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp />)

        expect(screen.getByText("TODO #1")).toBeTruthy()
        expect(screen.getByText("TODO #2")).toBeTruthy()
        expect(screen.getByRole("textbox")).toBeTruthy()
    })
})