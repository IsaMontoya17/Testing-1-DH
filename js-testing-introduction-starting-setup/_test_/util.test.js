const { generateText, validateInput, createElement } = require('../util.js');

describe('Pruebas de salida de datos', () => {
    test('Salida con datos', () =>{
        const text = generateText('Daniel',30);
        expect(text).toBe('Daniel (30 years old)');
    });
    
    test('Salida con datos vacios', () =>{
        const text = generateText('',null);
        expect(text).toBe(' (null years old)');    
    });
    
    test('Salida sin datos', () =>{
        const text = generateText();
        expect(text).toBe('undefined (undefined years old)');    
    });
})

describe('funcion validateInput', () =>{

    test('retorna verdadero si se le ingresa texto', () => {
        const text = 'isa';
        const result = validateInput(text, true, false);
        expect(result).toBeTruthy;
    });

    test('retorna falso si no se le ingresa texto', () => {
        const text = '';
        const result = validateInput(text, false, false);
        expect(result).toBeFalsy;
    });

    test('retorna verdadero si se le ingresa texto y notEmpty es verdadero', () =>{
        const text = '   isa   ';
        const result = validateInput(text, true, false);
        expect(result).toBeTruthy;
    });

    test('retorna falso si se le ingresa espacio en blanco y notEmpty es verdadero', () =>{
        const text = '   ';
        const result = validateInput(text, true, false);
        expect(result).toBeFalsy;
    });

    test('retorna falso si se le ingresa letras y isNumber es verdadero', () =>{
        
        const text = 'isa';
        const result = validateInput(text, false, true);
        expect(result).toBeFalsy;
    });

    test('retorna verdadero si se le ingresa numeros y isNumber es verdadero', () =>{
        
        const text = '123';
        const result = validateInput(text, false, true);
        expect(result).toBeTruthy;
    });

    //no supe
    describe('createElement function', () => {
        test('should create an HTML element with the specified type, text, and className', () => {

            const type = 'li';
            const text = 'hola isa';
            const className = 'user-item';

            const newElement = document.createElement(type);
            newElement.classList.add(className);
            newElement.textContent = text;

            expect(element.tagName).toBe('li');
            expect(element.textContent).toBe(text);
            expect(element.classList.contains(className)).toBeTruthy;
        });
    });

});