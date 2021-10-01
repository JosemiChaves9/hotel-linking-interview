<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
   protected $table = 'offers';
   protected $fillable = ['offer_name', 'offer_id', 'user_id'];
}
