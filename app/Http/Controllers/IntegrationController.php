<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IntegrationController extends Controller
{
    public function action(Request $request)
    {
        $integration = null;

        switch ($request->integration) {
            case 'factura.com':
                $integration = [
                    "Content-Type: application/json",
                    "F-PLUGIN: ".'9d4095c8f7ed5785cb14c0e3b033eeb8252416ed',
                    "F-Api-Key: ".env('FACTURA_API_KEY'),
                    "F-Secret-Key: " .env('FACTURA_SECRET_KEY')
                ];
                break;
        }

        if (!is_null($integration)) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $request->url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($ch, CURLOPT_HEADER, FALSE);
            if(isset($request->type) && $request->type == 'post') {
                curl_setopt($ch, CURLOPT_POST, TRUE);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $request->data);
            }
            curl_setopt($ch, CURLOPT_HTTPHEADER, $integration);
    
            $response = curl_exec($ch);
            curl_close($ch);
    
            return response()->json(json_decode($response));
        }
        
        return response()->json(['status'=>false,'message'=>'No existe la ruta especificada'],404);
    }
}
