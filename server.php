<?php

header('Content-Type: application/json');

$data = require_once 'users.php';

echo json_encode($data);