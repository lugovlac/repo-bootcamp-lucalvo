function Computadora(ram, cpu, disco, monitor, gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

const comp1 = new Computadora("16", "intel i5", "512GB", "Samsung 20 ", true);
const comp2 = new Computadora("8", "intel i3", "1TB", "Samsung 24 ", false);
const comp3 = new Computadora("32", "ryzen 5", "256GB", "Samsung 17 ", true);
const comp4 = new Computadora("8", "ryzen 3", "128GB", "Samsung 24 ", false);
const comp5 = new Computadora("16", "intel i7", "512GB", "Samsung 27 ", false);

const array = [comp1, comp2, comp3, comp4, comp5];
console.log(array);

const withGpu = array.filter(compu => compu.gpu);
console.log(withGpu);