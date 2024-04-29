// EmployeeForm.tsx
import React, { useState } from 'react';
import './EmployeeForm.css';

interface EmployeeFormProps {
  areas: string[];
  agregarEmpleado: (nuevoEmpleado: { area: string; nombre: string; horas: number }) => void;
  mostrarMensaje: (mensaje: string) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ areas, agregarEmpleado, mostrarMensaje }) => {
  const [nuevoEmpleado, setNuevoEmpleado] = useState({ area: '', nombre: '', horas: 0 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const horas = parseFloat(nuevoEmpleado.horas.toString());
    if (!nuevoEmpleado.area || !nuevoEmpleado.nombre.trim() || isNaN(horas) || horas < 0) {
      mostrarMensaje("Por favor, complete todos los campos correctamente.");
      return;
    }
    agregarEmpleado(nuevoEmpleado);
    setNuevoEmpleado({ area: '', nombre: '', horas: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form-container">
      <select
        value={nuevoEmpleado.area}
        onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, area: e.target.value })}
        className="custom-select"
      >
        <option value="">Seleccionar Área</option>
        {areas.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={nuevoEmpleado.nombre}
        onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, nombre: e.target.value })}
        className="custom-input"
        placeholder="Nombre del Empleado"
      />
      <input
        type="number"
        value={nuevoEmpleado.horas.toString()}
        onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, horas: parseFloat(e.target.value) })}
        className="custom-input"
        placeholder="Horas trabajadas"
      />
      <button type="submit" className="custom-button">
        Agregar Empleado
      </button>
    </form>
  );
};

export default EmployeeForm;
