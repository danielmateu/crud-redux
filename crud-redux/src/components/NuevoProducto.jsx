

export const NuevoProducto = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl mb-10">Agregar nuevo producto</h2>
            <form
                className="bg-white py-10 w-full m-4 md:w-10/12 md:m-0   rounded-lg px-4 shadow-sm hover:shadow-lg transition-all"
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
                        // value={nombre}
                        // onChange={e => setNombre(e.target.value)}
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
                        // value={descripcion}
                        // onChange={e => setDescripcion(e.target.value)}
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
