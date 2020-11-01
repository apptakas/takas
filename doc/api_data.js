define({ "api": [
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
    "url": "/user/changestatusoffer",
    "title": "3 changestatusoffer",
    "name": "changestatusoffer_-_Cambio_de_estado_de_una_oferta",
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "FlagStatus",
            "description": "<p>required. CANCELAR = 0, ACTIVO = 1, TAKASTEADO = 2</p>"
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
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"takasteo\": true,\n    \"msg\": \"Cambio de estatus de la sala de chat ejecutdos exitosamente\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idSala\": \"949bdc81078b49cd604b6622ddd762054ca8963a\",\n            \"datecreated\": \"28/10/2020\",\n            \"idPublicacion\": 1,\n            \"namePublication\": \"Estufa de 4 hornillas\",\n            \"valorComercial\": 200000,\n            \"Userpublication\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nameUserPublication\": \"Ana\",\n            \"imgUserPublication\": \"https://scontent.fbog9-1.fna.fbcdn.net/v/t1.0-9/123087363_10224035495334302_417571382738385553_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VGrhqTFkWmwAX-Zxk-R&_nc_ht=scontent.fbog9-1.fna&oh=a65b30d\",\n            \"idoferta\": 7,\n            \"UserOferta\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"nameUserOferta\": \"ronny\",\n            \"imgUserOferta\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\",\n            \"ProductImagesPublicacion\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c\"\n            ],\n            \"PreferencesPublicacion\": [\n                1,\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de salas de chat según status\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n     {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idSala\": \"949bdc81078b49cd604b6622ddd762054ca8963a\",\n            \"datecreated\": \"28/10/2020\",\n            \"idPublicacion\": 1,\n            \"namePublication\": \"Estufa de 4 hornillas\",\n            \"valorComercial\": 200000,\n            \"Userpublication\": \"8e7PQpRV7ic4jcCuaMm5DDIIOOv2\",\n            \"nameUserPublication\": \"Ana\",\n            \"imgUserPublication\": \"https://scontent.fbog9-1.fna.fbcdn.net/v/t1.0-9/123087363_10224035495334302_417571382738385553_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VGrhqTFkWmwAX-Zxk-R&_nc_ht=scontent.fbog9-1.fna&oh=a65b30d\",\n            \"idoferta\": 7,\n            \"UserOferta\": \"EVln0Vj6DNOtTXQVS2fN9P68Gl13\",\n            \"nameUserOferta\": \"ronny\",\n            \"imgUserOferta\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499\",\n            \"ProductImagesPublicacion\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c\"\n            ],\n            \"PreferencesPublicacion\": [\n                1,\n                2\n            ],\n            \"ItemOfer\": {\n                \"itemsoffer\": [\n                    {\n                        \"idpublication\": 5,\n                        \"nameproduct\": \"Camisas de Among Us\",\n                        \"status\": 1,\n                        \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                        \"marketvalue\": \"50000.0000\"\n                    },\n                    {\n                        \"idpublication\": 5,\n                        \"nameproduct\": \"Camisas de Among Us\",\n                        \"status\": 1,\n                        \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\",\n                        \"marketvalue\": \"50000.0000\"\n                    },\n                    {\n                        \"idpublication\": 6,\n                        \"nameproduct\": \"Plancha para el pelo\",\n                        \"status\": 1,\n                        \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\",\n                        \"marketvalue\": \"80000.0000\"\n                    }\n                ]\n            }\n        }\n    ],\n    \"msg\": \"Data completa de la sala de chat\"\n}",
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
            "field": "flagNotifications",
            "description": "<p>Optional 1=Sin leer y 2 = Leida.</p>"
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"idoffer\": 7,\n        \"idproduct\": 1,\n        \"nameoffer\": \"Ana\",\n        \"observation\": \"-\",\n        \"valorpublication\": \"200000.0000\",\n        \"sumitemsoffer\": \"130000.0000\",\n        \"differenceoffer\": \"70000.0000\",\n        \"infavor\": true,\n        \"itemsoffer\": [\n            {\n                \"idpublication\": 5,\n                \"status\": 1,\n                \"marketvalue\": \"50000.0000\"\n            },\n            {\n                \"idpublication\": 6,\n                \"status\": 1,\n                \"marketvalue\": \"80000.0000\"\n            }\n        ]\n    },\n    \"msg\": \"Detalles de la oferta listado exitosamente\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idoffer\": 7,\n            \"idproduct\": 1,\n            \"namepublication\": \"Estufa de 4 hornillas\",\n            \"img\": [\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722\",\n                \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c\"\n            ],\n            \"observation\": \"-\",\n            \"valorpublication\": \"200000.0000\",\n            \"sumitemsoffer\": \"180000.0000\",\n            \"differenceoffer\": \"20000.0000\",\n            \"infavor\": true,\n            \"itemsoffer\": [\n                {\n                    \"idpublication\": 5,\n                    \"imgpublicacion\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                    \"nameproduct\": \"Camisas de Among Us\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                    \"marketvalue\": \"50000.0000\"\n                },\n                {\n                    \"idpublication\": 5,\n                    \"imgpublicacion\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\",\n                    \"nameproduct\": \"Camisas de Among Us\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\",\n                    \"marketvalue\": \"50000.0000\"\n                },\n                {\n                    \"idpublication\": 6,\n                    \"imgpublicacion\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\",\n                    \"nameproduct\": \"Plancha para el pelo\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\",\n                    \"marketvalue\": \"80000.0000\"\n                }\n            ]\n        }\n    ],\n    \"msg\": \"Lista de mis Ofertas exitosamente\"\n}",
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
    "title": "2listoffer",
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
          "content": "    HTTP/1.1 200 OK\n        {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"idoffer\": 7,\n            \"idproduct\": 1,\n            \"namepublication\": \"Estufa de 4 hornillas\",\n            \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722\",\n            \"observation\": \"-\",\n            \"valorpublication\": \"200000.0000\",\n            \"sumitemsoffer\": \"180000.0000\",\n            \"differenceoffer\": \"20000.0000\",\n            \"infavor\": true,\n            \"itemsoffer\": [\n                {\n                    \"idpublication\": 5,\n                    \"nameproduct\": \"Camisas de Among Us\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                    \"marketvalue\": \"50000.0000\"\n                },\n                {\n                    \"idpublication\": 5,\n                    \"nameproduct\": \"Camisas de Among Us\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\",\n                    \"marketvalue\": \"50000.0000\"\n                },\n                {\n                    \"idpublication\": 6,\n                    \"nameproduct\": \"Plancha para el pelo\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\",\n                    \"marketvalue\": \"80000.0000\"\n                }\n            ]\n        },\n        {\n            \"idoffer\": 7,\n            \"idproduct\": 1,\n            \"namepublication\": \"Estufa de 4 hornillas\",\n            \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c\",\n            \"observation\": \"-\",\n            \"valorpublication\": \"200000.0000\",\n            \"sumitemsoffer\": \"180000.0000\",\n            \"differenceoffer\": \"20000.0000\",\n            \"infavor\": true,\n            \"itemsoffer\": [\n                {\n                    \"idpublication\": 5,\n                    \"nameproduct\": \"Camisas de Among Us\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc\",\n                    \"marketvalue\": \"50000.0000\"\n                },\n                {\n                    \"idpublication\": 5,\n                    \"nameproduct\": \"Camisas de Among Us\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1\",\n                    \"marketvalue\": \"50000.0000\"\n                },\n                {\n                    \"idpublication\": 6,\n                    \"nameproduct\": \"Plancha para el pelo\",\n                    \"status\": 1,\n                    \"img\": \"https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d\",\n                    \"marketvalue\": \"80000.0000\"\n                }\n            ]\n        }\n    ],\n    \"msg\": \"Listar Ofertas exitosamente\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Oferta creada exitosamente\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": {\n        \"CantNoti\": 11\n    },\n    \"msg\": \"Cantidad de notificaciones según bandera obtenida con éxito\"\n}",
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
    "type": "get",
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
            "description": "<p>requeride  1=Nuevo o Usado 2=Tamaño 3=Peso.</p>"
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 19,\n            \"namestatus\": \"Muy liviano (0-1kg)\",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        },\n        {\n            \"id\": 20,\n            \"namestatus\": \"Liviano (1-3kg)\",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        },\n        {\n            \"id\": 21,\n            \"namestatus\": \"Normal (3 a 7kg)\",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        },\n        {\n            \"id\": 22,\n            \"namestatus\": \"Pesado (7-15kg)\",\n            \"filter\": 6,\n            \"namefilter\": \"Peso Producto\"\n        }\n    ],\n    \"msg\": \"Lista de Características para una publicación sengún bandera\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"Ropa de bebes\",\n            \"icon\": \"\",\n            \"category\": 1,\n            \"status\":: 1,\n            \"typepublication\": 1\n        },\n        {\n            \"id\": 2,\n            \"name\": \"Accesorios para Vehículos\",\n            \"icon\": \"wheel\",\n            \"category\": 4,\n            \"status\":: 1,\n            \"typepublication\": 1\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Vehículos\",\n            \"icon\": \"car\",\n            \"category\": 4,\n            \"status\":: 1,\n            \"typepublication\": 1\n        },\n        {\n            \"id\": 4,\n            \"name\": \"Alimentos y Bebidas\",\n            \"icon\": \"eat\",\n            \"category\": 4,\n            \"status\":: 1,\n            \"typepublication\": 1\n        }\n    ],\n    \"msg\": \"Lista de Subcategorías\"\n}",
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
            "description": "<p>required.</p>"
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
