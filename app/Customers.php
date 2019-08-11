<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    public $table = 'customers';
    protected $fillable = [
        'id', 
        'name', 
        'company',
        'address', 
        'city', 
        'state',
        'postal_code', 
        'country', 
        'phone',
        'email', 
        'provincia', 
        'canton',
        'distrito', 
        'barrio', 
        'senas',
        'cf1', 
        'cf2', 
        'cf3',
        'cf4', 
        'cf5', 
        'cf6',
    ];
    public $timestamps = false;
}
