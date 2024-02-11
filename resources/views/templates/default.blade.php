<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vindecks&trade; Dealership Management System | @yield('pageTitle')</title>
</head>
<body>
    <noscript>You must have javascript enabled in your web browser to use this application.</noscript>
    <main class="pageWrapper">
        @include('templates.partials.header')
        @yield('content')
    </main>
</body>
    <script type="text/javascript" src="{{ asset('js/init.js') }}"></script>
</html>