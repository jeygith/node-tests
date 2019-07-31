const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=>{

    describe('#add', ()=>{
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44);
            /*if(res !== 44){
                throw new Error(`Expected 44, but got ${res}.`);
            }*/
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(3, 4, (sum) => {
                expect(sum).toBe(7);
                done();
            })
        });
    });


    it('should square a number', () => {
        var res = utils.square(2);

        expect(res).toBe(4);

        /*if(res !== 4){
            throw new Error(`Expected 4, but got ${res}. `);
        }*/
    });

    it('should square a number aync', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25);
            done();
        });
    });

    it('should expect some values', () => {
        expect(12).toBe(12);
        expect({name: 'Jeff'}).toEqual({name: 'Jeff'});

        // toInclude
        expect([2, 3, 4, 5]);

    });

    it('should verify first and last names are set', () => {
        var user = {
            location: 'roysa', age: 26
        }

        var res = utils.setName(user, 'Jeff Githire');

        console.log(res);

        expect(user).toEqual(res);

        /* expect(res).toInclude({
             firstName: 'Jeff',
             lastName: 'Githire'
         });*/


    });
});

