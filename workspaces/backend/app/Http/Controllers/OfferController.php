<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function createOffer(Request $request){
        $offer = new Offer;
        $offer->offer_id = uniqid();
        $offer->offer_name = $request->offer_name;
        $offer->user_id = '';
        $offer->save();

        return response()->json(["message" => "Offer created", 201]);
    }

    public function getOffers(){
        $offers = Offer::get()->toJson();
        return response($offers, 200);
    }

    public function obtainOffer($offer_id){
        if (Offer::where('offer_id', $offer_id)->exists()){
            $offer = Offer::where('offer_id', $offer_id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($offer, 200);
        } else {
            return response()->json([
                "message"=>$offer_id
            ], 404);
        }

    }

}
