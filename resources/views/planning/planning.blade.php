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
                        "id": "a",
                        "title": " Room A",
                        "eventColor": "pink"
                    },
                    {
                        "id": "b",
                        "title": "Room B",
                        "eventColor": "green"
                    },
                    {
                        "id": "c",
                        "title": "Room C",
                        "eventColor": "orange"
                    },
                    {
                        "id": "d",
                        "title": "Room D",
                        "children": [
                            {
                                "id": "d1",
                                "title": "KING"
                            },
                            {
                                "id": "d2",
                                "title": "LUXE"
                            },
                            {
                                "id": "d3",
                                "title": "STANDARD"
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

