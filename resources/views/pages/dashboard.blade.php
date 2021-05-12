
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" {{ Metronic::printAttrs('html') }} {{ Metronic::printClasses('html') }}>
    <head>
        <meta charset="utf-8"/>

        {{-- Title Section --}}
        <title>{{ config('app.name') }} | @yield('title', $page_title ?? '')</title>

        {{-- Meta Data --}}
        <meta name="description" content="@yield('page_description', $page_description ?? '')"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        {{-- Favicon --}}
        <link rel="shortcut icon" href="{{ asset('media/logos/favicon.ico') }}" />

        {{-- Fonts --}}
        {{ Metronic::getGoogleFontsInclude() }}

        {{-- Global Theme Styles (used by all pages) --}}
        @foreach(config('layout.resources.css') as $style)
            <link href="{{ config('layout.self.rtl') ? asset(Metronic::rtlCssPath($style)) : asset($style) }}" rel="stylesheet" type="text/css"/>
        @endforeach

        {{-- Layout Themes (used by all pages) --}}
        @foreach (Metronic::initThemes() as $theme)
            <link href="{{ config('layout.self.rtl') ? asset(Metronic::rtlCssPath($theme)) : asset($theme) }}" rel="stylesheet" type="text/css"/>
        @endforeach

        {{-- Includable CSS --}}

        @yield('styles')
        <style>
            .kanban-board header {
                font-size: 15px;
                padding: 5px;
            }
            .kanban-board .kanban-drag {
                min-height: 175px;
                padding: 0px;
            }
            .divider{
                margin-top: 15px !important;
                margin-bottom: 5px !important;
            }
        </style>
    </head>

    <body {{ Metronic::printAttrs('body') }} {{ Metronic::printClasses('body') }}>

      
        {{-- @if(config('layout.self.layout') == 'blank') --}}
        @if(config('layout.self.layout') == 'blank')
            
        @else

            @include('layout.base._header-mobile')

            <div class="d-flex flex-column flex-root">
                <div class="d-flex flex-row flex-column-fluid page">

                    <div class="aside aside-left {{ Metronic::printClasses('aside', false) }} d-flex flex-column flex-row-auto" id="kt_aside">

    {{-- Brand --}}
    <div class="brand flex-column-auto {{ Metronic::printClasses('brand', false) }}" id="kt_brand">
        <div class="brand-logo">
            <a href="{{ url('/') }}">
                {{-- <img alt="{{ config('app.name') }}" src="{{ asset('media/logos/'.$kt_logo_image) }}"/> --}}
            </a>
        </div>

        @if (config('layout.aside.self.minimize.toggle'))
            <button class="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                {{ Metronic::getSVG("media/svg/icons/Navigation/Angle-double-left.svg", "svg-icon-xl") }}
            </button>
        @endif

    </div>

    {{-- Aside menu --}}
    <div class="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">

        @if (config('layout.aside.self.display') === false)
            <div class="header-logo">
                <a href="{{ url('/') }}">
                    <img alt="{{ config('app.name') }}" src="{{ asset('media/logos/'.$kt_logo_image) }}"/>
                </a>
            </div>
        @endif

        <div
            id="kt_aside_menu"
            class="aside-menu my-4 {{ Metronic::printClasses('aside_menu', false) }}"
            data-menu-vertical="1"
            {{ Metronic::printAttrs('aside_menu') }}>

            <ul class="menu-nav">
                {{-- {{ Menu::renderVerMenu(config('menu_aside.items')) }} --}}

         
            </ul>
        </div>
    </div>

