import './style.css';


document.querySelector('#app').innerHTML = `

<!-- ========== HEADER / NAVEGACIÓN ========== -->
<header class="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md transition-colors duration-300 shadow-sm">
  <nav class="max-w-6xl mx-auto flex items-center justify-between p-4 relative">
    
    <!-- Logo y nombre -->
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
        <span class="text-black font-bold text-lg">C</span>
      </div>
      <h1 class="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
        Carlos López
      </h1>
    </div>

    <!-- Menú de escritorio -->
    <ul class="hidden md:flex space-x-8">
      <li><a href="#hero" class="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors duration-200">Inicio</a></li>
      <li><a href="#sobre-mi" class="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors duration-200">Sobre mí</a></li>
      <li><a href="#habilidades" class="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors duration-200">Habilidades</a></li>
      <li><a href="#proyectos" class="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors duration-200">Proyectos</a></li>
      <li><a href="#contacto" class="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors duration-200">Contacto</a></li>
    </ul>

    <!-- Botones: Dark mode + menú móvil -->
    <div class="flex items-center space-x-4">
      <!-- Toggle Dark Mode -->
      <button id="darkToggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
        <span class="dark:hidden">🌙</span>
        <span class="hidden dark:inline">☀️</span>
      </button>

      <!-- Botón menú móvil -->
      <button id="mobileBtn" class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Menú móvil (inicialmente oculto) -->
    <ul id="mobileMenu" class="hidden absolute top-full left-0 w-full flex-col space-y-4 mt-2 px-4 pb-4 md:hidden bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <li><a href="#hero" class="block text-gray-700 dark:text-gray-300 hover:text-yellow-500">Inicio</a></li>
      <li><a href="#sobre-mi" class="block text-gray-700 dark:text-gray-300 hover:text-yellow-500">Sobre mí</a></li>
      <li><a href="#habilidades" class="block text-gray-700 dark:text-gray-300 hover:text-yellow-500">Habilidades</a></li>
      <li><a href="#proyectos" class="block text-gray-700 dark:text-gray-300 hover:text-yellow-500">Proyectos</a></li>
      <li><a href="#contacto" class="block text-gray-700 dark:text-gray-300 hover:text-yellow-500">Contacto</a></li>
    </ul>

  </nav>
</header>


    <!-- ========== HERO / BANNER PRINCIPAL ========== -->
    <section id="hero" class="h-screen hero-gradient flex flex-col justify-center items-center text-center px-4">
      <h1 class="text-5xl md:text-7xl font-bold drop-shadow-lg text-white dark:text-white">¡Hola! Soy Carlos López</h1>
      <p class="mt-4 text-xl md:text-2xl drop-shadow-md text-gray-200 dark:text-gray-300">Desarrollador web | Apasionado
        por la tecnología</p>
      <a href="#proyectos"
        class="mt-8 px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-400 transition shadow-lg hover:shadow-yellow-500/30">
        Ver proyectos
      </a>
    </section>

    <!-- ========== SOBRE MÍ ========== -->
    <section id="sobre-mi"
      class="max-w-6xl mx-auto p-8 md:p-16 bg-white dark:bg-gray-800 rounded-xl shadow-md mt-10 mb-10">
      <h2 class="text-4xl font-bold mb-6 text-yellow-500 dark:text-yellow-400">Sobre mí</h2>
      <div class="md:flex md:items-center md:gap-8">
        <img src="/images/ProfilePicture.jpeg" alt="Foto de perfil"
          class="rounded-full mb-4 md:mb-0 w-48 h-48 object-cover shadow-lg mx-auto md:mx-0">
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          ¡Hola! Soy Carlos, estudiante de la Universidad Tecnológica de León y desarrollador apasionado por crear
          experiencias web y móviles modernas. Me gusta trabajar en equipo y siempre busco mejorar mis habilidades para
          ofrecer soluciones innovadoras.
          Tengo gran interés en aprender nuevas tecnologías y aplicarlas en proyectos que generen impacto, combinando
          creatividad con buenas prácticas de programación.
        </p>
      </div>
    </section>

    <!-- ========== HABILIDADES TÉCNICAS ========== -->
<section id="habilidades" class="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
  <div class="max-w-6xl mx-auto px-8">
    <h2
      class="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
      Habilidades técnicas
    </h2>

    <!-- GRID DE HABILIDADES -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6 place-items-center">
      
      <!-- Java -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#f89820] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="Java">
        <p class="text-white font-medium text-sm">Java</p>
      </div>

      <!-- Python -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#3776ab] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="Python">
        <p class="text-white font-medium text-sm">Python</p>
      </div>

      <!-- C# -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#9b4f96] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="C#">
        <p class="text-white font-medium text-sm">C#</p>
      </div>

      <!-- JavaScript -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#f7df1e] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="JavaScript">
        <p class="text-white font-medium text-sm">JavaScript</p>
      </div>

      <!-- HTML5 -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#e34f26] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="HTML5">
        <p class="text-white font-medium text-sm">HTML5</p>
      </div>

      <!-- CSS3 -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#1572b6] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="CSS3">
        <p class="text-white font-medium text-sm">CSS3</p>
      </div>

      <!-- Bootstrap -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#7952b3] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="Bootstrap">
        <p class="text-white font-medium text-sm">Bootstrap</p>
      </div>

      <!-- TailwindCSS -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#06b6d4] w-full max-w-[140px]">
        <img src="https://www.svgrepo.com/show/374118/tailwind.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="TailwindCSS">
        <p class="text-white font-medium text-sm">TailwindCSS</p>
      </div>

      <!-- Angular -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#dd1b16] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="Angular">
        <p class="text-white font-medium text-sm">Angular</p>
      </div>

      <!-- React -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#61dafb] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="React">
        <p class="text-white font-medium text-sm">React</p>
      </div>

      <!-- ASP.NET Core -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#512bd4] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="ASP.NET Core">
        <p class="text-white font-medium text-sm">ASP.NET Core</p>
      </div>

      <!-- SQL -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#e38c00] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="SQL">
        <p class="text-white font-medium text-sm">SQL</p>
      </div>

      <!-- SQL Server -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#a91d22] w-full max-w-[140px]">
        <img src="https://img.icons8.com/color/48/microsoft-sql-server.png"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="SQL Server">
        <p class="text-white font-medium text-sm">SQL Server</p>
      </div>

      <!-- MongoDB -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#47a248] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="MongoDB">
        <p class="text-white font-medium text-sm">MongoDB</p>
      </div>

      <!-- Android Studio -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#3ddc84] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="Android Studio">
        <p class="text-white font-medium text-sm">Android Studio</p>
      </div>

      <!-- Arduino -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#00979d] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125" alt="Arduino">
        <p class="text-white font-medium text-sm">Arduino</p>
      </div>

      <!-- GitHub -->
      <div class="group flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_#ffffff] w-full max-w-[140px]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125 invert" alt="GitHub">
        <p class="text-white font-medium text-sm">GitHub</p>
      </div>

    </div>
  </div>
</section>


    <!-- ========== PROYECTOS DESTACADOS ========== -->
    <section id="proyectos"
      class="max-w-6xl mx-auto p-8 md:p-16 bg-white dark:bg-gray-800 rounded-xl shadow-md mt-10 mb-10">
      <h2 class="text-4xl font-bold mb-6 text-yellow-500 dark:text-yellow-400">Proyectos Recientes</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Proyecto 1 -->
        <div class="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transition">
          <h3 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Proyecto 1</h3>
          <p class="mb-4 text-gray-600 dark:text-gray-300">App móvil desarrollada con Jetpack Compose y conectada a una
            API RESTful en .NET Core. Permite
            iniciar sesión, ver información personal y gestionar la sesión de manera segura.</p>
          <a href="https://github.com/GabrielLopez2/Ecoharvest_Android" 
            class="text-yellow-500 dark:text-yellow-400 hover:underline" 
              target="_blank" rel="noopener noreferrer">
              Ver en GitHub
          </a>
        </div>
        <!-- Proyecto 2 -->
        <div class="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transition">
          <h3 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Proyecto 2</h3>
          <p class="mb-4 text-gray-600 dark:text-gray-300">Dashboard web desarrollado en ASP.NET Core MVC para visualizar
            y filtrar incidentes de DeepFakes
            (2019–2025). Incluye gráficos interactivos con Chart.js y filtros avanzados por año, país, sector, tipo de
            deepfake, impacto y costo.</p>
          <a href="https://github.com/GabrielLopez2/DeepFakeDashboard"
            class="text-yellow-500 dark:text-yellow-400 hover:underline"
            target="_blank" rel="noopener noreferrer"F>Ver en
            GitHub</a>
        </div>
      </div>
    </section>

    <!-- ========== PROCESO DE TRABAJO ========== -->
    <section id="proceso" class="bg-gray-800 py-16">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold mb-6 text-yellow-500">Proceso de trabajo</h2>
        <ol class="space-y-4 list-decimal list-inside text-white">
          <li><strong>Comprender el problema:</strong> Analizo los requerimientos y los objetivos, y busco la forma más
            eficiente de resolverlos.</li>
          <li><strong>Planificación y diseño:</strong> Estructuro la solución, diseño interfaces y arquitectura, eligiendo
            tecnologías adecuadas.</li>
          <li><strong>Desarrollo ágil:</strong> Programo de manera iterativa, probando y mejorando constantemente la
            funcionalidad y experiencia del usuario.</li>
          <li><strong>Pruebas y optimización:</strong> Verifico que todo funcione correctamente en distintos dispositivos
            y optimizo rendimiento y accesibilidad.</li>
          <li><strong>Entrega y aprendizaje:</strong> Presento la solución, recopilo feedback y aprendo de cada proyecto
            para mejorar en el siguiente.</li>
        </ol>
      </div>
    </section>

    <!-- ========== EXPERIENCIA PROFESIONAL ========== -->
    <section id="experiencia"
      class="max-w-6xl mx-auto p-8 md:p-16 bg-white dark:bg-gray-800 rounded-xl shadow-md mt-10 mb-10">
      <h2 class="text-4xl font-bold mb-6 text-yellow-500 dark:text-yellow-400">Experiencia profesional</h2>
      <ul class="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
        <li>Trabajo con <strong class="text-gray-800 dark:text-white">Shopify</strong>, desarrollando tiendas y
          personalizando funcionalidades.</li>
        <li>Desarrollo de aplicaciones móviles usando <strong class="text-gray-800 dark:text-white">Android
            Studio</strong>.</li>
        <li>Participación en diversos proyectos universitarios enfocados en desarrollo web y móvil.</li>
      </ul>
      <p class="mt-4 text-lg text-gray-700 dark:text-gray-300">Actualmente en búsqueda de nuevas experiencias laborales
        para seguir creciendo como
        desarrollador. 🚀</p>
    </section>

    <!-- ========== FORMACIÓN ACADÉMICA ========== -->
    <section id="formacion" class="bg-gray-800 py-16">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold mb-6 text-yellow-500">Formación académica</h2>
        <ul class="space-y-6">
          <li class="flex items-center space-x-4">
            <img src="https://aulaut.utleon.edu.mx/imgs-2025/logo_utl_2025.png" alt="UTL Logo" class="w-12 h-12">
            <div>
              <p class="text-lg font-semibold text-white">Técnico Superior Universitario en Desarrollo de Software</p>
              <p class="text-gray-300">Universidad Tecnológica de León (Completado)</p>
            </div>
          </li>
          <li class="flex items-center space-x-4">
            <img src="https://aulaut.utleon.edu.mx/imgs-2025/logo_utl_2025.png" alt="UTL Logo" class="w-12 h-12">
            <div>
              <p class="text-lg font-semibold text-white">Ingeniería en Desarrollo y Gestión de Software</p>
              <p class="text-gray-300">Universidad Tecnológica de León (Actualmente en curso)</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- ========== CONTACTO ========== -->
    <section id="contacto"
      class="max-w-6xl mx-auto p-8 md:p-16 text-center bg-white dark:bg-gray-800 rounded-xl shadow-md mt-10 mb-10">
      <h2 class="text-4xl font-bold mb-6 text-yellow-500 dark:text-yellow-400">Contacto</h2>
      <p class="text-lg mb-6 text-gray-600 dark:text-gray-300">
        Estoy abierto a nuevas oportunidades y colaboraciones profesionales.
        Si deseas contactarme, no dudes en enviarme un correo.
      </p>
      <div class="space-x-4">
        <a href="mailto:carloslopez18007072@gmail.com"
          class="inline-block px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition shadow-md hover:shadow-yellow-500/30">
          Enviar correo
        </a>
        <a href="cv.pdf" download
          class="inline-block px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-md">
          Descargar CV
        </a>
      </div>
    </section>

    <!-- ========== FOOTER ========== -->
    <footer class="bg-gradient-to-b from-gray-900 to-black py-8 text-center">
      <p class="mb-4 text-gray-300 font-medium">Sígueme en mis redes:</p>
      <div class="flex justify-center space-x-8 mb-6">
        <a href="https://github.com/GabrielLopez2" aria-label="GitHub"
        target="_blank" rel="noopener noreferrer"
          class="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
          <svg class="w-6 h-6 fill-current text-white group-hover:text-blue-400 transition-colors duration-300"
            viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z">
            </path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/carlos-gabriel-valdivia-lopez-883531386/" aria-label="LinkedIn"
        target="_blank" rel="noopener noreferrer"
          class="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
          <svg class="w-6 h-6 fill-current text-blue-500 group-hover:text-blue-300 transition-colors duration-300"
            viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
            </path>
          </svg>
        </a>
      </div>
      <p class="text-gray-400 text-sm">&copy; 2025 Carlos López - Todos los derechos reservados</p>

`;

