

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
//Actions de redux
import { crearNuevoProductoAction } from "../actions/productoActions"


export const NuevoProducto = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)

    // utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    // mandar llamar el action del producto action
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

    //Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault()

        //Validar formulario
    if(nombre.trim() === '' || precio <= 0) {
        console.log('Error...');
        return
    }

        //Si no hay errores

        //Crear nuevo producto
        agregarProducto({
            nombre,
            precio
        })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl mb-10">Agregar nuevo producto</h2>
            <form
                onSubmit={submitNuevoProducto}
                className="bg-white m-4 py-10 p-4   md:m-0 rounded-lg  shadow-sm hover:shadow-lg transition-all"
            // onSubmit={handleSubmit}
            >

                <div className="px-4 mb-4">
                    <label htmlFor="nombre" className="tex-gray-600 text-sm font-semibold">
                        Nombre producto
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                        placeholder="Nombre del producto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="px-4 mb-4">
                    <label htmlFor="precio" className="tex-gray-600 text-sm font-semibold">
                        Precio producto
                    </label>
                    <input
                        id="precio"
                        type='number' min={0}
                        className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                        placeholder="Precio del producto"
                        value={precio}
                        onChange={e => setPrecio(Number(e.target.value))}
                    />
                </div>
                {/* <div className="px-4 mb-4">
                    <label htmlFor="fecha-entrega" className="tex-gray-600 text-sm font-semibold">
                        Fecha de entrega
                    </label>
                    <input
                        id="fecha-entrega"
                        type='date'
                        className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                        // value={fechaEntrega}
                        // onChange={e => setFechaEntrega(e.target.value)}
                    />
                </div>
                <div className="px-4 mb-4">
                    <label htmlFor="cliente" className="tex-gray-600 text-sm font-semibold">
                        Nombre Cliente
                    </label>
                    <input
                        id="cliente"
                        type="text"
                        className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                        placeholder="Nombre del Proyecto"
                        // value={cliente}
                        // onChange={e => setCliente(e.target.value)}
                    />
                </div> */}
                <button
                    type="submit"
                    // value={id ? 'Actualizar Proyecto' : 'Crear Proyecto'}
                    className="bg-sky-200 hover:bg-sky-400 hover:text-gray-800 p-2 font-semibold w-full rounded transition-all cursor-pointer mb-2" >Agregar</button>

                {/* {
                    msg && <Alerta alerta={alerta} />
                } */}
            </form>


        </div>
    )
}
