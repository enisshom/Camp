@extends('layout.default')
@section('content')
    @section('styles')
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.7.2/main.min.css">
        <style>
            html, body {
                margin: 0;
                padding: 0;
                font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                font-size: 14px;
            }
            #calendar {
                max-width: 1100px;
                margin: 40px auto;
            }
        </style>
    @endsection
    <div id='calendar'></div>
@endsection
@push('scripts')
    <script src="{{ asset('js/calendar.js') }}"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                timeZone: 'UTC',
                initialView: 'resourceTimelineDay',
                aspectRatio: 1.5,
                headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                },
                editable: true,
                resourceAreaHeaderContent: 'Rooms',
                resources: 
                // 'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors'
                [
                    {
                        "id": "b",
                        "title": "MARRAKECH",
                        "children": [
                            {
                                "id": "b1",
                                "title": "KING MAR",
                                "eventColor": "green"
                            },
                            {
                                "id": "b2",
                                "title": "LUXE MAR",
                                "eventColor": "red"
                            },
                            {
                                "id": "b3",
                                "title": "STANDARD MAR",
                                "eventColor": "black"
                            }
                        ]
                    },
                    {
                        "id": "c",
                        "title": "ZAGOURA",
                        // "eventColor": "orange"
                        "children": [
                            {
                                "id": "c1",
                                "title": "KING ZAG",
                                "eventColor": "orange"
                            },
                            {
                                "id": "c2",
                                "title": "LUXE ZAG",
                                "eventColor": "pink"
                            },
                            {
                                "id": "c3",
                                "title": "STANDARD ZAG",
                                "eventColor": "gray"
                            }
                        ]
                    },
                    {
                        "id": "d",
                        "title": "MERZOUGA",
                        "children": [
                            {
                                "id": "d1",
                                "title": "KING MER",
                                "eventColor": "purple"
                            },
                            {
                                "id": "d2",
                                "title": "LUXE MER",
                                "eventColor": "yellow"
                            },
                            {
                                "id": "d3",
                                "title": "STANDARD MER",
                                "eventColor": "aqua"
                            }
                        ]
                    },
                    {
                        "id": "d",
                        "title": "AGADIR",
                        "eventColor": "aqua",
                        "children": [
                            {
                                "id": "d1",
                                "title": "KING AGD"
                            },
                            {
                                "id": "d2",
                                "title": "LUXE AGD"
                            },
                            {
                                "id": "d3",
                                "title": "STANDARD AGD"
                            }
                        ]
                    },
                ],
                events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'
            });

            calendar.render();
        });
    </script>
@endpush
{{-- <script src="https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.7.2/main.min.js"></script> --}}

