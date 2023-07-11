import React from 'react';

function TelaInicial() {
  return (
    <div>
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '5px', fontWeight: 'bold' }}>
          <img src="img/logo_pequena.png" alt="Logo da barbearia" style={{ maxWidth: '50px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/sobre" style={{ marginLeft: '10px', color: '#fff', textDecoration: 'none' }}>Sobre</a>
          <a href="/sair" style={{ marginLeft: '10px', color: '#fff', textDecoration: 'none' }}>Sair</a>
          <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Pesquisa corte" style={{ marginRight: '10px', padding: '5px' }} />
            <button type="submit">Enter</button>
          </div>
        </div>
      </header>

      <div className="content" style={{ marginTop: '60px', padding: '20px', display: 'flex', alignItems: 'center' }}>
        <div className="text">
          <h1>Cortes de cabelo para todos os estilos</h1>
          <p>
            Na Barbearia BarberDash, oferecemos uma ampla variedade de cortes de cabelo para atender a todos os estilos e preferências. Nossos barbeiros experientes garantem que você saia com um visual impecável e confiante.
          </p>
          <button style={{ padding: '10px 20px' }}>Agendar um horário</button>
        </div>
        <div className="image">
          <img src="img/sobre.jpg" alt="Foto da barbearia" style={{ width: '100%', maxWidth: '5050px', marginTop: '20px' }} />
        </div>
      </div>

      <div className="about" style={{ marginTop: '60px', padding: '20px' }}>
        <h2>Sobre BarberDash</h2>
        <p>
          Na Barbearia BarberDash, oferecemos uma ampla variedade de cortes de cabelo para atender a todos os estilos e preferências. Nossos barbeiros experientes garantem que você saia com um visual impecável e confiante.
        </p>
  
        <div className="image">
          <img src="img/sobre.jpg" alt="Foto da barbearia" style={{ width: '100%', maxWidth: '50px', marginTop: '20px' }} />
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
