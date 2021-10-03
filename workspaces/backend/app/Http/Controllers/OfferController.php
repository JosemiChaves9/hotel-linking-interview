<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OfferController extends Controller
{

    public function createOffer(Request $request){
        $offer = new Offer;
        $offer->offer_id = uniqid();
        $offer->offer_name = $request->offer_name;
        $offer->user_id = '';
        $offer->save();
        
        return response()->json(["message" => "Offer created"], 201);
    }

    public function getOffers(){
        $offers = DB::table('offers')->where('user_id', '')->get();
        return response($offers, 200);
    }

     public function getOffersForUser($user_id){
        $offers = DB::table('offers')->where('user_id', $user_id)->get();
        return response($offers, 200);
    }

    public function obtainOffer(Request $request){
        if (DB::table('offers')->where('offer_id', $request->offer_id)->exists()){
           DB::table('offers')->where('offer_id', $request->offer_id)->update(['user_id'=> $request->user_id]);

           return response()->json(["message"=>'Offer added to your profile'], 200);
        } else {
            return response()->json([
                "message"=>"This offer doesn't exists"
            ], 404);
        }

    }

    public function redeemOffer(Request $request){
         if (DB::table('offers')->where('offer_id', $request->offer_id)->exists()){
           DB::table('offers')->where('offer_id', $request->offer_id)->delete();

           return response()->json(["message"=>'Offer redeemed!'], 200);
        } else {
            return response()->json([
                "message"=>"This offer doesn't exists"
            ], 404);
        }
    }
    
   

}
