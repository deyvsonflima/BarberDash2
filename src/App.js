import { Segment } from 'semantic-ui-react';
import Home from './views/home/Home';

function App() {
  const footerStyles = `
    .footer {
      background-color: #f2f2f2;
      padding: 20px;
      text-align: center;
    }

    .social-icons {
      margin-top: 10px;
    }

    .social-icons a {
      margin-right: 10px;
      color: #333;
      font-size: 20px;
      text-decoration: none;
    }
  `;

  return (
    <div className="App">
      <Home />
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.facebook.com/seu-usuario-do-facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/seu-usuario-do-twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/seu-usuario-do-instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Nome da Sua Empresa. Todos os direitos reservados.</p>
      </footer>

      <style>{footerStyles}</style>
    </div>
  );
}

export default App;
