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

//all users
Route::get('/users', 'UserController@index');

//single user
Route::get('/users/{id}', 'UserController@show');

//update user
Route::put('/users/{id}', 'UserController@update');

//add new user
Route::get('/users/create', 'UserController@store');
Route::post('/users/create', 'UserController@store');

//delete user
Route::get('/user/{id}', 'UserController@destroy');
Route::delete('/user/{id}', 'UserController@destroy');
