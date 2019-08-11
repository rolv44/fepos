<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuoteItems extends Model
{
    public $table = 'quote_items';
    protected $fillable = [
        'id', 
        'quote_id', 
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
        'discount_id',
        'discount'
    ];
    public $timestamps = false;
}
