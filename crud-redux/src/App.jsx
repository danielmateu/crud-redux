import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EditarProducto, Header, NuevoProducto, Productos } from './components';

//Redux
import { Provider } from 'react-redux'
import store from './store';


function App() {


  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="px-40 py-10">
          <Routes>
            <Route exact path="/" element={<Productos />} />
            <Route exact path="/productos/nuevo" element={<NuevoProducto />} />
            <Route exact path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </Provider>
    </Router>

  )
}

export default App
