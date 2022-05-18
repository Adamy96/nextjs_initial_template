import { ThemeProvider } from '@context'
import { combineComponents } from '@helper'

const providers = [ThemeProvider]

const AppContextProvider = combineComponents(...providers)
export default AppContextProvider
