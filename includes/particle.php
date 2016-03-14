<?php
class Particle {
   var $Title;
   var $Keywords;
   var $Content;

   function Display( ) {
     echo "<HTML>\n<HEAD>\n";
     $this->DisplayTitle( );
     $this->DisplayKeywords( );
     echo "\n</HEAD>\n<BODY>\n";
     echo $this->Content;
     echo "\n</BODY>\n</HTML>\n";
   }

 }
?>