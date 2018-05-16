const paddingLeft = require('./index');

describe ('Padding-left App', () => {
    test('should return a word when given a word',function(){
       expect(paddingLeft('hola')).toBe('hola');
    });
    test('should return the whole word when the numbers of characters are less',function (){
       expect(paddingLeft('hola',3)).toBe('hola');
       expect(paddingLeft('hola',1)).toBe('hola');

    });
    test('should add spaces before the word if the argument is bigger than the word and separator is not defined', function(){
        expect(paddingLeft('hola', 6)).toBe('  hola');
    });
    test('should add separator before the word if the argument is bigger than the word', function(){
        expect(paddingLeft('hola', 5, 'x')).toBe('xhola');
        expect(paddingLeft('hola', 7, 'x')).toBe('xxxhola');
        expect(paddingLeft('hola', 6, 'jorge')).toBe('jorgejorgehola');
    });
});
