const containerElement = document.getElementById('container') as HTMLElement;

interface Producto {
  nombre: string;
  precio: number;
  tipoIva: 'general' | 'superreducidoA' | 'superreducidoB' | 'superreducidoC';
}

interface ProductoCarrito {
  producto: Producto;
  cantidad: number;
}

const productos: ProductoCarrito[] = [
  {
    producto: {
      nombre: 'Legumbres',
      precio: 2,
      tipoIva: 'general',
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: 'Perfume',
      precio: 20,
      tipoIva: 'general',
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: 'Leche',
      precio: 1,
      tipoIva: 'superreducidoC',
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: 'Lasaña',
      precio: 5,
      tipoIva: 'superreducidoA',
    },
    cantidad: 1,
  },
];

const IVAGeneral: number = 21;
const IVAReducido: number = 10;
const IVASuperreducidoA: number = 5;
const IVASuperreducidoB: number = 4;
const IVASuperreducidoC: number = 0;
const SinIva: number = 0;

const calculaTicket = (): void => {
  for (let i = 0; i < productos.length; i++) {
    const nombreProducto: string = productos[i].producto.nombre;
    const precioProducto: number = productos[i].producto.precio;
    const tipoIvaProducto: 'general' | 'superreducidoA' | 'superreducidoB' | 'superreducidoC' = productos[i].producto.tipoIva;
    const cantidadProducto: number = productos[i].cantidad;
    let resultadoSinIva: number = 0;
    let porcentajeIVA: number = 0;

    switch (tipoIvaProducto) {
      case 'superreducidoA':
        resultadoSinIva = precioProducto - (precioProducto * IVASuperreducidoA) / 100;
        porcentajeIVA = IVASuperreducidoA;
        break;
      case 'general':
        resultadoSinIva = precioProducto - (precioProducto * IVAGeneral) / 100;
        porcentajeIVA = IVAGeneral;
        break;
      case 'superreducidoC':
        resultadoSinIva = precioProducto - (precioProducto * IVASuperreducidoC) / 100;
        porcentajeIVA = IVASuperreducidoC;
        break;
    }

    const precioTotal: number = precioProducto * cantidadProducto;

    console.log(`El producto ${nombreProducto}, 
el precio es ${precioProducto}, 
el tipo de IVA es ${tipoIvaProducto},
el porcentaje del IVA es ${porcentajeIVA}%,
la cantidad es ${cantidadProducto}, 
y su precio sin IVA es ${resultadoSinIva} 
y el precio total del producto es ${precioTotal}`);

    const printTicket = (): void => {
      const newDiv = document.createElement('div');
      const spanProduct = document.createElement('span');
      const spanIVA = document.createElement('span');
      const spanPorcentIVA = document.createElement('span');
      const spanNumberOfItem = document.createElement('span');
      const spanPriceWithoutIVA = document.createElement('span');
      const spanTotalPrice = document.createElement('span');

      newDiv.classList.add('ticket');

      spanProduct.textContent = `El producto ${nombreProducto}`;
      spanIVA.textContent = `El precio es ${precioProducto}€`;
      spanPorcentIVA.textContent = `El tipo de IVA es ${tipoIvaProducto}`;
      spanNumberOfItem.textContent = `La cantidad es ${cantidadProducto}`;
      spanPriceWithoutIVA.textContent = `El precio sin IVA es ${resultadoSinIva}€ `;
      spanTotalPrice.textContent = `El precio total del producto es ${precioTotal}€`;

      newDiv.append(
        spanProduct,
        spanIVA,
        spanPorcentIVA,
        spanNumberOfItem,
        spanPriceWithoutIVA,
        spanTotalPrice
      );
      containerElement.append(newDiv);
    };

    printTicket();
  }
};

calculaTicket();
