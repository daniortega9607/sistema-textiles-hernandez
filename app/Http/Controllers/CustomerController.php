<?php

namespace App\Http\Controllers;

use App\Customer;
use App\NotificationEvent;
use App\Entity;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(Customer::all());
    }

    public function store(Request $request)
    {
        $data = $request->only([
            'first_name','last_name','email','email_2','email_3','telephone',
            'name','rfc','street','number','number_2','zip_code','suburb',
            'state','city','country','use_cfdi','uid'
        ]);
        $data['user_id'] = $request->user()->id;

        $item = Customer::create($data);

        NotificationEvent::create([
            'entity_id' => Entity::where('name','customers')->first()->id,
            'entity_value_id' => $item->id,
            'type' => 1
        ]);

        return response()->json([
            'status' => (bool) $item,
            'data' => $item,
            'message' => (bool) $item ? trans('global.created') : trans('global.error_created')
        ]);
    }

    public function show(Request $request, Customer $customer)
    {
        return response()->json($customer);
    }

    public function update(Request $request, Customer $customer)
    {
        $data = $request->only([
            'first_name','last_name','email','email_2','email_3','telephone',
            'name','rfc','street','number','number_2','zip_code','suburb',
            'state','city','country','use_cfdi','uid'
        ]);

        $status = $customer->update($data);

        NotificationEvent::create([
            'entity_id' => Entity::where('name','customers')->first()->id,
            'entity_value_id' => $customer->id,
            'type' => 3
        ]);
        
        return response()->json([
            'status' => (bool) $status,
            'data' => $customer,
            'message' => (bool) $status ? trans('global.updated') : trans('global.error_updated')
        ]);
    }

    public function destroy(Customer $customer)
    {
        $status = $customer->delete();

        NotificationEvent::create([
            'entity_id' => Entity::where('name','customers')->first()->id,
            'entity_value_id' => $customer->id,
            'type' => 4
        ]);
        
        return response()->json([
            'status' => (bool) $status,
            'message' => (bool) $status ? trans('global.deleted') : trans('global.error_deleted')
        ]);
    }
}
