<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subcategories extends Model
{
    public $table = 'subcategories';
    protected $fillable = ['id', 'category_id', 'code', 'name'];
    public $timestamps = false;
}
