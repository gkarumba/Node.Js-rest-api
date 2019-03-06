exports.addCarSchema = {
    descritpion : 'Create a new car',
    tags: ['cars'],
    summary: 'creates new car with given values',
    body :{
        type: 'object',
        properties: {
            title: {type:'string'},
            brand: {type:'string'},
            price: {type:'string'},
            age: {type:'number'},
            services: {type:'object'}
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                _id: {type:'string'},
                title: {type:'string'},
                brand: {type:'string'},
                price: {type: 'string'},
                age: {type: 'number'},
                services: {type: 'object'},
                __v: {type: 'number'}
            }
        }
    }
}