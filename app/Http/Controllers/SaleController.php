<?php

namespace App\Http\Controllers;

use App\Sale;
use App\NotificationEvent;
use App\Entity;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index(Request $request)
    {
        $query = Sale::select('*');
        if (isset($request->search)) {
            $query->where('name','like','%'.$request->search.'%');
        }
        $query->orderBy('created_at','desc');
        if (isset($request->paginate)) {
            $paginate = $request->paginate;
            return response()->json($query->paginate($paginate),200);
        }
        return response()->json($query->get(),200);
    }

    public function store(Request $request)
    {
        $sale = $request->only([
            'office_id','customer_id','balance','total','revenue','commission'
        ]);
        $sale['user_id'] = $request->user()->id;

        $item = Sale::create($sale);

        NotificationEvent::create([
            'entity_id' => Entity::where('name','sales')->first()->id,
            'entity_value_id' => $item->id,
            'type' => 1
        ]);

        return response()->json([
            'status' => (bool) $item,
            'data'   => $item,
            'message' => (bool) $item ? trans('global.created') : trans('global.error_created')
        ]);
    }

    public function show(Sale $sale)
    {
        return response()->json($sale,200);         
    }

    public function destroy(Sale $sale)
    {
        $status = $sale->delete();

        NotificationEvent::create([
            'entity_id' => Entity::where('name','sales')->first()->id,
            'entity_value_id' => $sale->id,
            'type' => 4
        ]);

        return response()->json([
            'status' => $status,
            'message' => (bool) $status ? trans('global.deleted') : trans('global.error_deleted')
        ]);
    }
}
