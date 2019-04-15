<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $fillable = [
        'office_id','product_id','stock'
    ];
    
    public function office()
    {
        return $this->belongsTo('App\Office')->withTrashed();
    }

    public function product()
    {
        return $this->belongsTo('App\Product')->withTrashed();
    }

    public function details()
    {
        return $this->hasMany('App\StockDetail');
    }

    public function fabric()
    {
        return $this->hasOneThrough('App\Fabric', 'App\Product','id','id','product_id','fabric_id')->withTrashed();
    }

    public function design()
    {
        return $this->hasOneThrough('App\Design', 'App\Product','id','id','product_id','design_id')->withTrashed();
    }

    public function color()
    {
        return $this->hasOneThrough('App\Color', 'App\Product','id','id','product_id','color_id')->withTrashed();
    }

    protected $casts = [
        'office_id' => 'integer',
        'product_id' => 'integer',
    ];
}
