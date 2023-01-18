

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'


export const Productos = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        //COnsultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos()
    }, [])


    return (
        <>
            <h2 className="text-2xl text-center">Listado de productos</h2>

            <table className="table-auto w-full my-10 hover:shadow-lg transition-all rounded-xl">
                <thead className="bg-gray-200 my-10">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody className="">

                </tbody>
            </table>
        </>
    )
}
