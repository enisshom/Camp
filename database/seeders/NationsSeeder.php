<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('nations')->insert(
            [

                [
                    'cdnat' => 'AF',
                    'libnat' => 'AFGHANISTAN',
                    'ordre' => 1,
                    'etat' => 'VRAI',
                    'code_iso' => 'AF'
                ],
                [
                    'cdnat' => 'ZA',
                    'libnat' => 'AFRIQUE DU SUD',
                    'ordre' => 2,
                    'etat' => 'VRAI',
                    'code_iso' => 'ZA'
                ],
                [
                    'cdnat' => 'AX',
                    'libnat' => 'ÅLAND, ÎLES',
                    'ordre' => 3,
                    'etat' => 'VRAI',
                    'code_iso' => 'AX'
                ],
                [
                    'cdnat' => 'AL',
                    'libnat' => 'ALBANIE',
                    'ordre' => 4,
                    'etat' => 'VRAI',
                    'code_iso' => 'AL'
                ],
                [
                    'cdnat' => 'ALG',
                    'libnat' => 'ALGERIE',
                    'ordre' => 5,
                    'etat' => 'VRAI',
                    'code_iso' => 'DZ'
                ],
                [
                    'cdnat' => 'ALL',
                    'libnat' => 'ALLEMAGNE',
                    'ordre' => 6,
                    'etat' => 'VRAI',
                    'code_iso' => 'DE'
                ],
                [
                    'cdnat' => 'AD',
                    'libnat' => 'ANDORRE',
                    'ordre' => 7,
                    'etat' => 'VRAI',
                    'code_iso' => 'AD'
                ],
                [
                    'cdnat' => 'AO',
                    'libnat' => 'ANGOLA',
                    'ordre' => 8,
                    'etat' => 'VRAI',
                    'code_iso' => 'AO'
                ],
                [
                    'cdnat' => 'AI',
                    'libnat' => 'ANGUILLA',
                    'ordre' => 9,
                    'etat' => 'VRAI',
                    'code_iso' => 'AI'
                ],
                [
                    'cdnat' => 'AQ',
                    'libnat' => 'ANTARCTIQUE',
                    'ordre' => 10,
                    'etat' => 'VRAI',
                    'code_iso' => 'AQ'
                ],
                [
                    'cdnat' => 'AG',
                    'libnat' => 'ANTIGUA ET BARBUDA',
                    'ordre' => 11,
                    'etat' => 'VRAI',
                    'code_iso' => 'AG'
                ],
                [
                    'cdnat' => 'A.S',
                    'libnat' => 'ARABIE SAOUDITE',
                    'ordre' => 12,
                    'etat' => 'VRAI',
                    'code_iso' => 'SA'
                ],
                [
                    'cdnat' => 'AR',
                    'libnat' => 'ARGENTINE',
                    'ordre' => 13,
                    'etat' => 'VRAI',
                    'code_iso' => 'AR'
                ],
                [
                    'cdnat' => 'AM',
                    'libnat' => 'ARMENIE',
                    'ordre' => 14,
                    'etat' => 'VRAI',
                    'code_iso' => 'AM'
                ],
                [
                    'cdnat' => 'AW',
                    'libnat' => 'ARUBA',
                    'ordre' => 15,
                    'etat' => 'VRAI',
                    'code_iso' => 'AW'
                ],
                [
                    'cdnat' => 'AUST',
                    'libnat' => 'AUSTRALIE',
                    'ordre' => 16,
                    'etat' => 'VRAI',
                    'code_iso' => 'AU'
                ],
                [
                    'cdnat' => 'AUT',
                    'libnat' => 'AUTRICHE',
                    'ordre' => 17,
                    'etat' => 'VRAI',
                    'code_iso' => 'AT'
                ],
                [
                    'cdnat' => 'AZ',
                    'libnat' => 'AZERBAIDJAN',
                    'ordre' => 18,
                    'etat' => 'VRAI',
                    'code_iso' => 'AZ'
                ],
                [
                    'cdnat' => 'BS',
                    'libnat' => 'BAHAMAS',
                    'ordre' => 19,
                    'etat' => 'VRAI',
                    'code_iso' => 'BS'
                ],
                [
                    'cdnat' => 'BH',
                    'libnat' => 'BAHREIN',
                    'ordre' => 20,
                    'etat' => 'VRAI',
                    'code_iso' => 'BH'
                ],
                [
                    'cdnat' => 'BD',
                    'libnat' => 'BANGLADESH',
                    'ordre' => 21,
                    'etat' => 'VRAI',
                    'code_iso' => 'BD'
                ],
                [
                    'cdnat' => 'BB',
                    'libnat' => 'BARBADE',
                    'ordre' => 22,
                    'etat' => 'VRAI',
                    'code_iso' => 'BB'
                ],
                [
                    'cdnat' => 'BY',
                    'libnat' => 'BELARUS',
                    'ordre' => 23,
                    'etat' => 'VRAI',
                    'code_iso' => 'BY'
                ],
                [
                    'cdnat' => 'BEL',
                    'libnat' => 'BELGIQUE',
                    'ordre' => 24,
                    'etat' => 'VRAI',
                    'code_iso' => 'BE'
                ],
                [
                    'cdnat' => 'BZ',
                    'libnat' => 'BELIZE',
                    'ordre' => 25,
                    'etat' => 'VRAI',
                    'code_iso' => 'BZ'
                ],
                [
                    'cdnat' => 'BJ',
                    'libnat' => 'BENIN',
                    'ordre' => 26,
                    'etat' => 'VRAI',
                    'code_iso' => 'BJ'
                ],
                [
                    'cdnat' => 'BM',
                    'libnat' => 'BERMUDES',
                    'ordre' => 27,
                    'etat' => 'VRAI',
                    'code_iso' => 'BM'
                ],
                [
                    'cdnat' => 'BT',
                    'libnat' => 'BHOUTAN',
                    'ordre' => 28,
                    'etat' => 'VRAI',
                    'code_iso' => 'BT'
                ],
                [
                    'cdnat' => 'BO',
                    'libnat' => 'BOLIVIE, l\'ETAT PLUR',
                    'ordre' => 29,
                    'etat' => 'VRAI',
                    'code_iso' => 'BO'
                ],
                [
                    'cdnat' => 'BQ',
                    'libnat' => 'BONAIRE, SAINT-EUSTA',
                    'ordre' => 30,
                    'etat' => 'VRAI',
                    'code_iso' => 'BQ'
                ],
                [
                    'cdnat' => 'BA',
                    'libnat' => 'BOSNIE-HERZEGOVINE',
                    'ordre' => 31,
                    'etat' => 'VRAI',
                    'code_iso' => 'BA'
                ],
                [
                    'cdnat' => 'BW',
                    'libnat' => 'BOTSWANA',
                    'ordre' => 32,
                    'etat' => 'VRAI',
                    'code_iso' => 'BW'
                ],
                [
                    'cdnat' => 'BV',
                    'libnat' => 'BOUVET, ILE',
                    'ordre' => 33,
                    'etat' => 'VRAI',
                    'code_iso' => 'BV'
                ],
                [
                    'cdnat' => 'BRSL',
                    'libnat' => 'BRESIL',
                    'ordre' => 34,
                    'etat' => 'VRAI',
                    'code_iso' => 'BR'
                ],
                [
                    'cdnat' => 'BN',
                    'libnat' => 'BRUNEI DARUSSALAM',
                    'ordre' => 35,
                    'etat' => 'VRAI',
                    'code_iso' => 'BN'
                ],
                [
                    'cdnat' => 'BG',
                    'libnat' => 'BULGARIE',
                    'ordre' => 36,
                    'etat' => 'VRAI',
                    'code_iso' => 'BG'
                ],
                [
                    'cdnat' => 'BF',
                    'libnat' => 'BURKINA FASO',
                    'ordre' => 37,
                    'etat' => 'VRAI',
                    'code_iso' => 'BF'
                ],
                [
                    'cdnat' => 'BI',
                    'libnat' => 'BURUNDI',
                    'ordre' => 38,
                    'etat' => 'VRAI',
                    'code_iso' => 'BI'
                ],
                [
                    'cdnat' => 'KY',
                    'libnat' => 'CAIMANES, ILES',
                    'ordre' => 39,
                    'etat' => 'VRAI',
                    'code_iso' => 'KY'
                ],
                [
                    'cdnat' => 'KH',
                    'libnat' => 'CAMBODGE',
                    'ordre' => 40,
                    'etat' => 'VRAI',
                    'code_iso' => 'KH'
                ],
                [
                    'cdnat' => 'CM',
                    'libnat' => 'CAMEROUN',
                    'ordre' => 41,
                    'etat' => 'VRAI',
                    'code_iso' => 'CM'
                ],
                [
                    'cdnat' => 'CAN',
                    'libnat' => 'CANADA',
                    'ordre' => 42,
                    'etat' => 'VRAI',
                    'code_iso' => 'CA'
                ],
                [
                    'cdnat' => 'CV',
                    'libnat' => 'CAP-VERT',
                    'ordre' => 43,
                    'etat' => 'VRAI',
                    'code_iso' => 'CV'
                ],
                [
                    'cdnat' => 'CF',
                    'libnat' => 'CENTRAFRICAINE, REPU',
                    'ordre' => 44,
                    'etat' => 'VRAI',
                    'code_iso' => 'CF'
                ],
                [
                    'cdnat' => 'CL',
                    'libnat' => 'CHILI',
                    'ordre' => 45,
                    'etat' => 'VRAI',
                    'code_iso' => 'CL'
                ],
                [
                    'cdnat' => 'CHI',
                    'libnat' => 'CHINE',
                    'ordre' => 46,
                    'etat' => 'VRAI',
                    'code_iso' => 'CN'
                ],
                [
                    'cdnat' => 'CX',
                    'libnat' => 'CHRISTMAS, ILE',
                    'ordre' => 47,
                    'etat' => 'VRAI',
                    'code_iso' => 'CX'
                ],
                [
                    'cdnat' => 'CY',
                    'libnat' => 'CHYPRE',
                    'ordre' => 48,
                    'etat' => 'VRAI',
                    'code_iso' => 'CY'
                ],
                [
                    'cdnat' => 'CC',
                    'libnat' => 'COCOS (KEELING), ILE',
                    'ordre' => 49,
                    'etat' => 'VRAI',
                    'code_iso' => 'CC'
                ],
                [
                    'cdnat' => 'CO',
                    'libnat' => 'COLOMBIE',
                    'ordre' => 50,
                    'etat' => 'VRAI',
                    'code_iso' => 'CO'
                ],
                [
                    'cdnat' => 'KM',
                    'libnat' => 'COMORES',
                    'ordre' => 51,
                    'etat' => 'VRAI',
                    'code_iso' => 'KM'
                ],
                [
                    'cdnat' => 'CG',
                    'libnat' => 'CONGO',
                    'ordre' => 52,
                    'etat' => 'VRAI',
                    'code_iso' => 'CG'
                ],
                [
                    'cdnat' => 'CD',
                    'libnat' => 'CONGO, LA REPUBLIQUE',
                    'ordre' => 53,
                    'etat' => 'VRAI',
                    'code_iso' => 'CD'
                ],
                [
                    'cdnat' => 'CK',
                    'libnat' => 'COOK, ILES',
                    'ordre' => 54,
                    'etat' => 'VRAI',
                    'code_iso' => 'CK'
                ],
                [
                    'cdnat' => 'KR',
                    'libnat' => 'COREE, REPUBLIQUE DE',
                    'ordre' => 55,
                    'etat' => 'VRAI',
                    'code_iso' => 'KR'
                ],
                [
                    'cdnat' => 'KP',
                    'libnat' => 'COREE, REPUBLIQUE PO',
                    'ordre' => 56,
                    'etat' => 'VRAI',
                    'code_iso' => 'KP'
                ],
                [
                    'cdnat' => 'CR',
                    'libnat' => 'COSTA RICA',
                    'ordre' => 57,
                    'etat' => 'VRAI',
                    'code_iso' => 'CR'
                ],
                [
                    'cdnat' => 'CI',
                    'libnat' => 'COTE D\'IVOIRE',
                    'ordre' => 58,
                    'etat' => 'VRAI',
                    'code_iso' => 'CI'
                ],
                [
                    'cdnat' => 'HR',
                    'libnat' => 'CROATIE',
                    'ordre' => 59,
                    'etat' => 'VRAI',
                    'code_iso' => 'HR'
                ],
                [
                    'cdnat' => 'CU',
                    'libnat' => 'CUBA',
                    'ordre' => 60,
                    'etat' => 'VRAI',
                    'code_iso' => 'CU'
                ],
                [
                    'cdnat' => 'CW',
                    'libnat' => 'CURACAO',
                    'ordre' => 61,
                    'etat' => 'VRAI',
                    'code_iso' => 'CW'
                ],
                [
                    'cdnat' => 'DK',
                    'libnat' => 'DANEMARK',
                    'ordre' => 62,
                    'etat' => 'VRAI',
                    'code_iso' => 'DK'
                ],
                [
                    'cdnat' => 'DJ',
                    'libnat' => 'DJIBOUTI',
                    'ordre' => 63,
                    'etat' => 'VRAI',
                    'code_iso' => 'DJ'
                ],
                [
                    'cdnat' => 'DO',
                    'libnat' => 'DOMINICAINE, REPUBLI',
                    'ordre' => 64,
                    'etat' => 'VRAI',
                    'code_iso' => 'DO'
                ],
                [
                    'cdnat' => 'DM',
                    'libnat' => 'DOMINIQUE',
                    'ordre' => 65,
                    'etat' => 'VRAI',
                    'code_iso' => 'DM'
                ],
                [
                    'cdnat' => 'EGPT',
                    'libnat' => 'EGYPTE',
                    'ordre' => 66,
                    'etat' => 'VRAI',
                    'code_iso' => 'EG'
                ],
                [
                    'cdnat' => 'SV',
                    'libnat' => 'EL SALVADOR',
                    'ordre' => 67,
                    'etat' => 'VRAI',
                    'code_iso' => 'SV'
                ],
                [
                    'cdnat' => 'AE',
                    'libnat' => 'EMIRATS ARABES UNIS',
                    'ordre' => 68,
                    'etat' => 'VRAI',
                    'code_iso' => 'AE'
                ],
                [
                    'cdnat' => 'EC',
                    'libnat' => 'EQUATEUR',
                    'ordre' => 69,
                    'etat' => 'VRAI',
                    'code_iso' => 'EC'
                ],
                [
                    'cdnat' => 'ER',
                    'libnat' => 'ERYTHREE',
                    'ordre' => 70,
                    'etat' => 'VRAI',
                    'code_iso' => 'ER'
                ],
                [
                    'cdnat' => 'ESP',
                    'libnat' => 'ESPAGNE',
                    'ordre' => 71,
                    'etat' => 'VRAI',
                    'code_iso' => 'ES'
                ],
                [
                    'cdnat' => 'EE',
                    'libnat' => 'ESTONIE',
                    'ordre' => 72,
                    'etat' => 'VRAI',
                    'code_iso' => 'EE'
                ],
                [
                    'cdnat' => 'USA',
                    'libnat' => 'ETATS-UNIS',
                    'ordre' => 73,
                    'etat' => 'VRAI',
                    'code_iso' => 'US'
                ],
                [
                    'cdnat' => 'ET',
                    'libnat' => 'ETHIOPIE',
                    'ordre' => 74,
                    'etat' => 'VRAI',
                    'code_iso' => 'ET'
                ],
                [
                    'cdnat' => 'FK',
                    'libnat' => 'FALKLAND, ILES (MALV',
                    'ordre' => 75,
                    'etat' => 'VRAI',
                    'code_iso' => 'FK'
                ],
                [
                    'cdnat' => 'FO',
                    'libnat' => 'FEROE, ILES',
                    'ordre' => 76,
                    'etat' => 'VRAI',
                    'code_iso' => 'FO'
                ],
                [
                    'cdnat' => 'FJ',
                    'libnat' => 'FIDJI',
                    'ordre' => 77,
                    'etat' => 'VRAI',
                    'code_iso' => 'FJ'
                ],
                [
                    'cdnat' => 'FI',
                    'libnat' => 'FINLANDE',
                    'ordre' => 78,
                    'etat' => 'VRAI',
                    'code_iso' => 'FI'
                ],
                [
                    'cdnat' => 'FRA',
                    'libnat' => 'FRANCE',
                    'ordre' => 79,
                    'etat' => 'VRAI',
                    'code_iso' => 'FR'
                ],
                [
                    'cdnat' => 'GA',
                    'libnat' => 'GABON',
                    'ordre' => 80,
                    'etat' => 'VRAI',
                    'code_iso' => 'GA'
                ],
                [
                    'cdnat' => 'GM',
                    'libnat' => 'GAMBIE',
                    'ordre' => 81,
                    'etat' => 'VRAI',
                    'code_iso' => 'GM'
                ],
                [
                    'cdnat' => 'GE',
                    'libnat' => 'GEORGIE',
                    'ordre' => 82,
                    'etat' => 'VRAI',
                    'code_iso' => 'GE'
                ],
                [
                    'cdnat' => 'GS',
                    'libnat' => 'GEORGIE DU SUD ET LE',
                    'ordre' => 83,
                    'etat' => 'VRAI',
                    'code_iso' => 'GS'
                ],
                [
                    'cdnat' => 'GH',
                    'libnat' => 'GHANA',
                    'ordre' => 84,
                    'etat' => 'VRAI',
                    'code_iso' => 'GH'
                ],
                [
                    'cdnat' => 'GI',
                    'libnat' => 'GIBRALTAR',
                    'ordre' => 85,
                    'etat' => 'VRAI',
                    'code_iso' => 'GI'
                ],
                [
                    'cdnat' => 'GREC',
                    'libnat' => 'GRECE',
                    'ordre' => 86,
                    'etat' => 'VRAI',
                    'code_iso' => 'GR'
                ],
                [
                    'cdnat' => 'GD',
                    'libnat' => 'GRENADE',
                    'ordre' => 87,
                    'etat' => 'VRAI',
                    'code_iso' => 'GD'
                ],
                [
                    'cdnat' => 'GL',
                    'libnat' => 'GROENLAND',
                    'ordre' => 88,
                    'etat' => 'VRAI',
                    'code_iso' => 'GL'
                ],
                [
                    'cdnat' => 'GP',
                    'libnat' => 'GUADELOUPE',
                    'ordre' => 89,
                    'etat' => 'VRAI',
                    'code_iso' => 'GP'
                ],
                [
                    'cdnat' => 'GU',
                    'libnat' => 'GUAM',
                    'ordre' => 90,
                    'etat' => 'VRAI',
                    'code_iso' => 'GU'
                ],
                [
                    'cdnat' => 'GT',
                    'libnat' => 'GUATEMALA',
                    'ordre' => 91,
                    'etat' => 'VRAI',
                    'code_iso' => 'GT'
                ],
                [
                    'cdnat' => 'GG',
                    'libnat' => 'GUERNESEY',
                    'ordre' => 92,
                    'etat' => 'VRAI',
                    'code_iso' => 'GG'
                ],
                [
                    'cdnat' => 'GN',
                    'libnat' => 'GUINEE',
                    'ordre' => 93,
                    'etat' => 'VRAI',
                    'code_iso' => 'GN'
                ],
                [
                    'cdnat' => 'GW',
                    'libnat' => 'GUINEE-BISSAU',
                    'ordre' => 94,
                    'etat' => 'VRAI',
                    'code_iso' => 'GW'
                ],
                [
                    'cdnat' => 'GQ',
                    'libnat' => 'GUINEE EQUATORIALE',
                    'ordre' => 95,
                    'etat' => 'VRAI',
                    'code_iso' => 'GQ'
                ],
                [
                    'cdnat' => 'GY',
                    'libnat' => 'GUYANA',
                    'ordre' => 96,
                    'etat' => 'VRAI',
                    'code_iso' => 'GY'
                ],
                [
                    'cdnat' => 'GF',
                    'libnat' => 'GUYANE FRANCAISE',
                    'ordre' => 97,
                    'etat' => 'VRAI',
                    'code_iso' => 'GF'
                ],
                [
                    'cdnat' => 'HT',
                    'libnat' => 'HAITI',
                    'ordre' => 98,
                    'etat' => 'VRAI',
                    'code_iso' => 'HT'
                ],
                [
                    'cdnat' => 'HM',
                    'libnat' => 'HEARD, ILE ET MCDONA',
                    'ordre' => 99,
                    'etat' => 'VRAI',
                    'code_iso' => 'HM'
                ],
                [
                    'cdnat' => 'HN',
                    'libnat' => 'HONDURAS',
                    'ordre' => 100,
                    'etat' => 'VRAI',
                    'code_iso' => 'HN'
                ],
                [
                    'cdnat' => 'HK',
                    'libnat' => 'HONG KONG',
                    'ordre' => 101,
                    'etat' => 'VRAI',
                    'code_iso' => 'HK'
                ],
                [
                    'cdnat' => 'HU',
                    'libnat' => 'HONGRIE',
                    'ordre' => 102,
                    'etat' => 'VRAI',
                    'code_iso' => 'HU'
                ],
                [
                    'cdnat' => 'IM',
                    'libnat' => 'ILE DE MAN',
                    'ordre' => 103,
                    'etat' => 'VRAI',
                    'code_iso' => 'IM'
                ],
                [
                    'cdnat' => 'UM',
                    'libnat' => 'ILES MINEURES ELOIGN',
                    'ordre' => 104,
                    'etat' => 'VRAI',
                    'code_iso' => 'UM'
                ],
                [
                    'cdnat' => 'VG',
                    'libnat' => 'ILES VIERGES BRITANN',
                    'ordre' => 105,
                    'etat' => 'VRAI',
                    'code_iso' => 'VG'
                ],
                [
                    'cdnat' => 'VI',
                    'libnat' => 'ILES VIERGES DES ETA',
                    'ordre' => 106,
                    'etat' => 'VRAI',
                    'code_iso' => 'VI'
                ],
                [
                    'cdnat' => 'IN',
                    'libnat' => 'INDE',
                    'ordre' => 107,
                    'etat' => 'VRAI',
                    'code_iso' => 'IN'
                ],
                [
                    'cdnat' => 'ID',
                    'libnat' => 'INDONESIE',
                    'ordre' => 108,
                    'etat' => 'VRAI',
                    'code_iso' => 'ID'
                ],
                [
                    'cdnat' => 'IR',
                    'libnat' => 'IRAN, REPUBLIQUE ISL',
                    'ordre' => 109,
                    'etat' => 'VRAI',
                    'code_iso' => 'IR'
                ],
                [
                    'cdnat' => 'IQ',
                    'libnat' => 'IRAQ',
                    'ordre' => 110,
                    'etat' => 'VRAI',
                    'code_iso' => 'IQ'
                ],
                [
                    'cdnat' => 'IRLD',
                    'libnat' => 'IRLANDE',
                    'ordre' => 111,
                    'etat' => 'VRAI',
                    'code_iso' => 'IE'
                ],
                [
                    'cdnat' => 'IS',
                    'libnat' => 'ISLANDE',
                    'ordre' => 112,
                    'etat' => 'VRAI',
                    'code_iso' => 'IS'
                ],
                [
                    'cdnat' => 'ISR',
                    'libnat' => 'ISRAEL',
                    'ordre' => 113,
                    'etat' => 'VRAI',
                    'code_iso' => 'IL'
                ],
                [
                    'cdnat' => 'ITA',
                    'libnat' => 'ITALIE',
                    'ordre' => 114,
                    'etat' => 'VRAI',
                    'code_iso' => 'IT'
                ],
                [
                    'cdnat' => 'JM',
                    'libnat' => 'JAMAIQUE',
                    'ordre' => 115,
                    'etat' => 'VRAI',
                    'code_iso' => 'JM'
                ],
                [
                    'cdnat' => 'JAP',
                    'libnat' => 'JAPON',
                    'ordre' => 116,
                    'etat' => 'VRAI',
                    'code_iso' => 'JP'
                ],
                [
                    'cdnat' => 'JE',
                    'libnat' => 'JERSEY',
                    'ordre' => 117,
                    'etat' => 'VRAI',
                    'code_iso' => 'JE'
                ],
                [
                    'cdnat' => 'JO',
                    'libnat' => 'JORDANIE',
                    'ordre' => 118,
                    'etat' => 'VRAI',
                    'code_iso' => 'JO'
                ],
                [
                    'cdnat' => 'KZ',
                    'libnat' => 'KAZAKHSTAN',
                    'ordre' => 119,
                    'etat' => 'VRAI',
                    'code_iso' => 'KZ'
                ],
                [
                    'cdnat' => 'KE',
                    'libnat' => 'KENYA',
                    'ordre' => 120,
                    'etat' => 'VRAI',
                    'code_iso' => 'KE'
                ],
                [
                    'cdnat' => 'KG',
                    'libnat' => 'KIRGHIZISTAN',
                    'ordre' => 121,
                    'etat' => 'VRAI',
                    'code_iso' => 'KG'
                ],
                [
                    'cdnat' => 'KI',
                    'libnat' => 'KIRIBATI',
                    'ordre' => 122,
                    'etat' => 'VRAI',
                    'code_iso' => 'KI'
                ],
                [
                    'cdnat' => 'KW',
                    'libnat' => 'KOWEIT',
                    'ordre' => 123,
                    'etat' => 'VRAI',
                    'code_iso' => 'KW'
                ],
                [
                    'cdnat' => 'LA',
                    'libnat' => 'LAO, REPUBLIQUE DEMO',
                    'ordre' => 124,
                    'etat' => 'VRAI',
                    'code_iso' => 'LA'
                ],
                [
                    'cdnat' => 'LS',
                    'libnat' => 'LESOTHO',
                    'ordre' => 125,
                    'etat' => 'VRAI',
                    'code_iso' => 'LS'
                ],
                [
                    'cdnat' => 'LV',
                    'libnat' => 'LETTONIE',
                    'ordre' => 126,
                    'etat' => 'VRAI',
                    'code_iso' => 'LV'
                ],
                [
                    'cdnat' => 'LB',
                    'libnat' => 'LIBAN',
                    'ordre' => 127,
                    'etat' => 'VRAI',
                    'code_iso' => 'LB'
                ],
                [
                    'cdnat' => 'LR',
                    'libnat' => 'LIBERIA',
                    'ordre' => 128,
                    'etat' => 'VRAI',
                    'code_iso' => 'LR'
                ],
                [
                    'cdnat' => 'LIB',
                    'libnat' => 'LIBYENNE, JAMAHIRIYA',
                    'ordre' => 129,
                    'etat' => 'VRAI',
                    'code_iso' => 'LY'
                ],
                [
                    'cdnat' => 'LI',
                    'libnat' => 'LIECHTENSTEIN',
                    'ordre' => 130,
                    'etat' => 'VRAI',
                    'code_iso' => 'LI'
                ],
                [
                    'cdnat' => 'LT',
                    'libnat' => 'LITUANIE',
                    'ordre' => 131,
                    'etat' => 'VRAI',
                    'code_iso' => 'LT'
                ],
                [
                    'cdnat' => 'LU',
                    'libnat' => 'LUXEMBOURG',
                    'ordre' => 132,
                    'etat' => 'VRAI',
                    'code_iso' => 'LU'
                ],
                [
                    'cdnat' => 'MO',
                    'libnat' => 'MACAO',
                    'ordre' => 133,
                    'etat' => 'VRAI',
                    'code_iso' => 'MO'
                ],
                [
                    'cdnat' => 'MK',
                    'libnat' => 'MACEDOINE, L\'EX-REPU',
                    'ordre' => 134,
                    'etat' => 'VRAI',
                    'code_iso' => 'MK'
                ],
                [
                    'cdnat' => 'MG',
                    'libnat' => 'MADAGASCAR',
                    'ordre' => 135,
                    'etat' => 'VRAI',
                    'code_iso' => 'MG'
                ],
                [
                    'cdnat' => 'MY',
                    'libnat' => 'MALAISIE',
                    'ordre' => 136,
                    'etat' => 'VRAI',
                    'code_iso' => 'MY'
                ],
                [
                    'cdnat' => 'MW',
                    'libnat' => 'MALAWI',
                    'ordre' => 137,
                    'etat' => 'VRAI',
                    'code_iso' => 'MW'
                ],
                [
                    'cdnat' => 'MV',
                    'libnat' => 'MALDIVES',
                    'ordre' => 138,
                    'etat' => 'VRAI',
                    'code_iso' => 'MV'
                ],
                [
                    'cdnat' => 'ML',
                    'libnat' => 'MALI',
                    'ordre' => 139,
                    'etat' => 'VRAI',
                    'code_iso' => 'ML'
                ],
                [
                    'cdnat' => 'MT',
                    'libnat' => 'MALTE',
                    'ordre' => 140,
                    'etat' => 'VRAI',
                    'code_iso' => 'MT'
                ],
                [
                    'cdnat' => 'MP',
                    'libnat' => 'MARIANNES DU NORD, I',
                    'ordre' => 141,
                    'etat' => 'VRAI',
                    'code_iso' => 'MP'
                ],
                [
                    'cdnat' => 'MAR',
                    'libnat' => 'MAROC',
                    'ordre' => 142,
                    'etat' => 'VRAI',
                    'code_iso' => 'MA'
                ],
                [
                    'cdnat' => 'MH',
                    'libnat' => 'MARSHALL, ILES',
                    'ordre' => 143,
                    'etat' => 'VRAI',
                    'code_iso' => 'MH'
                ],
                [
                    'cdnat' => 'MQ',
                    'libnat' => 'MARTINIQUE',
                    'ordre' => 144,
                    'etat' => 'VRAI',
                    'code_iso' => 'MQ'
                ],
                [
                    'cdnat' => 'MU',
                    'libnat' => 'MAURICE',
                    'ordre' => 145,
                    'etat' => 'VRAI',
                    'code_iso' => 'MU'
                ],
                [
                    'cdnat' => 'MR',
                    'libnat' => 'MAURITANIE',
                    'ordre' => 146,
                    'etat' => 'VRAI',
                    'code_iso' => 'MR'
                ],
                [
                    'cdnat' => 'YT',
                    'libnat' => 'MAYOTTE',
                    'ordre' => 147,
                    'etat' => 'VRAI',
                    'code_iso' => 'YT'
                ],
                [
                    'cdnat' => 'MX',
                    'libnat' => 'MEXIQUE',
                    'ordre' => 148,
                    'etat' => 'VRAI',
                    'code_iso' => 'MX'
                ],
                [
                    'cdnat' => 'FM',
                    'libnat' => 'MICRONESIE, ETATS FE',
                    'ordre' => 149,
                    'etat' => 'VRAI',
                    'code_iso' => 'FM'
                ],
                [
                    'cdnat' => 'MD',
                    'libnat' => 'MOLDOVA, REPUBLIQUE',
                    'ordre' => 150,
                    'etat' => 'VRAI',
                    'code_iso' => 'MD'
                ],
                [
                    'cdnat' => 'MC',
                    'libnat' => 'MONACO',
                    'ordre' => 151,
                    'etat' => 'VRAI',
                    'code_iso' => 'MC'
                ],
                [
                    'cdnat' => 'MN',
                    'libnat' => 'MONGOLIE',
                    'ordre' => 152,
                    'etat' => 'VRAI',
                    'code_iso' => 'MN'
                ],
                [
                    'cdnat' => 'ME',
                    'libnat' => 'MONTENEGRO',
                    'ordre' => 153,
                    'etat' => 'VRAI',
                    'code_iso' => 'ME'
                ],
                [
                    'cdnat' => 'MS',
                    'libnat' => 'MONTSERRAT',
                    'ordre' => 154,
                    'etat' => 'VRAI',
                    'code_iso' => 'MS'
                ],
                [
                    'cdnat' => 'MZ',
                    'libnat' => 'MOZAMBIQUE',
                    'ordre' => 155,
                    'etat' => 'VRAI',
                    'code_iso' => 'MZ'
                ],
                [
                    'cdnat' => 'MM',
                    'libnat' => 'MYANMAR',
                    'ordre' => 156,
                    'etat' => 'VRAI',
                    'code_iso' => 'MM'
                ],
                [
                    'cdnat' => 'NA',
                    'libnat' => 'NAMIBIE',
                    'ordre' => 157,
                    'etat' => 'VRAI',
                    'code_iso' => 'NA'
                ],
                [
                    'cdnat' => 'NR',
                    'libnat' => 'NAURU',
                    'ordre' => 158,
                    'etat' => 'VRAI',
                    'code_iso' => 'NR'
                ],
                [
                    'cdnat' => 'NP',
                    'libnat' => 'NEPAL',
                    'ordre' => 159,
                    'etat' => 'VRAI',
                    'code_iso' => 'NP'
                ],
                [
                    'cdnat' => 'NI',
                    'libnat' => 'NICARAGUA',
                    'ordre' => 160,
                    'etat' => 'VRAI',
                    'code_iso' => 'NI'
                ],
                [
                    'cdnat' => 'NE',
                    'libnat' => 'NIGER',
                    'ordre' => 161,
                    'etat' => 'VRAI',
                    'code_iso' => 'NE'
                ],
                [
                    'cdnat' => 'NG',
                    'libnat' => 'NIGERIA',
                    'ordre' => 162,
                    'etat' => 'VRAI',
                    'code_iso' => 'NG'
                ],
                [
                    'cdnat' => 'NU',
                    'libnat' => 'NIUE',
                    'ordre' => 163,
                    'etat' => 'VRAI',
                    'code_iso' => 'NU'
                ],
                [
                    'cdnat' => 'NF',
                    'libnat' => 'NORFOLK, ILE',
                    'ordre' => 164,
                    'etat' => 'VRAI',
                    'code_iso' => 'NF'
                ],
                [
                    'cdnat' => 'NO',
                    'libnat' => 'NORVEGE',
                    'ordre' => 165,
                    'etat' => 'VRAI',
                    'code_iso' => 'NO'
                ],
                [
                    'cdnat' => 'NC',
                    'libnat' => 'NOUVELLE-CALEDONIE',
                    'ordre' => 166,
                    'etat' => 'VRAI',
                    'code_iso' => 'NC'
                ],
                [
                    'cdnat' => 'NZ',
                    'libnat' => 'NOUVELLE-ZELANDE',
                    'ordre' => 167,
                    'etat' => 'VRAI',
                    'code_iso' => 'NZ'
                ],
                [
                    'cdnat' => 'IO',
                    'libnat' => 'OCEAN INDIEN, TERRIT',
                    'ordre' => 168,
                    'etat' => 'VRAI',
                    'code_iso' => 'IO'
                ],
                [
                    'cdnat' => 'OM',
                    'libnat' => 'OMAN',
                    'ordre' => 169,
                    'etat' => 'VRAI',
                    'code_iso' => 'OM'
                ],
                [
                    'cdnat' => 'UG',
                    'libnat' => 'OUGANDA',
                    'ordre' => 170,
                    'etat' => 'VRAI',
                    'code_iso' => 'UG'
                ],
                [
                    'cdnat' => 'UZ',
                    'libnat' => 'OUZBEKISTAN',
                    'ordre' => 171,
                    'etat' => 'VRAI',
                    'code_iso' => 'UZ'
                ],
                [
                    'cdnat' => 'PK',
                    'libnat' => 'PAKISTAN',
                    'ordre' => 172,
                    'etat' => 'VRAI',
                    'code_iso' => 'PK'
                ],
                [
                    'cdnat' => 'PW',
                    'libnat' => 'PALAOS',
                    'ordre' => 173,
                    'etat' => 'VRAI',
                    'code_iso' => 'PW'
                ],
                [
                    'cdnat' => 'PS',
                    'libnat' => 'PALESTINIEN OCCUPE,',
                    'ordre' => 174,
                    'etat' => 'VRAI',
                    'code_iso' => 'PS'
                ],
                [
                    'cdnat' => 'PA',
                    'libnat' => 'PANAMA',
                    'ordre' => 175,
                    'etat' => 'VRAI',
                    'code_iso' => 'PA'
                ],
                [
                    'cdnat' => 'PG',
                    'libnat' => 'PAPOUASIE-NOUVELLE-G',
                    'ordre' => 176,
                    'etat' => 'VRAI',
                    'code_iso' => 'PG'
                ],
                [
                    'cdnat' => 'PY',
                    'libnat' => 'PARAGUAY',
                    'ordre' => 177,
                    'etat' => 'VRAI',
                    'code_iso' => 'PY'
                ],
                [
                    'cdnat' => 'HOL',
                    'libnat' => 'PAYS-BAS',
                    'ordre' => 178,
                    'etat' => 'VRAI',
                    'code_iso' => 'NL'
                ],
                [
                    'cdnat' => 'PE',
                    'libnat' => 'PEROU',
                    'ordre' => 179,
                    'etat' => 'VRAI',
                    'code_iso' => 'PE'
                ],
                [
                    'cdnat' => 'PH',
                    'libnat' => 'PHILIPPINES',
                    'ordre' => 180,
                    'etat' => 'VRAI',
                    'code_iso' => 'PH'
                ],
                [
                    'cdnat' => 'PN',
                    'libnat' => 'PITCAIRN',
                    'ordre' => 181,
                    'etat' => 'VRAI',
                    'code_iso' => 'PN'
                ],
                [
                    'cdnat' => 'PL',
                    'libnat' => 'POLOGNE',
                    'ordre' => 182,
                    'etat' => 'VRAI',
                    'code_iso' => 'PL'
                ],
                [
                    'cdnat' => 'PF',
                    'libnat' => 'POLYNESIE FRANCAISE',
                    'ordre' => 183,
                    'etat' => 'VRAI',
                    'code_iso' => 'PF'
                ],
                [
                    'cdnat' => 'PR',
                    'libnat' => 'PORTO RICO',
                    'ordre' => 184,
                    'etat' => 'VRAI',
                    'code_iso' => 'PR'
                ],
                [
                    'cdnat' => 'POR',
                    'libnat' => 'PORTUGAL',
                    'ordre' => 185,
                    'etat' => 'VRAI',
                    'code_iso' => 'PT'
                ],
                [
                    'cdnat' => 'QA',
                    'libnat' => 'QATAR',
                    'ordre' => 186,
                    'etat' => 'VRAI',
                    'code_iso' => 'QA'
                ],
                [
                    'cdnat' => 'RE',
                    'libnat' => 'REUNION',
                    'ordre' => 187,
                    'etat' => 'VRAI',
                    'code_iso' => 'RE'
                ],
                [
                    'cdnat' => 'RO',
                    'libnat' => 'ROUMANIE',
                    'ordre' => 188,
                    'etat' => 'VRAI',
                    'code_iso' => 'RO'
                ],
                [
                    'cdnat' => 'ANG',
                    'libnat' => 'ROYAUME-UNI',
                    'ordre' => 189,
                    'etat' => 'VRAI',
                    'code_iso' => 'GB'
                ],
                [
                    'cdnat' => 'RUSSE',
                    'libnat' => 'RUSSIE, FEDERATION D',
                    'ordre' => 190,
                    'etat' => 'VRAI',
                    'code_iso' => 'RU'
                ],
                [
                    'cdnat' => 'RW',
                    'libnat' => 'RWANDA',
                    'ordre' => 191,
                    'etat' => 'VRAI',
                    'code_iso' => 'RW'
                ],
                [
                    'cdnat' => 'EH',
                    'libnat' => 'SAHARA OCCIDENTAL',
                    'ordre' => 192,
                    'etat' => 'VRAI',
                    'code_iso' => 'EH'
                ],
                [
                    'cdnat' => 'BL',
                    'libnat' => 'SAINT-BARTHELEMY',
                    'ordre' => 193,
                    'etat' => 'VRAI',
                    'code_iso' => 'BL'
                ],
                [
                    'cdnat' => 'SH',
                    'libnat' => 'SAINTE-HELENE, ASCEN',
                    'ordre' => 194,
                    'etat' => 'VRAI',
                    'code_iso' => 'SH'
                ],
                [
                    'cdnat' => 'LC',
                    'libnat' => 'SAINTE-LUCIE',
                    'ordre' => 195,
                    'etat' => 'VRAI',
                    'code_iso' => 'LC'
                ],
                [
                    'cdnat' => 'KN',
                    'libnat' => 'SAINT-KITTS-ET-NEVIS',
                    'ordre' => 196,
                    'etat' => 'VRAI',
                    'code_iso' => 'KN'
                ],
                [
                    'cdnat' => 'SM',
                    'libnat' => 'SAINT-MARIN',
                    'ordre' => 197,
                    'etat' => 'VRAI',
                    'code_iso' => 'SM'
                ],
                [
                    'cdnat' => 'MF',
                    'libnat' => 'SAINT-MARTIN (PARTIE',
                    'ordre' => 198,
                    'etat' => 'VRAI',
                    'code_iso' => 'MF'
                ],
                [
                    'cdnat' => 'SX',
                    'libnat' => 'SAINT-MARTIN (PARTIE',
                    'ordre' => 199,
                    'etat' => 'VRAI',
                    'code_iso' => 'SX'
                ],
                [
                    'cdnat' => 'PM',
                    'libnat' => 'SAINT-PIERRE-ET-MIQU',
                    'ordre' => 200,
                    'etat' => 'VRAI',
                    'code_iso' => 'PM'
                ],
                [
                    'cdnat' => 'VA',
                    'libnat' => 'SAINT-SIEGE (ETAT DE',
                    'ordre' => 201,
                    'etat' => 'VRAI',
                    'code_iso' => 'VA'
                ],
                [
                    'cdnat' => 'VC',
                    'libnat' => 'SAINT-VINCENT-ET-LES',
                    'ordre' => 202,
                    'etat' => 'VRAI',
                    'code_iso' => 'VC'
                ],
                [
                    'cdnat' => 'SB',
                    'libnat' => 'SALOMON, ILES',
                    'ordre' => 203,
                    'etat' => 'VRAI',
                    'code_iso' => 'SB'
                ],
                [
                    'cdnat' => 'WS',
                    'libnat' => 'SAMOA',
                    'ordre' => 204,
                    'etat' => 'VRAI',
                    'code_iso' => 'WS'
                ],
                [
                    'cdnat' => 'AS',
                    'libnat' => 'SAMOA AMERICAINES',
                    'ordre' => 205,
                    'etat' => 'VRAI',
                    'code_iso' => 'AS'
                ],
                [
                    'cdnat' => 'ST',
                    'libnat' => 'SAO TOME-ET-PRINCIPE',
                    'ordre' => 206,
                    'etat' => 'VRAI',
                    'code_iso' => 'ST'
                ],
                [
                    'cdnat' => 'SN',
                    'libnat' => 'SENEGAL',
                    'ordre' => 207,
                    'etat' => 'VRAI',
                    'code_iso' => 'SN'
                ],
                [
                    'cdnat' => 'RS',
                    'libnat' => 'SERBIE',
                    'ordre' => 208,
                    'etat' => 'VRAI',
                    'code_iso' => 'RS'
                ],
                [
                    'cdnat' => 'SC',
                    'libnat' => 'SEYCHELLES',
                    'ordre' => 209,
                    'etat' => 'VRAI',
                    'code_iso' => 'SC'
                ],
                [
                    'cdnat' => 'SL',
                    'libnat' => 'SIERRA LEONE',
                    'ordre' => 210,
                    'etat' => 'VRAI',
                    'code_iso' => 'SL'
                ],
                [
                    'cdnat' => 'SG',
                    'libnat' => 'SINGAPOUR',
                    'ordre' => 211,
                    'etat' => 'VRAI',
                    'code_iso' => 'SG'
                ],
                [
                    'cdnat' => 'SK',
                    'libnat' => 'SLOVAQUIE',
                    'ordre' => 212,
                    'etat' => 'VRAI',
                    'code_iso' => 'SK'
                ],
                [
                    'cdnat' => 'SI',
                    'libnat' => 'SLOVENIE',
                    'ordre' => 213,
                    'etat' => 'VRAI',
                    'code_iso' => 'SI'
                ],
                [
                    'cdnat' => 'SO',
                    'libnat' => 'SOMALIE',
                    'ordre' => 214,
                    'etat' => 'VRAI',
                    'code_iso' => 'SO'
                ],
                [
                    'cdnat' => 'SD',
                    'libnat' => 'SOUDAN',
                    'ordre' => 215,
                    'etat' => 'VRAI',
                    'code_iso' => 'SD'
                ],
                [
                    'cdnat' => 'LK',
                    'libnat' => 'SRI LANKA',
                    'ordre' => 216,
                    'etat' => 'VRAI',
                    'code_iso' => 'LK'
                ],
                [
                    'cdnat' => 'SE',
                    'libnat' => 'SUEDE',
                    'ordre' => 217,
                    'etat' => 'VRAI',
                    'code_iso' => 'SE'
                ],
                [
                    'cdnat' => 'SUI',
                    'libnat' => 'SUISSE',
                    'ordre' => 218,
                    'etat' => 'VRAI',
                    'code_iso' => 'CH'
                ],
                [
                    'cdnat' => 'SR',
                    'libnat' => 'SURINAME',
                    'ordre' => 219,
                    'etat' => 'VRAI',
                    'code_iso' => 'SR'
                ],
                [
                    'cdnat' => 'SJ',
                    'libnat' => 'SVALBARD ET ILE JAN',
                    'ordre' => 220,
                    'etat' => 'VRAI',
                    'code_iso' => 'SJ'
                ],
                [
                    'cdnat' => 'SZ',
                    'libnat' => 'SWAZILAND',
                    'ordre' => 221,
                    'etat' => 'VRAI',
                    'code_iso' => 'SZ'
                ],
                [
                    'cdnat' => 'SY',
                    'libnat' => 'SYRIENNE, REPUBLIQUE',
                    'ordre' => 222,
                    'etat' => 'VRAI',
                    'code_iso' => 'SY'
                ],
                [
                    'cdnat' => 'TJ',
                    'libnat' => 'TADJIKISTAN',
                    'ordre' => 223,
                    'etat' => 'VRAI',
                    'code_iso' => 'TJ'
                ],
                [
                    'cdnat' => 'TW',
                    'libnat' => 'TAIWAN, PROVINCE DE',
                    'ordre' => 224,
                    'etat' => 'VRAI',
                    'code_iso' => 'TW'
                ],
                [
                    'cdnat' => 'TZ',
                    'libnat' => 'TANZANIE, REPUBLIQUE',
                    'ordre' => 225,
                    'etat' => 'VRAI',
                    'code_iso' => 'TZ'
                ],
                [
                    'cdnat' => 'TD',
                    'libnat' => 'TCHAD',
                    'ordre' => 226,
                    'etat' => 'VRAI',
                    'code_iso' => 'TD'
                ],
                [
                    'cdnat' => 'CZ',
                    'libnat' => 'TCHEQUE, REPUBLIQUE',
                    'ordre' => 227,
                    'etat' => 'VRAI',
                    'code_iso' => 'CZ'
                ],
                [
                    'cdnat' => 'TF',
                    'libnat' => 'TERRES AUSTRALES FRA',
                    'ordre' => 228,
                    'etat' => 'VRAI',
                    'code_iso' => 'TF'
                ],
                [
                    'cdnat' => 'TH',
                    'libnat' => 'THAILANDE',
                    'ordre' => 229,
                    'etat' => 'VRAI',
                    'code_iso' => 'TH'
                ],
                [
                    'cdnat' => 'TL',
                    'libnat' => 'TIMOR-LESTE',
                    'ordre' => 230,
                    'etat' => 'VRAI',
                    'code_iso' => 'TL'
                ],
                [
                    'cdnat' => 'TG',
                    'libnat' => 'TOGO',
                    'ordre' => 231,
                    'etat' => 'VRAI',
                    'code_iso' => 'TG'
                ],
                [
                    'cdnat' => 'TK',
                    'libnat' => 'TOKELAU',
                    'ordre' => 232,
                    'etat' => 'VRAI',
                    'code_iso' => 'TK'
                ],
                [
                    'cdnat' => 'TO',
                    'libnat' => 'TONGA',
                    'ordre' => 233,
                    'etat' => 'VRAI',
                    'code_iso' => 'TO'
                ],
                [
                    'cdnat' => 'TT',
                    'libnat' => 'TRINITE-ET-TOBAGO',
                    'ordre' => 234,
                    'etat' => 'VRAI',
                    'code_iso' => 'TT'
                ],
                [
                    'cdnat' => 'TUN',
                    'libnat' => 'TUNISIE',
                    'ordre' => 235,
                    'etat' => 'VRAI',
                    'code_iso' => 'TN'
                ],
                [
                    'cdnat' => 'TM',
                    'libnat' => 'TURKMENISTAN',
                    'ordre' => 236,
                    'etat' => 'VRAI',
                    'code_iso' => 'TM'
                ],
                [
                    'cdnat' => 'TC',
                    'libnat' => 'TURKS ET CAIQUES, IL',
                    'ordre' => 237,
                    'etat' => 'VRAI',
                    'code_iso' => 'TC'
                ],
                [
                    'cdnat' => 'TURC',
                    'libnat' => 'TURQUIE',
                    'ordre' => 238,
                    'etat' => 'VRAI',
                    'code_iso' => 'TR'
                ],
                [
                    'cdnat' => 'TV',
                    'libnat' => 'TUVALU',
                    'ordre' => 239,
                    'etat' => 'VRAI',
                    'code_iso' => 'TV'
                ],
                [
                    'cdnat' => 'UA',
                    'libnat' => 'UKRAINE',
                    'ordre' => 240,
                    'etat' => 'VRAI',
                    'code_iso' => 'UA'
                ],
                [
                    'cdnat' => 'UY',
                    'libnat' => 'URUGUAY',
                    'ordre' => 241,
                    'etat' => 'VRAI',
                    'code_iso' => 'UY'
                ],
                [
                    'cdnat' => 'VU',
                    'libnat' => 'VANUATU',
                    'ordre' => 242,
                    'etat' => 'VRAI',
                    'code_iso' => 'VU'
                ],
                [
                    'cdnat' => 'VAT',
                    'libnat' => 'VATICAN, ETAT DE LA',
                    'ordre' => 243,
                    'etat' => 'VRAI',
                    'code_iso' => 'VA'
                ],
                [
                    'cdnat' => 'VE',
                    'libnat' => 'VENEZUELA, REPUBLIQU',
                    'ordre' => 244,
                    'etat' => 'VRAI',
                    'code_iso' => 'VE'
                ],
                [
                    'cdnat' => 'VN',
                    'libnat' => 'VIET NAM',
                    'ordre' => 245,
                    'etat' => 'VRAI',
                    'code_iso' => 'VN'
                ],
                [
                    'cdnat' => 'WF',
                    'libnat' => 'WALLIS ET FUTUNA',
                    'ordre' => 246,
                    'etat' => 'VRAI',
                    'code_iso' => 'WF'
                ],
                [
                    'cdnat' => 'YE',
                    'libnat' => 'YEMEN',
                    'ordre' => 247,
                    'etat' => 'VRAI',
                    'code_iso' => 'YE'
                ],
                [
                    'cdnat' => 'ZM',
                    'libnat' => 'ZAMBIE',
                    'ordre' => 248,
                    'etat' => 'VRAI',
                    'code_iso' => 'ZM'
                ],
                [
                    'cdnat' => 'ZW',
                    'libnat' => 'ZIMBABWE',
                    'ordre' => 249,
                    'etat' => 'VRAI',
                    'code_iso' => 'ZW'
                ]

            ]
        );
    }
}
