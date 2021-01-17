import { isBlank, isEmail } from './utils'

describe("Check isBlank() tests", () => {

    test('"" is blank', ()=> {
        expect(isBlank("")).toBe(true);
    });

    test('" " is blank', ()=> {
        expect(isBlank("")).toBe(true);
    });

    test('"a" is not blank', ()=> {
        expect(isBlank("a")).toBe(false);
    });

    test('" a" is not blank', ()=> {
        expect(isBlank(" a")).toBe(false);
    });

})

describe("Check isEmail() tests", () => {

    test('"name@gmail.com" is a valid email', ()=> {
        expect(isEmail("name@email.com")).toBe(true);
    });

    test('"name@gmail/com" is not a valid email', ()=> {
        expect(isEmail("name@email/com")).toBe(false);
    });

    test('"" is not a valid email', ()=> {
        expect(isEmail("")).toBe(false);
    });

    test('" " is not a valid email', ()=> {
        expect(isEmail(" ")).toBe(false);
    });

    test('"hello" is not a valid email', ()=> {
        expect(isEmail("hello")).toBe(false);
    });

    test('"nameatemail.com" is not a valid email', ()=> {
        expect(isEmail("nameatemail.com")).toBe(false);
    });

})
