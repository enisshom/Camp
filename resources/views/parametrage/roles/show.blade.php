
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
