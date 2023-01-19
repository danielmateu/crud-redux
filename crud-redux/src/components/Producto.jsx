import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

//REdux
import { useDispatch } from 'react-redux'
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions'


export const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Confirmar si desea eliminar
    const confirmarEliminarProducto = (id) => {

        //Preguntar al usuario
        // console.log('Eliminando...', id);
        Swal.fire({
            title: 'Estás seguro?',
            text: "Un producto eliminado no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero eliminar el producto!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                //pasarlo al action
                dispatch(borrarProductoAction(id))
                
            }
        })
    }

    const redireccionEdicion = (producto) => {
        dispatch(obtenerProductoEditar(producto));
        navigate(`/productos/editar/${producto.id}`)
    }

    

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-semibold">{precio} €</span></td>
            <td className="flex flex-col sm:flex-row justify-around gap-2">
                <button
                    onClick={() => redireccionEdicion(producto)}
                    type='button'
                    to={`/productos/editar/${id}`}
                    className="text-gray-400 hover:text-gray-600"
                >Editar</button>
                <button
                    onClick={() => confirmarEliminarProducto(id)}
                    type='button'
                    className='text-red-400 hover:text-red-500'
                >Eliminar</button>
            </td>
        </tr>
    )
}
