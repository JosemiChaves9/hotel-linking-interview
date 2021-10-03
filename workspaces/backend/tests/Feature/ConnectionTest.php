<?php

namespace Tests\Feature;

use Facade\Ignition\Support\FakeComposer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;
use Faker\Generator as Faker;




class ConnectionTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     * 
     */
    

   
    public function test_a_simple_request()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_a_inexistent_route()
    {
        $response = $this->get('/inexistent');

        $response->assertStatus(404);
    }

    public function test_register_a_user(){

         $response= $this->post('api/auth/register', ["name"=>"Test User", "email" =>"test@test.com", "password"=>"Password12345", "password_confirmation"=>"Password12345"]);

        $response->assertStatus(201);
    }

    public function test_login(){

         $response= $this->post('api/auth/login', ["email" =>"test@test.com", "password"=>"Password12345"]);

        $response->assertStatus(200);
    }

    public function test_create_an_offer(){
        
         $response= $this->post('api/offers/create-offer', ["offer_name"=>"Test offer"], ['Authorization' => 'testToken',
                    'Accept' => "application/json, text/plain, */*"
                 ]);

        $response->assertStatus(201);
    }

    public function test_delete_user(){
        $response = $this->delete('/api/auth/delete-user', ["email"=>"test@test.com"]);

        $response->assertStatus(200);
    }

    
}
