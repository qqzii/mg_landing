<?php

namespace App\Http\Controllers;

use App\Mail\SendData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class GetDataController extends Controller
{
    public function getData(Request $request)
    {
        $name = $request->input('name');
        $phone = $request->input('phone');


        Mail::to('cambridge.college.ct@gmail.com')->send(new SendData($name, $phone));

        return response()->json(['message' => 'ok']);
    }
}
