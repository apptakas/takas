define({ "api": [
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "src/public/js/plugins/flot/jquery.flot.spline.js",
    "group": "C:\\Users\\User\\Documents\\Projects\\takas\\src\\public\\js\\plugins\\flot\\jquery.flot.spline.js",
    "groupTitle": "C:\\Users\\User\\Documents\\Projects\\takas\\src\\public\\js\\plugins\\flot\\jquery.flot.spline.js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "src/public/js/plugins/flot/jquery.flot.spline.js",
    "group": "C:\\Users\\User\\Documents\\Projects\\takas\\src\\public\\js\\plugins\\flot\\jquery.flot.spline.js",
    "groupTitle": "C:\\Users\\User\\Documents\\Projects\\takas\\src\\public\\js\\plugins\\flot\\jquery.flot.spline.js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "src/public/js/plugins/flot/jquery.flot.spline.js",
    "group": "C:\\Users\\User\\Documents\\Projects\\takas\\src\\public\\js\\plugins\\flot\\jquery.flot.spline.js",
    "groupTitle": "C:\\Users\\User\\Documents\\Projects\\takas\\src\\public\\js\\plugins\\flot\\jquery.flot.spline.js",
    "name": "Private"
  },
  {
    "type": "post",
    "url": "/user/listcategory",
    "title": "1 listcategory",
    "name": "listcategory_-_Listar_Categorias_filtrado_por_tipo_de_publicación",
    "group": "Category",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "typepublicCategory",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"namec\": \"Bebés\",\n            \"iconc\": \"https://n9.cl/c1z78\",\n            \"SubCategory\": [\n                {\n                    \"idsc\": 1,\n                    \"name\": \"Ropa de bebes\",\n                    \"icon\": \"\",\n                    \"category\": 1,\n                    \"status\":: 1\n                }\n            ]\n        },\n        {\n            \"id\": 2,\n            \"namec\": \"Arte\",\n            \"iconc\": \"https://n9.cl/pbmd1\",\n            \"SubCategory\": []\n        },\n        {\n            \"id\": 3,\n            \"namec\": \"Música\",\n            \"iconc\": \"https://n9.cl/hgan\",\n            \"SubCategory\": []\n        },\n        {\n            \"id\": 4,\n            \"namec\": \"indefinidas\",\n            \"iconc\": null,\n            \"SubCategory\": [\n                {\n                    \"idsc\": 2,\n                    \"name\": \"Accesorios para Vehículos\",\n                    \"icon\": \"wheel\",\n                    \"category\": 4,\n                    \"status\":: 1\n                },\n                {\n                    \"idsc\": 3,\n                    \"name\": \"Vehículos\",\n                    \"icon\": \"car\",\n                    \"category\": 4,\n                    \"status\":: 1\n                },\n                {\n                    \"idsc\": 4,\n                    \"name\": \"Alimentos y Bebidas\",\n                    \"icon\": \"eat\",\n                    \"category\": 4,\n                    \"status\":: 1\n                },\n                {\n                    \"idsc\": 5,\n                    \"name\": \"Mascotas\",\n                    \"icon\": \"dog\",\n                    \"category\": 4,\n                    \"status\":: 1\n                }\n            ]\n        }\n    ],\n    \"msg\": \"Lista de Categoría\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Categoría\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/user/closechatroom",
    "title": "3 closechatroom",
    "name": "closechatroom_-_Cambio_de_estado_de_una_oferta",
    "group": "Chatrooms",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSala",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Chatrooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"takasteo\": false,\n    \"msg\": \"Cambio de estatus de la sala de chat ejecutdos exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Chatrooms was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar cambiar el estatus de una Oferta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Chatrooms"
  },
  {
    "type": "post",
    "url": "/user/listchatroomstatus",
    "title": "1 listchatroomstatus",
    "name": "listchatroomstatus_-_Listar_los_datos_de_la_sala_de_chat_según_status",
    "group": "Chatrooms",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "statuSalaChat",
            "description": "<p>required Sala cativa = 24 Sala cerrada = 25.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idUder",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Chatrooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idSala\": \"949bdc81078b49cd604b6622ddd762054ca8963a\",\n            \"datecreated\": \"28/10/2020\",\n            \"idPublicacion\": 1,\n            \"namePublication\": \"Estufa de 4 hornillas\",\n            \"valorComercial\": \"200000.0000\",\n            \"Userpublication\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nameUserPublication\": \"Ana\",\n            \"imgUserPublication\": \"https://scontent.fbog9-1.fna.fbcdn.net/v/t1.0-9/123087363_10224035495334302_417571382738385553_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VGrhqTFkWmwAX-Zxk-R&_nc_ht=scontent.fbog9-1.fna&oh=a65b30d\",\n            \"idoferta\": 7,\n            \"UserOferta\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"nameUserOferta\": \"ronny\",\n            \"imgUserOferta\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\",\n            \"ProductImagesPublicacion\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722\"\n            ],\n            \"PreferencesPublicacion\": [\n                1,\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de salas de chat según status\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Chatrooms was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Productos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Chatrooms"
  },
  {
    "type": "post",
    "url": "/user/listdatachatroom",
    "title": "2 listdatachatroom",
    "name": "listdatachatroom_-_Listar_los_datos_de_la_sala_de_chat_por_idSala",
    "group": "Chatrooms",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idSalaChat",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Chatrooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idSala\": \"13cd8cceaa9b25a4cfbf364c585f89639ebd1aae\",\n        \"status\": 24,\n        \"datecreated\": \"03/11/2020\",\n        \"idPublicacion\": 3,\n        \"namePublication\": \"Reloj Alarma\",\n        \"ValorPublication\": \"12000.0000\",\n        \"Userpublication\": \"zSiRYTbNbpW5vOQ6K6XpxvpKu2v1\",\n        \"nameUserPublication\": \"Anailys Rodríguez\",\n        \"imgUserPublication\": null,\n        \"idoferta\": 180,\n        \"iduseroferta\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n        \"UserOferta\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n        \"nameUserOferta\": \"Ana\",\n        \"imgUserOferta\": \"https://scontent.fbog9-1.fna.fbcdn.net/v/t1.0-9/123087363_10224035495334302_417571382738385553_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VGrhqTFkWmwAX-Zxk-R&_nc_ht=scontent.fbog9-1.fna&oh=a65b30d\",\n        \"PreferencesPublicacion\": [\n            2,\n            1\n        ],\n        \"aFavor\": true,\n        \"Valorferta\": \"10000.0000\",\n        \"dieferencia\": \"2000.0000\",\n        \"ItemOfer\": [\n            {\n                \"idpublication\": 4,\n                \"nameproduct\": \"Blusas \",\n                \"status\": 4,\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A36%3A46.808593.jpg?alt=media&token=44c54278-2aae-451d-a307-d2f821b3286c\",\n                \"marketvalue\": \"10000.0000\"\n            }\n        ],\n        \"isUserPubli\": true,\n        \"match\": 3\n    },\n    \"msg\": \"Data completa de la sala de chat\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Chatrooms was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Productos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Chatrooms"
  },
  {
    "type": "put",
    "url": "/user/matchofferchatroom",
    "title": "4 matchofferchatroom",
    "name": "matchofferchatroom_-_Match_de_la_oferta_en_la_sala_de_chat",
    "group": "Chatrooms",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSala",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Chatrooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"idNotificacion\": 79,\n    \"idOferta\": 180,\n    \"TypeNotification\": 2,\n    \"UserPublication\": \"zSiRYTbNbpW5vOQ6K6XpxvpKu2v1\",\n    \"takasteo\": true,\n    \"msg\": \"¡TAKASTEO EXITOSO!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Chatrooms was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar cambiar el estatus de una Oferta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Chatrooms"
  },
  {
    "type": "post",
    "url": "/user/listcities",
    "title": "1 listcities",
    "name": "listcities_-_Listar_Ciudades",
    "group": "Cities",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Cities.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Cities.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Cities.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idfirebase\": \"idfirebaseUsers77wqedsaxgg\",\n            \"city\": \"Bogotá DC\",\n            \"idcity\": 1,\n            \"ListCities\": [\n                {\n                    \"id\": 1,\n                    \"name\": \"Bogotá DC\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 2,\n                    \"name\": \"Medellín\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 3,\n                    \"name\": \"Cali\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 4,\n                    \"name\": \"Barranquilla\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 5,\n                    \"name\": \"Cartagena\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 6,\n                    \"name\": \"Bucaramanga\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 7,\n                    \"name\": \"Manizales\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 8,\n                    \"name\": \"Santa Marta\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 9,\n                    \"name\": \"Pereira\",\n                    \"status\": 1\n                },\n                {\n                    \"id\": 10,\n                    \"name\": \"Cúcuta\",\n                    \"status\": 1\n                }\n            ]\n        }\n    ],\n    \"msg\": \"Lista de Ciudades\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Cities was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Categoría\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Cities"
  },
  {
    "type": "post",
    "url": "/admin/cantmembershiprequests",
    "title": "4 cantmembershiprequests",
    "name": "cantmembershiprequests_-_Cantidad_de_Solicitudes_de_Membresías",
    "group": "Indicadores",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateInicio",
            "description": "<p>Reqired.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateFin",
            "description": "<p>Reqired.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"CantRM\": 1\n    },\n    \"msg\": \"Cantidad de Solicitudes de Membresías según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Obtener cantidad de Solicitudes de Membresías según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "Indicadores"
  },
  {
    "type": "post",
    "url": "/admin/cantombotakas",
    "title": "3 cantombotakas",
    "name": "cantombotakas_-_Cantidad_de_Tombotakas",
    "group": "Indicadores",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateInicio",
            "description": "<p>Reqired.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateFin",
            "description": "<p>Reqired.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"CantTomboTakas\": 1\n    },\n    \"msg\": \"Cantidad de Tombotakas según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Obtener cantidad de Tombotakas según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "Indicadores"
  },
  {
    "type": "post",
    "url": "/admin/cantpublications",
    "title": "2 cantpublications",
    "name": "cantpublications_-_Cantidad_de_Publications",
    "group": "Indicadores",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateInicio",
            "description": "<p>Reqired.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateFin",
            "description": "<p>Reqired.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"CantPublications\": 1\n    },\n    \"msg\": \"Cantidad de Registrados según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Obtener cantidad de registros según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "Indicadores"
  },
  {
    "type": "post",
    "url": "/admin/cantusersregistrados",
    "title": "1 cantusersregistrados",
    "name": "cantusersregistrados_-_Cantidad_de_Usuarios_registrados",
    "group": "Indicadores",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateInicio",
            "description": "<p>Reqired.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DateFin",
            "description": "<p>Reqired.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"CantRegistros\": 1\n    },\n    \"msg\": \"Cantidad de Registrados según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Obtener cantidad de registros según fecha\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "Indicadores"
  },
  {
    "type": "post",
    "url": "/admin/gestionmembership",
    "title": "2 gestionmembership",
    "name": "gestionmembership_-_Gestionar_Membresías",
    "group": "Memberships",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flagMembership",
            "description": "<p>required. Aprobada=1, Expirada=2, Cancelada=3, Rechazada=4</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Memberships.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Memberships.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Memberships.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Solicitud Procesada con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Memberships was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Procesar la solicitud solicitud\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "Memberships"
  },
  {
    "type": "post",
    "url": "/user/solicitarmembresia",
    "title": "1 solicitarmembresia",
    "name": "solicitarmembresia_-_Crear_nueva_PQRs",
    "group": "Memberships",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typeMemberships",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Memberships.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Memberships.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Memberships.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Solicitud ha sido enviada\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Memberships was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar enviar solicitud\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Memberships"
  },
  {
    "type": "get",
    "url": "/user/listmoney",
    "title": "1 listmoney",
    "name": "listmoney_-_Listar_tipos_de_monedas",
    "group": "Money",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Money.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Money.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Money.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"name\": \"Dólar Americano\",\n            \"shortname\": \"USD\",\n            \"status\": 1\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Pesos Colombianos\",\n            \"shortname\": \"COP\",\n            \"status\": 1\n        }\n    ],\n    \"msg\": \"Lista de Tipo de Monedas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Money was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar los tipos de Monedas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Money"
  },
  {
    "type": "post",
    "url": "/user/cantnotifications",
    "title": "2 cantnotifications",
    "name": "cantnotifications_-_Obtener_la_cantidad_de_notificaciones_según_bandera",
    "group": "Notifications",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idUder",
            "description": "<p>Optional Sin leer=1 y Vista = 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "flagNotifications",
            "description": "<p>Optional Sin leer=1 y Vista = 0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Notifications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"CantNoti\": 11\n    },\n    \"msg\": \"Cantidad de notificaciones según bandera obtenida con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Notifications was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar notificaciones\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "put",
    "url": "/user/changestatusnotifications",
    "title": "3 changestatusnotifications",
    "name": "changestatusnotifications_-_Cambio_de_estado_de_una_oferta",
    "group": "Notifications",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idNotifications",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idUder",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "FlagStatus",
            "description": "<p>required. Sin leer = 1, vista = 0</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Chatrooms.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Chatrooms.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Cambio de la notificación exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Chatrooms was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar cambiar el estatus de la notificación\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "post",
    "url": "/user/listnotifications",
    "title": "1 listnotifications",
    "name": "listnotifications_-_Listar_los_datos_de_la_sala_de_chat_por_idSala",
    "group": "Notifications",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "status",
            "description": "<p>Optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Notifications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n     {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idNotifications\": 11,\n            \"dateNotifications\": \"31/10/2020\",\n            \"statusNotifications\": 1,\n            \"typenotifications\": 2,\n            \"title\": \"Haz recibido un takasteo potencial\",\n            \"details\": \"¡En hora buena Anailys Rodríguez! tú publicación  <<Reloj Alarma>> tiene un takasteo potencial con un valor comercial de 130000\",\n            \"idevento\": 145,\n            \"idrelation\": 3,\n            \"name\": \"Reloj Alarma\",\n            \"nameProducto\": 12000\n        },\n        {\n            \"idNotifications\": 10,\n            \"dateNotifications\": \"31/10/2020\"\",\n            \"statusNotifications\": 1,\n            \"typenotifications\": 2,\n            \"title\": \"Haz recibido un takasteo potencial\",\n            \"details\": \"¡En hora buena Anailys Rodríguez! tú publicación  <<Reloj Alarma>> tiene un takasteo potencial con un valor comercial de 130000\",\n            \"idevento\": 144,\n            \"idrelation\": 3,\n            \"name\": \"Reloj Alarma\",\n            \"nameProducto\": 12000\n        }\n    ],\n    \"msg\": \"Lista detallada de notificaciones  con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Notifications was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar notificaciones\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/notifications/notificationsroutes.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "post",
    "url": "/user/listnotifications",
    "title": "1 listnotifications",
    "name": "listnotifications_-_Listar_los_datos_de_la_sala_de_chat_por_idSala",
    "group": "Notifications",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Notifications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n     {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idNotifications\": 11,\n            \"dateNotifications\": \"31/10/2020\",\n            \"statusNotifications\": 1,\n            \"typenotifications\": 2,\n            \"title\": \"Haz recibido un takasteo potencial\",\n            \"details\": \"¡En hora buena Anailys Rodríguez! tú publicación  <<Reloj Alarma>> tiene un takasteo potencial con un valor comercial de 130000\",\n            \"idevento\": 145,\n            \"idrelation\": 3,\n            \"name\": \"Reloj Alarma\",\n            \"nameProducto\": 12000\n        },\n        {\n            \"idNotifications\": 10,\n            \"dateNotifications\": \"31/10/2020\"\",\n            \"statusNotifications\": 1,\n            \"typenotifications\": 2,\n            \"title\": \"Haz recibido un takasteo potencial\",\n            \"details\": \"¡En hora buena Anailys Rodríguez! tú publicación  <<Reloj Alarma>> tiene un takasteo potencial con un valor comercial de 130000\",\n            \"idevento\": 144,\n            \"idrelation\": 3,\n            \"name\": \"Reloj Alarma\",\n            \"nameProducto\": 12000\n        }\n    ],\n    \"msg\": \"Lista detallada de notificaciones  con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Notifications was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar notificaciones\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "post",
    "url": "/user/caldifference",
    "title": "4 caldifference",
    "name": "caldifference_-_Listar_Oferta",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Int",
            "description": "<p>idPublication required.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "marketvalueP",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "Publications",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n     {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idPublication\": 4,\n        \"marketvalueP\": \"50000.0000\",\n        \"SumItemsOffer\": \"20000.0000\",\n        \"differenceoffer\": \"30000.0000\",\n        \"infavor\": false\n    },\n    \"msg\": \"Diferencia calculada exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Calcular diferencia\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "post",
    "url": "/user/cantnofertaspublications",
    "title": "7 cantnofertaspublications",
    "name": "cantnofertaspublications_-_Obtener_la_cantidad_de_notificaciones_según_bandera",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idPublication",
            "description": "<p>requeride .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"CantOfertas\": 13,\n    \"msg\": \"Cantidad de Ofertas a una publicación obtenidas con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar obtener Cantidad de Ofertas a una publicación\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "put",
    "url": "/user/changestatusoffer",
    "title": "6 changestatusoffer",
    "name": "changestatusoffer_-_Cambio_de_estado_de_una_oferta",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idOffer",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "FlagStatusOffer",
            "description": "<p>required. CANCELAR = 0, RECHAZAR = 1, ACEPTAR = 2</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"match\": true,\n    \"sala\": \"6340c299f4d9eb3d797b6a54f779cf616d0b0cdb\",\n    \"msg\": \"Cambio de estatus de una oferta ejecutdos exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar cambiar el estatus de una Oferta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "put",
    "url": "/user/changestatusoffer",
    "title": "6 changestatusoffer",
    "name": "changestatusoffer_-_Cambio_de_estado_de_una_oferta",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idUserFirabase",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSubastakas",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"IdSAla\": \"a10531f9f302177ecbd30ef97ac9fcbeab88265c\",\n        \"idproduct\": 5,\n        \"datecreated\": \"2020-12-15 19:08\",\n        \"started\": true,\n        \"finished\": false,\n        \"begin\": \"2020-12-15 12:30\",\n        \"end\": \"2020-12-21 20:00\",\n        \"statusSubasta\": 43,\n        \"msg\": \"Que gane el mejor postor! en la subasta de << pueba laptop 23 >>\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n{\n       \"success\": false,\n       \"status\":: \"500\",\n       \"msg\": \"Error al intentar Obtener la Sala de la Subastakas\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "post",
    "url": "/user/detailsoffer",
    "title": "3 detailsoffer",
    "name": "detailsoffer_-_Listar_Oferta",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idFirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typePublication",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Int",
            "description": "<p>idOferta required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idoffer\": 7,\n        \"iduseroffer\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n        \"statusoffer\": 7,\n        \"idSala\": null,\n        \"idproduct\": 1,\n        \"namepublication\": \"Estufa de 4 hornillas\",\n        \"img\": [\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722\"\n        ],\n        \"observation\": \"-\",\n        \"valorpublication\": \"200000.0000\",\n        \"sumitemsoffer\": \"130000.0000\",\n        \"differenceoffer\": \"70000.0000\",\n        \"infavor\": true,\n        \"itemsoffer\": [\n            {\n                \"idpublication\": 5,\n                \"imgpublicacion\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"nameproduct\": \"Camisas de Among Us\",\n                \"status\": 1,\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"marketvalue\": \"50000.0000\"\n            },\n            {\n                \"idpublication\": 6,\n                \"imgpublicacion\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\",\n                \"nameproduct\": \"Plancha para el pelo\",\n                \"status\": 1,\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\",\n                \"marketvalue\": \"80000.0000\"\n            }\n        ]\n    },\n    \"msg\": \"Detalles de la oferta listado exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar listar detalles de la oferta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "post",
    "url": "/user/listmyoffer",
    "title": "5 listmyoffer",
    "name": "listmyoffer_-_Listar_MIs_Oferta",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Int",
            "description": "<p>idFirebaseUser required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typePublication",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 5,\n            \"datecreated\": \"23/10/2020\",\n            \"iduser\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Camisas de Among Us\",\n            \"details\": \"camisas muy creativas\",\n            \"typemoney\": 3,\n            \"marketvalue\": \"50000.0000\",\n            \"typepublication\": 1,\n            \"conditions\": null,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 30,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\"\n            ],\n            \"Preferences\": [\n                1,\n                2\n            ]\n        },\n        {\n            \"idproduct\": 6,\n            \"datecreated\": \"26/10/2020\",\n            \"iduser\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Plancha para el pelo\",\n            \"details\": \"maraca baby liz\",\n            \"typemoney\": 3,\n            \"marketvalue\": \"80000.0000\",\n            \"typepublication\": 1,\n            \"conditions\": null,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\"\n            ],\n            \"Preferences\": [\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de mis productos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar listar mis ofertas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "post",
    "url": "/user/listoffer",
    "title": "2 listoffer",
    "name": "listoffer_-_Listar_Oferta",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typePublication",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Int",
            "description": "<p>idPublication required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 5,\n            \"datecreated\": \"23/10/2020\",\n            \"iduser\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Camisas de Among Us\",\n            \"details\": \"camisas muy creativas\",\n            \"typemoney\": 3,\n            \"marketvalue\": \"50000.0000\",\n            \"typepublication\": 1,\n            \"conditions\": null,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 30,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\"\n            ],\n            \"Preferences\": [\n                1,\n                2\n            ]\n        },\n        {\n            \"idproduct\": 6,\n            \"datecreated\": \"26/10/2020\",\n            \"iduser\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Plancha para el pelo\",\n            \"details\": \"maraca baby liz\",\n            \"typemoney\": 3,\n            \"marketvalue\": \"80000.0000\",\n            \"typepublication\": 1,\n            \"conditions\": null,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\"\n            ],\n            \"Preferences\": [\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de mis productos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar listar Oferta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "post",
    "url": "/user/newoffer",
    "title": "1 newoffer",
    "name": "newoffer_-_Crear_Oferta",
    "group": "Offers",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idFirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typePublication",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPublication",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "descriptionOffer",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "idsPublications",
            "description": "<p>array Int required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"idoferta\":5,\n    \"msg\": \"Oferta creada exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar crear Oferta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Offers"
  },
  {
    "type": "post",
    "url": "/admin/listpqrs",
    "title": "3 listpqrs",
    "name": "listpqrs_-_Listar_PQRs",
    "group": "PQRs",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "FlagPQRs",
            "description": "<p>Reqired. PREGUNTA = 0, QUEJAS=1, RESPUESTAS=2, SUGERENCIAS=3, TODO=4</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"iduser\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"details\": \"Puedo pagar en línea?\",\n            \"datecreated\": \"2020-11-27T03:50:30.000Z\",\n            \"status\": 34\n        },\n        {\n            \"id\": 2,\n            \"iduser\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"details\": \"El vendedor tarda mucho en contestar!\",\n            \"datecreated\": \"2020-11-27T03:51:26.000Z\",\n            \"status\": 35\n        },\n        {\n            \"id\": 3,\n            \"iduser\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"details\": \"Sería genial tener un panel de preguntas frecuentes\",\n            \"datecreated\": \"2020-11-27T03:52:03.000Z\",\n            \"status\": 37\n        }\n    ],\n    \"msg\": \"Lista de PQRs con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar PQRs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "PQRs"
  },
  {
    "type": "post",
    "url": "/admin/listpqrs",
    "title": "3 listpqrs",
    "name": "listpqrs_-_Listar_PQRs",
    "group": "PQRs",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idFirebaseUser",
            "description": "<p>Reqired.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"iduser\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"details\": \"Puedo pagar en línea?\",\n            \"datecreated\": \"2020-11-27T03:50:30.000Z\",\n            \"status\": 34\n        },\n        {\n            \"id\": 2,\n            \"iduser\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"details\": \"El vendedor tarda mucho en contestar!\",\n            \"datecreated\": \"2020-11-27T03:51:26.000Z\",\n            \"status\": 35\n        },\n        {\n            \"id\": 3,\n            \"iduser\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"details\": \"Sería genial tener un panel de preguntas frecuentes\",\n            \"datecreated\": \"2020-11-27T03:52:03.000Z\",\n            \"status\": 37\n        }\n    ],\n    \"msg\": \"Lista de PQRs con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar PQRs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "PQRs"
  },
  {
    "type": "post",
    "url": "/user/pqrs",
    "title": "1 pqrs",
    "name": "pqrs_-_Crear_nueva_PQRs",
    "group": "PQRs",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "detailsPQRs",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flagPQRs",
            "description": "<p>required. Preguntas=0, Quejas=1, Respuestas=2, Sugerencias=3</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Se ha creado la PQRs exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar crear una nueva PQRs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "PQRs"
  },
  {
    "type": "post",
    "url": "/admin/responsepqrs",
    "title": "2 responsepqrs",
    "name": "responsepqrs_-_Crear_respuesta_de_nueva_PQRs",
    "group": "PQRs",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idPQRs",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "detailsPQRs",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flagPQRs",
            "description": "<p>required. Preguntas=0, Quejas=1, Respuestas=2, Sugerencias=3</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the PQRs.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the PQRs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Se ha creado respuesta a la PQRs exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the PQRs was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar crear una respuesta para  PQRs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "PQRs"
  },
  {
    "type": "get",
    "url": "/user/listypepreferences",
    "title": "1 Listypepreferences",
    "name": "Listypepreferences_-_Listar_Preferencias_de_negociación_que_puede_tener_una_publicación",
    "group": "Preferences",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "typePublicarion",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Preferences.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Preferences.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Preferences.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"Efectivo\",\n            \"typepublication\": null,\n            \"icon\": \"money\",\n            \"status\":: 1\n        },\n        {\n            \"id\": 2,\n            \"name\": \"Takasteo\",\n            \"typepublication\": null,\n            \"icon\": \"takas\",\n            \"status\":: 1\n        }\n    ],\n    \"msg\": \"Lista de Tipo de Preferencias\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Preferences was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar los tipos de preferencias\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Preferences"
  },
  {
    "type": "post",
    "url": "/user/deletepublication",
    "title": "10 deletepublication",
    "name": "deletepublication_-_Eliminación_lógica_de_un_producto",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>requeride .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idPublication",
            "description": "<p>requeride .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Offers.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Offers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"publicación eliminada con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Offers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar eliminar una publicación\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/detailsproduct",
    "title": "5 detailsproduct",
    "name": "detailsproduct_-_Detalle_del_producto",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdUserProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdProduct",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idproduct\": 61,\n        \"datecreated\": \"14/11/2020\",\n        \"iduser\": \"idfirebaseU4534dsaxgg\",\n        \"nuevo\": false,\n        \"subcategory\": 4,\n        \"name\": \"pueba laptop 2\",\n        \"details\": \"Hp Procesador intel core i7\",\n        \"typemoney\": 2,\n        \"marketvalue\": \"1200000.0000\",\n        \"typepublication\": 1,\n        \"conditions\": 1,\n        \"size\": null,\n        \"weight\": null,\n        \"status\": 0,\n        \"CantidadOfertas\": 0,\n        \"ProductImages\": [\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n        ],\n        \"Preferences\": [\n            1\n        ]\n    },\n    \"msg\": \"Listar detalles de un producto\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar obtener Cantidad de notificaciones según bandera\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/editproductckw",
    "title": "9 editproductckw",
    "name": "editproductckw_-_Editar_Producto_con_Características",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "iduserProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "nameProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "detailsProduct",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "typemoneyProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "marketvalueProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subcategoryProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "PreferecesProduct",
            "description": "<p>required array de enteros .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ImagesProduct",
            "description": "<p>required arrays de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "KeyWordsProduct",
            "description": "<p>optional array de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "UsePoduct",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "SizePoduct",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "WeightProduct",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "valueweight",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "unitofmeasurement",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"msg\": \"Producto registrado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"data\": \"Ha superdo el límite de imagenes\",\n    \"msg\": \"Error al registrar producto\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/findproductos",
    "title": "7 findproductos",
    "name": "findproductos_-_Buscar_articulos_por_nombre",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "IdUserProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "nameProduct",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 1,\n            \"datecreated\": \"05/10/2020 13:46:27\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Mameluco para bebé\",\n            \"details\": \"Producto disponible de 0 a 24 meses\",\n            \"typemoney\": 2,\n            \"marketvalue\": 30000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        },\n        {\n            \"idproduct\": 7,\n            \"datecreated\": \"05/10/2020 13:25:07\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"name\": \"Gorros para bebés\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        },\n        {\n            \"idproduct\": 11,\n            \"datecreated\": \"06/09/2021 17:27:47\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        }\n    ],\n    \"msg\": \"Busqueda de productos éxitosa\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Buscar Productos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/listmisproductos",
    "title": "2 listmisproductos",
    "name": "listmisproductos_-_Listar_Las_plublicaciones_de_un_usuario",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "statusProduct",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 5,\n            \"datecreated\": \"23/10/2020\",\n            \"iduser\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Camisas de Among Us\",\n            \"details\": \"camisas muy creativas\",\n            \"typemoney\": 3,\n            \"marketvalue\": \"50000.0000\",\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"CantidadOfertas\": 1,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\"\n            ],\n            \"Preferences\": [\n                1,\n                2\n            ]\n        },\n        {\n            \"idproduct\": 6,\n            \"datecreated\": \"26/10/2020\",\n            \"iduser\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Plancha para el pelo\",\n            \"details\": \"maraca baby liz\",\n            \"typemoney\": 3,\n            \"marketvalue\": \"80000.0000\",\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\"\n            ],\n            \"Preferences\": [\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de mis productos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Mis Productos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/listproductos",
    "title": "3 listproductos",
    "name": "listproductos_-_Listar_Los_productos_pubicados_por_otros_usuarios",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "FlagProduct",
            "description": "<p>required 0=Activa, 1=Takasteada, 2=Eliminada(deshabilitada), 3=Editada.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 1,\n            \"datecreated\": \"05/10/2020 13:46:27\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Mameluco para bebé\",\n            \"details\": \"Producto disponible de 0 a 24 meses\",\n            \"typemoney\": 2,\n            \"marketvalue\": 30000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        },\n        {\n            \"idproduct\": 7,\n            \"datecreated\": \"05/10/2020 13:25:07\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"name\": \"Gorros para bebés\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        },\n        {\n            \"idproduct\": 11,\n            \"datecreated\": \"06/09/2021 17:27:47\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        }\n    ],\n    \"msg\": \"Lista de productos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Productos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/listproductsubcategory",
    "title": "4 listproductsubcategory",
    "name": "listproductsubcategory_-_Listar_Los_productos_pubicados_por_otros_usuarios",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "SubCategoriaProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idFirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "statusProduct",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 1,\n            \"datecreated\": \"05/10/2020 13:46:27\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Mameluco para bebé\",\n            \"details\": \"Producto disponible de 0 a 24 meses\",\n            \"typemoney\": 2,\n            \"marketvalue\": 30000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        },\n        {\n            \"idproduct\": 7,\n            \"datecreated\": \"05/10/2020 13:25:07\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        },\n        {\n            \"idproduct\": 11,\n            \"datecreated\": \"06/09/2021 17:27:47\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": []\n        },\n        {\n            \"idproduct\": 17,\n            \"datecreated\": \"06/09/2021 18:06:37\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 1,\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos 1\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"ProductImages\": [\n                \"https://n9.cl/vt0n\"\n            ],\n            \"Preferences\": [\n                1,\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de productos filtrados por subcategorías\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Productos filtrados por subcategoría\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/admin/listpublications",
    "title": "12 listpublications",
    "name": "listpublications_-_Listar_Publicaciones",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "TypeP",
            "description": "<p>Reqired. Takastear = 0, Subastakear=1, Servitakastear=2</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "StatusP",
            "description": "<p>Reqired. ACTIVA = 0, TAKASTEADO=1, DESHABILITADA=2, EDITADA=2</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"new\": null,\n            \"datepublication\": \"2020-10-24T00:32:10.000Z\",\n            \"iduser\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"name\": \"Estufa de 4 hornillas\",\n            \"details\": \"Estufa de 4 hornillas color blanco \",\n            \"typemoney\": 3,\n            \"marketvalue\": 200000,\n            \"conditions\": null,\n            \"size\": null,\n            \"weight\": null,\n            \"datecreated\": \"2020-10-24T00:32:10.000Z\",\n            \"subcategory\": 4,\n            \"level\": null,\n            \"typepublication\": 1,\n            \"idclient\": null,\n            \"scorev\": null,\n            \"scorec\": null,\n            \"status\": 1\n        }\n    ],\n    \"msg\": \"Lista de Publicaciones con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar Publicaciones\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/newproduct",
    "title": "1 newproduct",
    "name": "newproduct_-_Registro_De_Producto_TAKASTEAR",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "iduserProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "nameProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "detailsProduct",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "typemoneyProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "marketvalueProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subcategoryProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "PreferecesProduct",
            "description": "<p>optional array de enteros .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ImagesProduct",
            "description": "<p>optional arrays de varchar .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"msg\": \"Producto registrado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"data\": \"Ha superdo el límite de imagenes\",\n    \"msg\": \"Error al registrar producto\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/newproductckw",
    "title": "8 newproductckw",
    "name": "newproductckw_-_Registro_De_Producto_con_Características",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "iduserProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "nameProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "NewProduct",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "detailsProduct",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "typemoneyProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "marketvalueProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subcategoryProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "PreferecesProduct",
            "description": "<p>required array de enteros .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ImagesProduct",
            "description": "<p>required arrays de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "KeyWordsProduct",
            "description": "<p>optional array de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "UsePoduct",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "SizePoduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "WeightProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ValueWeightProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "UnitOfMeasurementP",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"idProduct\":47,\n    \"msg\": \"Producto registrado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"data\": \"Ha superdo el límite de imagenes\",\n    \"msg\": \"Error al registrar producto\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/newproductkw",
    "title": "6 newproductkw",
    "name": "newproductkw_-_Registro_De_Producto_con_keywords_TAKASTEAR",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "iduserProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "nameProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "NewProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "detailsProduct",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "typemoneyProduct",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "marketvalueProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subcategoryProduct",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "PreferecesProduct",
            "description": "<p>required array de enteros .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ImagesProduct",
            "description": "<p>required arrays de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "KeyWordsProduct",
            "description": "<p>optional array de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "SizePoduct",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "WeightProduct",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"msg\": \"Producto registrado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"data\": \"Ha superdo el límite de imagenes\",\n    \"msg\": \"Error al registrar producto\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/scorepublication",
    "title": "11 scorepublication",
    "name": "scorepublication_-_Puntuación_de_la_publicación",
    "group": "Product",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPublication",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "scoreUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Se ha calificado exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar calificar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user/answerquestion",
    "title": "2 answerquestion",
    "name": "answerquestion_-_Respuesta_del_una_pregunta_de_unproducto",
    "group": "Questions",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idQuestion",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPublication",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "descriptionAnswer",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typeQuestion",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Respuesta creada exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar crear una Respuesta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Questions"
  },
  {
    "type": "post",
    "url": "/user/listquestionanswer",
    "title": "3 listquestionanswer",
    "name": "listquestionanswer_-_Preguntas_y_Respuestaa_de_un_producto",
    "group": "Questions",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idtypePublicationQA",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPublicationQA",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Questions.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Questions.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Questions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n          {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idquiestions\": 1,\n            \"iduser\": \"idfirebaseUser2374687234t8t2348t8\",\n            \"Pregunta\": \"Son modelos Unisex?\",\n            \"isquestions\": 1,\n            \"publication\": 1,\n            \"idproduct\": 7,\n            \"idservice\": 1,\n            \"idauction\": 1,\n            \"datecreated\": \"12/10/2020 16:10:00\",\n            \"status\": 1,\n            \"Answers\": {\n                \"idPregunta\": 1,\n                \"Respuesta\": \"Si Nuestra línea de bebé en su mayoría son Unisexs\",\n                \"publication\": 1,\n                \"idproduct\": 7,\n                \"datecreated\": \"30/09/2020 13:09:00\",\n                \"status\": 1\n            }\n        },\n        {\n            \"idquiestions\": 2,\n            \"iduser\": \"idfirebaseUser2374687234t8t2348t8\",\n            \"Pregunta\": \"Son modelos Unisex?\",\n            \"isquestions\": 1,\n            \"publication\": 1,\n            \"idproduct\": 7,\n            \"idservice\": 1,\n            \"idauction\": 1,\n            \"datecreated\": \"30/09/2020 13:09:00\",\n            \"status\": 1,\n            \"Answers\": {\n                \"idPregunta\": 2,\n                \"Respuesta\": \"Si Nuestra línea de bebé en su mayoría son Unisexs\",\n                \"publication\": 1,\n                \"idproduct\": 7,\n                \"datecreated\": \"30/09/2020 13:09:00\",\n                \"status\": 1\n            }\n        }\n    ],\n    \"msg\": \"Lista de preguntas y respuestas de un producto\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar de pregunta y respuestas de un producto\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Questions"
  },
  {
    "type": "post",
    "url": "/user/newquestion",
    "title": "1 newquestion",
    "name": "newquestion_-_Pregunta_de_un_producto",
    "group": "Questions",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idFirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPublication",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "descriptionQuestion",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typeQuestion",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Pregunta creada con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar crear pregunta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Questions"
  },
  {
    "type": "post",
    "url": "/user/listcharacteristicpublication",
    "title": "2 listcharacteristicpublication",
    "name": "listcharacteristicpublication_-_Listar_Caracter´sticas_de_una_publicación_según_bandera",
    "group": "Status",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "FlagCharacteristic",
            "description": "<p>requeride  1=Nuevo ó Usado 2=Tamaño 3=Peso y 4= Unidad de Medida.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 19,\n            \"namestatus\": \"Muy liviano \",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        },\n        {\n            \"id\": 20,\n            \"namestatus\": \"Liviano\",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        },\n        {\n            \"id\": 21,\n            \"namestatus\": \"Normal \",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        },\n        {\n            \"id\": 22,\n            \"namestatus\": \"Pesado \",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        }\n    ],\n    \"msg\": \"Lista de Características para una publicación sengún bandera\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Status was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar los tipos de preferencias\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Status"
  },
  {
    "type": "post",
    "url": "/user/liststatusproduct",
    "title": "1 liststatusproduct",
    "name": "liststatusproduct_-_Listar_status_ce_características_de_Productos",
    "group": "Status",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "idfilter",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 9,\n            \"namestatus\": \"Nuevo \",\n            \"filter\": 4,\n            \"namefilter\": \"Estado Producto \"\n        },\n        {\n            \"id\": 10,\n            \"namestatus\": \"Usado (Como nuevo)\",\n            \"filter\": 4,\n            \"namefilter\": \"Estado Producto \"\n        },\n        {\n            \"id\": 11,\n            \"namestatus\": \"Usado (Buen estado)\",\n            \"filter\": 4,\n            \"namefilter\": \"Estado Producto \"\n        },\n        {\n            \"id\": 12,\n            \"namestatus\": \"Usado (Funcional)\",\n            \"filter\": 4,\n            \"namefilter\": \"Estado Producto \"\n        },\n        {\n            \"id\": 13,\n            \"namestatus\": \"Usado (con detalles)\",\n            \"filter\": 4,\n            \"namefilter\": \"Estado Producto \"\n        }\n    ],\n    \"msg\": \"Lista de Tipo de Publicación\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Status was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar status de productos según filtros\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/user/listsubcategory",
    "title": "1 listsubcategory",
    "name": "listsubcategory_-_Listar_Preferencias_de_negociación_que_puede_tener_una_publicación",
    "group": "SubCategory",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the SubCategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the SubCategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the SubCategory.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"data\": [\n        {\n            \"idsc\": 1,\n            \"name\": \"Bicicletas y Eléctricos\",\n            \"icon\": \"bike\",\n            \"category\": 1,\n            \"status\": 1,\n            \"namec\": \"Vehículos\",\n            \"typepublication\": 1\n        },\n        {\n            \"idsc\": 2,\n            \"name\": \"Automóviles\",\n            \"icon\": \"car\",\n            \"category\": 1,\n            \"status\": 1,\n            \"namec\": \"Vehículos\",\n            \"typepublication\": 1\n        },\n        {\n            \"idsc\": 3,\n            \"name\": \"Náutica\",\n            \"icon\": \"ancle\",\n            \"category\": 1,\n            \"status\": 1,\n            \"namec\": \"Vehículos\",\n            \"typepublication\": 1\n        },\n        {\n            \"idsc\": 4,\n            \"name\": \"Accesorios para vehiculos\",\n            \"icon\": \"wheel\",\n            \"category\": 1,\n            \"status\": 1,\n            \"namec\": \"Vehículos\",\n            \"typepublication\": 1\n        }\n    ],\n    \"msg\": \"Lista de Subcategorías\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the SubCategory was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Subcategorías\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "SubCategory"
  },
  {
    "type": "post",
    "url": "/user/detailsubastakas",
    "title": "4 detailsubastakas",
    "name": "detailsubastakas_-_Detalle_de_la_Subastakas",
    "group": "Subastakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdUserSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdSubastakas",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idproduct\": 6,\n        \"datecreated\": \"09/12/2020\",\n        \"iduser\": \"idfirebaseU4534dsaxgg\",\n        \"nuevo\": true,\n        \"subcategory\": 4,\n        \"name\": \"pueba laptop 2\",\n        \"details\": \"Hp Procesador intel core i7\",\n        \"typemoney\": 2,\n        \"marketvalue\": \"1200000.0000\",\n        \"typepublication\": 3,\n        \"conditions\": 1,\n        \"size\": null,\n        \"weight\": null,\n        \"status\": 0,\n        \"editable\": false,\n        \"CantidadOfertas\": 0,\n        \"ProductImages\": [\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n        ]\n    },\n    \"msg\": \"Listar detalles de un producto\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar obtener Cantidad de notificaciones según bandera\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Subastakas"
  },
  {
    "type": "post",
    "url": "/user/interestedsubastakas",
    "title": "5 interestedsubastakas",
    "name": "interestedsubastakas_-_Me_interesa_Subastakas",
    "group": "Subastakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdUserSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "FlagInterested",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Se ha registrado Me interesa\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al intentar registar Subastakas como me interesa\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Subastakas"
  },
  {
    "type": "post",
    "url": "/user/listmisubastakas",
    "title": "3 listmisubastakas",
    "name": "listmisubastakas_-_Listar_mis_Subastakas_publicadas",
    "group": "Subastakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "FlagProduct",
            "description": "<p>required 0=Activa, 1=Takasteada, 2=Eliminada(deshabilitada), 3=Editada.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n           {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 1,\n            \"datecreated\": \"09/12/2020\",\n            \"begin\": \"0000-00-00 00:00:00\",\n            \"end\": \"0000-00-00 00:00:00\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": true,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 2\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        }\n    ],\n    \"msg\": \"Lista de mis subastakas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"'Error al Listar mis subastakas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Subastakas"
  },
  {
    "type": "post",
    "url": "/user/listodo",
    "title": "6 listodo",
    "name": "listodo_-_Listar_todas_Publicaciones",
    "group": "Subastakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdUserSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "IdSubastakas",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 1,\n            \"flagInterested\": false,\n            \"datecreated\": \"2020-12-15 16:40:41\",\n            \"begin\": \"2020-12-20T17:30:00.000Z\",\n            \"end\": \"2020-12-22T01:00:00.000Z\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 23\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": 1,\n            \"weight\": 1,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"Preferences\": [\n                1\n            ]\n        },\n        {\n            \"idproduct\": 2,\n            \"flagInterested\": false,\n            \"datecreated\": \"2020-12-15 16:41:37\",\n            \"begin\": \"2020-12-20T17:30:00.000Z\",\n            \"end\": \"2020-12-22T01:00:00.000Z\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 23\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": 1,\n            \"weight\": 1,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"Preferences\": [\n                1\n            ]\n        },\n        {\n            \"idproduct\": 3,\n            \"flagInterested\": false,\n            \"datecreated\": \"2020-12-15 17:10:54\",\n            \"begin\": null,\n            \"end\": null,\n            \"iduser\": \"zSiRYTbNbpW5vOQ6K6XpxvpKu2v1\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 4\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 1,\n            \"conditions\": 1,\n            \"size\": 18,\n            \"weight\": 19,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"Preferences\": [\n                1\n            ]\n        },\n        {\n            \"idproduct\": 4,\n            \"flagInterested\": false,\n            \"datecreated\": \"2020-12-15 17:11:32\",\n            \"begin\": null,\n            \"end\": null,\n            \"iduser\": \"zSiRYTbNbpW5vOQ6K6XpxvpKu2v1\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 4\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 1,\n            \"conditions\": 1,\n            \"size\": 18,\n            \"weight\": 19,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"Preferences\": [\n                1\n            ]\n        },\n        {\n            \"idproduct\": 5,\n            \"flagInterested\": true,\n            \"datecreated\": \"2020-12-15 19:08:42\",\n            \"begin\": \"2020-12-15T17:30:00.000Z\",\n            \"end\": \"2020-12-22T01:00:00.000Z\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 23\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": 1,\n            \"weight\": 1,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"Preferences\": []\n        }\n    ],\n    \"msg\": \"Listar Todas las publicaciones\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar todas las Publicaciones\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Subastakas"
  },
  {
    "type": "post",
    "url": "/user/listsubastakas",
    "title": "2 listsubastakas",
    "name": "listsubastakas_-_Listar_Las_Subastakas_pubicadas_por_otros_usuarios",
    "group": "Subastakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "FlagProduct",
            "description": "<p>required 0=Activa, 1=Takasteada, 2=Eliminada(deshabilitada), 3=Editada.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 1,\n            \"datecreated\": \"09/12/2020\",\n            \"flagInterested\": true,\n            \"started\": false,\n            \"finished\": false,\n            \"begin\": \"20/12/2020 12:30:00\",\n            \"end\": \"21/12/2020 20:00:00\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": true,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 2\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        }\n    ],\n    \"msg\": \"Lista de productos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Productos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Subastakas"
  },
  {
    "type": "post",
    "url": "/user/minterestedsubastakas",
    "title": "7 minterestedsubastakas",
    "name": "minterestedsubastakas_-_Listar_Las_Subastakas_marcadas_como_de_Interés",
    "group": "Subastakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\" }",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 7,\n            \"datecreated\": \"2020-12-09 14:11:39\",\n            \"flagInterested\": true,\n            \"started\": false,\n            \"finished\": false,\n            \"begin\": \"2020-12-20 12:30:00\",\n            \"end\": \"2020-12-21 20:00:00\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 2\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        },\n        {\n            \"idproduct\": 15,\n            \"datecreated\": \"2020-12-11 13:26:28\",\n            \"flagInterested\": false,\n            \"started\": false,\n            \"finished\": false,\n            \"begin\": \"2020-12-20 12:30:00\",\n            \"end\": \"2020-12-21 20:00:00\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 23\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        },\n        {\n            \"idproduct\": 7,\n            \"datecreated\": \"2020-12-09 14:11:39\",\n            \"flagInterested\": true,\n            \"started\": false,\n            \"finished\": false,\n            \"begin\": \"2020-12-20 12:30:00\",\n            \"end\": \"2020-12-21 20:00:00\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 2\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        },\n        {\n            \"idproduct\": 15,\n            \"datecreated\": \"2020-12-11 13:26:28\",\n            \"flagInterested\": false,\n            \"started\": false,\n            \"finished\": false,\n            \"begin\": \"2020-12-20 12:30:00\",\n            \"end\": \"2020-12-21 20:00:00\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"nuevo\": false,\n            \"subcategory\": 4,\n            \"name\": \"pueba laptop 23\",\n            \"details\": \"Hp Procesador intel core i7\",\n            \"typemoney\": 2,\n            \"marketvalue\": \"1200000.0000\",\n            \"typepublication\": 3,\n            \"conditions\": 1,\n            \"size\": null,\n            \"weight\": null,\n            \"status\": 0,\n            \"editable\": false,\n            \"CantidadOfertas\": 0,\n            \"ProductImages\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        }\n    ],\n    \"msg\": \"Lista de Subastakas marcadas como interesantes\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Subastakas marcadas como interesantes\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Subastakas"
  },
  {
    "type": "post",
    "url": "/user/newsubastakasckw",
    "title": "1 newsubastakasckw",
    "name": "newsubastakasckw_-_Registro_De_Subastakas_con_Características",
    "group": "Subastakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "\"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "iduserSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "nameSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "beginSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "endSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "NewSubastakas",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "detailsSubastakas",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "typemoneySubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "marketvalueSubastakas",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subcategorySubastakas",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ImagesSubastakas",
            "description": "<p>required arrays de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "KeyWordsSubastakas",
            "description": "<p>optional array de varchar .</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "UseSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "SizeSubastakas",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "WeightSubastakas",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Subastakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Subastakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Subastakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Subastakas registrada con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"data\": \"Se ha superado el límite de imagenes ó palabras claves\",\n    \"msg\": \"Error al registrar Subastakas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Subastakas"
  },
  {
    "type": "post",
    "url": "/user/comprarapartartickets",
    "title": "3 comprarapartartickets",
    "name": "comprarapartartickets_-_Comprar_o_apartar_tickets",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idTombotaka",
            "description": "<p>int required.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "tickets",
            "description": "<p>array int required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "accionTTK",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"tickets\": [\n        \"01\"\n    ],\n    \"ticketsNoDispo\": [\n        \"00\",\n        \"21\",\n        \"31\"\n    ],\n    \"msg\": \"Los tickets disponibles fueron procesados con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"data\": \"Los tickets nos están disponibles\",\n    \"msg\": \"Error al intentar Procesar tickets\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/user/detailstombotakas",
    "title": "8 detailstombotakas",
    "name": "detailstombotakas_-_Detalle_Tombotakas",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idTTK",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idTombotakas\": 2,\n        \"timeremaining\": 25593.626933333333,\n        \"pertenece\": true,\n        \"nameTombotakas\": \"test Nueva Tombotakas\",\n        \"statusTTK\": 0,\n        \"datecreatedTTK\": \"19/11/2020\",\n        \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n        \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n        \"pinreferenceTTK\": \"ibxJu2\",\n        \"datelotTTK\": \"25/11/2020 19:47\",\n        \"moneyTTK\": 1,\n        \"priceTTK\": \"10000.0000\",\n        \"resultTTK\": null,\n        \"imgTTK\": [\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n            \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n        ],\n        \"numberticketsrs\": [\n            31,\n            40,\n            21,\n            1,\n            10,\n            32,\n            22,\n            2\n        ],\n        \"ticketsReservados\": [\n            {\n                \"idNUmbre\": 1,\n                \"Number\": 31,\n                \"status\": 4,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            },\n            {\n                \"idNUmbre\": 2,\n                \"Number\": 40,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            },\n            {\n                \"idNUmbre\": 3,\n                \"Number\": 21,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            },\n            {\n                \"idNUmbre\": 4,\n                \"Number\": 1,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            },\n            {\n                \"idNUmbre\": 5,\n                \"Number\": 10,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            },\n            {\n                \"idNUmbre\": 6,\n                \"Number\": 32,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            },\n            {\n                \"idNUmbre\": 7,\n                \"Number\": 22,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            },\n            {\n                \"idNUmbre\": 8,\n                \"Number\": 2,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\",\n                \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n            }\n        ]\n    },\n    \"msg\": \"Detalle de Tombotakas encontrado exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar buscar detalles de Tombotakas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/user/findtombotakaspin",
    "title": "4 findtombotakaspin",
    "name": "findtombotakaspin_-_Buscar_tombotakas_por_pin_de_referencia",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "pinttk",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idTombotakas\": 2,\n        \"nameTombotakas\": \"test Nueva Tombotakas\",\n        \"statusTTK\": 0,\n        \"datecreatedTTK\": \"19/11/2020\",\n        \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n        \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n        \"pinreferenceTTK\": \"ibxJu2\",\n        \"datelotTTK\": \"25/11/2020 19:47\",\n        \"moneyTTK\": 1,\n        \"priceTTK\": \"10000.0000\",\n        \"resultTTK\": null,\n        \"numberticketsrs\": [\n            31,\n            40,\n            21,\n            1,\n            10,\n            32,\n            22,\n            2\n        ],\n        \"ticketsReservados\": [\n            {\n                \"idNUmbre\": 1,\n                \"Number\": 31,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            },\n            {\n                \"idNUmbre\": 2,\n                \"Number\": 40,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            },\n            {\n                \"idNUmbre\": 3,\n                \"Number\": 21,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            },\n            {\n                \"idNUmbre\": 4,\n                \"Number\": 1,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            },\n            {\n                \"idNUmbre\": 5,\n                \"Number\": 10,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            },\n            {\n                \"idNUmbre\": 6,\n                \"Number\": 32,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            },\n            {\n                \"idNUmbre\": 7,\n                \"Number\": 22,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            },\n            {\n                \"idNUmbre\": 8,\n                \"Number\": 2,\n                \"status\": 1,\n                \"NameUser\": \"gusuario12\",\n                \"phonenumber\": null,\n                \"email\": \"emailUser12@gmail.com\"\n            }\n        ]\n    },\n    \"msg\": \"Tombotakas ha sido encontrada con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar buscar Tombotakas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/admin/listombotakas",
    "title": "9 listombotakas",
    "name": "listombotakas_-_Listar_Publicaciones",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "StatusT",
            "description": "<p>Reqired. ACTIVA = 0, TAKASTEADO=1, DESHABILITADA=2, EDITADA=2</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idTombotakas\": 2,\n            \"nameTombotakas\": \"test Nueva Tombotakas\",\n            \"statusTTK\": 0,\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"ibxJu2\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTK\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"numberticketsrs\": [\n                31,\n                40,\n                21,\n                1,\n                10,\n                32,\n                22,\n                2\n            ],\n            \"ticketsReservados\": [\n                {\n                    \"idNUmbre\": 1,\n                    \"Number\": 31,\n                    \"status\": 4,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 2,\n                    \"Number\": 40,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 3,\n                    \"Number\": 21,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 4,\n                    \"Number\": 1,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 5,\n                    \"Number\": 10,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 6,\n                    \"Number\": 32,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 7,\n                    \"Number\": 22,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 8,\n                    \"Number\": 2,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                }\n            ]\n        },\n        {\n            \"idTombotakas\": 3,\n            \"nameTombotakas\": \"test Nueva Tombotakas\",\n            \"statusTTK\": 0,\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"YuYMXs\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTK\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"numberticketsrs\": [],\n            \"ticketsReservados\": []\n        },\n        {\n            \"idTombotakas\": 4,\n            \"nameTombotakas\": \"test Nueva Tombotakas\",\n            \"statusTTK\": 0,\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"hBKyxU\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTK\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"numberticketsrs\": [],\n            \"ticketsReservados\": []\n        },\n        {\n            \"idTombotakas\": 5,\n            \"nameTombotakas\": \"test Nueva Tombotakas\",\n            \"statusTTK\": 0,\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"J3uxSU\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTK\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"numberticketsrs\": [],\n            \"ticketsReservados\": []\n        },\n        {\n            \"idTombotakas\": 6,\n            \"nameTombotakas\": \"test Nueva Tombotakas\",\n            \"statusTTK\": 0,\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"8JGthr\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTK\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"numberticketsrs\": [],\n            \"ticketsReservados\": []\n        }\n    ],\n    \"msg\": \"Lista de tombotakas con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar Tombotakas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/user/mytickets",
    "title": "5 mytickets",
    "name": "mytickets_-_Listar_mis_tickets",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "flagTTK",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idTombotakas\": 2,\n            \"pinTombotakas\": \"ibxJu2\",\n            \"timeremaining\": 28841.56545,\n            \"nameTombotakas\": \"test Nueva Tombotakas\",\n            \"statusTTK\": 0,\n            \"datecreatedTTK\": \"2020-11-19\",\n            \"pinreferenceTTK\": \"ibxJu2\",\n            \"datelotTTK\": \"2020-11-25 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"imgTTK\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ],\n            \"numberticketsrs\": [\n                31,\n                40,\n                21,\n                1,\n                10,\n                32,\n                22,\n                2\n            ],\n            \"ticketsReservados\": [\n                {\n                    \"idNUmbre\": 1,\n                    \"Number\": 31,\n                    \"status\": 4,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                },\n                {\n                    \"idNUmbre\": 2,\n                    \"Number\": 40,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                },\n                {\n                    \"idNUmbre\": 3,\n                    \"Number\": 21,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                },\n                {\n                    \"idNUmbre\": 4,\n                    \"Number\": 1,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                },\n                {\n                    \"idNUmbre\": 5,\n                    \"Number\": 10,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                },\n                {\n                    \"idNUmbre\": 6,\n                    \"Number\": 32,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                },\n                {\n                    \"idNUmbre\": 7,\n                    \"Number\": 22,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                },\n                {\n                    \"idNUmbre\": 8,\n                    \"Number\": 2,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\",\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\"\n                }\n            ]\n        }\n    ],\n    \"msg\": \"Lista de tickets\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar tickets\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/user/mytombotakas",
    "title": "2 mytombotakas",
    "name": "mytombotakas_-_Lista_de_mis_tombolas",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flagTTK",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idTombotakas\": 2,\n            \"statusTTK\": 0,\n            \"nameTTK\": \"test Nueva Tombotakas\",\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"ibxJu2\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTk\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        },\n        {\n            \"idTombotakas\": 3,\n            \"statusTTK\": 0,\n            \"nameTTK\": \"test Nueva Tombotakas\",\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"YuYMXs\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTk\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        },\n        {\n            \"idTombotakas\": 4,\n            \"statusTTK\": 0,\n            \"nameTTK\": \"test Nueva Tombotakas\",\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"hBKyxU\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTk\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        },\n        {\n            \"idTombotakas\": 5,\n            \"statusTTK\": 0,\n            \"nameTTK\": \"test Nueva Tombotakas\",\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"J3uxSU\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTk\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        },\n        {\n            \"idTombotakas\": 6,\n            \"statusTTK\": 0,\n            \"nameTTK\": \"test Nueva Tombotakas\",\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"detailseventTTK\": \"Para canche 25/11/20 8:00 pm\",\n            \"detailsAwardttk\": \"La imagen que voy a cargar en este momento\",\n            \"pinreferenceTTK\": \"8JGthr\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"resultTTK\": null,\n            \"imgTTk\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\"\n            ]\n        }\n    ],\n    \"msg\": \"Lista de Tombotakas creada  con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar las Tombotakas del usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/user/newtombotakas",
    "title": "1 newtombotakas",
    "name": "newtombotakas_-_Registro_De_TOMBOTAKAS",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "namettk",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DetailsEventtk",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "DetailsAwardttk",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "DateLottk",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "moneyttk",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "pricettk",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ImagesLot",
            "description": "<p>required arrays de varchar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"success\": true,\n    \"status\": \"200\",\n    \"idTTK\": 10,\n    \"pinReference\": \"ccLctE\",\n    \"msg\": \"Tombotakas se ha creado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"data\": \"Se ha superado el límite de imagenes\",\n    \"msg\": \"Error al intentar registrar la Tombotakas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/user/processrequeststickets",
    "title": "7 processrequeststickets",
    "name": "processrequeststickets_-_Procesar_Solicitudes_de_compra_de_tickets",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idticket",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "FlagTTk",
            "description": "<p>required 2=COMPRADO(VENDER) 4=RECHAZADO.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Ticket procesado exitosamente\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar procesar ticket\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "post",
    "url": "/user/requeststickets",
    "title": "6 requeststickets",
    "name": "requeststickets_-_Listar_Solicitudes_de_compra_de_tickets",
    "group": "Tombotakas",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Tombotakas.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Tombotakas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idTombotakas\": 2,\n            \"nameTombotakas\": \"test Nueva Tombotakas\",\n            \"statusTTK\": 0,\n            \"datecreatedTTK\": \"19/11/2020\",\n            \"datelotTTK\": \"25/11/2020 19:47\",\n            \"moneyTTK\": 1,\n            \"priceTTK\": \"10000.0000\",\n            \"ticketsReservados\": [\n                {\n                    \"idNUmbre\": 1,\n                    \"Number\": 31,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 2,\n                    \"Number\": 40,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 3,\n                    \"Number\": 21,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 4,\n                    \"Number\": 1,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 5,\n                    \"Number\": 10,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 6,\n                    \"Number\": 32,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 7,\n                    \"Number\": 22,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                },\n                {\n                    \"idNUmbre\": 8,\n                    \"Number\": 2,\n                    \"status\": 1,\n                    \"NameUser\": \"gusuario12\",\n                    \"phonenumber\": null,\n                    \"email\": \"emailUser12@gmail.com\"\n                }\n            ]\n        }\n    ],\n    \"msg\": \"Solicitudes de tickets\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Tombotakas was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar solicitudes tickets\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Tombotakas"
  },
  {
    "type": "get",
    "url": "/user/LisTypePublication",
    "title": "1 LisTypePublication",
    "name": "LisTypePublication_-_Listar_Categorias_filtrado_por_tipo_de_publicación",
    "group": "TypePublication",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the TypePublication.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the TypePublication.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the TypePublication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"Takastear\",\n            \"description\": \"Publicar Productos\",\n            \"status\":: 1\n        },\n        {\n            \"id\": 2,\n            \"name\": \"ServiTakastear\",\n            \"description\": \"Publicar Servicios\",\n            \"status\":: 1\n        },\n        {\n            \"id\": 3,\n            \"name\": \"SubasTakear\",\n            \"description\": \"Publicar Subastas\",\n            \"status\":: 1\n        }\n    ],\n    \"msg\": \"Lista de Tipo de Publicación\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Categoría\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "TypePublication"
  },
  {
    "type": "post",
    "url": "/user/autenticar",
    "title": "2 autenticar",
    "name": "autenticar_-_Login_User",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebase",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "passworduser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "emailuser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"{\n    \"success\": true,\n    \"status\":: \"200\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwMDU0NDQsImV4cCI6MTYwMTA5MTg0NH0.lzwyWiplFVyIYIc_TVI_vAindzOXTFuuIE7oLdAvo2U\",\n    \"msg\": \"Usuario Autenticado con éxito\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Domiciliary was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Autenticar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/gautenticar",
    "title": "3 gautenticar",
    "name": "gautenticar_-_Login_User",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebase",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "emailuser",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "fullnameUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "imgUser",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "tycUser",
            "description": "<p>optional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDE5MjA0NTcsImV4cCI6MTYwMjAwNjg1N30.GNL6njKiUfPvUSKh4ba7QwokYcs2osMltd0zAJ3dkvU\",\n    \"newUser\": true,\n    \"msg\": \"Usuario Autenticado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Users was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"newUser\": true,\n    \"msg\": \"Debe aceptar terminos y condiciones\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/admin/listusers",
    "title": "8 listusers",
    "name": "listusers_-_Gestionar_Membresías",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "TypeConsulta",
            "description": "<p>Reqired. Sin Filtro = 0, Filtro por Usuario=1, Filtro Membresía=2, Filtro Status User=3, Filtro Membresía y status=4, Filtro por fecha de registro=5, Filtro por fecha de Membresía=6, Filtro por Membresía=7</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "dateRegMem",
            "description": "<p>Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Memberships",
            "description": "<p>Optional. Free=0, Suprime=1</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flagstatusMemberships",
            "description": "<p>Optional. Solicitud en revisión=0, Aprobada=1, Expirada=2, Cancelada=3, Rechazada=4</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flagStatusUser",
            "description": "<p>Optional. Activo=0, Inactivo=1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"idcity\": null,\n            \"tokenpush\": \"d9wYESVb9q8:APA91bGmzQ5ZjRgZwRfd7zTJr_XWsI6NY0NkMsrEV7E05uIZhwEK-S1ktWqsMZCI0EL85iuweAyTYze49xm9fAdIuA-lhPFsmSokW_JiM9Wi-gr_jONk4TiXVXQM0Mt0vqhJKM4FbY8o\",\n            \"email\": \"ronny.sotillet777@gmail.com\",\n            \"memberships\": 2,\n            \"datememberships\": \"2020-11-27T05:01:17.000Z\",\n            \"statusmemberships\": 39,\n            \"phonenumber\": null,\n            \"phonenumber2\": null,\n            \"datebirth\": null,\n            \"country\": null,\n            \"department\": null,\n            \"address\": null,\n            \"fullname\": \"Ana\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firstsurname\": null,\n            \"secondsurname\": null,\n            \"password\": null,\n            \"imgurl\": \"https://scontent.fbog9-1.fna.fbcdn.net/v/t1.0-9/123087363_10224035495334302_417571382738385553_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VGrhqTFkWmwAX-Zxk-R&_nc_ht=scontent.fbog9-1.fna&oh=a65b30d\",\n            \"score\": null,\n            \"online\": null,\n            \"role\": 2,\n            \"status\": null,\n            \"datecreated\": null,\n            \"tyc\": 1\n        },\n        {\n            \"id\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"idcity\": null,\n            \"tokenpush\": null,\n            \"email\": \"rafael@faria.com\",\n            \"memberships\": null,\n            \"datememberships\": null,\n            \"statusmemberships\": null,\n            \"phonenumber\": \"3116623665\",\n            \"phonenumber2\": null,\n            \"datebirth\": null,\n            \"country\": null,\n            \"department\": null,\n            \"address\": null,\n            \"fullname\": \"ronny\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firstsurname\": null,\n            \"secondsurname\": null,\n            \"password\": \"8bc5de83cf1daf79ed5b2f13f93d7c05d01d0388\",\n            \"imgurl\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\",\n            \"score\": null,\n            \"online\": null,\n            \"role\": 2,\n            \"status\": null,\n            \"datecreated\": \"2020-10-24T00:30:13.000Z\",\n            \"tyc\": 1\n        },\n        {\n            \"id\": \"idfirebaseU4534dsaxgg\",\n            \"idcity\": 1,\n            \"tokenpush\": null,\n            \"email\": \"emailUser12@gmail.com\",\n            \"memberships\": null,\n            \"datememberships\": null,\n            \"statusmemberships\": null,\n            \"phonenumber\": null,\n            \"phonenumber2\": null,\n            \"datebirth\": null,\n            \"country\": null,\n            \"department\": null,\n            \"address\": null,\n            \"fullname\": \"gusuario12\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firstsurname\": null,\n            \"secondsurname\": null,\n            \"password\": null,\n            \"imgurl\": null,\n            \"score\": null,\n            \"online\": null,\n            \"role\": 2,\n            \"status\": null,\n            \"datecreated\": null,\n            \"tyc\": 1\n        },\n        {\n            \"id\": \"idfirebaseU4534dsaxgg4\",\n            \"idcity\": null,\n            \"tokenpush\": null,\n            \"email\": \"gusuario124@gmail.com\",\n            \"memberships\": null,\n            \"datememberships\": null,\n            \"statusmemberships\": null,\n            \"phonenumber\": null,\n            \"phonenumber2\": null,\n            \"datebirth\": null,\n            \"country\": null,\n            \"department\": null,\n            \"address\": null,\n            \"fullname\": \"gusuario12\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firstsurname\": null,\n            \"secondsurname\": null,\n            \"password\": null,\n            \"imgurl\": null,\n            \"score\": null,\n            \"online\": null,\n            \"role\": 2,\n            \"status\": null,\n            \"datecreated\": null,\n            \"tyc\": 1\n        }\n    ],\n    \"msg\": \"Lista de usuarios con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Users was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar Listar Usuarios\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/admin/adminroutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/newUser",
    "title": "1 newUser",
    "name": "newUser_-_Registro_De_Usuario",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "imgUser",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "codCity",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "fullnameUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "phonenumberUser",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "emailUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "passwordUser",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "tycUser",
            "description": "<p>required .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "urlimgUser",
            "description": "<p>optional .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDE5MTYzMjUsImV4cCI6MTYwMjAwMjcyNX0.KBsaWobyOo2_NRmrbhFDisMfvvD9oddNFwfK0D6imC0\",\n    \"msg\": \"Usuario Registrado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n            success: false,\n            status: '500',\n            msgerr: 'response.error.sqlMessage',\n            codeerr: 'response.error.code',\n            noerr: 'response.error.errno'\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/perfiluser",
    "title": "7 perfiluser",
    "name": "perfiluser_-_Perfil_de_un_usuario",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"NameUser\": \"Anailys Rodríguez\",\n        \"EmailUser\": \"anailysrodriguez@gmail.com\",\n        \"PhonenumberUser\": \"3174723818\",\n        \"DatecreatedUser\": \"07/09/20\",\n        \"Reputation Vendedor\": 4,\n        \"Reputation Cliente\": 0\n    },\n    \"msg\": \"Perfil de Usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\": \"500\",\n    \"msg\": \"Error al intentar obtener perfil de usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/tokenpush",
    "title": "4 tokenpush",
    "name": "tokenpush_-_Registar_o_Actualizar_TokenPushs",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "tokenpushUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\":: \"200\",\n    \"msg\": \"Token Push Actualizado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Categoría\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updateperfil",
    "title": "6 updateperfil",
    "name": "updateperfil_-_Completar_o_actualizar_perfil_de_usuario_De_Usuario",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "imgUser",
            "description": "<p>unique optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "codCity",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "fullnameUser",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "datebirthUser",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "phonenumberUser",
            "description": "<p>unique optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "emailUser",
            "description": "<p>unique  optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "passwordUser",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "tycUser",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "urlimgUser",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "countryUser",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "departmentUser",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "membershipsUser",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "dirUser",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "versionTYC",
            "description": "<p>optional .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "versionApp",
            "description": "<p>optional .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDE5MTYzMjUsImV4cCI6MTYwMjAwMjcyNX0.KBsaWobyOo2_NRmrbhFDisMfvvD9oddNFwfK0D6imC0\",\n    \"msg\": \"Usuario Registrado con éxito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n            success: false,\n            status: '500',\n            msgerr: 'response.error.sqlMessage',\n            codeerr: 'response.error.code',\n            noerr: 'response.error.errno'\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/userexist",
    "title": "5 userexist",
    "name": "userexist_-_Verficación_si_un_usuario_existe_en_la_DB_del_Backend",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Content-Type:",
          "content": "\"value\": \"application/json\"",
          "type": "varchar"
        },
        {
          "title": "access-token:",
          "content": "{ \"value\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY\"",
          "type": "varchar"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "idfirebaseUser",
            "description": "<p>required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\":: \"200\",\n    \"msg\": \"Token Push Actualizado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar Categoría\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "User"
  }
] });
