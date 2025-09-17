
export const LEVELS = [
  { id: "A1", title: "Básico A1", color: "bg-rose-600" },
  { id: "A2", title: "Básico A2", color: "bg-rose-700" },
  { id: "B1", title: "Intermedio B1", color: "bg-sky-600" },
  { id: "B2", title: "Intermedio B2", color: "bg-sky-700" },
  { id: "C1", title: "Avanzado C1", color: "bg-neutral-900" },
];

// 12 micro-lecciones A1 + estructura para crecer en otros niveles.
export const COURSE = {
  A1: [
    { id:"a1l1",  title:"Saludos y presentaciones", grammar:"to be (am/is/are)", dialog:[
      { en:"Hello! I am Enrique.", es:"¡Hola! Yo soy Enrique." },
      { en:"Nice to meet you!", es:"¡Mucho gusto!" }
    ], practice:[
      { q:"I ___ Enrique.", options:["am","are"], a:0 },
      { q:"You ___ my friend.", options:["am","are"], a:1 }
    ], vocab:[{en:"Hello",es:"Hola"},{en:"Nice to meet you",es:"Mucho gusto"},{en:"I am",es:"Yo soy/estoy"}] },
    { id:"a1l2",  title:"Números y precios", grammar:"singular/plural", dialog:[
      { en:"How much is it?", es:"¿Cuánto cuesta?" },
      { en:"It is fifty pesos.", es:"Cuesta cincuenta pesos." }
    ], practice:[
      { q:"It ___ 20 pesos.", options:["is","are"], a:0 },
      { q:"Two ___ (apple) →", options:["apples","applees"], a:0 }
    ], vocab:[{en:"price",es:"precio"},{en:"pesos",es:"pesos"},{en:"How much?",es:"¿Cuánto?"}] },
    { id:"a1l3",  title:"Rutina diaria (gym)", grammar:"present simple", dialog:[
      { en:"I train at Dinamita Gym.", es:"Entreno en Dinamita Gym." },
      { en:"He works from nine to five.", es:"Él trabaja de 9 a 5." }
    ], practice:[
      { q:"She ___ (work) on Monday.", options:["works","work"], a:0 },
      { q:"I ___ (go) to the gym.", options:["go","goes"], a:0 }
    ], vocab:[{en:"train",es:"entrenar"},{en:"work",es:"trabajar"},{en:"gym",es:"gimnasio"}] },
    { id:"a1l4", title:"Artículos a/an/the", grammar:"a/an/the", dialog:[
      { en:"I have a shaker.", es:"Tengo un shaker." },
      { en:"The shaker is red.", es:"El shaker es rojo." }
    ], practice:[
      { q:"I need ___ apple.", options:["an","a"], a:0 },
      { q:"___ sun is bright.", options:["The","A"], a:0 }
    ], vocab:[{en:"a",es:"un/una"},{en:"an",es:"un/una (vocal)"},{en:"the",es:"el/la/los/las"}] },
    { id:"a1l5", title:"There is / There are", grammar:"there is/are", dialog:[
      { en:"There is a store near here.", es:"Hay una tienda cerca." },
      { en:"There are two gyms on this street.", es:"Hay dos gimnasios en esta calle." }
    ], practice:[
      { q:"___ a problem.", options:["There is","There are"], a:0 },
      { q:"___ many options.", options:["There is","There are"], a:1 }
    ], vocab:[{en:"near",es:"cerca"},{en:"street",es:"calle"}] },
    { id:"a1l6", title:"This/That/These/Those", grammar:"demostrativos", dialog:[
      { en:"This belt is new.", es:"Este cinturón es nuevo." },
      { en:"Those gloves are expensive.", es:"Esos guantes son caros." }
    ], practice:[
      { q:"___ is my friend (cerca).", options:["This","That"], a:0 },
      { q:"I want ___ shoes (lejos).", options:["these","those"], a:1 }
    ], vocab:[{en:"belt",es:"cinturón"},{en:"gloves",es:"guantes"}] },
    { id:"a1l7", title:"Preposiciones básicas", grammar:"in/on/at", dialog:[
      { en:"The class is at 6 pm.", es:"La clase es a las 6 pm." },
      { en:"My shaker is on the table.", es:"Mi shaker está sobre la mesa." }
    ], practice:[
      { q:"We meet ___ Monday.", options:["on","in"], a:0 },
      { q:"I live ___ Mexico.", options:["in","at"], a:0 }
    ], vocab:[{en:"on",es:"en/sobre (superficie)"},{en:"at",es:"a/en (hora/lugar preciso)"}] },
    { id:"a1l8", title:"Like/Want/Need", grammar:"verbos comunes", dialog:[
      { en:"I like coffee.", es:"Me gusta el café." },
      { en:"I need a trainer.", es:"Necesito un entrenador." }
    ], practice:[
      { q:"I ___ (want) water.", options:["want","wants"], a:0 },
      { q:"She ___ (like) tea.", options:["likes","like"], a:0 }
    ], vocab:[{en:"want",es:"querer"},{en:"need",es:"necesitar"}] },
    { id:"a1l9", title:"Can (habilidad)", grammar:"can/can't", dialog:[
      { en:"I can help you.", es:"Puedo ayudarte." },
      { en:"She can't come today.", es:"Ella no puede venir hoy." }
    ], practice:[
      { q:"___ you speak English?", options:["Can","Do"], a:0 },
      { q:"I ___ swim.", options:["can","can't"], a:0 }
    ], vocab:[{en:"can",es:"poder"},{en:"help",es:"ayudar"}] },
    { id:"a1l10", title:"Clima y ropa", grammar:"vocabulario", dialog:[
      { en:"It is hot today.", es:"Hace calor hoy." },
      { en:"I wear a jacket.", es:"Llevo una chamarra." }
    ], practice:[
      { q:"It ___ cold.", options:["is","are"], a:0 },
      { q:"He wears ___ T-shirt.", options:["a","an"], a:0 }
    ], vocab:[{en:"hot",es:"calor"},{en:"jacket",es:"chamarra"}] },
    { id:"a1l11", title:"Comidas y pedidos", grammar:"frases en restaurante", dialog:[
      { en:"I'd like a protein shake.", es:"Quisiera un licuado de proteína." },
      { en:"To go, please.", es:"Para llevar, por favor." }
    ], practice:[
      { q:"I would ___ a coffee.", options:["like","likes"], a:0 },
      { q:"___, please.", options:["To go","To going"], a:0 }
    ], vocab:[{en:"to go",es:"para llevar"},{en:"bill/check",es:"cuenta"}] },
    { id:"a1l12", title:"Direcciones", grammar:"imperativos básicos", dialog:[
      { en:"Turn left and go straight.", es:"Gira a la izquierda y sigue derecho." },
      { en:"It's next to the gym.", es:"Está junto al gimnasio." }
    ], practice:[
      { q:"___ right at the corner.", options:["Turn","Turns"], a:0 },
      { q:"Go ___.", options:["straight","strait"], a:0 }
    ], vocab:[{en:"turn",es:"girar"},{en:"straight",es:"derecho"}] },
  ],
  A2: [
    { id:"a2l1", title:"Pasado simple (viajes)", grammar:"did / -ed", dialog:[], practice:[], vocab:[] },
    { id:"a2l2", title:"Comparativos", grammar:"-er / more", dialog:[], practice:[], vocab:[] },
    { id:"a2l3", title:"Futuro (planes)", grammar:"going to / will", dialog:[], practice:[], vocab:[] },
    { id:"a2l4", title:"Por/Para", grammar:"for/since", dialog:[], practice:[], vocab:[] },
  ],
  B1: [
    { id:"b1l1", title:"Condicional tipo 1", grammar:"If + present, will", dialog:[], practice:[], vocab:[] },
    { id:"b1l2", title:"Reported speech", grammar:"said/told", dialog:[], practice:[], vocab:[] },
    { id:"b1l3", title:"Phrasal verbs I", grammar:"take off, look after", dialog:[], practice:[], vocab:[] },
  ],
  B2: [
    { id:"b2l1", title:"Passive voice", grammar:"be + past participle", dialog:[], practice:[], vocab:[] },
    { id:"b2l2", title:"Linking words", grammar:"however, therefore", dialog:[], practice:[], vocab:[] },
    { id:"b2l3", title:"Modal nuance", grammar:"may, might, must", dialog:[], practice:[], vocab:[] },
  ],
  C1: [
    { id:"c1l1", title:"Tono & registro", grammar:"formal vs informal", dialog:[], practice:[], vocab:[] },
    { id:"c1l2", title:"Collocations", grammar:"natural phrases", dialog:[], practice:[], vocab:[] },
    { id:"c1l3", title:"Negociación", grammar:"hedging", dialog:[], practice:[], vocab:[] },
  ]
};
