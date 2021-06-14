<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planner</title>
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
</head>
<body>
    <div id='calendar'></div>
</body>
{{-- <script src="https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.7.2/main.min.js"></script> --}}
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
            resources: 'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors',
            events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline'
        });

        calendar.render();
    });
</script>
</html>