// Interfaces de productos
interface DBConnection {
  connect(): void;
}

interface DBCommand {
  execute(query: string): void;
}

// Productos concretos para MySQL
class MySQLConnection implements DBConnection {
  connect(): void {
    console.log("Conectado a MySQL");
  }
}

class MySQLCommand implements DBCommand {
  execute(query: string): void {
    console.log(`Ejecutando query en MySQL: ${query}`);
  }
}

// Productos concretos para PostgreSQL
class PostgresConnection implements DBConnection {
  connect(): void {
    console.log("Conectado a PostgreSQL");
  }
}

class PostgresCommand implements DBCommand {
  execute(query: string): void {
    console.log(`Ejecutando query en PostgreSQL: ${query}`);
  }
}

// Abstract Factory
interface DBFactory {
  createConnection(): DBConnection;
  createCommand(): DBCommand;
}

// Factories concretas
class MySQLFactory implements DBFactory {
  createConnection(): DBConnection {
    return new MySQLConnection();
  }
  createCommand(): DBCommand {
    return new MySQLCommand();
  }
}

class PostgresFactory implements DBFactory {
  createConnection(): DBConnection {
    return new PostgresConnection();
  }
  createCommand(): DBCommand {
    return new PostgresCommand();
  }
}

// Cliente
class Application {
  private connection: DBConnection;
  private command: DBCommand;

  constructor(factory: DBFactory) {
    this.connection = factory.createConnection();
    this.command = factory.createCommand();
  }

  run() {
    this.connection.connect();
    this.command.execute("SELECT * FROM users");
  }
}

// Ejemplo de uso
function main() {
  console.log("App usando MySQL:");
  const mysqlApp = new Application(new MySQLFactory());
  mysqlApp.run();

  console.log("\nApp usando PostgreSQL:");
  const postgresApp = new Application(new PostgresFactory());
  postgresApp.run();
}

main();