import 'babel-polyfill'

jest.mock('services/auth', () => ({
  save: jest.fn(),
  get: jest.fn(),
  clear: jest.fn()
}), {virtual: true})

jest.mock('api/authorization', () => ({
  me: jest.fn()
}), {virtual: true})
