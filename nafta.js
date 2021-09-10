function calcularNafta(kmARealizar) {
    return (kmARealizar / 100) * 2;
}

function calcularPrecio(litrosAUsar, precioXLitro) {
    return litrosAUsar * precioXLitro;
}

const litrosAUsar = calcularNafta(500);
const precioXLitro = 98;
const precio = calcularPrecio(litrosAUsar, precioXLitro)
console.log(precio);