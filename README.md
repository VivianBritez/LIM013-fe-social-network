# Leaders are Readers 📖

## Índice

- [1. Definición del Producto](#1-definición-del-producto)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Historias de usuario](#3-historias-de-usuario)
- [4. Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)](#4-diseño-de-la-interfaz-de-usuario)
- [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)

## 1. Definición del Producto

De acuerdo al análisis comparativo del comportamiento lector de la región, basándose en mediciones realizadas desde el año 2000 a 2013 en once países: Argentina, Brasil, Chile, Colombia, España, México, Perú, Portugal, República Dominicana, Uruguay y Venezuela según El Centro Regional para el Fomento del Libro en América Latina y el Caribe ([Cerlalc](https://cerlalc.org/publicaciones/comportamiento-lector-y-habitos-de-lectura-una-comparacion-de-resultados-en-algunos-paises-de-america-latina/)). El indicador para Brasil fue de 4,0 libros por habitante. Chile y Argentina encabezan la lista con 5,4 y 4,6 libros leídos al año por habitante, respectivamente. En España el promedio en 2011 fue de 10,3 libros.
Leaders are Readers es una red social para lectores y recomendaciones de libros, que surge en respuesta a la necesidad de una comunidad de amantes de los libros y que anima a sus usuarios a compartir sus inclinaciones literarias y pasiones con el resto de las personas. Las personas pueden aportar sus opiniones con la finalidad de compartir experiencias y lecturas.
<img src="https://i.ibb.co/r5bZRLq/statistics.png" alt="statistics" border="0">

<center></centerFuente:><strong></spanFuente:>Fuente: Comportamiento lector y hábitos de lectura. Una comparación de resultados en  algunos países de América Latina - Cerlalc. (2018, December-5).</strong></center>

## 2. Resumen del proyecto

Leaders are Readers es una red social donde los usuarios podrán crear una cuenta por correo electrónico o logearse con su cuenta de gmail. Al ingresar a la página principal los usuarios podrán realizar publicaciones (texto e imagen), editarlas, eliminarlas y realizar comentarios. Además, interactuarán con otros usuarios dando like 👍 y dislike 👎 a las publicaciones que se compartan en la red.

## 3. Historias de usuario

Para este proyecto vamos a entregarte las Historias de Usuario para tú junto a tu equipo
puedan escribir los criterios de aceptación y definición determinado de cada una. Recuerda
priorizar la implementación de tus funcionalidades, en función al esfuerzo que demandan en
relación al valor que le aportan al usuario, y ejecutar en equipo todas las historias de
usuario dentro del tiempo estimado para cada sprint y que finalmente se vean reflejadas
en publicaciones completamentamente funcionales al final de cada sprint.

- Como usuario nuevo debo poder crear una cuenta con email y password válidos para ingresar
  a la red social.
- Como usuario registrado debo poder iniciar sesión con email y password válidos para ingresar
  a la red social.
- Como usuario nuevo debo poder iniciar sesión con mi cuenta de Google o Facebook para ingresar a la red social (sin necesidad de crear una cuenta de email válido).
- Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.
- Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis posts para poder elegir la privacidad de mis publicaciones.
- Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en las publicaciones para poder indicar que me gusta una publicación.
- Yo como usuario loggeado debo poder escribir, guardar, editar o eliminar un comentario en una publicación para poder compartir mi opinión o hacer preguntas.
- Yo como usuario loggeado debo poder visualizar los datos de mi perfil creado y editarlos para actualizar mi información.
  Te dejamos un ejemplo de cómo definir criterios de aceptación y definiciones de terminado para una H.U. Si se te complica definirlas o no tienes idea de que considerar para cada H.U. es de gran ayuda revisar redes sociales como `facebok`, `twitter`, `instagram`, `tik tok` o la red social que más te guste y puedas evaluar qué consideran en cada funcionalidad para darla como terminada y aceptada. De igual manera recuerda considerar tus objetivos de aprendizaje en tu planificación.
  > Como usuario registrado debo poder iniciar sesión con email y password válidos para ingresar
  > a la red social.
  >
  > **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  > necesidades del usuario.
  >
  > - Si el mail o password no es válido, al momento de logearme, debo poder
  >   ver un mensaje de error.
  > - Debe ser visible si hay algún mensaje de error.
  > - Debo poder ver esta página de creación en Móviles y desktop (responsive).
  > - No debe necesitar recargar la página para crear una cuenta (SPA).
  >
  > **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  > para que, como equipo, sepan que esa historia está terminada y lista
  > para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  > incluir estos aspectos en su Definición de Terminado (más todo lo que
  > necesiten agregar):
  >
  > - La funcionalidad cumple y satisface los criterios de aceptación.
  > - La funcionalidad tiene _test unitarios_.
  > - El diseño visual corresponde al prototipo propuesto.
  > - El código de esta funcionalidad recibió code review de una o dos compañeras
  >   de otro equipo.
  > - La funcionalidad esta desplegada y pública para ser probada.
  > - La funcionalidad fue probada manualmente buscando errores e imperfecciones simples..
  > - La página es responsive (mobile first)
  > - Se hicieron pruebas de usuabilidad y se implementó el feedback si se
  >   consideró necesario.

## 4. Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

- Vista mobile
<center><img src="https://i.ibb.co/k3274Sb/mobile-login.png" alt="mobile-login" border="0" width=20% style = "margin: 15px"></center>
<center><img src="https://i.ibb.co/fxf0w5d/mobile-second.png" alt="mobile-second" border="0" width=20% ></center>
- Vista Desktop
<center><img src="https://i.ibb.co/Z63bZ0x/Leaders-are-Readers-desktop.jpg" alt="Leaders-are-Readers-desktop" border="0" width=80% style = "margin: 15px"></center>
<center><img src="https://i.ibb.co/4Yt6KQ9/desktop-home.jpg" alt="desktop-home" border="0 " width=80% style = "margin: 15px"></center>
- Prototipo Final
<center>
<img src="https://i.ibb.co/hCYcgYm/views.png" alt="views" border="0">
</center>

## 5. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application) que se adapte
al patrón modelo - vista - controlador [MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador)
y que sea [_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
(con más de una vista / página) en la que podamos **leer, escribir, actualizar y
eliminar datos.**

### HTML y CSS

- [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [x] Uso de selectores de CSS.
- [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
- [x] Uso de [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | [Grid]('https://css-tricks.com/snippets/css/complete-guide-grid/') en CSS.

### DOM y Web APIs

- [x] [Uso de selectores del DOM.](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)
- [x] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-07-bc-core-lim013/courses/browser/02-dom/04-events)
      (aprovecha el objeto de evento en sus handlers, uso de event delegacion.)
- [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
      (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)
- [ ] [History API.](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
- [x] [localStorage.](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

### JavaScript

- [x] [Uso de template strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)
- [x] Uso de condicionales (if-else | switch | operador ternario)
- [x] Uso de funciones (parámetros | argumentos | valor de retorno)
- [ ] Manipular arrays (filter | map | sort | reduce)
- [ ] Manipular objects (key | value)
- [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [x] Diferenciar entre expression y statements.
- [x] Diferenciar entre tipos de datos atómicos y estructurados.
- [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- [x] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

- [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
- [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
- [x] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

- [x] Organizar y dividir el código en módulos (Modularización)
- [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
- [ ] Uso de linter (ESLINT)

### Git y Github

- [x] Uso de comandos de git (add | commit | pull | status | push)
- [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
- [x] Colaboración en Github (branches | pull requests | code reviews |tags)
- [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

- [x] [Firestore.](https://firebase.google.com/docs/firestore)
- [x] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
- [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
- [x] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
      | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener feedback e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
- [ ] Planear y ejecutar tests de usabilidad.
