import { authReducer, types } from "../../../src/auth/"

describe('Pruebas en authReducer', () => {

	const testUser = {id: "ABC", name: "Jonathan Raya Rios"}

	test('debe de retornar el estado por defecto', () => {

		const initialState = {
			logged: true,
			user: testUser
		}

		const resulState = authReducer(initialState, {})

		expect(resulState).toEqual(initialState)
	})

	test('debe de llamar el login, autenticar y establecer el user', () => {
		const action = {type: types.login, payload: testUser}
		const {logged, user} = authReducer({logged: false}, action)

		expect(logged).toBeTruthy()
		expect(user).toEqual(testUser)
	})

	
	test('debe de borrar el name del ususario y logged en false', () => {
		const action = {
			type: types.logout, 
			payload: {logged: true, user: testUser}
		}

		const {logged, user} = authReducer({logged: true, user: testUser}, action)

		expect(logged).toBeFalsy()
		expect(user).toBeFalsy()
	})
})