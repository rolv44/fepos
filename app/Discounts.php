<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Discounts extends Model
{
    public $table = 'discounts';
    protected $fillable = ['id', 'name', 'discount', 'type'];
    public $timestamps = false;
}
