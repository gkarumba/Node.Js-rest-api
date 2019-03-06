//instatiate the framework
const fastify = require('fastify')({
    logger:true
});
const routes = require('./routes')

//external modules
const mongoose = require('mongoose');

routes.forEach((route,index) => {
    fastify.route(route)
});

// //declare route
// fastify.get('/',async(request,reply)=>{
//     return {hello:'world'}
// });

//swagger options
const swagger = require('./config/swagger');

//register swagger
fastify.register(require('fastify-swagger'), swagger.options)

//run the server
const start = async() => {
    try {
        await fastify.listen(3000)
        fastify.swagger()

        fastify.log.info(`server is running on ${fastify.server.address().port}`)
    }   catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

//connect to db
mongoose.connect('mongodb://localhost/mycargarage')
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err))

start()
