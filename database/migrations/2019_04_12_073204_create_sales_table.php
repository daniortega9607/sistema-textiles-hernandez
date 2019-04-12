<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('office_id');
            $table->unsignedInteger('customer_id')->nullable();
            $table->decimal('balance',10,2)->default(0);
            $table->decimal('total',10,2)->default(0);
            $table->decimal('revenue',10,2)->default(0);
            $table->decimal('commission',10,2)->default(0);
            $table->tinyInteger('status')->default(2);//1) Canceled, 2) Pending, 3) Completed
            $table->unsignedInteger('user_id');
            $table->timestamps();
            $table->softDeletes();
        });

        DB::table('entities')->insert([
            'name' => 'sales'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
