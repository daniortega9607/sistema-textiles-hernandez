<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name', 50)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('email_2', 50)->nullable();
            $table->string('email_3', 50)->nullable();
            $table->string('telephone', 20)->nullable();
            $table->string('name', 50)->nullable();
            $table->string('rfc', 15)->nullable();
            $table->string('street', 80)->nullable();
            $table->string('number', 5)->nullable();
            $table->string('number_2', 5)->nullable();
            $table->string('zip_code', 8)->nullable();
            $table->string('suburb', 25)->nullable();
            $table->string('state', 35)->nullable();
            $table->string('city', 25)->nullable();
            $table->string('country', 5)->nullable();
            $table->string('use_cfdi', 5)->nullable();
            $table->string('uid', 18)->nullable();
            $table->integer('credit_days')->nullable();
            $table->string('comments',1000)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        DB::table('entities')->insert([
            'name' => 'customers'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
