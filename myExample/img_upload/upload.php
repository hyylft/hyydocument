<?php  
    $name = $_FILES['FileData']['name'];  
    $type = $_FILES['FileData']['type'];  
    $size = $_FILES['FileData']['size'];  
      
    $return = array (  
        "name" => $name,  
        "type" => $type,  
        "size" => $size,  
        "status" => 1  
    );  
      
    $return = json_encode($return);  
     
    echo $return;  
?>  