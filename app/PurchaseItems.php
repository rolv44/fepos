<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchaseItems extends Model
{
    public $table = 'purchase_items';
    protected $fillable = [
        'id', 
        'purchase_id', 
        'product_id',
        'product_code', 
        'product_name', 
        'quantity',
        'unit_price', 
        'tax_amount', 
        'gross_total',
        'tax_rate_id', 
        'tax',
        'val_tax'
    ];
    public $timestamps = false;
}
