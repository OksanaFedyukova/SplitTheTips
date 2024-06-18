export interface IArea {
  porcentaje: number;
  empleados: {
    nombre: string;
    horas: number;
    propinas: number;
  }[];
}
  export interface IAreaFormProps {
    agregarArea: (nuevaArea: { nombre: string; porcentaje: number }) => void;
    mostrarMensaje: (mensaje: string) => void;
  }

  export const agregarNuevaArea = (nuevaArea: IArea, areasActuales: IArea[]): IArea[] => {
  return [...areasActuales, nuevaArea];
};

export const verificarNombreExistente = (nombre: string, areasActuales: IArea[]): boolean => {
  return areasActuales.some(area => area.nombre === nombre);
};