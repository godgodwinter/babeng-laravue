<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\kategori;
use Illuminate\Http\Request;

class kategoricontroller extends Controller
{
    public function index(Request $request)
    {

        $datas = kategori::get();
        # code...
        return response()->json([
            'success' => true,
            'message' => 'Success!',
            'data' =>$datas
        ]);
    }
}
