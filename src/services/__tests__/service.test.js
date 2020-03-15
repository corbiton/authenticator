
const AuthService = require('../auth-service')
describe('AuthService.js >> auth service should validate',()=>{

    test('whether AuthService is accessible',()=>{
        expect(AuthService).toBeTruthy()
    })

    test('whether AuthService has login function',()=>{
        const { login } = AuthService

        expect(login).toBeInstanceOf(Function)
    })
    test('whether login function returns result with no args',()=>{
        const { login } = AuthService
        expect(login()).toBe(true)

    })
    test('whether login function returns with args',()=>{
        const { login } = AuthService
        expect(login("testUser", "$666@12")).toBe("testUser")

    })
})