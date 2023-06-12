<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecordInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('record_info', function (Blueprint $table) {
            $table->id();
            $table->integer('month');
            $table->integer('user_id');
            $table->integer('admin_id');
            $table->date('quantity_start_date');
            $table->date('quantity_end_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('record_info');
    }
}
