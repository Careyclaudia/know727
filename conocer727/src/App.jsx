// src/App.jsx

import React, { useState } from 'react';
// Importa el componente de Formulario y los estilos
import Formulario from "./Formulario.jsx"; // Asegúrate de que la ruta sea correcta
import './App.css'; 

// Importa la imagen de fondo
import fondo from "./assets/fondo.jpg";

function App() {
  // 1. ESTADO: Controla si se debe mostrar el formulario o la vista principal
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // 2. HANDLER: Función para cambiar a la vista del formulario
  const handleMostrarFormulario = (e) => {
    e.preventDefault(); // Evita que la página salte al inicio
    setMostrarFormulario(true);
  };

  // 3. HANDLER: Función para volver a la vista principal
  const handleVolver = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="container">
      {/* --- MENÚ SUPERIOR HORIZONTAL --- */}
      <header className="navbar">
        <div className="navbar-brand">
          <h4>⚙️ SOLYTECH-CAREY</h4>
        </div>
        <nav className="navbar-links">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#tablas-section">Acerca de</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#casos">Casos de Éxito</a></li>
            {/* El enlace de Contacto ahora usa el handler si el formulario no se está mostrando */}
            <li>
              <a 
                href="#contacto" 
                onClick={!mostrarFormulario ? handleMostrarFormulario : undefined}
                style={{ cursor: 'pointer' }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main>
        {/* 4. LÓGICA CONDICIONAL: Muestra el Formulario o el contenido de la página */}
        {mostrarFormulario ? (
          // --- VISTA DEL FORMULARIO ---
          <div style={{ padding: '40px', minHeight: '80vh' }}>
            <button 
              onClick={handleVolver} 
              style={{ 
                marginBottom: '20px', 
                padding: '10px 15px', 
                backgroundColor: '#0a396aff', 
                color: 'white', 
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              ⬅️ Volver a la página principal
            </button>
            <Formulario /> 
          </div>
        ) : (
          // --- VISTA PRINCIPAL (TODO EL CONTENIDO ORIGINAL) ---
          <>
            {/* --- SECCIÓN DE INICIO --- */}
            <section
              id="inicio"
              style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%", // Se cambia de 100vw a 100% para mejor manejo de layout
                height: "100vh",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              <h1 id="titulo">“Conectando ideas, potenciando negocios.”</h1>
              <p>Bienvenido a tu espacio de innovación. Transformamos ideas en resultados digitales.</p>
            </section>

            {/* --- SECCIÓN NUESTRA IDENTIDAD --- */}
            <section id="tablas-section">
              <h2 className="text-center mt-0">Nuestra identidad.</h2>
              <p>
                SOLTECH-CAREY nace el 22 de octubre de 2011 como una consultora boutique especializada en migración de datos y sistemas de gestión de contenido (CMS). Fundada por la ingeniero en sistemas Claudia Castro en la ciudad de México, la empresa surgió en 
                un momento crucial donde las pequeñas y medianas empresas (PyMEs) comenzaban a digitalizar sus procesos, pero carecían de la pericia técnica para hacerlo de forma eficiente.
              </p>
              <table>
                <thead>
                  <tr>
                    <th> Misión</th>
                    <th></th>
                    <th> Visión</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Facilitar la transformación digital de nuestros clientes mediante soluciones tecnológicas innovadoras, seguras y a medida.
                    </td>
                    <td></td>
                    <td>
                      Ser el socio tecnológico global más confiable y referente de la industria, impulsando la innovación disruptiva.
                    </td>
                  </tr>
                  <tr>
                    {/* Nota: Las rutas de imagen con 'src/assets' son comunes en proyectos Vite/modernos. Asegúrate de que sigan funcionando. */}
                    <td><img src="./assets/mision.jpg" alt="Misión" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} /></td>
                    <td></td>
                    <td><img src="./assets/vision.jpg" alt="Visión" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} /></td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* --- SECCIÓN SERVICIOS --- */}
            <section className="page-section" id="services">
              <div className="container px-4 px-lg-5">
                <h3 className="h4 mb-2 text-center">Nuestros Servicios. </h3>
                <hr className="divider" />

                <div className="row gx-4 gx-lg-5 justify-content-center">
                  {/* Servicio 1 */}
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box mt-5">
                      <img src="src/assets/icons/web.png" alt="Web" style={{ width: '80px', maxWidth: '100%', height: 'auto' }} />
                      <h3 className="h4 mb-2">Desarrollo y diseño web</h3>
                      <p className="text-muted mb-0">
                        Creación de aplicaciones a medida (CRM, e-commerce, plataformas internas).
                      </p>
                    </div>
                  </div>

                  {/* Servicio 2 */}
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box mt-5">
                      <img src="src/assets/icons/infraweb.png" alt="Infraestructura" style={{ width: '80px', maxWidth: '100%', height: 'auto' }} />
                      <h3 className="h4 mb-2">Infraestructura web</h3>
                      <p className="text-muted mb-0">
                        Migración y gestión de sistemas en la nube para mayor escalabilidad.
                      </p>
                    </div>
                  </div>

                  {/* Servicio 3 */}
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box mt-5">
                      <img src="src/assets/icons/ciber.png" alt="Ciberseguridad" style={{ width: '80px', maxWidth: '100%', height: 'auto' }} />
                      <h3 className="h4 mb-2">Acciones de ciberseguridad</h3>
                      <p className="text-muted mb-0">
                        Estrategias y sistemas de respaldo para garantizar continuidad del negocio.
                      </p>
                    </div>
                  </div>

                  {/* Servicio 4 */}
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box mt-5">
                      <img src="src/assets/icons/soporte.png" alt="Soporte" style={{ width: '80px', maxWidth: '100%', height: 'auto' }} />
                      <h3 className="h4 mb-2">Soporte Técnico y Consultoría</h3>
                      <p className="text-muted mb-0">
                        Consultoría tecnológica y capacitación para equipos en nuevas herramientas y sistemas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Multimedia */}
                <div
                  id="multimedia"
                  className="mt-5 text-center"
                  style={{
                    backgroundColor: '#7c95a7ff',
                    padding: '40px 20px',
                    borderRadius: '10px',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                  }}
                >
                  <h3>🔌 SOLITECH-CAREY potencializa tu negocio</h3>
                  {/* Asegúrate de que la ruta del video sea correcta en tu proyecto */}
                  <video
                    controls
                    style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                  >
                    <source src="./assets/multimedia/soporte.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                </div>
              </div>
            </section>

            {/* --- SECCIÓN GALERÍA --- */}
            <section id="galeria" className="page-section">
              <div className="container">
                <h2 className="text-center mb-4">Nuestro trabajo.</h2>

                <div id="galeria-row" className="row">
                  <div className="gallery-item">
                    <img src="./assets/tec.jpg" alt="Proyecto 1" />
                    <p>Construcción de red LAN para oficina.</p>
                  </div>

                  <div className="gallery-item">
                    <img src="./assets/diseña.jpg" alt="Proyecto 2" />
                    <p>Desarrollo y diseño de página Web empresarial</p>
                  </div>

                  <div className="gallery-item">
                    <img src="./assets/seg1.jpg" alt="Proyecto 3" />
                    <p>Prevención de ataques cibernéticos.</p>
                  </div>

                  <div className="gallery-item">
                    <img src="./assets/sopo.jpg" alt="Proyecto 4" />
                    <p>Mantenimiento preventivo y correctivo de equipos de cómputo.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* --- SECCIÓN CLIENTES --- */}       
            <section id="clientes" className="page-section">
              <div className="container">
                <h2 className="text-center mb-4"> Nuestros Clientes</h2>
                <div id="clientes-row" className="row">
                  <div className="client-logo">
                    <img src="./assets/hl.jpg" alt="Cliente 1" />
                    <p>HL Contadores.</p>
                  </div>
                  <div className="client-logo">
                    <img src="./assets/conso.jpg" alt="Cliente 2" />
                    <p>Consolid cargo.</p>
                  </div>
                  <div className="client-logo">
                    <img src="./assets/mabibi.jpg" alt="Cliente 3" />
                    <p>Mabibi products.</p>
                  </div>
                  <div className="client-logo">
                    <img src="./assets/bom.jpg" alt="Cliente 4" />
                    <p>Centro de capacitación.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* --- SECCIÓN CASOS DE ÉXITO --- */}
            <section id="casos" className="page-section">
              <div className="container">
                <h2 className="text-center mb-4"> Casos de Éxito</h2>
                <div id="casos-row" className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-4 col-md-6 text-center testimonial" style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
                    <p>"Gracias a SOLYTECH-CAREY logramos digitalizar todos nuestros procesos internos en tiempo récord."</p>
                    <strong>- Hernandez Lucio Contadores.</strong>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center testimonial" style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
                    <p>"El soporte y la consultoría nos permitió mantener nuestra infraestructura segura y escalable."</p>
                    <strong>- Consolid cargo.</strong>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center testimonial" style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
                    <p>"La creatividad y profesionalismo del equipo nos ayudó a lanzar nuestro portal web en tiempo récord."</p>
                    <strong>- Centro de capacitación Bomberos por siempre.</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* --- SECCIÓN UBICACIÓN --- */}
            <section id="iframes">
              <h2>Conoce nuestra ubicación física</h2>
              {/* Nota: La URL del iframe es un placeholder y probablemente no muestre un mapa real. */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.3956425085016!2d-99.0846750!3d19.6260182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f5d22f4f45b7%3A0xf84e433da7431a18!2sPlaza%20de%20la%20Tecnologia%20Coacalco!5e0!3m2!1ses!2smx!4v1699045630000"
                style={{ width: '100%', height: '450px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Plaza de la Tecnología Coacalco"
              ></iframe>
              <p>📍 Ubicación — Plaza de la Tecnología Coacalco</p>
            </section>

            {/* --- SECCIÓN CONTACTO (MODIFICADA PARA USAR EL HANDLER) --- */}
            <section
              id="contacto"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "60px 20px",
                textAlign: "center",
                minHeight: "300px",
              }}
            >
              <h2>Contáctanos...</h2>
              <p>¿Estás listo para el éxito?....</p>
              <a
                href="#"
                onClick={handleMostrarFormulario} // << Llama a la función para mostrar el formulario
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: "#0a396aff",
                  borderColor: "#e8ecf1ff",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  marginTop: "20px",
                  textDecoration: "none",
                  cursor: 'pointer', // Añadido para mejor UX
                }}
              >
                Ir al formulario de contacto
              </a>
            </section>
          </>
        )}
      </main>

      {/* --- PIE DE PÁGINA (Se mantiene fuera de la condicional para que se vea siempre) --- */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} SOLYTECH-CAREY. Todos los derechos reservados.</p>
          <div className="social-icons">
            {/* Asegúrate de que las rutas de las imágenes de redes sociales sean correctas */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="./assets/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="./assets/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;