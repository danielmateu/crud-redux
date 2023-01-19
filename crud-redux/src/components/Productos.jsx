

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'
import { Cargando } from './Cargando';
import { Producto } from './Producto';


export const Productos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //COnsultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos()
        // eslint-disable-next-line
    }, [])

    //Obtener el state
    const productos = useSelector(state => state.productos.productos)
    // console.log(productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector ( state => state.productos.loading);

    return (
        <>
            <h2 className="sm:text-2xl text-center">Listado de productos</h2>
            {error ? <p className='text-red-500 font-semibold text-center'>Ha ocurrido un error</p> : null}
            {cargando ? 
            // <p className='text-sky-500 font-semibold text-center'>Cargando...</p>
            <Cargando/>
            : (
                <div className="flex justify-center">
                            <table className="table-auto border-separate border-spacing-4 border border-slate-500 w-screen mt-10 hover:shadow-lg transition-all rounded-xl">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className='border border-slate-600 rounded p-2'>Nombre</th>
                                        <th className='border border-slate-600 rounded p-2'>Precio</th>
                                        <th className='border border-slate-600 rounded p-2'>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
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
            )}
            {/* { productos.length === 0 ? (<p className="text-center">Cargando...</p>) :

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

                                <tbody>
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
            } */}

        </>
    )
}
