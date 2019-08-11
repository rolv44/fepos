<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    public $table = 'settings';
    protected $fillable = [
        'setting_id', 
        'logo', 
        'logo2',
        'site_name', 
        'language', 
        'default_warehouse',
        'currency_prefix', 
        'default_invoice_type', 
        'default_tax_rate',
        'rows_per_page', 
        'no_of_rows',
        'total_rows',
        'version', 
        'default_tax_rate2', 
        'dateformat',
        'sales_prefix',
        'quote_prefix', 
        'purchase_prefix', 
        'transfer_prefix',
        'barcode_symbology', 
        'theme', 
        'product_serial',
        'default_discount', 
        'discount_option', 
        'discount_method',
        'tax1', 
        'tax2',
        'restrict_sale',
        'restrict_user', 
        'restrict_calendar', 
        'bstatesave'
    ];
    public $timestamps = false;
}
