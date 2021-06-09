@extends('layout.default')
@section('content')

<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <br>
            <h2 style="text-align: center">Informations du rôle</h2><br>
        </div>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('roles.index') }}"><i class="fa fas fa-arrow-left"></i></a><br><br><br>
        </div>
    </div>
</div>


<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Nom :</strong>
            {{ $role->name }}
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Les permissions : </strong><br><br>
            @if(!empty($rolePermissions))
                @foreach($rolePermissions as $v)
                    <label class="badge badge-danger" style="color: black">{{ $v->name }},</label>
                @endforeach
            @endif
        </div>
    </div>
</div>
@endsection