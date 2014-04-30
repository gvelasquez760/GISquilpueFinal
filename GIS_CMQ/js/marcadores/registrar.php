<?php
require("../login/dbinfo.php");
session_start();
// Conecta con el servidor MySql
mysql_connect($localhost, $username, $password)or die ('Ha fallado la conexión: '.mysql_error());
mysql_select_db($database)or die ('Error al seleccionar la Base de Datos: '.mysql_error());
mysql_query("SET NAMES 'utf8'");
function formRegistro(){

}
// Verificamos si se han enviado ya las variables necesarias.
if (isset($_POST["name"])) {
	$name 		= $_POST["name"];
	$fono 		= $_POST["fono"];
	$direccion 	= $_POST["direccion"];
	$mail 		= $_POST["mail"];
	$info 		= $_POST["info"];
	$web 		= $_POST["web"];
	$logo 		= $_POST["logo"];
	$lat 		= $_POST["lat"];
	$lng 		= $_POST["lng"];
	$category 	= $_POST["category"];
	
	// Hay campos en blanco
	if($name==NULL|$fono==NULL|$direccion==NULL|$mail==NULL|$info==NULL|$web==NULL|$logo==NULL|$lat==NULL|$lng==NULL|$category==NULL) {
	
echo '<script>
	alert("Campos Incompletos."); 
	history.back()
	</script>';
	
	//	echo "un campo está vacio.";
		
		}else{
			
			$query = 'INSERT INTO markers (name, fono, direccion, mail, info, web, logo, lat, lng, category)
				VALUES (\''.$name.'\',\''.$fono.'\',\''.$direccion.'\',\''.$mail.'\',\''.$info.'\',\''.$web.'\',\''.$logo.'\',\''.$lat.'\',\''.$lng.'\',\''.$category.'\')';
				
				mysql_query($query) or die(mysql_error());
				
				echo '<script>
				alert("Registro Ingresado Correctamente."); 
				window.location.href = document.referrer;
					</script>';
	}
}
?>