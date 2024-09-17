// SPINNER PRE CARGA DE LA PAGINA 😄

let spin = document.getElementById('spin');
let portfolioBtn = document.getElementById('portfolio-btn');

portfolioBtn.addEventListener('click', ()=>{
  spin.style.visibility ="hidden";
  spin.style.opacity = "0";
})

/* window.onload = function() {
  setTimeout(() => {
    spin.style.visibility = "hidden";
    spin.style.opacity = "0";
  }, 1000);
}; */


//FUNCION BOTONERA -----------------------------------------------

let botonesControl = document.getElementsByClassName('control-btn');
let displays = document.getElementsByClassName('display-container');
const contador = document.getElementById('contador');



// FUNCION MAQUINA DE ESCRBIR --------------------

const consola = document.getElementById('consola');

  let isRun = false;
  let intervalId;

function maquinaDeEscribir(texto, display) {
    if (isRun === true) {
        clearInterval(intervalId);
    }
    isRun = true;
    let i = 0;  
    display.textContent = '';
    intervalId = setInterval(() => {
      display.textContent += texto.charAt(i);
      i++;
      if (i >= texto.length) {
        clearInterval(intervalId);  
      }   
    }, 50);
}

  maquinaDeEscribir(consola.textContent, consola) 


//Mensajes -------------------------//

const mensajeDisplay = ["Esta es mi información personal...", 
                        "Me oriento al diseño y la creatividad. Me gustaría resaltar los cursos que tomé en el último tiempo y algunos hobbies.", 
                        "Desde chico practico con distintas herramientas que permiten la realización audiovisual, estas son algunas:",
                        "Hace algunos años vengo codeando, estas son las tecnologías y habilidades que manejo por el momento. El color de fondo representa mi nivel con cada tecnología.", 
                        "Me inclino a pequeños proyectos y emprendimientos, pero estoy abierto a nuevas propuestas."];

                        const mensajePersonal = ['...',
                        'Algunos datos'
                        ];

const mensajeEducacion = ['Estudié algunos años de Historia y en este momento Estudios de la Comunicación en UnSam',
                          'Tengo conocimientos de literatura en general',
                          'También buena ortografía',
                          "Also, I can speak English at a B2 level. I can have a fluid conversation. In fact, I’m studying code in this language. I prefer to watch series and movies in the original audio.",
                          'Desde el inicio de la pandemia, los creadores de contenido han subido a YouTube mucho material de alta calidad, lo que despertó mi interés por la programación. 🦾',
                          'Comencé con @soyDalto que tiene unos cursos muy completos de JavaScript, habla rapidísimo y se aprovecha mucho mejor el tiempo, no como en FreeCodeCamp o Platzi 😝',
                          'He completado los tres niveles de JS, y ahora tengo una comprensión más amplia del desarrollo web 🌐',
                          'Kevin Powell es uno de los mejores en el estilado de la web, constantemente sube contenido con las últimas novedades en CSS.',
                          '@MiduDev es un crack, he aprendido mucho de CSS y React con él 👾 ',
                          'Daniel Shiffman es profe en una Universidad de Nueva York. Con él, en @codingtrain, aprendo programación de gráficos y a utilizar la librería P5 de JavaScript.',
                          'Aquí aprendí a hacer fetching de datos, consumir APIs y algo de Backend 🤖',
                          'También las nuevas normas de ECMAScript.',
                          '¡NATURE OF CODE! Es hermoso ver cómo se pueden emular las leyes de la física en un canvas... ¡de Newton al código!. Se alcanzan animaciones más realistas, naturales...',
                          'Three.js es lo que se viene para desarrollar sitios web 3D. Creo que es el próximo curso que voy a tomar.',
                          'Entre algunos de mis hobbies se encuentra tocar música 🎹',
                          'Algo de edición de sonido también manejo. Me interesa hacer podcast 📻',
                          'Me gusta la huerta, agricultura y las cosas naturales. 🌻',
                          'La bicicleta es mi medio de transporte...🌞',
                          '¡La arqueología! Me encanta la investigación amateur de estos temas. Hay mucho misterio por develar y viejos paradigmas por enterrar. 🤓🦴🦷',
                          'Bueno, la ciencia en sí me gusta, la buena ciencia 🍎',
                          'Linux me gusta bastante también... 💻',
                          'Y la astronomía, que es apasionante y la puerta a la filosofía.' 
                          ];


const mensajeDiseño = ['Inkscape es mi herramienta favorita, es de código abierto, ligera y profesional ✔ ',
                        '¡Blender! 😍 También de código abierto es el mejor software para animaciones 3D. Tiene extensiones que incorporan I.A. como chat GPT 👀',
                        'Gimp, como el Photoshop pero libre. Muy bueno.',
                        'Audition, libre para edición de audio.',
                        'También manejo la suite Adobe, si es necesario.',
                        'Premiere, de Adobe.',
                        'Ilustrator, Adobe.',
                        'Audition, para el sonido.',
                        'Nitro PDF, lo utilicé muchísimo realizando diseño editorial con una máquina de pocos recursos. Me sorprendió notablemente, el mejor que encontré para manejar PDFs 👌',
                        'OpenShot: para editar videos básicos viene muy bien, es open source 🤙'
                      ];


const mensajeCodigo = ['HTML 5, es el lenguaje de marcado web. Le da estructura a la página.',
                      'CSS 3, para estilado de nuestra web. El CSS moderno sorprende minuto a minuto.',
                      'JavaScript, para web',
                      'P5 es una librería de JavaScript que nos facilita la programación en un canvas. Actualmente la utilizo en el curso de Dan Shiffman, "Nature of Code". ¡Altamente recomendable!',
                      'Node.js, para construir aplicaciones con lenguaje JS',
                      'Git, para el trabajo en equipo. Sirve para hacer un control de versiones y conectarlo con...',
                      'Github. Es una red social donde los programadores de todo el mundo se comparten código y repositorios de todo tipo 👨‍💻 .',
                      'React, es el framework de JS',
                      'También manejo algo de bases de datos.',
                      'Wordpress, conozco bien la plataforma.'                      
                      ];


