define({ "api": [
  {
    "type": "get",
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
    "type": "get",
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
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 7,\n            \"datecreated\": \"05/10/2020 13:25:07\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"nombre\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"subcategory\": 1,\n            \"typepublication\": 1,\n            \"estado\": 1\n        }\n    ],\n    \"images\": [\n        {\n            \"url\": \"https://n9.cl/fy8l\"\n        },\n        {\n            \"url\": \"https://n9.cl/2vy3\"\n        },\n        {\n            \"url\": \"https://n9.cl/xr43h\"\n        },\n        {\n            \"url\": \"https://n9.cl/9n16\"\n        },\n        {\n            \"url\": \"https://n9.cl/rbsa\"\n        },\n        {\n            \"url\": \"https://vsdrgdgfg\"\n        }\n    ],\n    \"msg\": \"Listar detalles de un producto\"\n}",
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
          "content": "    HTTP/1.1 404 Not Found\n    {\n    \"success\": false,\n    \"status\":: \"500\",\n    \"msg\": \"Error al Listar detalles del producto\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user/usersroutes.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\":: \"200\",\n    \"data\": [\n        {\n            \"idproduct\": 1,\n            \"datecreated\": \"05/10/2020 13:46:27\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"name\": \"Mameluco para bebé\",\n            \"details\": \"Producto disponible de 0 a 24 meses\",\n            \"typemoney\": 2,\n            \"marketvalue\": 30000,\n            \"subcategory\": 1,\n            \"typepublication\": 1,\n            \"status\":: 1,\n            \"url\": \"https://n9.cl/vt0n\",\n            \"Preferences\": [\n                1,\n                2\n            ]\n        },\n        {\n            \"idproduct\": 5,\n            \"datecreated\": \"06/10/2020 13:24:41\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"subcategory\": 1,\n            \"typepublication\": 1,\n            \"status\":: 1,\n            \"url\": \"https://n9.cl/fy8l\",\n            \"Preferences\": [\n                1,\n                2\n            ]\n        },\n        {\n            \"idproduct\": 6,\n            \"datecreated\": \"06/10/2020 13:24:45\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"subcategory\": 1,\n            \"typepublication\": 1,\n            \"status\":: 1,\n            \"url\": \"https://n9.cl/fy8l\",\n            \"Preferences\": [\n                1,\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de mis productos\"\n}",
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
    "type": "get",
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
          "content": "    HTTP/1.1 200 OK\n            {\n            \"id\": 72,\n            \"idproduct\": \"18\",\n            \"datecreated\": \"06/09/2021 18:06:43\",\n            \"iduser\": \"idfirebaseU4534dsaxgg\",\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos 2\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"subcategory\": 1,\n            \"typepublication\": 1,\n            \"status\":: 1,\n            \"url\": \"https://n9.cl/rbsa\",\n            \"Preferences\": [\n                1,\n                2\n            ]\n        }\n    ],\n    \"msg\": \"Lista de productos\"\n}",
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
    "type": "get",
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
          "content": "    HTTP/1.1 200 OK\n            {\n    \"success\": true,\n    \"status\": \"200\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"idproduct\": \"1\",\n            \"datecreated\": \"05/10/2020 13:46:27\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"name\": \"Mameluco para bebé\",\n            \"details\": \"Producto disponible de 0 a 24 meses\",\n            \"typemoney\": 2,\n            \"marketvalue\": 30000,\n            \"subcategory\": 1,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"url\": \"https://n9.cl/vt0n\"\n        },\n        {\n            \"id\": 3,\n            \"idproduct\": \"5\",\n            \"datecreated\": \"06/10/2020 13:24:41\",\n            \"iduser\": \"idfirebaseUsers77wqedsaxgg\",\n            \"name\": \"Gorros para bebés\",\n            \"details\": \"Gorros termicos y confortables\",\n            \"typemoney\": 1,\n            \"marketvalue\": 10000,\n            \"subcategory\": 1,\n            \"typepublication\": 1,\n            \"status\": 1,\n            \"url\": \"https://n9.cl/fy8l\"\n        }\n    ],\n    \"msg\": \"Lista de productos filtrados por subcategorías\"\n}",
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
    "type": "get",
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
