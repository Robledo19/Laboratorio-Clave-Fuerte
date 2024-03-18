export interface Producto {
    nombre: string;
    precio: number;
    tipoIva: 'general' | 'superreducidoA' | 'superreducidoB' | 'superreducidoC';
  }
  
  export interface ProductoCarrito {
    producto: Producto;
    cantidad: number;
  }
  
  export const IVAGeneral = 21;
  export const IVAReducido = 10;
  export const IVASuperreducidoA = 5;
  export const IVASuperreducidoB = 4;
  export const IVASuperreducidoC = 0;
  export const SinIva = 0;
  
  export const calcularSubtotalSinIVA = (precio: number, tipoIva: string): number => {
    let porcentajeIVA = 0;
    switch (tipoIva) {
      case 'general':
        porcentajeIVA = IVAGeneral;
        break;
      case 'superreducidoA':
        porcentajeIVA = IVASuperreducidoA;
        break;
      case 'superreducidoC':
        porcentajeIVA = IVASuperreducidoC;
        break;
    }
    return precio - (precio * porcentajeIVA) / 100;
  };
  
  export const calcularTotalConIVA = (precioSinIVA: number, cantidad: number): number => {
    return precioSinIVA * cantidad;
  };
  
  export const imprimirTicket = (containerElement: HTMLElement, productos: ProductoCarrito[]): void => {
    productos.forEach(({producto, cantidad}) => {
      const subtotalSinIVA = calcularSubtotalSinIVA(producto.precio, producto.tipoIva);
      const totalConIVA = calcularTotalConIVA(subtotalSinIVA, cantidad);
  
      const ticketHTML = `
        <div class="ticket">
          <span>El producto ${producto.nombre}</span>
          <span>El precio es ${producto.precio}€</span>
          <span>El tipo de IVA es ${producto.tipoIva}</span>
          <span>La cantidad es ${cantidad}</span>
          <span>El precio sin IVA es ${subtotalSinIVA.toFixed(2)}€</span>
          <span>El precio total del producto es ${totalConIVA.toFixed(2)}€</span>
        </div>
      `;
      containerElement.innerHTML += ticketHTML;
    });
  };
  