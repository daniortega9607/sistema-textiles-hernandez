<?php

namespace App\Http\Controllers;

use App\StockDetail;
use App\NotificationEvent;
use App\Entity;
use Illuminate\Http\Request;

class StockDetailController extends Controller
{
    public function store(Request $request)
    {
        $stockDetail = $request->only([
            'stock_id','quantity'
        ]);
        $stockDetail['user_id'] = $request->user()->id;

        $item = StockDetail::create($stockDetail);

        $item->stock->stock = $item->stock->details()->sum('quantity');
        $item->stock->save();

        NotificationEvent::create([
            'entity_id' => Entity::where('name','stocks')->first()->id,
            'entity_value_id' => $item->stock_id,
            'type' => 3
        ]);

        return response()->json([
            'status' => (bool) $item,
            'data'   => $item,
            'message' => (bool) $item ? trans('global.created') : trans('global.error_created')
        ]);
    }

    public function show(StockDetail $stockDetail)
    {
        return response()->json($stockDetail,200);         
    }

    public function update(Request $request, StockDetail $stockDetail)
    {
        $status = $stockDetail->update(
            $request->only(['quantity'])
        );

        NotificationEvent::create([
            'entity_id' => Entity::where('name','stocks')->first()->id,
            'entity_value_id' => $stockDetail->stock_id,
            'type' => 3
        ]);

        return response()->json([
            'status' => $status,
            'message' => (bool) $status ? trans('global.updated') : trans('global.error_updated')
        ]);
    }

    public function destroy(StockDetail $stockDetail)
    {
        $status = $stockDetail->delete();

        $stockDetail->stock->stock = $stockDetail->stock->details()->sum('quantity');
        $stockDetail->stock->save();

        NotificationEvent::create([
            'entity_id' => Entity::where('name','stocks')->first()->id,
            'entity_value_id' => $stockDetail->stock_id,
            'type' => 3
        ]);

        return response()->json([
            'status' => $status,
            'message' => (bool) $status ? trans('global.deleted') : trans('global.error_deleted')
        ]);
    }
}
