<?php

namespace App\Http\Controllers;

use App\Purchase;
use App\NotificationEvent;
use App\Entity;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function index(Request $request)
    {
        $query = Purchase::select('*');
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
        $purchase = $request->only([
            'office_id','supplier_id','currency','balance','total','status'
        ]);
        $purchase['user_id'] = $request->user()->id;

        $item = Purchase::create($purchase);

        NotificationEvent::create([
            'entity_id' => Entity::where('name','purchases')->first()->id,
            'entity_value_id' => $item->id,
            'type' => 1
        ]);

        return response()->json([
            'status' => (bool) $item,
            'data'   => $item,
            'message' => (bool) $item ? trans('global.created') : trans('global.error_created')
        ]);
    }

    public function show(Purchase $purchase)
    {
        return response()->json($purchase,200);         
    }

    public function destroy(Purchase $purchase)
    {
        $status = $purchase->delete();

        NotificationEvent::create([
            'entity_id' => Entity::where('name','purchases')->first()->id,
            'entity_value_id' => $purchase->id,
            'type' => 4
        ]);

        return response()->json([
            'status' => $status,
            'message' => (bool) $status ? trans('global.deleted') : trans('global.error_deleted')
        ]);
    }
}
