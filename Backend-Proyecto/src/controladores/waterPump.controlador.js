import clienteMqtt from "../mqtt.js";

export const postWaterPumpActive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/pump', 'PUMP:ON')
        return res.status(200).json({mensaje: "ON"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}

export const postWaterPumpInactive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/pump', 'PUMP:OFF')
        return res.status(200).json({mensaje: "OFF"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}