// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import AuthChecker from './auth/AuthChecker'


function App() {

  return (
    // <BrowserRouter>
      <HashRouter>
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                  ) : (
                    <route.component />
                  )
                }
                />
            )) }
          </Routes>
        </Provider>
      </HashRouter>
    // {/* </BrowserRouter> */}
  )
}

export default App