import React, { memo } from 'react';

// Es para que no afecte el componente o en este caso no
// se vuelva a redibujar cuando no es necesario usando memo

// Forma comun => React.memo
// Otra es sin React
export const Small = React.memo(({ value }) => {
  
  console.log('Me volvi a generar :C');

  return (
    <small>{ value }</small>
  );
});