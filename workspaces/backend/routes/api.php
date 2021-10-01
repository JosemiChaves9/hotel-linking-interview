<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OfferController;

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


Route::get('/test', [OfferController::class, 'getUserByEmail']);

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});

Route::group([
    'prefix' => 'offers'

], function ($router) {
    Route::post('/create-offer', [OfferController::class, 'createOffer']);
    Route::get('/get-all', [OfferController::class, 'getOffers']);
    Route::get('/get-offers-for-user/{user_id}', [OfferController::class,'getOffersForUser']);
    Route::post('/obtain-offer', [OfferController::class, 'obtainOffer']);
    Route::delete('/redeem-offer', [OfferController::class, 'redeemOffer']);

});