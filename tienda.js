// ===== Configuración: cambiá estos datos y listo =====
const WHATSAPP = "5491100000000";   // número con código de país, sin + ni espacios
const DESCUENTO_TRANSFERENCIA = 35; // % OFF pagando por transferencia
const CUOTAS = 12;
const ENVIO = 6500;                 // costo de envío a domicilio
const ENVIO_GRATIS_DESDE = 60000;   // compras desde este monto no pagan envío

const productos = [
  {id:1, nombre:"Set 3 Repisas Flotantes", precio:34900, fotos:3,
   resumen:"Tres repisas de distinto largo para armar tu pared de cuadros, plantas y libros.",
   detalle:"Melamina de 18 mm con canto ABS. Se instalan con soportes ocultos, así que parecen flotar. Vienen con tarugos y tornillos.",
   medidas:"60, 45 y 30 cm de largo · 15 cm de profundidad", colores:["Negro","Blanco","Roble"], carga:"Hasta 8 kg cada una"},
  {id:2, nombre:"Bandeja Orgánica", precio:15900, fotos:3,
   resumen:"Una base de forma suave para floreros, velas o perfumes.",
   detalle:"Melamina de 15 mm cortada a medida y canto pulido. Tiene goma antideslizante abajo para no rayar los muebles.",
   medidas:"40 x 22 cm", colores:["Roble","Nogal","Blanco"], carga:"Hasta 5 kg"},
  {id:3, nombre:"Reloj de Pared Minimal", precio:24900, fotos:3,
   resumen:"Números grandes, frente liso y una máquina que no hace ruido.",
   detalle:"Frente de melamina con números impresos y agujas metálicas. Funciona con una pila AA, que no viene incluida.",
   medidas:"30 cm de diámetro", colores:["Blanco","Negro"], carga:"Se cuelga de un solo clavo"},
  {id:4, nombre:"Porta Maceta con Patas", precio:16900, fotos:3,
   resumen:"Levanta tus plantas del piso para que luzcan y el piso quede limpio.",
   detalle:"Tapa de melamina resistente a la humedad y patas de madera maciza. Se arma en dos minutos y sin herramientas.",
   medidas:"25 cm de alto · para macetas de hasta 20 cm", colores:["Roble","Blanco"], carga:"Hasta 15 kg"},
  {id:5, nombre:"Set 2 Cuadros Line Art", precio:27900, fotos:3,
   resumen:"Dos láminas de trazo fino con marco de melamina, listas para colgar.",
   detalle:"Marco de melamina de 15 mm, lámina en papel de 200 g y frente de acrílico. Traen el gancho puesto en la parte de atrás.",
   medidas:"30 x 40 cm cada uno", colores:["Negro","Roble","Blanco"], carga:"—"},
  {id:6, nombre:"Base Porta Velas", precio:9900, fotos:3,
   resumen:"Un centro de mesa simple para juntar velas y darle calidez a cualquier rincón.",
   detalle:"Base redonda de melamina con canto pulido. Resiste el calor de velas en vaso. Ideal para la mesa ratona o el baño.",
   medidas:"20 cm de diámetro", colores:["Roble","Nogal","Negro"], carga:"—"},
];

const plata = n => "$ " + Math.round(n).toLocaleString("es-AR");
const foto = (p, n = 1) => `img/p${p.id}-${n}.jpg`;
const conTransferencia = n => n * (1 - DESCUENTO_TRANSFERENCIA / 100);
const buscar = id => productos.find(p => p.id === id);

// carrito guardado en el navegador
function leerCarrito() { try { return JSON.parse(localStorage.getItem("carrito-nido")) || []; } catch (e) { return []; } }
function guardarCarrito(c) { try { localStorage.setItem("carrito-nido", JSON.stringify(c)); } catch (e) {} contarCarrito(); }
function agregarAlCarrito(id, color, cant = 1) {
  const c = leerCarrito();
  const it = c.find(i => i.id === id && i.color === color);
  it ? it.cant += cant : c.push({id, color, cant});
  guardarCarrito(c);
}
function contarCarrito() {
  const n = leerCarrito().reduce((s, i) => s + i.cant, 0);
  document.querySelectorAll("[data-contador]").forEach(e => e.textContent = n);
}
document.addEventListener("DOMContentLoaded", contarCarrito);
