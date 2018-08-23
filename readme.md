# Nova Routes
> Quickly view and manage your application's routes.

## Install
You may install the package via composer:

    composer require bencomeau/nova-routes

Next, you should register the package in the `NovaServiceProvider` file:

    use BenComeau\NovaRoutes\NovaRoutes;

    public function tools()
    {
        return [
            // ...
            new NovaRoutes
        ];
    }

And that's it! You will now see a *Routes* option in the Nova sidebar.

## Roadmap
In future releases, I'd like to bring additional functionality to the tool:

- Add header sorting
- Find a nice solution for displaying route middleware
- Make the `route:cache` button function properly

## Contributing
Please feel free to submit pull requests, ask questions, etc. to help move this tool along. Right now the most difficult bug to resolve will be the `route:cache` functionality as it seems to be a slippery slope. Feedback welcome!

## License
Open source under the MIT license.