<?php

?>

<!DOCTYPE html>
<!-- saved from url=(0039)https://t3chfest.uc3m.es/2018/programa/ -->
<html lang="es">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Cursos de verano</title>
    <meta name="keywords" content="CIISXX, ciisxx, postmaster, ciis turismo, feria tecnologica, tacna ciis, congreso internacional, concursos, conference, technology, university, universidad">
    <meta name="description" content="El XX Congreso internacional de Informática y Sistemas brindando todo una gama de conocimiento con ponentes de la mejor excelencia 
					posible de distintos países con distinto temas de la actualidad de la informatica, fecha del congreso Noviembre 2019.">

    <meta property="og:type" content="website">
    <meta property="og:title" content="Talleres de verano - CIIS">
    <meta property="og:description" content="Conoce el programa de T3chFest. Feria de informática y nuevas tecnologías. 1 y 2 marzo 2018. Auditorio Universidad Carlos III de Madrid.">
    <meta property="og:image" content="">
    <meta property="og:image:height" content="630">
    <meta property="og:image:width" content="1200">

    <meta name="theme-color" content="#529CE0">
    <meta name="msapplication-navbutton-color" content="#005DB2">
    <meta name="apple-mobile-web-app-status-bar-style" content="#005DB2">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">

    <link rel="shortcut icon" href="src/assets/media/image/icon.png">
    
    <link rel="stylesheet" type="text/css" href="src/css/main.min.css">
    <link rel="stylesheet" type="text/css" href="src/css/font-awesome.min.css">

</head>

