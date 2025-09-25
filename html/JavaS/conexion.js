let mysql = require("mysql");
let conexion = mysql.createConnection({
    host: "bbhzotlgze1aermiav5b-mysql.services.clever-cloud.com",
    database: "bbhzotlgze1aermiav5b",
    user: "u2zailnc0dahb90g",
    password: "tQ2HMrmg06Y0H9Fjy8ve"
});
/*
var conexion = mysql.createConnection({
    host:"b6jjaxkzutbd4pfc90tk-mysql.services.clever-cloud.com",
    database: "b6jjaxkzutbd4pfc90tk",
    user :"umhzlutvyfqoy8sc",
    password:"zUeSAODHJJiKFEYhgPif",
    port: 3306
});
*/
conexion.connect(function(error){
    if(error){
        throw error;
        conexion.end();
    }else{

        console.log("conexion exitosa");
        conexion.end();
    }
});
/*
/*  REGISTROS   */
function insertar($num_cuenta,$name,$lastname,$calif){

const newregistro = "INSERT INTO `alumnos`(`num_cuenta`,`nombre`, `apellidos`, `calificacion`) VALUES ('"+$num_cuenta+"','"+$name+"','"+$lastname+"',"+$calif+");";

conexion.query(newregistro,function(error,lista){
    if(error){
        throw error;
        conexion.end();
    }else{
        window.alert("Insert completado");
        console.log("Datos insertados correctamente");
    }
});
}

/*ACTUALIZACIONES*/ 
function update($space,$name){

const upRegistro = "UPDATE `alumnos` SET `num_cuenta`='00003' WHERE `"+$space+"`='"+$name+"'";

conexion.query(upRegistro,function(error,lista){
    if(error){
        throw error;
        conexion.end();
    }else{
        console.log("Datos actualizados correctamente");
        window.alert("Actualizacion completada");
    }
});
}

/*ELIMINAR*/
function eliminar($space,$name){

const deleteRegistro = "DELETE FROM `alumnos` WHERE `"+$space+"`='"+$name+"'";

conexion.query(deleteRegistro,function(error,lista){
    if(error){
        throw error;
        conexion.end();
    }else{
        window.alert("Borrado completado");
        console.log("Registro eliminado correctamente");
    }
});
}

/*CONSULTAS */
function consultar(){
    const atl="SELECT * FROM alumnos ORDER BY num_cuenta ASC";

    conexion.query(atl,function(error,lista){
        if(error){
            throw error;
            conexion.end();
    
        }else{
            console.log(lista);
        }
    });
}


//insertar('','','','');
//update(``,'');
//eliminar(``,'');
consultar();