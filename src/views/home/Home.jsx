import React from 'react';

function TelaInicial() {
  return (
    <div>
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
        <div className="logo" style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '20px' }}>
          <img src="img/logopequena.png" alt="Logo da barbearia" style={{ maxWidth: '50px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="/sobre" style={{ marginLeft: '10px', color: '#fff', textDecoration: 'none' }}>Sobre</a>
          <a href="/sair" style={{ marginLeft: '10px', color: '#fff', textDecoration: 'none' }}>Sair</a>
          <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Pesquisar corte" style={{ marginRight: '10px', padding: '5px' }} />
            <button style={{ marginRight: '10px', padding: '5px' }} type="submit">Buscar</button>
          </div>
        </div>
      </header>

      <div className="content" style={{ marginTop: '100px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="text" style={{ maxWidth: '600px', marginRight: '20px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Cortes de cabelo para todos os estilos</h1>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Na Barbearia BarberDash, oferecemos uma ampla variedade de cortes de cabelo para atender a todos os estilos e preferências. Nossos barbeiros experientes garantem que você saia com um visual impecável e confiante.
          </p>
          <button style={{ padding: '10px 20px', fontSize: '18px' }}>Agendar um horário</button>
        </div>
        <div className="image" style={{ position: 'relative', width: '400px', height: '400px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)', transform: 'perspective(600px) rotateY(-15deg)' }}>
          <img src="img/sobre.jpg" alt="Foto da barbearia" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} className="img-fluid" />
        </div>
      </div>

      <div className="content" style={{ marginTop: '100px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="image" style={{ position: 'relative', width: '400px', height: '400px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)', transform: 'perspective(600px) rotateY(15deg)' }}>
          <img src="img/sobre.jpg" alt="Foto da barbearia" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} className="img-fluid" />
        </div>
        <div className="text" style={{ maxWidth: '600px', marginLeft: '20px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Sobre a BarberDash</h1>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Na Barbearia BarberDash, oferecemos uma ampla variedade de cortes de cabelo para atender a todos os estilos e preferências. Nossos barbeiros experientes garantem que você saia com um visual impecável e confiante.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
