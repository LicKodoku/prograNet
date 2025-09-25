

/*  REGISTROS   */
$name="Oscar";
$lastname="Oviedo";
$height=1.80;

const newregistro = "INSERT INTO `atleta`(`nombres`, `apellidos`, `altura`) VALUES ('"+$name+"','"+$lastname+"',"+$height+");";

conexion.query(newregistro,function(error,lista){
    if(error){
        throw error;
        conexion.end();
    }else{
        document.writeln("Datos insertados correctamente");
    }
});

/* CONSULTAS */
const atl="SELECT * FROM ATLETA";

conexion.query(atl,function(error,lista){
    if(error){
        throw error;
        conexion.end();

    }else{
        document.writeln(lista);
    }
});