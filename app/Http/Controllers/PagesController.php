<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Classes\Theme\Menu;
use Illuminate\Support\Facades\Session;
use GuzzleHttp\Client;

class PagesController extends Controller
{

    protected $url;

    public function __construct()
    {
        $this->url = config('app.url');
    }
    
    public function index()
    {
        $page_title = 'Dashboard';
        $page_description = 'Some description for the page';
        $url = $this->url . '/api/sites'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);
        return view('camps', compact(['sites', 'page_title', 'page_description']));
    }

    public function camp(Request $request, $id)
    {
        $url = $this->url . '/api/sites/'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);
        $site = $sites[$id - 1];
        session()->put('camp_id',$id);
        session()->save();
        $id = session()->get('camp_id');
        return view('reservations.camp',['site'=>$site,'id'=>$id]);
    }

    public function reservations($id)
    {
        $url = $this->url . '/api/sites/'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);   
        session()->put('camp_id',$id);
        return view('reservations.reservation_camp',['id'=>$id]);
    }

    // public function available_rooms(Request $request)
    // {
    //     $type = ($request['type']);
    //     $numresa = ($request['numresa']);
    //     $datedep = ($request['datedep']);
    //     $datearr = ($request['datearr']);
    //     $url = $this->url . '/api/available_rooms/';
    //     print($url);
    //     $response = file_get_contents($url);
    //     $reservation = json_decode($response);
    //     return $reservation;
    // }

    public function resa_attribute(Request $request)
    {
        $client = new Client();
        $type = ($request['type']);
        $numresa = ($request['numresa']);
        $datedep = ($request['datedep']);
        $datearr = ($request['datearr']);
        $res = $client->request('POST', $this->url.'/api/resa_attribution', [
           'form_params' => [
               'type' => $type,
               'numresa' => $numresa,
               'datedep' => $datedep,
               'datearr' => $datearr
           ]
       ]);
       $reservation = $res->getBody()->getContents();
       $reservation = json_decode($reservation);
       return view('reservations.resa_attribute', compact('reservation','numresa'));
    }

    public function saveAttribution(Request $request)
    {
        // dd(($request->all()));
       $client = new Client();
       $res = $client->request('POST', $this->url.'/api/saveAttrib', [
           'form_params' => [
               'client_id' => 'test_id',
               'secret' => 'test_secret',
           ]
       ]);
    //    echo $res->getStatusCode();
    //    echo $res->getHeader('contentType');
       echo $res->getBody();
    }

    public function planning($id)
    {
        $url = $this->url . '/api/planning/';  
        session()->put('camp_id',$id);
        return view('planning.planning',compact('id'));
    }

    public function check_in(Request $request)
    {
        // $numresa = ($request['numresa']);
        // $url = $this->url . '/api/check_in/' .$numresa;
        // $response = file_get_contents($url); 
        // $checkin = json_decode($response);
        return view('reservations.check_in');
        // return $checkin;
    }
    

    // Datatables
    public function datatables(Request $request)
    {
        $page_title = 'Datatables';
        $page_description = 'This is datatables test page';
        // dd($request->session()->all());
        return view('pages.datatables', compact('page_title', 'page_description'));
    }

    // KTDatatables
    public function ktDatatables()
    {
        $page_title = 'KTDatatables';
        $page_description = 'This is KTdatatables test page';

        return view('pages.ktdatatables', compact('page_title', 'page_description'));
    }

    // Select2
    public function select2()
    {
        $page_title = 'Select 2';
        $page_description = 'This is Select2 test page';
        // return session('camp_id');
        return view('pages.select2', compact('page_title', 'page_description'));
    }

    // jQuery-mask
    public function jQueryMask()
    {
        $page_title = 'jquery-mask';
        $page_description = 'This is jquery masks test page';

        return view('pages.jquery-mask', compact('page_title', 'page_description'));
    }

    // custom-icons
    public function customIcons()
    {
        $page_title = 'customIcons';
        $page_description = 'This is customIcons test page';

        return view('pages.icons.custom-icons', compact('page_title', 'page_description'));
    }

    // flaticon
    public function flaticon()
    {
        $page_title = 'flaticon';
        $page_description = 'This is flaticon test page';

        return view('pages.icons.flaticon', compact('page_title', 'page_description'));
    }

    // fontawesome
    public function fontawesome()
    {
        $page_title = 'fontawesome';
        $page_description = 'This is fontawesome test page';

        return view('pages.icons.fontawesome', compact('page_title', 'page_description'));
    }

    // lineawesome
    public function lineawesome()
    {
        $page_title = 'lineawesome';
        $page_description = 'This is lineawesome test page';

        return view('pages.icons.lineawesome', compact('page_title', 'page_description'));
    }

    // socicons
    public function socicons()
    {
        $page_title = 'socicons';
        $page_description = 'This is socicons test page';

        return view('pages.icons.socicons', compact('page_title', 'page_description'));
    }

    // svg
    public function svg()
    {
        $page_title = 'svg';
        $page_description = 'This is svg test page';

        return view('pages.icons.svg', compact('page_title', 'page_description'));
    }

    // Quicksearch Result
    public function quickSearch()
    {
        return view('layout.partials.extras._quick_search_result');
    }
}
