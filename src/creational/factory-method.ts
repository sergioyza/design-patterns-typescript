// Interfaz Producto
interface Product {
  operation(): string;
}

// Productos concretos
class ConcreteProductA implements Product {
  public operation(): string {
    return "Resultado del Producto A";
  }
}

class ConcreteProductB implements Product {
  public operation(): string {
    return "Resultado del Producto B";
  }
}

// Creador abstracto
abstract class Creator {
  // El método factory que será sobrescrito por cada creador concreto
  public abstract factoryMethod(): Product;

  // Alguna operación que use el producto creado
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: trabajando con ${product.operation()}`;
  }
}

// Creadores concretos
class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// Ejemplo de uso
const creatorA = new ConcreteCreatorA();
console.log(creatorA.someOperation()); // Creator: trabajando con Resultado del Producto A

const creatorB = new ConcreteCreatorB();
console.log(creatorB.someOperation()); // Creator: trabajando con Resultado del Producto B
