<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'first_name','last_name','email','email_2','email_3','telephone',
        'name','rfc','street','number','number_2','zip_code','suburb',
        'state','city','country','use_cfdi','uid',
    ];
}
