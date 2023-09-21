"use strict";
class Computer {
    name = '';
    cpu = '';
    gpu = '';
    memory = 0;
    hdd = 0;
    ssd;
    constructor(name, cpu, gpu, memory, hdd, ssd) {
        this.name = name;
        this.cpu = cpu;
        this.gpu = gpu;
        this.memory = memory;
        this.hdd = hdd;
        this.ssd = ssd;
    }
}
const c1 = new Computer('PC', 'Ryzen 5 4600g', 'Radeon Vega 11', 16, 500, 240);
console.log(c1);
