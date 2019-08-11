<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Billers extends Model
{
    public $table = 'billers';
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
        'logo',
        'invoice_footer', 
        'cf1',
        'cf2',
        'cf3',
        'cf4',
        'cf5',
        'cf6'
    ];
    public $timestamps = false;
}
