<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PosSettings extends Model
{
    public $table = 'pos_settings';
    protected $fillable = [
        'pos_id', 
        'cat_limit', 
        'pro_limit',
        'default_category', 
        'default_customer', 
        'default_biller',
        'display_time', 
        'cf_title1', 
        'cf_title2',
        'cf_value1', 
        'cf_value2'
    ];
    public $timestamps = false;
}
