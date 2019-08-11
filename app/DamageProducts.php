<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DamageProducts extends Model
{
    public $table = 'damage_products';
    protected $fillable = [
        'id', 
        'date', 
        'product_id',
        'quantity', 
        'warehouse_id', 
        'note',
        'user', 
        'updated_by'
    ];
    public $timestamps = false;
}
