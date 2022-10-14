<?php
    echo "<pre>";
    var_dump($_POST);
    var_dump($_GET);
    var_dump($_REQUEST);
    var_dump($_FILES);
    echo "</pre>";

    //Mover archivo a carpeta

    move_uploaded_file($_FILES['archivo']['tmp_name'], $_FILES['archivo']['name'])
    ?>