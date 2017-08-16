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

    <title>Smartphone Connected Grow Box</title>

		<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="https://getbootstrap.com/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="https://v4-alpha.getbootstrap.com/examples/cover/cover.css" rel="stylesheet">
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
              <img src="img/device.png" style="height:311px;margin-top:25px" id="device">
            </div>
            
            <p>
            <button type="button" class="btn btn-success btn" aria-label="Show Tutorial" id="tutorialButton" style="margin-top:20px;">
              <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Click to Learn how in 30 seconds.
            </button>
            </p>
            


<div>
	
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#rules" role="tab">Rules</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#monitoring" role="tab">Watch</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="rules" role="tabpanel"><?php include('editor.php') ?></div>
  <div class="tab-pane" id="monitoring" role="tabpanel"><?php include('settings.php') ?></div>
</div>
  


</div>            
       
            
          </div>

          <div class="mastfoot">
            <div class="inner">
              <p><a href="http://www.rollitup.org/t/smart-fan-speed-controller-a-good-idea-or-nah.894719/" target="_blank">Join the discussion at Rollitup</a>.</p>
              <p>Contact: vritzka@gmail.com</p>
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
    <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="https://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
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
                intro: "This is the device. A cloud connected powerstrip (cube). People connect this to their Wifi.<br><br> It can then be programmed from this website. Here's how..."
              },
              {
                element: document.querySelector('#newRule'),
                intro: "Upon clicking this button, you can define rules for the device.<br>(Don't click it just yet.)",
                position: 'right'
              },
              {
                element: '#editor',
                intro: 'I have now created a rule that tells the device to switch on outlet 1 if the temperature exceeds 83 Deg F.<br><br>The user would most likely have a fan connected to outlet 1.',
                position: 'left'
              },
              {
                element: '#newRule',
                intro: 'An unlimited number of rules can be created.',
                position: 'bottom'
              },							
              {
                element: '#uploadButton',
                intro: 'Eventually, these rules get uploaded to the device.<br><br>No cable needed, all via the Internet and WiFi (over the air)',
                position: 'top'
              },
              {
                element: '#tabM',
                intro: 'It\'s possible to monitor the device remotely. ',
                position: 'top'
              },
              {
                element: '#monitoring',
                intro: 'This shows the current Temperature and Humidity at my desk in Perth.<br><br>This concludes the introduction. Thank you for taking the time.<br><br> Volker Ritzka<br>(vritzka@gmail.com)',
                position: 'left'
              },							
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
						
				if($(targetElement).attr('id') == 'monitoring') {
          $('#tabM').trigger('click')
        }		
			
			
		}).oncomplete(function() {
				$('ul.nav-tabs li a[href="#rules"]').tab('show');
				ga('send', 'event', 'Vocus Tutorial', 'completed');
		}).onexit(function() {
  			ga('send', 'event', 'Vocus Tutorial', 'exited');
		})

          intro.start();
      }    
</script>    
    
    
  </body>
</html>
