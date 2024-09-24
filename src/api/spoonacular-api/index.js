import * as api from './api'
import * as mockApi from './mock'

const useMock = parseInt(process.env.REACT_APP_USE_MOCK) === 1

const spoonacularApi = useMock ? mockApi : api

export default spoonacularApi
