<?php
include ('encrypted.php');
define("MAXROWS", 10);
$bShowTable = true;
$animalName = null;

/**
 * Render a Web page's header.
 * @param string $sTitle: Web page title.
 */
function showHeader($sTitle){
 echo' <!DOCTYPE html>';
 echo' <html lang="en-US"><head><title>' . $sTitle . '</title>';
 echo' <meta name="description" content="Score board for the ' . $sTitle . '. Shows the top ten scores."/>';
 echo' <meta http-equiv="content-type" content="text/html; charset=utf-8" />';
 echo' <meta name="viewport" content="width=device-width, initial-scale=1">';
 echo'<style> ';
 echo'main{width:90%; margin:0px auto 0px auto;}';
 echo'table{color:black; table-layout:fixed; width:100%; border-collapse:collapse; background-color:#4ef9ff; }';
 echo'th{text-align:left; font-weight:bold; color:white; background-color:#3b4afd; }';
 echo'td{text-align:left;}';
 echo'tr:nth-child(even){background-color:#4ef9ff;}';
 echo'tr:nth-child(odd) {background-color: #758dff;}';
 echo'td img{width:20%;}';

 echo'@media (max-width: 640px){';
 echo'th,tr,td{font-size:100%;}';
 echo'tr,td{font-weight:normal;}';
 echo'td img{width:20%;} td{word-wrap: break-word;}';
 echo'}';
 echo'@media (orientation: portrait) { ';
 echo'tr{font-size:80%;}';
 echo'}';
 echo'</style>';
 echo '</head>';
 echo' <body>';
 echo '<main>';
 echo'<h1>'. $sTitle .'</h1>';
}

function getPutData(){
 global $animalName;
 global $bShowTable;
 
 $animalName = $_SERVER ['QUERY_STRING'];
 $animalName = urldecode($animalName);
 if ($animalName == null || strlen($animalName) == 0 || empty($animalName) || ctype_space($animalName)){
  echo '<h2>See All Animals in the Table</h2>';
  $bShowTable = true;
 } 
 else{
  //echo "<br >GET animal: " . $animalName;
  $bShowTable = false;
 }
}

/**
 * Render a Web page's footer.
 * @param string $sReturnPath: Apply to hyperlink
 * to return to the original application.
 */
function showFooter(){
 echo'</main>';
 echo '</body></html>';
}

function showTable($result){ 
 global $animalName, $bShowTable;
 if ($bShowTable == true){
  echo'<table><tr><th>Name</th><th>Region</th><th>Population</th><th>Image Link</th></tr>';
 }
 if($result) {
  while($row = mysqli_fetch_array($result)){
    $name = $row['name'];
    $region= $row['region'];
    $pop = $row['population'];
    $imglnk = $row['imglnk'];
    if ($pop == 0){
     $pop = "Unknown";
    }
    echo '<tr><td>' . $name. '</td><td>' . $region.'</td><td>'. $pop . '</td><td>' . $imglnk . '</tr>';
   }
  }
 echo'</table>';
}

function showJSON($result){
 if($result){
  $row = mysqli_fetch_assoc($result);
  //echo $row[0];
  $animalObj->name = (string)$row['name'];
  $animalObj->region = (string)$row['region'];
  $animalObj->image = (string)$row['image'];
  $animalObj->pop = (string)$row['population'];
  $animalJSON = json_encode($animalObj);
  echo $animalJSON;
 }
}
/**
 * Execute a query or exit this program.
 * @param SQL Connection $con
 * @param String $sQuery: SQL Query.
 * @return result of SQL query
 * null's never returned because this function
 * exits the program if the result's null.
 */
function getSQLQuery($con, $sQuery){
 // rows or an error value:
 $rValue = mysqli_query($con,$sQuery);
 if ($rValue == null){
  $sError = mysqli_error($con);
  echo ' error adding or updating: ' . $sError;
  // Exit the program
  // die(..) is an alias for exit(...)
  exit('Error: ' . $sError);
 }
 return $rValue;
}
 
function getSQL($tableName){
 global $hostname,$username,$password,$dbname,$bShowTable,$animalName;
 $con = null;
 $sQuery = null;
 $sqlResult = null;
 
 // Connect to the database or exit:
 $con = mysqli_connect($hostname,$username, $password) OR DIE ('Unable to connect to database! Please try again later.');
 
 // Select our database:
 mysqli_select_db($con,$dbname);
 if($bShowTable == true){
  // echo "show table: " . $bShowTable;
  $sQuery = "SELECT * FROM " . $tableName;
  //Get all the rows from the table.
  $sqlResult =  getSQLQuery($con,$sQuery);  
  showTable($sqlResult);
 }
 else{
  $sQuery = "SELECT * FROM ". $tableName . " WHERE name = '{$animalName}'";
  //echo $sQuery;
  $sqlResult = getSQLQuery($con,$sQuery);
  showJSON($sqlResult);
 }
 mysqli_close($con);
}
?>