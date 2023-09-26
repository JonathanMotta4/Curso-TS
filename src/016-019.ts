class Computer {
  name: string
  private cpu: string
  private wc?: boolean
  private gpu: string
  private memory: number
  private hdd: number
  private ssd?: number
  on: boolean
  constructor(
    name: string,
    cpu: string,
    gpu: string,
    memory: number,
    hdd: number,
    on: boolean,
    ssd?: number,
    wc?: boolean
  ) {
    this.name = name
    this.cpu = cpu
    this.wc = wc
    this.gpu = gpu
    this.memory = memory
    this.hdd = hdd
    this.ssd = ssd
    this.on = on
  }
  info(): void {
    console.log(`Nome: ${this.name}`)
    console.log(`CPU: ${this.cpu}`)
    console.log(`GPU: ${this.gpu}`)
    console.log(`Memoria: ${this.memory}gb`)
    console.log(`HD: ${this.hdd}gb`)
    console.log(`SSD: ${this.ssd}gb`)
    console.log(`Water Cooler: ${this.wc ? 'Sim' : 'Não'}`)
    console.log(`Ligado: ${this.on ? 'Sim' : 'Não'}`)
    console.log('---------------------------------------')
  }
  upgradeMemory(n:number):void{
    if (n>=0&&n<=1024) {
      this.memory=n
    }else{
      console.log(`Valor invalido! precisa ser maior que 0`);
      
    }
  }
}

/* Instanciar a classe */
const c1 = new Computer(
  'PC',
  'Ryzen 5 4600g',
  'Radeon Vega 11',
  16,
  500,
  true,
  240,
  false
)
const c2 = new Computer(
  'PC 2',
  'Ryzen 9 7900x3d',
  'Radeon RX 7900xtx',
  128,
  0,
  false,
  4000,
  true
)

c1.upgradeMemory(32)
c1.info()
c2.info()
