import clienteAxios from '../../config/axios'
// import {axios} from 'axios'

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types'



//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch(agregarProducto())

        try {

            //Insertar en la API
            clienteAxios.post('/productos', producto)

            //Si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto))
        } catch (error) {
            console.log(error);
            //Si hay un error, cambiar el state
            dispatch(agregarProductoError(true))
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