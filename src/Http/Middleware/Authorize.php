<?php

namespace BenComeau\NovaRoutes\Http\Middleware;

use BenComeau\NovaRoutes\NovaRoutes;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        return resolve(NovaRoutes::class)->authorize($request) ? $next($request) : abort(403);
    }
}
