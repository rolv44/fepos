<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchases extends Model
{
    public $table = 'purchases';
    protected $fillable = [
        'id', 
        'reference_no', 
        'warehouse_id',
        'supplier_id', 
        'supplier_name', 
        'date',
        'note', 
        'total', 
        'user',
        'updated_by', 
        'total_tax',
        'inv_total'
    ];
    public $timestamps = false;
}
