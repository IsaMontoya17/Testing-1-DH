//Isabela Montoya Alarcón

const{suma,resta,multiplicacion,division} = require('../calc.js');

describe('Operaciones', ()=>{

    describe('Suma', ()=>{
        test('Suma de numeros', ()=>{
            expect(suma(1,2)).toBe(4)
        });
        test('Suma de texto', ()=>{
            expect(suma('a','b')).toBe(0)
        });
        test('Suma de null', ()=>{
            expect(suma(null,null)).toBe(0)
        });
        test('Suma de undefined', ()=>{
            expect(suma(undefined,undefined)).toBe(0)
        });
    });
    describe('Resta', ()=>{
        test('resta de numeros', ()=>{
            expect(resta(1,2)).toBe(-1)
        });
        test('resta de texto', ()=>{
            expect(resta('a','b')).toBe(0)
        });
        test('resta de null', ()=>{
            expect(resta(null,null)).toBe(0)
        });
        test('resta de undefined', ()=>{
            expect(resta(undefined,undefined)).toBe(0)
        });
    });
    describe('Multiplicacion', ()=>{
        test('multiplicacion de numeros', ()=>{
            expect(multiplicacion(3,2)).toBe(6)
        });
        test('multiplicacion de texto', ()=>{
            expect(multiplicacion('a','b')).toBe(0)
        });
        test('multiplicacion de null', ()=>{
            expect(multiplicacion(null,null)).toBe(0)
        });
        test('multiplicacion de undefined', ()=>{
            expect(multiplicacion(undefined,undefined)).toBe(0)
        });
    });
    describe('Division', ()=>{
        test('division de numeros', ()=>{
            expect(division(4,2)).toBe(2)
        });
        test('division de texto', ()=>{
            expect(division('a','b')).toBe(0)
        });
        test('division de null', ()=>{
            expect(division(null,null)).toBe(0)
        });
        test('division de undefined', ()=>{
            expect(division(undefined,undefined)).toBe(0)
        });
    });

});