<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Deliveries extends Model
{
    public $table = 'deliveries';
    protected $fillable = [
        'id', 
        'date', 
        'time', 
        'reference_no',
        'customer', 
        'address', 
        'note',
        'user', 
        'updated_by'
    ];
    public $timestamps = false;
}