;


// ========== SCRIPT DARK MODE ==========
const btn = document.getElementById('darkToggle');

// Verificar preferencia del usuario al cargar
if (localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
});


// Toggle menú móvil
const mobileBtn = document.querySelector("header nav button.md\\:hidden");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


function isMobile() {
  return window.innerWidth <= 768;
}

if (isMobile()) {
  const habilidades = document.querySelectorAll('#habilidades .group');
  let index = 0;

  function activarHabilidad() {
    habilidades.forEach(h => {
      h.style.filter = 'grayscale(100%)';
      h.style.transform = 'scale(1)';
      h.style.boxShadow = 'none';
    });

    const habilidad = habilidades[index];


    habilidad.style.filter = 'grayscale(0%)';
    habilidad.style.transform = 'scale(1.1)';


    const shadowStyle = getComputedStyle(habilidad).boxShadow;
    if (!shadowStyle || shadowStyle === 'none') {

      const shadowColorMatch = habilidad.outerHTML.match(/hover:shadow-\[0_0_25px_(#[0-9a-fA-F]{6})\]/);
      const color = shadowColorMatch ? shadowColorMatch[1] : '#ffffff';
      habilidad.style.boxShadow = `0 0 25px ${color}`;
    } else {
      habilidad.style.boxShadow = shadowStyle;
    }

    index = (index + 1) % habilidades.length;
  }

  activarHabilidad();
  setInterval(activarHabilidad, 2000);
}
