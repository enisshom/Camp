@extends('layout.default')
@section('content')

<div class="row">
    
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <br>
            <h2 style="text-align: center">Gestion des rôles</h2><br>
        </div>
        <div class="pull-right">
        @can('role-create')
            <button type="button" class="btn add_role" data-target="#create">
                <i class="fa fas fa-plus text-success mr-5"></i><br><br>
            </button>
        @endcan
        </div>
        <!-- Modal add role-->
      <div class="modal fade" id="create" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg" style="width: auto" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ajouter rôle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i aria-hidden="true" class="ki ki-close"></i>
                    </button>
                </div>
                <div class="modal-body roles">

                </div>
            </div>
        </div>
      </div>
    </div>
</div>

{{-- ERROR MESSAGE --}}
@if (count($errors) > 0)
    <div class="alert alert-danger">
        <strong>Whoops!</strong> Erreur!<br><br>
        <ul>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
        </ul>
    </div>
@endif

{{-- SUCCESS MESSAGE --}}
@if ($message = Session::get('success'))
    <div class="alert alert-custom alert-notice alert-light-primary  " role="alert">
        <div class="alert-icon"><i class="flaticon-warning"></i></div>
        <div class="alert-text">{{$message}}</div>
        <div class="alert-close">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"><i class="ki ki-close"></i></span>
            </button>
        </div>
    </div>
@endif

@push('scripts')
  <script>
    // ADD ROLE MODAL
    $(".add_role").on('click', function() {
      $.ajax({
          type: 'GET',
          url: "{{ route('roles.create') }}",
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
          },
          data: {},
          success: function(data) {
              $(".roles").html(data);
              $("#create").modal('toggle');
          }
      });
    });

    // EDIT ROLE MODAL
    $(".update_role").on('click', function() {
      var id = $(this).attr('data-id');
      $.ajax({
          type: 'GET',
          url: 'roles/' + id + '/edit',
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
          },
          data: {},
          success: function(data) {
              $(".edit-role").html(data);
              $("#edit").modal('toggle');
          }
        });
    });

    // SHOW ROLE MODAL
    $(".show_role").on('click', function() {
      var id = $(this).attr('data-id');
      $.ajax({
          type: 'GET',
          url: 'roles/' + id,
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
          },
          data: {},
          success: function(data) {
              $(".show-role").html(data);
              $("#show").modal('toggle');
          }
        });
    });
  </script>
@endpush

<table class="table">
<thead class="thead-dark">
  <tr>
     <th>#</th>
     <th>Rôle</th>
     <th width="280px">Action</th>
  </tr>
</thead>
    @foreach ($roles as $key => $role)
    <tbody>
    <tr>
        <td>{{ $role->id }}</td>
        <td>{{ $role->name }}</td>
        <td>
            <a class="btn show_role" data-target="#show" data-id="{{ $role->id }}"><i class="fa far fa-eye text-info mr-5"></i></a>
            @can('role-edit')
                <a class="btn update_role" data-target="#edit" data-id="{{ $role->id }}"><i class="fa fas fa-edit text-primary mr-5"></i></a>
            @endcan
        </td>

        <!-- Modal edit role-->
        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" style="width: auto" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modifier rôle</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i aria-hidden="true" class="ki ki-close"></i>
                        </button>
                    </div>
                    <div class="modal-body edit-role">
    
                    </div>
                </div>
            </div>
        </div>  
  
        <!-- Modal show role-->
        <div class="modal fade" id="show" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" style="width: auto" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Afficher rôle</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i aria-hidden="true" class="ki ki-close"></i>
                        </button>
                    </div>
                    <div class="modal-body show-role">
    
                    </div>
                </div>
            </div>
        </div>
    </tr>
    </tbody>
    @endforeach
</table>

@endsection
@push('scripts')
    <script >
         $(document).ready(function () {
                $('.close').on('click',function(){
                    $('.alert').fadeOut('slow');
                });
            });
    </script>
@endpush