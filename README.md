Petal & Bloom — Práctica DAW Semana 5

Aplicación frontend desarrollada con React y Vite para representar un panel de control de una florería. El proyecto permite aplicar los fundamentos de una Single Page Application (SPA), la arquitectura basada en componentes, la transmisión de propiedades mediante props, la composición con children, el uso de CSS Modules y la validación del renderizado del lado del cliente (CSR).

1. Objetivo

Desarrollar una aplicación frontend utilizando herramientas modernas del ecosistema JavaScript, organizando la interfaz mediante componentes reutilizables y aplicando diferentes técnicas de estilado. Asimismo, analizar el comportamiento del renderizado de React en el navegador.

2. Tecnologías utilizadas

React: biblioteca para construir interfaces de usuario.

Vite: herramienta para crear y ejecutar el proyecto frontend.

JavaScript y JSX: implementación de componentes y estructura de la interfaz.

CSS3: estilos globales, diseño adaptable y efectos visuales.

CSS Modules: encapsulamiento de estilos específicos de los componentes.

Font Awesome: iconografía de las tarjetas del dashboard.

npm: instalación y administración de dependencias.

Git y GitHub: control de versiones y alojamiento del repositorio.

3. Características

Panel principal con temática floral.

Visualización de cuatro indicadores: variedades, pedidos, clientes y entregas.

Componentes reutilizables para representar las tarjetas de métricas.

Transmisión de datos mediante props.

Composición de contenido mediante children.

Estilos encapsulados con CSS Modules.

Variantes visuales en tonos verde salvia, lavanda, rosa y durazno.

Efectos de interacción mediante :hover y transiciones CSS.

Adaptación de la distribución a diferentes tamaños de pantalla.

Consideraciones de accesibilidad para usuarios que prefieren movimiento reducido.

Análisis del renderizado del lado del cliente (CSR).

Nota: los indicadores del dashboard son datos de ejemplo y no proceden de una base de datos.

4. Arquitectura del proyecto
Descripción de los componentes

App.jsx: componente raíz que organiza la aplicación y presenta el dashboard.

Dashboard.jsx: organiza la cabecera, el resumen de métricas y los elementos visuales del panel.

MetricCard.jsx: componente reutilizable que recibe propiedades y contenido anidado para mostrar una métrica.

MetricCard.module.css: define los estilos encapsulados de las tarjetas.

index.css: contiene los estilos globales, la distribución general y las reglas de adaptación a pantallas pequeñas.

main.jsx: punto de entrada que monta la aplicación React en el elemento raíz del documento.

index.html: contiene la estructura HTML inicial y los metadatos del documento.

5. Uso de props y children

El componente MetricCard recibe las siguientes propiedades:

Propiedad

Función

title

Nombre de la métrica.

value

Valor que se muestra en la tarjeta.

icon

Icono de Font Awesome.

tone

Variante visual de la tarjeta.

children

Contenido adicional anidado dentro del componente.

La composición con children permite incluir descripciones diferentes en cada tarjeta sin duplicar la estructura del componente.

6. Estrategia de estilado

Se utilizan CSS Modules para encapsular los estilos de MetricCard, evitando que sus nombres de clase interfieran directamente con los de otros componentes.

Los estilos globales se reservan para la estructura general del dashboard, la tipografía, la distribución de elementos y el diseño adaptable.

Las tarjetas incorporan colores diferenciados, sombras, bordes redondeados, transiciones y efectos al pasar el cursor. También se contempla la preferencia del usuario por reducir el movimiento.
Autoría

Autora: TORRES AMBROSIO KATHERINE MEDALLY
Asignatura: Desarrollo de Aplicaciones Web (DAW)
Práctica: Semana 5
Institución: Universidad Nacional del Centro del Perú (UNCP)
