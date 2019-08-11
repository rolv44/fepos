<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quotes extends Model
{
    public $table = 'quotes';
    protected $fillable = [
        'id', 
        'reference_no', 
        'warehouse_id',
        'biller_id', 
        'biller_name', 
        'customer_id',
        'customer_name', 
        'date', 
        'note',
        'internal_note', 
        'inv_total',
        'total_tax',
        'total', 
        'invoice_type', 
        'in_type',
        'total_tax2', 
        'tax_rate2_id', 
        'user',
        'updated_by', 
        'inv_discount', 
        'discount_id',
        'shipping'
    ];
    public $timestamps = false;
}
