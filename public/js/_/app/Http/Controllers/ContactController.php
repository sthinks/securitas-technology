<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'kvk' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $validated = $validator->validated();
        $validated['ip'] = $request->ip();
        $validated['agent'] = $request->userAgent();
        $contact = Contact::create($validated);

        return response()->json("Mesajınız Gönderildi!", 201);
    }
}
