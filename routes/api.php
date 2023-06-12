<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
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

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
//Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
// Route group cho admin
// Sử dụng middleware 'role' trong route group
Route::middleware(['auth:sanctum', 'role:user'])->group(function () {
    Route::get('/forecast',[\App\Http\Controllers\Api\ApiUserInfoController::class, 'getForecast']);
    Route::get('/cars', [\App\Http\Controllers\Api\ApiUserInfoController::class, 'getInfo']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });



});


Route::prefix('admin')->middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::apiResource('/users', UserController::class);
    Route::get('/manageforecast',[\App\Http\Controllers\Api\ApiUserInfoController::class, 'manageForecast']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/carinfo', [\App\Http\Controllers\Api\ApiCarController::class, 'invoke']);
});
