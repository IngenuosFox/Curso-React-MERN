import { types } from "../../../src/auth"

describe('Pruebas en "Typers.js"', () => {

	test('debe de regresar estos types', () => {
		expect(types).toEqual({
			login: "[Auth] Login",
			logout: "[Auth] Logout"
		})
	})
})