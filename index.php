<?php include 'includes/application_top.php' ?>
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

    <title>Switchy</title>

     <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="http://getbootstrap.com/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="http://getbootstrap.com/examples/cover/cover.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <link href="css/editor.css" rel="stylesheet">
    <link href="css/introjs.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
  <?php include("analyticstracking.php") ?>

    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">


          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand">The Device</h3>
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
            
            <h1 id="step1">Program your Grow Room</h1>
            
            <h3>
                Set rules for your electricals. 
            </h3>
            
            
            <div>
              <img src="img/device.png" style="height:311px" id="device">
            </div>
            
            <p>
            <button type="button" class="btn btn-success btn" aria-label="Show Tutorial" id="tutorialButton" style="margin-top:20px;">
              <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Click to Learn how in 30 seconds.
            </button>
            </p>
            


<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#rules" aria-controls="rules" role="tab" data-toggle="tab" data-step="4" data-position="top" data-intro="Now it's time to tell your device what to do.">Rules</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="rules"><?php include('editor.php') ?></div>
    <div role="tabpanel" class="tab-pane" id="settings"><?php include('settings.php') ?></div>
  </div>
  


</div>            
       
            
          </div>

          <div class="mastfoot">
            <div class="inner">
              <p><a href="http://www.rollitup.org/t/smart-fan-speed-controller-a-good-idea-or-nah.894719/" target="_blank">Join the discussion at Rollitup</a>.</p>
              <p>by QVPark, +61 (0) 437 123 972, vritzka@gmail.com</p>
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
    <script type="text/javascript" src="//cdn.jsdelivr.net/particle-api-js/5/particle.min.js"></script>
    <script src="js/jquery.timepicker.min.js"></script>
    <script src="js/intro.min.js"></script>
    <script src="js/js.js"></script>
    
<script>
  function startIntro(){
        var intro = introJs();
          intro.setOptions({
            steps: [
              { 
                intro: "<div style=\"background-color:white;padding:7px;border-radius:5px;margin-bottom:10px;\"><img width=\"200\" src=\"/img/vocus_logo.png\"></div><p>Dear Vocus Upstart, thank you for visiting! Please click 'next' for a short introduction."
              },
              {
                element: document.querySelector('#device'),
                intro: "This is the device. A cloud connected powerstrip (cube). People have it at home and it connects to their Wifi.<br><br> It can then be programmed from this website. Here's how..."
              },
              {
                element: document.querySelector('#newRule'),
                intro: "Upon clicking this button, you can define rules for the device.<br>(Don't click it just yet.)",
                position: 'right'
              },
              {
                element: '#editor',
                intro: 'I have now created a rule that tells the device to switch on outlet 1 if the temperature exceeds 83 Deg F.',
                position: 'left'
              },
              {
                element: '#newRule',
                intro: "Add as many rules as needed.",
                position: 'bottom'
              },
              {
                element: '#uploadButton',
                intro: 'Eventually, you can upload these rules to your devices. It will take 30 seconds or so and then your device is ready to go.',
                position: 'top'
              }
            ]
          }).onchange(function(targetElement) {

        if($(targetElement).attr('id') == 'input1') {
          $('#input1 div.do select').val('Temperature');
          $('#input2 div.do select').val('Humidity');
        }

        if($(targetElement).attr('href') == '#rules') {
          $('ul.nav-tabs li a[href="#rules"]').tab('show')
        }

        if($(targetElement).attr('id') == 'editor') {
          $('#newRule').trigger('click');
          $('div.a > select.sensorSelect').val('Temperature');
          $('div.a > select.sensorSelect').trigger('change');

          $('div.a > select.unitSelect').val('83');
          $('div.a > select.unitSelect').trigger('change');

          $('div.b > select.outputSelect').val('1');
          $('div.b > select.outputSelect').trigger('change');

          $('div.b > select.actionSelect').val('1');
          $('div.b > select.actionSelect').trigger('change');				


        }			
			
			
		}).oncomplete(function() {
				$('ul.nav-tabs li a[href="#device"]').tab('show');
				ga('send', 'event', 'Tutorial', 'completed');
		}).onexit(function() {
  			ga('send', 'event', 'Tutorial', 'exited');
		})
          
          
          intro.start();
      }    
</script>    
    
    
  </body>
</html>
