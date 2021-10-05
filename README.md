## Weather Project

### Connecting external server to Local Server

#### In this project we are making an application which shows the data from other weather to our website using API.

##### Tools Used

- Nodejs
    - expressjs
    - nodemon
    - native http module
- postman

##### Language Used

- Javascript
- Html
- CSS




- only one res.send allowed in one app.get
    - bcz once we called send thats the end point there is no more send point

- but by using res.write we send multiple data 😉.
    - but dont use res.send with data then
    - also end your server reponse by using res.end.
            - i mean to say if you want to use res.send() with res.write then it should be blank to use the res.write without res.end

- res.send can only be called once, since it is equivalent to res.write() + res.end()

- res.write
    - Can be called multiple times to provide successive parts of the body.
        - Example:
        - response.write('<html>');
        - response.write('<body>');
        - response.write('<h1>Hello, World!</h1>');
        - response.write('</body>');
        - response.write('</html>');
        - response.end();