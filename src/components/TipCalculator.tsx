/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './TipCalculator.css';
import EmployeeForm from './EmployeeForm';

interface TipCalculatorProps {
  areas: Record<string, { porcentaje: number; empleados: { nombre: string; horas: number; propinas: number }[] }>;
}

const TipCalculator: React.FC<TipCalculatorProps> = ({ areas }) => {
  const [, setAreasState] = useState(areas);

  const agregarEmpleado = (nuevoEmpleado: { area: string; nombre: string; horas: number }) => {
    setAreasState(prevAreas => {
      const updatedArea = { ...prevAreas[nuevoEmpleado.area] };
      updatedArea.empleados.push({
        nombre: nuevoEmpleado.nombre,
        horas: nuevoEmpleado.horas,
        propinas: 0 // Inicializar propinas a 0 para el nuevo empleado
      });
      return { ...prevAreas, [nuevoEmpleado.area]: updatedArea };
    });
  };

  // Convertir el objeto areas en un array de strings
  const areasArray = Object.keys(areas);

  return (
    <div className="tip-calculator">
      <h1>Calculadora de Propinas</h1>
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-vars
      <EmployeeForm areas={areasArray} agregarEmpleado={agregarEmpleado} mostrarMensaje={function (_mensaje: string): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
};

export default TipCalculator;
