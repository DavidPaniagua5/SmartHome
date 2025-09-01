import clienteMqtt from "../mqtt.js";

export const postLedEncender1 = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ilumination', 'LED1:ON')
        console.log('Recibida solicitud para encender:', req.body)
        return res.status(200).json({mensaje: "Recibida solicitud para encender"})
    }catch(error){
        console.error('Error conectando con led de cuarto 1:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}

export const postLedApagar1 = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ilumination', 'LED1:OFF')
        console.log('Recibida solicitud para apagar:', req.body)
        return res.status(200).json({mensaje: "Recibida solicitud para apagar"})
    }catch(error){
        console.error('Error conectando con led de cuarto 1:', error)
        res.status(500).json({ error: "Algo ocurrió mal en el servidor"})
    }
}

export const postLedEncender2 = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ilumination', 'LED2:ON')
        console.log('Recibida solicitud para encender:', req.body)
        return res.status(200).json({mensaje: "Recibida solicitud para encender"})
    }catch(error){
        console.error('Error conectando con led de cuarto 2:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}

export const postLedApagar2 = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ilumination', 'LED2:OFF')
        console.log('Recibida solicitud para apagar:', req.body)
        return res.status(200).json({mensaje: "Recibida solicitud para apagar"})
    }catch(error){
        console.error('Error conectando con led de cuarto 2:', error)
        res.status(500).json({ error: "Algo ocurrió mal en el servidor"})
    }
}

export const postLedEncender3 = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ilumination', 'LED3:ON')
        console.log('Recibida solicitud para encender:', req.body)
        return res.status(200).json({mensaje: "Recibida solicitud para encender"})
    }catch(error){
        console.error('Error conectando con led de cuarto 3:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}

export const postLedApagar3 = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ilumination', 'LED3:OFF')
        console.log('Recibida solicitud para apagar:', req.body)
        return res.status(200).json({mensaje: "Recibida solicitud para apagar"})
    }catch(error){
        console.error('Error conectando con led de cuarto 3:', error)
        res.status(500).json({ error: "Algo ocurrió mal en el servidor"})
    }
}