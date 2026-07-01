// Contenido del menú de Sweet Ange Café — extraído del menú oficial.
// Precios en pesos uruguayos ($).

export const business = {
  name: 'Sweet Ange',
  fullName: 'Sweet Ange Café',
  tagline: 'Amor a primera mordida',
  subtitle: 'Pastelería · Café',
  city: 'Salto, Uruguay',
  address: 'Misiones 184, Salto',
  phone: '099 303 613',
  phoneRaw: '59899303613',
  instagram: 'sweetangecafe',
  instagramUrl: 'https://www.instagram.com/sweetangecafe',
  wifi: { network: 'Ange-Sweet-2.4GHz', password: 'ange2023' },
  hours: [
    { day: 'Lunes a Viernes', time: '07:30 – 11:30  ·  15:30 – 20:30' },
    { day: 'Sábados', time: '16:00 – 20:30' },
    { day: 'Domingos', time: 'Cerrado' },
  ],
}

export const menu = [
  {
    id: 'mini-postres',
    title: 'Mini postres',
    kicker: 'Dulces',
    items: [
      { name: 'Alfajores', price: '$60', desc: 'Clásico, marplatense, coco, naranjotino, clásico de membrillo, santafesino, crocante de nueces.' },
      { name: 'Brownie', price: '$80' },
      { name: 'Rogel', price: '$60' },
      { name: 'Lemon pie', price: '$60' },
      { name: 'Tofis', price: '$60' },
      { name: 'Lunets', price: '$50' },
      { name: 'Mini tartas frutales', price: '$60' },
      { name: 'Mini donas', price: '$40' },
      { name: 'Galletitas', price: '$50' },
      { name: 'Cupcake', price: '$50' },
      { name: 'Crumble', price: '$60' },
    ],
  },
  {
    id: 'porciones',
    title: 'Porciones grandes',
    kicker: 'Dulces',
    items: [
      { name: 'Crumble de manzana', price: '$200' },
      { name: 'Cumple de peras y arándanos', price: '$200' },
      { name: 'Tarta de coco y dulce de leche', price: '$200' },
      { name: 'Pasta frola', price: '$120', desc: 'Membrillo o dulce de leche.' },
      { name: 'Cheese cake', price: '$200' },
      { name: 'Lemon pie', price: '$200' },
    ],
  },
  {
    id: 'salados',
    title: 'Salados',
    kicker: 'Cocina',
    items: [
      { name: 'Planchas calientes', price: '$240' },
      { name: 'Medialuna de J&Q', price: '$120' },
      { name: 'Scones de queso con salsas x4', price: '$120' },
      { name: 'Sándwich de pan de nuez', price: '$130' },
      { name: 'Tostado de pan de campo', price: '$90' },
      { name: 'Avocado toast', price: '$280' },
    ],
  },
  {
    id: 'sin-tacc',
    title: 'Sin TACC',
    kicker: 'Aptos celíacos',
    items: [
      { name: 'Fainá', price: '$90' },
      { name: 'Chipá x6', price: '$150' },
      { name: 'Chipá relleno x3', price: '$120' },
      { name: 'Tostones de chipá x2', price: '$100', desc: 'Relleno de bondiola, rúcula y muzza.' },
      { name: 'Carrot cake', price: '$150' },
      { name: 'Pavlova', price: '$60' },
    ],
  },
  {
    id: 'cafe',
    title: 'Café Illy',
    kicker: 'Bebidas calientes',
    items: [
      { name: 'Café espresso Illy', price: '$80' },
      { name: 'Café americano Illy', price: '$150' },
      { name: 'Cappuccino Illy', price: '$150' },
      { name: 'Cortado Illy', price: '$150' },
      { name: 'Café doble', price: '$200', desc: 'Cafés comunes o descafeinados.' },
      { name: 'Submarino', price: '$150' },
    ],
  },
  {
    id: 'te',
    title: 'Té · Cura té alma',
    kicker: 'Bebidas calientes',
    items: [
      { name: 'Earl Grey', price: '$80', desc: 'Té negro.' },
      { name: 'Summer Refresh', price: '$80', desc: 'Té verde.' },
      { name: 'Purpple Mango Passion', price: '$80' },
      { name: 'Té negro clásico', price: '$50' },
    ],
  },
  {
    id: 'frias',
    title: 'Opciones frías',
    kicker: 'Bebidas',
    items: [
      { name: 'Licuado de multifruta', price: '$150' },
      { name: 'Licuado durazno vanilla', price: '$180' },
      { name: 'Licuado de ananá', price: '$180' },
      { name: 'Línea Coca-Cola', price: '$35 – $65' },
      { name: 'Línea Salus', price: '$80' },
      { name: 'Jugo de naranja (vaso)', price: '$100' },
    ],
  },
]

export const promos = [
  {
    n: 'Promo 1',
    title: 'Merienda para 2',
    price: '$870',
    items: ['2 bebidas', 'Plancha caliente', '4 chipá', '2 mini postres a elección', '2 alfajores de maicena'],
  },
  {
    n: 'Promo 2',
    title: 'Clásica',
    price: '$270',
    items: ['1 bebida', 'Tostado de pan de campo', 'Alfajor a elección'],
  },
  {
    n: 'Promo 3',
    title: 'Fresca',
    price: '$360',
    items: ['1 licuado multifruta', 'Pasta frola', 'Chipá x4'],
  },
  {
    n: 'Promo 4',
    title: 'Dulce antojo',
    price: '$200',
    items: ['4 mini postres a elección'],
  },
  {
    n: 'Promo 5',
    title: 'Media mañana',
    price: '$320',
    items: ['1 bebida', 'Media luna de J&Q', 'Mini postre a elección'],
  },
]
