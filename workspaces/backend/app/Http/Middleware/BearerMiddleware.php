<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BearerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (! $request->bearerToken()){
            return response('Unauthorized', 401);
        }
        return $next($request);
    }
}
