<?php

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
    return view('auth.login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

<<<<<<< HEAD
Route::post('/user/login', 'UserController@checklogin')->name('checklogin');
=======
Route::resources([
    'billers' => 'BillersController', // Billers
    'categories' => 'CategoriesController', // Categories
    'customers' => 'CustomersController', // Customers
    'damageproducts' => 'DamageProductsController', // DamageProducts
    'dateformat' => 'DateFormatController', // DateFormat
    'deliveries' => 'DeliveriesController', // Deliveries
    'discounts' => 'DiscountsController', // Discounts
    'groups' => 'GroupsController', // Groups
    'invoicetypes' => 'InvoiceTypesController', // InvoiceTypes
    'possettings' => 'PosSettingsController', // PosSettings
    'products' => 'ProductsController', // Products
    'purchaseitems' => 'PurchaseItemsController', // PurchaseItems
    'purchases' => 'PurchasesController', // Purchases
    'quoteitems' => 'QuoteItemsController', // QuoteItems
    'quotes' => 'QuotesController', // Quotes
    'saleitems' => 'SaleItemsController', // SaleItems
    'sales' => 'SalesController', // Sales
    'settings' => 'SettingsController', // Settings
    'subcategories' => 'SubcategoriesController', // Subcategories
]);

>>>>>>> origin/master
// Rutas alternas
Route::get('{path}', 'HomeController@index')->where('path', '([A-z\d-\/_.]+)?');