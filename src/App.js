import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'square',
              stroke: {
                width: 6,
                color: 'rgb(24,	39,	76);',
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
