<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');
    $router->get('/clear-cache', 'HomeController@clearCache')->name('clearCache');
    $router->resource('categories', CategoryController::class);
    $router->resource('references', ReferenceController::class);
    $router->resource('attachments', AttachmentController::class);
    $router->resource('posts', PostController::class);
    $router->resource('contacts', ContactController::class);
    $router->resource('sensoria', SensoriumController::class);
    $router->resource('partners', PartnerController::class);
    $router->resource('products', ProductController::class);
    $router->resource('stories', StoryController::class);
    $router->resource('reviews', ReviewController::class);
    $router->resource('files', FileController::class);
    $router->resource('locations',LocationController::class);
    $router->resource('home-sliders',HomeSliderController::class);


});
