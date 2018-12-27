<html>
<head>
<title>Inicio de Sesión</title>
    <link rel="stylesheet" type="text/css" href="src/1/css/style.css">
<body>
    <div class="loginbox">
        <h1>Iniciar sesión</h1>
        <form style="margin-bottom: 0px;" method="POST" action="<?= FOLDER_PATH . '/login/signin' ?>">
            <p>ID Usuario</p>
            <input type="text" name="nombre" placeholder="Ingrese ID Usuario">
            <p>Contraseña</p>
            <input type="password" name="password" placeholder="Ingrese contraseña">
            <?php !empty($error_message) ? print($error_message) : '' ?>
            <input type="submit" name="" value="Entrar">
        </form>    
    </div>
</body>
</head>
</html>