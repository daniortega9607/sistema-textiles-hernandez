<?php

namespace App\Http\Controllers;

use App\StockMovementDetail;
use App\NotificationEvent;
use App\Entity;
use App\Stock;
use Illuminate\Http\Request;

class StockMovementDetailController extends Controller
{
    public function destroy(StockMovementDetail $stockMovementDetail)
    {
        $fromStock = $stockMovementDetail->stockDetail->stock;
        $toStock = Stock::select('*')->where('office_id',$stockMovementDetail->stockMovement['office_id'])
        ->where('product_id',$fromStock['product_id'])->first();
        $stockMovementDetail->stockDetail->stock_id = $toStock['id'];
        $stockMovementDetail->stockDetail->save();

        $fromStock->stock = $fromStock->stocks()->sum('quantity');
        $fromStock->save();
        $toStock->stock = $toStock->stocks()->sum('quantity');
        $toStock->save();

        $status = $stockMovementDetail->delete();


        $now = date('Y-m-d h:i:s');
        NotificationEvent::insert([
            [
                'entity_id' => Entity::where('name','stock_movements')->first()->id,
                'entity_value_id' => $stockMovementDetail->stockMovement['id'],
                'created_at' => $now,
                'updated_at' => $now,
                'type' => 3
            ],
            [
                'entity_id' => Entity::where('name','stocks')->first()->id,
                'entity_value_id' => $fromStock->id,
                'created_at' => $now,
                'updated_at' => $now,
                'type' => 3
            ],
            [
                'entity_id' => Entity::where('name','stocks')->first()->id,
                'entity_value_id' => $toStock->id,
                'created_at' => $now,
                'updated_at' => $now,
                'type' => 3
            ]
        ]);

        return response()->json([
            'status' => $status,
            'message' => (bool) $status ? trans('global.deleted') : trans('global.error_deleted')
        ]);
    }
}
