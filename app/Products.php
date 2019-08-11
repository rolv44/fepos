<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    public $table = 'products';
    protected $fillable = [
        'id', 
        'code',
        'name',
        'unit',
        'size',
        'cost',
        'price',
        'alert_quantity',
        'image',
        'category_id',
        'subcategory_id',
        'cf1',
        'cf2',
        'cf3',
        'cf4',
        'cf5',
        'cf6',
        'quantity',
        'tax_rate',
        'track_quantity',
        'details'
    ];
    public $timestamps = false;
}
