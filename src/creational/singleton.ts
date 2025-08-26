class Singleton {
  private static instance: Singleton;
  private config: string;

  private constructor(config: string) {
    this.config = config;
    console.log(`Instancia creada con config: ${config}`);
  }

  static getInstance(config: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(config);
    }
    return Singleton.instance;
  }

  public getConfig(): string {
    return this.config;
  }
}

// Ejemplo de uso
const s1 = Singleton.getInstance("Primera configuración");
console.log(s1.getConfig()); // "Primera configuración"

const s2 = Singleton.getInstance("Otra configuración");
console.log(s2.getConfig()); // "Primera configuración" (ignora el nuevo valor)

console.log(s1 === s2); // true