import React from 'react'
import YouTube from 'react-youtube';

const Auxie = () => {
  const videoId = 'GTjuUNxgev4';

  const opts = {
    height: '390',
    width: '640',
    justifyContent: 'center',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <h1 style={{textAlign:'center',}}>Auxie</h1>
    <div style={{justifyContent:'center',alignContent:'center',}}>
    <YouTube videoId={videoId} opts={opts} />

    </div>
    <p>Auxie es una plataforma dedicada a conectar profesionistas de calidad con clientes potenciales en busqueda de un experto.</p>
    <p>Contamos con funcionalidad para el cliente donde puede buscar profesionistas y filtrar por tipo de trabajo y tambien ordenar por calificaci'on y precio.</p>
    <p>El Auxie contara con acceso a nuestra dashboard donde podra visualizar sus datos, trabajos pendientes,realizados y solicitados, sus ganancias y las calificaciones que tiene al igual que un chat donde puede hablar con los clientes en tiempo real.</p>
    <p>Nuestro Admin Dashboard nos permite realizar cambios en las categorias, desactivar cuentas, realizar soporte a clientes, y tambien visualizar nuestros datos como clientes registrados, trabajos realizados totales, ganancias, entre mas.</p>
    </div>
    )
}

export default Auxie