<body>
    
    <?php require(ROOT . '/' . PATH_VIEWS . 'head.php'); ?>	

    <header class="section" id="programa">
        <div class="wrapper">
            <h1>Programa Talleres de verano</h1>
            <h2>Conoce todas las actividades</h2>
        </div>
    </header>

    <main id="programa">

        <section class="wrapper" id="intro">
            <h2>Nuestro programa y horario</h2>
            <article>
                <p>En el marco de la institución estará organizando los trece talleres de informática 
                dirigidos a grupos de diferentes edades, dictará desde el próximo lunes 14 enero, la Escuela 
                Profesional de Ingeniería en Informática y Sistemas.</p>
                <p>Los talleres que se realizarán en ambientes de la UNJBG, serán:  SPSS aplicado al 
                desarrollo de proyectos de tesis, AutoCAD 2D y 3D e impresión 3D, Arduino Deluxe, Ofimática 
                básica-intermedia, Robótica con Lego Mindstorms NXT 2.0 y EV3, Diseño Gráfico: Corel 
                Draw – Photoshop, Edición de audio y video con drones, Programación para dispositivos 
                móviles: Android, Matlab para Ingeniería, Ethical Hacking, Diseño y programación de sitios 
                web con base de datos, Desarrollo de videojuegos en Unity 2D y 3D con realidad virtual así 
                como Herramientas TIC para la educación: Prezi.</p>
                <p>El dictado de los talleres estará a cargo de profesionales capacitados en la especialidad 
                y se realizarán en los laboratorios de cómputo de la E.P. de Ingeniería en Informática y 
                Sistemas, de lunes a viernes en diferentes horarios.</p>
                <p>Es preciso señalar que los talleres tienen un precio económico y están dirigidos 
                a estudiantes, profesionales y público en general.</p>
                <p>Las inscripciones e informes se vienen realizando en el frontis de la Ciudad Universitaria, la 
                información detallada se encuentra en la página de: <a href="https://www.facebook.com/ciistacna/"><i class="fa fa-facebook-official"></i> Facebook</a></p>
                <p style="font-weight:bold;">En los horarios se dictarán los siguientes cursos:</p>
            </article>
        </section>

        <section id="content">
            <div class="wrapper">
                <div class="day">
                    <button id="labA">Laboratorio A</button>
                    <button id="labB" class="active">Laboratorio B</button>
                    <button id="labC">Laboratorio C</button>
                </div>
            </div>
            
            <div id="labA" class="schedule" style="display: none">
                <div class="tracks">
                    <div class="track1">
                        <h4>Lunes</h4>
                    </div>
                    <div class="track2">
                        <h4>Martes</h4>
                    </div>
                    <div class="track3">
                        <h4>Miercoles</h4>
                    </div>
                    <div class="track4">
                        <h4>Jueves</h4>
                    </div>
                    <div class="track5">
                        <h4>Viernes</h4>
                    </div>
                </div>


                <div class="slot" time="10:00">
                    <span></span>
                    <a class="talk track1" data-location="Lunes"
                        data-tags="">
                        <h5>Taller de AutoCAD 2D y 3D e impresión 3D</h5>
                        <?php 
                        /* 
                            <div class="schedule-row">
                                <div>
                                    <p>MSc. Mario Gauna Chino</p>
                                </div>
                            </div>
                        */
                        ?>
                        
                    </a>

                    <a class="talk track2" data-location="Martes"
                        data-tags="">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" data-location="Miercoles"
                        data-tags="">
                        <h5>Taller de AutoCAD 2D y 3D e impresión 3D</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" data-location="Jueves"
                        data-tags="">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" data-location="Viernes"
                        data-tags="">
                        <h5>Taller de AutoCAD 2D y 3D e impresión 3D</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="slot" time="15:00">
                    <span></span>
                    <a class="talk track1" data-location="Lunes"
                        data-tags="">
                        <h5></h5>
                        <?php 
                        /* 
                            <div class="schedule-row">
                                <div>
                                    <p>MSc. Mario Gauna Chino</p>
                                </div>
                            </div>
                        */
                        ?>
                        
                    </a>

                    <a class="talk track2" data-location="Martes"
                        data-tags="">
                        <h5>Ethical Hacking</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" data-location="Miercoles"
                        data-tags="">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" data-location="Jueves"
                        data-tags="">
                        <h5>Ethical Hacking</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" data-location="Viernes"
                        data-tags="">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>

            <div id="labB" class="schedule">
                <div class="tracks">
                    <div class="track1">
                        <h4>Lunes</h4>
                    </div>
                    <div class="track2">
                        <h4>Martes</h4>
                    </div>
                    <div class="track3">
                        <h4>Miercoles</h4>
                    </div>
                    <div class="track4">
                        <h4>Jueves</h4>
                    </div>
                    <div class="track5">
                        <h4>Viernes</h4>
                    </div>
                </div>

                <div class="slot" time="10:00">
                    <span></span>
                    <a class="talk track1" data-location="Lunes"
                        data-tags="">
                        <h5>SPSS aplicado al desarrollo de proyectos de tesis</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track2" data-location="Martes"
                        data-tags="">
                        <h5>Ofimática básica - intermedia</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" data-location="Miercoles"
                        data-tags="">
                        <h5>SPSS aplicado al desarrollo de proyectos de tesis</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" data-location="Jueves"
                        data-tags="">
                        <h5>Ofimática básica - intermedia</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" data-location="Viernes"
                        data-tags="">
                        <h5>SPSS aplicado al desarrollo de proyectos de tesis</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>


                </div>

                <div class="slot" time="12:00">
                    <span></span>
                    <a class="talk track1" href="#"
                        data-location="Lunes" data-tags="2, 9, 18, 19">
                        <h5>Desarrollo de videojuegos en Unity 2D y 3D con realidad virtual</h5>
                        <?php 
                        /* 
                        <div class="schedule-row">
                            <div>
                                <p>Est. María F. Zevallos Gómez<br>Est. Jesús J. Yance Flores</p>
                            </div>
                        </div>
                        */
                        ?>
                        
                    </a>
                    <a class="talk track2" href="#"
                        data-location="Martes" data-tags="2, 9, 18, 19">
                        <h5>Edición de audio y video con drones</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track3" href="#"
                        data-location="Miercoles" data-tags="2, 9, 18, 19">
                        <h5>Desarrollo de videojuegos en Unity 2D y 3D con realidad virtual</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track4" href="#"
                        data-location="Jueves" data-tags="2, 9, 18, 19">
                        <h5>Edición de audio y video con drones</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track5" href="#"
                        data-location="Viernes" data-tags="2, 9, 18, 19">
                        <h5>Desarrollo de videojuegos en Unity 2D y 3D con realidad virtual</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="slot" time="15:00">
                    <span></span>
                    <a class="talk track1" href="#"
                        data-location="Lunes" data-tags="2, 9, 18, 19">
                        <h5>Programación para dispositivos móviles: Android</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track2" href="#"
                        data-location="Martes" data-tags="2, 9, 18, 19">
                        <h5>Herramientas TIC para la educación: Prezi</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" href="#"
                        data-location="Miercoles" data-tags="2, 9, 18, 19">
                        <h5>Programación para dispositivos móviles: Android</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" href="#"
                        data-location="Jueves" data-tags="2, 9, 18, 19">
                        <h5>Herramientas TIC para la educación: Prezi</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" href="#"
                        data-location="Viernes" data-tags="2, 9, 18, 19">
                        <h5>Programación para dispositivos móviles: Android</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                </div>

            </div>

            <div id="labC" class="schedule" style="display: none">
            <div class="tracks">
                    <div class="track1">
                        <h4>Lunes</h4>
                    </div>
                    <div class="track2">
                        <h4>Martes</h4>
                    </div>
                    <div class="track3">
                        <h4>Miercoles</h4>
                    </div>
                    <div class="track4">
                        <h4>Jueves</h4>
                    </div>
                    <div class="track5">
                        <h4>Viernes</h4>
                    </div>
                </div>


                <div class="slot" time="08:00">
                    <span></span>
                    <a class="talk track1" data-location="Lunes"
                        data-tags="" style="padding-bottom: 60px;">
                        <h5>Matlab para Ingeniería</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track2" data-location="Martes"
                        data-tags="">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" data-location="Miercoles"
                        data-tags="">
                        <h5>Matlab para Ingeniería</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" data-location="Jueves"
                        data-tags="">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" data-location="Viernes"
                        data-tags="">
                        <h5>Matlab para Ingeniería</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="slot" time="09:00">
                    <span></span>
                    <a class="talk track1" href="#"
                        data-location="Lunes" data-tags="2, 9, 18, 19">
                        <h5>Matlab para Ingeniería</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track2" href="#"
                        data-location="Martes" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track3" href="#"
                        data-location="Miercoles" data-tags="2, 9, 18, 19">
                        <h5>Matlab para Ingeniería</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track4" href="#"
                        data-location="Jueves" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track5" href="#"
                        data-location="Viernes" data-tags="2, 9, 18, 19">
                        <h5>Matlab para Ingeniería</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="slot" time="10:00">
                    <span></span>
                    <a class="talk track1" href="#"
                        data-location="Lunes" data-tags="2, 9, 18, 19">
                        <h5>Taller de Arduino Deluxe</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track2" href="#"
                        data-location="Martes" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track3" href="#"
                        data-location="Miercoles" data-tags="2, 9, 18, 19">
                        <h5>Taller de Arduino Deluxe</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track4" href="#"
                        data-location="Jueves" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a class="talk track5" href="#"
                        data-location="Viernes" data-tags="2, 9, 18, 19">
                        <h5>Taller de Arduino Deluxe</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="slot" time="12:00">
                    <span></span>
                    <a class="talk track1" href="#"
                        data-location="Lunes" data-tags="2, 9, 18, 19">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track2" href="#"
                        data-location="Martes" data-tags="2, 9, 18, 19">
                        <h5>Diseño gráfico: Corel Draw – Photoshop</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" href="#"
                        data-location="Miercoles" data-tags="2, 9, 18, 19">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" href="#"
                        data-location="Jueves" data-tags="2, 9, 18, 19">
                        <h5>Diseño gráfico: Corel Draw – Photoshop</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" href="#"
                        data-location="Viernes" data-tags="2, 9, 18, 19">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="slot" time="14:00">
                    <span></span>
                    <a class="talk track1" href="#"
                        data-location="Lunes" data-tags="2, 9, 18, 19">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track2" href="#"
                        data-location="Martes" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" href="#"
                        data-location="Miercoles" data-tags="2, 9, 18, 19">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" href="#"
                        data-location="Jueves" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" href="#"
                        data-location="Viernes" data-tags="2, 9, 18, 19">
                        <h5></h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="slot" time="15:00">
                    <span></span>
                    <a class="talk track1" href="#"
                        data-location="Lunes" data-tags="2, 9, 18, 19">
                        <h5>Diseño y programación de sitios web con base de datos</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track2" href="#"
                        data-location="Martes" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track3" href="#"
                        data-location="Miercoles" data-tags="2, 9, 18, 19">
                        <h5>Diseño y programación de sitios web con base de datos</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track4" href="#"
                        data-location="Jueves" data-tags="2, 9, 18, 19">
                        <h5>Taller de robótica con LEGO Mindstorms NXT 2.0 y EV3</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>

                    <a class="talk track5" href="#"
                        data-location="Viernes" data-tags="2, 9, 18, 19">
                        <h5>Diseño y programación de sitios web con base de datos</h5>
                        <div class="schedule-row">
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            
            <div style="margin: 15px 15px;">
                <img src="src/assets/media/image/titular1.png" style="max-width: 100%; height: auto; ">
            </div>
            
        </section>
    </main>

    <?php require(ROOT . '/' . PATH_VIEWS . 'foot.php'); ?>	

    <script src="src/js/jquery.min.js"></script>
    <script src="src/js/programa.js"></script>

</body>

</html>