<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use GuzzleHttp\Client;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/post', function () {
    $response = Http::post('http://jsonplaceholder.typicode.com/posts', [
        'title' => 'This is test from ItSolutionStuff.com',
        'body' => 'This is test from ItSolutionStuff.com as body',
    ]);

    dd($response->successful());
});




Route::middleware('auth:api','throttle:rate_limit,1')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('reservations',ReservationsController::class);
// Route::resource('reservations','ReservationsController');
// Route::post('agence',ReservationsController::class,'index');
// Route::resource('products', 'ProductController');
// Route::resource('users', 'UserController');
