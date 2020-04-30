<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Route::get('user/{id}', 'UserController@show');
//Route::get('/', 'UserController@saluda');

Route::get('user/{name}', 'UserController@show');


/*
Route::get('/', function() {
    return view('users', ['name' => 'José']);
    return view('users')->with('name', 'Esmeralda');

});

 Route::get('user/{id}', function($id) {
    return 'Bienvenido user: '. $id;
});

Route::get('user/{name?}', function($name=null) {
    return 'Bienvenido: '.$name;
}); */