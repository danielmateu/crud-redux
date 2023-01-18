import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux"
import { editarProductoAction } from "../actions/productoActions";

import {useNavigate} from 'react-router-dom'

export const EditarProducto = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        id: ''
    })

    //Producto a editar
    const productoEditar = useSelector(state => state.productos.productoEditar);

    useEffect(() => {
        setProducto(productoEditar)
    }, [productoEditar])

    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        });

    }

    const {nombre, precio, id} = producto

    const submitEditarProducto = e => {
        e.preventDefault();

        dispatch(editarProductoAction(producto));

        navigate('/')
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl mb-10">Editar producto</h2>
            <form
                onSubmit={submitEditarProducto}
                className="bg-white py-10 w-full m-4 md:w-10/12 md:m-0 rounded-lg px-4 shadow-sm hover:shadow-lg transition-all"

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
                        name="nombre"
                        value={nombre}
                        onChange={onChangeFormulario}
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
                        name="precio"
                        value={precio}
                        onChange={onChangeFormulario}
                    />
                </div>

                <button
                    type="submit"
                    // value={id ? 'Actualizar Proyecto' : 'Crear Proyecto'}
                    className="bg-sky-200 hover:bg-sky-400 hover:text-gray-800 p-2 font-semibold w-full rounded transition-all cursor-pointer mb-2" >Guardar Cambios</button>

                {/* {
                    msg && <Alerta alerta={alerta} />
                } */}
            </form>


        </div>
    )
}
