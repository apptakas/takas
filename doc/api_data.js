define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/doc/main.js",
    "group": "C:\\Users\\User\\Documents\\Projects\\apimk\\src\\doc\\main.js",
    "groupTitle": "C:\\Users\\User\\Documents\\Projects\\apimk\\src\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/delivery/Domiciliary",
    "title": "Domiciliary",
    "name": "Domiciliary_-_Obtener_la_información_de_un_domiciliario",
    "group": "Domiciliary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>idfirebase firebase unique ID.</p>"
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
            "description": "<p>of the Domiciliary.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Domiciliary.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Domiciliary.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"List domiciliary\",\n    \"data\": [\n        {\n            \"iduser\": \"hb4rw3434532474bbsdf\",\n            \"push\": null,\n            \"fullname\": \"prueba inster13\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firssurname\": null,\n            \"secondsurname\": null,\n            \"gender\": null,\n            \"typeidentify\": null,\n            \"indentify\": null,\n            \"role\": 3,\n            \"country\": 1,\n            \"phonenumber\": \"77777\",\n            \"phonenumber2\": null,\n            \"email\": \"pruebainsert13@gmail.com\",\n            \"password\": null,\n            \"address\": null,\n            \"urlimg\": null,\n            \"lengthaddress\": null,\n            \"latitudeaddress\": null,\n            \"membership\": 1,\n            \"status\": 1\n        }\n    ]\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n            success: false,\n            status: '500',\n            msgerr: resp.error.sqlMessage,\n            codeerr: resp.error.code,\n            noerr: resp.error.errno\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/delivery/usersroutes.js",
    "groupTitle": "Domiciliary"
  },
  {
    "type": "post",
    "url": "/delivery/createrDomiciliary",
    "title": "createrDomiciliary",
    "name": "createrDomiciliary_-_Registrar_Domiciliario",
    "group": "Domiciliary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>idfirebase firebase unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "fullname",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "push",
            "description": "<p>unique .</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n            success: true,\n            status: '200',\n            msg: 'Usurio registrado con éxito'\n    }",
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
    "filename": "src/routes/delivery/usersroutes.js",
    "groupTitle": "Domiciliary"
  },
  {
    "type": "get",
    "url": "/delivery/listDomiciliary",
    "title": "listDomiciliary",
    "name": "listDomiciliary_-_Obtener_la_lista_de_domiciliarios",
    "group": "Domiciliary",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Domiciliary.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Domiciliary.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Domiciliary.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"List domiciliary\",\n    \"data\": [\n        {\n            \"iduser\": \"hb4rw3434532474bbsdf\",\n            \"push\": null,\n            \"fullname\": \"prueba inster13\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firssurname\": null,\n            \"secondsurname\": null,\n            \"gender\": null,\n            \"typeidentify\": null,\n            \"indentify\": null,\n            \"role\": 3,\n            \"country\": 1,\n            \"phonenumber\": \"77777\",\n            \"phonenumber2\": null,\n            \"email\": \"pruebainsert13@gmail.com\",\n            \"password\": null,\n            \"address\": null,\n            \"urlimg\": null,\n            \"lengthaddress\": null,\n            \"latitudeaddress\": null,\n            \"membership\": 1,\n            \"status\": 1\n        }\n    ]\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n            success: false,\n            status: '500',\n            msgerr: resp.error.sqlMessage,\n            codeerr: resp.error.code,\n            noerr: resp.error.errno\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/delivery/usersroutes.js",
    "groupTitle": "Domiciliary"
  },
  {
    "type": "post",
    "url": "/delivery/createrDomiciliary",
    "title": "newDomiciliary",
    "name": "newDomiciliary_-_Registrar_Domiciliario",
    "group": "Domiciliary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>idfirebase firebase unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "fullname",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "push",
            "description": "<p>unique .</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "gender",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "typeidentify",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "indentify",
            "description": "<p>unique optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "country",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "phonenumber2",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "address",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lengthaddress",
            "description": "<p>optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "latitudeaddress",
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
          "content": "HTTP/1.1 200 OK\n{\n            success: true,\n            status: '200',\n            msg: 'Usurio registrado con éxito'\n    }",
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
    "filename": "src/routes/delivery/usersroutes.js",
    "groupTitle": "Domiciliary"
  },
  {
    "type": "post",
    "url": "/delivery/Merchant",
    "title": "Merchant",
    "name": "Merchant_-_Obtener_la_información_de_un_comerciante",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>idfirebase firebase unique ID.</p>"
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
            "description": "<p>of the Domiciliary.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Domiciliary.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Domiciliary.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"List Merchant\",\n    \"data\": [\n        {\n            \"iduser\": \"hb4rw3434532474bbsdf\",\n            \"push\": null,\n            \"fullname\": \"prueba inster13\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firssurname\": null,\n            \"secondsurname\": null,\n            \"gender\": null,\n            \"typeidentify\": null,\n            \"indentify\": null,\n            \"role\": 3,\n            \"country\": 1,\n            \"phonenumber\": \"77777\",\n            \"phonenumber2\": null,\n            \"email\": \"pruebainsert13@gmail.com\",\n            \"password\": null,\n            \"address\": null,\n            \"urlimg\": null,\n            \"lengthaddress\": null,\n            \"latitudeaddress\": null,\n            \"membership\": 1,\n            \"status\": 1\n        }\n    ]\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n            success: false,\n            status: '500',\n            msgerr: resp.error.sqlMessage,\n            codeerr: resp.error.code,\n            noerr: resp.error.errno\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/listMerchants",
    "title": "listMerchants",
    "name": "listMerchants_-_Obtener_la_lista_de_comercianntes",
    "group": "Merchant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"List Merchants\",\n    \"data\": [\n        {\n            \"iduser\": \"hb4rw3434532474bbsdf\",\n            \"push\": null,\n            \"fullname\": \"prueba inster13\",\n            \"firstname\": null,\n            \"secondname\": null,\n            \"firssurname\": null,\n            \"secondsurname\": null,\n            \"gender\": null,\n            \"typeidentify\": null,\n            \"indentify\": null,\n            \"role\": 3,\n            \"country\": 1,\n            \"phonenumber\": \"77777\",\n            \"phonenumber2\": null,\n            \"email\": \"pruebainsert13@gmail.com\",\n            \"password\": null,\n            \"address\": null,\n            \"urlimg\": null,\n            \"lengthaddress\": null,\n            \"latitudeaddress\": null,\n            \"membership\": 1,\n            \"status\": 1\n        }\n    ]\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n            success: false,\n            status: '500',\n            msgerr: resp.error.sqlMessage,\n            codeerr: resp.error.code,\n            noerr: resp.error.errno\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/listServicesDeliveryAceptado",
    "title": "listServicesDeliveryAceptado",
    "name": "listServicesDeliveryAceptado_-_listar_Servios_de_delivery_filtrado_por_Status",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "idmerchant",
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
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"listDeliveryServices\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"merchant\": \"tyfjvdjas786639423g4ugbdhds7\",\n            \"domiciliary\": null,\n            \"details\": \"esto es una prueba de registro\",\n            \"point_a\": \"Kr 81 b #73c-16\",\n            \"point_b\": \"Kr 89 b #73c-16\",\n            \"point_c\": null,\n            \"point_d\": null,\n            \"daterequest\": \"2020-09-20T06:18:43.000Z\",\n            \"datereception\": null,\n            \"dateapprobation\": null,\n            \"dateannulment\": null,\n            \"annulment\": null,\n            \"detailsannulment\": null,\n            \"dateending\": null,\n            \"priceservice\": null,\n            \"paymenttype\": null,\n            \"amountpa\": null,\n            \"amountpb\": null,\n            \"amountpc\": null,\n            \"amountpd\": null,\n            \"amountptotal\": null,\n            \"statusgeneral\": 3,\n            \"statuspa\": null,\n            \"statuspb\": null,\n            \"statuspc\": null,\n            \"statuspd\": null,\n            \"scoreservice\": null\n        }\n    ]\n}",
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
            "description": "<p>The id of the Merchant was not found.</p>"
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/listServicesDeliveryCancelados",
    "title": "listServicesDeliveryCancelados",
    "name": "listServicesDeliveryCancelados_-_listar_Servios_de_delivery_filtrado_por_Status",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "idmerchant",
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
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"listDeliveryServices\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"merchant\": \"tyfjvdjas786639423g4ugbdhds7\",\n            \"domiciliary\": null,\n            \"details\": \"esto es una prueba de registro\",\n            \"point_a\": \"Kr 81 b #73c-16\",\n            \"point_b\": \"Kr 89 b #73c-16\",\n            \"point_c\": null,\n            \"point_d\": null,\n            \"daterequest\": \"2020-09-20T06:18:43.000Z\",\n            \"datereception\": null,\n            \"dateapprobation\": null,\n            \"dateannulment\": null,\n            \"annulment\": null,\n            \"detailsannulment\": null,\n            \"dateending\": null,\n            \"priceservice\": null,\n            \"paymenttype\": null,\n            \"amountpa\": null,\n            \"amountpb\": null,\n            \"amountpc\": null,\n            \"amountpd\": null,\n            \"amountptotal\": null,\n            \"statusgeneral\": 3,\n            \"statuspa\": null,\n            \"statuspb\": null,\n            \"statuspc\": null,\n            \"statuspd\": null,\n            \"scoreservice\": null\n        }\n    ]\n}",
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
            "description": "<p>The id of the Merchant was not found.</p>"
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/listServicesDeliveryEfectivos",
    "title": "listServicesDeliveryEfectivos",
    "name": "listServicesDeliveryEfectivos_-_listar_Servios_de_delivery_filtrado_por_Status",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "idmerchant",
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
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"listDeliveryServices\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"merchant\": \"tyfjvdjas786639423g4ugbdhds7\",\n            \"domiciliary\": null,\n            \"details\": \"esto es una prueba de registro\",\n            \"point_a\": \"Kr 81 b #73c-16\",\n            \"point_b\": \"Kr 89 b #73c-16\",\n            \"point_c\": null,\n            \"point_d\": null,\n            \"daterequest\": \"2020-09-20T06:18:43.000Z\",\n            \"datereception\": null,\n            \"dateapprobation\": null,\n            \"dateannulment\": null,\n            \"annulment\": null,\n            \"detailsannulment\": null,\n            \"dateending\": null,\n            \"priceservice\": null,\n            \"paymenttype\": null,\n            \"amountpa\": null,\n            \"amountpb\": null,\n            \"amountpc\": null,\n            \"amountpd\": null,\n            \"amountptotal\": null,\n            \"statusgeneral\": 3,\n            \"statuspa\": null,\n            \"statuspb\": null,\n            \"statuspc\": null,\n            \"statuspd\": null,\n            \"scoreservice\": null\n        }\n    ]\n}",
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
            "description": "<p>The id of the Merchant was not found.</p>"
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/listServicesDeliveryEspera",
    "title": "listServicesDeliveryEspera",
    "name": "listServicesDeliveryEspera_-_listar_Servios_de_delivery_filtrado_por_comerciante_y_estado_general",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "idmerchant",
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
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"listDeliveryServices\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"merchant\": \"tyfjvdjas786639423g4ugbdhds7\",\n            \"domiciliary\": null,\n            \"details\": \"esto es una prueba de registro\",\n            \"point_a\": \"Kr 81 b #73c-16\",\n            \"point_b\": \"Kr 89 b #73c-16\",\n            \"point_c\": null,\n            \"point_d\": null,\n            \"daterequest\": \"2020-09-20T06:18:43.000Z\",\n            \"datereception\": null,\n            \"dateapprobation\": null,\n            \"dateannulment\": null,\n            \"annulment\": null,\n            \"detailsannulment\": null,\n            \"dateending\": null,\n            \"priceservice\": null,\n            \"paymenttype\": null,\n            \"amountpa\": null,\n            \"amountpb\": null,\n            \"amountpc\": null,\n            \"amountpd\": null,\n            \"amountptotal\": null,\n            \"statusgeneral\": 3,\n            \"statuspa\": null,\n            \"statuspb\": null,\n            \"statuspc\": null,\n            \"statuspd\": null,\n            \"scoreservice\": null\n        }\n    ]\n}",
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
            "description": "<p>The id of the Merchant was not found.</p>"
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/listServicesDeliveryProceso",
    "title": "listServicesDeliveryProceso",
    "name": "listServicesDeliveryProceso_-_listar_Servios_de_delivery_filtrado_por_Status",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "idmerchant",
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
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"listDeliveryServices\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"merchant\": \"tyfjvdjas786639423g4ugbdhds7\",\n            \"domiciliary\": null,\n            \"details\": \"esto es una prueba de registro\",\n            \"point_a\": \"Kr 81 b #73c-16\",\n            \"point_b\": \"Kr 89 b #73c-16\",\n            \"point_c\": null,\n            \"point_d\": null,\n            \"daterequest\": \"2020-09-20T06:18:43.000Z\",\n            \"datereception\": null,\n            \"dateapprobation\": null,\n            \"dateannulment\": null,\n            \"annulment\": null,\n            \"detailsannulment\": null,\n            \"dateending\": null,\n            \"priceservice\": null,\n            \"paymenttype\": null,\n            \"amountpa\": null,\n            \"amountpb\": null,\n            \"amountpc\": null,\n            \"amountpd\": null,\n            \"amountptotal\": null,\n            \"statusgeneral\": 3,\n            \"statuspa\": null,\n            \"statuspb\": null,\n            \"statuspc\": null,\n            \"statuspd\": null,\n            \"scoreservice\": null\n        }\n    ]\n}",
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
            "description": "<p>The id of the Merchant was not found.</p>"
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/listServicesDeliveryStatus",
    "title": "listServicesDeliveryStatus",
    "name": "listServicesDeliveryStatus_-_listar_Servios_de_delivery_filtrado_por_Status",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "statusgeneral",
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
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"listDeliveryServicesStatusgen\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"merchant\": \"tyfjvdjas786639423g4ugbdhds7\",\n            \"domiciliary\": null,\n            \"details\": \"esto es una prueba de registro\",\n            \"point_a\": \"Kr 81 b #73c-16\",\n            \"point_b\": \"Kr 89 b #73c-16\",\n            \"point_c\": null,\n            \"point_d\": null,\n            \"daterequest\": \"2020-09-20T06:18:43.000Z\",\n            \"datereception\": null,\n            \"dateapprobation\": null,\n            \"dateannulment\": null,\n            \"annulment\": null,\n            \"detailsannulment\": null,\n            \"dateending\": null,\n            \"priceservice\": null,\n            \"paymenttype\": null,\n            \"amountpa\": null,\n            \"amountpb\": null,\n            \"amountpc\": null,\n            \"amountpd\": null,\n            \"amountptotal\": null,\n            \"statusgeneral\": 3,\n            \"statuspa\": null,\n            \"statuspb\": null,\n            \"statuspc\": null,\n            \"statuspd\": null,\n            \"scoreservice\": null\n        }\n    ]\n}",
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
            "description": "<p>The id of the Merchant was not found.</p>"
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "post",
    "url": "/delivery/newMerchant",
    "title": "newMerchant",
    "name": "newMerchant_-_Registrar_Domiciliario",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>idfirebase firebase unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "fullname",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>unique required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "push",
            "description": "<p>unique .</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n            success: true,\n            status: '200',\n            msg: 'Usurio registrado con éxito'\n    }",
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  },
  {
    "type": "get",
    "url": "/delivery/newServicesDelivery",
    "title": "newServicesDelivery",
    "name": "newServicesDelivery_-_Registro_de_Solicitud_de_Servio_de_delivery",
    "group": "Merchant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "idmerchantDS",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "detailsDS",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "point_aDS",
            "description": "<p>required.</p>"
          },
          {
            "group": "Parameter",
            "type": "varchart",
            "optional": false,
            "field": "point_bDS",
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
            "description": "<p>of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200 of the Merchant.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>of the Merchant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"success\": true,\n    \"status\": \"200\",\n    \"msg\": \"Servicio de Delivery solicitado con éxito\"\n}",
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
            "description": "<p>The id of the Merchant was not found.</p>"
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
    "filename": "src/routes/merchant/usersroutes.js",
    "groupTitle": "Merchant"
  }
] });
