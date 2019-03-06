exports.options = {
    routePrefix : '/documentation',
    exposeRoute : true,
    swagger : {
        info : {
            title : 'Fastify API',
            description : 'Building an API using NodeJs, MongoDb,Fastifyy and Swagger',
            version : '1.0.0'
        },
        externalDocs : {
            url : 'https://swagger.io',
            description : 'Find more info here'
        },
        host : 'localhost',
        schemes : ['http'],
        consumes : ['application/json'],
        produces : ['application/json']
    }
}