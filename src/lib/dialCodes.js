// src/lib/dialCodes.js

// Compact list of ISO 3166-1 alpha-2 -> calling codes.
// Add/adjust if you need, but this covers all standard countries/territories.
export const DIAL_CODES = [
  // Europe
  { iso: 'DE', dial: '+49' }, { iso: 'AT', dial: '+43' }, { iso: 'CH', dial: '+41' },
  { iso: 'BE', dial: '+32' }, { iso: 'NL', dial: '+31' }, { iso: 'LU', dial: '+352' },
  { iso: 'FR', dial: '+33' }, { iso: 'MC', dial: '+377' }, { iso: 'AD', dial: '+376' },
  { iso: 'ES', dial: '+34' }, { iso: 'PT', dial: '+351' }, { iso: 'GI', dial: '+350' },
  { iso: 'IT', dial: '+39' }, { iso: 'SM', dial: '+378' }, { iso: 'VA', dial: '+379' },
  { iso: 'IE', dial: '+353' }, { iso: 'GB', dial: '+44' }, { iso: 'GG', dial: '+44' }, { iso: 'JE', dial: '+44' }, { iso: 'IM', dial: '+44' },
  { iso: 'DK', dial: '+45' }, { iso: 'SE', dial: '+46' }, { iso: 'NO', dial: '+47' }, { iso: 'FO', dial: '+298' }, { iso: 'SJ', dial: '+47' },
  { iso: 'FI', dial: '+358' }, { iso: 'AX', dial: '+358' }, { iso: 'IS', dial: '+354' },
  { iso: 'PL', dial: '+48' }, { iso: 'CZ', dial: '+420' }, { iso: 'SK', dial: '+421' },
  { iso: 'HU', dial: '+36' }, { iso: 'SI', dial: '+386' }, { iso: 'HR', dial: '+385' },
  { iso: 'BA', dial: '+387' }, { iso: 'ME', dial: '+382' }, { iso: 'RS', dial: '+381' }, { iso: 'MK', dial: '+389' }, { iso: 'AL', dial: '+355' }, { iso: 'XK', dial: '+383' },
  { iso: 'RO', dial: '+40' }, { iso: 'BG', dial: '+359' }, { iso: 'GR', dial: '+30' }, { iso: 'CY', dial: '+357' },
  { iso: 'EE', dial: '+372' }, { iso: 'LV', dial: '+371' }, { iso: 'LT', dial: '+370' },
  { iso: 'UA', dial: '+380' }, { iso: 'MD', dial: '+373' }, { iso: 'BY', dial: '+375' },

  // North America
  { iso: 'US', dial: '+1' }, { iso: 'CA', dial: '+1' }, { iso: 'MX', dial: '+52' },
  { iso: 'PR', dial: '+1' }, { iso: 'DO', dial: '+1' }, { iso: 'JM', dial: '+1' }, { iso: 'TT', dial: '+1' },
  { iso: 'BB', dial: '+1' }, { iso: 'BS', dial: '+1' }, { iso: 'AG', dial: '+1' }, { iso: 'LC', dial: '+1' },
  { iso: 'VC', dial: '+1' }, { iso: 'GD', dial: '+1' }, { iso: 'DM', dial: '+1' }, { iso: 'KN', dial: '+1' },
  { iso: 'TC', dial: '+1' }, { iso: 'KY', dial: '+1' }, { iso: 'VG', dial: '+1' }, { iso: 'VI', dial: '+1' },
  { iso: 'GL', dial: '+299' }, { iso: 'PM', dial: '+508' }, { iso: 'BM', dial: '+1' },

  // South America
  { iso: 'BR', dial: '+55' }, { iso: 'AR', dial: '+54' }, { iso: 'CL', dial: '+56' }, { iso: 'UY', dial: '+598' },
  { iso: 'PY', dial: '+595' }, { iso: 'BO', dial: '+591' }, { iso: 'PE', dial: '+51' }, { iso: 'EC', dial: '+593' },
  { iso: 'CO', dial: '+57' }, { iso: 'VE', dial: '+58' }, { iso: 'GF', dial: '+594' }, { iso: 'FK', dial: '+500' },
  { iso: 'SR', dial: '+597' }, { iso: 'GY', dial: '+592' },

  // Middle East
  { iso: 'TR', dial: '+90' }, { iso: 'IL', dial: '+972' }, { iso: 'PS', dial: '+970' }, { iso: 'JO', dial: '+962' },
  { iso: 'LB', dial: '+961' }, { iso: 'SY', dial: '+963' }, { iso: 'AE', dial: '+971' }, { iso: 'SA', dial: '+966' },
  { iso: 'QA', dial: '+974' }, { iso: 'KW', dial: '+965' }, { iso: 'BH', dial: '+973' }, { iso: 'OM', dial: '+968' },
  { iso: 'YE', dial: '+967' }, { iso: 'IQ', dial: '+964' }, { iso: 'IR', dial: '+98' },

  // Africa
  { iso: 'ZA', dial: '+27' }, { iso: 'NA', dial: '+264' }, { iso: 'BW', dial: '+267' }, { iso: 'LS', dial: '+266' },
  { iso: 'SZ', dial: '+268' }, { iso: 'AO', dial: '+244' }, { iso: 'ZM', dial: '+260' }, { iso: 'MW', dial: '+265' },
  { iso: 'MZ', dial: '+258' }, { iso: 'ZW', dial: '+263' }, { iso: 'NG', dial: '+234' }, { iso: 'GH', dial: '+233' },
  { iso: 'CI', dial: '+225' }, { iso: 'SN', dial: '+221' }, { iso: 'ML', dial: '+223' }, { iso: 'BF', dial: '+226' },
  { iso: 'NE', dial: '+227' }, { iso: 'BJ', dial: '+229' }, { iso: 'TG', dial: '+228' }, { iso: 'GM', dial: '+220' },
  { iso: 'SL', dial: '+232' }, { iso: 'LR', dial: '+231' }, { iso: 'GN', dial: '+224' }, { iso: 'GW', dial: '+245' },
  { iso: 'MR', dial: '+222' }, { iso: 'CV', dial: '+238' }, { iso: 'CM', dial: '+237' }, { iso: 'GA', dial: '+241' },
  { iso: 'GQ', dial: '+240' }, { iso: 'ST', dial: '+239' }, { iso: 'CG', dial: '+242' }, { iso: 'CD', dial: '+243' },
  { iso: 'CF', dial: '+236' }, { iso: 'TD', dial: '+235' }, { iso: 'SD', dial: '+249' }, { iso: 'SS', dial: '+211' },
  { iso: 'KE', dial: '+254' }, { iso: 'UG', dial: '+256' }, { iso: 'TZ', dial: '+255' }, { iso: 'RW', dial: '+250' },
  { iso: 'BI', dial: '+257' }, { iso: 'ET', dial: '+251' }, { iso: 'SO', dial: '+252' }, { iso: 'DJ', dial: '+253' },
  { iso: 'ER', dial: '+291' }, { iso: 'EG', dial: '+20' }, { iso: 'LY', dial: '+218' }, { iso: 'TN', dial: '+216' },
  { iso: 'DZ', dial: '+213' }, { iso: 'MA', dial: '+212' }, { iso: 'EH', dial: '+212' },

  // Asia
  { iso: 'RU', dial: '+7' }, { iso: 'KZ', dial: '+7' },
  { iso: 'CN', dial: '+86' }, { iso: 'HK', dial: '+852' }, { iso: 'MO', dial: '+853' }, { iso: 'TW', dial: '+886' },
  { iso: 'JP', dial: '+81' }, { iso: 'KR', dial: '+82' }, { iso: 'IN', dial: '+91' }, { iso: 'PK', dial: '+92' },
  { iso: 'BD', dial: '+880' }, { iso: 'LK', dial: '+94' }, { iso: 'NP', dial: '+977' }, { iso: 'BT', dial: '+975' },
  { iso: 'MV', dial: '+960' }, { iso: 'SG', dial: '+65' }, { iso: 'MY', dial: '+60' }, { iso: 'TH', dial: '+66' },
  { iso: 'VN', dial: '+84' }, { iso: 'LA', dial: '+856' }, { iso: 'KH', dial: '+855' }, { iso: 'MM', dial: '+95' },
  { iso: 'ID', dial: '+62' }, { iso: 'PH', dial: '+63' }, { iso: 'BN', dial: '+673' }, { iso: 'TL', dial: '+670' },
  { iso: 'UZ', dial: '+998' }, { iso: 'TJ', dial: '+992' }, { iso: 'TM', dial: '+993' }, { iso: 'KG', dial: '+996' },
  { iso: 'AF', dial: '+93' }, { iso: 'AZ', dial: '+994' }, { iso: 'AM', dial: '+374' }, { iso: 'GE', dial: '+995' },

  // Oceania
  { iso: 'AU', dial: '+61' }, { iso: 'NZ', dial: '+64' }, { iso: 'PG', dial: '+675' }, { iso: 'FJ', dial: '+679' },
  { iso: 'TO', dial: '+676' }, { iso: 'SB', dial: '+677' }, { iso: 'VU', dial: '+678' }, { iso: 'KI', dial: '+686' },
  { iso: 'TV', dial: '+688' }, { iso: 'NR', dial: '+674' }, { iso: 'NC', dial: '+687' }, { iso: 'PF', dial: '+689' }
]
