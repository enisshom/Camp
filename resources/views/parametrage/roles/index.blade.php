@extends('layout.default')
@section('content')
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

<div class="row">
    
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <br>
            <h2 style="text-align: center">Gestion des rôles</h2><br>
        </div>
        <div class="pull-right">
        @can('role-create')
            <a class="btn" href="{{ route('roles.create') }}"><i class="fa fas fa-plus text-success mr-5"></i></a><br><br>
        @endcan
        </div>
    </div>
</div>





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
            <a class="btn" href="{{ route('roles.show',$role->id) }}"><i class="fa far fa-eye text-info mr-5"></i></a>
            @can('role-edit')
                <a class="btn" href="{{ route('roles.edit',$role->id) }}"><i class="fa fas fa-edit text-primary mr-5"></i></a>
            @endcan
            {{-- @can('role-delete')
                {!! Form::open(['method' => 'DELETE','route' => ['roles.destroy', $role->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('x', ['class' => 'btn btn-danger']) !!}
                {!! Form::close() !!}
            @endcan --}}
        </td>
    </tr>
    </tbody>
    @endforeach
</table>


{{-- {!! $roles->render() !!} --}}

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