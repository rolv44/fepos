<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('billers', function (Blueprint $table) {
            $table->integer('id');
            $table->string('name', 55);
            $table->string('company', 255);
            $table->string('address', 255);
            $table->string('city', 55);
            $table->string('state', 55);
            $table->string('postal_code', 8);
            $table->string('country', 55);
            $table->string('phone', 20);
            $table->string('email', 100);
            $table->string('logo', 100);
            $table->mediumText('invoice_footer');
            $table->string('cf1');
            $table->string('cf2');
            $table->string('cf3');
            $table->string('cf4');
            $table->string('cf5');
            $table->string('cf6');
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('billers');
    }
}
