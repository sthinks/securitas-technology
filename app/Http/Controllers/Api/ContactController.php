<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function submit(Request $request) {
        echo var_dump($request);
        die();
        $validator = Validator::make(
            $request->all(),
            [
                "name" => "string|required|max:255",
                "mail" => "email:rfc,dns|required|max:255",
                "city" => "string|required|max:255",
                "message" => "string|max:8000|required",
                "gdpr" => "nullable|string",
                "fullurl" => "nullable|string",
                "phone"=>"nullable"
            ]
        );
        if($validator->fails()){
            return response()->json(
                $validator->errors()->toArray(),
                400
            );
        }
        $validatedData = $validator->validated();
        $validatedData["ip"] = $request->ip();
        $validatedData["user_agent"] = $request->userAgent();
        $validatedData["gdpr"] = isset($validatedData["gdpr"]);
        $contact = Contact::create($validatedData);
        return response()->json(
            $contact->makeHidden(["ip", "user_agent", "gdpr", "id", "created_at",'fullUrl', "updated_at"]),
            201
        );
    }
}
