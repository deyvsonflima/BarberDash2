import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="inicio.html">
            <img src="logo pequena.png" alt="" style={{ width: '50px', height: '50px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Sair
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Cortes" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <img src="Logo de Tela.png" className="logo" alt="logo" />
      </div>

      <section id="anchor" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-4">Cortes de cabelo para todos os estilos</h2>
              <p className="lead">
                Na Barbearia BarberDash, oferecemos uma ampla variedade de cortes de cabelo para atender a todos os estilos e preferências. Nossos barbeiros experientes garantem que você saia com um visual impecável e confiante.
              </p>
              <a className="btn btn-primary" href="agenda.html" role="button">
                Agendar um horário
              </a>
            </div>
            <br />
            <br />
            <br />
            <div className="col-lg-6">
              <img src="cortes.jpg" className="img-fluid" alt="Corte de cabelo" />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="sobre" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="sobre.jpg" className="img-fluid" alt="Sobre a barbearia" />
            </div>
            <div className="col-lg-6">
              <h2 className="display-4">Sobre BarberDash</h2>
              <p className="lead">
                A Barbearia BarberDash é o lugar perfeito para homens que valorizam seu estilo e bem-estar. Com uma equipe de barbeiros altamente qualificados e um ambiente acolhedor, proporcionamos uma experiência única de cuidados pessoais.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 BarberDash. Todos os direitos reservados.</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default App;
