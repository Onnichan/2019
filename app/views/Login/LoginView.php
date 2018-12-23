<!DOCTYPE html>
<html lang="es-ES">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Login</title>

    <script src="resources/bootstrapjs/jquery-2.1.4.js" type="text/javascript"></script>
    <link href="resources/bootstrap/bootstrap.min.css" rel="stylesheet" />
    <link href="resources/bootstrap/bootstrap-theme.css" rel="stylesheet" />
    <link href="resources/fonts/OleoScript-Regular.ttf" rel="stylesheet" />
</head>

<style>
    @font-face{
font-family:Fuente;
src:url(resources/fonts/OleoScript-Regular.ttf);
}
    body{
        background-image: url('img/Azul-Tacna.png');
        background-size:cover;
        background-repeat: no-repeat;
        background-attachment:fixed;
    }
    .formulario{
        transition: 2s;
        margin-top: 45px;
        width: 30%;
        box-shadow: 0px 0px 50px blue,0px 0px 100px white;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.48);
    }

    /*.formulario:hover{
        transition: .8s;
        background-color: rgba(0,0,0,.5);
    }*/


    .logo{
        height: 100px;
        margin-top: 50px;
        
    }
    
     .espaciado{
        margin-top: 40px;
    }

    fieldset{
        transition: 2s;
        margin-bottom: 50px;
        border-color: rgb(7, 17, 255);
        border-style: groove;
        border-width: 5px;
        border-radius: 20px;
    }

    h3,h4{
        
        color:black;
        text-align: center;
        font-family: Fuente;
    }
  
    .Input{
        transition: .8s;
        background-color: rgba(0, 0, 0, 0.72);
        color: white;
        border-color:#006;
        border-bottom-color:white;
        border-bottom-style:groove;
        border-left:none;
        border-right:none;
        border-top:none;
        border-width: 4px;
        
    }

    .Input:hover{
        transition: .8s;
        background-color:rgba(55,71,79 ,.5);
        box-shadow:inset;
        border-bottom-color:red;
  }
    
    .Input:focus{
        transition: .8s;
        border-bottom-color:red;
    }
    
    legend{
        border: none;
    }

    @media screen and (max-width:750px) {
        
        .logo{
            height: 100px;

        }
        .formulario{
            transition: 2s;
            width: 95%;
            margin-top: 10px;
        }
    }
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<body>
    <div>

        <div class="container formulario">
            <div class="row">
                <div class="col-xs-4 col-xs-offset-4">
                    <img src="img/Logo-Esis.png" class="logo center-block">
                </div>

            </div>

            <div class="espaciado">

            </div>

            <div class="row">

                <fieldset class="col-xs-10 col-xs-offset-1">

                    <!--<legend class="hidden-xs">
                        <h3>Inicio de sesión</h3>
                    </legend> -->

                    <h3>INICIO DE SESIÓN</h3>

                    <form role="form" class="form-horizontal" method="POST" action="<?= FOLDER_PATH . '/login/signin' ?>">

                        <div class="form-group">
                            <label class="col-xs-12" for="usuario">
                                <h4>Usuario</h4>
                            </label>
                            <div class="col-xs-10 col-xs-offset-1">
                                <input type="text" name="nombre" id="InputUsuario" class="form-control Input"
                                    placeholder="Usuario" required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-xs-12" for="password">
                                <h4>Contraseña</h4>
                            </label>
                            <div class="col-xs-10 col-xs-offset-1">
                                <input type="password" name="password" id="InputPassword" class="form-control col-xs-12 Input"
                                    placeholder="Contraseña" required>
                                <?php !empty($error_message) ? print($error_message) : '' ?>
                            </div>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary center-block">Aceptar</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    </div>
</body>

</html>