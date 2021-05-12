<?php
// Aside menu
return [

    'items' => [
        // Dashboard
        [
            'title' => 'Accueil',
            'root' => true,
            'icon' => 'media/svg/icons/Design/Layers.svg', // or can be 'flaticon-home' or any flaticon-*
            'page' => '/',
            'new-tab' => false,
        ],

        // Custom
        [
            'section' => 'Réception',
        ],
        [
            'title' => 'Réservation',
            'icon' => 'media/svg/icons/Layout/Layout-4-blocks.svg',
            'bullet' => 'line',
            'page' => 'resa',
            'root' => true,
           
        ],
        [
            'title' => 'Planning',
            'icon' => 'media/svg/icons/Shopping/Barcode-read.svg',
            'bullet' => 'dot',
            'root' => true,
      
        ],

        // Layout
        [
            'section' => 'Paramétrage',
        ],
        [
            'title' => 'Paramétres',
            'desc' => '',
            'icon' => 'media/svg/icons/Design/Bucket.svg',
            'bullet' => 'dot',
            'root' => true,
            'submenu' => [
                [
                    'title' => 'Products',
                    'page' => 'product'
                ],
                [
                    'title' => 'Users',
                    'page' => 'users'
                ],
                [
                    'title' => 'Roles',
                    'page' => 'roles'
                ]
            ]
        ],
          ]

];
