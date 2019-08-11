<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    public $table = 'sales';
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
        'inv_discount', 
        'discount_id',
        'user', 
        'updated_by', 
        'paid_by',
        'count', 
        'shipping', 
        'pos',
        'paid', 
        'cc_no',
        'cc_holder',
        'cheque_no'
    ];
    public $timestamps = false;
}
