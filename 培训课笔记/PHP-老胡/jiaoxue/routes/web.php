<?php

 return [
	"posts" => [
		"GET" => "PostController@list",
		"POST" => "PostController@create",
	],
	"posts/{id}" => [
		"GET" => "PostController@details"
	],
	"posts/abc/def" => [
		"GET" => "PostController@abc"
	]
];
