<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvoiceTypes extends Model
{
    public $table = 'invoice_types';
    protected $fillable = ['id', 'name', 'type'];
    public $timestamps = false;
}
