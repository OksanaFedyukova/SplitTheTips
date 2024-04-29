// TipArea.tsx
import React from 'react';
import { XCircle } from 'react-feather';
import './TipArea.css';

interface TipAreaProps {
  area: string;
  data: Area;
  eliminarArea: (nombreArea: string) => void;
  actualizarHoras: (area: string, index: number, horas: number) => void;
}

interface Area {
  porcentaje: number;
  empleados: Employee[];
}

interface Employee {
  nombre: string;
  horas: number;
  propinas: number;
}

const TipArea: React.FC<TipAreaProps> = ({ area, data, eliminarArea, actualizarHoras }) => {
  const handleHorasChange = (index: number, value: string) => {
    const nuevasHoras = parseFloat(value) || 0;
    actualizarHoras(area, index, nuevasHoras);
  };

  return (
    <div className="custom-tip-area">
      <div className="tip-area-header">
        <h3 className="area-title">{area} ({data.porcentaje}%)</h3>
        <button onClick={() => eliminarArea(area)} className="delete-button">
          <XCircle />
        </button>
      </div>
      <div className="employee-list">
        {data.empleados.map((employee, index) => (
          <div key={index} className="employee-info">
            <div className="employee-details">
              <div className="employee-name">{employee.nombre}</div>
              <input
                type="number"
                value={employee.horas}
                onChange={(e) => handleHorasChange(index, e.target.value)}
                className="hours-input"
                placeholder="Horas"
              />
              <p className="tips-amount">${employee.propinas.toFixed(2)}</p>
            </div>
            <div className="details-labels">
              <div className="hours-label">Horas Trabajadas</div>
              <div className="tips-label">Propinas Asignadas</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipArea;
