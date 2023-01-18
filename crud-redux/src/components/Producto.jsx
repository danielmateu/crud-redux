import {Link} from 'react-router-dom'

export const Producto = ({producto}) => {

    const {nombre, precio, id} = producto

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-semibold">{precio} €</span></td>
            <td className="flex justify-around gap-2">
                <Link to={`/productos/editar/${id}`} className="text-gray-400 hover:text-gray-600">Editar</Link>
                <button
                    type='button'
                    className='text-red-400 hover:text-red-500'
                >Eliminar</button>
            </td>
        </tr>
    )
}
