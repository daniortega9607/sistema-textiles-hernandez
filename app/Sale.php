<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'office_id','customer_id','balance','total','revenue','commission','status','user_id'
    ];
    
    public function office()
    {
        return $this->belongsTo('App\Office')->withTrashed();
    }

    public function customer()
    {
        return $this->belongsTo('App\Customer')->withTrashed();
    }

    public function user()
    {
        return $this->belongsTo('App\User')->withTrashed();
    }
}
