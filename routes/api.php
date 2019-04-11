<?php

use Illuminate\Http\Request;

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

Route::post('/users/login','UserController@login');

Route::get('/notification_events/subscribe', 'NotificationEventController@subscribe');

Route::get('/unauthorized', function() {
    return response()->json(['status'=>false,'message'=>'Unauthorized'], 401);
})->name('login');

Route::group(['middleware' => ['auth:api']], function() {
    Route::apiResource('/users','UserController');
    Route::apiResource('/customers','CustomerController');
    Route::apiResource('/offices', 'OfficeController');
    Route::apiResource('/colors', 'ColorController');
    Route::apiResource('/designs', 'DesignController');
    Route::apiResource('/fabrics', 'FabricController');
    Route::apiResource('/products', 'ProductController');
    Route::apiResource('/suppliers', 'SupplierController');
    Route::apiResource('/stocks', 'StockController');
    Route::apiResource('/stock_details', 'StockDetailController');
    Route::apiResource('/stock_movements', 'StockMovementController');
    Route::apiResource('/stock_movement_details', 'StockMovementDetailController');
    Route::apiResource('/notifications', 'NotificationController');

    Route::post('/integrations','IntegrationController@action');
});
