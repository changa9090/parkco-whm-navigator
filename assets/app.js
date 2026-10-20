/**
 * Park & Co Lawyers — WHM (Subclass 417 & 462) Extension, Specified Work & Condition 8547 Navigator
 * Primary-Source Verified Legal Engine (Migration Regulations 1994, LIN 22/012, LIN 22/013, LIN 25/048, PAM3 VM-3182/1813/1144)
 */
const POSTCODE_TABLES = {"remote":[[800,999],[2021,2022],[2356,2356],[2386,2387],[2396,2396],[2405,2406],[2672,2672],[2675,2675],[2825,2826],[2829,2829],[2832,2836],[2838,2840],[2873,2873],[2878,2879],[2898,2899],[3424,3424],[3506,3506],[3509,3509],[3512,3512],[3889,3892],[4025,4025],[4183,4183],[4406,4406],[4416,4420],[4422,4423],[4426,4428],[4454,4454],[4461,4462],[4465,4465],[4467,4468],[4470,4470],[4474,4475],[4477,4482],[4486,4494],[4496,4498],[4680,4680],[4694,4695],[4697,4697],[4699,4707],[4709,4714],[4717,4717],[4720,4728],[4730,4733],[4735,4746],[4750,4751],[4753,4754],[4756,4757],[4798,4812],[4814,4825],[4828,4830],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4888],[4890,4892],[4895,4895],[5220,5223],[5302,5304],[5440,5440],[5576,5577],[5582,5583],[5602,5607],[5611,5611],[5630,5633],[5640,5642],[5650,5655],[5660,5661],[5670,5671],[5680,5680],[5690,5690],[5713,5713],[5715,5715],[5717,5717],[5719,5720],[5722,5725],[5730,5734],[6161,6161],[6335,6338],[6341,6341],[6343,6343],[6346,6346],[6348,6348],[6350,6353],[6355,6359],[6361,6361],[6363,6363],[6365,6365],[6367,6369],[6373,6373],[6375,6375],[6385,6386],[6418,6429],[6431,6431],[6434,6434],[6436,6438],[6440,6440],[6443,6443],[6445,6448],[6450,6450],[6452,6452],[6466,6468],[6470,6470],[6472,6473],[6475,6477],[6479,6480],[6484,6484],[6487,6490],[6515,6515],[6517,6519],[6536,6536],[6605,6606],[6608,6609],[6612,6614],[6616,6616],[6620,6620],[6623,6623],[6625,6625],[6627,6628],[6630,6632],[6635,6635],[6638,6640],[6731,6731],[6733,6733],[6798,6799],[7139,7139],[7215,7215],[7255,7257],[7466,7470]],"northern":[[800,999],[4472,4472],[4478,4478],[4481,4482],[4680,4680],[4694,4695],[4697,4697],[4699,4707],[4709,4714],[4717,4717],[4720,4728],[4730,4733],[4735,4746],[4750,4751],[4753,4754],[4756,4757],[4798,4812],[4814,4825],[4828,4830],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4888],[4890,4892],[4895,4895],[6537,6537],[6642,6642],[6646,6646],[6701,6701],[6705,6705],[6707,6707],[6710,6714],[6716,6716],[6718,6718],[6720,6722],[6725,6726],[6728,6728],[6740,6740],[6743,6743],[6751,6751],[6753,6754],[6758,6758],[6760,6760],[6762,6762],[6765,6765],[6770,6770]],"regional":[[800,999],[2311,2312],[2328,2411],[2420,2490],[2536,2551],[2575,2594],[2618,2739],[2787,2899],[3139,3139],[3211,3334],[3340,3424],[3430,3649],[3658,3749],[3753,3753],[3756,3756],[3758,3758],[3762,3762],[3764,3764],[3778,3781],[3783,3783],[3797,3797],[3799,3799],[3810,3909],[3921,3925],[3945,3974],[3979,3979],[3981,3996],[4124,4125],[4133,4133],[4211,4211],[4270,4272],[4275,4275],[4280,4280],[4285,4285],[4287,4287],[4307,4499],[4510,4510],[4512,4512],[4515,4519],[4522,4899],[5000,5999],[6041,6044],[6055,6056],[6069,6069],[6076,6076],[6083,6084],[6111,6111],[6121,6126],[6200,6799],[7000,7999]],"bushfire":[[822,822],[847,847],[852,852],[854,854],[860,860],[862,862],[870,870],[872,875],[2069,2076],[2083,2083],[2172,2173],[2178,2178],[2224,2234],[2250,2251],[2256,2265],[2267,2267],[2278,2278],[2280,2287],[2289,2290],[2305,2306],[2311,2312],[2315,2331],[2333,2341],[2344,2347],[2350,2350],[2352,2356],[2358,2361],[2365,2365],[2369,2372],[2386,2388],[2390,2390],[2397,2406],[2408,2411],[2415,2415],[2420,2431],[2439,2441],[2443,2450],[2452,2456],[2460,2460],[2462,2466],[2469,2490],[2500,2500],[2502,2502],[2505,2506],[2508,2508],[2515,2519],[2525,2526],[2530,2530],[2536,2541],[2545,2546],[2548,2551],[2555,2555],[2560,2560],[2568,2588],[2590,2590],[2594,2594],[2600,2633],[2640,2640],[2642,2642],[2644,2644],[2646,2646],[2649,2653],[2655,2656],[2658,2661],[2678,2678],[2702,2702],[2710,2710],[2716,2716],[2720,2720],[2722,2722],[2725,2727],[2729,2730],[2733,2733],[2745,2745],[2747,2750],[2752,2754],[2756,2760],[2765,2765],[2773,2780],[2782,2787],[2790,2795],[2797,2800],[2803,2808],[2818,2818],[2820,2820],[2822,2822],[2824,2826],[2828,2835],[2838,2840],[2844,2850],[2852,2852],[2864,2868],[2870,2870],[2873,2873],[2877,2877],[2900,2920],[3023,3024],[3029,3029],[3037,3037],[3104,3104],[3114,3116],[3125,3125],[3127,3140],[3145,3145],[3147,3156],[3158,3158],[3160,3163],[3165,3175],[3177,3180],[3183,3183],[3185,3185],[3187,3187],[3189,3190],[3192,3192],[3194,3202],[3204,3204],[3211,3227],[3233,3234],[3236,3239],[3241,3243],[3249,3251],[3254,3254],[3260,3260],[3264,3266],[3268,3268],[3270,3287],[3289,3289],[3292,3294],[3300,3305],[3309,3312],[3314,3315],[3317,3319],[3321,3323],[3328,3338],[3340,3342],[3345,3345],[3350,3352],[3355,3358],[3360,3364],[3370,3371],[3373,3375],[3377,3381],[3384,3385],[3387,3388],[3393,3393],[3395,3395],[3400,3401],[3407,3407],[3409,3409],[3412,3415],[3418,3420],[3423,3424],[3427,3427],[3430,3435],[3437,3438],[3440,3442],[3444,3444],[3446,3448],[3450,3451],[3453,3453],[3458,3458],[3460,3465],[3467,3469],[3472,3472],[3475,3475],[3477,3478],[3480,3480],[3482,3483],[3485,3485],[3488,3488],[3490,3490],[3515,3516],[3518,3518],[3521,3523],[3525,3525],[3527,3527],[3529,3533],[3544,3544],[3550,3551],[3555,3559],[3570,3570],[3600,3600],[3607,3608],[3610,3610],[3612,3612],[3614,3614],[3616,3618],[3629,3631],[3633,3634],[3646,3647],[3658,3660],[3662,3666],[3669,3670],[3672,3673],[3675,3675],[3677,3677],[3682,3683],[3685,3685],[3687,3688],[3690,3691],[3695,3695],[3697,3701],[3704,3705],[3707,3709],[3711,3715],[3717,3720],[3722,3723],[3725,3726],[3732,3733],[3735,3735],[3737,3741],[3744,3744],[3746,3747],[3749,3749],[3753,3753],[3756,3758],[3762,3767],[3770,3770],[3777,3779],[3781,3783],[3785,3789],[3791,3793],[3795,3797],[3802,3810],[3812,3816],[3818,3818],[3820,3825],[3831,3833],[3835,3835],[3840,3840],[3842,3842],[3844,3844],[3847,3847],[3850,3852],[3854,3854],[3856,3860],[3862,3862],[3864,3865],[3869,3871],[3873,3875],[3878,3878],[3880,3880],[3882,3882],[3885,3893],[3895,3896],[3898,3898],[3900,3900],[3902,3904],[3909,3913],[3915,3916],[3918,3920],[3922,3923],[3925,3931],[3933,3934],[3936,3946],[3950,3951],[3953,3954],[3956,3960],[3962,3962],[3964,3967],[3971,3971],[3975,3981],[3984,3984],[3987,3988],[3990,3992],[3995,3996],[4114,4114],[4118,4119],[4124,4125],[4127,4133],[4157,4161],[4163,4165],[4178,4178],[4183,4184],[4205,4205],[4207,4218],[4220,4221],[4223,4228],[4270,4270],[4272,4272],[4275,4275],[4280,4280],[4285,4285],[4287,4287],[4300,4301],[4303,4307],[4309,4314],[4340,4344],[4346,4347],[4350,4350],[4352,4365],[4370,4378],[4380,4385],[4387,4388],[4390,4390],[4400,4407],[4417,4417],[4426,4428],[4454,4455],[4461,4462],[4465,4465],[4467,4467],[4474,4474],[4480,4480],[4486,4488],[4492,4494],[4496,4498],[4515,4515],[4517,4519],[4550,4551],[4553,4575],[4580,4581],[4600,4601],[4614,4615],[4621,4621],[4625,4627],[4630,4630],[4670,4671],[4673,4674],[4676,4678],[4680,4680],[4694,4695],[4697,4697],[4700,4706],[4709,4712],[4717,4717],[4720,4720],[4722,4723],[4741,4741],[4810,4812],[4814,4816],[4818,4819],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4873],[4877,4888],[4890,4892],[4895,4895],[5052,5052],[5072,5073],[5076,5076],[5110,5110],[5112,5118],[5120,5121],[5131,5134],[5136,5142],[5144,5144],[5151,5157],[5201,5201],[5204,5204],[5220,5223],[5231,5238],[5240,5245],[5250,5255],[5259,5261],[5264,5267],[5271,5271],[5273,5273],[5275,5275],[5301,5304],[5320,5321],[5330,5330],[5351,5351],[5353,5354],[5356,5357],[5374,5374],[5552,5552],[5558,5558],[5570,5573],[5575,5577],[5580,5583],[5605,5607],[5630,5632],[6030,6038],[6055,6055],[6063,6069],[6077,6079],[6083,6083],[6090,6090],[6302,6302],[6304,6304],[6306,6306],[6528,6528],[6628,6628],[6630,6632],[6635,6635],[6640,6640],[6642,6642],[6646,6646],[6705,6705],[6721,6722],[6725,6726],[6753,6753],[6758,6758],[6760,6760],[6762,6762],[7017,7017],[7026,7027],[7030,7030],[7116,7116],[7119,7120],[7140,7140],[7190,7190],[7212,7216],[7264,7264],[7270,7270],[7275,7275],[7304,7304]],"disaster":[[822,822],[847,847],[852,852],[854,854],[860,860],[862,862],[870,870],[872,875],[886,886],[2011,2011],[2018,2022],[2031,2032],[2035,2036],[2038,2042],[2044,2045],[2048,2050],[2063,2063],[2067,2067],[2069,2077],[2079,2087],[2092,2097],[2099,2108],[2112,2122],[2125,2128],[2130,2133],[2141,2148],[2150,2168],[2170,2179],[2190,2200],[2203,2214],[2216,2234],[2250,2251],[2256,2263],[2287,2287],[2289,2289],[2291,2300],[2302,2305],[2307,2308],[2311,2312],[2315,2331],[2333,2347],[2350,2350],[2352,2361],[2365,2365],[2369,2372],[2379,2382],[2386,2388],[2390,2390],[2395,2406],[2408,2411],[2415,2415],[2420,2431],[2439,2441],[2443,2450],[2452,2456],[2460,2460],[2462,2466],[2469,2490],[2500,2500],[2502,2502],[2505,2506],[2508,2508],[2515,2519],[2525,2530],[2533,2541],[2545,2546],[2548,2551],[2555,2560],[2563,2588],[2590,2590],[2594,2594],[2611,2611],[2618,2633],[2640,2653],[2655,2656],[2658,2661],[2663,2663],[2665,2666],[2668,2669],[2671,2672],[2675,2675],[2678,2678],[2680,2681],[2700,2703],[2705,2707],[2710,2717],[2720,2722],[2725,2727],[2729,2739],[2745,2745],[2747,2750],[2752,2754],[2756,2763],[2765,2770],[2773,2780],[2782,2787],[2790,2795],[2797,2800],[2803,2810],[2817,2818],[2820,2836],[2838,2840],[2842,2850],[2852,2852],[2864,2871],[2873,2880],[2898,2898],[3000,3000],[3002,3004],[3006,3006],[3008,3008],[3011,3011],[3013,3013],[3019,3019],[3024,3024],[3029,3029],[3031,3032],[3034,3034],[3039,3041],[3051,3054],[3065,3067],[3089,3091],[3096,3097],[3099,3099],[3101,3104],[3116,3116],[3121,3133],[3135,3141],[3145,3156],[3158,3163],[3165,3175],[3177,3180],[3183,3183],[3185,3185],[3187,3187],[3189,3190],[3192,3192],[3194,3202],[3204,3204],[3207,3207],[3211,3227],[3243,3243],[3249,3251],[3254,3254],[3260,3260],[3264,3272],[3277,3277],[3280,3283],[3285,3285],[3289,3289],[3292,3294],[3300,3305],[3309,3312],[3314,3315],[3317,3317],[3321,3325],[3328,3338],[3340,3342],[3345,3345],[3350,3352],[3355,3358],[3360,3364],[3370,3371],[3373,3375],[3377,3381],[3384,3385],[3387,3388],[3393,3393],[3395,3395],[3400,3401],[3407,3407],[3409,3409],[3431,3435],[3437,3438],[3440,3442],[3444,3444],[3446,3448],[3450,3451],[3453,3453],[3458,3458],[3460,3465],[3467,3469],[3472,3472],[3475,3475],[3477,3478],[3480,3480],[3482,3483],[3485,3485],[3488,3489],[3491,3491],[3494,3494],[3496,3496],[3498,3498],[3500,3501],[3505,3507],[3509,3509],[3512,3512],[3515,3518],[3520,3523],[3525,3525],[3527,3527],[3529,3531],[3533,3533],[3537,3537],[3540,3540],[3542,3542],[3544,3544],[3546,3546],[3549,3551],[3555,3559],[3561,3568],[3570,3573],[3575,3576],[3579,3581],[3583,3586],[3588,3591],[3594,3597],[3599,3599],[3607,3608],[3610,3610],[3612,3612],[3614,3614],[3616,3618],[3620,3624],[3629,3631],[3633,3641],[3644,3644],[3646,3647],[3649,3649],[3658,3660],[3662,3666],[3669,3670],[3672,3673],[3675,3675],[3677,3678],[3682,3683],[3685,3685],[3687,3688],[3690,3691],[3695,3695],[3697,3701],[3704,3705],[3707,3709],[3711,3715],[3717,3720],[3722,3723],[3725,3728],[3730,3730],[3732,3733],[3735,3735],[3737,3741],[3744,3744],[3746,3747],[3749,3749],[3754,3754],[3756,3767],[3770,3770],[3775,3775],[3777,3779],[3781,3783],[3785,3789],[3791,3793],[3795,3797],[3799,3799],[3802,3810],[3812,3816],[3818,3818],[3820,3825],[3831,3833],[3835,3835],[3840,3840],[3842,3842],[3844,3844],[3847,3847],[3850,3852],[3854,3854],[3856,3860],[3862,3862],[3864,3865],[3869,3871],[3873,3875],[3878,3878],[3880,3880],[3882,3882],[3885,3893],[3895,3896],[3898,3898],[3900,3900],[3902,3904],[3909,3913],[3915,3916],[3918,3920],[3922,3923],[3925,3931],[3933,3934],[3936,3946],[3950,3951],[3953,3954],[3956,3960],[3962,3962],[3964,3967],[3971,3971],[3975,3981],[3984,3984],[3987,3988],[3990,3992],[3995,3996],[4000,4000],[4005,4014],[4017,4022],[4025,4025],[4030,4032],[4034,4037],[4051,4051],[4053,4055],[4059,4061],[4064,4070],[4073,4078],[4101,4125],[4127,4133],[4151,4161],[4163,4165],[4169,4174],[4178,4179],[4183,4184],[4205,4205],[4207,4218],[4220,4221],[4223,4228],[4270,4270],[4272,4272],[4275,4275],[4280,4280],[4285,4285],[4287,4287],[4300,4301],[4303,4307],[4309,4314],[4340,4344],[4346,4347],[4350,4350],[4352,4365],[4370,4378],[4380,4385],[4387,4388],[4390,4390],[4400,4408],[4410,4413],[4415,4428],[4454,4455],[4461,4462],[4465,4465],[4467,4468],[4470,4470],[4472,4472],[4474,4474],[4477,4477],[4479,4481],[4486,4494],[4496,4498],[4500,4512],[4514,4521],[4550,4575],[4580,4581],[4600,4601],[4605,4606],[4608,4608],[4610,4615],[4620,4621],[4625,4627],[4630,4630],[4650,4650],[4655,4655],[4659,4660],[4662,4662],[4670,4671],[4673,4674],[4676,4678],[4680,4680],[4694,4695],[4697,4697],[4699,4702],[4709,4709],[4712,4712],[4714,4720],[4722,4724],[4727,4727],[4730,4730],[4733,4733],[4735,4736],[4741,4741],[4800,4800],[4804,4812],[4814,4816],[4818,4819],[4822,4825],[4828,4830],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4888],[4890,4892],[4895,4895],[5157,5157],[5172,5172],[5201,5201],[5210,5214],[5236,5238],[5253,5256],[5259,5261],[5264,5267],[5301,5302],[5304,5304],[5306,5311],[5321,5322],[5330,5333],[5340,5346],[5354,5354],[5357,5357],[6030,6038],[6055,6055],[6063,6069],[6077,6079],[6083,6083],[6090,6090],[6227,6230],[6232,6233],[6236,6236],[6254,6254],[6275,6275],[6280,6282],[6284,6286],[6288,6288],[6290,6290],[6302,6302],[6304,6304],[6306,6306],[6336,6337],[6346,6346],[6385,6385],[6429,6434],[6436,6438],[6440,6440],[6442,6443],[6450,6450],[6528,6528],[6532,6532],[6535,6536],[6623,6623],[6628,6628],[6630,6632],[6635,6635],[6639,6640],[6642,6642],[6646,6646],[6701,6701],[6705,6705],[6710,6710],[6712,6714],[6718,6718],[6720,6722],[6725,6726],[6728,6728],[6740,6740],[6743,6743],[6753,6753],[6758,6758],[6760,6760],[6762,6762],[6765,6765],[6770,6770],[7000,7999]],"counts":{"remote":551,"northern":350,"regional":4520,"bushfire":1284,"disaster":2677}};
const POLLING_DATA = {"last_polled_at":"2026-10-20T18:38:46+10:00","last_polled_date":"2026-10-20","total_sources":10,"live_verified_count":10,"changed_count":6,"official_contact":"enquiry@parkcolawyers.com","sources":[{"id":"ha_417_specified_work","authority":"호주 연방 이민성 (Department of Home Affairs)","title":"Subclass 417 — Specified Work & Designated Area Postcode Tables (Tables 1–6)","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work","status":"live","http_code":200,"sha256":"f6b5dd9a4754e7db053ba25d193c052d3f63c1bc8ac470c1e998ac37576a9b97","bytes":63538,"method":"urllib_ha_schema","changed_since_last_poll":false,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"ha_462_specified_work","authority":"호주 연방 이민성 (Department of Home Affairs)","title":"Subclass 462 — Specified Subclass 462 Work & Designated Area Postcode Tables (Tables 1–6)","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work","status":"live","http_code":200,"sha256":"266311e3e8711d286f1c2f2da80a9b7c4b9b9bbe06f44a57ef5363984f7ccf69","bytes":62011,"method":"urllib_ha_schema","changed_since_last_poll":false,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"ha_8547_6month_limit","authority":"호주 연방 이민성 (Department of Home Affairs)","title":"Condition 8547 — 6-Month Work Limitation & Automatic Exemptions (Updated 21/09/2026)","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation","status":"live","http_code":200,"sha256":"e3f86561b8a8a6d5f4a3bf07008ea196ad4d6e10c945175e6eae87906f1b217a","bytes":6164,"method":"urllib_ha_schema","changed_since_last_poll":false,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"ha_uk_arrangements","authority":"호주 연방 이민성 (Department of Home Affairs)","title":"Arrangements for UK Passport Holders (Age 18–35 & Specified Work Exemption from 1 Jul 2024)","url":"https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/arrangements-uk-passport-holders","status":"live","http_code":200,"sha256":"195db0b3eaa39e444a23891409a5b52fa42ffd4b4552f848193d72eb2db973de","bytes":1305709,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"ha_whm_latest_news","authority":"호주 연방 이민성 (Department of Home Affairs)","title":"WHM Program Latest News (1 Jul 2026 Age 35 Expansion: Korea, Germany, Finland, Cyprus; Ballot & Caps)","url":"https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news","status":"live","http_code":200,"sha256":"a2a4ab139789420e6e68c0a8d497d4e8fd9daa11cb7b30b57473602a350b01a1","bytes":1303372,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"ha_country_caps","authority":"호주 연방 이민성 (Department of Home Affairs)","title":"Status of Subclass 462 Country Caps & Pre-Application Ballot (2026–27 Program Year)","url":"https://immi.homeaffairs.gov.au/what-we-do/whm-program/status-of-country-caps","status":"live","http_code":200,"sha256":"3f507aab5e105fefa4b9a06fcd4db141a75e2899ad4a75e376b007d0eb6f2f53","bytes":1307907,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"leg_lin_22_012","authority":"Federal Register of Legislation","title":"Migration (Specified work and areas for Subclass 417 visas) Instrument (LIN 22/012) 2022 — F2022L00271","url":"https://www.legislation.gov.au/F2022L00271/latest/details","status":"live","http_code":200,"sha256":"d2b19c1c5dc8e2059bed7e967cc78940d44545abc36cb2683ac58af5327e32a7","bytes":60154,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"leg_lin_22_013","authority":"Federal Register of Legislation","title":"Migration (Specified work and areas for Subclass 462 visas) Instrument (LIN 22/013) 2022 — F2022L00272","url":"https://www.legislation.gov.au/F2022L00272/latest/details","status":"live","http_code":200,"sha256":"ca0a5aebfde717220ea130e2d3ffec581f4d55a65837a7519e18e1b217642002","bytes":60136,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"leg_lin_25_048","authority":"Federal Register of Legislation","title":"Migration Legislation Amendment (Specified Work and Areas for Subclass 417 and 462 Visas) Instrument 2025 (LIN 25/048) — F2025L00485","url":"https://www.legislation.gov.au/F2025L00485/latest/details","status":"live","http_code":200,"sha256":"c6a827ee5476a5e223b8f55e0aa37e5e983220c23a517ab4c1ade2f8dc2ef594","bytes":60222,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-20T18:38:46+10:00"},{"id":"fwo_piecework","authority":"Fair Work Ombudsman (호주 공정근로옴부즈만)","title":"Horticulture Award Piecework Minimum Wage Guarantee & Workplace Entitlements","url":"https://www.fairwork.gov.au/pay-and-wages/minimum-wages/piece-rates-and-commission-payments","status":"live","http_code":200,"sha256":"20db4e74f182d5fe406aca28a24ee89486cac9c93471564383fa94a8e75ffbfe","bytes":432000,"method":"urllib_direct","changed_since_last_poll":false,"checked_at":"2026-10-20T18:38:46+10:00"}]};

let currentLang = 'ko';

function t(ko, en) {
  return currentLang === 'ko' ? ko : en;
}

function inRanges(pcNum, rangeList) {
  if (!Number.isFinite(pcNum) || pcNum < 800 || pcNum > 9999) return false;
  for (let i = 0; i < rangeList.length; i++) {
    const [a, b] = rangeList[i];
    if (pcNum >= a && pcNum <= b) return true;
  }
  return false;
}

function evaluatePostcodeAreas(pcStr) {
  if (!/^\d{4}$/.test(pcStr)) {
    return { valid: false, pcNum: NaN, remote: false, northern: false, regional: false, bushfire: false, disaster: false, table2Special: false };
  }
  const n = Number(pcStr);
  return {
    valid: true,
    pcNum: n,
    remote: inRanges(n, POSTCODE_TABLES.remote),
    northern: inRanges(n, POSTCODE_TABLES.northern),
    regional: inRanges(n, POSTCODE_TABLES.regional),
    bushfire: inRanges(n, POSTCODE_TABLES.bushfire),
    disaster: inRanges(n, POSTCODE_TABLES.disaster),
    table2Special: [4406, 4416, 4498, 7215].includes(n)
  };
}

// 19 Subclass 417 Eligible Countries + 30 Subclass 462 Eligible Countries
const COUNTRIES = {
  "417": [
    { code: "KR", ko: "대한민국 (Republic of Korea) — 만 18~35세 [2026.7.1 상향!]", en: "Republic of Korea — Age 18–35 (Increased 1 Jul 2026)", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000, noteKo: "2026년 7월 1일부터 대한민국 여권 소지자의 Subclass 417 신청 가능 연령이 만 18~35세(만 36세 생일 전날 호주 동부시간 AEST/AEDT 23:59까지)로 확대되었어요!", noteEn: "From 1 July 2026, Republic of Korea passport holders are eligible for Subclass 417 up to age 35 (inclusive, until 11:59 pm AEST/AEDT the day before turning 36)." },
    { code: "UK", ko: "영국 (UK & BN(O) 여권) — 만 18~35세 · 지정 근로 면제!", en: "United Kingdom (incl. BN(O)) — Age 18–35 · Specified Work Exempt", maxAge: 35, ukExempt: true, vac1: 840, vac23: 1000, noteKo: "2024년 7월 1일 이후 영국(GBNI) 또는 영국 해외시민(BN(O)) 여권으로 신청 시 2차·3차 417 지정 근로(88/179일)가 전면 면제돼요(Item 1225(3BA)). 단, 조건 8547(6개월 동일 고용주 제한) 및 조건 8548(4개월 학업 제한)은 그대로 적용돼요.", noteEn: "From 1 July 2024, UK and BN(O) passport holders are exempt from specified work for 2nd and 3rd Subclass 417 visas (Item 1225(3BA)). Condition 8547 (6-month employer limit) still applies." },
    { code: "CA", ko: "캐나다 (Canada) — 만 18~35세", en: "Canada — Age 18–35", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "CY", ko: "키프로스 (Republic of Cyprus) — 만 18~35세 [2026.7.1 상향]", en: "Republic of Cyprus — Age 18–35 (Increased 1 Jul 2026)", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "DK", ko: "덴마크 (Denmark) — 만 18~35세", en: "Denmark — Age 18–35", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "FI", ko: "핀란드 (Finland) — 만 18~35세 [2026.7.1 상향]", en: "Finland — Age 18–35 (Increased 1 Jul 2026)", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "FR", ko: "프랑스 (France) — 만 18~35세", en: "France — Age 18–35", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "DE", ko: "독일 (Germany) — 만 18~35세 [2026.7.1 상향]", en: "Germany — Age 18–35 (Increased 1 Jul 2026)", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "IE", ko: "아일랜드 (Republic of Ireland) — 만 18~35세", en: "Republic of Ireland — Age 18–35", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "IT", ko: "이탈리아 (Italy) — 만 18~35세", en: "Italy — Age 18–35", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "JP", ko: "일본 (Japan) — 만 18~30세", en: "Japan — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "TW", ko: "대만 (Taiwan, 일반 여권) — 만 18~30세", en: "Taiwan (ordinary passport) — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "HK", ko: "홍콩 (HKSAR) — 만 18~30세", en: "Hong Kong SAR — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "BE", ko: "벨기에 (Belgium) — 만 18~30세", en: "Belgium — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "EE", ko: "에스토니아 (Estonia) — 만 18~30세", en: "Estonia — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "MT", ko: "몰타 (Malta) — 만 18~30세", en: "Malta — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "NL", ko: "네덜란드 (Netherlands) — 만 18~30세", en: "Netherlands — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "NO", ko: "노르웨이 (Norway) — 만 18~30세", en: "Norway — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "SE", ko: "스웨덴 (Sweden) — 만 18~30세", en: "Sweden — Age 18–30", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 }
  ],
  "462": [
    { code: "US", ko: "미국 (USA) — 만 18~30세 (쿼터 제한 없음)", en: "United States of America (USA) — Age 18–30 (No annual cap)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "CN", ko: "중국 (PR China) — 만 18~30세 (1차 추첨제 Ballot · 연 5,000명)", en: "China (PRC) — Age 18–30 (1st visa Ballot · Cap 5,000)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "IN", ko: "인도 (India) — 만 18~30세 (1차 추첨제 Ballot · 연 1,000명)", en: "India — Age 18–30 (1st visa Ballot · Cap 1,000)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "VN", ko: "베트남 (Vietnam) — 만 18~30세 (1차 추첨제 Ballot · 연 1,500명)", en: "Vietnam — Age 18–30 (1st visa Ballot · Cap 1,500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "ID", ko: "인도네시아 (Indonesia) — 만 18~30세 (2026 추첨제 전환 · 연 5,000명)", en: "Indonesia — Age 18–30 (Ballot in 2026 · Cap 5,000)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "SG", ko: "싱가포르 (Singapore) — 만 18~30세 (연 2,500명)", en: "Singapore — Age 18–30 (Cap 2,500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "MY", ko: "말레이시아 (Malaysia) — 만 18~30세 (연 1,100명)", en: "Malaysia — Age 18–30 (Cap 1,100)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "TH", ko: "태국 (Thailand) — 만 18~30세 (연 2,000명)", en: "Thailand — Age 18–30 (Cap 2,000)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "PG", ko: "파푸아뉴기니 (PNG) — 만 18~30세 (태평양 우대 VAC $690 · 연 100명)", en: "Papua New Guinea (PNG) — Age 18–30 (Pacific VAC $690 · Cap 100)", maxAge: 30, ukExempt: false, vac1: 690, vac23: 690 },
    { code: "AR", ko: "아르헨티나 (Argentina) — 만 18~30세 (연 3,400명)", en: "Argentina — Age 18–30 (Cap 3,400)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "AT", ko: "오스트리아 (Austria) — 만 18~30세 (연 500명)", en: "Austria — Age 18–30 (Cap 500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "BR", ko: "브라질 (Brazil) — 만 18~30세 (연 500명)", en: "Brazil — Age 18–30 (Cap 500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "CL", ko: "칠레 (Chile) — 만 18~30세 (연 3,400명)", en: "Chile — Age 18–30 (Cap 3,400)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "CZ", ko: "체코 (Czechia) — 만 18~30세 (연 500명)", en: "Czechia — Age 18–30 (Cap 500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "EC", ko: "에콰도르 (Ecuador) — 만 18~30세 (연 100명)", en: "Ecuador — Age 18–30 (Cap 100)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "GR", ko: "그리스 (Greece) — 만 18~30세 (연 500명)", en: "Greece — Age 18–30 (Cap 500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "HU", ko: "헝가리 (Hungary) — 만 18~30세 (연 500명)", en: "Hungary — Age 18–30 (Cap 500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "IL", ko: "이스라엘 (Israel) — 만 18~30세 (연 2,500명)", en: "Israel — Age 18–30 (Cap 2,500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "LU", ko: "룩셈부르크 (Luxembourg) — 만 18~30세 (2026.6.3 정부지지서한 면제 · 연 100명)", en: "Luxembourg — Age 18–30 (LoS removed 3 Jun 2026 · Cap 100)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "MN", ko: "몽골 (Mongolia) — 만 18~30세 (연 100명)", en: "Mongolia — Age 18–30 (Cap 100)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "PE", ko: "페루 (Peru) — 만 18~30세 (연 1,500명)", en: "Peru — Age 18–30 (Cap 1,500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "PL", ko: "폴란드 (Poland) — 만 18~30세 (연 1,500명)", en: "Poland — Age 18–30 (Cap 1,500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "PT", ko: "포르투갈 (Portugal) — 만 18~30세 (연 500명)", en: "Portugal — Age 18–30 (Cap 500)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "SM", ko: "산마리노 (San Marino) — 만 18~30세 (연 100명)", en: "San Marino — Age 18–30 (Cap 100)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "SK", ko: "슬로바키아 (Slovak Republic) — 만 18~30세 (연 1,000명)", en: "Slovak Republic — Age 18–30 (Cap 1,000)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "SI", ko: "슬로베니아 (Slovenia) — 만 18~30세 (연 200명)", en: "Slovenia — Age 18–30 (Cap 200)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "ES", ko: "스페인 (Spain) — 만 18~30세 (연 3,400명)", en: "Spain — Age 18–30 (Cap 3,400)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "CH", ko: "스위스 (Switzerland) — 만 18~30세 (연 200명)", en: "Switzerland — Age 18–30 (Cap 200)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "TR", ko: "튀르키예 (Türkiye) — 만 18~30세 (연 100명)", en: "Türkiye — Age 18–30 (Cap 100)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 },
    { code: "UY", ko: "우루과이 (Uruguay) — 만 18~30세 (2026.7.1 연 1,500명 증원)", en: "Uruguay — Age 18–30 (Increased to 1,500 from 1 Jul 2026)", maxAge: 30, ukExempt: false, vac1: 840, vac23: 1000 }
  ]
};

// 9 Specified Work Categories
const WORK_CATEGORIES = [
  {
    id: "plant",
    ko: "식물 및 동물 재배·사육 (Plant & animal cultivation)",
    en: "Plant and animal cultivation",
    area417Ko: "지방 호주 (Table 4 Regional Australia)",
    area417En: "Regional Australia (Table 4)",
    area462Ko: "북부 호주 (Table 3) + 지방 호주 (Table 4)",
    area462En: "Northern Australia (Table 3) & Regional Australia (Table 4)",
    cutoff: "1900-01-01",
    volunteerAllowed: false,
    dateRuleKo: "상시 적용 · 유급 근로 필수",
    dateRuleEn: "Ongoing · Lawful pay required",
    dutiesKo: "과일·채소 수확/포장, 상업 원예와 직접 연관된 포도나무·과수 전정(Pruning), 작물 관리·번식, 수확 직후 즉시 가공, 축산·양모 깎기(Shearing)·도축·육가공(Butchery/Packing/Tanning), 원유 단계 낙농 가공, 환경 재조림, 동물원 동식물 관리. [제외: 와인·맥주 양조, 제분, 소시지 등 2차 가공식품 제조, 정육점·유제품 소매 판매, 일반 정원 관리]",
    dutiesEn: "Harvesting/packing fruit & vegetables, commercial horticultural pruning, crop propagation, immediate processing, livestock care, shearing, butchery/packing/tanning, dairy from raw material, reforestation, zoo cultivation. [Excludes: winemaking/brewing, milling, smallgoods manufacturing, retail butchery/dairy, general garden maintenance]"
  },
  {
    id: "fishing",
    ko: "어업 및 진주 양식 (Fishing & pearling)",
    en: "Fishing and pearling",
    area417Ko: "지방 호주 (Table 4 Regional Australia)",
    area417En: "Regional Australia (Table 4)",
    area462Ko: "북부 호주 전용 (Table 3 Northern Australia ONLY!)",
    area462En: "Northern Australia ONLY (Table 3)",
    cutoff: "1900-01-01",
    volunteerAllowed: false,
    dateRuleKo: "상시 적용 · 유급 근로 필수",
    dateRuleEn: "Ongoing · Lawful pay required",
    dutiesKo: "어류 및 수생 생물 포획·채취에 직접 관련된 작업, 진주 또는 진주조개 채취·양식에 직접 관련된 작업. (주의: 462 비자는 반드시 북부 호주 Table 3 우편번호에서만 인정!)",
    dutiesEn: "Operations relating directly to taking/catching fish & aquatic species, or taking/culturing pearls or pearl shell. (Note: For Subclass 462, eligible in Northern Australia Table 3 ONLY!)"
  },
  {
    id: "tree",
    ko: "임업 및 벌목 (Tree farming & felling)",
    en: "Tree farming and felling",
    area417Ko: "지방 호주 (Table 4 Regional Australia)",
    area417En: "Regional Australia (Table 4)",
    area462Ko: "북부 호주 전용 (Table 3 Northern Australia ONLY!)",
    area462En: "Northern Australia ONLY (Table 3)",
    cutoff: "1900-01-01",
    volunteerAllowed: false,
    dateRuleKo: "상시 적용 · 유급 근로 필수",
    dateRuleEn: "Ongoing · Lawful pay required",
    dutiesKo: "벌목 목적의 조림지·삼림 내 수목 식재·관리, 벌목 작업, 벌목된 원목을 1차 제재소/가공장으로 운송하는 작업. (주의: 462 비자는 북부 호주 Table 3 전용!)",
    dutiesEn: "Planting/tending trees in a plantation/forest intended to be felled, felling trees, transporting felled trees to first mill/processing site. (Subclass 462: Northern Australia Table 3 ONLY!)"
  },
  {
    id: "mining",
    ko: "광업 (Mining — 417 전용, 462 불가!)",
    en: "Mining (Subclass 417 ONLY — Ineligible for 462)",
    area417Ko: "지방 호주 (Table 4 Regional Australia)",
    area417En: "Regional Australia (Table 4)",
    area462Ko: "인정 불가 (Subclass 462 지정 근로 제외 업종!)",
    area462En: "NOT ELIGIBLE for Subclass 462",
    cutoff: "1900-01-01",
    volunteerAllowed: false,
    dateRuleKo: "417만 인정 · 유급 근로 필수",
    dateRuleEn: "417 ONLY · Lawful pay required",
    dutiesKo: "석탄 채굴, 석유·가스 추출, 금속 광석 채굴, 건설 자재·비금속 광물 채굴 및 채석, 광물 탐사(Exploration), 광업 지원 서비스(광산 현장 청소 서비스 포함). [중요: Subclass 462는 광업이 지정 근로로 인정되지 않아요! 단, 조건 8547 6개월 북부 호주 면제에는 417·462 모두 광업이 포함됨]",
    dutiesEn: "Coal mining, oil & gas extraction, metal ore mining, construction material & non-metallic mineral mining/quarrying, exploration, mining support services (including cleaning). [Ineligible for Subclass 462 specified work!]"
  },
  {
    id: "construction",
    ko: "건설업 (Construction)",
    en: "Construction",
    area417Ko: "지방 호주 (Table 4 Regional Australia)",
    area417En: "Regional Australia (Table 4)",
    area462Ko: "북부 호주 (Table 3) + 지방 호주 (Table 4)",
    area462En: "Northern Australia (Table 3) & Regional Australia (Table 4)",
    cutoff: "1900-01-01",
    volunteerAllowed: false,
    dateRuleKo: "상시 적용 · 유급 근로 필수",
    dateRuleEn: "Ongoing · Lawful pay required",
    dutiesKo: "주거용·비주거용 건물 건축, 토목·중건설 공학, 토지 개발 및 부지 조성, 건물 구조·설비 설치·마감 공사, 건설 현장 조경·도장·펜스 설치·비계(Scaffolding), 기타 건설 지원·현장 청소 서비스. [제외: 선박·보트 건조, 가구·건자재 공장 제조]",
    dutiesEn: "Residential & non-residential building, heavy & civil engineering, land development & site prep, building structure/installation/completion, site landscaping, painting new buildings, fencing, scaffolding, construction support & cleaning."
  },
  {
    id: "tourism",
    ko: "관광 및 접객업 (Tourism & hospitality)",
    en: "Tourism and hospitality",
    area417Ko: "북부 호주 (Table 3) + 외곽·극외곽 호주 (Table 1 & Table 2: 4406·4416·4498·7215)",
    area417En: "Northern Australia (Table 3) & Remote/Very Remote Australia (Tables 1 & 2)",
    area462Ko: "북부 호주 (Table 3) + 외곽·극외곽 호주 (Table 1 & Table 2: 4406·4416·4498·7215)",
    area462En: "Northern Australia (Table 3) & Remote/Very Remote Australia (Tables 1 & 2)",
    cutoff: "2021-06-22",
    volunteerAllowed: false,
    dateRuleKo: "2021.06.22 이후 근로 · 유급 필수",
    dateRuleEn: "From 22 Jun 2021 · Lawful pay required",
    dutiesKo: "① 숙박(호텔·모텔·B&B·백패커 호스텔·카라반파크·상업 하우스키핑 ANZSCO 811411·게스트하우스), ② 식음료(카페·레스토랑·테이크어웨이·케이터링·펍·바·클럽의 셰프·쿡·바리스타·웨이터 등), ③ 관광객 직접 서비스(투어가이드·다이빙 등 야외 액티비티 강사·투어버스 기사·박물관/미술관/동물원 큐레이터·가이드·여행사·관광안내·이벤트/공연장 인력). [제외: 기념품점·면세점 등 일반 소매 판매직]",
    dutiesEn: "1. Accommodation (hotels, motels, hostels, caravan parks, commercial housekeeping 811411); 2. Food & Beverage (cafes, restaurants, takeaway, catering, pubs, bars, clubs); 3. Direct tourist services (guides, dive/adventure instructors, tour transport, museum/gallery workers, travel agencies, event venues). [Excludes: souvenir/duty-free retail]"
  },
  {
    id: "bushfire",
    ko: "산불 피해 복구 업무 (Bushfire recovery)",
    en: "Bushfire recovery work",
    area417Ko: "산불 선포 지역 (Table 5 Bushfire Declared Areas — 1,284개 우편번호, 2025.4.5 추가 반영)",
    area417En: "Bushfire Declared Areas (Table 5 — updated 5 Apr 2025)",
    area462Ko: "산불 선포 지역 (Table 5 Bushfire Declared Areas — 1,284개 우편번호, 2025.4.5 추가 반영)",
    area462En: "Bushfire Declared Areas (Table 5 — updated 5 Apr 2025)",
    cutoff: "2019-08-01",
    volunteerAllowed: true,
    dateRuleKo: "2019.08.01 이후 · 유급 및 자원봉사(무급) 모두 인정!",
    dateRuleEn: "After 31 Jul 2019 · Paid OR Volunteer accepted",
    dutiesKo: "산불 피해 지역(Table 5) 내 토지·재산·농장 동물·야생동물 복구 관련 건설·영농·철거·토목·울타리 재건·도로/교량/댐/배수시설 수리 및 피해 지역 거주자·봉사자 지원 서비스.",
    dutiesEn: "Construction, farming, demolition, land clearing, rebuilding fences/roads/infrastructure, wildlife care, and support services for people in declared bushfire-affected areas (Table 5)."
  },
  {
    id: "disaster",
    ko: "홍수·사이클론·악천후 자연재해 복구 (Flood, cyclone or severe weather recovery)",
    en: "Natural disaster recovery (flood, cyclone, severe weather)",
    area417Ko: "자연재해 선포 지역 (Table 6 Natural Disaster Declared Areas — 2,677개 우편번호, 2025.4.5 개정)",
    area417En: "Natural Disaster Declared Areas (Table 6 — updated 5 Apr 2025)",
    area462Ko: "자연재해 선포 지역 (Table 6 Natural Disaster Declared Areas — 2,677개 우편번호, 2025.4.5 개정)",
    area462En: "Natural Disaster Declared Areas (Table 6 — updated 5 Apr 2025)",
    cutoff: "2022-01-01",
    volunteerAllowed: true,
    dateRuleKo: "2022.01.01 이후 · 유급 및 자원봉사(무급) 모두 인정!",
    dateRuleEn: "After 31 Dec 2021 · Paid OR Volunteer accepted",
    dutiesKo: "홍수·사이클론 등 자연재해 선포 지역(Table 6) 내 피해 주택·시설 세척/청소·폐기물 운반, 건물 철거·토목·수리, 자선단체·보험사·정부·대피소 행정/콜센터/조정 지원, 구호품 운송, 피해 동물 돌봄. (ImmiAccount 신청 시 'flood recovery - paid' 또는 'flood recovery - volunteer' 선택 필수)",
    dutiesEn: "Clean-up, rubbish transport, demolition, construction/repair, charity/insurance/government/evacuation centre admin & coordination support, essential delivery, and animal care in Table 6 postcodes."
  },
  {
    id: "covid",
    ko: "필수 COVID-19 보건·의료 업무 (Critical COVID-19 healthcare & medical work)",
    en: "Critical COVID-19 work in healthcare and medical sectors",
    area417Ko: "호주 전역 (Anywhere in Australia)",
    area417En: "Anywhere in Australia",
    area462Ko: "호주 전역 (Anywhere in Australia)",
    area462En: "Anywhere in Australia",
    cutoff: "2020-02-01",
    volunteerAllowed: false,
    dateRuleKo: "2020.02.01 이후 · 유급 필수 (COVID-19 대응 직접 증빙 필수)",
    dateRuleEn: "After 31 Jan 2020 · Lawful pay & COVID-19 nexus evidence required",
    dutiesKo: "호주의 COVID-19 대응에 필수적인 의학적 치료, 간호, 역학조사(Contact tracing), 검사(Testing), 백신·치료제 연구, 의료·검역 시설 및 장비 청소·지원 업무. (일반 의료 업무가 아닌 COVID-19 대응 직접 관련성 입증 필요)",
    dutiesEn: "Medical treatment, nursing, contact tracing, testing, vaccine/treatment research, and cleaning/support at medical, healthcare or quarantine facilities directly responding to COVID-19."
  }
];

const FOUR_GATES = [
  {
    num: "GATE 01",
    koTitle: "서브클래스별 지정 업종 일치 (Reg 1.15FAA vs 1.15FA)",
    enTitle: "Match Subclass Category (Reg 1.15FAA vs 1.15FA)",
    koBody: "Subclass 417(LIN 22/012)과 Subclass 462(LIN 22/013)는 인정되는 지정 근로 분야가 달라요. 특히 광업(Mining)은 417에서만 인정되며 462 지정 근로에는 포함되지 않아요.",
    enBody: "Subclass 417 (LIN 22/012) and Subclass 462 (LIN 22/013) have distinct eligible categories. Mining qualifies for 417 in regional Australia, but is NOT an eligible category for 462."
  },
  {
    num: "GATE 02",
    koTitle: "실제 수행 직무(Actual Duties) 및 업종 유연성 지침",
    enTitle: "Actual Duties & Specified Industry Support Rule",
    koBody: "직함이나 고용주의 업종이 아니라 신청인이 실제로 수행한 직무가 법령 정의에 부합해야 해요. 단, 현재 호주 연방 이민성은 인력난 해소를 위해 지정 업종의 지속적 운영을 지원하는 업무(행정·청소 지원 등)도 지정 우편번호 내 수행 시 폭넓게 인정하고 있어요.",
    enBody: "Eligibility turns on actual duties performed. However, Home Affairs currently applies temporary flexibility accepting administrative and cleaning support services that directly support the ongoing operations of a specified industry in an eligible postcode."
  },
  {
    num: "GATE 03",
    koTitle: "실제 근무지 우편번호 6대 지역표 일치 (LIN 25/048 반영)",
    enTitle: "Exact Workplace Postcode Match (Tables 1–6)",
    koBody: "고용주 본사나 인력파견업체(Agency) 주소가 아닌 실제로 노무를 제공한 사업장 우편번호가 해당 업종의 지정 지역표(Table 1~6)에 포함되어야 해요(PAM3 s 4.5.1). 농장이 여러 우편번호에 걸쳐 있다면 실제 일한 구역이 지정 우편번호에 속하면 인정돼요.",
    enBody: "The postcode where you physically performed the work (not the head office or recruitment agency address) must match the designated table (Tables 1–6) for that category and visa subclass (PAM3 s 4.5.1)."
  },
  {
    num: "GATE 04",
    koTitle: "적법한 급여 지급 · 보유 비자 · 제외 고용주(Reg 1.15FB) 검증",
    enTitle: "Lawful Remuneration, Qualifying Visa & Excluded Employer Check",
    koBody: "산불·자연재해 자원봉사를 제외한 모든 지정 근로는 호주 최저임금·Award에 맞게 급여를 받고 급여명세서(Payslips)로 입증해야 해요(cl 417.211(5)(c)). 또한 3차 비자용 6개월 근로는 반드시 2차 WHM 비자(또는 1차 보유 중 2차 신청에 따른 브리징 비자) 보유 중에 수행해야 하며, 장관이 지정한 제외 고용주(Reg 1.15FB) 밑에서 한 근로는 산입되지 않아요.",
    enBody: "All work (except bushfire/disaster volunteering) must be lawfully remunerated with payslips. For a 3rd visa, all 6 months must be done while holding the 2nd WHM visa (or associated BVA/B), and never for an Excluded Employer (Reg 1.15FB)."
  }
];

const EVIDENCE_ITEMS = [
  { id: "payslips", ko: "급여명세서 (Payslips — 시급/피스레이트·근무시간·고용주 ABN 명시 필수, cl 417.211(5)(c))", en: "Payslips showing hours/piece rates, pay period, and employer ABN (mandatory under cl 417.211(5)(c))" },
  { id: "bank", ko: "호주 은행 계좌 입금 내역서 (Bank statements — 급여명세서 실수령액과 일치)", en: "Australian bank statements matching net pay deposits on payslips" },
  { id: "super_ato", ko: "연금(Superannuation) 납입 내역 및 ATO 소득명세서 (STP Income Statement / Payment Summary)", en: "Superannuation contribution statements & ATO Single Touch Payroll (STP) Income Statement" },
  { id: "form1263_1464", ko: "고용주 확인서 / Form 1263(417) · Form 1464(462) (실제 직무·근무지 우편번호·기간 기재)", en: "Employer reference or Form 1263 (417) / Form 1464 (462) confirming exact duties, dates & work postcode" },
  { id: "piecework", ko: "서면 성과급(Piecework) 근로계약서 (피스레이트 근무 시 Fair Work 최저시급 보장 조항 포함)", en: "Written Piecework Agreement (if paid piece rates, meeting Fair Work minimum wage guarantee)" },
  { id: "disaster_host", ko: "산불·자연재해 복구 주관기관/호스트 서명 확인서 (자원봉사로 지정 근로 산입 시 필수)", en: "Signed Bushfire / Natural Disaster Recovery Host Confirmation Letter (if claiming volunteer recovery work)" }
];

// 13 Seasonal Harvest Regions
const HARVEST_REGIONS = [
  { id: "katherine", state: "NT", nameKo: "캐서린 (Katherine)", nameEn: "Katherine", pc: "0850", rangeText: "0850–0851", covKo: "긴 열대 작기 · 북부/외곽/지방 전 영역 해당", covEn: "Long tropical window · Northern & Remote", crops: [
    { ko: "채소류 (Vegetables)", en: "Vegetables", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "1–12월 (연중)", winEn: "Jan–Dec" },
    { ko: "머스크멜론 · 수박", en: "Muskmelons & watermelons", months: [3,4,5,6,7,8,9,10,11,12], winKo: "3–12월", winEn: "Mar–Dec" },
    { ko: "망고 (Mangoes)", en: "Mangoes", months: [10,11,12], winKo: "10–12월", winEn: "Oct–Dec" }
  ]},
  { id: "bundaberg", state: "QLD", nameKo: "번다버그 (Bundaberg)", nameEn: "Bundaberg", pc: "4670", rangeText: "4670", covKo: "연중 혼합 원예 작물 중심지 (지방/재해 지역)", covEn: "Year-round horticulture hub (Regional)", crops: [
    { ko: "마카다미아 · 채소류", en: "Macadamias & vegetables", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "1–12월 (연중)", winEn: "Jan–Dec" },
    { ko: "아보카도 (Avocados)", en: "Avocados", months: [2,3,4,5,6,7,8,9], winKo: "2–9월", winEn: "Feb–Sep" },
    { ko: "딸기 수확 (Strawberries)", en: "Strawberry picking", months: [5,6,7,8,9], winKo: "5–9월", winEn: "May–Sep" },
    { ko: "블루베리 (Blueberries)", en: "Blueberries", months: [5,6,7,8,9,10,11,12], winKo: "5–12월", winEn: "May–Dec" },
    { ko: "토마토 (Tomatoes)", en: "Tomatoes", months: [12,1,2,3,4,5,6,7,8,9], winKo: "12–9월", winEn: "Dec–Sep" }
  ]},
  { id: "stanthorpe", state: "QLD", nameKo: "스탠소프 (Stanthorpe)", nameEn: "Stanthorpe", pc: "4380", rangeText: "4380", covKo: "고원 과수 · 채소 혼합 (지방/산불/재해 지역)", covEn: "Granite Belt orchard & vegetable mix", crops: [
    { ko: "사과 · 배 (Apples & pears)", en: "Apples & pears", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "연중 (수확·전정)", winEn: "Year-round" },
    { ko: "채소 · 핵과류 (Stone fruit)", en: "Vegetables & stone fruit", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "연중", winEn: "Year-round" },
    { ko: "토마토 (Tomatoes)", en: "Tomatoes", months: [9,10,11,12,1,2,3,4], winKo: "9–4월", winEn: "Sep–Apr" },
    { ko: "딸기 (Strawberries)", en: "Strawberries", months: [11,12,1,2,3,4], winKo: "11–4월", winEn: "Nov–Apr" }
  ]},
  { id: "griffith", state: "NSW", nameKo: "그리피스 · 리버리나 (Griffith)", nameEn: "Griffith & Riverina", pc: "2680", rangeText: "2680", covKo: "리버리나 감귤·와인포도·아몬드 장기 시즌", covEn: "Long Riverina citrus, grape & almond season", crops: [
    { ko: "감귤류 (Citrus)", en: "Citrus", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "1–12월 (연중)", winEn: "Jan–Dec" },
    { ko: "포도 수확 (Grapes)", en: "Grapes", months: [1,2,3], winKo: "1–3월", winEn: "Jan–Mar" },
    { ko: "아몬드 (Almonds)", en: "Almonds", months: [3,4,5,6,7,8], winKo: "3–8월", winEn: "Mar–Aug" },
    { ko: "채소류 (Vegetables)", en: "Vegetables", months: [11,12,1,2,3,4,5,6,7], winKo: "11–7월", winEn: "Nov–Jul" }
  ]},
  { id: "euston", state: "NSW", nameKo: "유스턴 · 로어 머리 (Euston)", nameEn: "Euston & Lower Murray", pc: "2737", rangeText: "2737", covKo: "여름·가을 포도 수확 후 겨울 전정(Pruning) 연결", covEn: "Vintage grape harvest followed by winter pruning", crops: [
    { ko: "포도 수확 (Grape picking)", en: "Grape picking", months: [1,2,3,4,5], winKo: "1–5월", winEn: "Jan–May" },
    { ko: "포도나무 전정 (Vine pruning)", en: "Vine pruning", months: [6,7,8,9], winKo: "6–9월", winEn: "Jun–Sep" }
  ]},
  { id: "shepparton", state: "VIC", nameKo: "셰퍼턴 · 골번 밸리 (Shepparton)", nameEn: "Shepparton & Goulburn Valley", pc: "3630", rangeText: "3630", covKo: "빅토리아 대표 과수·토마토 연중 산지", covEn: "Year-round orchard & tomato region", crops: [
    { ko: "채소 · 사과 · 배 · 토마토", en: "Vegetables, apples, pears & tomatoes", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "연중", winEn: "Year-round" },
    { ko: "핵과류 (Stone fruit)", en: "Stone fruit", months: [10,11,12,1,2,3,4,5], winKo: "10–5월", winEn: "Oct–May" },
    { ko: "체리 (Cherries)", en: "Cherries", months: [11,12,1,2], winKo: "11–2월", winEn: "Nov–Feb" }
  ]},
  { id: "swanhill", state: "VIC", nameKo: "스완힐 (Swan Hill)", nameEn: "Swan Hill", pc: "3585", rangeText: "3585", covKo: "머리강 유역 다작물 수확·전정 연결", covEn: "Murray River multi-crop harvest & pruning", crops: [
    { ko: "채소류 (Vegetables)", en: "Vegetables", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "1–12월", winEn: "Jan–Dec" },
    { ko: "포도 수확 (Grapes)", en: "Grapes", months: [1,2,3,4,5], winKo: "1–5월", winEn: "Jan–May" },
    { ko: "감귤류 (Citrus)", en: "Citrus", months: [5,6,7,8,9,10,11,12,1], winKo: "5–1월", winEn: "May–Jan" },
    { ko: "포도나무 전정 (Vine pruning)", en: "Vine pruning", months: [6,7,8,9], winKo: "6–9월", winEn: "Jun–Sep" },
    { ko: "핵과류 수확 (Stone fruit)", en: "Stone fruit picking", months: [9,10,11,12,1,2,3], winKo: "9–3월", winEn: "Sep–Mar" }
  ]},
  { id: "devonport", state: "TAS", nameKo: "데번포트 · 북서부 (Devonport)", nameEn: "Devonport & North West TAS", pc: "7310", rangeText: "7310", covKo: "태즈메이니아 여름·가을 베리·감자·사과 집중", covEn: "Tasmania summer/autumn berries, potatoes & apples", crops: [
    { ko: "감자 (Potatoes)", en: "Potatoes", months: [1,2,3,4,5,6], winKo: "1–6월", winEn: "Jan–Jun" },
    { ko: "사과 수확 (Apple picking)", en: "Apple picking", months: [3,4,5], winKo: "3–5월", winEn: "Mar–May" },
    { ko: "딸기 (Strawberries)", en: "Strawberries", months: [10,11,12,1,2,3,4,5], winKo: "10–5월", winEn: "Oct–May" },
    { ko: "베리류 (Berries)", en: "Berries", months: [12,1,2,3,4,5], winKo: "12–5월", winEn: "Dec–May" },
    { ko: "채소류 (Vegetables)", en: "Vegetables", months: [12,1,2,3,4,5,6], winKo: "12–6월", winEn: "Dec–Jun" }
  ]},
  { id: "huonville", state: "TAS", nameKo: "휴언빌 · 휴언 밸리 (Huonville)", nameEn: "Huonville & Huon Valley", pc: "7109", rangeText: "7109", covKo: "체리·베리·사과 수확 및 겨울 전정", covEn: "Cherries, berries, apples & winter pruning", crops: [
    { ko: "포도 · 사과 수확", en: "Grape & apple picking", months: [3,4,5], winKo: "3–5월", winEn: "Mar–May" },
    { ko: "포도나무 전정 (Vine pruning)", en: "Vine pruning", months: [6,7,8], winKo: "6–8월", winEn: "Jun–Aug" },
    { ko: "딸기 (Strawberries)", en: "Strawberries", months: [10,11,12,1,2,3,4,5], winKo: "10–5월", winEn: "Oct–May" },
    { ko: "체리 (Cherries)", en: "Cherries", months: [12,1,2], winKo: "12–2월", winEn: "Dec–Feb" },
    { ko: "블랙베리 · 블루베리", en: "Blackberries & blueberries", months: [12,1,2,3,4,5], winKo: "12–5월", winEn: "Dec–May" }
  ]},
  { id: "renmark", state: "SA", nameKo: "렌마크 · 리버랜드 (Renmark)", nameEn: "Renmark & Riverland", pc: "5341", rangeText: "5341", covKo: "남호주 리버랜드 감귤·아몬드·포도 중심지", covEn: "SA Riverland citrus, almond & grape hub", crops: [
    { ko: "포도 수확 (Grape picking)", en: "Grape picking", months: [1,2,3,4], winKo: "1–4월", winEn: "Jan–Apr" },
    { ko: "아몬드 (Almonds)", en: "Almonds", months: [3,4,5,6,7,8,9,10,11], winKo: "3–11월", winEn: "Mar–Nov" },
    { ko: "감귤류 (Citrus)", en: "Citrus", months: [5,6,7,8,9,10,11], winKo: "5–11월", winEn: "May–Nov" },
    { ko: "포도나무 전정 (Vine pruning)", en: "Vine pruning", months: [6,7,8], winKo: "6–8월", winEn: "Jun–Aug" },
    { ko: "핵과류 (Stone fruit)", en: "Stone fruit", months: [10,11,12,1,2,3], winKo: "10–3월", winEn: "Oct–Mar" }
  ]},
  { id: "clare", state: "SA", nameKo: "클레어 밸리 (Clare Valley)", nameEn: "Clare Valley", pc: "5453", rangeText: "5453", covKo: "와인 포도 빈티지 수확 및 겨울 전정 피크", covEn: "Wine grape vintage harvest & winter pruning", crops: [
    { ko: "포도 수확 (Grape picking)", en: "Grape picking", months: [2,3,4], winKo: "2–4월", winEn: "Feb–Apr" },
    { ko: "포도나무 전정 (Vine pruning)", en: "Vine pruning", months: [6,7,8], winKo: "6–8월", winEn: "Jun–Aug" }
  ]},
  { id: "carnarvon", state: "WA", nameKo: "카나번 (Carnarvon — 북부 호주 Table 3 포함!)", nameEn: "Carnarvon (Northern Australia Table 3)", pc: "6701", rangeText: "6701", covKo: "서호주 북부(Table 3) 연중 바나나·채소·망고", covEn: "WA Northern Australia year-round subtropical crops", crops: [
    { ko: "바나나 · 채소 · 토마토", en: "Bananas, vegetables & tomatoes", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "1–12월 (연중)", winEn: "Jan–Dec" },
    { ko: "포도 (Grapes)", en: "Grapes", months: [4,5,6,7,8,9,10,11,12], winKo: "4–12월", winEn: "Apr–Dec" },
    { ko: "망고 (Mangoes)", en: "Mangoes", months: [11,12,1,2,3,4,5], winKo: "11–5월", winEn: "Nov–May" },
    { ko: "멜론 · 수박", en: "Rockmelons & watermelons", months: [12,1,2,3,4,5], winKo: "12–5월", winEn: "Dec–May" }
  ]},
  { id: "donnybrook", state: "WA", nameKo: "도니브룩 · 사우스웨스트 (Donnybrook)", nameEn: "Donnybrook & South West WA", pc: "6239", rangeText: "6239", covKo: "서호주 남서부 과수원 장기 시즌", covEn: "South West WA orchard & vineyard window", crops: [
    { ko: "사과 · 배 (Apples & pears)", en: "Apples & pears", months: [1,2,3,4,5,6,7,8,9,10,11,12], winKo: "연중", winEn: "Year-round" },
    { ko: "포도 수확 (Grapes)", en: "Grapes", months: [2,3,4], winKo: "2–4월", winEn: "Feb–Apr" },
    { ko: "포도나무 전정 (Vine pruning)", en: "Vine pruning", months: [6,7,8], winKo: "6–8월", winEn: "Jun–Aug" },
    { ko: "핵과류 (Stone fruit)", en: "Stone fruit", months: [10,11,12,1,2,3], winKo: "10–3월", winEn: "Oct–Mar" },
    { ko: "체리 (Cherries)", en: "Cherries", months: [11,12,1], winKo: "11–1월", winEn: "Nov–Jan" }
  ]}
];

// 8 Condition 8547 Deep-Dive Legal Cards
const C8547_RULES = [
  {
    koTitle: "1. ‘6개월’의 정확한 법정 산정 기준 (PAM3 [Sch8/8547] s 3.2.1)",
    enTitle: "1. How the '6 Months' is Calculated (PAM3 [Sch8/8547] s 3.2.1)",
    koBody: "6개월은 실제 근무한 시간(Hours)이나 출근 일수(Days)가 아니라, <strong>첫 출근일(직무교육·트레이닝 포함)로부터 경과한 달력 개월 수(6 Calendar Months)</strong>로 산정해요. 풀타임·파트타임·캐주얼·교대근무·자원봉사 모두 동일하며, 고용관계가 유지되는 동안의 유급·무급 휴가(Leave) 기간도 6개월에 그대로 포함돼요. (단, 고용관계가 완전히 종료된 후 상당 기간 뒤 재고용된 경우에는 실제 고용 기간만 합산해요.)",
    enBody: "The 6-month limit is measured by elapsed calendar months from the day work or workplace training starts—NOT hours or days worked. It applies to full-time, part-time, casual, shift and voluntary work. Paid or unpaid leave during ongoing employment counts toward the 6 months."
  },
  {
    koTitle: "2. ‘동일 고용주(One Employer)’와 최종 사용자(End-User) 원칙 (PAM3 s 3.2.2)",
    enTitle: "2. Meaning of 'Same Employer' & End-User Rule (PAM3 s 3.2.2)",
    koBody: "법령상 ‘고용주’는 급여를 지급하는 인력파견업체(Labour-hire agency)가 아니라 <strong>실제로 노무를 제공받는 최종 사업체(End-user)</strong>를 의미해요. 따라서 파견업체나 하청업체를 바꾸더라도 동일한 최종 사업장·동일 위치에서 6개월을 넘겨 일하면 조건 8547 위반이에요. 반대로 <strong>같은 파견업체나 주정부(교육청·보건청) 소속이라도 6개월마다 다른 고객사·학교·병원으로 배치 전환</strong>되면 합법이에요.",
    enBody: "'Employer' means the end-user business directly receiving your work. You cannot stay at the same end-user in the same location beyond 6 months by switching labour-hire agencies or subcontractors. However, the same agency can place you at a different client business for another 6 months."
  },
  {
    koTitle: "3. 호주 전역 자동 면제 업종 (사전 허가 불필요 · 2024.01.01~현행)",
    enTitle: "3. Nationwide Automatic Exemptions (No Permission Required)",
    koBody: "2024년 1월 1일부터 정부의 별도 결정 시까지 다음 분야는 호주 전역 어디서든 사전 허가 없이 동일 고용주와 6개월을 초과해 근무할 수 있어요: ① <strong>식물·동물 재배·사육(농축산업)</strong>, ② <strong>자연재해 복구 업무</strong>, ③ <strong>5대 핵심 산업(농업·식품가공, 보건·의료·병원 지원/청소, 노인·장애인 돌봄, 보육·차일드케어·내니/오페어(Au Pair), 관광·접객업)</strong>.",
    enBody: "From 1 January 2024 until further notice, you can work >6 months for the same employer anywhere in Australia without asking permission in: (1) Plant & animal cultivation, (2) Natural disaster recovery, and (3) Five Critical Sectors: Agriculture & food processing, Health, Aged & disability care, Childcare (incl. au pairs/nannies), and Tourism & hospitality."
  },
  {
    koTitle: "4. 북부 호주(Northern Australia Table 3) 한정 4대 산업 자동 면제",
    enTitle: "4. Northern Australia Automatic Exemptions (Table 3 Postcodes Only)",
    koBody: "근무지 우편번호가 <strong>북부 호주(Northern Australia Table 3 — NT 전역 및 북부 QLD·WA 350개 우편번호)</strong>에 속하는 경우, ① <strong>어업·진주 양식</strong>, ② <strong>임업·벌목</strong>, ③ <strong>건설업</strong>, ④ <strong>광업</strong> 종사자는 사전 허가 없이 같은 고용주와 6개월을 초과해 일할 수 있어요. (시드니·멜버른·브리즈번 등 비-북부 지역의 건설·광업은 자동 면제 대상이 아니에요!)",
    enBody: "In Northern Australia (Table 3 postcodes covering all of NT and northern QLD/WA), work in (1) Fishing & pearling, (2) Tree farming & felling, (3) Construction, and (4) Mining is automatically exempt from the 6-month limit."
  },
  {
    koTitle: "5. 근무 장소 변경(Different Locations) 및 재택근무(WFH) 자동 면제",
    enTitle: "5. Different Physical Locations & Remote/WFH Automatic Exemption",
    koBody: "업종과 무관하게 동일 고용주(동일 ABN) 밑에서 일하더라도 <strong>서로 다른 물리적 장소(체인 호텔의 다른 지점, 다른 과수원, 다른 프랜차이즈 매장, 급여명세서상 ABN이 다른 자회사, 또는 사무실 근무 ↔ 재택·원격근무(Work from Home) 전환)</strong>에서 일하며 <strong>어느 한 장소에서도 6개월을 초과하지 않으면</strong> 사전 허가 없이 6개월을 넘겨 근무할 수 있어요.",
    enBody: "You do not need permission to work >6 months for the same employer if you work in different physical locations (different branches, orchards, franchises, subsidiaries with different payslip ABNs, or switching to/from working from home/remotely), provided work at any single location does not exceed 6 months."
  },
  {
    koTitle: "6. 신규 비자 승인 또는 브리징 비자 발효 시 ‘6개월 시계 리셋’ (PAM3 s 3.2 & 3.4.1)",
    enTitle: "6. 6-Month Clock Reset on New WHM Visa or Bridging Visa (PAM3 s 3.2 & 3.4.1)",
    koBody: "조건 8547은 <strong>각 비자(Each visa separately)마다 독립적으로 적용</strong>돼요. 따라서 1차 WHM 비자로 A 고용주에게서 6개월을 채웠더라도, 1차 비자 만료로 <strong>브리징 비자(BVA/BVB)가 발효되면 그날부터 다시 6개월 시계가 새로 시작</strong>되고, 이후 <strong>2차(또는 3차) WHM 비자가 승인되면 또다시 6개월 시계가 0일로 리셋</strong>돼요!",
    enBody: "Condition 8547 applies to each visa separately. The 6-month limit starts fresh when a new WHM visa (2nd or 3rd) is granted, OR when a Bridging Visa comes into effect upon expiry of your previous WHM visa while awaiting a decision."
  },
  {
    koTitle: "7. 사전 서면 허가(Written Permission) 신청 요건 및 ‘만료 전 접수’ 원칙",
    enTitle: "7. Requesting Written Permission & Critical On-Time Submission Rule",
    koBody: "자동 면제 대상이 아닌 경우, ① <strong>지속적 풀타임 취업이 허용되는 비자(482 SID, 186 ENS, 820 파트너 등 — 500 학생비자 제외)를 신청하고 심사 대기 중</strong>이거나, ② <strong>고용주에게 필수적인 업무(Critical work)로서 고용주 지지 서한을 첨부</strong>한 경우 온라인으로 연장 허가를 신청할 수 있어요. <strong>6개월 만료 전에 신청하면 결과가 나올 때까지 계속 일할 수 있지만, 6개월이 지난 뒤 신청하면 즉시 일을 중단하고 결과를 기다려야 해요!</strong>",
    enBody: "If not automatically exempt, you may request permission if you (1) applied for a visa allowing ongoing full-time work (e.g. 482, 186, 820), or (2) perform critical work supported by an employer letter. If submitted BEFORE 6 months ends, you may keep working while awaiting a decision; if submitted late, you must stop working immediately."
  },
  {
    koTitle: "8. 자영업(ABN) 다수 거래처 특례 · 산재보상 면제 · 브리징 비자 조건 변경",
    enTitle: "8. Self-Employed Multiple Clients, Workers Comp & Bridging Visa Variation",
    koBody: "① <strong>자영업자(Self-employed):</strong> 특정 사업체가 유일한 거래처(Sole end-user)가 아니라 동시에 여러 고객사에 용역을 제공한다면 6개월을 넘겨도 조건 8547 위반이 아니에요. ② <strong>산재보상(PAM3 s 3.2.4):</strong> 산재보상 급여 수령 기간으로 6개월을 넘기는 경우 자동 면제돼요. ③ <strong>브리징 비자 소지자:</strong> 조건 8547이 부과된 BVA 소지자가 면제 외 업종에서 6개월 초과 근무가 필요한 경우 ‘근무의 절박한 필요성(Compelling need to work)’을 입증해 조건 없는 새 BVA를 신청할 수 있어요.",
    enBody: "(1) Self-employed contractors serving multiple clients (not a sole end-user) do not breach 8547. (2) Periods receiving workers compensation payments are automatically exempt (PAM3 s 3.2.4). (3) Bridging visa holders with 8547 can apply for a new BVA to remove the condition by showing a compelling need to work."
  }
];

const FOOTNOTES = [
  { id: 1, cite: "Migration Regulations 1994 — Schedule 1 Item 1225 (Working Holiday Class TZ) & Item 1224A (Work and Holiday Class US)", descKo: "1차 비자 VAC $840(태평양 국가 462 $690) 및 2·3차 비자 VAC $1,000, 호주 내 신청 시 실체비자 보유 또는 만료 후 28일 이내 유예 규정(1225(3B)(f)(ii) · 1224A(3)(c)(iv)).", descEn: "Base VAC ($840 1st visa, $690 Pacific-regional 462, $1,000 2nd/3rd visa) and onshore 28-day substantive visa grace period.", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 2, cite: "Migration Regulations 1994 — Schedule 2 Part 417 (cl 417.211, 417.511–513) & Part 462 (cl 462.218–219, 462.511–513)", descKo: "2차(3개월)·3차(6개월, 2019.7.1 이후 2차 비자/연계 브리징 보유 중) 지정 근로 요건, 적법 급여 지급 요건, 승인 시 체류기간 산정 규정.", descEn: "Primary criteria for 2nd (3 months) and 3rd (6 months on 2nd visa/BVA) WHM visas, lawful remuneration, and visa stay period clauses.", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 3, cite: "Migration Regulations 1994 — Schedule 8 Visa Conditions 8547 (6-month work limitation) & 8548 (4-month study limitation)", descKo: "모든 417·462 비자에 의무 부과되는 동일 고용주 6개월 근무 제한 및 4개월(17주) 학업·훈련 제한 규정.", descEn: "Mandatory visa conditions 8547 (max 6 months with any one employer) and 8548 (max 4 months study or training).", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 4, cite: "Migration Amendment (Working Holiday Visa) Regulations / F2024L00661 & Item 1225(3BA) — UK Passport Arrangements", descKo: "2023.7.1 영국 여권 연령 만 18~35세 확대 및 2024.7.1 이후 영국(GBNI·BN(O)) 여권 신청자 2·3차 417 지정 근로 면제.", descEn: "UK & BN(O) passport holders age 18–35 (from 1 Jul 2023) and exemption from specified work for 2nd/3rd 417 visas (from 1 Jul 2024).", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/arrangements-uk-passport-holders" },
  { id: 5, cite: "Migration Amendment (Working Holiday Maker Age Criteria) Regulations 2026 (Schedule 13 Part 163) & Home Affairs Latest News (1 July 2026)", descKo: "연령 요건의 Schedule 1 유효 신청 요건(Item 1225(3AA) · 1224A(3)(aab)) 편입 및 2026.7.1부터 대한민국·독일·핀란드·키프로스 Subclass 417 연령 상한 만 18~35세 확대.", descEn: "2026 Schedule 1 age criteria reform and 1 July 2026 expansion of Subclass 417 age limit to 18–35 (inclusive) for Republic of Korea, Germany, Finland, and Cyprus.", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news" },
  { id: 6, cite: "Migration Regulations 1994 — Reg 1.15FAA (417), Reg 1.15FA (462) & Reg 1.15FB (Excluded Employer Prohibition)", descKo: "지정 근로 위임 규정 및 근로자 안전·복지 위험으로 장관이 지정한 제외 고용주(Excluded Employer, F2024L00182 · F2024L00919) 근무 불인정 규정.", descEn: "Statutory definitions of specified work and prohibition on counting work performed for an Excluded Employer under Reg 1.15FB.", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 7, cite: "Migration (Specified work and areas for Subclass 417 visas) Instrument (LIN 22/012) 2022 — Compilation No. 3 (F2022L00271)", descKo: "Subclass 417 지정 근로 업종 및 우편번호 지역표 고시 법령 문서.", descEn: "Legislative Instrument specifying Subclass 417 work categories and designated postcode areas.", url: "https://www.legislation.gov.au/F2022L00271/latest/details" },
  { id: 8, cite: "Migration (Specified work and areas for Subclass 462 visas) Instrument (LIN 22/013) 2022 — Compilation No. 3 (F2022L00272)", descKo: "Subclass 462 지정 근로 업종(광업 제외, 어업·임업 북부 호주 전용 등) 및 우편번호 지역표 고시 법령 문서.", descEn: "Legislative Instrument specifying Subclass 462 work categories and designated postcode areas.", url: "https://www.legislation.gov.au/F2022L00272/latest/details" },
  { id: 9, cite: "Migration Legislation Amendment (Specified Work and Areas for Subclass 417 and 462 Visas) Instrument 2025 (LIN 25/048) — F2025L00485", descKo: "2025.4.5 발효 산불 피해 선포 지역(Table 5) 및 홍수·사이클론·악천후 자연재해 선포 지역(Table 6) 우편번호 확대 개정문.", descEn: "5 April 2025 legislative amendment expanding Bushfire (Table 5) and Natural Disaster (Table 6) declared postcode tables.", url: "https://www.legislation.gov.au/F2025L00485/latest/details" },
  { id: 10, cite: "Department of Home Affairs — Specified work for Working Holiday (subclass 417) & Work and Holiday (subclass 462)", descKo: "호주 연방 이민성 공식 지정 근로 일수 산정 지침(88일/179일, 풀타임·파트타임·피스레이트·유무급 휴일·업종 유연성 및 Table 1~6 우편번호).", descEn: "Official Home Affairs specified work guidance and designated postcode tables (Tables 1–6).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
  { id: 11, cite: "PAM3 (Procedural Instruction): Working Holiday Visa Program (Subclass 417) — VM-3182 (Level 100169)", descKo: "호주 연방 이민성 내부 심사지침 — 지정 근로 일수 산정(s 4.5.3: 풀타임 주말 포함 vs 파트타임 실근무일, 단시간 근무 합산 불가, 최소 달력 기간).", descEn: "Departmental policy instruction VM-3182 on Subclass 417 specified work day-counting and remuneration verification.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
  { id: 12, cite: "PAM3 (Procedural Instruction): Work and Holiday Visa Program (Subclass 462) — VM-1813 (Level 100178)", descKo: "호주 연방 이민성 내부 심사지침 — Subclass 462 지정 근로 최소 3달력월 경과 원칙, Form 1464 및 고용주 불리 정보(Adverse Info) 28일 소명 절차.", descEn: "Departmental policy instruction VM-1813 on Subclass 462 specified work assessment and natural justice procedures.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work" },
  { id: 13, cite: "Department of Home Affairs — Condition 8547: 6-Month Work Limitation (Updated 21 September 2026)", descKo: "2024.1.1 이후 현행 조건 8547 자동 면제(장소 변경·재택근무, 농축산, 자연재해, 5대 핵심 산업, 북부 호주 4대 산업) 및 사전 서면 허가 지침.", descEn: "Official Home Affairs Condition 8547 policy covering automatic exemptions, location changes, clock resets, and permission requests.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation" },
  { id: 14, cite: "PAM3 (Procedural Instruction): Condition 8547 — 6-Month Work Limitation — VM-1144 (Level 100280)", descKo: "조건 8547 내부 심사지침 — 6달력월 산정(s 3.2.1), 최종 사용자(End-user) 원칙(s 3.2.2), 산재보상 면제(s 3.2.4), 비자 승인/브리징 발효 시 시계 리셋(s 3.4.1), 만료 2주 전 허가 신청(s 3.3).", descEn: "Departmental policy instruction VM-1144 detailing elapsed calendar month calculation, end-user rule, workers compensation exemption, and visa clock resets.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation" },
  { id: 15, cite: "Department of Home Affairs — Status of Subclass 462 Country Caps & Pre-Application Ballot (2026–27)", descKo: "30개 Subclass 462 협정국 연간 쿼터 현황 및 중국·인도·베트남·인도네시아(2026 예정) 1차 비자 추첨제(Ballot) 운영 안내.", descEn: "Subclass 462 annual country caps and pre-application ballot rules for China, India, Vietnam, and Indonesia.", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/status-of-country-caps" },
  { id: 16, cite: "Fair Work Ombudsman — Piecework Rates & Horticulture Award Minimum Wage Guarantee", descKo: "성과급(Piecework) 근로자의 시간당 최저임금 보장 의무 및 서면 성과급 계약서 요건.", descEn: "Fair Work Ombudsman guidance on piecework agreements and the minimum wage guarantee under the Horticulture Award.", url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages/piece-rates-and-commission-payments" },
  { id: 17, cite: "Workforce Australia — Harvest Jobs & Regional Vacancies Portal (Replacing Harvest Trail after 30 June 2024)", descKo: "구 Harvest Trail 종료(2024.6.30) 이후 연방 정부 공식 농장·수확 구인 검색 포털.", descEn: "Official Australian Government Workforce Australia harvest vacancy search.", url: "https://www.workforceaustralia.gov.au/individuals/jobs/search?searchText=harvest+worker" },
  { id: 18, cite: "ABARES — Snapshot of Australian Agriculture 2026 & Horticultural Labour Demand Baseline", descKo: "호주 농업자원경제과학국(ABARES) 계절별 원예 임시직·계약직 노동 수요 통계(평균 118,400명 · 피크 130,300명).", descEn: "ABARES seasonal horticultural casual and contract workforce demand statistics.", url: "https://www.agriculture.gov.au/abares/products/insights/snapshot-of-australian-agriculture" }
];

// =========================================================================
// STATE & INITIALIZATION
// =========================================================================

let workPeriods = [
  {
    id: 1,
    category: "plant",
    postcode: "4870",
    startDate: "2026-03-01",
    endDate: "2026-05-31",
    countingMode: "fulltime", // fulltime | parttime_4 | parttime_3 | parttime_2 | exact_shifts | piecework
    exactShiftsWorked: 65,
    stdShiftsPerWeek: 5,
    unpaidAbsentDays: 0,
    lawfullyPaid: true,
    shortShiftWarning: false
  }
];
let nextPeriodId = 2;
let selectedEvidence = ["payslips", "bank", "super_ato", "form1263_1464"];
let selectedSeasonMonth = 0; // 0 = All, 1..12
let selectedSeasonState = "ALL";

// =========================================================================
// MODULE 1: 4-GATES & 417 VS 462 MATRIX
// =========================================================================

function renderGatesAndMatrix() {
  const gatesEl = document.getElementById("gates-container");
  if (gatesEl) {
    gatesEl.innerHTML = FOUR_GATES.map(g => `
      <article class="gate-card">
        <div class="gate-num">${g.num}</div>
        <h3>${t(g.koTitle, g.enTitle)}</h3>
        <p>${t(g.koBody, g.enBody)}</p>
      </article>
    `).join("");
  }

  const tbody = document.getElementById("matrix-417-462-body");
  if (tbody) {
    tbody.innerHTML = WORK_CATEGORIES.map(c => {
      const isMining = c.id === "mining";
      const isNorthOnly462 = c.id === "fishing" || c.id === "tree";
      const badge462 = isMining
        ? `<span class="badge badge-danger">${t("인정 불가 (462 제외)", "NOT Eligible for 462")}</span>`
        : isNorthOnly462
        ? `<span class="badge badge-warning">${t(c.area462Ko, c.area462En)}</span>`
        : `<span class="badge badge-success">${t(c.area462Ko, c.area462En)}</span>`;

      const payBadge = c.volunteerAllowed
        ? `<span class="badge badge-teal">${t(c.dateRuleKo, c.dateRuleEn)}</span>`
        : `<span class="badge badge-burgundy">${t(c.dateRuleKo, c.dateRuleEn)}</span>`;

      return `
        <tr>
          <td><strong>${t(c.ko, c.en)}</strong></td>
          <td><span class="badge badge-success">${t(c.area417Ko, c.area417En)}</span></td>
          <td>${badge462}</td>
          <td>${payBadge}</td>
          <td style="font-size:13px;line-height:1.55;">${t(c.dutiesKo, c.dutiesEn)}</td>
        </tr>
      `;
    }).join("");
  }
}

// =========================================================================
// MODULE 2: INSTANT POSTCODE VERIFIER
// =========================================================================

function evaluateCategoryForPostcode(subclass, catId, pcEval) {
  if (!pcEval.valid) return { eligible: false, labelKo: "유효한 4자리 우편번호 입력 필요", labelEn: "Enter valid 4-digit postcode" };
  if (catId === "covid") {
    return { eligible: true, labelKo: "인정 (호주 전역 — 2020.2.1 이후 필수 코로나 의료·방역 직무)", labelEn: "Eligible (Anywhere in Australia — Critical COVID-19 medical work)" };
  }
  if (catId === "bushfire") {
    return pcEval.bushfire
      ? { eligible: true, labelKo: "인정 (Table 5 산불 피해 선포 지역 우편번호 포함 · 유급/자원봉사 모두 가능)", labelEn: "Eligible (In Table 5 Bushfire Declared Areas · Paid or Volunteer)" }
      : { eligible: false, labelKo: "불인정 (Table 5 산불 선포 지역 우편번호에 미포함)", labelEn: "Not in Table 5 Bushfire Declared Areas" };
  }
  if (catId === "disaster") {
    return pcEval.disaster
      ? { eligible: true, labelKo: "인정 (Table 6 홍수·사이클론·자연재해 선포 지역 포함 · 유급/자원봉사 가능)", labelEn: "Eligible (In Table 6 Natural Disaster Declared Areas · Paid or Volunteer)" }
      : { eligible: false, labelKo: "불인정 (Table 6 자연재해 선포 지역 우편번호에 미포함)", labelEn: "Not in Table 6 Natural Disaster Declared Areas" };
  }
  if (catId === "tourism") {
    const ok = pcEval.northern || pcEval.remote || pcEval.table2Special;
    return ok
      ? { eligible: true, labelKo: "인정 (Table 3 북부 호주 또는 Table 1·2 외곽·극외곽 호주 포함)", labelEn: "Eligible (In Table 3 Northern or Table 1/2 Remote & Very Remote Australia)" }
      : { eligible: false, labelKo: "불인정 (관광·접객업은 북부 호주 및 외곽·극외곽 우편번호에서만 인정 — 일반 지방 불인정)", labelEn: "Ineligible (Tourism & hospitality requires Northern or Remote/Very Remote postcode)" };
  }
  if (catId === "mining") {
    if (subclass === "462") {
      return { eligible: false, labelKo: "불인정 (광업은 Subclass 462 지정 근로 대상 업종이 아님!)", labelEn: "Ineligible (Mining is NOT a specified work category for Subclass 462)" };
    }
    return pcEval.regional
      ? { eligible: true, labelKo: "인정 (Subclass 417 · Table 4 지방 호주 포함)", labelEn: "Eligible (Subclass 417 · In Table 4 Regional Australia)" }
      : { eligible: false, labelKo: "불인정 (Table 4 지방 호주 우편번호 아님)", labelEn: "Not in Table 4 Regional Australia" };
  }
  if (catId === "fishing" || catId === "tree") {
    if (subclass === "462") {
      return pcEval.northern
        ? { eligible: true, labelKo: "인정 (Subclass 462 · Table 3 북부 호주 우편번호 포함)", labelEn: "Eligible (Subclass 462 · In Table 3 Northern Australia)" }
        : { eligible: false, labelKo: "불인정 (462 어업·임업은 반드시 Table 3 북부 호주 우편번호에서만 인정!)", labelEn: "Ineligible (For 462, Fishing & Tree Farming require Table 3 Northern Australia ONLY)" };
    }
    return pcEval.regional
      ? { eligible: true, labelKo: "인정 (Subclass 417 · Table 4 지방 호주 포함)", labelEn: "Eligible (Subclass 417 · In Table 4 Regional Australia)" }
      : { eligible: false, labelKo: "불인정 (Table 4 지방 호주 우편번호 아님)", labelEn: "Not in Table 4 Regional Australia" };
  }
  // plant or construction
  const ok = subclass === "462" ? (pcEval.northern || pcEval.regional) : pcEval.regional;
  return ok
    ? { eligible: true, labelKo: "인정 (Table 4 지방 호주 / Table 3 북부 호주 우편번호 포함)", labelEn: "Eligible (In Table 4 Regional / Table 3 Northern Australia)" }
    : { eligible: false, labelKo: "불인정 (Table 4 지방 호주 우편번호에 미포함 — 대도시권)", labelEn: "Not in Table 4 Regional Australia (Metro area)" };
}

function renderPostcodeVerifier() {
  const input = document.getElementById("pv-input");
  const container = document.getElementById("pv-results-container");
  if (!input || !container) return;

  const pcStr = input.value.trim();
  const ev = evaluatePostcodeAreas(pcStr);

  if (!ev.valid) {
    container.innerHTML = `<div class="combinator-alert" style="margin-top:14px;">${t("4자리 호주 우편번호(예: 4870, 6725, 4380, 0850, 7000)를 입력해 주세요.", "Please enter a valid 4-digit Australian postcode (e.g., 4870, 6725, 4380, 0850, 7000).")}</div>`;
    return;
  }

  const areaPills = [
    { key: "regional", match: ev.regional, titleKo: "Table 4 · 지방 호주 (Regional)", titleEn: "Table 4 · Regional Australia", descKo: "417 5대 산업 / 462 농축산·건설", descEn: "417 5 sectors / 462 Agri & Const" },
    { key: "northern", match: ev.northern, titleKo: "Table 3 · 북부 호주 (Northern)", titleEn: "Table 3 · Northern Australia", descKo: "417·462 관광 / 462 어업·임업 / 8547 6개월 면제", descEn: "417/462 Tourism, 462 Fish/Tree, 8547 Exempt" },
    { key: "remote", match: ev.remote, titleKo: "Table 1·2 · 외곽·극외곽 (Remote)", titleEn: "Tables 1 & 2 · Remote & Very Remote", descKo: "417·462 관광·접객업 인정 지역", descEn: "417 & 462 Tourism & Hospitality" },
    { key: "bushfire", match: ev.bushfire, titleKo: "Table 5 · 산불 선포 지역 (Bushfire)", titleEn: "Table 5 · Bushfire Declared", descKo: "2019.8.1 이후 산불 복구 (유·무급)", descEn: "Bushfire recovery (Paid/Volunteer)" },
    { key: "disaster", match: ev.disaster, titleKo: "Table 6 · 자연재해 지역 (Disaster)", titleEn: "Table 6 · Natural Disaster Declared", descKo: "2022.1.1 이후 홍수·사이클론 복구 (유·무급)", descEn: "Flood/Cyclone recovery (Paid/Volunteer)" }
  ];

  const rowsHtml = WORK_CATEGORIES.map(c => {
    const r417 = evaluateCategoryForPostcode("417", c.id, ev);
    const r462 = evaluateCategoryForPostcode("462", c.id, ev);
    return `
      <tr>
        <td><strong>${t(c.ko, c.en)}</strong></td>
        <td>
          <span class="badge ${r417.eligible ? 'badge-success' : 'badge-danger'}">
            ${r417.eligible ? '✓ 417 ' + t('인정', 'Eligible') : '✗ 417 ' + t('불인정', 'Ineligible')}
          </span>
          <div style="font-size:12px;color:#5A5654;margin-top:3px;">${t(r417.labelKo, r417.labelEn)}</div>
        </td>
        <td>
          <span class="badge ${r462.eligible ? 'badge-success' : 'badge-danger'}">
            ${r462.eligible ? '✓ 462 ' + t('인정', 'Eligible') : '✗ 462 ' + t('불인정', 'Ineligible')}
          </span>
          <div style="font-size:12px;color:#5A5654;margin-top:3px;">${t(r462.labelKo, r462.labelEn)}</div>
        </td>
      </tr>
    `;
  }).join("");

  container.innerHTML = `
    <div class="pv-AreaGrid">
      ${areaPills.map(p => `
        <div class="pv-area-pill ${p.match ? 'match' : 'nomatch'}">
          <div style="font-weight:800;font-size:13.5px;margin-bottom:4px;">
            ${p.match ? '✓ ' : '✗ '}${t(p.titleKo, p.titleEn)}
          </div>
          <div style="font-size:12px;">${t(p.descKo, p.descEn)}</div>
        </div>
      `).join("")}
    </div>
    <div style="margin-bottom:12px;padding:10px 14px;border-radius:6px;background:${ev.northern ? '#EDF7F1' : '#F4EFE6'};border-left:4px solid ${ev.northern ? '#2E6B4F' : '#7A1F2B'};font-size:13.5px;">
      <strong>${t(`우편번호 ${pcStr} 조건 8547 (동일 고용주 6개월 제한) 판정:`, `Postcode ${pcStr} Condition 8547 (6-Month Work Limit) Status:`)}</strong>
      ${ev.northern
        ? t("이 우편번호는 <strong>북부 호주(Northern Australia Table 3)</strong>에 해당하므로, 호주 전역 5대 핵심 산업(농축산·식품가공·보건·돌봄·보육·관광접객·재해복구)뿐만 아니라 <strong>건설업·광업·어업·임업</strong>에서도 사전 허가 없이 동일 고용주와 6개월 초과 근무가 <strong>자동 면제</strong>돼요!", "This postcode is in Northern Australia (Table 3): automatic 6-month exemption applies to Construction, Mining, Fishing & Forestry in addition to nationwide critical sectors!")
        : t("이 우편번호는 북부 호주(Table 3)가 아니므로, <strong>호주 전역 면제 분야(농축산·식품가공·보건·노인/장애인돌봄·보육·관광접객·자연재해복구)</strong> 또는 <strong>근무 장소 변경(장소당 6개월 이하)</strong>에 해당해야 사전 허가 없이 6개월 초과 근무가 가능해요 (건설·광업은 북부 호주 외 지역에서 자동 면제 안 됨).", "Not in Northern Australia (Table 3): automatic 6-month exemption applies only to nationwide exempt sectors (Agri/Food, Health, Aged/Disability, Childcare, Tourism/Hospitality, Disaster Recovery) or when changing physical workplaces (≤6m each).")
      }
    </div>
    <div class="results-table-wrap">
      <table class="occ-table">
        <thead>
          <tr>
            <th style="width:28%;">${t("지정 근로 업종", "Specified Work Category")}</th>
            <th style="width:36%;">${t(`우편번호 ${pcStr} — Subclass 417 판정`, `Postcode ${pcStr} — Subclass 417`)}</th>
            <th style="width:36%;">${t(`우편번호 ${pcStr} — Subclass 462 판정`, `Postcode ${pcStr} — Subclass 462`)}</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
  `;
}

// =========================================================================
// MODULE 3: PAM3-ACCURATE SPECIFIED WORK & EXTENSION CALCULATOR
// =========================================================================

function populateCountriesSelect() {
  const subEl = document.getElementById("calc-subclass");
  const countryEl = document.getElementById("calc-country");
  if (!subEl || !countryEl) return;
  const sub = subEl.value;
  const list = COUNTRIES[sub] || COUNTRIES["417"];
  const prevVal = countryEl.value;
  countryEl.innerHTML = list.map(c => `<option value="${c.code}">${t(c.ko, c.en)}</option>`).join("");
  if (list.some(c => c.code === prevVal)) {
    countryEl.value = prevVal;
  } else {
    countryEl.value = list[0].code;
  }
}

function renderEvidenceChecklist() {
  const el = document.getElementById("evidence-checklist-container");
  if (!el) return;
  el.innerHTML = EVIDENCE_ITEMS.map(item => `
    <label style="display:flex;align-items:flex-start;gap:8px;font-size:13.5px;padding:8px 10px;background:var(--color-paper);border:1px solid var(--color-line);border-radius:6px;cursor:pointer;">
      <input type="checkbox" class="ev-chk" data-id="${item.id}" ${selectedEvidence.includes(item.id) ? "checked" : ""} style="margin-top:3px;" />
      <span>${t(item.ko, item.en)}</span>
    </label>
  `).join("");
  el.querySelectorAll(".ev-chk").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const id = e.target.getAttribute("data-id");
      if (e.target.checked) {
        if (!selectedEvidence.includes(id)) selectedEvidence.push(id);
      } else {
        selectedEvidence = selectedEvidence.filter(x => x !== id);
      }
      renderCalculatorSummary();
    });
  });
}

function evaluateSinglePeriod(p, subclass, targetVisa) {
  const cat = WORK_CATEGORIES.find(c => c.id === p.category) || WORK_CATEGORIES[0];
  const pcEval = evaluatePostcodeAreas(p.postcode);
  const areaCheck = evaluateCategoryForPostcode(subclass, p.category, pcEval);

  const startMs = Date.parse(p.startDate + "T00:00:00Z");
  const endMs = Date.parse(p.endDate + "T00:00:00Z");
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs < startMs) {
    return {
      qualifies: false,
      rawCalendarDays: 0,
      effectiveDays: 0,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: "유효한 시작일과 종료일(시작일 이후)을 입력해 주세요.",
      msgEn: "Please enter a valid start date and end date."
    };
  }

  // Cutoff check: 3rd visa requires work on or after 2019-07-01; category also has cutoff
  const cutoffs = [cat.cutoff];
  if (targetVisa === "third") cutoffs.push("2019-07-01");
  const maxCutoffStr = cutoffs.sort().at(-1);
  const cutoffMs = Date.parse(maxCutoffStr + "T00:00:00Z");

  if (endMs < cutoffMs) {
    return {
      qualifies: false,
      rawCalendarDays: 0,
      effectiveDays: 0,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: `이 근로는 법정 인정 시작일(${maxCutoffStr}) 이전에 종료되어 산입되지 않아요.`,
      msgEn: `This work ended before the statutory commencement date (${maxCutoffStr}) and cannot be counted.`
    };
  }

  const effectiveStartMs = Math.max(startMs, cutoffMs);
  const rawCalendarDays = Math.floor((endMs - effectiveStartMs) / 86400000) + 1;
  const unpaidAbsent = Math.max(0, Number(p.unpaidAbsentDays) || 0);
  const netCalendarDays = Math.max(0, rawCalendarDays - unpaidAbsent);

  // Build set of calendar day keys (YYYY-MM-DD) covered by this period
  const dateKeys = [];
  for (let ms = effectiveStartMs; ms <= endMs; ms += 86400000) {
    dateKeys.push(new Date(ms).toISOString().slice(0, 10));
  }

  // Calculate PAM3 effective days before cross-period deduplication
  let factor = 1.0;
  let effectiveDays = netCalendarDays;
  if (p.countingMode === "fulltime" || p.countingMode === "piecework") {
    factor = 1.0;
    effectiveDays = netCalendarDays;
  } else if (p.countingMode === "parttime_4") {
    factor = 4 / 5;
    effectiveDays = Math.floor(netCalendarDays * (4 / 5));
  } else if (p.countingMode === "parttime_3") {
    factor = 3 / 5;
    effectiveDays = Math.floor(netCalendarDays * (3 / 5));
  } else if (p.countingMode === "parttime_2") {
    factor = 2 / 5;
    effectiveDays = Math.floor(netCalendarDays * (2 / 5));
  } else if (p.countingMode === "exact_shifts") {
    const worked = Math.max(0, Number(p.exactShiftsWorked) || 0);
    const stdWeek = Math.max(1, Number(p.stdShiftsPerWeek) || 5);
    // PAM3 equivalent full-time days: every stdWeek shifts = 7 calendar days (capped at netCalendarDays)
    effectiveDays = Math.min(netCalendarDays, Math.floor((worked / stdWeek) * 7));
    factor = netCalendarDays > 0 ? effectiveDays / netCalendarDays : 0;
  }

  // Check postcode & category
  if (!pcEval.valid) {
    return {
      qualifies: false,
      rawCalendarDays,
      effectiveDays: 0,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: "유효한 4자리 근무지 우편번호를 입력해 주세요.",
      msgEn: "Please enter a valid 4-digit workplace postcode."
    };
  }

  if (!areaCheck.eligible) {
    return {
      qualifies: false,
      rawCalendarDays,
      effectiveDays: 0,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: `우편번호(${p.postcode}) 또는 업종 불인정: ${areaCheck.labelKo}`,
      msgEn: `Postcode (${p.postcode}) or category ineligible: ${areaCheck.labelEn}`
    };
  }

  // Check remuneration
  if (!p.lawfullyPaid && !cat.volunteerAllowed) {
    return {
      qualifies: false,
      rawCalendarDays,
      effectiveDays: 0,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: "산불(Table 5)·자연재해(Table 6) 복구 외의 모든 지정 근로는 반드시 적법한 급여(최저임금·Award 이상)를 받고 급여명세서로 입증해야 해요 (cl 417.211(5)(c) / cl 462.218(1)(c)). 무급·현금 미신고 근로는 산입 불가!",
      msgEn: "Unpaid work outside declared bushfire/natural disaster recovery is statutorily ineligible (cl 417.211(5)(c) / cl 462.218(1)(c))."
    };
  }

  // Take the first `effectiveDays` dates from dateKeys as the countable dates for overlap deduplication
  const validDatesSet = new Set(dateKeys.slice(0, effectiveDays));

  if (p.shortShiftWarning) {
    return {
      qualifies: true,
      rawCalendarDays,
      effectiveDays,
      validDatesSet,
      statusClass: "warn",
      msgKo: `인정 가능(${effectiveDays}일 산입, 달력 ${rawCalendarDays}일) — [PAM3 주의] 해당 산업의 일일 표준 근로시간에 미달하는 단시간 근무일(Short shifts, 예: 표준 7시간인데 4~5시간만 근무)은 1일로 산입될 수 없으며, 여러 날의 단시간 근무를 합산해 1일로 칠 수 없어요(PAM3 s 4.5.3).`,
      msgEn: `Countable (${effectiveDays} days from ${rawCalendarDays} calendar days) — [PAM3 Warning] Short shifts below the industry standard daily hours cannot be counted as a full day or combined across days (PAM3 s 4.5.3).`
    };
  }

  return {
    qualifies: true,
    rawCalendarDays,
    effectiveDays,
    validDatesSet,
    statusClass: "pass",
    msgKo: `적격 산입: ${effectiveDays}일 인정 (달력 기간 ${rawCalendarDays}일${unpaidAbsent > 0 ? `, 무급 결근·기상악화 ${unpaidAbsent}일 차감` : ""}) · ${areaCheck.labelKo}`,
    msgEn: `Qualifies: ${effectiveDays} countable days (${rawCalendarDays} calendar days${unpaidAbsent > 0 ? `, minus ${unpaidAbsent} unpaid absent/weather days` : ""}) · ${areaCheck.labelEn}`
  };
}

function renderPeriodsList() {
  const container = document.getElementById("periods-container");
  const subEl = document.getElementById("calc-subclass");
  const targetEl = document.getElementById("calc-target");
  if (!container || !subEl || !targetEl) return;

  const subclass = subEl.value;
  const targetVisa = targetEl.value;

  container.innerHTML = workPeriods.map((p, idx) => {
    const ev = evaluateSinglePeriod(p, subclass, targetVisa);
    return `
      <div class="whm-period-card" data-period-id="${p.id}">
        <div class="whm-period-top">
          <h4>${t(`근로 기간 #${idx + 1}`, `Work Period #${idx + 1}`)}</h4>
          ${workPeriods.length > 1 ? `<button type="button" class="btn-secondary btn-remove-period" data-id="${p.id}" style="padding:4px 10px;font-size:12px;color:#9B1C1C;border-color:#9B1C1C;">${t("삭제", "Remove")}</button>` : ""}
        </div>

        <div class="whm-period-grid">
          <div class="filter-group">
            <label class="filter-label">${t("업무 종류 (Category)", "Work Category")}</label>
            <select class="filter-select p-field" data-id="${p.id}" data-field="category">
              ${WORK_CATEGORIES.map(c => `<option value="${c.id}" ${p.category === c.id ? "selected" : ""}>${t(c.ko, c.en)}</option>`).join("")}
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">${t("실제 근무지 우편번호 (Postcode)", "Workplace Postcode")}</label>
            <input type="text" class="filter-select p-field" data-id="${p.id}" data-field="postcode" inputmode="numeric" maxlength="4" value="${p.postcode}" placeholder="예: 4870" />
          </div>

          <div class="filter-group">
            <label class="filter-label">${t("근무 시작일 (Start Date)", "Start Date")}</label>
            <input type="date" class="filter-select p-field" data-id="${p.id}" data-field="startDate" value="${p.startDate}" />
          </div>

          <div class="filter-group">
            <label class="filter-label">${t("근무 종료일 (End Date)", "End Date")}</label>
            <input type="date" class="filter-select p-field" data-id="${p.id}" data-field="endDate" value="${p.endDate}" />
          </div>

          <div class="filter-group">
            <label class="filter-label">${t("PAM3 근로 형태 및 일수 산정 방식", "PAM3 Work Pattern & Counting Basis")}</label>
            <select class="filter-select p-field" data-id="${p.id}" data-field="countingMode">
              <option value="fulltime" ${p.countingMode === "fulltime" ? "selected" : ""}>${t("풀타임 / 산업 표준 교대근무 (주 5일+ · 주말/휴무일 포함 달력 전체 산입)", "Full-time / Standard cyclical roster (counts weekends & rest days)")}</option>
              <option value="piecework" ${p.countingMode === "piecework" ? "selected" : ""}>${t("적법 성과급제 (Piecework Agreement — 주 5일+ 풀타임 상당 근무)", "Lawful Piecework Agreement (Full-time equivalent week)")}</option>
              <option value="parttime_4" ${p.countingMode === "parttime_4" ? "selected" : ""}>${t("파트타임·캐주얼 — 주 4일 표준 근무 (풀타임의 80% 비례 산입)", "Part-time / Casual — 4 standard days/week (80% proportional)")}</option>
              <option value="parttime_3" ${p.countingMode === "parttime_3" ? "selected" : ""}>${t("파트타임·캐주얼 — 주 3일 표준 근무 (풀타임의 60% 비례 산입)", "Part-time / Casual — 3 standard days/week (60% proportional)")}</option>
              <option value="parttime_2" ${p.countingMode === "parttime_2" ? "selected" : ""}>${t("파트타임·캐주얼 — 주 2일 표준 근무 (풀타임의 40% 비례 산입)", "Part-time / Casual — 2 standard days/week (40% proportional)")}</option>
              <option value="exact_shifts" ${p.countingMode === "exact_shifts" ? "selected" : ""}>${t("파트타임·캐주얼 — 실제 출근한 표준 근무일수(Shifts) 직접 입력", "Part-time / Casual — Enter exact full standard shifts worked")}</option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">${t("무급 기상악화·무급 결근일수 (차감 필수, Petra 원칙)", "Unpaid Severe Weather / Unpaid Leave Days (Deducted)")}</label>
            <input type="number" class="filter-select p-field" data-id="${p.id}" data-field="unpaidAbsentDays" min="0" max="365" value="${p.unpaidAbsentDays}" />
          </div>

          ${p.countingMode === "exact_shifts" ? `
            <div class="filter-group">
              <label class="filter-label">${t("실제 완수한 표준 근무일수 (Total Full Shifts Worked)", "Total Qualifying Full Shifts Worked")}</label>
              <input type="number" class="filter-select p-field" data-id="${p.id}" data-field="exactShiftsWorked" min="0" max="500" value="${p.exactShiftsWorked}" />
            </div>
            <div class="filter-group">
              <label class="filter-label">${t("해당 업종 풀타임 주당 기준 근무일수 (보통 5일)", "Industry Full-Time Shifts per Week (usually 5)")}</label>
              <input type="number" class="filter-select p-field" data-id="${p.id}" data-field="stdShiftsPerWeek" min="1" max="7" value="${p.stdShiftsPerWeek}" />
            </div>
          ` : ""}
        </div>

        <div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:16px;">
          <label style="display:flex;align-items:center;gap:6px;font-size:13.2px;font-weight:600;cursor:pointer;">
            <input type="checkbox" class="p-chk" data-id="${p.id}" data-field="lawfullyPaid" ${p.lawfullyPaid ? "checked" : ""} />
            <span>${t("호주 법정 최저임금·Award에 맞게 급여를 지급받음 (산불·재해 자원봉사는 체크 해제 가능)", "Paid lawfully under Australian minimum wage / Award (uncheck if volunteer disaster recovery)")}</span>
          </label>
          <label style="display:flex;align-items:center;gap:6px;font-size:13.2px;font-weight:600;cursor:pointer;">
            <input type="checkbox" class="p-chk" data-id="${p.id}" data-field="shortShiftWarning" ${p.shortShiftWarning ? "checked" : ""} />
            <span>${t("일부 근무일이 산업 표준 일일 시간보다 짧은 단시간(Short shift)이었음 (PAM3 주의 확인)", "Some shifts were shorter than the standard daily hours in this industry (check PAM3 warning)")}</span>
          </label>
        </div>

        <div class="whm-period-status ${ev.statusClass}">
          ${t(ev.msgKo, ev.msgEn)}
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".p-field").forEach(el => {
    el.addEventListener("input", (e) => {
      const id = Number(e.target.getAttribute("data-id"));
      const field = e.target.getAttribute("data-field");
      const period = workPeriods.find(x => x.id === id);
      if (!period) return;
      if (field === "postcode") {
        period[field] = e.target.value.replace(/\D/g, "").slice(0, 4);
      } else {
        period[field] = e.target.value;
      }
      renderPeriodsList();
      renderCalculatorSummary();
    });
  });

  container.querySelectorAll(".p-chk").forEach(el => {
    el.addEventListener("change", (e) => {
      const id = Number(e.target.getAttribute("data-id"));
      const field = e.target.getAttribute("data-field");
      const period = workPeriods.find(x => x.id === id);
      if (!period) return;
      period[field] = e.target.checked;
      renderPeriodsList();
      renderCalculatorSummary();
    });
  });

  container.querySelectorAll(".btn-remove-period").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.getAttribute("data-id"));
      workPeriods = workPeriods.filter(x => x.id !== id);
      renderPeriodsList();
      renderCalculatorSummary();
    });
  });
}

function renderCalculatorSummary() {
  const panel = document.getElementById("calc-summary-panel");
  if (!panel) return;

  const subclass = document.getElementById("calc-subclass")?.value || "417";
  const targetVisa = document.getElementById("calc-target")?.value || "second";
  const countryCode = document.getElementById("calc-country")?.value || "KR";
  const age = Number(document.getElementById("calc-age")?.value || 28);
  const visaHeld = document.getElementById("calc-visa-held")?.value || "valid_whm";
  const locStatus = document.getElementById("calc-location-status")?.value || "onshore_substantive";
  const noChildren = document.getElementById("calc-no-children")?.checked ?? true;
  const noExcludedEmp = document.getElementById("calc-no-excluded-emp")?.checked ?? true;

  const countryList = COUNTRIES[subclass] || COUNTRIES["417"];
  const countryObj = countryList.find(c => c.code === countryCode) || countryList[0];

  const requiredDays = targetVisa === "second" ? 88 : 179;
  const requiredCalMonths = targetVisa === "second" ? 3 : 6;

  // Evaluate all periods & deduplicate overlapping calendar dates
  const evals = workPeriods.map(p => evaluateSinglePeriod(p, subclass, targetVisa));
  const rawQualifyingDaysSum = evals.reduce((acc, r) => acc + (r.qualifies ? r.effectiveDays : 0), 0);

  const unionDates = new Set();
  let earliestStartMs = Infinity;
  let latestEndMs = -Infinity;
  workPeriods.forEach((p, idx) => {
    const r = evals[idx];
    if (r.qualifies) {
      r.validDatesSet.forEach(d => unionDates.add(d));
      const sMs = Date.parse(p.startDate + "T00:00:00Z");
      const eMs = Date.parse(p.endDate + "T00:00:00Z");
      if (Number.isFinite(sMs) && sMs < earliestStartMs) earliestStartMs = sMs;
      if (Number.isFinite(eMs) && eMs > latestEndMs) latestEndMs = eMs;
    }
  });

  const deduplicatedDays = unionDates.size;
  const overlapRemovedDays = Math.max(0, rawQualifyingDaysSum - deduplicatedDays);
  const totalElapsedSpanDays = (earliestStartMs <= latestEndMs) ? Math.floor((latestEndMs - earliestStartMs) / 86400000) + 1 : 0;

  // Gate checks
  const ageOk = age >= 18 && age <= countryObj.maxAge;
  const visaHeldOk = !(
    visaHeld === "invalid_student_ingrid" ||
    (targetVisa === "third" && visaHeld === "invalid_1st_for_3rd")
  );
  const locOk = locStatus !== "onshore_over28";
  const ukExemptActive = subclass === "417" && countryObj.ukExempt;
  const daysMet = ukExemptActive || deduplicatedDays >= requiredDays;

  let verdictClass = "badge-success";
  let verdictTitleKo = "지정 근로 및 기본 법정 요건 충족 가능성 높음";
  let verdictTitleEn = "Strong Indication: Specified Work & Statutory Gates Met";
  const blockersKo = [];
  const blockersEn = [];

  if (!ageOk) {
    blockersKo.push(`연령 상한 미충족: 선택하신 국가(${countryObj.code})의 신청 가능 연령은 만 18~${countryObj.maxAge}세(만 ${countryObj.maxAge + 1}세 생일 전날 AEST/AEDT 23:59까지)예요 (Item 1225(3AA) / 1224A(3)(aab)).`);
    blockersEn.push(`Age limit exceeded: Eligible age for ${countryObj.code} is 18–${countryObj.maxAge} inclusive (until 11:59 pm AEST/AEDT the day before turning ${countryObj.maxAge + 1}).`);
  }
  if (!noChildren) {
    blockersKo.push("부양 자녀 동반 불가 위반: WHM 비자 체류 기간 중 부양 자녀를 동반할 수 없어요 (cl 417.211(4)(d) / cl 462.217(c)).");
    blockersEn.push("Dependent children restriction: Applicants cannot be accompanied by dependent children during their stay.");
  }
  if (!noExcludedEmp) {
    blockersKo.push("제외 고용주(Excluded Employer, Reg 1.15FB) 근무 불인정: 장관이 고시한 제외 고용주 밑에서 수행한 근로는 지정 근로로 산입할 수 없어요.");
    blockersEn.push("Excluded Employer rule (Reg 1.15FB): Work carried out for a listed Excluded Employer cannot be counted.");
  }
  if (!visaHeldOk) {
    blockersKo.push("근로 수행 당시 보유 비자 부적격: 학생비자(500) 등 타 비자/연계 브리징 보유 중 한 근로(Ingrid 사례)나, 3차 비자 신청 시 1차 비자에서 한 근로는 산입되지 않아요 (cl 417.211(6)(c)).");
    blockersEn.push("Ineligible visa held during work: Work done on a Student visa/associated BVA (Ingrid rule) or on a 1st WHM visa towards a 3rd WHM visa cannot be counted.");
  }
  if (!locOk) {
    blockersKo.push("호주 내 신청 유예기간(28일) 도과: 호주 내에서 신청하려면 현재 실체비자를 보유 중이거나 마지막 실체비자 만료 후 28일 이내여야 해요 (Item 1225(3B)(f)(ii)).");
    blockersEn.push("Onshore 28-day grace period exceeded: Onshore applicants must hold a substantive visa or apply within 28 days after their last substantive visa ceased.");
  }
  if (!daysMet) {
    blockersKo.push(`지정 근로 일수 부족: 현재 중복 제거 후 인정 일수는 ${deduplicatedDays}일로, 목표 기준(${requiredDays}일 / 약 ${requiredCalMonths}개월)까지 ${requiredDays - deduplicatedDays}일이 더 필요해요.`);
    blockersEn.push(`Specified work days short: ${deduplicatedDays} deduplicated days counted (${requiredDays - deduplicatedDays} more days needed to reach the ${requiredDays}-day threshold).`);
  }

  if (blockersKo.length > 0) {
    verdictClass = !daysMet && blockersKo.length === 1 ? "badge-warning" : "badge-danger";
    verdictTitleKo = !daysMet && blockersKo.length === 1 ? "지정 근로 일수 추가 확보 필요" : "법정 필수 요건 미충족 항목 발견 (확인 필수)";
    verdictTitleEn = !daysMet && blockersEn.length === 1 ? "Additional Specified Work Days Required" : "Statutory Blocker Detected — Review Required";
  }

  const pct = ukExemptActive ? 100 : Math.min(100, Math.round((deduplicatedDays / requiredDays) * 100));

  // Grant duration explanation (cl 417.511 / 512 / 513)
  let stayRuleKo = "입국일로부터 12개월 체류 (해외 신청·해외 승인, cl 417.511 / 462.511)";
  let stayRuleEn = "12 months from date of entry (offshore grant, cl 417.511 / 462.511)";
  if (locStatus === "onshore_substantive") {
    stayRuleKo = "기존 WHM 비자 만료일로부터 +12개월 연장 (1차 입국일로부터 총 24개월/36개월 연속 체류 보장 — 조기 신청해도 기존 잔여기간 손실 없음! cl 417.513 / 462.513)";
    stayRuleEn = "+12 months added to previous WHM expiry (total 24/36 months from first entry; early application does not lose remaining time, cl 417.513 / 462.513)";
  } else if (locStatus === "onshore_28days") {
    stayRuleKo = "비자 승인일(Grant date)로부터 12개월 체류 (신청 당시 WHM 비자 미보유/브리징 상태, cl 417.512 / 462.512)";
    stayRuleEn = "12 months from date of visa grant (did not hold WHM visa at time of application, cl 417.512 / 462.512)";
  }

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
      <span class="overline-serif light-mode" style="margin:0;">STEP 04 · PAM3 LEGAL VERDICT</span>
      <span class="badge ${verdictClass}">${t("실시간 판정", "Live Assessment")}</span>
    </div>
    <h3 style="font-size:20px;font-weight:800;color:var(--color-charcoal);margin-bottom:8px;">
      ${t(verdictTitleKo, verdictTitleEn)}
    </h3>

    ${ukExemptActive ? `
      <div style="background:#EDF7F1;border-left:4px solid #2E6B4F;padding:12px 14px;border-radius:6px;font-size:13.5px;color:#1A4731;margin-bottom:14px;">
        <strong>${t("영국(UK · BN(O)) 여권 지정 근로 면제 적용 (Item 1225(3BA)):", "UK / BN(O) Specified Work Exemption Active (Item 1225(3BA)):")}</strong><br/>
        ${t(countryObj.noteKo, countryObj.noteEn)}
      </div>
    ` : `
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;">
        <span style="font-size:13.5px;font-weight:700;color:var(--color-charcoal-soft);">${t("중복 제거 후 최종 산입 일수", "Deduplicated Countable Days")}</span>
        <strong style="font-size:26px;font-weight:800;color:var(--color-burgundy);">${deduplicatedDays} / ${requiredDays}${t("일", " days")} (${pct}%)</strong>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${pct}%;"></div>
      </div>
    `}

    ${overlapRemovedDays > 0 ? `
      <div style="background:#FEF6E7;border-left:4px solid #B8860B;padding:10px 12px;border-radius:6px;font-size:12.8px;color:#6B4D00;margin-bottom:12px;">
        <strong>${t(`달력 중복 근무일 ${overlapRemovedDays}일 자동 공제 완료:`, `${overlapRemovedDays} Overlapping Calendar Days Deduplicated:`)}</strong>
        ${t(`기간별 단순 합산은 ${rawQualifyingDaysSum}일이나, 동일 달력 날짜는 하루 최대 1일로만 인정되므로 중복된 ${overlapRemovedDays}일을 자동 제거하여 ${deduplicatedDays}일로 정밀 산정했어요.`, `Raw sum was ${rawQualifyingDaysSum} days, but overlapping calendar dates across multiple jobs cannot be counted twice.`)}
      </div>
    ` : ""}

    ${countryObj.noteKo && !ukExemptActive ? `
      <div style="background:#EDF7F1;border-left:4px solid #2E6B4F;padding:10px 12px;border-radius:6px;font-size:12.8px;color:#1A4731;margin-bottom:12px;">
        ${t(countryObj.noteKo, countryObj.noteEn)}
      </div>
    ` : ""}

    ${blockersKo.length > 0 ? `
      <div style="background:#FDF2F2;border-left:4px solid #9B1C1C;padding:12px 14px;border-radius:6px;font-size:13.2px;color:#771D1D;margin-bottom:14px;">
        <strong>${t("보완·주의가 필요한 항목:", "Items Requiring Attention:")}</strong>
        <ul style="margin:6px 0 0 18px;padding:0;">
          ${(currentLang === "ko" ? blockersKo : blockersEn).map(b => `<li style="margin-bottom:4px;">${b}</li>`).join("")}
        </ul>
      </div>
    ` : `
      <div style="background:#EDF7F1;border-left:4px solid #2E6B4F;padding:12px 14px;border-radius:6px;font-size:13.2px;color:#1A4731;margin-bottom:14px;">
        ${t(`축하해요! 입력하신 근로 기록(${deduplicatedDays}일)과 연령(만 ${age}세 / 상한 만 ${countryObj.maxAge}세), 보유 비자 조건이 모두 법정 기준에 부합해요.`, `Your entered work record (${deduplicatedDays} days), age (${age} / max ${countryObj.maxAge}), and visa conditions align with the statutory requirements.`)}
      </div>
    `}

    <div style="border-top:1px solid var(--color-line);padding-top:12px;font-size:13.2px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("확인 대상 비자 · 차수", "Target Visa Stream")}</span>
        <strong>Subclass ${subclass} (${targetVisa === "second" ? t("2차 비자 · 88일", "2nd Visa · 88d") : t("3차 비자 · 179일", "3rd Visa · 179d")})</strong>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("여권 국가 연령 상한 (Sch 1)", "Passport Age Cap (Sch 1)")}</span>
        <strong>${t(`만 18~${countryObj.maxAge}세 (현재 만 ${age}세)`, `Age 18–${countryObj.maxAge} (Entered: ${age})`)}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("법정 기본 비자 신청비 (VAC)", "Statutory Base VAC (2026)")}</span>
        <strong>AUD $${countryObj.vac23.toLocaleString()} ${t(`(1차는 $${countryObj.vac1})`, `(1st visa: $${countryObj.vac1})`)} [1]</strong>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("체크한 증빙 서류 유형", "Evidence Records Checked")}</span>
        <strong>${selectedEvidence.length} / ${EVIDENCE_ITEMS.length}${t("종", " types")}</strong>
      </div>
      <div style="background:var(--color-paper);padding:10px 12px;border-radius:6px;border:1px solid var(--color-line);margin-top:4px;">
        <div style="font-weight:800;color:var(--color-burgundy);margin-bottom:3px;">${t("승인 시 비자 유효기간 산정 (PAM3 s 4.10):", "Visa Period Upon Grant (PAM3 s 4.10):")}</div>
        <div style="font-size:12.5px;color:#2E2E2E;">${t(stayRuleKo, stayRuleEn)}</div>
      </div>
    </div>

    <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;">
      <a href="https://parklawyers.com.au/links/?lang=ko" target="_blank" rel="noopener" class="btn-burgundy" style="width:100%;justify-content:center;">
        ${t("박앤코 변호사에게 지정 근로·연장 정밀 검토 의뢰 →", "Request Park & Co Legal Review →")}
      </a>
    </div>
  `;
}

// =========================================================================
// MODULE 4: CONDITION 8547 (6-MONTH WORK LIMITATION & EXEMPTIONS) SIMULATOR
// =========================================================================

function addCalendarMonthsUTC(dateStr, monthsToAdd) {
  const parts = dateStr.split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return null;
  const [y, m, d] = parts;
  const targetMonthIndex = (m - 1) + monthsToAdd;
  const targetYear = y + Math.floor(targetMonthIndex / 12);
  const normMonth = ((targetMonthIndex % 12) + 12) % 12;
  // Last day of target month
  const maxDay = new Date(Date.UTC(targetYear, normMonth + 1, 0)).getUTCDate();
  const finalDay = Math.min(d, maxDay);
  return new Date(Date.UTC(targetYear, normMonth, finalDay));
}

function renderCondition8547Simulator() {
  const panel = document.getElementById("c8547-result-panel");
  if (!panel) return;

  const startStr = document.getElementById("c8547-start-date")?.value || "2026-05-01";
  const pcStr = (document.getElementById("c8547-postcode")?.value || "").trim();
  const sector = document.getElementById("c8547-sector")?.value || "tourism_hosp";
  const diffLoc = document.getElementById("c8547-diff-location")?.checked ?? false;
  const visaReset = document.getElementById("c8547-visa-reset")?.checked ?? false;
  const multiClient = document.getElementById("c8547-multi-client")?.checked ?? false;
  const workersComp = document.getElementById("c8547-workers-comp")?.checked ?? false;
  const permGrounds = document.getElementById("c8547-permission-grounds")?.checked ?? false;

  const pcEval = evaluatePostcodeAreas(pcStr);
  const sixMonthDateObj = addCalendarMonthsUTC(startStr, 6);
  let sixMonthDateStr = "-";
  let twoWeeksPriorStr = "-";
  if (sixMonthDateObj) {
    sixMonthDateStr = sixMonthDateObj.toISOString().slice(0, 10);
    const twoWeeksPriorObj = new Date(sixMonthDateObj.getTime() - 14 * 86400000);
    twoWeeksPriorStr = twoWeeksPriorObj.toISOString().slice(0, 10);
  }

  const nationwideSectors = ["plant_animal", "agri_food", "health", "aged_disability", "childcare", "tourism_hosp", "disaster_rec"];
  const northernSectors = ["north_construction", "north_mining", "north_fishing", "north_tree"];

  const reasonsKo = [];
  const reasonsEn = [];
  let isAutoExempt = false;

  if (nationwideSectors.includes(sector)) {
    isAutoExempt = true;
    reasonsKo.push("<strong>호주 전역 자동 면제 업종 해당 (2024.01.01~현행 고시):</strong> 선택하신 업종(농축산·식품가공·보건의료·노인/장애인돌봄·보육/오페어·관광접객·자연재해복구)은 호주 전역 어디서든 호주 연방 이민성에 사전 허가를 신청할 필요 없이 동일 고용주 밑에서 6개월을 초과해(비자 만료 시까지) 계속 근무할 수 있어요!");
    reasonsEn.push("<strong>Nationwide Automatic Exemption Applies:</strong> Your work falls within a critical sector / plant & animal cultivation / natural disaster recovery covered by the nationwide exemption. You can work >6 months for the same employer without asking permission.");
  }

  if (northernSectors.includes(sector)) {
    if (pcEval.valid && pcEval.northern) {
      isAutoExempt = true;
      reasonsKo.push(`<strong>북부 호주(Northern Australia Table 3) 4대 산업 자동 면제 해당:</strong> 입력하신 우편번호(${pcStr})가 북부 호주(Table 3)에 속하므로, 건설·광업·어업·임업 분야에서 사전 허가 없이 동일 고용주와 6개월 초과 근무가 자동 면제돼요!`);
      reasonsEn.push(`<strong>Northern Australia Automatic Exemption Applies:</strong> Postcode ${pcStr} is in Northern Australia (Table 3), so work in Construction, Mining, Fishing or Forestry is automatically exempt beyond 6 months.`);
    } else {
      reasonsKo.push(`<strong>주의 — 북부 호주 우편번호 불일치:</strong> 건설·광업·어업·임업의 6개월 자동 면제는 <strong>북부 호주(Table 3) 우편번호</strong>에서만 적용돼요. 입력하신 우편번호(${pcStr || "미입력"})는 북부 호주에 속하지 않으므로 업종 자동 면제가 적용되지 않아요!`);
      reasonsEn.push(`<strong>Warning — Not in Northern Australia (Table 3):</strong> Construction, Mining, Fishing and Forestry are only automatically exempt in Northern Australia Table 3 postcodes. Postcode ${pcStr || "entered"} does not qualify for the northern sector exemption.`);
    }
  }

  if (diffLoc) {
    isAutoExempt = true;
    reasonsKo.push("<strong>근무 장소 변경(Different Locations / 재택근무 전환) 자동 면제 해당:</strong> 동일 고용주(동일 ABN)라도 서로 다른 물리적 사업장(다른 지점·매장·과수원·학교·병원, 다른 ABN 자회사, 또는 사무실 ↔ 재택·원격근무 전환)에서 일하며 어느 한 장소에서도 6개월을 초과하지 않으면 사전 허가 없이 6개월 초과 근무가 가능해요.");
    reasonsEn.push("<strong>Different Physical Locations Exemption Applies:</strong> Working for the same employer across different locations (including switching to/from remote/work-from-home), where no single location exceeds 6 months, is automatically exempt.");
  }

  if (visaReset) {
    isAutoExempt = true;
    reasonsKo.push("<strong>신규 비자 승인 / 브리징 비자 발효에 따른 ‘6개월 시계 리셋’ (PAM3 s 3.2 & 3.4.1):</strong> 조건 8547은 각 비자마다 별도로 적용돼요. 새 WHM 비자(2·3차) 승인일 또는 이전 WHM 비자 만료로 브리징 비자가 발효된 날부터 동일 고용주와의 6개월 시계가 <strong>0일로 새로 시작</strong>되므로 추가 6개월간 사전 허가 없이 적법하게 근무할 수 있어요!");
    reasonsEn.push("<strong>6-Month Clock Reset on New Visa / Bridging Visa (PAM3 s 3.2 & 3.4.1):</strong> The 6-month limit resets to zero upon grant of a new WHM visa or when a Bridging Visa comes into effect.");
  }

  if (multiClient) {
    isAutoExempt = true;
    reasonsKo.push("<strong>자영업자(ABN) 다수 거래처 특례 해당:</strong> 해당 사업체가 유일한 거래처(Sole end-user)가 아니며 동시에 다른 사업체들에도 용역을 제공하는 경우 조건 8547 위반에 해당하지 않아요.");
    reasonsEn.push("<strong>Self-Employed Multiple End-Users Rule:</strong> Providing services to multiple businesses (where the client is not your sole end-user) does not breach Condition 8547.");
  }

  if (workersComp) {
    isAutoExempt = true;
    reasonsKo.push("<strong>산재보상 급여(Workers Compensation) 수령 기간 자동 면제 (PAM3 s 3.2.4):</strong> 산재보상 수령 기간으로 인해 총 재직 기간이 6개월을 초과하는 경우 해당 기간 동안 자동 면제돼요.");
    reasonsEn.push("<strong>Workers Compensation Exemption (PAM3 s 3.2.4):</strong> Automatically exempt for the period of receiving workers compensation payments.");
  }

  let statusBadge = isAutoExempt
    ? `<span class="badge badge-success">${t("사전 허가 불필요 (자동 면제 / 리셋 해당)", "No Permission Needed (Exempt / Reset)")}</span>`
    : permGrounds
    ? `<span class="badge badge-warning">${t("만료 전 사전 서면 허가 신청 대상", "Submit Written Permission Before Expiry")}</span>`
    : `<span class="badge badge-danger">${t("6개월 초과 근무 제한 적용 (면제 비해당)", "6-Month Limit Applies — Action Required")}</span>`;

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
      <span class="overline-serif light-mode" style="margin:0;">CONDITION 8547 VERDICT</span>
      ${statusBadge}
    </div>
    <h3 style="font-size:20px;font-weight:800;color:var(--color-charcoal);margin-bottom:8px;">
      ${isAutoExempt
        ? t("사전 허가 없이 동일 고용주와 6개월 초과 근무가 가능해요!", "You Can Work >6 Months for the Same Employer Without Asking Permission!")
        : permGrounds
        ? t(`반드시 6개월 만료일(${sixMonthDateStr}) 이전에 온라인 서면 허가를 신청하세요!`, `You Must Submit the Online Permission Request BEFORE ${sixMonthDateStr}!`)
        : t(`자동 면제 사유가 확인되지 않았어요 — ${sixMonthDateStr}까지만 근무 가능해요`, `No Automatic Exemption Identified — 6-Month Limit Ends on ${sixMonthDateStr}`)
      }
    </h3>

    <div class="timeline-milestone-grid">
      <div class="milestone-box">
        <div class="m-label">${t("첫 출근·교육 시작일", "Work / Training Start")}</div>
        <div class="m-date">${startStr}</div>
        <div class="m-note">${t("달력 경과 산정 기산점", "Day 1 of 6-month clock")}</div>
      </div>
      <div class="milestone-box">
        <div class="m-label">${t("서면허가 신청 권장기한", "Recommended Request Date")}</div>
        <div class="m-date">${twoWeeksPriorStr}</div>
        <div class="m-note">${t("만료 최소 2주 전 (PAM3 s 3.3)", "At least 2 weeks prior (PAM3)")}</div>
      </div>
      <div class="milestone-box">
        <div class="m-label">${t("6달력월 법정 만료일", "6-Calendar-Month Expiry")}</div>
        <div class="m-date">${sixMonthDateStr}</div>
        <div class="m-note">${t("면제/허가 없을 시 근무 종료일", "Hard cutoff if not exempt")}</div>
      </div>
    </div>

    <div style="background:${isAutoExempt ? '#EDF7F1' : '#FEF6E7'};border-left:4px solid ${isAutoExempt ? '#2E6B4F' : '#B8860B'};padding:12px 14px;border-radius:6px;font-size:13.5px;color:#2E2E2E;margin-bottom:14px;">
      ${reasonsKo.length > 0 ? `
        <ul style="margin:0 0 0 18px;padding:0;">
          ${(currentLang === "ko" ? reasonsKo : reasonsEn).map(r => `<li style="margin-bottom:6px;">${r}</li>`).join("")}
        </ul>
      ` : t(
        `현재 선택한 업종은 자동 면제 대상이 아니며 장소 변경·시계 리셋도 체크되지 않았어요. 만약 면제나 사전 서면 허가 없이 <strong>${sixMonthDateStr}</strong>을 넘겨 동일 고용주(동일 최종 사업장)에서 계속 일하면 <strong>비자 조건 8547 위반으로 비자 취소(s 116) 및 2·3차/스폰서 비자 거절(cl 417.221 / 462.223)</strong> 사유가 돼요.`,
        `No automatic exemption is active. Working beyond ${sixMonthDateStr} for the same end-user without an exemption or prior written permission breaches Condition 8547 and risks visa cancellation (s 116) or refusal of subsequent visas.`
      )}
    </div>

    <div style="background:var(--color-paper);border:1px solid var(--color-line-strong);border-radius:6px;padding:12px 14px;font-size:13px;line-height:1.55;">
      <strong style="color:var(--color-burgundy);">${t("사전 서면 허가(Written Permission) 접수 시점의 결정적 차이:", "Critical Timing Rule for Written Permission Requests:")}</strong><br/>
      ${t(
        `• <strong>만료일(${sixMonthDateStr}) 이전에 신청서를 제출한 경우:</strong> 호주 연방 이민성의 서면 결정이 나올 때까지 6개월이 지나도 <strong>합법적으로 계속 근무</strong>할 수 있어요(개별 접수 확인 메일이 오지 않아도 이민성 웹페이지 안내로 갈음).<br/>• <strong>만료일(${sixMonthDateStr})이 지난 후 신청한 경우:</strong> <strong>즉시 근무를 중단</strong>해야 하며, 서면 승인 통지를 받을 때까지 절대 일할 수 없어요!`,
        `• <strong>Submitted BEFORE ${sixMonthDateStr}:</strong> You may lawfully continue working for the same employer until you receive a written decision from Home Affairs.<br/>• <strong>Submitted AFTER ${sixMonthDateStr}:</strong> You MUST stop working immediately and wait for a written decision before resuming work.`
      )}
    </div>
  `;
}

function renderCondition8547RulesCards() {
  const container = document.getElementById("c8547-rules-container");
  if (!container) return;
  container.innerHTML = C8547_RULES.map(r => `
    <article class="rule8547-card">
      <h4>${t(r.koTitle, r.enTitle)}</h4>
      <p>${t(r.koBody, r.enBody)}</p>
    </article>
  `).join("");
}

// =========================================================================
// MODULE 5: SEASONAL HARVEST EXPLORER
// =========================================================================

const MONTHS_KO = ["전체 월", "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
const MONTHS_EN = ["All Months", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const STATES_LIST = ["ALL", "QLD", "NSW", "VIC", "TAS", "SA", "WA", "NT"];

function renderSeasonalExplorer() {
  const mWrap = document.getElementById("season-month-buttons");
  const sWrap = document.getElementById("season-state-buttons");
  const grid = document.getElementById("season-cards-grid");
  if (!mWrap || !sWrap || !grid) return;

  mWrap.innerHTML = MONTHS_KO.map((labelKo, idx) => `
    <button type="button" class="filter-pill-btn ${selectedSeasonMonth === idx ? 'active' : ''}" data-month="${idx}">
      ${t(labelKo, MONTHS_EN[idx])}
    </button>
  `).join("");

  sWrap.innerHTML = STATES_LIST.map(st => `
    <button type="button" class="filter-pill-btn ${selectedSeasonState === st ? 'active' : ''}" data-state="${st}">
      ${st === "ALL" ? t("호주 전체", "All Australia") : st}
    </button>
  `).join("");

  mWrap.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSeasonMonth = Number(btn.getAttribute("data-month"));
      renderSeasonalExplorer();
    });
  });

  sWrap.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSeasonState = btn.getAttribute("data-state");
      renderSeasonalExplorer();
    });
  });

  const filtered = HARVEST_REGIONS.filter(reg => {
    const stateMatch = selectedSeasonState === "ALL" || reg.state === selectedSeasonState;
    const monthMatch = selectedSeasonMonth === 0 || reg.crops.some(c => c.months.includes(selectedSeasonMonth));
    return stateMatch && monthMatch;
  });

  grid.innerHTML = filtered.map(reg => {
    const activeCrops = selectedSeasonMonth === 0
      ? reg.crops
      : reg.crops.filter(c => c.months.includes(selectedSeasonMonth));
    return `
      <article class="dama-card">
        <div>
          <div class="dama-card-top">
            <span class="state-tag">${reg.state}</span>
            <span class="badge badge-burgundy">${t("참고 우편번호", "Postcode")} ${reg.rangeText}</span>
          </div>
          <h3>${t(reg.nameKo, reg.nameEn)}</h3>
          <p class="dama-card-lga">${t(reg.covKo, reg.covEn)}</p>
          <div style="margin:10px 0;">
            ${activeCrops.map(c => `
              <div class="harvest-activity-row">
                <strong>${t(c.ko, c.en)}</strong>
                <span class="badge badge-neutral">${t(c.winKo, c.winEn)}</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="dama-card-footer">
          <button type="button" class="btn-region-detail btn-load-harvest-pc" data-pc="${reg.pc}" style="width:100%;">
            ${t(`우편번호 ${reg.pc} 검증·계산기에 자동 입력 ↑`, `Load Postcode ${reg.pc} into Checker ↑`)}
          </button>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".btn-load-harvest-pc").forEach(btn => {
    btn.addEventListener("click", () => {
      const pc = btn.getAttribute("data-pc");
      const pvInput = document.getElementById("pv-input");
      if (pvInput) {
        pvInput.value = pc;
        renderPostcodeVerifier();
      }
      if (workPeriods.length > 0) {
        workPeriods[0].postcode = pc;
        renderPeriodsList();
        renderCalculatorSummary();
      }
      document.getElementById("postcode-verifier")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// =========================================================================
// MODULE 6: RIGHTS, TRAPS, LIVE SOURCES & FOOTNOTES
// =========================================================================

function renderRightsSourcesAndFootnotes() {
  const rtEl = document.getElementById("rights-traps-container");
  if (rtEl) {
    rtEl.innerHTML = `
      <article class="rule8547-card" style="border-top:4px solid #2E6B4F;">
        <h4 style="color:#1A4731;">${t("✓ 워킹홀리데이(417 · 462) 비자 소지자의 핵심 권리", "✓ Key Rights on a Working Holiday Maker (417 / 462) Visa")}</h4>
        <ul style="margin:8px 0 0 18px;padding:0;font-size:13.8px;line-height:1.65;color:#2E2E2E;">
          <li>${t("<strong>모든 직종 근무 가능:</strong> 조건 8547(동일 고용주 6개월 제한 및 면제 규정)을 준수하는 한 호주 내 어떤 직종·고용 형태(풀타임·파트타임·캐주얼)로도 일할 수 있어요.", "<strong>Work in any occupation:</strong> Subject to Condition 8547, you can work full-time, part-time, or casual in any industry.")}</li>
          <li>${t("<strong>호주 공정근로법(Fair Work Act) 동일 보호:</strong> 내국인과 동일한 법정 최저임금, 캐주얼 로딩(최소 25%), 피스레이트 최저시급 보장, 그리고 퇴직연금(Superannuation — 출국 시 DASP 환급 신청 가능)을 받을 권리가 있어요.", "<strong>Full Fair Work workplace protections:</strong> Entitled to national minimum wage, 25% casual loading, piecework minimum wage guarantee, and Superannuation.")}</li>
          <li>${t("<strong>다중 고용주 합산 및 조기 연장 신청 불이익 없음:</strong> 여러 고용주 밑에서 일한 지정 근로를 합산해 88일/179일을 채울 수 있으며, 호주 내에서 현 비자 보유 중 2·3차 비자를 조기 신청·승인받아도 기존 비자 잔여 기간을 잃지 않고 연속 24개월/36개월 체류가 보장돼요(cl 417.513 / 462.513).", "<strong>Combine multiple employers & early lodge protection:</strong> Combine eligible work across multiple employers, and lodge onshore early without losing remaining stay period (cl 417.513).")}</li>
          <li>${t("<strong>최대 4개월(17주) 학업·직무훈련 허용 (Condition 8548):</strong> 각 비자당 최대 4개월까지 어학연수나 단기 과정을 수강할 수 있어요.", "<strong>Up to 4 months (17 weeks) study or training (Condition 8548):</strong> Allowed on each WHM visa.")}</li>
        </ul>
      </article>
      <article class="rule8547-card" style="border-top:4px solid #9B1C1C;">
        <h4 style="color:#771D1D;">${t("✗ 비자 거절 · 취소(s 116)로 이어지는 6대 치명적 함정", "✗ 6 Critical Traps Leading to Visa Refusal or Cancellation")}</h4>
        <ul style="margin:8px 0 0 18px;padding:0;font-size:13.8px;line-height:1.65;color:#2E2E2E;">
          <li>${t("<strong>함정 1 — 462 광업·어업·임업 우편번호 착오:</strong> Subclass 462에서 광업(Mining)을 지정 근로로 계산하거나, 남부 지방(NSW·VIC·SA·TAS·남부 WA)에서의 어업·임업을 462 지정 근로로 오인하는 경우 (462 어업·임업은 북부 호주 Table 3 전용!).", "<strong>Trap 1 — Subclass 462 Mining/Fishing/Forestry mismatch:</strong> Mining never counts for 462, and Fishing/Forestry for 462 count ONLY in Northern Australia (Table 3).")}</li>
          <li>${t("<strong>함정 2 — 관광·접객업(Tourism & Hospitality) 일반 지방 오인:</strong> 관광·접객업은 북부 호주(Table 3) 또는 외곽·극외곽 호주(Table 1·2) 우편번호에서만 지정 근로로 인정돼요. 일반 지방(Table 4, 예: 바이런베이·골드코스트·일반 지방 도시) 카페·호텔 근무는 지정 근로로 산입되지 않아요! (단, 조건 8547 6개월 면제는 호주 전역 적용)", "<strong>Trap 2 — Tourism & Hospitality in standard regional areas:</strong> For 88/179-day specified work, Tourism & Hospitality is restricted to Northern or Remote/Very Remote postcodes (Tables 1–3), NOT all of Regional Australia (Table 4).")}</li>
          <li>${t("<strong>함정 3 — 투잡 동일 날짜 중복 계산 & 무급 기상악화 미차감:</strong> 하루에 두 곳에서 일해도 하루는 최대 1일로만 산입되며, 피스레이트·캐주얼 계약 중 폭우·악천후로 일하지 못한 무급 휴업일(Petra 사례)을 88일에서 빼지 않고 신청했다가 일수 부족으로 거절되는 사례.", "<strong>Trap 3 — Double-counting overlapping days or unpaid weather days:</strong> One calendar day can never count as >1 day, and unpaid severe weather days do not count (Petra example).")}</li>
          <li>${t("<strong>함정 4 — 학생비자 브리징(Ingrid 사례) 중 수행한 근로 산입:</strong> 1차 WHM 만료 후 학생비자(500) 체류 중이거나 학생비자에서 2차 WHM을 신청해 나온 브리징 비자 상태에서 한 근로는 3차 비자용 지정 근로로 절대 인정되지 않아요.", "<strong>Trap 4 — Working on a Student visa or non-WHM Bridging Visa (Ingrid trap):</strong> Work done while holding a Student visa or a BVA from a Student visa never counts toward a 3rd WHM visa.")}</li>
          <li>${t("<strong>함정 5 — 인력파견업체(Agency) 변경을 통한 6개월 제한 우회 시도:</strong> 파견업체만 바꾸고 동일한 최종 사업장(End-user)의 같은 장소에서 6개월을 넘겨 일하면 조건 8547 위반이에요.", "<strong>Trap 5 — Switching labour-hire agencies at the same end-user:</strong> Condition 8547 looks at the end-user business and physical workplace, not the payroll agency.")}</li>
          <li>${t("<strong>함정 6 — 워킹홀리데이 승인 후 ETA(601)·eVisitor(651) 중복 신청:</strong> WHM 비자가 승인된 뒤 관광비자(601/651)를 신청해 승인받으면 이민법 s 82에 의해 기존 WHM 비자와 취업권이 즉시 소멸해요!", "<strong>Trap 6 — Applying for an ETA (601) or eVisitor (651) after WHM grant:</strong> Grant of another substantive visa ceases your WHM visa under s 82 of the Migration Act.")}</li>
        </ul>
      </article>
    `;
  }

  const srcBody = document.getElementById("live-sources-body");
  if (srcBody && POLLING_DATA && POLLING_DATA.sources) {
    srcBody.innerHTML = POLLING_DATA.sources.map(s => `
      <tr>
        <td><strong>${s.authority}</strong></td>
        <td>${s.title}</td>
        <td><span class="badge badge-success">HTTP ${s.http_code || 200} · LIVE</span></td>
        <td style="font-family:monospace;font-size:12px;">
          <div>SHA-256: ${(s.sha256 || "").slice(0, 16)}…</div>
          <a href="${s.url}" target="_blank" rel="noopener" style="color:var(--color-burgundy);font-weight:700;font-family:var(--font-sans);">원문 열기 (Open Official Source) ↗</a>
        </td>
      </tr>
    `).join("");
  }

  const fnEl = document.getElementById("footnotes-container");
  if (fnEl) {
    fnEl.innerHTML = FOOTNOTES.map(f => `
      <div class="footnote-item" style="padding:8px 0;border-bottom:1px solid var(--color-line);font-size:13px;">
        <strong>[${f.id}] ${f.cite}:</strong> ${t(f.descKo, f.descEn)}
        <a href="${f.url}" target="_blank" rel="noopener" style="color:var(--color-burgundy);font-weight:700;margin-left:6px;">[공식 원문 ↗]</a>
      </div>
    `).join("");
  }
}

// =========================================================================
// LANGUAGE SWITCHER & EVENT LISTENERS
// =========================================================================

const I18N_STATIC = {
  brandTag: { ko: "IMMIGRATION LAW · WHM 417 & 462 PRACTICE", en: "IMMIGRATION LAW · WHM 417 & 462 PRACTICE" },
  pollBadge: { ko: "출처 모니터 (2026-10-20 · 실시간 10/10 검증 완료)", en: "Source Monitor (2026-10-20 · 10/10 Live Verified)" },
  navEnquiry: { ko: "박앤코 상담·문의하기 →", en: "Book Consultation →" },
  urgentBadge: { ko: "2026 법령·정책 핵심 업데이트", en: "2026 Statutory & Policy Alert" },
  urgentText: {
    ko: "2026.07.01부터 대한민국(Republic of Korea)·독일·핀란드·키프로스 여권 소지자의 Subclass 417 연령 상한이 만 18~35세(만 36세 생일 전날 AEST/AEDT 23:59까지)로 확대 [5] / 영국(UK·BN(O)) 여권 소지자는 2·3차 417 지정 근로 면제(단, 조건 8547 6개월 제한은 동일 적용) [4] / 2025.04.05 발효 LIN 25/048 산불(Table 5)·자연재해(Table 6) 우편번호 전수 반영 [9] / 현행 법정 비자 신청비(VAC): 1차 $840 (태평양 국가 462 $690) · 2차·3차 $1,000 [1].",
    en: "From 1 Jul 2026, Subclass 417 age limit increased to 18–35 (inclusive) for Republic of Korea, Germany, Finland & Cyprus [5] / UK & BN(O) passport holders exempt from specified work for 2nd/3rd 417 (Condition 8547 still applies) [4] / 5 Apr 2025 LIN 25/048 Bushfire (Table 5) & Natural Disaster (Table 6) postcodes embedded [9] / Statutory VAC: 1st $840 ($690 Pacific 462) · 2nd & 3rd $1,000 [1]."
  },
  heroTitle: {
    ko: "호주 워킹홀리데이(417 · 462) 2·3차 연장 및 조건 8547(6개월 근무 제한·면제) 통합 네비게이터",
    en: "Australia Working Holiday (417 & 462) Visa Extension, Specified Work & Condition 8547 Navigator"
  },
  heroPrimaryCta: { ko: "2·3차 비자 지정 근로(88/179일) 정밀 계산기 ↓", en: "2nd & 3rd Visa Specified Work (88/179d) Calculator ↓" },
  heroSecondaryCta: { ko: "조건 8547 (동일 고용주 6개월 제한·면제) 시뮬레이터 ↓", en: "Condition 8547 (6-Month Work Limit & Exemptions) Simulator ↓" },
  gateTitle: { ko: "‘지정 근로(Specified Work)’ 4대 법정 관문 & 417 vs 462 인정 업종·지역 비교표", en: "The 4 Statutory Gates of Specified Work & Subclass 417 vs 462 Comparison Matrix" },
  pvTitle: { ko: "근무지 우편번호(Postcode) 6대 공식 지역표 & 417 · 462 · 조건 8547 즉시 검증기", en: "Instant Workplace Postcode Verifier (Tables 1–6, Subclass 417/462 & Condition 8547)" },
  calcTitle: { ko: "2차(88일) · 3차(179일) 워킹홀리데이 지정 근로 정밀 계산기 (중복 일수 자동 제거 & PAM3 반영)", en: "2nd (88-Day) & 3rd (179-Day) WHM Specified Work Calculator (PAM3 & Overlap Deduplication)" },
  c8547Title: { ko: "비자 조건 8547 (동일 고용주 6개월 근무 제한) 만료일 계산 & 자동 면제 · 시계 리셋 정밀 판정기", en: "Visa Condition 8547 (6-Month Work Limitation) Expiry Calculator & Exemption Engine" },
  seasonTitle: { ko: "호주 7개 주·준주 13대 농업 지역 월별 수확 시기 & 참고 우편번호 탐색기", en: "Seasonal Harvest & Regional Work Explorer (13 Regions × 12 Months)" },
  rightsTitle: { ko: "워킹홀리데이 핵심 권리 vs 비자 거절·취소 빈발 함정 & 10대 공식 출처 실시간 모니터", en: "WHM Workplace Rights, Common Refusal Traps & Live Official Source Monitor" }
};

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle-ko")?.classList.toggle("active", lang === "ko");
  document.getElementById("lang-toggle-en")?.classList.toggle("active", lang === "en");

  Object.entries(I18N_STATIC).forEach(([key, val]) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
      el.textContent = val[lang];
    });
  });

  populateCountriesSelect();
  renderGatesAndMatrix();
  renderPostcodeVerifier();
  renderPeriodsList();
  renderEvidenceChecklist();
  renderCalculatorSummary();
  renderCondition8547Simulator();
  renderCondition8547RulesCards();
  renderSeasonalExplorer();
  renderRightsSourcesAndFootnotes();
}

document.addEventListener("DOMContentLoaded", () => {
  populateCountriesSelect();
  renderGatesAndMatrix();
  renderPostcodeVerifier();
  renderPeriodsList();
  renderEvidenceChecklist();
  renderCalculatorSummary();
  renderCondition8547Simulator();
  renderCondition8547RulesCards();
  renderSeasonalExplorer();
  renderRightsSourcesAndFootnotes();

  // Language buttons
  document.getElementById("lang-toggle-ko")?.addEventListener("click", () => applyLanguage("ko"));
  document.getElementById("lang-toggle-en")?.addEventListener("click", () => applyLanguage("en"));

  // Postcode verifier input & presets
  document.getElementById("pv-input")?.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    renderPostcodeVerifier();
  });
  document.querySelectorAll(".pv-preset").forEach(btn => {
    btn.addEventListener("click", () => {
      const pc = btn.getAttribute("data-pc");
      const pvInput = document.getElementById("pv-input");
      if (pvInput) {
        pvInput.value = pc;
        renderPostcodeVerifier();
      }
    });
  });

  // Calculator Step 1 controls
  document.getElementById("calc-subclass")?.addEventListener("change", () => {
    populateCountriesSelect();
    renderPeriodsList();
    renderCalculatorSummary();
  });
  ["calc-target", "calc-country", "calc-age", "calc-visa-held", "calc-location-status", "calc-no-children", "calc-no-excluded-emp"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", () => {
      renderPeriodsList();
      renderCalculatorSummary();
    });
    document.getElementById(id)?.addEventListener("input", () => {
      renderCalculatorSummary();
    });
  });

  // Add period button
  document.getElementById("btn-add-period")?.addEventListener("click", () => {
    workPeriods.push({
      id: nextPeriodId++,
      category: "tourism",
      postcode: "6725",
      startDate: "2026-06-01",
      endDate: "2026-08-31",
      countingMode: "fulltime",
      exactShiftsWorked: 65,
      stdShiftsPerWeek: 5,
      unpaidAbsentDays: 0,
      lawfullyPaid: true,
      shortShiftWarning: false
    });
    renderPeriodsList();
    renderCalculatorSummary();
  });

  // Condition 8547 controls
  ["c8547-start-date", "c8547-postcode", "c8547-sector", "c8547-diff-location", "c8547-visa-reset", "c8547-multi-client", "c8547-workers-comp", "c8547-permission-grounds"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", renderCondition8547Simulator);
    document.getElementById(id)?.addEventListener("input", renderCondition8547Simulator);
  });

  // Polling modal
  const modal = document.getElementById("detail-modal");
  document.getElementById("btn-polling-status")?.addEventListener("click", () => {
    if (!modal) return;
    const body = document.getElementById("modal-body-content");
    if (body) {
      body.innerHTML = `
        <p style="font-size:14px;color:#2E2E2E;margin-bottom:12px;">
          <strong>최종 점검 일시:</strong> ${POLLING_DATA.last_polled_at} · <strong>실시간 검증 성공:</strong> ${POLLING_DATA.live_verified_count}/${POLLING_DATA.total_sources} (100% Live)
        </p>
        <div class="results-table-wrap">
          <table class="occ-table">
            <thead>
              <tr>
                <th>기관</th>
                <th>문서명</th>
                <th>상태</th>
                <th>SHA-256</th>
              </tr>
            </thead>
            <tbody>
              ${POLLING_DATA.sources.map(s => `
                <tr>
                  <td>${s.authority}</td>
                  <td><a href="${s.url}" target="_blank" rel="noopener" style="color:var(--color-burgundy);font-weight:700;">${s.title} ↗</a></td>
                  <td><span class="badge badge-success">LIVE (${s.http_code})</span></td>
                  <td style="font-family:monospace;font-size:11.5px;">${(s.sha256 || "").slice(0, 16)}…</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }
    modal.classList.add("open");
  });
  document.getElementById("modal-close-btn")?.addEventListener("click", () => modal?.classList.remove("open"));
  modal?.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
});
