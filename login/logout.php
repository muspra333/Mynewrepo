<?php
session_start();
session_destroy();
header("Location: https://cloudymsg.com");
exit();
?>
