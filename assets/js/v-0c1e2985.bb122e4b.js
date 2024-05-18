"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5391],{6064:(e,a,i)=>{i.r(a),i.d(a,{default:()=>l});var s=i(8e3);const o=[(0,s.uE)('<p><img src="/assets/img/product/technology.jpg" alt="Tecnología"></p><h2 id="elementos-tecnologicos" tabindex="-1"><a class="header-anchor" href="#elementos-tecnologicos" aria-hidden="true">#</a> Elementos tecnológicos</h2><ul><li>ADempiere es una solución Java 100% pura.</li><li>Se basa en la tecnología Oracle Database</li><li>Es compatible de forma nativa con la base de datos de código abierto de Postgresql</li><li>Cuenta con un cliente 100% Java</li><li>Aprovecha un cliente HTML que permite el acceso a la aplicación donde un cliente local no es apropiado (por ejemplo, funcionalidad de autoservicio para proveedores, clientes y empleados). (Java Servlets y Java Server Pages).</li><li>Cuenta con servidor de aplicaciones J2EE JBOSS.</li><li>Los procesos intensivos del servidor están diseñados para ejecutarse en segundo plano con PL/SQL como idioma nativo</li></ul><h2 id="diccionario-de-aplicaciones" tabindex="-1"><a class="header-anchor" href="#diccionario-de-aplicaciones" aria-hidden="true">#</a> Diccionario de aplicaciones</h2><ul><li>El diccionario de datos contiene definiciones del tipo de entidad (tipo, validación, etc.)</li><li>Determina cómo debe mostrarse, p. etiquetas en pantallas e informes, ayuda contextual, secuencia y posición relativa a otros campos, y las reglas para el despliegue.</li><li>Reglas de acceso de seguridad</li><li>El diccionario de datos es administrado y ampliado por el usuario, contiene reglas e información definida por el usuario.</li></ul><h2 id="interfaz-de-usuario-inteligente" tabindex="-1"><a class="header-anchor" href="#interfaz-de-usuario-inteligente" aria-hidden="true">#</a> Interfaz de usuario inteligente</h2><ul><li>Una interfaz de usuario coherente permite a los usuarios navegar rápidamente por el sistema, incluso en secciones desconocidas para ellos.</li><li>La interfaz gráfica de usuario utiliza la potencia de los dispositivos modernos de hoy en día, donde la reacción y la navegación rápidas son importantes.</li><li>La interfaz de usuario HTML permite el acceso a la aplicación desde cualquier lugar siempre que tenga un navegador compatible.</li><li>Puede habilitar las funciones de Zoom desde cualquier tipo de lista desplegable.</li><li>Puede consultar los registros. La consulta reduce el número de registros en una ventana para permitir los criterios de entrada en un estilo mejorado de &quot;consulta por ejemplo&quot; (query by example).</li><li>Los propios usuarios pueden ajustar el contorno de la ventana y pueden definir pantallas especiales para una situación específica del cliente o cuando así lo requiera.</li></ul><h2 id="informes-inteligentes" tabindex="-1"><a class="header-anchor" href="#informes-inteligentes" aria-hidden="true">#</a> Informes inteligentes</h2><ul><li>Los listados de informes a través del visor del sistema se basan en el diccionario de datos, dado que el visor de informes tiene acceso a las definiciones de datos, permite de forma nativa búsquedas detalladas y detalladas.</li><li>Los enlaces de datos se generan automáticamente, adhiriéndose a las definiciones de acceso de seguridad en tiempo real.</li><li>Todos los resultados del informe se pueden previsualizar en pantalla antes de imprimir o generar archivos en varios formatos estándar (p. ej., Excel, HTML, XML, Word y PDF).</li><li>Drill (Drill-down) se genera un nuevo reporte en base a la entidad seleccionada, reportes donde el número es una suma de números o se accede desde un devengo mensual al monto de la transacción original.</li><li>Examinar referencias (Drill-across) permite al usuario crear un nuevo informe en el que se utiliza una entidad específica.</li><li>Las listas se basan en la información de las ventanas. Puede generar un informe para cada pantalla del sistema.</li><li>Los informes suelen basarse en información resumida basada en vistas de informes.</li><li>El Visor OLAP puede mostrar diferentes dimensiones en una tabla o un gráfico.</li></ul><h2 id="arquitectura-sostenible" tabindex="-1"><a class="header-anchor" href="#arquitectura-sostenible" aria-hidden="true">#</a> Arquitectura sostenible</h2><p>Las aplicaciones comerciales cambian con el tiempo. Necesitan aprovechar las nuevas tecnologías y proporcionar una funcionalidad adicional más inteligente. Incluso las aplicaciones enlatadas deberían admitir funciones adicionales, aunque por lo general no son adecuadas para la integración con el núcleo funcional de una empresa en crecimiento.</p><p>Adempiere utiliza los siguientes principios de diseño para crear una arquitectura sostenible:</p><p>Smalltalk MVC Architecture, que es una derivación del enfoque Model-View-Controller. Motor de reglas explícitas para lógica de transacciones complejas y recuperación de fallas segura de transacciones.</p><p>ERP tiene una arquitectura de objetos, cada objeto es lo más independiente posible de otros objetos, incluida la derivación transaccional.</p><h2 id="fallo-seguro" tabindex="-1"><a class="header-anchor" href="#fallo-seguro" aria-hidden="true">#</a> Fallo seguro</h2><p>Por lo general, las aplicaciones están diseñadas para estar libres de fallas (a prueba de fallas): se asume que todo funciona y que todos los datos se ingresan correctamente y son consistentes. En caso de falla, los expertos deben encontrar la causa y verificar si hubo daños. El usuario suele notar el problema. La realidad es que las aplicaciones a veces fallan.</p><p>En contraste, ADempiere está diseñado para ser seguro contra fallas. Cada transacción se puede repetir y regenerar. La mayoría de las fallas son identificadas por el sistema y el usuario puede intentar resolver el problema. Si la recuperación no es posible, el error se aísla y el resto del sistema sigue funcionando. La transacción basada en el diseño desacoplado está habilitada.</p><p>El sistema verifica regularmente si una transacción está completa. Si una transacción no es completa y consistente debido a una falla del sistema, se informa al administrador y al usuario.</p><p>A medida que las aplicaciones se vuelven más complejas con combinaciones cada vez mayores, los errores crecen exponencialmente. ERP proporciona un marco para una validación extensa y, en caso de falla, aísla el problema al garantizar una alta disponibilidad de las funciones centrales (núcleo de la aplicación).</p><h2 id="seguridad" tabindex="-1"><a class="header-anchor" href="#seguridad" aria-hidden="true">#</a> Seguridad</h2><p>ADempiere admite funciones y seguridad de datos. La función de seguridad se basa en Roles de Usuario y Controles de Acceso Ventanas, Informes y Procesos.</p><p>La seguridad de los datos para la información del cliente y la Organización se mantiene a nivel de la base de datos a través del contexto de seguridad. Este es un nivel adicional de seguridad más allá de la identificación (login) del usuario habitual de la base de datos. Esto permite el uso de herramientas de terceros basadas en SQL para acceder a la base de datos. Antes de acceder a cualquier dato, el usuario debe identificarse mediante un procedimiento almacenado (procedimiento almacenado) con nombre de usuario, contraseña y, opcionalmente, rol de idioma. Esto proporciona las mismas reglas de acceso para herramientas de terceros que pueden existir en la aplicación.</p><p>La mayoría de las aplicaciones no tienen una capa de seguridad más allá del ID de usuario de la base de datos y tienen dificultades para restringir el acceso a través de herramientas SQL de terceros.</p><p>Las contraseñas de los clientes se almacenan en forma cifrada.</p>',24)],n={},l=(0,i(3860).Z)(n,[["render",function(e,a){return(0,s.wg)(),(0,s.iD)("div",null,o)}]])},3590:(e,a,i)=>{i.r(a),i.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-0c1e2985","path":"/es/product/technology.html","title":"Tecnología","lang":"en-US","frontmatter":{"title":"Tecnología","category":["Producto"],"star":9,"sticky":9,"tag":["Software"],"article":false,"summary":"Elementos tecnológicos ADempiere es una solución Java 100% pura.; Se basa en la tecnología Oracle Database; Es compatible de forma nativa con la base de datos de código abierto de ","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/es/product/technology.html"}],["meta",{"property":"og:title","content":"Tecnología"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-13T15:22:23.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"Software"}],["meta",{"property":"article:modified_time","content":"2023-02-13T15:22:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Elementos tecnológicos","slug":"elementos-tecnologicos","children":[]},{"level":2,"title":"Diccionario de aplicaciones","slug":"diccionario-de-aplicaciones","children":[]},{"level":2,"title":"Interfaz de usuario inteligente","slug":"interfaz-de-usuario-inteligente","children":[]},{"level":2,"title":"Informes inteligentes","slug":"informes-inteligentes","children":[]},{"level":2,"title":"Arquitectura sostenible","slug":"arquitectura-sostenible","children":[]},{"level":2,"title":"Fallo seguro","slug":"fallo-seguro","children":[]},{"level":2,"title":"Seguridad","slug":"seguridad","children":[]}],"git":{"createdTime":1676301743000,"updatedTime":1676301743000,"contributors":[{"name":"Yamel Senih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":3.29,"words":986},"filePathRelative":"es/product/technology.md","localizedDate":"February 13, 2023"}')}}]);