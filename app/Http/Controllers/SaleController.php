<?php

namespace App\Http\Controllers;

use App\Sale;
use App\Customer;
use App\NotificationEvent;
use App\Notification;
use App\Entity;
use App\User;
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

        if(isset($request->customer) && is_null($request->customer_id) 
            && !is_null($request->customer)){

            $customer = Customer::create(['name' => $request->customer,'user_id' => $request->user()->id]);
            $sale->customer_id = $customer->id;    
            $sale->save(); 
        }

        $now = date('Y-m-d h:i:s');

        $users = User::where('user_type', 1)->where('id','!=',$request->user()->id)->get();
        $notifications = [];

        foreach ($users as $key => $value) {
            $notifications[] = [
                'entity_id' => Entity::where('name','sales')->first()->id,
                'entity_value_id' => $item->id,
                'created_at' => $now,
                'message' => $request->user()->name.' ha creado una venta',
                'user_id' => $value['id']
            ];
        }
        if(count($notifications) > 0) {
            Notification::insert($notifications);
        }

        NotificationEvent::insert([
            [
                'entity_id' => Entity::where('name','sales')->first()->id,
                'entity_value_id' => $item->id,
                'created_at' => $now,
                'updated_at' => $now,
                'type' => 1
            ],
            [
                'entity_id' => Entity::where('name','stocks')->first()->id,
                'entity_value_id' => NULL,
                'created_at' => $now,
                'updated_at' => $now,
                'type' => 2
            ],
            [
                'entity_id' => Entity::where('name','notifications')->first()->id,
                'entity_value_id' => NULL,
                'created_at' => $now,
                'updated_at' => $now,
                'type' => 2
            ]
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
