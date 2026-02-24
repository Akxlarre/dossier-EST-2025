README: Dossier de Postulación – Escuela de Sensibilización Tecnológica 2025
📋 Descripción
Este es un dossier de postulación interactivo creado por Benjamín Rebolledo para aplicar a la Escuela de Sensibilización Tecnológica 2025. Se trata de una página web moderna, responsiva y altamente interactiva que presenta:

Perfil personal y habilidades técnicas
Proyecto destacado (Tech Farming): una plataforma de agricultura de precisión
Propuesta innovadora: "Sensores de Ansiedad – La Máquina Siente"
🎨 Características principales
1. Diseño responsivo
Optimizado para desktop y móvil
Interfaz moderna con Tailwind CSS y DaisyUI
Scroll snap automático en desktop
2. Avatar interactivo
Eye-tracking: el avatar sigue el movimiento del ratón
Animación de boca: sincronizada con el habla
Parpadeos automáticos y expresiones dinámicas
Animación de typing cuando el avatar "escribe"
3. Sistema de audio y narración
Diálogos con animación de tipeo
Burbujas de diálogo contextuales (desktop y móvil)
Efectos visuales sincronizados
4. Splash screen animado
Puntos rebotantes como indicador de carga
Transición suave a la portada principal
5. Galería de imágenes interactiva
Modal lightbox para ver imágenes en tamaño completo
Clases .zoomable en elementos seleccionados
6. Hint de scroll animado
Después de 16 segundos sin interacción, aparece una animación Lottie
Se desactiva al primer scroll/swipe
🛠️ Stack tecnológico
Tecnología	Uso
HTML5	Estructura semántica
Tailwind CSS	Estilos modernos y responsivos
jQuery	Manipulación del DOM
Lottie Web	Animaciones JSON
Vanilla JavaScript	Lógica interactiva
📁 Estructura de archivos
Code
dossier-EST-2025/
├── index.html              # Archivo principal
├── assets/
│   └── img/
│       ├── boca-*.webp     # Variantes de expresiones faciales
│       ├── look-*.webp     # Variaciones de mirada
│       ├── datos_sensor.webp
│       ├── inicio.webp
│       ├── invernadero.webp
│       ├── perfil.webp
│       ├── representacion.webp
│       ├── scroll-down.json  # Animación Lottie
│       └── swipe-up.json     # Animación Lottie móvil
└── README.md               # Este archivo
🚀 Cómo usar
Instalación local
Clonar el repositorio

bash
git clone https://github.com/Akxlarre/dossier-EST-2025.git
cd dossier-EST-2025
Servir la página

bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js (http-server)
npx http-server

# Opción 3: Live Server (VS Code)
# Extensión Live Server → Click derecho → "Open with Live Server"
Acceder en el navegador

Code
http://localhost:8000
📱 Responsividad
Desktop (≥1024px): Scroll snap y eye-tracking completo
Tablet (640-1023px): Scroll normal, comportamiento intermedio
Móvil (<640px): Optimizado para touch, glances aleatorios del avatar
🎯 Secciones del dossier
1. Portada
Presentación personal
Fotografía con luz dinámica
Información de contacto
2. Sobre mí
Descripción profesional
Habilidades técnicas (Angular, Django, IoT, etc.)
Habilidades blandas
3. Proyecto Destacado: Tech Farming
Descripción de la plataforma de agricultura de precisión
Stack utilizado (Angular, Flask, PostgreSQL, InfluxDB)
Galería de screenshots
4. Motivación
Cita inspiradora
Propuesta innovadora: "Sensores de Ansiedad – La Máquina Siente"
Reflexión sobre tecnología y empatía
🎭 Avatar: Estados y animaciones
Estado	Descripción
TRACK	El avatar sigue el cursor (desktop)
TYPE	Animación de escritura con destellos
BLINK	Parpadeos periódicos
GLANCE	Miradas aleatorias (móvil)
Expresiones de boca
boca-cerrada.webp - Reposo
boca-media.webp - Consonantes
boca-abierta.webp - Vocales
✨ Efectos especiales
Light effect
Iluminación dinámica en el avatar
Se activa durante ciertas interacciones
Scroll snap
Snap automático entre secciones en desktop
Deshabilitado en secciones más altas que el viewport
Speech bubbles
Burbujas de diálogo con colas animadas
Diferentes estilos para desktop y móvil
🔧 Configuración personalizable
Timings
Puedes ajustar en <script>:

IDLE_DELAY_MS: Tiempo antes de perder el eye-tracking (3000ms)
FOCUS_MIN_MS / FOCUS_MAX_MS: Intervalo de parpadeos mientras se enfoca (8-12s)
TYPE_DELAY: Velocidad de animación de boca (75ms)
Colores
Modifica las clases Tailwind:

text-green-400: Color principal del título
ring-green-500/60: Color del anillo del avatar
bg-[#0d1117]: Fondo oscuro
🎬 Flujo de carga
Splash screen aparece (3s mínimo)
Portada carga con fade-in suave
Saludos iniciales con animación de habla
Eye-tracking activado
Scroll hint aparece después de 16s (opcional)
🐛 Troubleshooting
Problema	Solución
Avatar no sigue el ratón	Verifica que trackingEnabled sea true y que sea desktop
Imágenes no cargan	Asegúrate de que la carpeta assets/img/ existe y tenga los archivos .webp
Lottie no anima	Verifica que los archivos .json estén en assets/img/
Scroll snap muy agresivo	Desactívalo en CSS mediaqueries o aumenta IDLE_DELAY_MS
📄 Licencia
Este proyecto es personal y específico para la postulación a EST 2025. Se puede usar como referencia para otros dossiers interactivos.

📞 Contacto
Benjamín Rebolledo

📍 Ejército 435 · Concepción · Chile
📱 +56 9 3319 7338
📧 cjentus.benjamin@gmail.com
🙏 Créditos
Tailwind CSS para los estilos
Lottie para animaciones vectoriales
jQuery para utilidades DOM
Inspiración en diseño interactivo moderno
Última actualización: Febrero 2026 Versión: 1.0
