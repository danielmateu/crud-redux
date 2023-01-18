import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { borrarProductoAction } from '../actions/productoActions'

//REdux


export const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto

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

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-semibold">{precio} €</span></td>
            <td className="flex flex-col sm:flex-row justify-around gap-2">
                <Link to={`/productos/editar/${id}`} className="text-gray-400 hover:text-gray-600">Editar</Link>
                <button
                    onClick={() => confirmarEliminarProducto(id)}
                    type='button'
                    className='text-red-400 hover:text-red-500'
                >Eliminar</button>
            </td>
        </tr>
    )
}
