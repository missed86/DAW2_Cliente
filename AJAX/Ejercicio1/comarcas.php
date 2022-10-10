<?php
    $c = new Mysqli("localhost","root","","cadiz");
    $c->query("SET NAMES utf8");
    $resultado = $c->query("SELECT * FROM comarca");
    echo json_encode($resultado->fetch_all(MYSQLI_ASSOC));
    $c->close();
?>