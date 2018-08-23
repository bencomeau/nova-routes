<?php

namespace BenComeau\NovaRoutes\Http\Controllers;

use Closure;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Artisan;

class NovaRoutesController
{
    /**
     * Return a list of the application routes.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return \Illuminate\Http\Response
     */
    public function index(Router $router)
    {
        // This is largely taken from the Artisan Console
        // command route:list with very minor changes.
        return collect($router->getRoutes())->map(function ($route) {
            return [
                'domain' => $route->domain(),
                'method' => implode('|', $route->methods()),
                'uri' => $route->uri(),
                'name' => $route->getName(),
                'action' => ltrim($route->getActionName(), '\\'),
                'middleware' => collect($route->gatherMiddleware())->map(function ($middleware) {
                    return $middleware instanceof Closure ? 'Closure' : $middleware;
                })->implode(','),
                'show' => true
            ];
        })->all();
    }

    /**
     * Cache the application routes using the
     * predefine Artisan Console command.
     *
     * @return \Illuminate\Http\Response
     */
    public function cache()
    {
        // Calling the Artisan command does not work here; it will only generate
        // about 1/3 of the routes, which are from this package. A workaround
        // would be to use exec() and cd to application path but this feels
        // terribly hacky...so I will continue to research and update.
        return response('Feature coming soon! Please see Roadmap for details.');
    }

    /**
     * Clear the application route cache using
     * the predefined Artisan Console command.
     *
     * @return \Illuminate\Http\Response
     */
    public function clear()
    {
        try {
            $exitCode = Artisan::call('route:clear');
        } catch (\Exception $e) {
            return response($e->getMessage(), 422);
        }

        return $exitCode === 0 ? 'Route cache cleared!' : response('Error occurred while clearing route cache', 422);
    }
}
