

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'
import { Producto } from './Producto';


export const Productos = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        //COnsultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos()
    }, [])

    //Obtener el state
    const productos = useSelector(state => state.productos.productos)
    // console.log(productos);

    return (
        <>
            <h2 className="text-2xl text-center">Listado de productos</h2>

            {
                productos.length === 0 ? (<p className="text-center">No hay productos aun...</p>) :

                    (
                        <div className="flex justify-center">
                            <table className="table-auto border-separate border-spacing-4 border border-slate-500 w-screen mt-10 hover:shadow-lg transition-all rounded-xl">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className='border border-slate-600'>Nombre</th>
                                        <th className='border border-slate-600'>Precio</th>
                                        <th className='border border-slate-600'>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody className="">
                                    {
                                        // productos.length === 0 ? 'No hay productos' : 
                                        (
                                            productos.map(producto => (
                                                <Producto
                                                    key={producto.id}
                                                    producto={producto}
                                                />
                                            ))
                                        )}
                                </tbody>
                            </table>
                        </div>
                    )
            }

        </>
    )
}
