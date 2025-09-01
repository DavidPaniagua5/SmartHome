import Usuario from "../modelos/usuario.modelo.js";

export const loginUsuario = async (req, res) => {
    const {nombreUsuario, passwordUsuario} = req.body;
    
    try {
        
        const usuarioEncontrado = await Usuario.findOne({ nombreUsuario });
        
        if (!usuarioEncontrado) {
            return res.status(404).json({ mensaje: "Usuario no encontrado"})
        }


        const passwordEncontrado = await Usuario.findOne({ passwordUsuario });

        if (!passwordEncontrado) {
            return res.status(404).json({ mensaje: "Contraseña Incorrecta"})
        } else {
            return res.json({
                nombreUsuario: usuarioEncontrado.nombreUsuario
            })
        }


    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor" })
    }
}