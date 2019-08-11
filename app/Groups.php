<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Groups extends Model
{
    public $table = 'groups';
    protected $fillable = ['id', 'name', 'description'];
    public $timestamps = false;
}
