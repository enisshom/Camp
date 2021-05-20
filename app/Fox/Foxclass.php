<?php
namespace App\Fox;


Class Foxclass{

    public static  function  fquery($query,array $fields){

      // $db_url=self::db_url;
      $conn = new \COM("ADODB.Connection");
      try {
        $conn->Open("Provider=VFPOLEDB.1;Data Source='e:/photel/parametrage.dbc';"); 
      } 
      catch (\Throwable $th) {
       return 'database not found or link is incorrect '.$th;
      }          
      $rs = $conn->Execute($query) or die("Error in query: $query. " . $conn->ErrorMsg());
      $rooms =[];
      $room =[];
      
      while (!$rs->EOF) {
        for ($i=0; $i <count($fields) ; $i++) { 
          $room[$fields[$i]]=strval(trim($rs[$fields[$i]])) ; 
        }
        $row = array_map('utf8_encode', $room);
        array_push($rooms,$row);
        $room=[];
        $rs->MoveNext();
      }
   
      $conn->Close();
      return ($rooms);
    }
}