@php
// $resa=;
@endphp
<div class="accordion accordion-solid accordion-toggle-plus" id="accordionExample6">
    @foreach ($reservation->data as $resa)

    <div class="card">
      <div class="card-header" id="headingOne6">
       <div class="card-title collapsed" data-toggle="collapse" data-target="#{{$resa->type}}">
        <i class="fas fa-chess-king"></i> {{$resa->type}}
       </div>
      </div>
      @php
      // dd($resa);
      @endphp
      <div id="{{$resa->type}}" class="collapse" data-parent="#accordionExample6">
       <div class="card-body">
        {{-- @foreach ($resa->rooms as $room) --}}
        
        @foreach ($resa->rooms as $room)
          @foreach ($room->paxs as $pax)
            <div class="row">
            <div class="col-3">
              @if($pax->nbrper==$pax->nper)
              <div class="form-group">
                <select class="form-control myselect" name="" id="select">
                  <option>{{$room->number}}</option>
                  <option value="100">100</option>
                  <option value="101">101</option>
                  <option value="102">102</option>
                  <option value="103">103</option>
                  <option value="104">104</option>
                </select>
              </div>
              @endif
            </div>
            <div class="col-3">
              <div class="form-group">
                <input type="text" class="form-control" name="" id="{{$pax->nper}}_{{$pax->nbrper}}" value="{{$pax->Pers}}" aria-describedby="helpId" placeholder="Nom">
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <input type="text" class="form-control" name=""  aria-describedby="helpId" placeholder="Prénom">
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <select class="form-control" name="" >
                  <option>Maroc</option>
                  <option>USA</option>
                  <option>102</option>
                </select>
              </div>
            </div>
         </div>
          @endforeach
        @endforeach
        
        {{-- @endforeach --}}
         {{-- <div class="row">
           <div class="col-3">
             <div class="form-group">
               
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Nom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Prénom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <select class="form-control" name="" id="">
                 <option>Maroc</option>
                 <option>USA</option>
                 <option>102</option>
               </select>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-3">
             <div class="form-group">
               <select class="form-control myselect" name="" id="select1">
                 <option value="">Room</option>
                 <option value="100">100</option>
                 <option value="101">101</option>
                 <option value="102">102</option>
                 <option value="103">103</option>
                 <option value="104">104</option>
 
               </select>
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Nom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Prénom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <select class="form-control" name="" id="">
                 <option>Maroc</option>
                 <option>USA</option>
                 <option>102</option>
               </select>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-3">
             <div class="form-group">
               <select class="form-control myselect" name="" id="select2">
                 <option value="">Room</option>
                 <option value="100">100</option>
                 <option value="101">101</option>
                 <option value="102">102</option>
                 <option value="103">103</option>
                 <option value="104">104</option>
               </select>
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Nom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Prénom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <select class="form-control" name="" id="">
                 <option>Maroc</option>
                 <option>USA</option>
                 <option>102</option>
               </select>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-3">
             <div class="form-group">
               <select class="form-control myselect" name="" id="select3">
                 <option value="">Room</option>
                 <option value="100">100</option>
                 <option value="101">101</option>
                 <option value="102">102</option>
                 <option value="103">103</option>
                 <option value="104">104</option>
               </select>
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Nom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Prénom">
             </div>
           </div>
           <div class="col-3">
             <div class="form-group">
               <select class="form-control" name="" id="">
                 <option>Maroc</option>
                 <option>USA</option>
                 <option>102</option>
               </select>
             </div>
           </div>
         </div> --}}
       </div>
      </div>
     </div>
        
    @endforeach
    {{-- <div class="card">
     <div class="card-header" id="headingTwo6">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo6">
       <i class="far fa-gem"></i> Luxe
      </div>
     </div>
     <div id="collapseTwo6" class="collapse" data-parent="#accordionExample6">
      <div class="card-body">
       ...
      </div>
     </div>
    </div>
    <div class="card">
     <div class="card-header" id="headingThree6">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseThree6">
       <i class="flaticon2-chart"></i> Standard
      </div>
     </div>
     <div id="collapseThree6" class="collapse" data-parent="#accordionExample6">
      <div class="card-body">
       ...
      </div>
     </div>
    </div> --}}
  </div>

   @push('scripts')
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script src="http://malsup.github.io/jquery.blockUI.js"></script>
   @endpush
   
   <script>
    var options=document.getElementById('select').options;
    // function mise_a_jour(index)
    // {
    // for(j=0;j<=3;j++)
    // {
    //   switch(j)
    //   {
    //     case 0: element="#select"; break;
    //     default: element="#select"+j; break;
    //   }

    // for(i=1;i<options.length;i++)
    // {
    
    //   console.log(element);
    //   chaine='option:contains('+options[i].value+')';
    //   $(element).find(chaine).show();
    // }
    // }
    //   for(i=1;i<=3;i++)
    //     {
    //     element="#select"+i;
    //     chaine='option:contains('+$("#select").val()+')';
    //     $(element).find(chaine).hide();
    //     }
    //   for(i=0;i<=3;i++)
    //     {
    //     switch(i)
    //     {
    //     case 0:
    //     element="#select";
    //     break;
    //     case 1:continue;
    //     default:
    //     element="#select"+i;
    //     break;
    //     }
    //     console.log($("#select1").val());
    //     chaine='option:contains('+$("#select1").val()+')';
    //     $(element).find(chaine).hide();
        
        
    //     }
    //   for(i=0;i<=3;i++)
    //     {
    //     switch(i)
    //     {
    //     case 0:
    //     element="#select";
    //     break;
    //     case 2:continue;
    //     default:
    //     element="#select"+i;
    //     break;
    //     }
    //     console.log($("#select2").val());
    //     chaine='option:contains('+$("#select2").val()+')';
    //     $(element).find(chaine).hide();
          
        $(".myselect").change(function() {
            // Get the selected value
            var selected =[];
            var notSelected =[];
            // Get the ID of this element
            var thisID = $(this).attr("id");
            // Reset so all values are showing:
            $(".myselect option:selected").each(function() {
              if($(this).val() != ""){
                selected.push($(this).val());
                // $(this).show();
              }
            });
            $(".myselect").each(function() {
              // console.log($(this).val());
                selected.forEach(sl => {
                if ($(this).val() != sl) {
                    $("option[value='" + sl + "']", $(this)).hide();
                }
                 if(selected.includes("100"))
                    {
                     console.log('kayna')
                    }
                });
         
               
            });
            console.log(selected);
        });
    });
  </script>
</html>