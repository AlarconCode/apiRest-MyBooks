const app = require('./app.js')

app.listen(app.get('PORT'), ()=> {
    console.log(`Server listen on port ${app.get('PORT')}`);
})