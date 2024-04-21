import React from 'react';

const DefinicionProgramacionWeb = () => {
  return (
    <div className="container text-center">

      
      <h2>¿Qué es la programación web?</h2>

      <div className="mt-4"></div> {/* Espacio */}
      <img src="https://www.piensasolutions.com/blog/file/uploads/2017/10/bannerprogramacion.jpg" alt="Descripción de la imagen" className="img-fluid" /> {/* Agregar la imagen */}

      <div className="mt-4"></div> {/* Espacio */}

      <div className="text-start"> {/* Aplicar justificación al párrafo */}
        <p>
          La programación web es el proceso de creación de aplicaciones o sitios web que se ejecutan en un navegador web. Implica la utilización de diferentes lenguajes de programación y tecnologías para desarrollar funcionalidades que permitan a los usuarios interactuar con la web de diversas maneras.

          Esto puede incluir, por ejemplo, la realización de compras en un comercio electrónico, la consulta de noticias en un blog o la creación de una red social.

          Frontend y Backend: Los dos lados de la programación web
          La programación web se divide generalmente en dos componentes: el frontend y el backend.

          Front end: Es la parte del sitio web con la que interactúa directamente el usuario. Incluye todo lo que se ve y se experimenta en una página web, como el diseño, las imágenes, los botones y las animaciones. Los lenguajes de programación más comunes utilizados en el front end son HTML, CSS y JavaScript.
          Backend: Es la parte del sitio web que los usuarios no ven. Es la infraestructura que soporta el front end y se encarga de tareas como la gestión de bases de datos, la autenticación de usuarios, la lógica de negocio y la comunicación entre servidor y cliente. Los lenguajes de programación utilizados en el backend pueden variar enormemente, incluyendo Python, PHP, Java, Ruby, Node.js, entre otros.
          Lenguajes y herramientas en la programación web
          La programación web requiere el uso de varios lenguajes y herramientas, cada uno con un propósito específico.

          HTML (HyperText Markup Language): Este es el lenguaje de marcado estándar utilizado para crear la estructura de una página web.
          CSS (Cascading Style Sheets): Este lenguaje de hojas de estilo se utiliza para describir la apariencia y el formato de un documento escrito en HTML.
          JavaScript: Este es un lenguaje de programación de alto nivel que permite la interactividad en una página web.
          Frameworks y Librerías: Los frameworks y las bibliotecas como React.js, Angular, Vue.js (frontend), Django, Express.js, Laravel (backend) entre otros, proporcionan un conjunto de herramientas y directrices predefinidas que ayudan a los desarrolladores a crear aplicaciones de manera más eficiente y organizada.
        </p>
      </div>
    </div>
  );
}

export default DefinicionProgramacionWeb;
