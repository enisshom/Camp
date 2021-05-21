<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Classes\Theme\Menu;
use Illuminate\Support\Facades\Session;

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

        // Menu::renderVerMenu($items);


        $url = $this->url . '/api/sites'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);
        return view('cards', compact(['sites', 'page_title', 'page_description']));
        // return dd($sites);
    }

    // public function camp($ville)
    // {
    //     $url = 'http://192.168.1.18/api/sites/'.$ville; 
    //     return view('camp',['ville'=>$ville]);
    // }


    public function camp(Request $request, $id)
    {
        $url = $this->url . '/api/sites/'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);
        $site = $sites[$id - 1];
        session()->put('camp_id',$id);
        session()->save();
        $id = session()->get('camp_id');
        // dd(session()->get('camp_id'));
        return view('reservations.camp',['site'=>$site,'id'=>$id]);
    }

    public function reservations($id)
    {
        // dd($id);
        $url = $this->url . '/api/sites/'; 
        $response = file_get_contents($url); 
        $sites = json_decode($response);   
        // $id = session()->get('camp_id');
        session()->put('camp_id',$id);
        
        // session()->save();
        // dd($site);
        // dd(session()->get('camp_id'));
        return view('reservations.reservation_camp',['id'=>$id]);
    }

    public function resa_attribute(Request $request)
    {
        $numresa = ($request['numresa']);
        $datedep = ($request['datedep']);
        $datearr = ($request['datearr']);
        $url = $this->url . '/api/resa_attribution/' . $numresa;
        $response = file_get_contents($url);
        $reservation = json_decode($response);
        return view('reservations.resa_attribute', compact('reservation','numresa','datedep','datearr'));
    }

    public function available_rooms(Request $request)
    {
        $type = ($request['type']);
        $numresa = ($request['numresa']);
        $datedep = ($request['datedep']);
        $datearr = ($request['datearr']);
        $url = $this->url . '/api/available_rooms/' . $type . '/' .$numresa;
        print($url);
        $response = file_get_contents($url);
        $reservation = json_decode($response);
        return $reservation;
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
    /**
     * Demo methods below
     */

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
