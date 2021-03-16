import Header from './components/Header'
import { GlobalStyle } from './styles/global'
import Dashboard from "./components/Dashboard";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  )
}
