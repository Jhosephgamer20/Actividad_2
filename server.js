//Dependencia commonjs
const express = require('express');

//Crear el objeto app
const app = express();

//primera prueba de url del servidor 
app.get('/prueba' , 
             function(request , response){
                 response.send("holaaa");
});


//uri de bootcamps
//traer todos los bootcamps
        app.get('/api/v1/devcamp/bootcamps' ,
          (request , response)=> {
             response
                    .status(200)
                    .json({
                        "success": true, 
                        "msg" : "mostrar todos los bootcamps"
                    })
          })
//Consulta de los bootcamps con id
        app.get('/api/v1/devcamp/bootcamps/:id' ,
          (request , response)=> {
             response
                    .status(200)
                    .json({
                        "success": true, 
                        "msg" : `seleccionar bootcamp con id ${request.params.id}`
                    })
          })
//Crear bootcamps con post
          app.post('/api/v1/devcamp/bootcamps' ,
          (request , response)=> {
             response
                    .status(201)
                    .json({
                        "success": true, 
                        "msg" : "crear bootcamp"
                    })
          })
//Actualizarlos bootcamps
          app.put('/api/v1/devcamp/bootcamps/:id' ,
          (request , response)=> {
             response
                    .status(200)
                    .json({
                        "success": true, 
                        "msg" : `Actualizar bootcamp con id ${request.params.id}`
                    })
          })

//Eliminar bootcamps
          app.delete('/api/v1/devcamp/bootcamps/:id' ,
          (request , response)=> {
             response
                    .status(200)
                    .json({
                        "success": true, 
                        "msg" : `Eliminando  bootcamp con id ${request.params.id}`
                    })
          })



//Evidencia: uris para los cursos

//traer todos los cursos 
app.get('/api/v1/devcamp/courses' ,
          (request , response)=> {
             response
                    .status(200)
                    .json({
                        "success": true, 
                        "msg" : "mostrar todos los courses"
                    })
          })


//Consulta de los courses
app.get('/api/v1/devcamp/courses/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `seleccionar course con id ${request.params.id}`
          })
})


//Crear courses con post
app.post('/api/v1/devcamp/courses' ,
(request , response)=> {
   response
          .status(201)
          .json({
              "success": true, 
              "msg" : "crear courses"
          })
})
          
//Actualizarlos courses
app.put('/api/v1/devcamp/courses/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `Actualizar courses con id ${request.params.id}`
          })
})

//Eliminar courses
app.delete('/api/v1/devcamp/courses/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `Eliminando  courses con id ${request.params.id}`
          })
})




//Evidencia: uris para reviews

//Crear reviews con post
app.post('/api/v1/devcamp/reviews' ,
(request , response)=> {
   response
          .status(201)
          .json({
              "success": true, 
              "msg" : "crear reviews"
          })
})

//traer todos los reviews 
app.get('/api/v1/devcamp/reviews' ,
          (request , response)=> {
             response
                    .status(200)
                    .json({
                        "success": true, 
                        "msg" : "mostrar todos los reviews"
                    })
          })


//Consulta de los reviews
app.get('/api/v1/devcamp/reviews/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `seleccionar reviews con id ${request.params.id}`
          })
})

          
//Actualizarlos reviews
app.put('/api/v1/devcamp/reviews/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `Actualizar reviews con id ${request.params.id}`
          })
})

//Eliminar reviews
app.delete('/api/v1/devcamp/reviews/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `Eliminando reviews con id ${request.params.id}`
          })
})

//Evidemcia: uris de users

//Crear users con post
app.post('/api/v1/devcamp/users' ,
(request , response)=> {
   response
          .status(201)
          .json({
              "success": true, 
              "msg" : "crear users"
          })
})

//traer todos los users 
app.get('/api/v1/devcamp/users' ,
          (request , response)=> {
             response
                    .status(200)
                    .json({
                        "success": true, 
                        "msg" : "mostrar todos los users"
                    })
          })


//Consulta de los users
app.get('/api/v1/devcamp/users/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `seleccionar users con id ${request.params.id}`
          })
})

          
//Actualizarlos reviews
app.put('/api/v1/devcamp/reviews/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `Actualizar reviews con id ${request.params.id}`
          })
})

//Eliminar reviews
app.delete('/api/v1/devcamp/reviews/:id' ,
(request , response)=> {
   response
          .status(200)
          .json({
              "success": true, 
              "msg" : `Eliminando reviews con id ${request.params.id}`
          })
})


//Establecer un servidor
const Puerto = 4500

//Creamos le servidor
app.listen(Puerto, 
    console.log("Servidor escuchando en el puerto: " + Puerto))
