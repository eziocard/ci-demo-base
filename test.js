const sum = require('./sum');
const assert = require('assert');

try {
    // Prueba 1: Verificar que 2 + 3 sea 5
    console.log("Ejecutando prueba: sum(2, 3)...");
    assert.strictEqual(sum(2, 3), 5, "La suma de 2 + 3 debería ser 5");
    
    // Prueba 2: Verificar que -1 + 1 sea 0
    console.log("Ejecutando prueba: sum(-1, 1)...");
    assert.strictEqual(sum(-1, 1), 0, "La suma de -1 + 1 debería ser 0");

    console.log("¡Todas las pruebas pasaron exitosamente!");
    process.exit(0); // Código 0 indica que todo salió bien
} catch (error) {
    console.error("Error en la prueba:");
    console.error(error.message);
    process.exit(1); // Código 1 indica que la prueba falló (esto detendrá el pipeline)
}
