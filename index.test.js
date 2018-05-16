const paddingLeft = require('./index');

describe ('Padding-left App', () => {
    test('should return a word when given a word',function(){
       expect(paddingLeft('hola')).toBe('hola');
    });
    test('should return the whole word when the numbers of characters are less',function (){
       expect(paddingLeft('hola',3)).toBe('hola');
       expect(paddingLeft('hola',1)).toBe('hola');
       expect(paddingLeft('hola',5)).toBe("");

    });

    test('should complete the word with spaces before the word if the argument is bigger than the word',function () {
        expect(paddingLeft('hola',5)).toBe(' hola');
    });
});
