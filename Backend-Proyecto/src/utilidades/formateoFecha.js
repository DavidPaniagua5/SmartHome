function formatearFecha(fecha) {
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // +1 porque enero = 0
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

export default formatearFecha