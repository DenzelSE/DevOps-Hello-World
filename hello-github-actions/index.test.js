const hello = require('/index');

test('return the correct message', () =>{
    expect(hello()).toBe('Hello, Github Actions!')
})