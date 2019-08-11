<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SaleItems extends Model
{
    public $table = 'sale_items';
    protected $fillable = [
        'id', 
        'sale_id', 
        'product_id',
        'product_code', 
        'product_name', 
        'product_unit',
        'tax_rate_id', 
        'tax', 
        'quantity',
        'unit_price', 
        'gross_total',
        'val_tax',
        'serial_no', 
        'discount_val', 
        'discount',
        'discount_id'
    ];
    public $timestamps = false;
}
