<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(){
        $data = Product::latest()->get();
        return $data;
    }

    public function store(Request $request){

        Product::create($request->all());
        return response()->json([
            'success' => 1
        ]);
    }

    public function update($id, Request $request){
        Product::find($id)->update($request->all());
    }

    public function destroy($id){
        Product::find($id)->delete();
    }

    public function show($id){
        return Product::find($id);
    }
}
