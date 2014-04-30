<?php
require("../login/dbinfo.php");

function parseToXML($htmlStr) 
{ 
$xmlStr=str_replace('<','&lt;',$htmlStr); 
$xmlStr=str_replace('>','&gt;',$xmlStr); 
$xmlStr=str_replace('"','&quot;',$xmlStr); 
$xmlStr=str_replace("'",'&#39;',$xmlStr); 
$xmlStr=str_replace("&",'&amp;',$xmlStr); 
return $xmlStr; 
} 

// Conecta con el servidor MySql
$connection=mysql_connect ($localhost, $username, $password);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Selecciona la base de datos
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

//selecciona los registros 
$query = "SELECT * FROM markers WHERE 1";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

//empieza la creacion del xml
echo '<?xml version="1.0" encoding="ISO-8859-1" ?>';
echo '<markers>';

//imprime cada uno de los registros
while ($row = @mysql_fetch_assoc($result)){
  // ADD TO XML DOCUMENT NODE
  echo '<marker ';
  echo 'name="' . parseToXML($row['name']) . '" ';
  echo 'fono="' . parseToXML($row['fono']) . '" ';
  echo 'direccion="' . parseToXML($row['direccion']) . '" ';
  echo 'mail="' . parseToXML($row['mail']) . '" ';
  echo 'info="' . parseToXML($row['info']) . '" ';
  echo 'web="' . parseToXML($row['web']) . '" ';
  echo 'logo="' . parseToXML($row['logo']) . '" ';
  echo 'lat="' . $row['lat'] . '" ';
  echo 'lng="' . $row['lng'] . '" ';
  echo 'category="' . $row['category'] . '" ';
  echo '/>';
}

// End XML file
echo '</markers>';

?>
