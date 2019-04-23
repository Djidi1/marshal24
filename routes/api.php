<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
	Route::get('details', 'API\UserController@details');

	/* User */
	Route::get('users', 'API\UserController@index');
	Route::put('user-update/{id}', 'API\UserController@update');

	/* Shop */
	Route::get('shops', 'API\ShopController@index');
	Route::get('shop/{id}', 'API\ShopController@show');
	Route::post('shop-add', 'API\ShopController@store');
	Route::put('shop-update/{id}', 'API\ShopController@update');
	Route::put('shop-set-categories/{id}', 'API\ShopController@setCategories');
	Route::delete('shop-delete/{id}', 'API\ShopController@destroy');
	
	/* Category */
	Route::get('categories', 'API\CategoryController@index');
	Route::get('category/{id}', 'API\CategoryController@show');
	Route::post('category-add', 'API\CategoryController@store');
	Route::put('category-update/{id}', 'API\CategoryController@update');
	Route::delete('category-delete/{id}', 'API\CategoryController@destroy');

	/* Request */
	Route::get('requests', 'API\RequestController@index');
	Route::get('userRequests', 'API\RequestController@userRequests');
	Route::get('request/{id}', 'API\RequestController@show');
	Route::post('request-add', 'API\RequestController@store');
	Route::put('request-update/{id}', 'API\RequestController@update');
	Route::delete('request-delete/{id}', 'API\RequestController@destroy');

	/* Answer */
	Route::get('answers', 'API\AnswerController@index');
	Route::get('answer/{id}', 'API\AnswerController@show');
	Route::post('answer-add', 'API\AnswerController@store');
	Route::put('answer-update/{id}', 'API\AnswerController@update');
	Route::delete('answer-delete/{id}', 'API\AnswerController@destroy');

	/* Messages */
	Route::get('messages', 'API\MessageController@index');
	Route::get('answerMessages', 'API\MessageController@answerMessages');
	Route::get('message/{id}', 'API\MessageController@show');
	Route::post('message-add', 'API\MessageController@store');
	Route::put('message-update/{id}', 'API\MessageController@update');
	Route::delete('message-delete/{id}', 'API\MessageController@destroy');
	
	/* Car */
	Route::get('cars', 'API\CarController@index');
	Route::get('car/{id}', 'API\CarController@show');
	Route::post('car-add', 'API\CarController@store');
	Route::put('car-update/{id}', 'API\CarController@update');
	Route::delete('car-delete/{id}', 'API\CarController@destroy');

	/* CarBrands */
	Route::get('carbrands', 'API\CarBrandController@index');
	Route::get('carbrand/{id}', 'API\CarBrandController@show');
	Route::post('carbrand-add', 'API\CarBrandController@store');
	Route::put('carbrand-update/{id}', 'API\CarBrandController@update');
	Route::delete('carbrand-delete/{id}', 'API\CarBrandController@destroy');

	/* CarModels */
	Route::get('carmodels', 'API\CarModelController@index');
	Route::get('models', 'API\CarModelController@models');
	Route::get('carmodel/{id}', 'API\CarModelController@show');
	Route::post('carmodel-add', 'API\CarModelController@store');
	Route::put('carmodel-update/{id}', 'API\CarModelController@update');
	Route::delete('carmodel-delete/{id}', 'API\CarModelController@destroy');

});