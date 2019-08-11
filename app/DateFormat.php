<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DateFormat extends Model
{
    public $table = 'date_format';
    protected $fillable = ['id', 'js', 'php','sql'];
    public $timestamps = false;
}
