import React, { useState } from 'react';
import Modal from 'react-modal';

function CatalogoCortes() {
  const [corteSelecionado, setCorteSelecionado] = useState('');
  const [modalAberto, setModalAberto] = useState(false);
  const [nome, setNome] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleAgendamento = (corte) => {
    setCorteSelecionado(corte);
    setModalAberto(true);
  };

  const closeModal = () => {
    setModalAberto(false);
  };

  const confirmarAgendamento = () => {
    // Aqui você pode implementar a lógica para processar o agendamento
    // Por exemplo, enviar os dados para um servidor ou armazená-los localmente
    console.log('Nome:', nome);
    console.log('Dia:', dia);
    console.log('Horário:', horario);
    console.log('Telefone:', telefone);
    closeModal();
  };

  return (
    <div>
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
        <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
          <img src="img/logo-pequena.png" alt="Logo da barbearia" style={{ maxWidth: '50px', marginRight: '10px' }} />
          BarberShop Online
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="/sobre" style={{ marginLeft: '10px', color: '#fff', textDecoration: 'none' }}>Sobre</a>
          <a href="/sair" style={{ marginLeft: '10px', color: '#fff', textDecoration: 'none' }}>Sair</a>
          <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Pesquisar corte" style={{ marginRight: '10px', padding: '5px', borderRadius: '4px', border: 'none' }} />
            <button style={{ marginRight: '10px', padding: '5px', borderRadius: '4px', backgroundColor: '#fff', color: '#333', border: 'none' }} type="submit">Buscar</button>
          </div>
        </div>
      </header>

      <div className="content" style={{ marginTop: '80px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '40px', textAlign: 'center' }}>Catálogo de Cortes de Cabelo e Barba</h1>

        <div className="corte-card" style={{ maxWidth: '400px', marginBottom: '40px' }}>
          <img src="img/corte2.jpeg" alt="Corte de cabelo 1" style={{ width: '100%', borderRadius: '10px' }} />
          <h2 style={{ fontSize: '24px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>Corte Moderno</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
            Descrição do corte de cabelo moderno.
          </p>
          <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#333', color: '#fff', borderRadius: '4px', border: 'none' }} onClick={() => handleAgendamento('Corte Moderno')}>Agendar</button>
        </div>

        <div className="corte-card" style={{ maxWidth: '400px', marginBottom: '40px' }}>
          <img src="img/corte4.jpg" alt="Corte de cabelo 2" style={{ width: '100%', borderRadius: '10px' }} />
          <h2 style={{ fontSize: '24px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>Corte Clássico</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
            Descrição do corte de cabelo clássico.
          </p>
          <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#333', color: '#fff', borderRadius: '4px', border: 'none' }} onClick={() => handleAgendamento('Corte Clássico')}>Agendar</button>
        </div>

        <div className="corte-card" style={{ maxWidth: '400px' }}>
          <img src="img/corte5.jpg" alt="Corte de cabelo 3" style={{ width: '100%', borderRadius: '10px' }} />
          <h2 style={{ fontSize: '24px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>Barba Estilizada</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
            Descrição da barba estilizada.
          </p>
          <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#333', color: '#fff', borderRadius: '4px', border: 'none' }} onClick={() => handleAgendamento('Barba Estilizada')}>Agendar</button>
        </div>

        <Modal
          isOpen={modalAberto}
          onRequestClose={closeModal}
          contentLabel="Modal de Agendamento"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 2,
            },
            content: {
              width: '400px',
              margin: '0 auto',
              border: 'none',
              borderRadius: '10px',
              padding: '20px',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            },
          }}
        >
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Agendamento</h2>

          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} style={{ marginBottom: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
          <input type="text" placeholder="Dia" value={dia} onChange={(e) => setDia(e.target.value)} style={{ marginBottom: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
          <input type="text" placeholder="Horário" value={horario} onChange={(e) => setHorario(e.target.value)} style={{ marginBottom: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
          <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} style={{ marginBottom: '20px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />

          <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#333', color: '#fff', borderRadius: '4px', border: 'none', marginBottom: '10px' }} onClick={confirmarAgendamento}>Confirmar Agendamento</button>
          <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#333', color: '#fff', borderRadius: '4px', border: 'none' }} onClick={closeModal}>Fechar</button>
        </Modal>
      </div>
    </div>
  );
}

export default CatalogoCortes;
