<!DOCTYPE html>
<!-- saved from url=(0104)https://requests.stanford.edu/requests/new?item_id=1840492&origin=SAL3&origin_location=STACKS&modal=true -->
<html lang="es">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


  <!-- Mobile viewport optimization h5bp.com/ad -->
  <meta name="HandheldFriendly" content="True">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <!-- Mobile IE allows us to activate ClearType technology for smoothing fonts for easy reading -->
  <!--[if IEMobile]> <meta http-equiv="cleartype" content="on"> <![endif]-->
  <link rel="stylesheet" href="/esis.library.unjbg/rsc/3/css/shim-ext.css">
  <link rel="stylesheet" media="all" href="/esis.library.unjbg/rsc/3/css/application-78a0e9d408c7cb383e8fb3d3df87c8e518be1bc8dadebc49049b1a4fedb4e1c9.css">
  <link rel="stylesheet" media="screen" href="/esis.library.unjbg/rsc/3/css/css(1)">
  <script type="text/javascript" async="" src="/esis.library.unjbg/rsc/3/css/ga.js.descarga"></script>
  <script src="/esis.library.unjbg/rsc/3/css/application-61c8fb1014c6fd9e74aa95d8b601e927216c5b4de403cbeaaab51cf06e132c6e.js.descarga"></script>
  <script src="/esis.library.unjbg/rsc/3/css/polyfiller.js.descarga"></script>
  <meta name="csrf-param" content="authenticity_token">
  <meta name="csrf-token" content="+tK3MBLxHPrvywFCb+0ffI+qCTE7lBz26U/tt19vZek/299uJJ/KeaMCko0m9WBcehqt7SfjdGiblXqCdH1C6Q==">

  
</head>

<body data-analytics-id="" class="modal-body">

  <div class="col-md-6 col-md-offset-3">
    <h1 id="dialogTitle">Reservar Texto</h1>
    <?php
    $this->new = new newModel();
    $numEjemplar = $cantidad->fetch_array();
    $Detalletexto = $consulta->fetch_array();

    if ($Detalletexto['id_genero'] == 6){
      
      $book = $this->new->MostrarDetalleLibro($idtext);
      $rowBook=$book->fetch_assoc();

      echo '<h2 class="searchworks-item" title="' . $rowBook['nombre_texto'] . ' : ' . $rowBook['nombre_editorial'] . '">';

      if($numEjemplar['disponible'] == 0){
        echo $rowBook['nombre_texto'] . ' : ' . $rowBook['nombre_editorial'] . ', <br/>ISBN ' . $rowBook['isbn_libro'] . ', No quedan muestras disponibles';
      } else {
        if($numEjemplar['disponible'] == 1){
          echo $rowBook['nombre_texto'] . ' : ' . $rowBook['nombre_editorial'] . ', <br/>ISBN ' . $rowBook['isbn_libro'] . ', Queda ' . $numEjemplar['disponible'] . ' muestra disponible';
        } else {
          echo $rowBook['nombre_texto'] . ' : ' . $rowBook['nombre_editorial'] . ', <br/>ISBN ' . $rowBook['isbn_libro'] . ', Quedan ' . $numEjemplar['disponible'] . ' muestras disponibles';
        }
        
      }    
      
    }

    if ($Detalletexto['id_genero'] == 7){

      $tesis = $this->new->MostrarDetalleTesis($idtext);
      $rowTesis=$tesis->fetch_assoc();

      echo '<h2 class="searchworks-item" title="' . $rowTesis['nombre_texto'] . '">';

      if($numEjemplar['disponible'] == 0){
        echo $rowTesis['nombre_texto'] . '<br/>Grado : ' . $rowTesis['nombre_grado'] . ', No quedan muestras disponibles';
      } else {
        if($numEjemplar['disponible'] == 1){
          echo $rowTesis['nombre_texto'] . '<br/>Grado : ' . $rowTesis['nombre_grado'] . ', Queda ' . $numEjemplar['disponible'] . ' muestra disponible';
        } else {
          echo $rowTesis['nombre_texto'] . '<br/>Grado : ' . $rowTesis['nombre_grado'] . ', Quedan ' . $numEjemplar['disponible'] . ' muestras disponibles';
        } 
      }
    }

    if ($Detalletexto['id_genero'] == 8){

      $article = $this->new->MostrarDetalleArticulo($idtext);
      $rowArticle=$article->fetch_assoc();

      echo '<h2 class="searchworks-item" title="' . $rowArticle['nombre_texto'] . '">';

      if($numEjemplar['disponible'] == 0){
        echo $rowArticle['nombre_texto'] . '<br/>No quedan muestras disponibles';
      } else {
        if($numEjemplar['disponible'] == 1){
          echo $rowArticle['nombre_texto'] . '<br/>Queda ' . $numEjemplar['disponible'] . ' muestra disponible';
        } else {
          echo $rowArticle['nombre_texto'] . '<br/>Quedan ' . $numEjemplar['disponible'] . ' muestras disponibles';
        }
      }
    }

    echo '</h2>';
    ?>

    <div id="scan-or-deliver" data-scheduler-lookup-url="/paging_schedule/SAL3">
      <div class="row">
        <?php 
          if($numEjemplar['disponible'] == 0 || $sancion == true || $reserva == false){
            echo '<div class="col-xs-12 col-sm-6 buttons">
                    <a disabled class="btn btn-md btn-primary" aria-describedby="deliveryDescription"
                      <span class="sul-icon sul-icon-book-1"></span> 
                      Enviar petición de reserva</a>
                  </div>';
          } else {
            //href="/esis.library.unjbg/new/reserve?title_text='.$Detalletexto['nombre_texto'].'&modal=true&id='.$idtext.'&amp;userid='.urlencode(http_build_query(array('DATA' => $user))).'"
            echo '<div class="col-xs-12 col-sm-6 buttons">
                    <form action="/esis.library.unjbg/new/reserve/" method="POST">
                        
                        <input type="hidden" name="id" value='.$idtext.'> 
                        <input type="hidden" name="title_text" value='.$title.'> 
                        <input type="hidden" name="idUsuario" value='.$idUsuario.'> 
                        
                        <input type="submit" class="btn btn-md btn-primary" 
                        
                        value="Enviar petición de reserva">
                    </form>
                  </div>';
          }
        ?>
        <div class="col-xs-12 col-sm-6 content">
          <dl id="deliveryDescription">
            <dt>Fecha de disponible de entrega</dt>
            <dd data-single-library-value="GREEN">
              <!-- <span data-scheduler-text="true" aria-live="polite" class="">Tuesday, Dec 18 2018, after 10:00am</span> --> 
              <span aria-live="polite" class="">
                Recoger: Tuesday, Dec 18 2018, 10:00am 
                <br>
                Devolver: Tuesday, Dec 18 2018, 10:00am</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="separator">
        <h2>¿Necesita un capítulo o artículo?</h2>
      </div>
      <div class="row scan-to-pdf">
        <div class="col-xs-12 col-sm-6 buttons">
          <a class="btn btn-md btn-default" aria-describedby="scanDescription" href="https://requests.stanford.edu/scans/new?item_id=1840492&amp;modal=true&amp;origin=SAL3&amp;origin_location=STACKS">
            Escaneo PDF<span class="btn-sub-text">requiere inicio de sesión</span>
          </a>
        </div>
        <div class="col-xs-12 col-sm-6 content">
          <dl id="scanDescription">
            <dt>Copyright limit</dt>
            <dd>Un artículo o capítulo; máximo 50 páginas.</dd>
            <dt class="service-description">Elegibilidad</dt>
            <dd class="service-description">Disponible para profesores y personal, estudiantes, becarios, 
              postdoctorados y académicos visitantes.</dd>
          </dl>
        </div>
      </div>
    </div>

  </div>

  <script type="text/javascript">
    var _mfq = _mfq || [];
    (function () {
      var mf = document.createElement("script");
      mf.type = "text/javascript";
      mf.async = true;
      mf.src = "//cdn.mouseflow.com/projects/07ae47b8-19d1-406d-9d9e-bf9c7fe048bc.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  </script>

</body>

</html>