<?php

print('Pattern: '.$argv[1].PHP_EOL);
print('Text   : '.$argv[2].PHP_EOL);
$matches = array();
print('Success: '.preg_match($argv[1], $argv[2], $matches).PHP_EOL);
print('Matches: '.json_encode($matches));
