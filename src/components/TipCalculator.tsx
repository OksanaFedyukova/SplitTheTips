import React from 'react';
import './TipCalculator.css';
import EmployeeForm from './EmployeeForm';

interface TipCalculatorProps {
  areas: Record<string, { porcentaje: number; empleados: { nombre: string; horas: number; propinas: number }[] }>;
}

const TipCalculator: React.FC<TipCalculatorProps> = ({ areas }) => {
  const agregarEmpleado = (nuevoEmpleado: { area: string; nombre: string; horas: number }) => {
    // Lógica para agregar un nuevo empleado
    console.log(`Nuevo empleado agregado: ${nuevoEmpleado.nombre}`);

    // Actualizar el estado de áreas (ejemplo)
    // Esto dependerá de cómo manejes el estado de áreas en tu aplicación
    // Aquí asumimos que el estado de áreas se maneja fuera de este componente
  };

  // Convertir el objeto areas en un array de strings
  const areasArray = Object.keys(areas);

  return (
    <div className="tip-calculator">
      <h1>Calculadora de Propinas</h1>
      <EmployeeForm
        areas={areasArray}
        agregarEmpleado={agregarEmpleado}
        mostrarMensaje={(mensaje) => {
          console.error(`Error: ${mensaje}`); // Ejemplo básico de manejo de mensaje de error
        }}
      />
    </div>
  );
};

export default TipCalculator;
