<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisa;
use GuzzleHttp\Client;
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

// cach optimizer

/**Authentification */


Auth::routes();

/**Optimize route */
Route::get('/optimize',function(){
    Artisan::call('optimize');
    return 'optimized';
});

/**Migrate route */
Route::get('/migrate',function(){
    Artisan::call('migrate:fresh --seed');
    return 'migration done';
});

/**Middleware */
Route::group(['middleware' => ['auth']], function() {
    /**Accueil */
    Route::get('/', 'PagesController@index'); 
    /**Dashboard */
    Route::get('/camps','PagesController@index')->name('camps');
    /**camp detail */
    Route::get('/camp/{ville}','PagesController@camp')->name('camp');
    /**Réservations*/
    Route::get('/reservations/{id}','PagesController@reservations')->name('reservations');
    Route::post('/resa_attribute', 'PagesController@resa_attribute')->name('resa_attribute');
    Route::post('/available_rooms', 'PagesController@available_rooms')->name('available_rooms');
    Route::post('/check_in', 'PagesController@check_in')->name('check_in');
    Route::post('/saveAttribution', 'PagesController@saveAttribution')->name('saveAttribution');
    Route::get('/planning/{id}', 'PagesController@planning')->name('planning');
    /**Rapport Occupation */
    Route::get('/clients/{id}', 'PagesController@rapport_occup')->name('clients');
    /**Page d'erreur */
    Route::get('/erreur', function() {
        $id = session()->get('camp_id');
        return view('errors.error',['id'=>$id]);
    })->name('erreur');
    /**Page d'erreur pas de permissions */
    Route::get('/permission', function() {
        $id = session()->get('camp_id');
        return view('errors.permission',['id'=>$id]);
    })->name('permission');
    /**Paramétrage */
    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);
    /**Logout */
    Route::get('logoutt', function () { auth()->logout(); Session()->flush(); return Redirect::to('/'); })->name('logoutt');
});

// Demo routes
Route::get('/datatables', 'PagesController@datatables');
Route::get('/ktdatatables', 'PagesController@ktDatatables');
Route::get('/select2', 'PagesController@select2');
Route::get('/jquerymask', 'PagesController@jQueryMask');
Route::get('/icons/custom-icons', 'PagesController@customIcons');
Route::get('/icons/flaticon', 'PagesController@flaticon');
Route::get('/icons/fontawesome', 'PagesController@fontawesome');
Route::get('/icons/lineawesome', 'PagesController@lineawesome');
Route::get('/icons/socicons', 'PagesController@socicons');
Route::get('/icons/svg', 'PagesController@svg');

// Quick search dummy route to display html elements in search dropdown (header search)
Route::get('/quick-search', 'PagesController@quickSearch')->name('quick-search');