</div>

                    <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">

                        @include('layout.base._header')
                        
                        <div class="content {{ Metronic::printClasses('content', false) }} d-flex flex-column flex-column-fluid" id="kt_content">

                            {{-- @if(config('layout.subheader.display'))
                                @if(array_key_exists(config('layout.subheader.layout'), config('layout.subheader.layouts')))
                                    @include('layout.partials.subheader._'.config('layout.subheader.layout'))
                                @else
                                    @include('layout.partials.subheader._'.array_key_first(config('layout.subheader.layouts')))
                                @endif
                            @endif --}}

                            {{-- @include('layout.base._content') --}}
                            <div class="d-flex flex-column flex-root">
                                {{-- @yield('content') --}}
                                <div class="row">
        @php
            // dd($sites);
        @endphp
        @foreach ($sites as $site)
        
        <div class="col-6 col-md-3 col-sm-4 col-lg-3">
            <div data-id="_backlog" data-order="1" class="kanban-board shadow-lg bg-white " style="border-radius: 0px; height: calc(100% - 80px); width: 100%;margin-top:10px; cursor:pointer;">
                <header class="kanban-board-header bg-dark" style="color:white ;text-align: center;">
                <div class="kanban-title-board">
                    <span class="navi-icon">
                        <i class="la la-campground"></i>
                        </span>
                    {{-- <span class="navi-text ville" id="{{$site['id']}}" style="margin-left: 10px;">{{$site['ville']}}</span> --}}
                    <span class="navi-text ville" id="{{$site->id}}" style="margin-left: 10px;">{{$site->lib_class}}</span>
                </div>
                </header>
                <main class="kanban-drag" style="text-align: center;">
                    <span class="card-title font-weight text-dark font-size-h1 mb-0 mt-6 d-block link">{{$site->site_occuped}}/{{$site->site_cap}}</span>    
                    <h5>Rooms</h5>
                    <hr class="divider">
                    <span class="font-size-h3" style="color: black;">{{$site->site_pax}}
                        <i class="fas fa-male icon-lg" style="color: black"></i>
                    </span>
                    {{-- <div class="bg-dark"><span style="color: #fff">Total Pax:</span></div> --}}
                    {{-- <span class="card-title font-weight text-dark font-size-h5 mb-0 mt-6 d-block link">Rooms</span>     --}}
                    {{-- <span class="card-title font-weight text-dark font-size-h4 mb-0 mt-6 d-block">Capacité</span> --}}
                </main>
                {{-- <footer></footer> --}}
            </div>
        </div>
        @endforeach
    </div>
                            </div>
                        </div>

                        @include('layout.base._footer')
                    </div>
                </div>
            </div>

        @endif

        @if (config('layout.self.layout') != 'blank')

            @if (config('layout.extras.search.layout') == 'offcanvas')
                @include('layout.partials.extras.offcanvas._quick-search')
            @endif

            @if (config('layout.extras.notifications.layout') == 'offcanvas')
                @include('layout.partials.extras.offcanvas._quick-notifications')
            @endif

            @if (config('layout.extras.quick-actions.layout') == 'offcanvas')
                @include('layout.partials.extras.offcanvas._quick-actions')
            @endif

            @if (config('layout.extras.user.layout') == 'offcanvas')
                @include('layout.partials.extras.offcanvas._quick-user')
            @endif

            @if (config('layout.extras.quick-panel.display'))
                @include('layout.partials.extras.offcanvas._quick-panel')
            @endif

            @if (config('layout.extras.toolbar.display'))
                {{-- @include('layout.partials.extras._toolbar') --}}
            @endif

            @if (config('layout.extras.chat.display'))
                @include('layout.partials.extras._chat')
            @endif

            @include('layout.partials.extras._scrolltop')

        @endif


        <script>var HOST_URL = "{{ route('quick-search') }}";</script>

        {{-- Global Config (global config for global JS scripts) --}}
        <script>
            var KTAppSettings = {!! json_encode(config('layout.js'), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES) !!};
        </script>

        {{-- Global Theme JS Bundle (used by all pages)  --}}
        @foreach(config('layout.resources.js') as $script)
            <script src="{{ asset($script) }}" type="text/javascript"></script>
        @endforeach

        {{-- Includable JS --}}
        @stack('scripts')
        <script>
            $(".kanban-board").on('click',function() {
                var id = $(this).find('.ville')[0].id;
                var ville = $(this).find('.ville').html();
                $(location).attr('href','/camp/'+id);
            });           
        </script>

        
    </body>
</html>

