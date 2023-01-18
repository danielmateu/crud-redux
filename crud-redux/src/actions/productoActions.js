import clienteAxios from '../../config/axios';

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    // COMENZAR_DESCARGA_EXITO,
    DESCARGA_PRODUCTOS_EXITO,
    // COMENZAR_DESCARGA_ERROR,
    DESCARGA_PRODUCTOS_ERROR,

} from '../types';

import Swal from 'sweetalert2'

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())

        try {

            //Insertar en la API
            await clienteAxios.post('/productos', producto)

            //Si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto))

            //Alerta
            Swal.fire(
                'Good job!',
                'El producto se agregó correctamente!',
                'success'
            )
        } catch (error) {
            console.log(error);
            //Si hay un error, cambiar el state
            dispatch(agregarProductoError(true))

            //Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ha salido mal...',
                // footer: '<a href="">Qué ha pasado?</a>'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//FUncion que descarga los productos de la API
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos())

        try {

            const respuesta = await clienteAxios.get('/productos')
            // console.log(respuesta.data)
            dispatch(descargaProductosExistosa(respuesta.data))

        } catch (error) {
            console.log(error);
            dispatch(descargaProductosError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExistosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})