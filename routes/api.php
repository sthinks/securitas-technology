<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\HomeSliderController;
use App\Http\Controllers\Api\LocationController;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/category/{seo_url}', [CategoryController::class, 'get']);
Route::get('/blog/{seo_url}', [CategoryController::class, 'blog']);
Route::get('/story/{seo_url}', [CategoryController::class, 'story']);
Route::get('/sensorium', [CategoryController::class, 'sensorium']);
Route::get('/search', [CategoryController::class, 'search']);
Route::get('/cities', [CategoryController::class, 'cities']);
Route::get('/reviews', [CategoryController::class, 'reviews']);
Route::post("/contact", [App\Http\Controllers\Api\ContactController::class, 'submit']);
Route::get('/locations', [LocationController::class, 'getall']);
Route::get('/slider',[HomeSliderController::class,'slider']);

Route::get('/test',[LocationController::class, 'getall'] )

     ->middleware(['throttle:3,60']);
