import React, { useState, useEffect } from 'react';
import './Reportes.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Reportes = () => {
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const response = await fetch('http://localhost:3000/lecturas/temperatura');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del servidor');
        }
        const data = await response.json();

        if (Array.isArray(data.data)) {
          setReadings(data.data);
        } else {
          throw new Error('El formato de los datos recibidos no es válido');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReadings();
  }, []);

  // Preparar los datos para la gráfica
  const chartData = {
    labels: readings.map(reading => `${reading.fecha} - ${reading.hora} `),
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: readings.map(reading => reading.temperature),
        borderColor: '#ff8000ff',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color del área bajo la línea
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Historial de Temperaturas',
      },
    },
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container-fluid p-0">
      <h1 className="mb-4">Reportes de Temperatura</h1>
      <div className="row g-4">
        {/* Tarjeta para la Gráfica de Líneas */}
        <div className="col-12">
          <div className="card shadow-sm h-100 p-3">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Tarjeta para la Tabla de Datos */}
        <div className="col-12">
          <div className="card shadow-sm h-100 p-3">
            <h5 className="card-title mb-3">Datos de Temperatura</h5>
            <div className='mb-3'>
                <buton className="btn rounded-pill btn-filtros"> Ordenar por fecha</buton>
                <buton className="btn rounded-pill btn-filtros"> Ordenar por hora</buton>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Temperatura (°C)</th>
                  </tr>
                </thead>
                <tbody>
                  {readings.map((reading, index) => (
                    <tr key={index}>
                      <td>{reading.fecha}</td>
                      <td>{reading.hora}</td>
                      <td>{reading.temperature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportes;