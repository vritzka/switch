<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Probo</title>

     <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="http://getbootstrap.com/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="http://getbootstrap.com/examples/cover/cover.css" rel="stylesheet">
    <link href="custom.css" rel="stylesheet">
    <link href="editor.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">


          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand">Probo</h3>
              <nav>
                <ul class="nav masthead-nav">
                  <li class="active"><a href="#">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="inner cover">
            
            <h1 class="cover-heading">Program your Probo.</h1>


<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#device" aria-controls="device" role="tab" data-toggle="tab">Device</a></li>
    <li role="presentation"><a href="#rules" aria-controls="rules" role="tab" data-toggle="tab">Rules</a></li>
    <li role="presentation"><a href="#rules" aria-controls="rules" role="tab" data-toggle="tab">Simulator</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="device">
    
    
            <div class="mainBox">
              <h4 id="l1">In</h4>
              <h4 id="l2">Out</h4>
              
              <div class="inContainer" id="input1" data-inputId="1">
                <div class="input">1</div>
                <div class="do"></div>
              </div>
              
              <div class="inContainer" id="input2" data-inputId="2">
                <div class="input">2</div>
                <div class="do"></div>
              </div>
              
              <div class="inContainer" id="input3" data-inputId="3">
                <div class="input">3</div>
                <div class="do"></div>
              </div>
              
              <div class="inContainer" id="input4" data-inputId="4">
                <div class="input">4</div>
                <div class="do"></div>
              </div>              
              
              
              <div class="output" id="output1"></div>
              <div class="output" id="output2"></div>
              <div class="output" id="output3"></div>
              <div class="output" id="output4"></div>
            </div>      
      
      
    
    
    </div>
    <div role="tabpanel" class="tab-pane" id="rules"><?php include('editor.php') ?></div>
  </div>

</div>            
            
            
            
            
          </div>

          <div class="mastfoot">
            <div class="inner">
              <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            </div>
          </div>

        </div>

      </div>

    </div>

    
    
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="http://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
    <script src="js/jquery.timepicker.min.js"></script>
    <script src="js/js.js"></script>
  </body>
</html>
