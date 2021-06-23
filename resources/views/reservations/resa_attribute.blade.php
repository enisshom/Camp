@php
    // dd($reservation->data);
@endphp

<div class="accordion accordion-solid accordion-toggle-plus" id="accordionExample6">
    @foreach ($reservation->data as $resa)
        <div class="card">
            <div class="card-header" id="headingOne6">
                <div class="card-title collapsed type" data-toggle="collapse" type={{ $resa->type }}
                    data-target="#{{ $resa->type }}">
                    <i class="fas fa-chess-king"></i> {{ $resa->type }}
                </div>
            </div>
            <div id="{{ $resa->type }}" class="collapse" data-parent="#accordionExample6">
                <div class="card-body">
                    @foreach ($resa->rooms as $room)
                        @foreach ($room->paxs as $pax)
                            @php
                                $enabled = "";
                                if($pax->chin=='O') {
                                    $enabled = 'disabled';
                                }
                            @endphp
                                <div class="pax" checkin="{{$pax->chin}}">
                                    <div class="form-group row pers">
                                        <div class="col-3">
                                            @if ($pax->nper == 1)

                                                <select class="form-control  roomSelect" title="Chambre" name="nchambre"
                                                    id="select" roomId="{{ $room->room_id }}"
                                                    roomType="{{ $resa->type }}"  {{$enabled}}>
                                                    <option value="{{ $room->number }}" selected>{{ $room->number }}
                                                    </option>
                                                    
                                                    @if ($resa->freeRooms)
                                                        @foreach ($resa->freeRooms as $key => $fr)
                                                            @if ($room->number == $fr)
                                                                @php
                                                                    if ($key = array_search($fr, $resa->freeRooms) !== false) {
                                                                        // unset($resa->freeRooms[$key]);
                                                                    }
                                                                @endphp
                                                            @else
                                                                <option value="{{ $fr }}">{{ $fr }}
                                                                </option>
                                                            @endif
                                                        @endforeach
                                                    @endif
                                                </select>
                                            @endif
                                        </div>
                                        <div class="col-3">
                                            <input type="hidden" class="form-control {{ $room->room_id }}" name="nchambre"
                                                value="{{ $room->number }}" aria-describedby="helpId">
                                            <input type="hidden" class="form-control {{ $pax->xref }}" name="xref"
                                                value="{{ $pax->xref }}" aria-describedby="helpId">
                                            <input type="text" class="form-control" name="nom"
                                                id="{{ $pax->nper }}_{{ $pax->nbrper }}" value="{{ $pax->nom }}"
                                                aria-describedby="helpId" placeholder="Nom" {{$enabled}}>
                                        </div>
                                        <div class="col-3">
                                            <input type="text" class="form-control" name="prenom" aria-describedby="helpId" 
                                                value="{{ $pax->prenom }}" placeholder="Prénom" {{$enabled}}>
                                        </div>
                                        <div class="col-3">
                                            <select class="form-control " name="nationalit" {{$enabled}}>
                                                <option value="" selected>Nationalité</option>
                                            @foreach ($nations as $nat)
                                                @if($nat->cdnat == $pax->nationalit)
                                                    <option value="{{ $nat->cdnat }}" selected>{{ $nat->libnat }}</option>
                                                @else
                                                    <option value="{{ $nat->cdnat }}">{{ $nat->libnat }}</option>
                                                @endif
                                            @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                        @endforeach
                    @endforeach
                </div>
            </div>
        </div>
    @endforeach
</div>

@push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://malsup.github.io/jquery.blockUI.js"></script>
@endpush

<script>
    /*Change room number*/
    $(".roomSelect").change(function() {
        // Get the selected value
        var selected = [];
        var notSelected = [];
        // Get the ID of this element
        var thisID = $(this).attr("id");
        // Reset so all values are showing:
        $(".roomSelect option:selected").each(function() {
            if ($(this).val() != "") {
                selected.push($(this).val());
            }
        });
        $('.roomSelect').find('option').each(function(index, element) {

            if (selected.includes($(this).val())) {
                $(this).hide();
            } else {
                $(this).show();
            }


        });
        console.log(selected);
    });

    /*Option values*/
    $(".roomSelect").bind('change', function() {
        var room = ($(this).attr('roomid'));
        $("." + room).val($(this).val());
    });

    

</script>
