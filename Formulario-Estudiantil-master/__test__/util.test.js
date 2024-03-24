const { generateText, validateInput} = require('../util.js');

describe('Pruebas de registro', () => {
    test('Persona con edad entre 18 y 65', () =>{
        const text = generateText('Isa', 19, 'Maestría');
        expect(text).toBe('Registro OK de Isa en: Maestría.');
    });

    test('Persona con edad > 65', () =>{
        const text = generateText('Holis', 67, 'Licenciatura');
        expect(text).toBe('No pudimos registrar a: Holis. Por favor contactá a soporte@dh.com para más información.');
    });

    test('Persona con edad < 18', () =>{
        const text = generateText('Hola', 17, 'Doctorado');
        expect(text).toBe('Edad ingresada no válida. Por favor intentá nuevamente.');
    });
})

describe('Pruebas de validación input', () => {
    test('Input lleno', () =>{
        const text = 'Isa';
        const result = validateInput(text, true);
        expect(result).toBeTruthy;
    });
    test('Input vacio', () =>{
      const text = '';
      const result = validateInput(text, true);
      expect(result).toBeFalsy;
    });

    test('Input lleno con espacios al inicio y al final', () =>{
      const text = '  Isa  ';
      const result = validateInput(text, true);
      expect(result).toBeTruthy;
    });

    test('Input vacio con espacios', () =>{
      const text = '    ';
      const result = validateInput(text, true);
      expect(result).toBeFalsy;
    });

})