const mensajeExp = ['"Población de Riesgo" (2020). Participé en la maquetación y edición de varios libros. Estos son algunos...',
                    '"Pagina|34 La historia nos absorverá" (2018).',
                    '"La Biblia de la pseudoCiencia" (2023).',
                    'Los últimos 5 años me dediqué a la impresión y encuadernación en una pequeña imprenta familiar.',
                    'Participé como sonidista en el documental "Teko Porá"(2016), dirigido por Lina Gaitán.',
                    'He ayudado a diseñadores en la maquetación web de sus páginas. ¿Te gustó esta página? Y / N',
                    'Trabajé como Ghostwriter para algunas tareas académicas en Ciencias Sociales.',
                    'Si querés saber más de mi trabajo, mensajeame!',
                    'sonido en Tekoporá',
                    'sonido en Tekoporá',
                    'sonido en Tekoporá'
                  ];


// Muestra y desmuestra la pantalla principal


function displayInfo(idDisplay) {
    for( i = 0; i < displays.length; i++){
        if (displays[i].id === idDisplay && displays[i].className === 'display-container'){
            displays[i].classList.add('none');
        } else if (displays[i].id === idDisplay) {
            displays[i].classList.remove('none');
            maquinaDeEscribir(mensajeDisplay[i], consola);
        } else {
            displays[i].classList.add('none');
        }
    }
}



//--- FUNCION CONTADOR YOUTUBE -------------------------------

let contadorYT = document.getElementById('contadorYT');
    count = 0;    
    intervalID = setInterval (()=>{
    count++;
    contadorYT.textContent = count;
},200);

//---------------------------------------------------


//FUNCION PARA MOVER ELEMENTO //////////////////////

const control = document.getElementById('control-ctn');

function moverElemento(elemento) {
  let posX = 0, posY = 0;
  let mouseDown = false;

  elemento.addEventListener('mousedown', function(e) {
    mouseDown = true;
    posX = e.clientX - elemento.offsetLeft;
    posY = e.clientY - elemento.offsetTop;
  });

  document.addEventListener('mouseup', function() {
    mouseDown = false;
  });

  document.addEventListener('mousemove', function(e) {
    if (mouseDown) {
      elemento.style.left = (e.clientX - posX) + 'px';
      elemento.style.top = (e.clientY - posY) + 'px';
    }
  });
}

moverElemento(control);


// Rotar control

control.addEventListener('dblclick',()=>{
  if(control.style.flexDirection !== 'row'){
    control.style.flexDirection = 'row';
  } else {
    control.style.flexDirection = 'column'
  };
})


// FUNCTION PARA OBETENER BOTONES DE DISPLAYS

function addListenersToChildren(element,categoríaMensaje) {
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      children[i].addEventListener('click', () => {
        maquinaDeEscribir(categoríaMensaje[i], consola);
      });
    }
  }

addListenersToChildren(displays[0],mensajePersonal);
addListenersToChildren(displays[1],mensajeEducacion);
addListenersToChildren(displays[2],mensajeDiseño);
addListenersToChildren(displays[3],mensajeCodigo);
addListenersToChildren(displays[4],mensajeExp);


// FUNCION ECLIPSE

let inputRange = document.getElementById('input-range');
let luna = document.getElementById('luna');

function moverLuna() {
  valor = inputRange.value
  luna.style.left = valor + 'px';
  if (valor > 19 && valor < 32){
     luna.classList.add('eclipse');
     maquinaDeEscribir("😱Un eclipse! no lo mires directamente!😎", consola);
     cambiarFondo();
  } else {
    luna.classList.remove('eclipse');
}
}

moverLuna();


// FUNCION TITULO FOCUS

let tituloAnt = document.title;

window.addEventListener('blur', ()=>{
  tituloAnt = document.title;
  document.title = "¡Hey! ¡Sigo acá! 😁";
});

window.addEventListener('focus',()=>{
  document.title = tituloAnt;
})

// funcion confettu

document.addEventListener("keydown", function(event) {
  if (event.key === "y") {
    maquinaDeEscribir("😁😁🤡🦾🌞🌜🎃🏆❕❕🍻🥂🧉🌋🌋🌎🎪🧨🎉🎈",consola);
  }
});

const fondos = ['radial-gradient(#111,#333);',
                'linear-gradient(#255,#645)',
                '#000',
                'url(https://images-assets.nasa.gov/image/PIA12348/PIA12348~medium.jpg)',
                'url(https://images-assets.nasa.gov/image/PIA15985/PIA15985~medium.jpg)',
                'url(https://images-assets.nasa.gov/image/behemoth-black-hole-found-in-an-unlikely-place_26209716511_o/behemoth-black-hole-found-in-an-unlikely-place_26209716511_o~medium.jpg)',
                'url(https://images-assets.nasa.gov/image/PIA08653/PIA08653~medium.jpg)',
                'url(https://images-assets.nasa.gov/image/PIA17563/PIA17563~medium.jpg)',
                'url(https://images-assets.nasa.gov/image/PIA15415/PIA15415~medium.jpg)',
];

let ifondo = 7;
cambiarFondo()

function cambiarFondo(){
 document.body.style.background = fondos[ifondo];
 ifondo = (ifondo + 1) % fondos.length;
 console.log(ifondo);
}

