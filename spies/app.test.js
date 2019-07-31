const expect = require('expect');

const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();

        spy();

        expect(spy).toHaveBeenCalled();
    });
    it('should call savedUser with user object', () => {
       var email = 'githireh@gmail.com';
       var password = '1234'

       app.handleSignup(email, password);

       expect(db.saveUser).toHaveBeenCalledWith({
          email, password
       })
    });
});