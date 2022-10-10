<?php
    $comarca = $_GET['comarca'];
    $c = new Mysqli("localhost","root","","cadiz");
    $c->query("SET NAMES utf8");
    $resultado = $c->query("SELECT * FROM municipio WHERE comarca_id = $comarca");
    echo json_encode($resultado->fetch_all(MYSQLI_ASSOC));
?>