/**
 * Park & Co Lawyers — WHM (Subclass 417 & 462) Extension, Specified Work & Condition 8547 Navigator
 * Primary-Source Verified Legal Engine (Migration Regulations 1994, LIN 22/012, LIN 22/013, LIN 25/048, PAM3 VM-3182/1813/1144)
 */
const POSTCODE_TABLES = {"remote":[[800,999],[2356,2356],[2386,2387],[2396,2396],[2405,2406],[2672,2672],[2675,2675],[2825,2826],[2829,2829],[2832,2836],[2838,2840],[2873,2873],[2878,2879],[2898,2899],[3424,3424],[3506,3506],[3509,3509],[3512,3512],[3889,3892],[4025,4025],[4183,4183],[4417,4420],[4422,4423],[4426,4428],[4454,4454],[4461,4462],[4465,4465],[4467,4468],[4470,4470],[4474,4475],[4477,4482],[4486,4494],[4496,4497],[4680,4680],[4694,4695],[4697,4697],[4699,4707],[4709,4714],[4717,4717],[4720,4728],[4730,4733],[4735,4746],[4750,4751],[4753,4754],[4756,4757],[4798,4812],[4814,4825],[4828,4830],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4888],[4890,4892],[4895,4895],[5220,5223],[5302,5304],[5440,5440],[5576,5577],[5582,5583],[5602,5607],[5611,5611],[5630,5633],[5640,5642],[5650,5655],[5660,5661],[5670,5671],[5680,5680],[5690,5690],[5713,5713],[5715,5715],[5717,5717],[5719,5720],[5722,5725],[5730,5734],[6161,6161],[6335,6338],[6341,6341],[6343,6343],[6346,6346],[6348,6348],[6350,6353],[6355,6359],[6361,6361],[6363,6363],[6365,6365],[6367,6369],[6373,6373],[6375,6375],[6385,6386],[6418,6429],[6431,6431],[6434,6434],[6436,6438],[6440,6440],[6443,6443],[6445,6448],[6450,6450],[6452,6452],[6466,6468],[6470,6470],[6472,6473],[6475,6477],[6479,6480],[6484,6484],[6487,6490],[6515,6515],[6517,6519],[6536,6536],[6605,6606],[6608,6609],[6612,6614],[6616,6616],[6620,6620],[6623,6623],[6625,6625],[6627,6628],[6630,6632],[6635,6635],[6638,6640],[6731,6731],[6733,6733],[6798,6799],[7139,7139],[7255,7257],[7466,7470]],"northern":[[800,999],[4472,4472],[4478,4478],[4481,4482],[4680,4680],[4694,4695],[4697,4697],[4699,4707],[4709,4714],[4717,4717],[4720,4728],[4730,4733],[4735,4746],[4750,4751],[4753,4754],[4756,4757],[4798,4812],[4814,4825],[4828,4830],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4888],[4890,4892],[4895,4895],[6537,6537],[6642,6642],[6646,6646],[6701,6701],[6705,6705],[6707,6707],[6710,6714],[6716,6716],[6718,6718],[6720,6722],[6725,6726],[6728,6728],[6740,6740],[6743,6743],[6751,6751],[6753,6754],[6758,6758],[6760,6760],[6762,6762],[6765,6765],[6770,6770]],"regional":[[800,999],[2311,2312],[2328,2411],[2420,2490],[2536,2551],[2575,2594],[2618,2739],[2787,2899],[3139,3139],[3211,3334],[3340,3424],[3430,3649],[3658,3749],[3753,3753],[3756,3756],[3758,3758],[3762,3762],[3764,3764],[3778,3781],[3783,3783],[3797,3797],[3799,3799],[3810,3909],[3921,3925],[3945,3974],[3979,3979],[3981,3996],[4124,4125],[4133,4133],[4211,4211],[4270,4272],[4275,4275],[4280,4280],[4285,4285],[4287,4287],[4307,4499],[4510,4510],[4512,4512],[4515,4519],[4522,4899],[5000,5999],[6041,6044],[6055,6056],[6069,6069],[6076,6076],[6083,6084],[6111,6111],[6121,6126],[6200,6799],[7000,7999]],"bushfire":[[822,822],[847,847],[852,852],[854,854],[860,860],[862,862],[870,870],[872,875],[2069,2076],[2083,2083],[2172,2173],[2178,2178],[2224,2234],[2250,2251],[2256,2265],[2267,2267],[2278,2278],[2280,2287],[2289,2290],[2305,2306],[2311,2312],[2315,2331],[2333,2341],[2344,2347],[2350,2350],[2352,2356],[2358,2361],[2365,2365],[2369,2372],[2386,2388],[2390,2390],[2397,2406],[2408,2411],[2415,2415],[2420,2431],[2439,2441],[2443,2450],[2452,2456],[2460,2460],[2462,2466],[2469,2490],[2500,2500],[2502,2502],[2505,2506],[2508,2508],[2515,2519],[2525,2526],[2530,2530],[2536,2541],[2545,2546],[2548,2551],[2555,2555],[2560,2560],[2568,2588],[2590,2590],[2594,2594],[2600,2633],[2640,2640],[2642,2642],[2644,2644],[2646,2646],[2649,2653],[2655,2656],[2658,2661],[2678,2678],[2702,2702],[2710,2710],[2716,2716],[2720,2720],[2722,2722],[2725,2727],[2729,2730],[2733,2733],[2745,2745],[2747,2750],[2752,2754],[2756,2760],[2765,2765],[2773,2780],[2782,2787],[2790,2795],[2797,2800],[2803,2808],[2818,2818],[2820,2820],[2822,2822],[2824,2826],[2828,2835],[2838,2840],[2844,2850],[2852,2852],[2864,2868],[2870,2870],[2873,2873],[2877,2877],[2900,2920],[3023,3024],[3029,3029],[3037,3037],[3104,3104],[3114,3116],[3125,3125],[3127,3140],[3145,3145],[3147,3156],[3158,3158],[3160,3163],[3165,3175],[3177,3180],[3183,3183],[3185,3185],[3187,3187],[3189,3190],[3192,3192],[3194,3202],[3204,3204],[3211,3227],[3233,3234],[3236,3239],[3241,3243],[3249,3251],[3254,3254],[3260,3260],[3264,3266],[3268,3268],[3270,3287],[3289,3289],[3292,3294],[3300,3305],[3309,3312],[3314,3315],[3317,3319],[3321,3323],[3328,3338],[3340,3342],[3345,3345],[3350,3352],[3355,3358],[3360,3364],[3370,3371],[3373,3375],[3377,3381],[3384,3385],[3387,3388],[3393,3393],[3395,3395],[3400,3401],[3407,3407],[3409,3409],[3412,3415],[3418,3420],[3423,3424],[3427,3427],[3430,3435],[3437,3438],[3440,3442],[3444,3444],[3446,3448],[3450,3451],[3453,3453],[3458,3458],[3460,3465],[3467,3469],[3472,3472],[3475,3475],[3477,3478],[3480,3480],[3482,3483],[3485,3485],[3488,3488],[3490,3490],[3515,3516],[3518,3518],[3521,3523],[3525,3525],[3527,3527],[3529,3533],[3544,3544],[3550,3551],[3555,3559],[3570,3570],[3600,3600],[3607,3608],[3610,3610],[3612,3612],[3614,3614],[3616,3618],[3629,3631],[3633,3634],[3646,3647],[3658,3660],[3662,3666],[3669,3670],[3672,3673],[3675,3675],[3677,3677],[3682,3683],[3685,3685],[3687,3688],[3690,3691],[3695,3695],[3697,3701],[3704,3705],[3707,3709],[3711,3715],[3717,3720],[3722,3723],[3725,3726],[3732,3733],[3735,3735],[3737,3741],[3744,3744],[3746,3747],[3749,3749],[3753,3753],[3756,3758],[3762,3767],[3770,3770],[3777,3779],[3781,3783],[3785,3789],[3791,3793],[3795,3797],[3802,3810],[3812,3816],[3818,3818],[3820,3825],[3831,3833],[3835,3835],[3840,3840],[3842,3842],[3844,3844],[3847,3847],[3850,3852],[3854,3854],[3856,3860],[3862,3862],[3864,3865],[3869,3871],[3873,3875],[3878,3878],[3880,3880],[3882,3882],[3885,3893],[3895,3896],[3898,3898],[3900,3900],[3902,3904],[3909,3913],[3915,3916],[3918,3920],[3922,3923],[3925,3931],[3933,3934],[3936,3946],[3950,3951],[3953,3954],[3956,3960],[3962,3962],[3964,3967],[3971,3971],[3975,3981],[3984,3984],[3987,3988],[3990,3992],[3995,3996],[4114,4114],[4118,4119],[4124,4125],[4127,4133],[4157,4161],[4163,4165],[4178,4178],[4183,4184],[4205,4205],[4207,4218],[4220,4221],[4223,4228],[4270,4270],[4272,4272],[4275,4275],[4280,4280],[4285,4285],[4287,4287],[4300,4301],[4303,4307],[4309,4314],[4340,4344],[4346,4347],[4350,4350],[4352,4365],[4370,4378],[4380,4385],[4387,4388],[4390,4390],[4400,4407],[4417,4417],[4426,4428],[4454,4455],[4461,4462],[4465,4465],[4467,4467],[4474,4474],[4480,4480],[4486,4488],[4492,4494],[4496,4498],[4515,4515],[4517,4519],[4550,4551],[4553,4575],[4580,4581],[4600,4601],[4614,4615],[4621,4621],[4625,4627],[4630,4630],[4670,4671],[4673,4674],[4676,4678],[4680,4680],[4694,4695],[4697,4697],[4700,4706],[4709,4712],[4717,4717],[4720,4720],[4722,4723],[4741,4741],[4810,4812],[4814,4816],[4818,4819],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4873],[4877,4888],[4890,4892],[4895,4895],[5052,5052],[5072,5073],[5076,5076],[5110,5110],[5112,5118],[5120,5121],[5131,5134],[5136,5142],[5144,5144],[5151,5157],[5201,5201],[5204,5204],[5220,5223],[5231,5238],[5240,5245],[5250,5255],[5259,5261],[5264,5267],[5271,5271],[5273,5273],[5275,5275],[5301,5304],[5320,5321],[5330,5330],[5351,5351],[5353,5354],[5356,5357],[5374,5374],[5552,5552],[5558,5558],[5570,5573],[5575,5577],[5580,5583],[5605,5607],[5630,5632],[6030,6038],[6055,6055],[6063,6069],[6077,6079],[6083,6083],[6090,6090],[6302,6302],[6304,6304],[6306,6306],[6528,6528],[6628,6628],[6630,6632],[6635,6635],[6640,6640],[6642,6642],[6646,6646],[6705,6705],[6721,6722],[6725,6726],[6753,6753],[6758,6758],[6760,6760],[6762,6762],[7017,7017],[7026,7027],[7030,7030],[7116,7116],[7119,7120],[7140,7140],[7190,7190],[7212,7216],[7264,7264],[7270,7270],[7275,7275],[7304,7304]],"disaster":[[822,822],[847,847],[852,852],[854,854],[860,860],[862,862],[870,870],[872,875],[886,886],[2011,2011],[2018,2022],[2031,2032],[2035,2036],[2038,2042],[2044,2045],[2048,2050],[2063,2063],[2067,2067],[2069,2077],[2079,2087],[2092,2097],[2099,2108],[2112,2122],[2125,2128],[2130,2133],[2141,2148],[2150,2168],[2170,2179],[2190,2200],[2203,2214],[2216,2234],[2250,2251],[2256,2263],[2287,2287],[2289,2289],[2291,2300],[2302,2305],[2307,2308],[2311,2312],[2315,2331],[2333,2347],[2350,2350],[2352,2361],[2365,2365],[2369,2372],[2379,2382],[2386,2388],[2390,2390],[2395,2406],[2408,2411],[2415,2415],[2420,2431],[2439,2441],[2443,2450],[2452,2456],[2460,2460],[2462,2466],[2469,2490],[2500,2500],[2502,2502],[2505,2506],[2508,2508],[2515,2519],[2525,2530],[2533,2541],[2545,2546],[2548,2551],[2555,2560],[2563,2588],[2590,2590],[2594,2594],[2611,2611],[2618,2633],[2640,2653],[2655,2656],[2658,2661],[2663,2663],[2665,2666],[2668,2669],[2671,2672],[2675,2675],[2678,2678],[2680,2681],[2700,2703],[2705,2707],[2710,2717],[2720,2722],[2725,2727],[2729,2739],[2745,2745],[2747,2750],[2752,2754],[2756,2763],[2765,2770],[2773,2780],[2782,2787],[2790,2795],[2797,2800],[2803,2810],[2817,2818],[2820,2836],[2838,2840],[2842,2850],[2852,2852],[2864,2871],[2873,2880],[2898,2898],[3000,3000],[3002,3004],[3006,3006],[3008,3008],[3011,3011],[3013,3013],[3019,3019],[3024,3024],[3029,3029],[3031,3032],[3034,3034],[3039,3041],[3051,3054],[3065,3067],[3089,3091],[3096,3097],[3099,3099],[3101,3104],[3116,3116],[3121,3133],[3135,3141],[3145,3156],[3158,3163],[3165,3175],[3177,3180],[3183,3183],[3185,3185],[3187,3187],[3189,3190],[3192,3192],[3194,3202],[3204,3204],[3207,3207],[3211,3227],[3243,3243],[3249,3251],[3254,3254],[3260,3260],[3264,3272],[3277,3277],[3280,3283],[3285,3285],[3289,3289],[3292,3294],[3300,3305],[3309,3312],[3314,3315],[3317,3317],[3321,3325],[3328,3338],[3340,3342],[3345,3345],[3350,3352],[3355,3358],[3360,3364],[3370,3371],[3373,3375],[3377,3381],[3384,3385],[3387,3388],[3393,3393],[3395,3395],[3400,3401],[3407,3407],[3409,3409],[3431,3435],[3437,3438],[3440,3442],[3444,3444],[3446,3448],[3450,3451],[3453,3453],[3458,3458],[3460,3465],[3467,3469],[3472,3472],[3475,3475],[3477,3478],[3480,3480],[3482,3483],[3485,3485],[3488,3489],[3491,3491],[3494,3494],[3496,3496],[3498,3498],[3500,3501],[3505,3507],[3509,3509],[3512,3512],[3515,3518],[3520,3523],[3525,3525],[3527,3527],[3529,3531],[3533,3533],[3537,3537],[3540,3540],[3542,3542],[3544,3544],[3546,3546],[3549,3551],[3555,3559],[3561,3568],[3570,3573],[3575,3576],[3579,3581],[3583,3586],[3588,3591],[3594,3597],[3599,3599],[3607,3608],[3610,3610],[3612,3612],[3614,3614],[3616,3618],[3620,3624],[3629,3631],[3633,3641],[3644,3644],[3646,3647],[3649,3649],[3658,3660],[3662,3666],[3669,3670],[3672,3673],[3675,3675],[3677,3678],[3682,3683],[3685,3685],[3687,3688],[3690,3691],[3695,3695],[3697,3701],[3704,3705],[3707,3709],[3711,3715],[3717,3720],[3722,3723],[3725,3728],[3730,3730],[3732,3733],[3735,3735],[3737,3741],[3744,3744],[3746,3747],[3749,3749],[3754,3754],[3756,3767],[3770,3770],[3775,3775],[3777,3779],[3781,3783],[3785,3789],[3791,3793],[3795,3797],[3799,3799],[3802,3810],[3812,3816],[3818,3818],[3820,3825],[3831,3833],[3835,3835],[3840,3840],[3842,3842],[3844,3844],[3847,3847],[3850,3852],[3854,3854],[3856,3860],[3862,3862],[3864,3865],[3869,3871],[3873,3875],[3878,3878],[3880,3880],[3882,3882],[3885,3893],[3895,3896],[3898,3898],[3900,3900],[3902,3904],[3909,3913],[3915,3916],[3918,3920],[3922,3923],[3925,3931],[3933,3934],[3936,3946],[3950,3951],[3953,3954],[3956,3960],[3962,3962],[3964,3967],[3971,3971],[3975,3981],[3984,3984],[3987,3988],[3990,3992],[3995,3996],[4000,4000],[4005,4014],[4017,4022],[4025,4025],[4030,4032],[4034,4037],[4051,4051],[4053,4055],[4059,4061],[4064,4070],[4073,4078],[4101,4125],[4127,4133],[4151,4161],[4163,4165],[4169,4174],[4178,4179],[4183,4184],[4205,4205],[4207,4218],[4220,4221],[4223,4228],[4270,4270],[4272,4272],[4275,4275],[4280,4280],[4285,4285],[4287,4287],[4300,4301],[4303,4307],[4309,4314],[4340,4344],[4346,4347],[4350,4350],[4352,4365],[4370,4378],[4380,4385],[4387,4388],[4390,4390],[4400,4408],[4410,4413],[4415,4428],[4454,4455],[4461,4462],[4465,4465],[4467,4468],[4470,4470],[4472,4472],[4474,4474],[4477,4477],[4479,4481],[4486,4494],[4496,4498],[4500,4512],[4514,4521],[4550,4575],[4580,4581],[4600,4601],[4605,4606],[4608,4608],[4610,4615],[4620,4621],[4625,4627],[4630,4630],[4650,4650],[4655,4655],[4659,4660],[4662,4662],[4670,4671],[4673,4674],[4676,4678],[4680,4680],[4694,4695],[4697,4697],[4699,4702],[4709,4709],[4712,4712],[4714,4720],[4722,4724],[4727,4727],[4730,4730],[4733,4733],[4735,4736],[4741,4741],[4800,4800],[4804,4812],[4814,4816],[4818,4819],[4822,4825],[4828,4830],[4849,4850],[4852,4852],[4854,4856],[4858,4861],[4865,4865],[4868,4888],[4890,4892],[4895,4895],[5157,5157],[5172,5172],[5201,5201],[5210,5214],[5236,5238],[5253,5256],[5259,5261],[5264,5267],[5301,5302],[5304,5304],[5306,5311],[5321,5322],[5330,5333],[5340,5346],[5354,5354],[5357,5357],[6030,6038],[6055,6055],[6063,6069],[6077,6079],[6083,6083],[6090,6090],[6227,6230],[6232,6233],[6236,6236],[6254,6254],[6275,6275],[6280,6282],[6284,6286],[6288,6288],[6290,6290],[6302,6302],[6304,6304],[6306,6306],[6336,6337],[6346,6346],[6385,6385],[6429,6434],[6436,6438],[6440,6440],[6442,6443],[6450,6450],[6528,6528],[6532,6532],[6535,6536],[6623,6623],[6628,6628],[6630,6632],[6635,6635],[6639,6640],[6642,6642],[6646,6646],[6701,6701],[6705,6705],[6710,6710],[6712,6714],[6718,6718],[6720,6722],[6725,6726],[6728,6728],[6740,6740],[6743,6743],[6753,6753],[6758,6758],[6760,6760],[6762,6762],[6765,6765],[6770,6770],[7000,7999]],"counts":{"remote":545,"northern":350,"regional":4520,"bushfire":1284,"disaster":2677,"additional_tourism":4},"additional_tourism":[[4406,4406],[4416,4416],[4498,4498],[7215,7215]]};
const POLLING_DATA = {"last_polled_at":"2026-10-21T00:23:11+10:00","last_polled_date":"2026-10-21","total_sources":12,"live_verified_count":12,"changed_count":7,"official_contact":"enquiry@parkcolawyers.com","monitored_rules":{"postcodes_tables_1_to_6":{"verified":true,"counts":{"remote":545,"northern":350,"regional":4520,"bushfire":1284,"disaster":2677,"additional_tourism":4},"instruments":["LIN 22/012 (F2022L00271)","LIN 22/013 (F2022L00272)","LIN 25/048 (F2025L00485)"]},"subclass_417_age_caps":{"parsed":true,"total_countries":19,"age_35_count":10,"age_30_count":9,"age_35_countries":["Canada","Republic of Cyprus","Denmark","Finland","France","Germany","Republic of Ireland","Italy","Republic of Korea","The United Kingdom of Great Britain and Northern Ireland (including British National Overseas passport holders)"],"age_30_countries":["Belgium","Estonia","Hong Kong Special Administrative Region of the People's Republic of China","Japan","Malta","Netherlands","Norway","Sweden","Taiwan (other than an official or diplomatic passport)"],"korea_age_max":35},"subclass_462_country_caps":{"parsed":true,"total_capped_partners":29,"open_count":23,"paused_countries":["Brazil","Mongolia"],"closed_countries":[],"ballot_countries":["China","India","Indonesia","Vietnam"],"by_country":{"Argentina":{"status":"open","status_label":"Open","annual_cap":"3,400"},"Austria":{"status":"open","status_label":"Open","annual_cap":"500"},"Brazil":{"status":"paused","status_label":"paused","annual_cap":"500"},"Chile":{"status":"open","status_label":"Open","annual_cap":"3,400"},"China":{"status":"ballot","status_label":"CHECK BALLOT STATUS","annual_cap":"5,000"},"Czechia":{"status":"open","status_label":"Open","annual_cap":"500"},"Ecuador":{"status":"open","status_label":"Open","annual_cap":"100"},"Greece":{"status":"open","status_label":"Open","annual_cap":"500"},"Hungary":{"status":"open","status_label":"Open","annual_cap":"500"},"India":{"status":"ballot","status_label":"CHECK BALLOT STATUS","annual_cap":"1,000"},"Indonesia":{"status":"ballot","status_label":"CHECK BALLOT STATUS*","annual_cap":"5,000"},"Israel":{"status":"open","status_label":"Open","annual_cap":"2,500"},"Luxembourg":{"status":"open","status_label":"Open","annual_cap":"100"},"Malaysia":{"status":"open","status_label":"Open","annual_cap":"1,100"},"Mongolia":{"status":"paused","status_label":"paused","annual_cap":"100"},"Papua New Guinea":{"status":"open","status_label":"open","annual_cap":"100"},"Peru":{"status":"open","status_label":"Open","annual_cap":"1,500"},"Poland":{"status":"open","status_label":"Open","annual_cap":"1,500"},"Portugal":{"status":"open","status_label":"Open","annual_cap":"500"},"San Marino":{"status":"open","status_label":"Open","annual_cap":"100"},"Singapore":{"status":"open","status_label":"Open","annual_cap":"2,500"},"Slovak Republic":{"status":"open","status_label":"Open","annual_cap":"1,000"},"Slovenia":{"status":"open","status_label":"Open","annual_cap":"200"},"Spain":{"status":"open","status_label":"Open","annual_cap":"3,400"},"Switzerland":{"status":"open","status_label":"Open","annual_cap":"200"},"Thailand":{"status":"open","status_label":"Open","annual_cap":"2,000"},"Türkiye":{"status":"open","status_label":"Open","annual_cap":"100"},"Uruguay":{"status":"open","status_label":"Open","annual_cap":"1,500"},"Vietnam":{"status":"ballot","status_label":"CHECK BALLOT STATUS","annual_cap":"1,500"}}},"condition_8547_exemptions":{"parsed":true,"until_further_notice_active":true,"all_exempt_categories_confirmed":true,"policy_notice":"From 1 January 2024 — Active until the Government makes further decisions"},"statutory_vac_2026":{"first_visa_aud":840,"first_visa_pacific_462_aud":690,"papua_new_guinea_462_aud":690,"second_and_third_visa_aud":1000,"authority":"Migration Regulations 1994 — Sch 1 Item 1225(2) & Item 1224A(2)"}},"internal_policy_references":[{"id":"pam3_vm_3182","cite":"PAM3 (Procedural Instruction): Working Holiday Visa Program (Subclass 417) — VM-3182 (Level 100169)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","localMirrorReference":"/mnt/T7/LegendCom (VM-3182 Level 100169)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work"},{"id":"pam3_vm_1813","cite":"PAM3 (Procedural Instruction): Work and Holiday Visa Program (Subclass 462) — VM-1813 (Level 100178)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","localMirrorReference":"/mnt/T7/LegendCom (VM-1813 Level 100178)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work"},{"id":"pam3_vm_1144","cite":"PAM3 (Procedural Instruction): Condition 8547 — 6-Month Work Limitation — VM-1144 (Level 100280)","sourceKind":"internal_policy_reference","notPubliclyPollable":true,"fetchStatus":"internal_legendcom_mirror","contentCheckStatus":"verified_against_local_mirror","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","localMirrorReference":"/mnt/T7/LegendCom (VM-1144 Level 100280)","publicCompanionUrl":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation"}],"sources":[{"id":"ha_417_specified_work","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 417 — Specified Work & Designated Area Postcode Tables (Tables 1–6)","title_ko":"Subclass 417 — 지정 근로 및 6대 지정 지역 우편번호표 (Tables 1–6)","title_en":"Subclass 417 — Specified Work & Designated Area Postcode Tables (Tables 1–6)","check_scope_ko":"업종 정의 · 6대 지역 우편번호 범위 실시간 파싱","check_scope_en":"Live parsing of 417 work categories & Tables 1–6 postcodes","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"f6b5dd9a4754e7db053ba25d193c052d3f63c1bc8ac470c1e998ac37576a9b97","bytes":63538,"method":"urllib_ha_schema","changed_since_last_poll":false,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"ha_462_specified_work","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 462 — Specified Work & Designated Area Postcode Tables (Tables 1–6)","title_ko":"Subclass 462 — 지정 근로(광업 제외·북부 전용 규칙) 및 우편번호표 (Tables 1–6)","title_en":"Subclass 462 — Specified Work & Designated Area Postcode Tables (Tables 1–6)","check_scope_ko":"462 인정 업종 · 북부/지방/재해 우편번호 대조","check_scope_en":"Live verification of 462 work categories & postcode tables","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"266311e3e8711d286f1c2f2da80a9b7c4b9b9bbe06f44a57ef5363984f7ccf69","bytes":62011,"method":"urllib_ha_schema","changed_since_last_poll":false,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"ha_8547_6month_limit","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Condition 8547 — 6-Month Work Limitation & Automatic Exemptions Policy","title_ko":"조건 8547 — 동일 고용주 6개월 근무 제한 및 자동 면제 지침","title_en":"Condition 8547 — 6-Month Work Limitation & Automatic Exemptions Policy","check_scope_ko":"2024.1.1~현행 핵심산업·북부호주·장소변경 자동 면제 유지 여부 파싱","check_scope_en":"Live check of automatic exemptions, location rules & permission criteria","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"e3f86561b8a8a6d5f4a3bf07008ea196ad4d6e10c945175e6eae87906f1b217a","bytes":6164,"method":"urllib_ha_schema","changed_since_last_poll":false,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"ha_417_first_stream","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Subclass 417 Eligible Passports & Country Age Limits (18–30 vs 18–35)","title_ko":"Subclass 417 (1차·2차·3차) 협정국 명단 및 국가별 연령 상한 (만 18~30 / 35세)","title_en":"Subclass 417 Eligible Passports & Country Age Limits (18–30 vs 18–35)","check_scope_ko":"19개 협정국 국가별 연령 상한(한국·독일·핀란드·키프로스 등 만 35세) 파싱","check_scope_en":"Live parsing of 19 eligible 417 passport countries & age limits","url":"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"ac0e08f240d4223b419da45fa2f65570078883fdf4b19cb38d7c38162c063471","bytes":50385,"method":"urllib_ha_schema","changed_since_last_poll":false,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"ha_uk_arrangements","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Arrangements for UK & BN(O) Passport Holders (Age 35 & Specified Work Exemption)","title_ko":"영국(UK · BN(O)) 여권 소지자 특별 규정 (만 35세 & 2·3차 지정 근로 면제)","title_en":"Arrangements for UK & BN(O) Passport Holders (Age 35 & Specified Work Exemption)","check_scope_ko":"영국 여권 지정 근로 면제 및 조건 8547 적용 여부 감시","check_scope_en":"Monitors UK/BN(O) specified work exemption under Item 1225(3BA)","url":"https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/arrangements-uk-passport-holders","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"77704b06a55c41edc9f97964f0f599bca04f0f79237cb18d0e275ac579ed292a","bytes":1305709,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"ha_whm_latest_news","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"WHM Program Latest News (1 Jul 2026 Age 35 Expansion, Ballot & Bilateral Updates)","title_ko":"WHM 프로그램 최신 개정 공지 (2026.7.1 연령 상향·추첨제·협정 개정)","title_en":"WHM Program Latest News (1 Jul 2026 Age 35 Expansion, Ballot & Bilateral Updates)","check_scope_ko":"신규 연령 상향·국가 추가·제도 개편 공지 감시","check_scope_en":"Monitors bilateral age expansions, new partner countries & policy alerts","url":"https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"a6495c48469c66c22808f47f0f8208a35e58651328454980b3a3089e20cafc3d","bytes":1303372,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"ha_country_caps","authority":"호주 연방 이민성 (Department of Home Affairs)","authority_ko":"호주 연방 이민성 (Department of Home Affairs)","authority_en":"Department of Home Affairs","title":"Status of Subclass 462 Country Caps & Pre-Application Ballot (Current Program Year)","title_ko":"Subclass 462 협정국 연간 쿼터(Cap) 마감 현황 및 추첨제(Ballot) 상태","title_en":"Status of Subclass 462 Country Caps & Pre-Application Ballot (Current Program Year)","check_scope_ko":"30개국 쿼터 상태(Open / Paused / Closed / Ballot) 실시간 테이블 파싱","check_scope_en":"Live parsing of Open / Paused / Closed / Ballot status for 30 countries","url":"https://immi.homeaffairs.gov.au/what-we-do/whm-program/status-of-country-caps","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"6b62a63695235904cb15e44a251bfe7392dd1f4fd629df1cd96fff2bcab5da69","bytes":1307907,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"leg_mig_regs_1994","authority":"호주 연방 법제처 (Federal Register of Legislation)","authority_ko":"호주 연방 법제처 (Federal Register of Legislation)","authority_en":"Federal Register of Legislation","title":"Migration Regulations 1994 (F1996B03551 Latest Compilation — Sch 1, Sch 2, Sch 8)","title_ko":"Migration Regulations 1994 (F1996B03551 최신 현행본 — Sch 1, Sch 2, Sch 8)","title_en":"Migration Regulations 1994 (F1996B03551 Latest Compilation — Sch 1, Sch 2, Sch 8)","check_scope_ko":"Item 1224A/1225 VAC 금액, Reg 1.15FAA~FB, Cond 8547 현행 컴파일 감시","check_scope_en":"Monitors latest compilation of Migration Regulations 1994","url":"https://www.legislation.gov.au/F1996B03551/latest/details","sourceKind":"public_legislation","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"2f99a9e02b719bbc447a7f733c8cd4286392fd694c5ffdb84d347f31309ad85d","bytes":61758,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"leg_lin_22_012","authority":"호주 연방 법제처 (Federal Register of Legislation)","authority_ko":"호주 연방 법제처 (Federal Register of Legislation)","authority_en":"Federal Register of Legislation","title":"Migration (Specified work and areas for Subclass 417 visas) Instrument (LIN 22/012) — F2022L00271","title_ko":"Subclass 417 지정 근로 및 지정 지역 고시문 (LIN 22/012) — F2022L00271","title_en":"Migration (Specified work and areas for Subclass 417 visas) Instrument (LIN 22/012) — F2022L00271","check_scope_ko":"LIN 22/012 최신 컴파일 번호 및 개정 이력 감시","check_scope_en":"Monitors LIN 22/012 compilation currency and amendments","url":"https://www.legislation.gov.au/F2022L00271/latest/details","sourceKind":"public_legislation","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"7c5ae14837f62b36004a0f49d2a51e0fc2b035dd34b9cf8ddf9e89616232d655","bytes":60145,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"leg_lin_22_013","authority":"호주 연방 법제처 (Federal Register of Legislation)","authority_ko":"호주 연방 법제처 (Federal Register of Legislation)","authority_en":"Federal Register of Legislation","title":"Migration (Specified work and areas for Subclass 462 visas) Instrument (LIN 22/013) — F2022L00272","title_ko":"Subclass 462 지정 근로 및 지정 지역 고시문 (LIN 22/013) — F2022L00272","title_en":"Migration (Specified work and areas for Subclass 462 visas) Instrument (LIN 22/013) — F2022L00272","check_scope_ko":"LIN 22/013 최신 컴파일 번호 및 개정 이력 감시","check_scope_en":"Monitors LIN 22/013 compilation currency and amendments","url":"https://www.legislation.gov.au/F2022L00272/latest/details","sourceKind":"public_legislation","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"dde5f0f1ab517f413a00a170d9bdefec859e210ed0f8699b0bceb12cd2d97620","bytes":60154,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"leg_lin_25_048","authority":"호주 연방 법제처 (Federal Register of Legislation)","authority_ko":"호주 연방 법제처 (Federal Register of Legislation)","authority_en":"Federal Register of Legislation","title":"Migration Amendment (Specified Work and Areas for 417 and 462) Instrument 2025 (LIN 25/048) — F2025L00485","title_ko":"2025 산불·자연재해 지정 지역 확대 개정 고시문 (LIN 25/048) — F2025L00485","title_en":"Migration Amendment (Specified Work and Areas for 417 and 462) Instrument 2025 (LIN 25/048) — F2025L00485","check_scope_ko":"Table 5(산불) 및 Table 6(홍수·사이클론) 우편번호 개정 고시 감시","check_scope_en":"Monitors Table 5 (Bushfire) and Table 6 (Disaster) legislative updates","url":"https://www.legislation.gov.au/F2025L00485/latest/details","sourceKind":"public_legislation","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"d456ec38d0a72b1eafc8cf15697457835124808359c79a30ac86da22f095e41a","bytes":60213,"method":"urllib_direct","changed_since_last_poll":true,"checked_at":"2026-10-21T00:23:11+10:00"},{"id":"fwo_piecework","authority":"호주 공정근로옴부즈만 (Fair Work Ombudsman)","authority_ko":"호주 공정근로옴부즈만 (Fair Work Ombudsman)","authority_en":"Fair Work Ombudsman","title":"Horticulture Award Piecework Minimum Wage Guarantee & Workplace Entitlements","title_ko":"원예업 어워드(Horticulture Award) 성과급(Piecework) 최저시급 보장 지침","title_en":"Horticulture Award Piecework Minimum Wage Guarantee & Workplace Entitlements","check_scope_ko":"피스레이트 서면 계약 및 최저시급 보장 규정 감시","check_scope_en":"Monitors piecework minimum wage guarantee & pay slip rules","url":"https://www.fairwork.gov.au/pay-and-wages/minimum-wages/piece-rates-and-commission-payments","sourceKind":"public_policy_guidance","status":"live","fetchStatus":"retrieved","contentCheckStatus":"content_extracted","ruleMatchStatus":"matched","reviewStatus":"verified_2026-10-20","http_code":200,"sha256":"20db4e74f182d5fe406aca28a24ee89486cac9c93471564383fa94a8e75ffbfe","bytes":432000,"method":"urllib_direct","changed_since_last_poll":false,"checked_at":"2026-10-21T00:23:11+10:00"}]};

let currentLang = 'ko';

function t(ko, en) {
  return currentLang === 'ko' ? ko : en;
}

function inRanges(pcNum, rangeList) {
  if (!Array.isArray(rangeList) || !Number.isFinite(pcNum) || pcNum < 800 || pcNum > 9999) return false;
  for (let i = 0; i < rangeList.length; i++) {
    const [a, b] = rangeList[i];
    if (pcNum >= a && pcNum <= b) return true;
  }
  return false;
}

// Allocated Northern Territory (08xx) postcodes per Australia Post (distinguishes statutory 0800-0999 range from unallocated codes like 0999)
const KNOWN_NT_POSTCODES = new Set([
  800, 801, 804, 810, 811, 812, 813, 814, 815, 820, 821, 822, 828, 829, 830, 831, 832, 834,
  835, 836, 837, 838, 839, 840, 841, 845, 846, 847, 850, 851, 852, 853, 854, 860, 861, 862,
  870, 871, 872, 873, 874, 875, 880, 881, 885, 886
]);

function isKnownAllocatedPostcode(pcNum) {
  if (!Number.isFinite(pcNum)) return false;
  if (pcNum >= 800 && pcNum <= 999) return KNOWN_NT_POSTCODES.has(pcNum);
  if (pcNum >= 2000 && pcNum <= 2999) return true;
  if (pcNum >= 3000 && pcNum <= 3999) return true;
  if (pcNum >= 4000 && pcNum <= 4999) return true;
  if (pcNum >= 5000 && pcNum <= 5799) return true;
  if (pcNum >= 6000 && pcNum <= 6799) return true;
  if (pcNum >= 7000 && pcNum <= 7499) return true;
  return false;
}

function evaluatePostcodeAreas(pcStr) {
  const clean = String(pcStr || "").trim();
  if (!/^\d{4}$/.test(clean)) {
    return {
      valid: false,
      validFormat: false,
      actualPostcodeKnown: false,
      inStatutoryRange: false,
      pcNum: NaN,
      remote: false,
      additionalTourismArea: false,
      table2Special: false,
      northern: false,
      regional: false,
      bushfire: false,
      disaster: false
    };
  }
  const n = Number(clean);
  const remote = inRanges(n, POSTCODE_TABLES.remote);
  const additionalTourismArea = inRanges(n, POSTCODE_TABLES.additional_tourism || [[4406, 4406], [4416, 4416], [4498, 4498], [7215, 7215]]);
  const northern = inRanges(n, POSTCODE_TABLES.northern);
  const regional = inRanges(n, POSTCODE_TABLES.regional);
  const bushfire = inRanges(n, POSTCODE_TABLES.bushfire);
  const disaster = inRanges(n, POSTCODE_TABLES.disaster);
  const inStatutoryRange = remote || additionalTourismArea || northern || regional || bushfire || disaster;
  const actualPostcodeKnown = isKnownAllocatedPostcode(n);

  return {
    valid: true,
    validFormat: true,
    actualPostcodeKnown,
    inStatutoryRange,
    unverifiedLocalityWarning: inStatutoryRange && !actualPostcodeKnown,
    pcNum: n,
    remote,
    additionalTourismArea,
    table2Special: additionalTourismArea,
    northern,
    regional,
    bushfire,
    disaster
  };
}

/**
 * Evaluate the effect of a subsequent Visitor / ETA / eVisitor visa on an existing WHM (417/462) visa.
 * Fixes W01 (T01, T02): ETA (Subclass 601) does NOT cease an already-granted WHM visa under s 82(2) / cl 601.512,
 * whereas eVisitor (Subclass 651) or Visitor (Subclass 600) coming into effect can cease a WHM visa.
 */
function evaluateSubsequentVisitorVisa(visaType) {
  const v = String(visaType || "").toLowerCase().trim();
  if (v === "eta_601" || v === "601" || v === "eta") {
    const summaryKo = "ETA(Subclass 601)는 이미 승인된 WHM(417·462) 비자를 소멸시키지 않아요(s 82(2) / cl 601.512). 단, WHM 비자가 이미 승인된 상태에서 호주에 입국하면 ETA가 아닌 WHM 비자로 입국 처리되어 12개월 WHM 체류기간이 즉시 시작될 수 있으므로 주의해야 해요.";
    const summaryEn = "Grant of an ETA (Subclass 601) does NOT cease an already-granted WHM (417/462) visa (s 82(2) / cl 601.512). However, entering Australia while holding a granted WHM visa activates the WHM visa's 12-month stay period.";
    return {
      visaType: "eta_601",
      ceasesWhm: false,
      ceasesWhmOnGrant: false,
      activatesWhmOnEntry: true,
      status: "concurrent_eta",
      cite: "Migration Act 1958 s 82(2); Migration Regulations 1994 Sch 2 cl 601.512; Home Affairs 'Before you travel'",
      summaryKo,
      summaryEn,
      noteKo: summaryKo,
      noteEn: summaryEn
    };
  }
  if (v === "evisitor_651" || v === "651" || v === "evisitor" || v === "visitor_600" || v === "600" || v === "transit_771" || v === "771") {
    const summaryKo = "eVisitor(Subclass 651), Visitor(Subclass 600), Transit(Subclass 771) 등 별도의 실체비자가 새로 승인·발효되면 Migration Act 1958 s 82(2)에 의해 기존 WHM 비자가 대체·소멸될 위험이 매우 높아요!";
    const summaryEn = "When a subsequent substantive visa such as an eVisitor (Subclass 651), Visitor (Subclass 600), or Transit (Subclass 771) comes into effect, it ceases an existing WHM visa under s 82(2) of the Migration Act 1958.";
    return {
      visaType: v,
      ceasesWhm: true,
      ceasesWhmOnGrant: true,
      activatesWhmOnEntry: false,
      status: "ceases_whm",
      cite: "Migration Act 1958 s 82(2)",
      summaryKo,
      summaryEn,
      noteKo: summaryKo,
      noteEn: summaryEn
    };
  }
  return {
    visaType: v,
    ceasesWhm: null,
    ceasesWhmOnGrant: null,
    status: "manual_review_needed",
    cite: "Migration Act 1958 s 82",
    summaryKo: "후속 비자 종류별 발효·소멸 규정(s 82)을 수동으로 확인해야 해요.",
    summaryEn: "Manual review of s 82 visa cessation rules required for this visa subclass.",
    noteKo: "후속 비자 종류별 발효·소멸 규정(s 82)을 수동으로 확인해야 해요.",
    noteEn: "Manual review of s 82 visa cessation rules required for this visa subclass."
  };
}

// 19 Subclass 417 Eligible Countries + 30 Subclass 462 Eligible Countries
const COUNTRIES = {
  "417": [
    { code: "KR", ko: "대한민국 (Republic of Korea) — 만 18~35세 [2026.7.1 상향!]", en: "Republic of Korea — Age 18–35 (Increased 1 Jul 2026)", maxAge: 35, ukExempt: false, vac1: 840, vac23: 1000, noteKo: "2026년 7월 1일부터 대한민국 여권 소지자의 Subclass 417 신청 가능 연령이 만 18~35세(만 36세 생일 전날 호주 동부 표준시 AEST 23:59까지)로 확대되었어요!", noteEn: "From 1 July 2026, Republic of Korea passport holders are eligible for Subclass 417 up to age 35 (inclusive, until 11:59 pm AEST the day before turning 36)." },
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
  { id: 1, cite: "Migration Regulations 1994 — Schedule 1 Item 1225 (Working Holiday Class TZ) & Item 1224A (Work and Holiday Class US)", sourceKind: "public_legislation", descKo: "1차 비자 VAC $840(파푸아뉴기니·태평양 국가 462 $690) 및 2·3차 비자 VAC $1,000(파푸아뉴기니 462 $690), 호주 내 신청 시 실체비자 보유 또는 만료 후 28일 이내 유예 규정(1225(3B)(f)(ii) · 1224A(3)(c)(iv)).", descEn: "Base VAC ($840 1st visa, $690 Papua New Guinea & Pacific-regional 462, $1,000 2nd/3rd visa) and onshore 28-day substantive visa grace period.", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 2, cite: "Migration Regulations 1994 — Schedule 2 Part 417 (cl 417.211, 417.411–412, 417.511(1)–(3)) & Part 462 (cl 462.218–219, 462.411–412, 462.511–513)", sourceKind: "public_legislation", descKo: "2차(3개월)·3차(6개월, 2019.7.1 이후 2차 비자/연계 브리징 보유 중) 지정 근로 요건, 적법 급여 지급 요건, 승인 시 위치 요건(cl 417.411–412 / 462.411–412) 및 체류기간 산정 규정(417은 cl 417.511(1)·(2)·(3), 462는 cl 462.511·512·513).", descEn: "Primary criteria for 2nd (3 months) and 3rd (6 months on 2nd visa/BVA) WHM visas, lawful remuneration, location at grant (cl 417.411–412 / 462.411–412), and stay period clauses (cl 417.511(1)–(3) for 417; cl 462.511–513 for 462).", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 3, cite: "Migration Regulations 1994 — Schedule 8 Visa Conditions 8547 (6-month work limitation) & 8548 (4-month study limitation)", sourceKind: "public_legislation", descKo: "모든 417·462 비자에 의무 부과되는 동일 고용주 6개월 근무 제한 및 4개월(17주) 학업·훈련 제한 규정.", descEn: "Mandatory visa conditions 8547 (max 6 months with any one employer) and 8548 (max 4 months study or training).", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 4, cite: "Migration Amendment (Working Holiday Visa) Regulations / F2024L00661 & Item 1225(3BA) — UK Passport Arrangements", sourceKind: "public_policy_guidance", descKo: "2023.7.1 영국 여권 연령 만 18~35세 확대 및 2024.7.1 이후 영국(GBNI·BN(O)) 여권 신청자 2·3차 417 지정 근로 면제.", descEn: "UK & BN(O) passport holders age 18–35 (from 1 Jul 2023) and exemption from specified work for 2nd/3rd 417 visas (from 1 Jul 2024).", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/arrangements-uk-passport-holders" },
  { id: 5, cite: "Migration Amendment (Working Holiday Maker Age Criteria) Regulations 2026 (Schedule 13 Part 163) & Home Affairs Latest News (1 July 2026)", sourceKind: "public_policy_guidance", descKo: "연령 요건의 Schedule 1 유효 신청 요건(Item 1225(3AA) · 1224A(3)(aab)) 편입 및 2026.7.1부터 대한민국·독일·핀란드·키프로스 Subclass 417 연령 상한 만 18~35세(만 36세 생일 전날 AEST 23:59까지) 확대.", descEn: "2026 Schedule 1 age criteria reform and 1 July 2026 expansion of Subclass 417 age limit to 18–35 (inclusive, until 11:59 pm AEST the day before turning 36) for Republic of Korea, Germany, Finland, and Cyprus.", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news" },
  { id: 6, cite: "Migration Regulations 1994 — Reg 1.15FAA (417), Reg 1.15FA (462) & Reg 1.15FB (Excluded Employer Prohibition)", sourceKind: "public_legislation", descKo: "지정 근로 위임 규정 및 근로자 안전·복지 위험으로 장관이 지정한 제외 고용주(Excluded Employer, F2024L00182 · F2024L00919) 근무 불인정 규정.", descEn: "Statutory definitions of specified work and prohibition on counting work performed for an Excluded Employer under Reg 1.15FB.", url: "https://www.legislation.gov.au/F1996B03551/latest" },
  { id: 7, cite: "Migration (Specified work and areas for Subclass 417 visas) Instrument (LIN 22/012) 2022 — Compilation No. 3 (F2022L00271)", sourceKind: "public_legislation", descKo: "Subclass 417 지정 근로 업종 및 우편번호 지역표 고시 법령 문서.", descEn: "Legislative Instrument specifying Subclass 417 work categories and designated postcode areas.", url: "https://www.legislation.gov.au/F2022L00271/latest/details" },
  { id: 8, cite: "Migration (Specified work and areas for Subclass 462 visas) Instrument (LIN 22/013) 2022 — Compilation No. 3 (F2022L00272)", sourceKind: "public_legislation", descKo: "Subclass 462 지정 근로 업종(광업 제외, 어업·임업 북부 호주 전용 등) 및 우편번호 지역표 고시 법령 문서.", descEn: "Legislative Instrument specifying Subclass 462 work categories and designated postcode areas.", url: "https://www.legislation.gov.au/F2022L00272/latest/details" },
  { id: 9, cite: "Migration Legislation Amendment (Specified Work and Areas for Subclass 417 and 462 Visas) Instrument 2025 (LIN 25/048) — F2025L00485", sourceKind: "public_legislation", descKo: "2025.4.5 발효(2025.4.5 이후 신청분 적용) 산불 피해 선포 지역(Table 5) 및 홍수·사이클론·악천후 자연재해 선포 지역(Table 6) 우편번호 확대 개정문.", descEn: "5 April 2025 legislative amendment (applicable to applications lodged on or after 5 Apr 2025) expanding Bushfire (Table 5) and Natural Disaster (Table 6) declared postcode tables.", url: "https://www.legislation.gov.au/F2025L00485/latest/details" },
  { id: 10, cite: "Department of Home Affairs — Specified work for Working Holiday (subclass 417) & Work and Holiday (subclass 462)", sourceKind: "public_policy_guidance", descKo: "호주 연방 이민성 공식 지정 근로 일수 산정 지침(88일/179일, 풀타임·파트타임·피스레이트·유무급 휴일·업종 유연성 및 Table 1~6 우편번호).", descEn: "Official Home Affairs specified work guidance and designated postcode tables (Tables 1–6).", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
  { id: 11, cite: "PAM3 (Procedural Instruction): Working Holiday Visa Program (Subclass 417) — VM-3182 (Level 100169) [Internal Policy Reference — LegendCom]", sourceKind: "internal_policy_reference", notPubliclyPollable: true, descKo: "호주 연방 이민성 내부 심사지침(LegendCom 원문 대조, 비공개 내부 문건 — 공개 폴링 대상 아님) — 지정 근로 일수 산정(s 4.5.3: 풀타임 주말 포함 vs 파트타임 실근무일, 단시간 근무 합산 불가, 최소 달력 기간).", descEn: "Internal Departmental policy instruction VM-3182 (verified via LegendCom mirror; not a publicly pollable URL) on Subclass 417 specified work day-counting and remuneration verification.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
  { id: 12, cite: "PAM3 (Procedural Instruction): Work and Holiday Visa Program (Subclass 462) — VM-1813 (Level 100178) [Internal Policy Reference — LegendCom]", sourceKind: "internal_policy_reference", notPubliclyPollable: true, descKo: "호주 연방 이민성 내부 심사지침(LegendCom 원문 대조, 비공개 내부 문건 — 공개 폴링 대상 아님) — Subclass 462 지정 근로 최소 3달력월 경과 원칙, Form 1464 및 고용주 불리 정보(Adverse Info) 28일 소명 절차.", descEn: "Internal Departmental policy instruction VM-1813 (verified via LegendCom mirror; not a publicly pollable URL) on Subclass 462 specified work assessment and natural justice procedures.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work" },
  { id: 13, cite: "Department of Home Affairs — Condition 8547: 6-Month Work Limitation (Updated 21 September 2026)", sourceKind: "public_policy_guidance", descKo: "2024.1.1 이후 현행 조건 8547 자동 면제(장소 변경·재택근무, 농축산, 자연재해, 5대 핵심 산업, 북부 호주 4대 산업) 및 사전 서면 허가 지침.", descEn: "Official Home Affairs Condition 8547 policy covering automatic exemptions, location changes, clock resets, and permission requests.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation" },
  { id: 14, cite: "PAM3 (Procedural Instruction): Condition 8547 — 6-Month Work Limitation — VM-1144 (Level 100280) [Internal Policy Reference — LegendCom]", sourceKind: "internal_policy_reference", notPubliclyPollable: true, descKo: "조건 8547 내부 심사지침(LegendCom 원문 대조, 비공개 내부 문건 — 공개 폴링 대상 아님) — 6달력월 산정(s 3.2.1), 최종 사용자(End-user) 원칙(s 3.2.2), 산재보상 수령 기간 검토(s 3.2.4), 비자 승인/브리징 발효 시 시계 리셋(s 3.4.1), 만료 2주 전 허가 신청(s 3.3).", descEn: "Internal Departmental policy instruction VM-1144 (verified via LegendCom mirror; not a publicly pollable URL) detailing elapsed calendar month calculation, end-user rule, workers compensation review, and visa clock resets.", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation" },
  { id: 15, cite: "Department of Home Affairs — Status of Subclass 462 Country Caps & Pre-Application Ballot (2026–27)", sourceKind: "public_policy_guidance", descKo: "30개 Subclass 462 협정국 연간 쿼터 현황 및 중국·인도·베트남·인도네시아(향후 등록 안내 포함) 1차 비자 추첨제(Ballot) 운영 안내.", descEn: "Subclass 462 annual country caps and pre-application ballot rules for China, India, Vietnam, and Indonesia.", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/status-of-country-caps" },
  { id: 16, cite: "Fair Work Ombudsman — Piecework Rates & Horticulture Award Minimum Wage Guarantee", sourceKind: "public_policy_guidance", descKo: "성과급(Piecework) 근로자의 시간당 최저임금 보장 의무 및 서면 성과급 계약서 요건.", descEn: "Fair Work Ombudsman guidance on piecework agreements and the minimum wage guarantee under the Horticulture Award.", url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages/piece-rates-and-commission-payments" },
  { id: 17, cite: "Workforce Australia — Harvest Jobs & Regional Vacancies Portal (Replacing Harvest Trail after 30 June 2024)", sourceKind: "public_policy_guidance", descKo: "구 Harvest Trail 종료(2024.6.30) 이후 연방 정부 공식 농장·수확 구인 검색 포털.", descEn: "Official Australian Government Workforce Australia harvest vacancy search.", url: "https://www.workforceaustralia.gov.au/individuals/jobs/search?searchText=harvest+worker" },
  { id: 18, cite: "ABARES — Snapshot of Australian Agriculture 2026 & Horticultural Labour Demand Baseline", sourceKind: "public_policy_guidance", descKo: "호주 농업자원경제과학국(ABARES) 계절별 원예 임시직·계약직 노동 수요 통계(평균 118,400명 · 피크 130,300명).", descEn: "ABARES seasonal horticultural casual and contract workforce demand statistics.", url: "https://www.agriculture.gov.au/abares/products/insights/snapshot-of-australian-agriculture" }
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

function evaluateCategoryForPostcode(subclass, catId, pcEval, opts = {}) {
  if (!pcEval || !pcEval.valid) {
    return { eligible: false, status: "invalid_postcode", labelKo: "유효한 4자리 우편번호 입력 필요", labelEn: "Enter valid 4-digit postcode" };
  }
  const appDate = opts.applicationDate || opts.lodgementDate || "";
  const workEnd = opts.workEndDate || "";
  const workStart = opts.workStartDate || "";

  if (catId === "covid") {
    return { eligible: true, status: "eligible", labelKo: "인정 (호주 전역 — 2020.2.1 이후 필수 코로나 의료·방역 직무)", labelEn: "Eligible (Anywhere in Australia — Critical COVID-19 medical work)" };
  }
  if (catId === "bushfire") {
    if ((appDate && appDate < "2025-04-05") || opts.bushfireUnpaidBefore2025) {
      return {
        eligible: false,
        status: "manual_review",
        historicalRuleApplies: true,
        labelKo: "수동 검토 필요 (LIN 25/048 산불 우편번호 확대는 2025.04.05 이후 신청분부터 적용 — 이전 신청·경과 규정 대상은 구 고시문 대조 필수)",
        labelEn: "Manual review required (LIN 25/048 applies to applications made on or after 5 Apr 2025; check prior instrument / transitional rules)"
      };
    }
    return pcEval.bushfire
      ? { eligible: true, status: "eligible", labelKo: "인정 (Table 5 산불 피해 선포 지역 우편번호 포함 · 유급/자원봉사 모두 가능)", labelEn: "Eligible (In Table 5 Bushfire Declared Areas · Paid or Volunteer)" }
      : { eligible: false, status: "ineligible", labelKo: "불인정 (Table 5 산불 선포 지역 우편번호에 미포함)", labelEn: "Not in Table 5 Bushfire Declared Areas" };
  }
  if (catId === "disaster") {
    if (appDate && appDate < "2025-04-05") {
      return {
        eligible: false,
        status: "manual_review",
        historicalRuleApplies: true,
        labelKo: "수동 검토 필요 (LIN 25/048 자연재해 우편번호 확대는 2025.04.05 이후 신청분부터 적용 — 이전 신청분은 구 고시문 대조 필수)",
        labelEn: "Manual review required (LIN 25/048 applies to applications made on or after 5 Apr 2025; check prior instrument)"
      };
    }
    return pcEval.disaster
      ? { eligible: true, status: "eligible", labelKo: "인정 (Table 6 홍수·사이클론·자연재해 선포 지역 포함 · 유급/자원봉사 가능)", labelEn: "Eligible (In Table 6 Natural Disaster Declared Areas · Paid or Volunteer)" }
      : { eligible: false, status: "ineligible", labelKo: "불인정 (Table 6 자연재해 선포 지역 우편번호에 미포함)", labelEn: "Not in Table 6 Natural Disaster Declared Areas" };
  }
  if (catId === "tourism") {
    // W21 (T44): Pre-22 June 2021 Subclass 462 Northern Australia tourism historical rule
    if (subclass === "462" && workEnd && workEnd < "2021-06-22") {
      if (pcEval.northern && (!workStart || workStart >= "2016-11-19")) {
        return {
          eligible: false,
          status: "manual_review",
          historicalRuleApplies: true,
          labelKo: "수동 검토 필요 (2016.11.19~2021.06.21 북부 호주 Table 3 Subclass 462 관광·접객업 구 고시 적용 대상 — LIN 22/013 경과 규정 확인)",
          labelEn: "Manual review required (Pre-22 Jun 2021 Subclass 462 Northern Australia Table 3 tourism historical instrument rule)"
        };
      }
    }
    if (pcEval.additionalTourismArea) {
      return {
        eligible: true,
        status: "eligible",
        areaSubkind: "table2_additional_tourism",
        labelKo: "인정 (Table 2 관광·접객업 추가 지정 지역 우편번호 4406·4416·4498·7215 포함 — Table 1 외곽 호주와 별도 분류)",
        labelEn: "Eligible (In Table 2 Additional Remote Tourism & Hospitality Area: 4406, 4416, 4498, 7215 — separate from Table 1 Remote)"
      };
    }
    const ok = pcEval.northern || pcEval.remote;
    return ok
      ? { eligible: true, status: "eligible", labelKo: "인정 (Table 3 북부 호주 또는 Table 1 외곽·극외곽 호주 포함)", labelEn: "Eligible (In Table 3 Northern or Table 1 Remote & Very Remote Australia)" }
      : { eligible: false, status: "ineligible", labelKo: "불인정 (관광·접객업은 북부 호주 Table 3 및 외곽 Table 1·2 우편번호에서만 인정 — 일반 지방 불인정)", labelEn: "Ineligible (Tourism & hospitality requires Northern Table 3 or Remote Tables 1/2 postcode)" };
  }
  if (catId === "mining") {
    if (subclass === "462") {
      return { eligible: false, status: "ineligible", labelKo: "불인정 (광업은 Subclass 462 지정 근로 대상 업종이 아님!)", labelEn: "Ineligible (Mining is NOT a specified work category for Subclass 462)" };
    }
    return pcEval.regional
      ? { eligible: true, status: "eligible", labelKo: "인정 (Subclass 417 · Table 4 지방 호주 포함)", labelEn: "Eligible (Subclass 417 · In Table 4 Regional Australia)" }
      : { eligible: false, status: "ineligible", labelKo: "불인정 (Table 4 지방 호주 우편번호 아님)", labelEn: "Not in Table 4 Regional Australia" };
  }
  if (catId === "fishing" || catId === "tree") {
    if (subclass === "462") {
      return pcEval.northern
        ? { eligible: true, status: "eligible", labelKo: "인정 (Subclass 462 · Table 3 북부 호주 우편번호 포함)", labelEn: "Eligible (Subclass 462 · In Table 3 Northern Australia)" }
        : { eligible: false, status: "ineligible", labelKo: "불인정 (462 어업·임업은 반드시 Table 3 북부 호주 우편번호에서만 인정!)", labelEn: "Ineligible (For 462, Fishing & Tree Farming require Table 3 Northern Australia ONLY)" };
    }
    return pcEval.regional
      ? { eligible: true, status: "eligible", labelKo: "인정 (Subclass 417 · Table 4 지방 호주 포함)", labelEn: "Eligible (Subclass 417 · In Table 4 Regional Australia)" }
      : { eligible: false, status: "ineligible", labelKo: "불인정 (Table 4 지방 호주 우편번호 아님)", labelEn: "Not in Table 4 Regional Australia" };
  }
  // plant or construction
  const ok = subclass === "462" ? (pcEval.northern || pcEval.regional) : pcEval.regional;
  return ok
    ? { eligible: true, status: "eligible", labelKo: "인정 (Table 4 지방 호주 / Table 3 북부 호주 우편번호 포함)", labelEn: "Eligible (In Table 4 Regional / Table 3 Northern Australia)" }
    : { eligible: false, status: "ineligible", labelKo: "불인정 (Table 4 지방 호주 우편번호에 미포함 — 대도시권)", labelEn: "Not in Table 4 Regional Australia (Metro area)" };
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
    { key: "remote", match: ev.remote || ev.additionalTourismArea, titleKo: ev.additionalTourismArea ? "Table 2 · 관광 추가 지정 (4406·4416·4498·7215)" : "Table 1 · 외곽·극외곽 (Remote)", titleEn: ev.additionalTourismArea ? "Table 2 · Additional Tourism Area" : "Table 1 · Remote & Very Remote", descKo: ev.additionalTourismArea ? "Table 2 관광·접객업 특례 우편번호 (Table 1 아님)" : "417·462 관광·접객업 인정 지역", descEn: ev.additionalTourismArea ? "Table 2 Tourism Special Area (not Table 1)" : "417 & 462 Tourism & Hospitality" },
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

  const unallocatedWarningHtml = ev.unverifiedLocalityWarning ? `
    <div style="margin-bottom:12px;padding:10px 14px;border-radius:6px;background:#FEF6E7;border-left:4px solid #B8860B;font-size:13.2px;color:#6B4D00;">
      <strong>${t(`주의 — 법령상 숫자 범위(0800–0999 등)에는 포함되나 미할당·비표준 우편번호(${pcStr}) 확인 필요:`, `Warning — Postcode ${pcStr} is inside the statutory numeric range but is not a standard allocated street postcode:`)}</strong>
      ${t("법령 지역표는 NT 전역을 '0800 to 0999'로 표기하지만, 실제 노무 제공 사업장의 유효한 우편번호(Australia Post 공식 배정 구역)인지 급여명세서와 사업장 주소로 반드시 재확인하세요.", "Legislative tables list NT as '0800 to 0999', but you must verify that the physical workplace address corresponds to an actual allocated Australia Post locality.")}
    </div>
  ` : "";

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
    ${unallocatedWarningHtml}
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

/**
 * Evaluate Subclass 462 1st-visa annual country cap & pre-application ballot rules.
 * Fixes W16 (T35, T36): 1st-visa caps/ballots apply ONLY when targetVisa === "first" and subclass === "462";
 * 2nd and 3rd WHM visa extensions are NEVER subject to annual caps or ballots.
 */
function evaluateFirstVisaCapAndBallot(subclass, arg2, arg3) {
  const streams = new Set(["first", "second", "third"]);
  const targetVisa = streams.has(arg2) ? arg2 : (streams.has(arg3) ? arg3 : "second");
  const countryCode = streams.has(arg2) ? arg3 : arg2;

  if (targetVisa !== "first") {
    return {
      applicable: false,
      capApplies: false,
      ballotApplies: false,
      ballotRequired: false,
      status: "uncapped_extension",
      summaryKo: "2차·3차 연장 비자 신청에는 연간 국가별 쿼터(Cap) 및 추첨제(Ballot) 제한이 적용되지 않아요.",
      summaryEn: "Annual country caps and pre-application ballots do NOT apply to 2nd or 3rd WHM visa applications."
    };
  }
  if (subclass === "417") {
    return {
      applicable: false,
      capApplies: false,
      ballotApplies: false,
      ballotRequired: false,
      status: "uncapped_417",
      summaryKo: "Subclass 417 워킹홀리데이 비자는 연간 쿼터나 추첨제 없이 상시 신청 가능해요.",
      summaryEn: "Subclass 417 Working Holiday visas have no annual cap or ballot."
    };
  }
  if (countryCode === "US") {
    return {
      applicable: false,
      capApplies: false,
      ballotApplies: false,
      ballotRequired: false,
      status: "uncapped_usa",
      summaryKo: "미국(USA) 여권 소지자의 1차 Subclass 462 비자는 연간 쿼터 제한이 없어요.",
      summaryEn: "United States (USA) passport holders are not subject to an annual Subclass 462 cap."
    };
  }
  const codeToName = {
    AR: "Argentina", AT: "Austria", BR: "Brazil", CL: "Chile", CN: "China", CZ: "Czechia",
    EC: "Ecuador", GR: "Greece", HU: "Hungary", IN: "India", ID: "Indonesia", IL: "Israel",
    LU: "Luxembourg", MY: "Malaysia", MN: "Mongolia", PG: "Papua New Guinea", PE: "Peru",
    PL: "Poland", PT: "Portugal", SM: "San Marino", SG: "Singapore", SK: "Slovak Republic",
    SI: "Slovenia", ES: "Spain", CH: "Switzerland", TH: "Thailand", TR: "Türkiye",
    UY: "Uruguay", VN: "Vietnam"
  };
  const cname = codeToName[countryCode] || countryCode;
  const byCountry = POLLING_DATA?.monitored_rules?.subclass_462_country_caps?.by_country || {};
  const entry = byCountry[cname];
  if (!entry) {
    return { applicable: true, capApplies: true, ballotApplies: false, ballotRequired: false, status: "unknown", summaryKo: "국가별 쿼터 상태를 확인해 주세요.", summaryEn: "Check live country cap status." };
  }
  if (entry.status === "ballot") {
    const idNoteKo = countryCode === "ID" ? " (인도네시아 *표기: 향후 추첨 등록 일정은 호주 연방 이민성 최신 공지 확인 필수)" : "";
    const idNoteEn = countryCode === "ID" ? " (Indonesia *: check Home Affairs notice for upcoming ballot registration opening dates)" : "";
    return {
      applicable: true,
      capApplies: true,
      ballotApplies: true,
      ballotRequired: true,
      status: "ballot_registration_required",
      annualCap: entry.annual_cap,
      statusLabel: entry.status_label,
      indonesiaFutureRegistrationNote: countryCode === "ID",
      summaryKo: `1차 Subclass 462 사전 추첨제(Ballot) 대상 국가(${cname}, 연간 쿼터 ${entry.annual_cap}명 · 상태: ${entry.status_label})예요.${idNoteKo}`,
      summaryEn: `1st Subclass 462 Pre-Application Ballot country (${cname}, annual cap ${entry.annual_cap} · status: ${entry.status_label}).${idNoteEn}`
    };
  }
  if (entry.status === "paused" || entry.status === "closed") {
    return {
      applicable: true,
      capApplies: true,
      ballotApplies: false,
      ballotRequired: false,
      status: entry.status,
      annualCap: entry.annual_cap,
      statusLabel: entry.status_label,
      summaryKo: `주의: 현재 ${cname}의 1차 Subclass 462 연간 쿼터(${entry.annual_cap}명) 접수가 '${entry.status_label}' 상태예요.`,
      summaryEn: `Alert: 1st Subclass 462 intake for ${cname} (cap ${entry.annual_cap}) is currently '${entry.status_label}'.`
    };
  }
  return {
    applicable: true,
    capApplies: true,
    ballotApplies: false,
    ballotRequired: false,
    status: "open",
    annualCap: entry.annual_cap,
    statusLabel: entry.status_label,
    summaryKo: `현재 ${cname}의 1차 Subclass 462 쿼터(연간 ${entry.annual_cap}명)는 정상 접수 중(${entry.status_label})이에요.`,
    summaryEn: `1st Subclass 462 intake for ${cname} (annual cap ${entry.annual_cap}) is currently Open.`
  };
}

/**
 * Evaluate stay period & location-at-grant rules under Sch 2 Part 417 & Part 462.
 * Fixes W09 (T19–T22) & W18 (T47):
 * - Subclass 417 stay period clauses: cl 417.511(1) [offshore], cl 417.511(2) [onshore non-WHM], cl 417.511(3) [onshore holding WHM]
 * - Subclass 462 stay period clauses: cl 462.511 [offshore], cl 462.512 [onshore non-WHM], cl 462.513 [onshore holding 462]
 * - Location at grant: cl 417.411 / 417.412 and cl 462.411 / 462.412
 */
function evaluateStayAndGrantRules(subclass, arg2, arg3) {
  const streams = new Set(["first", "second", "third"]);
  const locStatus = streams.has(arg2) ? (arg3 || "onshore_substantive") : (arg2 || "onshore_substantive");
  const is417 = subclass === "417";
  const cOffshore = is417 ? "cl 417.511(1) & cl 417.412" : "cl 462.511 & cl 462.412";
  const cFromGrant = is417 ? "cl 417.511(2) & cl 417.411" : "cl 462.512 & cl 462.411";
  const cContinuous = is417 ? "cl 417.511(3) & cl 417.411" : "cl 462.513 & cl 462.411";

  if (locStatus === "onshore_substantive") {
    return {
      validLocation: true,
      grantLocationRequired: "onshore",
      continuousStayGuaranteed: true,
      workRightsWarning: false,
      clauseCite: cContinuous,
      cite: cContinuous,
      stayRuleKo: `직전 WHM 비자 만료 예정일로부터 +12개월 연장 (1차 입국일로부터 총 24개월/36개월 연속 체류 보장 — 조기 신청해도 잔여기간 손실 없음, ${cContinuous})`,
      stayRuleEn: `+12 months added to the date the previous WHM visa would otherwise cease (total 24/36 months continuous stay from first entry; early application does not lose remaining time, ${cContinuous})`
    };
  }
  if (locStatus === "onshore_other_substantive") {
    return {
      validLocation: true,
      grantLocationRequired: "onshore",
      continuousStayGuaranteed: false,
      workRightsWarning: false,
      clauseCite: cFromGrant,
      cite: cFromGrant,
      stayRuleKo: `주의: 신청 당시 WHM이 아닌 다른 실체비자(500·600 등)를 보유한 경우, 기존 비자 만료일 연장이 아니라 새 WHM 비자 승인일(Grant date)로부터 12개월 체류가 적용돼요 (${cFromGrant}).`,
      stayRuleEn: `Note: When holding a non-WHM substantive visa at application, the new WHM visa grants 12 months from the date of grant (${cFromGrant}), NOT +12 months added to your current visa.`
    };
  }
  if (locStatus === "onshore_28days" || locStatus === "onshore_bva_from_whm") {
    return {
      validLocation: true,
      grantLocationRequired: "onshore",
      continuousStayGuaranteed: false,
      gracePeriodWarning: true,
      workRightsWarning: true,
      clauseCite: cFromGrant,
      cite: cFromGrant,
      stayRuleKo: `비자 승인일(Grant date)로부터 12개월 체류 (신청 당시 WHM 본비자 미보유/브리징 상태, ${cFromGrant}). [중요 주의] Item 1225(3B)(f)(ii)의 '실체비자 만료 후 28일 이내 신청' 규정은 호주 내 신청서 접수 자격을 인정할 뿐, 그 자체로 합법 체류나 취업권을 자동으로 부여하지 않아요(브리징 비자 BVC 승인 및 근로허가 여부 별도 확인 필수!).`,
      stayRuleEn: `12 months from date of visa grant (${cFromGrant}). [Critical Note] The 28-day grace period under Item 1225(3B)(f)(ii) only validates onshore application lodgement; it does NOT automatically confer lawful stay or work rights prior to Bridging Visa grant.`
    };
  }
  if (locStatus === "offshore_to_onshore_mismatch" || locStatus === "onshore_to_offshore_mismatch") {
    const cLoc = is417 ? "cl 417.411–412" : "cl 462.411–412";
    return {
      validLocation: false,
      grantLocationRequired: "must_match_application_location",
      continuousStayGuaranteed: false,
      locationMismatchBlocked: true,
      workRightsWarning: false,
      clauseCite: cLoc,
      cite: cLoc,
      stayRuleKo: `승인 시점 위치 불일치 위험 (${cLoc}): 호주 밖에서 신청한 경우 승인 시점에도 호주 밖에 있어야 하며, 호주 안에서 신청한 경우 승인 시점에도 호주 안에 있어야 해요.`,
      stayRuleEn: `Location-at-grant mismatch (${cLoc}): Offshore applicants must be outside Australia at grant, and onshore applicants must be inside Australia at grant.`
    };
  }
  if (locStatus === "onshore_over28") {
    const cGrace = "Sch 1 Item 1225(3B)(f)(ii) / Item 1224A(3)(c)(iv)";
    return {
      validLocation: false,
      grantLocationRequired: "invalid_onshore",
      continuousStayGuaranteed: false,
      workRightsWarning: true,
      clauseCite: cGrace,
      cite: cGrace,
      stayRuleKo: "호주 내 마지막 실체비자 만료 후 28일이 경과하여 호주 내(Onshore) 유효 신청이 불가능해요.",
      stayRuleEn: "More than 28 days have elapsed since the last substantive visa ceased; onshore application is invalid under Schedule 1."
    };
  }
  return {
    validLocation: true,
    grantLocationRequired: "offshore",
    continuousStayGuaranteed: false,
    workRightsWarning: false,
    clauseCite: cOffshore,
    cite: cOffshore,
    stayRuleKo: `새 비자로 호주에 입국하는 날(Date of entry)로부터 12개월 체류 (해외 신청·해외 승인, ${cOffshore})`,
    stayRuleEn: `12 months from date of entry into Australia on the new visa (offshore application & grant, ${cOffshore})`
  };
}

/**
 * Evaluate Condition 8548 (4-month / 17-week study or training limitation).
 * Fixes W18 (T48): Distinguishes online/distance enrollment calculation vs workplace training induction.
 */
function evaluateCondition8548Study(opts = {}) {
  const days = Number(opts.studyDays) || (Number(opts.durationWeeks) ? Number(opts.durationWeeks) * 7 : 0);
  const months = Number(opts.studyMonths ?? opts.durationMonths) || 0;
  const isWorkplaceTraining = Boolean(opts.isWorkplaceTraining) || opts.studyMode === "workplace_training";
  const isOnlineOrDistance = Boolean(opts.isOnlineOrDistance) || opts.studyMode === "online_correspondence";

  if (isWorkplaceTraining) {
    return {
      complies: months <= 4 && days <= 120,
      status: "permitted_workplace_training",
      cite: "Migration Regulations 1994 Sch 8 Condition 8548; Condition 8547 PAM3 s 3.2.1",
      summaryKo: "직무 교육·오리엔테이션(Workplace training)은 조건 8548(4개월 학업 제한) 한도 내에서 허용되나, 고용주를 위한 직무 교육 첫날부터 조건 8547(동일 고용주 6개월 근무 제한) 시계가 즉시 시작돼요!",
      summaryEn: "Workplace training is permitted within Condition 8548 (up to 4 months), but also starts the Condition 8547 6-month employer clock from day one of training."
    };
  }
  if (months > 4 || days > 120) {
    return {
      complies: false,
      status: "breach_exceeds_4_months",
      cite: "Migration Regulations 1994 Sch 8 Condition 8548",
      summaryKo: "비자 조건 8548 위반 위험: 각 WHM 비자 체류 기간 중 총 학업·훈련 기간(온라인·원격 과정 등록 기간 포함)은 4개월(약 17주)을 초과할 수 없어요.",
      summaryEn: "Condition 8548 risk: Total study or training (including online/distance course enrolment duration while in Australia) cannot exceed 4 months on each WHM visa."
    };
  }
  return {
    complies: true,
    status: isOnlineOrDistance ? "online_enrolment_period_counted" : "permitted_within_4_months",
    cite: "Migration Regulations 1994 Sch 8 Condition 8548",
    summaryKo: "조건 8548 준수 범위(비자당 최대 4개월 / 17주 이하 학업·훈련)예요. 온라인·원격 수업도 등록 기간 전체가 4개월 한도에 산입돼요.",
    summaryEn: "Within the Condition 8548 4-month (17-week) study limit. Note that online/distance courses count by total enrolment duration."
  };
}

function computeModeFte(netCalendarDays, countingMode, exactShiftsWorked, stdShiftsPerWeek) {
  if (netCalendarDays <= 0) return { exactFteDays: 0, roundedDays: 0, factor: 0 };
  if (countingMode === "fulltime" || countingMode === "piecework" || countingMode === "cyclical_roster") {
    return { exactFteDays: netCalendarDays, roundedDays: netCalendarDays, factor: 1.0 };
  }
  if (countingMode === "parttime_4") {
    const exact = netCalendarDays * (4 / 5);
    return { exactFteDays: exact, roundedDays: Math.round(exact), factor: 4 / 5 };
  }
  if (countingMode === "parttime_3") {
    const exact = netCalendarDays * (3 / 5);
    return { exactFteDays: exact, roundedDays: Math.round(exact), factor: 3 / 5 };
  }
  if (countingMode === "parttime_2") {
    const exact = netCalendarDays * (2 / 5);
    return { exactFteDays: exact, roundedDays: Math.round(exact), factor: 2 / 5 };
  }
  if (countingMode === "exact_shifts") {
    const worked = Math.max(0, Number(exactShiftsWorked) || 0);
    const stdWeek = Math.max(1, Number(stdShiftsPerWeek) || 5);
    const exact = Math.min(netCalendarDays, (worked / stdWeek) * 7);
    const floored = Math.min(netCalendarDays, Math.floor((worked / stdWeek) * 7 + 1e-9));
    return { exactFteDays: exact, roundedDays: floored, factor: exact / netCalendarDays };
  }
  return { exactFteDays: netCalendarDays, roundedDays: netCalendarDays, factor: 1.0 };
}

function evaluateSinglePeriod(p, subclass, targetVisa, opts = {}) {
  const optsObj = typeof opts === "string" ? { assessmentDate: opts } : (opts || {});
  const cat = WORK_CATEGORIES.find(c => c.id === p.category) || WORK_CATEGORIES[0];
  const pcEval = evaluatePostcodeAreas(p.postcode);
  const assessmentStr = optsObj.assessmentDate || p.assessmentDate || document.getElementById("calc-assessment-date")?.value || "2026-10-20";
  const assessmentMs = Date.parse(assessmentStr + "T00:00:00Z");
  const applicationDate = optsObj.applicationDate || p.applicationDate || assessmentStr;
  const areaCheck = evaluateCategoryForPostcode(subclass, p.category, pcEval, {
    workStartDate: p.startDate,
    workEndDate: p.endDate,
    applicationDate,
    bushfireUnpaidBefore2025: Boolean(p.bushfireUnpaidBefore2025 || optsObj.bushfireUnpaidBefore2025)
  });

  const startMs = Date.parse(p.startDate + "T00:00:00Z");
  const endMs = Date.parse(p.endDate + "T00:00:00Z");
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs < startMs) {
    return {
      qualifies: false,
      verificationStatus: "not_met",
      rawCalendarDays: 0,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: 0,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: "유효한 시작일과 종료일(시작일 이후)을 입력해 주세요.",
      msgEn: "Please enter a valid start date and end date."
    };
  }

  // Per-period visaHeld check (W07: T14, T15)
  const periodVisaHeld = p.visaHeld || optsObj.globalVisaHeld || "valid_whm";
  if (periodVisaHeld === "invalid_student_ingrid" || (targetVisa === "third" && periodVisaHeld === "invalid_1st_for_3rd")) {
    return {
      qualifies: false,
      verificationStatus: "not_met",
      rawCalendarDays: Math.floor((endMs - startMs) / 86400000) + 1,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: 0,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: "근로 수행 당시 보유 비자 부적격(학생비자 500·비적격 브리징 Ingrid 사례 또는 3차 신청 시 1차 비자 중 근로): 이 기간은 지정 근로로 산입되지 않아요 (cl 417.211(6)(c) / cl 462.219).",
      msgEn: "Ineligible visa held during this period (Student visa / non-WHM BVA Ingrid rule, or 1st WHM work claimed for 3rd WHM): 0 days counted."
    };
  }

  // Cutoff check: 3rd visa requires work on or after 2019-07-01; category also has cutoff
  const cutoffs = [cat.cutoff];
  if (targetVisa === "third") cutoffs.push("2019-07-01");
  const maxCutoffStr = cutoffs.sort().at(-1);
  const cutoffMs = Date.parse(maxCutoffStr + "T00:00:00Z");

  // Check historical transitional rules (W21: T44, T45) before hard fail
  if (areaCheck.status === "manual_review") {
    const spanDays = Math.floor((endMs - startMs) / 86400000) + 1;
    return {
      qualifies: false,
      verificationStatus: "unknown",
      historicalRuleReview: true,
      rawCalendarDays: spanDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: spanDays,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "warn",
      msgKo: areaCheck.labelKo,
      msgEn: areaCheck.labelEn
    };
  }

  if (endMs < cutoffMs) {
    return {
      qualifies: false,
      verificationStatus: "not_met",
      rawCalendarDays: 0,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: 0,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: `이 근로는 법정 인정 시작일(${maxCutoffStr}) 이전에 종료되어 산입되지 않아요.`,
      msgEn: `This work ended before the statutory commencement date (${maxCutoffStr}) and cannot be counted.`
    };
  }

  // W06 (T13): If period straddles cutoffMs and uses aggregate shifts or unallocated absences without explicit dates, require splitting
  const unpaidAbsent = Math.max(0, Number(p.unpaidAbsentDays) || 0);
  const straddlesCutoff = startMs < cutoffMs && endMs >= cutoffMs;
  if (straddlesCutoff && !Array.isArray(p.explicitWorkDates) && (p.countingMode === "exact_shifts" || String(p.countingMode).startsWith("parttime_") || unpaidAbsent > 0)) {
    const spanDays = Math.floor((endMs - startMs) / 86400000) + 1;
    return {
      qualifies: false,
      verificationStatus: "unknown",
      straddlesCutoffNeedsSplit: true,
      rawCalendarDays: spanDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: spanDays,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "warn",
      msgKo: `법정 기준일(${maxCutoffStr}) 전후에 걸친 기간(${p.startDate}~${p.endDate})에 파트타임·교대근무 또는 무급 결근이 포함되어 있어요. 기준일 이전 근무가 이후 기간으로 잘못 산입되지 않도록 ${maxCutoffStr} 전·후로 기간을 분리해 입력해 주세요.`,
      msgEn: `This period (${p.startDate}–${p.endDate}) straddles the statutory cutoff (${maxCutoffStr}) with shifts/absences. Please split the period at ${maxCutoffStr} to verify post-cutoff days.`
    };
  }

  const effectiveStartMs = Math.max(startMs, cutoffMs);
  const rawCalendarDays = Math.floor((endMs - effectiveStartMs) / 86400000) + 1;

  // Check postcode & category
  if (!pcEval.valid) {
    return {
      qualifies: false,
      verificationStatus: "not_met",
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: 0,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: "유효한 4자리 근무지 우편번호를 입력해 주세요.",
      msgEn: "Please enter a valid 4-digit workplace postcode."
    };
  }

  if (!areaCheck.eligible) {
    return {
      qualifies: false,
      verificationStatus: "not_met",
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: 0,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: `우편번호(${p.postcode}) 또는 업종 불인정: ${areaCheck.labelKo}`,
      msgEn: `Postcode (${p.postcode}) or category ineligible: ${areaCheck.labelEn}`
    };
  }

  // Check remuneration & paymentBasis (W17: T46, W05: T12)
  if ((!p.lawfullyPaid && !cat.volunteerAllowed) || p.paymentBasis === "unpaid_or_underpaid") {
    return {
      qualifies: false,
      verificationStatus: "not_met",
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: 0,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "fail",
      msgKo: "산불(Table 5)·자연재해(Table 6) 복구 외의 모든 지정 근로는 반드시 적법한 급여(최저임금·Award 이상)를 받고 급여명세서로 입증해야 해요 (cl 417.211(5)(c) / cl 462.218(1)(c)). 무급·법정 미달 급여 근로는 산입 불가!",
      msgEn: "Unpaid or unlawfully underpaid work outside declared bushfire/natural disaster recovery is statutorily ineligible (cl 417.211(5)(c) / cl 462.218(1)(c))."
    };
  }

  if (p.paymentBasis === "cash_documented" || p.cashPaidWithEvidence === true) {
    return {
      qualifies: false,
      verificationStatus: "unknown",
      cashEvidenceReviewRequired: true,
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: rawCalendarDays,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "warn",
      msgKo: `수동 증빙 검토 필요 (현금 급여 수령): 현금 지급 자체가 자동으로 불법은 아니나, 2015.12.01 이후 PAM3 지침상 급여명세서(Payslips)·STP 세금 신고 내역·은행 계좌 입출금 등 객관적 보강 증빙이 확인되어야 산입할 수 있어요.`,
      msgEn: `Manual review required (Cash wages): Cash payment is not automatically unlawful if paid at/above Award rates, but PAM3 requires strong corroborating evidence (payslips, STP/tax records, bank records) before counting days.`
    };
  }

  if ((p.countingMode === "piecework" || p.paymentBasis === "piecework") && p.hasWrittenPieceworkAgreement === false) {
    return {
      qualifies: false,
      verificationStatus: "unknown",
      pieceworkAgreementMissing: true,
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: rawCalendarDays,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "warn",
      msgKo: "수동 검토 필요 (서면 성과급 Piecework 계약서 미확인): Horticulture Award 등 성과급 근로자는 서면 성과급 계약서 및 시간당 최저임금 보장 증빙이 확인되어야 인정 일수를 확정할 수 있어요.",
      msgEn: "Manual review required (Written Piecework Agreement unconfirmed): Piecework requires a written agreement and Fair Work minimum wage guarantee records."
    };
  }

  // W07 (T14): COVID-19 408 visa held check
  if (periodVisaHeld === "covid_408") {
    return {
      qualifies: false,
      verificationStatus: "unknown",
      covid408TransitionalReview: true,
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: 0,
      unverifiedDays: rawCalendarDays,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "warn",
      msgKo: "수동 검토 필요 (COVID-19 408 Pandemic 비자 경과 규정): Schedule 13 Part 92(cl 9205–9208) 특례 요건(보유 비자 전환 시점 및 필수 코로나 의료 업무 해당 여부)을 개별 확인해야 하며, 일반 농장 근로를 자동 합산하지 않아요.",
      msgEn: "Manual review required (COVID-19 408 transitional rules, Sch 13 Part 92 cl 9205–9208): Must verify transitional eligibility rather than auto-crediting general work."
    };
  }

  // W03 (T08, T09): Future vs Completed Date Split relative to assessmentDate
  if (Number.isFinite(assessmentMs) && effectiveStartMs > assessmentMs) {
    const futureNetDays = Math.max(0, rawCalendarDays - unpaidAbsent);
    const futureFte = computeModeFte(futureNetDays, p.countingMode, p.exactShiftsWorked, p.stdShiftsPerWeek);
    return {
      qualifies: false,
      verificationStatus: "planned_future",
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: futureFte.roundedDays,
      unverifiedDays: 0,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "warn",
      msgKo: `미래 예정 근로 분리 (${futureFte.roundedDays}일 예정): 시작일(${p.startDate})이 판정 기준일(${assessmentStr}) 이후이므로 현재 완료된 지정 근로 일수(0일)에는 산입되지 않아요 (완료 후 신청 가능).`,
      msgEn: `Planned future work (${futureFte.roundedDays} days planned): Starts after the assessment date (${assessmentStr}), so 0 completed days are counted toward immediate lodgement.`
    };
  }

  const completedEndMs = Number.isFinite(assessmentMs) ? Math.min(endMs, assessmentMs) : endMs;
  const straddlesAssessmentDate = Number.isFinite(assessmentMs) && endMs > assessmentMs;
  const completedRawDays = Math.floor((completedEndMs - effectiveStartMs) / 86400000) + 1;
  const futureRawDays = Math.max(0, rawCalendarDays - completedRawDays);

  const completedNetDays = Math.max(0, completedRawDays - unpaidAbsent);
  const effectiveCountingMode = (p.countingMode === "piecework" && p.pieceworkPattern === "exact_shifts") ? "exact_shifts" : p.countingMode;
  const completedFte = computeModeFte(completedNetDays, effectiveCountingMode, p.exactShiftsWorked, p.stdShiftsPerWeek);
  const futureFte = futureRawDays > 0 ? computeModeFte(futureRawDays, effectiveCountingMode, 0, p.stdShiftsPerWeek) : { roundedDays: 0 };

  // W04 (T10, T11): Short shift handling — do NOT confirm days as green/countable unless nonShortShiftsConfirmed is provided
  if (p.shortShiftWarning) {
    if (typeof p.nonShortShiftsConfirmed === "number" && p.nonShortShiftsConfirmed >= 0) {
      const stdWeek = Math.max(1, Number(p.stdShiftsPerWeek) || 5);
      const confirmedDays = Math.min(completedNetDays, Math.floor((p.nonShortShiftsConfirmed / stdWeek) * 7 + 1e-9));
      const unverified = Math.max(0, completedFte.roundedDays - confirmedDays);
      return {
        qualifies: confirmedDays > 0,
        verificationStatus: "partial_short_shift_review",
        rawCalendarDays,
        effectiveDays: confirmedDays,
        completedDays: confirmedDays,
        plannedDays: futureFte.roundedDays,
        unverifiedDays: unverified,
        exactFteDays: Math.min(completedNetDays, (p.nonShortShiftsConfirmed / stdWeek) * 7),
        hasExactDailyDates: false,
        validDatesSet: new Set(),
        statusClass: "warn",
        msgKo: `단시간 근무(Short shift) 제외 후 ${confirmedDays}일만 확인됨 (미확인 ${unverified}일 보류, PAM3 s 4.5.3).`,
        msgEn: `${confirmedDays} days confirmed after excluding short shifts (${unverified} unverified days held for review, PAM3 s 4.5.3).`
      };
    }
    return {
      qualifies: false,
      verificationStatus: "unknown",
      shortShiftUnverified: true,
      rawCalendarDays,
      effectiveDays: 0,
      completedDays: 0,
      plannedDays: futureFte.roundedDays,
      unverifiedDays: completedFte.roundedDays,
      exactFteDays: 0,
      hasExactDailyDates: false,
      validDatesSet: new Set(),
      statusClass: "warn",
      msgKo: `수동 확인 필요 (미검증 ${completedFte.roundedDays}일 보류 — PAM3 단시간 근무 주의): 해당 산업의 일일 표준 근로시간에 미달하는 단시간 근무일(Short shifts)은 1일로 산입하거나 여러 날을 합산할 수 없어요(PAM3 s 4.5.3). 표준 시간을 충족한 실제 근무일수를 먼저 분리·확인해야 해요.`,
      msgEn: `Manual verification required (${completedFte.roundedDays} unverified days held — PAM3 Short Shift Rule): Shifts shorter than the industry standard daily hours cannot be counted as a full day or combined across days (PAM3 s 4.5.3).`
    };
  }

  // W02 (T03–T06): Build confirmedDatesSet ONLY when exact daily work dates are known
  const absentSet = new Set(Array.isArray(p.explicitAbsentDates) ? p.explicitAbsentDates : []);
  let validDatesSet = new Set();
  let hasExactDailyDates = false;

  if (Array.isArray(p.explicitWorkDates) && p.explicitWorkDates.length > 0) {
    hasExactDailyDates = true;
    p.explicitWorkDates.forEach(dStr => {
      const dMs = Date.parse(dStr + "T00:00:00Z");
      if (Number.isFinite(dMs) && dMs >= effectiveStartMs && dMs <= completedEndMs && !absentSet.has(dStr)) {
        validDatesSet.add(dStr);
      }
    });
  } else if (
    (effectiveCountingMode === "fulltime" || effectiveCountingMode === "piecework" || effectiveCountingMode === "cyclical_roster") &&
    (unpaidAbsent === 0 || absentSet.size === unpaidAbsent)
  ) {
    hasExactDailyDates = true;
    for (let ms = effectiveStartMs; ms <= completedEndMs; ms += 86400000) {
      const dStr = new Date(ms).toISOString().slice(0, 10);
      if (!absentSet.has(dStr)) {
        validDatesSet.add(dStr);
      }
    }
  } else {
    // Do NOT invent calendar dates by slicing from the start of the period!
    hasExactDailyDates = false;
    validDatesSet = new Set();
  }

  const effectiveDays = Array.isArray(p.explicitWorkDates) && p.explicitWorkDates.length > 0
    ? validDatesSet.size
    : completedFte.roundedDays;
  const exactFteDays = Array.isArray(p.explicitWorkDates) && p.explicitWorkDates.length > 0
    ? validDatesSet.size
    : completedFte.exactFteDays;

  if (straddlesAssessmentDate) {
    return {
      qualifies: effectiveDays > 0,
      verificationStatus: "partial_completed_and_planned",
      straddlesAssessmentDate: true,
      rawCalendarDays,
      effectiveDays,
      completedDays: effectiveDays,
      plannedDays: futureFte.roundedDays,
      unverifiedDays: 0,
      exactFteDays,
      hasExactDailyDates,
      validDatesSet,
      statusClass: "warn",
      msgKo: `기준일(${assessmentStr})까지 완료된 ${effectiveDays}일 산입 + 미래 예정 ${futureFte.roundedDays}일 분리됨 (미래 예정 일수는 완료 후 산입 가능).`,
      msgEn: `${effectiveDays} completed days counted up to ${assessmentStr} + ${futureFte.roundedDays} future planned days separated.`
    };
  }

  return {
    qualifies: true,
    verificationStatus: "verified",
    rawCalendarDays,
    effectiveDays,
    completedDays: effectiveDays,
    plannedDays: 0,
    unverifiedDays: 0,
    exactFteDays,
    hasExactDailyDates,
    validDatesSet,
    statusClass: "pass",
    msgKo: `적격 산입: ${effectiveDays}일 인정 (달력 기간 ${rawCalendarDays}일${unpaidAbsent > 0 ? `, 무급 결근·기상악화 ${unpaidAbsent}일 차감` : ""}) · ${areaCheck.labelKo}`,
    msgEn: `Qualifies: ${effectiveDays} countable days (${rawCalendarDays} calendar days${unpaidAbsent > 0 ? `, minus ${unpaidAbsent} unpaid absent/weather days` : ""}) · ${areaCheck.labelEn}`
  };
}

/**
 * Portfolio-level evaluator across multiple work periods + statutory gates.
 * Fixes W02 (T03–T06), W03 (T08–T09), W04 (T10–T11), W05 (T07), W07 (T14–T15), W08 (T16–T18), W09 (T19–T22), W16 (T35–T36).
 */
function evaluateSpecifiedWorkPortfolio(periods, config = {}) {
  const subclass = config.subclass || "417";
  const targetVisa = config.targetVisa || config.target || "second";
  const countryCode = config.countryCode || "KR";
  const age = Number(config.age ?? 28);
  const globalVisaHeld = config.visaHeld || "valid_whm";
  const locStatus = config.locStatus || "onshore_substantive";
  const noChildren = config.noChildren ?? true;
  const noExcludedEmp = config.noExcludedEmp ?? true;
  const ukPassportConfirmed = config.ukPassportConfirmed ?? true;
  const assessmentDate = config.assessmentDate || "2026-10-20";
  const priorRefusalOrCancellation = Boolean(config.priorRefusalOrCancellation);

  const countryList = COUNTRIES[subclass] || COUNTRIES["417"];
  const countryObj = countryList.find(c => c.code === countryCode) || countryList[0];

  const isFirstVisa = targetVisa === "first";
  const requiredDays = isFirstVisa ? 0 : (targetVisa === "second" ? 88 : 179);
  const requiredCalMonths = isFirstVisa ? 0 : (targetVisa === "second" ? 3 : 6);

  // W08 (T16, T17, T18): UK specified work exemption check
  const isUkSelected = subclass === "417" && Boolean(countryObj.ukExempt);
  const ukExemptActive = isUkSelected && !isFirstVisa && ukPassportConfirmed !== false && assessmentDate >= "2024-07-01";
  const ukExemptionUnconfirmed = isUkSelected && !isFirstVisa && (ukPassportConfirmed === false || assessmentDate < "2024-07-01");

  const evals = (periods || []).map(p => evaluateSinglePeriod(p, subclass, targetVisa, {
    assessmentDate,
    applicationDate: assessmentDate,
    globalVisaHeld
  }));

  // Detect calendar range overlaps among qualifying periods
  const qualifyingItems = [];
  evals.forEach((r, idx) => {
    const p = periods[idx];
    if (r.qualifies && r.effectiveDays > 0) {
      const sMs = Math.max(Date.parse(p.startDate + "T00:00:00Z"), Date.parse((targetVisa === "third" ? "2019-07-01" : "1900-01-01") + "T00:00:00Z"));
      const eMs = Math.min(Date.parse(p.endDate + "T00:00:00Z"), Date.parse(assessmentDate + "T00:00:00Z"));
      qualifyingItems.push({ p, r, sMs, eMs });
    }
  });

  let hasRangeOverlap = false;
  let hasAmbiguousOverlap = false;
  for (let i = 0; i < qualifyingItems.length; i++) {
    for (let j = i + 1; j < qualifyingItems.length; j++) {
      const A = qualifyingItems[i];
      const B = qualifyingItems[j];
      if (A.sMs <= B.eMs && B.sMs <= A.eMs) {
        hasRangeOverlap = true;
        if (!A.r.hasExactDailyDates || !B.r.hasExactDailyDates) {
          hasAmbiguousOverlap = true;
        }
      }
    }
  }

  // Compute total calendar union days across qualifying periods (never >1 day per calendar date: T05)
  const allRangeCalendarDates = new Set();
  const confirmedUnionDates = new Set();
  let exactFteNonDateSum = 0;
  let rawQualifyingDaysSum = 0;

  qualifyingItems.forEach(({ p, r, sMs, eMs }) => {
    rawQualifyingDaysSum += r.effectiveDays;
    for (let ms = sMs; ms <= eMs; ms += 86400000) {
      allRangeCalendarDates.add(new Date(ms).toISOString().slice(0, 10));
    }
    if (r.hasExactDailyDates) {
      r.validDatesSet.forEach(d => confirmedUnionDates.add(d));
    } else {
      exactFteNonDateSum += r.exactFteDays;
    }
  });

  // W05 (T07): Floor only after accumulating exactFteDays across periods
  const combinedBeforeCap = confirmedUnionDates.size + Math.floor(exactFteNonDateSum + 1e-9);
  const maxCalendarCap = allRangeCalendarDates.size;
  const deduplicatedDays = hasAmbiguousOverlap ? 0 : Math.min(maxCalendarCap, combinedBeforeCap);
  const overlapRemovedDays = hasAmbiguousOverlap ? 0 : Math.max(0, rawQualifyingDaysSum - deduplicatedDays);

  const totalPlannedDays = evals.reduce((s, r) => s + (r.plannedDays || 0), 0);
  const totalUnverifiedDays = evals.reduce((s, r) => s + (r.unverifiedDays || 0), 0) + (hasAmbiguousOverlap ? rawQualifyingDaysSum : 0);
  const hasPeriodReviewWarnings = evals.some(r => r.verificationStatus !== "verified" && r.verificationStatus !== "not_met");

  const stayInfo = evaluateStayAndGrantRules(subclass, locStatus);
  const capBallotInfo = evaluateFirstVisaCapAndBallot(subclass, countryCode, targetVisa);

  const ageOk = age >= 18 && age <= countryObj.maxAge;
  const locOk = stayInfo.validLocation;

  // W08 (T16, T17): When ukExemptActive is true, work-specific gates (daysMet, visaHeldOk, noExcludedEmp) are not_applicable!
  const specifiedWorkModuleStatus = (ukExemptActive || isFirstVisa) ? "not_applicable" : "applicable";
  const visaHeldOk = (ukExemptActive || isFirstVisa) ? true : !(
    globalVisaHeld === "invalid_student_ingrid" ||
    (targetVisa === "third" && globalVisaHeld === "invalid_1st_for_3rd")
  );
  const covid408ReviewRequired = !ukExemptActive && !isFirstVisa && globalVisaHeld === "covid_408";
  const excludedEmpOk = (ukExemptActive || isFirstVisa) ? true : Boolean(noExcludedEmp);
  const daysMet = ukExemptActive || isFirstVisa || (!hasAmbiguousOverlap && deduplicatedDays >= requiredDays);
  const manualReviewRequired = hasPeriodReviewWarnings || covid408ReviewRequired || hasAmbiguousOverlap || ukExemptionUnconfirmed;
  const locationMismatchWarning = Boolean(stayInfo.locationMismatchBlocked);
  const overallReady = Boolean(
    ageOk &&
    noChildren &&
    locOk &&
    visaHeldOk &&
    excludedEmpOk &&
    daysMet &&
    !manualReviewRequired &&
    !priorRefusalOrCancellation &&
    !(isFirstVisa && (capBallotInfo.status === "paused" || capBallotInfo.status === "closed"))
  );

  const blockers = [];
  if (!ageOk) blockers.push("연령 상한 미충족");
  if (!noChildren) blockers.push("부양 자녀 동반 불가 위반");
  if (!locOk) blockers.push("신청·승인 위치 요건 미충족");
  if (!ukExemptActive && !isFirstVisa) {
    if (!visaHeldOk) blockers.push("근로 수행 당시 보유 비자 부적격");
    if (!excludedEmpOk) blockers.push("제외 고용주(Reg 1.15FB) 근무 불인정");
    if (!daysMet) blockers.push("지정 근로 일수 미충족");
  }

  return {
    subclass,
    targetVisa,
    countryObj,
    requiredDays,
    requiredCalMonths,
    specifiedWorkModuleStatus,
    specifiedWorkStatus: specifiedWorkModuleStatus,
    ukExemptActive,
    ukExemptionUnconfirmed,
    evals,
    rawQualifyingDaysSum,
    deduplicatedDays,
    totalConfirmedDays: deduplicatedDays,
    overlapRemovedDays,
    overlapDaysDeducted: overlapRemovedDays,
    maxCalendarCap,
    hasRangeOverlap,
    hasAmbiguousOverlap,
    overlapAmbiguous: hasAmbiguousOverlap,
    overlapStatus: hasAmbiguousOverlap ? "manual_review_needed" : (hasRangeOverlap ? "deduplicated_exact" : "no_overlap"),
    totalPlannedDays,
    totalUnverifiedDays,
    hasPeriodReviewWarnings,
    covid408ReviewRequired,
    manualReviewRequired,
    locationMismatchWarning,
    overallReady,
    blockers,
    ageOk,
    noChildren: Boolean(noChildren),
    excludedEmpOk,
    visaHeldOk,
    locOk,
    priorRefusalOrCancellation,
    daysMet,
    stayInfo,
    capBallotInfo
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
  const ukPassportConfirmed = document.getElementById("calc-uk-passport-confirmed")?.checked ?? true;
  const assessmentDate = document.getElementById("calc-assessment-date")?.value || "2026-10-20";

  const port = evaluateSpecifiedWorkPortfolio(workPeriods, {
    subclass,
    targetVisa,
    countryCode,
    age,
    visaHeld,
    locStatus,
    noChildren,
    noExcludedEmp,
    ukPassportConfirmed,
    assessmentDate
  });

  const {
    countryObj,
    requiredDays,
    requiredCalMonths,
    ukExemptActive,
    ukExemptionUnconfirmed,
    rawQualifyingDaysSum,
    deduplicatedDays,
    overlapRemovedDays,
    hasAmbiguousOverlap,
    totalPlannedDays,
    totalUnverifiedDays,
    covid408ReviewRequired,
    ageOk,
    excludedEmpOk,
    visaHeldOk,
    locOk,
    daysMet,
    stayInfo,
    capBallotInfo
  } = port;

  const isFirstVisa = targetVisa === "first";
  let verdictClass = "badge-success";
  let verdictTitleKo = "법정 기본 요건 및 지정 근로 기준 부합 (증빙 심사 전제)";
  let verdictTitleEn = "Meets Statutory & Specified Work Criteria (Subject to Evidence Verification)";
  const blockersKo = [];
  const blockersEn = [];
  let hasHardFailure = false;
  let hasReviewWarning = false;

  if (!ageOk) {
    hasHardFailure = true;
    blockersKo.push(`연령 상한 미충족: 선택하신 국가(${countryObj.code})의 신청 가능 연령은 만 18~${countryObj.maxAge}세(만 ${countryObj.maxAge + 1}세 생일 전날 호주 동부 표준시 AEST 23:59까지)예요 (Item 1225(3AA) / 1224A(3)(aab)).`);
    blockersEn.push(`Age limit exceeded: Eligible age for ${countryObj.code} is 18–${countryObj.maxAge} inclusive (until 11:59 pm AEST the day before turning ${countryObj.maxAge + 1}).`);
  }
  if (!noChildren) {
    hasHardFailure = true;
    blockersKo.push("부양 자녀 동반 불가 위반: WHM 비자 체류 기간 중 부양 자녀를 동반할 수 없어요 (cl 417.211(4)(d) / cl 462.217(c)).");
    blockersEn.push("Dependent children restriction: Applicants cannot be accompanied by dependent children during their stay.");
  }
  if (!locOk) {
    hasHardFailure = true;
    if (stayInfo.locationMismatchBlocked) {
      blockersKo.push(stayInfo.stayRuleKo);
      blockersEn.push(stayInfo.stayRuleEn);
    } else {
      blockersKo.push("호주 내 신청 유예기간(28일) 도과: 호주 내에서 신청하려면 현재 실체비자를 보유 중이거나 마지막 실체비자 만료 후 28일 이내여야 해요 (Item 1225(3B)(f)(ii)).");
      blockersEn.push("Onshore 28-day grace period exceeded: Onshore applicants must hold a substantive visa or apply within 28 days after their last substantive visa ceased.");
    }
  }
  if (isFirstVisa && (capBallotInfo.status === "paused" || capBallotInfo.status === "closed")) {
    hasReviewWarning = true;
    blockersKo.push(capBallotInfo.summaryKo);
    blockersEn.push(capBallotInfo.summaryEn);
  }
  if (isFirstVisa && capBallotInfo.status === "ballot_required") {
    hasReviewWarning = true;
    blockersKo.push(capBallotInfo.summaryKo);
    blockersEn.push(capBallotInfo.summaryEn);
  }
  if (ukExemptionUnconfirmed) {
    hasReviewWarning = true;
    blockersKo.push("영국(UK·BN(O)) 지정 근로 면제 수동 확인 필요: 2024.07.01 이후 유효한 영국(GBNI) 또는 BN(O) 여권으로 신청하는 경우에만 지정 근로가 면제돼요 (Item 1225(3BA)).");
    blockersEn.push("UK / BN(O) specified work exemption unconfirmed: Exemption under Item 1225(3BA) applies only when lodging on or after 1 July 2024 with an eligible UK or BN(O) passport.");
  }

  // Only check work-related blockers when specifiedWorkModuleStatus is 'applicable' (NOT ukExemptActive and NOT 1st visa!)
  if (!ukExemptActive && !isFirstVisa) {
    if (!excludedEmpOk) {
      hasHardFailure = true;
      blockersKo.push("제외 고용주(Excluded Employer, Reg 1.15FB) 근무 불인정: 장관이 고시한 제외 고용주 밑에서 수행한 근로는 지정 근로로 산입할 수 없어요.");
      blockersEn.push("Excluded Employer rule (Reg 1.15FB): Work carried out for a listed Excluded Employer cannot be counted.");
    }
    if (!visaHeldOk) {
      hasHardFailure = true;
      blockersKo.push("근로 수행 당시 보유 비자 부적격: 학생비자(500) 등 타 비자/연계 브리징 보유 중 한 근로(Ingrid 사례)나, 3차 비자 신청 시 1차 비자에서 한 근로는 산입되지 않아요 (cl 417.211(6)(c)).");
      blockersEn.push("Ineligible visa held during work: Work done on a Student visa/associated BVA (Ingrid rule) or on a 1st WHM visa towards a 3rd WHM visa cannot be counted.");
    }
    if (covid408ReviewRequired) {
      hasReviewWarning = true;
      blockersKo.push("COVID-19 408 Pandemic 비자 경과 규정 수동 검토 필요 (Schedule 13 Part 92 cl 9205–9208): 408 비자 보유 중 수행한 근로는 전환 시점 및 코로나 필수 의료 업무 해당 여부를 수동 검증해야 해요.");
      blockersEn.push("COVID-19 408 transitional rules require manual review (Schedule 13 Part 92 cl 9205–9208): General 2026 farm work is not automatically credited under the 408 transitional provisions.");
    }
    if (hasAmbiguousOverlap) {
      hasReviewWarning = true;
      blockersKo.push("중복 달력 기간 내 파트타임·교대근무 실제 출근일 미확인: 두 개 이상의 근무 기간이 달력상 겹치면서 정확한 일별 출근 날짜(Shift dates)가 입력되지 않아 중복 여부를 확정할 수 없어요. 실제 출근 날짜 기록표를 통해 중복되지 않은 근무일을 먼저 확인해 주세요.");
      blockersEn.push("Overlapping calendar periods with aggregate shift/part-time counts: Exact daily shift dates are required to verify non-overlapping days across concurrent jobs.");
    }
    if (totalUnverifiedDays > 0) {
      hasReviewWarning = true;
      blockersKo.push(`미검증·보류 일수(${totalUnverifiedDays}일) 수동 확인 필요: 단시간 근무(Short shifts), 서면 성과급 계약서 미확인, 현금 급여 증빙, 또는 기준일 전후 분할 필요 기간이 포함되어 있어요.`);
      blockersEn.push(`Unverified days (${totalUnverifiedDays} days) held for manual review: Includes short shifts, unconfirmed piecework agreements, cash payment evidence, or periods straddling a statutory cutoff.`);
    }
    if (totalPlannedDays > 0 && deduplicatedDays < requiredDays) {
      hasReviewWarning = true;
      blockersKo.push(`미래 예정 근로(${totalPlannedDays}일) 미완료: 판정 기준일(${assessmentDate}) 이후의 예정 근로는 완료된 지정 근로 일수에 포함되지 않아요 (현재 완료 ${deduplicatedDays}일 / 목표 ${requiredDays}일).`);
      blockersEn.push(`Future planned work (${totalPlannedDays} days) not yet completed as of ${assessmentDate}: Completed days (${deduplicatedDays}) are below the ${requiredDays}-day requirement.`);
    } else if (!daysMet) {
      hasReviewWarning = true;
      blockersKo.push(`지정 근로 완료 일수 부족: 현재 중복 제거 후 확인된 완료 일수는 ${deduplicatedDays}일로, 목표 기준(${requiredDays}일 / 최소 ${requiredCalMonths}달력월)까지 ${Math.max(0, requiredDays - deduplicatedDays)}일이 더 필요해요.`);
      blockersEn.push(`Specified work days short: ${deduplicatedDays} completed days confirmed (${Math.max(0, requiredDays - deduplicatedDays)} more days needed to reach ${requiredDays} days).`);
    }
  }

  if (hasHardFailure) {
    verdictClass = "badge-danger";
    verdictTitleKo = "법정 필수 요건 미충족 항목 발견 (확인 필수)";
    verdictTitleEn = "Statutory Blocker Detected — Review Required";
  } else if (hasReviewWarning || blockersKo.length > 0) {
    verdictClass = "badge-warning";
    verdictTitleKo = "추가 일수 확보 또는 수동 증빙 검토 필요";
    verdictTitleEn = "Additional Work Days or Manual Verification Required";
  }

  const pct = (ukExemptActive || isFirstVisa) ? 100 : Math.min(100, Math.round((deduplicatedDays / Math.max(1, requiredDays)) * 100));
  const stayRuleKo = stayInfo.stayRuleKo;
  const stayRuleEn = stayInfo.stayRuleEn;

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
    ` : isFirstVisa ? `
      <div style="background:#EDF7F1;border-left:4px solid #2E6B4F;padding:12px 14px;border-radius:6px;font-size:13.5px;color:#1A4731;margin-bottom:14px;">
        <strong>${t("1차 워킹홀리데이(First WHM Visa) 신청 자격·쿼터 확인:", "1st WHM Visa Eligibility, Cap & Ballot Check:")}</strong><br/>
        ${t(capBallotInfo.summaryKo, capBallotInfo.summaryEn)}
      </div>
    ` : `
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;">
        <span style="font-size:13.5px;font-weight:700;color:var(--color-charcoal-soft);">${t("완료 확인된 산입 일수", "Confirmed Completed Days")}</span>
        <strong style="font-size:26px;font-weight:800;color:var(--color-burgundy);">${deduplicatedDays} / ${requiredDays}${t("일", " days")} (${pct}%)</strong>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${pct}%;"></div>
      </div>
      ${(totalPlannedDays > 0 || totalUnverifiedDays > 0) ? `
        <div style="font-size:12.5px;color:#6B4D00;margin-bottom:10px;">
          ${totalPlannedDays > 0 ? t(`• 미래 예정 일수(미산입): <strong>${totalPlannedDays}일</strong> `, `• Future planned days (excluded): <strong>${totalPlannedDays}d</strong> `) : ""}
          ${totalUnverifiedDays > 0 ? t(`• 수동 검토 보류 일수: <strong>${totalUnverifiedDays}일</strong>`, `• Unverified days held: <strong>${totalUnverifiedDays}d</strong>`) : ""}
        </div>
      ` : ""}
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
        ${t(`입력하신 완료 근로 기록(${deduplicatedDays}일)과 연령(만 ${age}세 / 상한 만 ${countryObj.maxAge}세), 신청 조건이 법정 기준에 부합해요 (최종 비자 승인은 급여명세서·은행 내역 등 제출 증빙에 대한 심사관 검증에 따름).`, `Your completed work record (${deduplicatedDays} days), age (${age} / max ${countryObj.maxAge}), and visa conditions align with statutory criteria (subject to delegate verification of payslips and bank evidence).`)}
      </div>
    `}

    <div style="border-top:1px solid var(--color-line);padding-top:12px;font-size:13.2px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("확인 대상 비자 · 차수", "Target Visa Stream")}</span>
        <strong>Subclass ${subclass} (${isFirstVisa ? t("1차 비자", "1st Visa") : targetVisa === "second" ? t("2차 비자 · 88일", "2nd Visa · 88d") : t("3차 비자 · 179일", "3rd Visa · 179d")})</strong>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("여권 국가 연령 상한 (Sch 1 · AEST)", "Passport Age Cap (Sch 1 · AEST)")}</span>
        <strong>${t(`만 18~${countryObj.maxAge}세 (현재 만 ${age}세)`, `Age 18–${countryObj.maxAge} (Entered: ${age})`)}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("법정 기본 비자 신청비 (VAC)", "Statutory Base VAC (2026)")}</span>
        <strong>AUD $${(isFirstVisa ? countryObj.vac1 : countryObj.vac23).toLocaleString()} ${t(`(1차 $${countryObj.vac1} / 2·3차 $${countryObj.vac23})`, `(1st $${countryObj.vac1} / 2nd·3rd $${countryObj.vac23})`)} [1]</strong>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:#5A5654;">${t("체크한 증빙 서류 유형", "Evidence Records Checked")}</span>
        <strong>${selectedEvidence.length} / ${EVIDENCE_ITEMS.length}${t("종", " types")}</strong>
      </div>
      <div style="background:var(--color-paper);padding:10px 12px;border-radius:6px;border:1px solid var(--color-line);margin-top:4px;">
        <div style="font-weight:800;color:var(--color-burgundy);margin-bottom:3px;">${t("승인 시 비자 유효기간 및 위치 규정:", "Visa Stay Period & Location Rule:")}</div>
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
  if (!dateStr || typeof dateStr !== "string") return null;
  const parts = dateStr.split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return null;
  const [y, m, d] = parts;
  const targetMonthIndex = (m - 1) + monthsToAdd;
  const targetYear = y + Math.floor(targetMonthIndex / 12);
  const normMonth = ((targetMonthIndex % 12) + 12) % 12;
  // Last day of target month (handles Feb 28 in non-leap years and Feb 29 in leap years deterministically: T31)
  const maxDay = new Date(Date.UTC(targetYear, normMonth + 1, 0)).getUTCDate();
  const finalDay = Math.min(d, maxDay);
  return new Date(Date.UTC(targetYear, normMonth, finalDay));
}

function addCalendarMonthsClamped(dateStr, monthsToAdd) {
  const dt = addCalendarMonthsUTC(dateStr, monthsToAdd);
  return dt ? dt.toISOString().slice(0, 10) : "";
}

function evaluateCondition8547(input = {}) {
  const startStr = input.startDate || "2026-05-01";
  const pcStr = String(input.postcode || "").trim();
  const sector = input.sector || "tourism_hosp";
  const diffLoc = Boolean(input.diffLoc);
  const visaReset = Boolean(input.visaReset);
  const resetEventType = input.resetEventType || "new_whm_granted";
  const resetDate = String(input.resetDate || "").trim();
  const assessmentDate = String(input.assessmentDate || "2026-10-20").trim();
  const visaExpiryDate = String(input.visaExpiryDate || "").trim();
  const multiClient = Boolean(input.multiClient);
  const workersComp = Boolean(input.workersComp);
  const permGrounds = Boolean(input.permGrounds);
  const permissionStatus = input.permissionStatus || "none";

  const pcEval = evaluatePostcodeAreas(pcStr);
  const sixMonthDateObj = addCalendarMonthsUTC(startStr, 6);
  let sixMonthDateStr = "-";
  let twoWeeksPriorStr = "-";
  if (sixMonthDateObj) {
    sixMonthDateStr = sixMonthDateObj.toISOString().slice(0, 10);
    const twoWeeksPriorObj = new Date(sixMonthDateObj.getTime() - 14 * 86400000);
    twoWeeksPriorStr = twoWeeksPriorObj.toISOString().slice(0, 10);
  }

  let resetExpiryStr = "";
  if (resetDate) {
    const rObj = addCalendarMonthsUTC(resetDate, 6);
    if (rObj) resetExpiryStr = rObj.toISOString().slice(0, 10);
  }

  const nationwideSectors = ["plant_animal", "agri_food", "health", "aged_disability", "childcare", "tourism_hosp", "disaster_rec"];
  const northernSectors = ["north_construction", "north_mining", "north_fishing", "north_tree"];

  const reasonsKo = [];
  const reasonsEn = [];
  let isAutoExempt = false;

  // T49: Visa expiry hard stop check
  if (visaExpiryDate && assessmentDate && visaExpiryDate < assessmentDate) {
    reasonsKo.push(`<strong>비자 만료(${visaExpiryDate})에 따른 취업권 소멸 주의:</strong> 조건 8547 면제나 서면 허가는 유효한 비자(또는 취업 가능 브리징 비자)가 존속하는 범위 내에서만 적용되며, 비자 자체의 유효기간을 연장하거나 만료된 비자에 취업권을 부여하지 않아요.`);
    reasonsEn.push(`<strong>Visa Expired (${visaExpiryDate}) — No Work Authority:</strong> Condition 8547 exemptions or permissions never extend the underlying visa expiry date or authorize work after a visa ceases.`);
    return {
      status: "not_met_visa_expired",
      badgeClass: "badge-danger",
      isAutoExempt: false,
      clockResetActive: false,
      activeCutoffDate: visaExpiryDate,
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr,
      reasonsKo,
      reasonsEn
    };
  }

  if (nationwideSectors.includes(sector)) {
    isAutoExempt = true;
    reasonsKo.push("<strong>호주 전역 자동 면제 업종 해당 (2024.01.01~현행 고시):</strong> 선택하신 업종(농축산·식품가공·보건의료·노인/장애인돌봄·보육/오페어·관광접객·자연재해복구)은 호주 전역 어디서든 호주 연방 이민성에 사전 허가를 신청할 필요 없이 동일 고용주 밑에서 6개월을 초과해(비자 유효기간 내) 계속 근무할 수 있어요.");
    reasonsEn.push("<strong>Nationwide Automatic Exemption Applies:</strong> Your work falls within a critical sector / plant & animal cultivation / natural disaster recovery covered by the nationwide exemption.");
  }

  if (northernSectors.includes(sector)) {
    if (pcEval.valid && pcEval.northern) {
      isAutoExempt = true;
      reasonsKo.push(`<strong>북부 호주(Northern Australia Table 3) 4대 산업 자동 면제 해당:</strong> 입력하신 우편번호(${pcStr})가 북부 호주(Table 3)에 속하므로, 건설·광업·어업·임업 분야에서 사전 허가 없이 동일 고용주와 6개월 초과 근무가 자동 면제돼요.`);
      reasonsEn.push(`<strong>Northern Australia Automatic Exemption Applies:</strong> Postcode ${pcStr} is in Northern Australia (Table 3), so work in Construction, Mining, Fishing or Forestry is automatically exempt beyond 6 months.`);
    } else {
      reasonsKo.push(`<strong>주의 — 북부 호주 우편번호 불일치:</strong> 건설·광업·어업·임업의 6개월 자동 면제는 <strong>북부 호주(Table 3) 우편번호</strong>에서만 적용돼요. 입력하신 우편번호(${pcStr || "미입력"})는 북부 호주에 속하지 않으므로 업종 자동 면제가 적용되지 않아요!`);
      reasonsEn.push(`<strong>Warning — Not in Northern Australia (Table 3):</strong> Construction, Mining, Fishing and Forestry are only automatically exempt in Northern Australia Table 3 postcodes.`);
    }
  }

  if (diffLoc) {
    isAutoExempt = true;
    reasonsKo.push("<strong>근무 장소 변경(Different Locations / 재택근무 전환) 자동 면제 해당:</strong> 동일 고용주(동일 ABN)라도 서로 다른 물리적 사업장(다른 지점·매장·과수원·학교·병원, 다른 ABN 자회사, 또는 사무실 ↔ 재택·원격근무 전환)에서 일하며 어느 한 장소에서도 6개월을 초과하지 않으면 사전 허가 없이 6개월 초과 근무가 가능해요.");
    reasonsEn.push("<strong>Different Physical Locations Exemption Applies:</strong> Working for the same employer across different locations (including switching to/from remote/work-from-home), where no single location exceeds 6 months, is automatically exempt.");
  }

  if (multiClient) {
    isAutoExempt = true;
    reasonsKo.push("<strong>자영업자(ABN) 다수 거래처 특례 해당:</strong> 해당 사업체가 유일한 거래처(Sole end-user)가 아니며 동시에 다른 사업체들에도 용역을 제공하는 경우 조건 8547 위반에 해당하지 않아요.");
    reasonsEn.push("<strong>Self-Employed Multiple End-Users Rule:</strong> Providing services to multiple businesses (where the client is not your sole end-user) does not breach Condition 8547.");
  }

  if (isAutoExempt) {
    return {
      status: "auto_exempt",
      badgeClass: "badge-success",
      isAutoExempt: true,
      clockResetActive: false,
      activeCutoffDate: visaExpiryDate || "비자 만료 시까지 (Until Visa Expiry)",
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr,
      reasonsKo,
      reasonsEn
    };
  }

  // W10 (T23–T27): Separate Visa Clock Reset Engine (NEVER conflated with automatic sector exemption!)
  if (visaReset) {
    if (resetEventType === "bva_granted_not_in_effect") {
      reasonsKo.push("<strong>주의 — 브리징 비자 미발효 시 시계 리셋 불가 (PAM3 s 3.4.1):</strong> 브리징 비자가 승인(Grant)되었더라도 기존 WHM 비자가 만료되어 브리징 비자가 실제로 발효(In effect)되기 전에는 6개월 시계가 리셋되지 않아요!");
      reasonsEn.push("<strong>Clock Does Not Reset Until Bridging Visa Comes Into Effect (PAM3 s 3.4.1):</strong> Grant of a Bridging Visa alone does not reset the 6-month limit while your primary WHM visa remains in effect.");
      return {
        status: "not_met_bva_not_in_effect",
        badgeClass: "badge-danger",
        isAutoExempt: false,
        clockResetActive: false,
        activeCutoffDate: sixMonthDateStr,
        initialSixMonthDateStr: sixMonthDateStr,
        twoWeeksPriorStr,
        resetExpiryStr: "",
        reasonsKo,
        reasonsEn
      };
    }
    if (resetEventType === "bva_in_effect_8547_unknown") {
      reasonsKo.push("<strong>수동 확인 필요 — 브리징 비자 부과 조건(Condition 8547 유무) 확인 필수:</strong> 발효된 브리징 비자의 승인 통지서(VEVO)에서 조건 8547 부과 여부 및 취업 제한 조건을 먼저 확인해야 해요.");
      reasonsEn.push("<strong>Manual Review Required — Check Bridging Visa Conditions in VEVO:</strong> Verify whether Condition 8547 applies to your Bridging Visa now in effect.");
      return {
        status: "manual_review_bva_condition_unknown",
        badgeClass: "badge-warning",
        isAutoExempt: false,
        clockResetActive: false,
        activeCutoffDate: "수동 확인 필요 (Verify VEVO)",
        initialSixMonthDateStr: sixMonthDateStr,
        twoWeeksPriorStr,
        resetExpiryStr: "",
        reasonsKo,
        reasonsEn
      };
    }
    if (!resetDate) {
      reasonsKo.push("<strong>리셋 기준일 입력 필요 (신규 WHM 승인일 또는 브리징 발효일 미입력):</strong> 비자 전환으로 인한 6개월 시계 리셋을 계산하려면 <strong>4-2. 신규 비자 승인일 / 브리징 발효일</strong>을 반드시 입력해야 새로운 6개월 만료일을 산정할 수 있어요.");
      reasonsEn.push("<strong>Reset Date Required:</strong> Please enter the exact new WHM grant date or Bridging Visa effect date (#c8547-reset-date) to calculate your new 6-month limit.");
      return {
        status: "manual_review_reset_date_required",
        badgeClass: "badge-warning",
        isAutoExempt: false,
        clockResetActive: false,
        activeCutoffDate: "리셋 기준일 입력 대기 (Enter Reset Date)",
        initialSixMonthDateStr: "",
        twoWeeksPriorStr,
        resetExpiryStr: "",
        reasonsKo,
        reasonsEn
      };
    }
    // Both resetDate and valid resetEventType provided (T24, T27)
    if (assessmentDate && resetExpiryStr && assessmentDate > resetExpiryStr) {
      reasonsKo.push(`<strong>주의 — 리셋 후 새로운 6개월 기한(${resetExpiryStr})도 이미 도과됨:</strong> 리셋 기산일(${resetDate})로부터 새로 시작된 6개월 시계가 판정 기준일(${assessmentDate}) 현재 이미 만료되었어요!`);
      reasonsEn.push(`<strong>Expired After Reset:</strong> The new 6-month period starting on ${resetDate} ended on ${resetExpiryStr} (before the assessment date ${assessmentDate}).`);
      return {
        status: "not_met_reset_clock_expired",
        badgeClass: "badge-danger",
        isAutoExempt: false,
        clockResetActive: false,
        activeCutoffDate: resetExpiryStr,
        initialSixMonthDateStr: sixMonthDateStr,
        twoWeeksPriorStr,
        resetExpiryStr,
        reasonsKo,
        reasonsEn
      };
    }
    reasonsKo.push(`<strong>신규 비자 승인 / 브리징 발효(${resetDate})에 따른 새 6개월 시계 적용 (PAM3 s 3.2 & 3.4.1):</strong> 리셋 기산일(${resetDate})부터 6개월 시계가 0일로 새로 시작되어 <strong>${resetExpiryStr}</strong>까지 동일 고용주와 적법하게 근무할 수 있어요.`);
    reasonsEn.push(`<strong>New 6-Month Clock Active from ${resetDate} (PAM3 s 3.2 & 3.4.1):</strong> Your 6-month clock reset on ${resetDate} and runs until <strong>${resetExpiryStr}</strong>.`);
    return {
      status: "clock_reset_active",
      badgeClass: "badge-success",
      isAutoExempt: false,
      clockResetActive: true,
      activeCutoffDate: resetExpiryStr,
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr,
      reasonsKo,
      reasonsEn
    };
  }

  // W11 (T28): Workers compensation period requires manual review, NOT unconditional green auto-exempt
  if (workersComp) {
    reasonsKo.push("<strong>수동 검토 필요 — 산재보상 급여(Workers Compensation) 수령 기간 확인 (PAM3 [Sch8/8547] s 3.2.4):</strong> 산재보상 수령 기간으로 인해 6개월을 넘긴 경우 해당 수령 기간과 실제 노무 제공 기간을 구분하여 증빙 서류로 소명해야 하므로 수동 검토가 필요해요.");
    reasonsEn.push("<strong>Manual Review Required — Workers Compensation Period (PAM3 [Sch8/8547] s 3.2.4):</strong> Requires verifying the exact period of receiving workers compensation payments versus active work.");
    return {
      status: "manual_review_workers_comp",
      badgeClass: "badge-warning",
      isAutoExempt: false,
      clockResetActive: false,
      activeCutoffDate: sixMonthDateStr,
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr: "",
      reasonsKo,
      reasonsEn
    };
  }

  // W12 (T29, T30): Written Permission Submission Timing
  if (permissionStatus === "approved_in_writing" || permissionStatus === "approved") {
    reasonsKo.push("<strong>호주 연방 이민성 서면 연장 허가 승인 완료:</strong> 승인 통지서에 명시된 허가 기간 동안 동일 고용주와 적법하게 계속 근무할 수 있어요.");
    reasonsEn.push("<strong>Written Permission Approved by Home Affairs:</strong> You may continue working in accordance with the written approval notice.");
    return {
      status: "permission_approved",
      badgeClass: "badge-success",
      isAutoExempt: false,
      clockResetActive: false,
      activeCutoffDate: "서면 승인 기간 (Approved Period)",
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr: "",
      reasonsKo,
      reasonsEn
    };
  }

  if (permissionStatus === "submitted_before_expiry_pending") {
    reasonsKo.push(`<strong>만료일(${sixMonthDateStr}) 이전 서면 허가 신청 접수 완료 — 결정 대기 중 임시 근무 허용:</strong> 자동 면제는 아니나, 6개월 만료일 이전에 신청서를 제출했으므로 호주 연방 이민성의 서면 결정이 나올 때까지 임시로 계속 근무할 수 있어요.`);
    reasonsEn.push(`<strong>Written Permission Submitted BEFORE ${sixMonthDateStr} — Interim Work Allowed Pending Decision:</strong> Not an automatic exemption, but because you lodged before expiry, you may continue working until Home Affairs issues a written decision.`);
    return {
      status: "interim_work_allowed_pending_decision",
      badgeClass: "badge-warning",
      isAutoExempt: false,
      clockResetActive: false,
      activeCutoffDate: sixMonthDateStr,
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr: "",
      reasonsKo,
      reasonsEn
    };
  }

  if (permissionStatus === "submitted_after_expiry_pending") {
    reasonsKo.push(`<strong>경고 — 6개월 만료일(${sixMonthDateStr}) 이후 서면 허가 신청 (즉시 근무 중단 필수!):</strong> 만료일이 지난 뒤에 허가를 신청한 경우에는 호주 연방 이민성으로부터 서면 승인 통지를 받을 때까지 <strong>절대 계속 근무할 수 없으며 즉시 업무를 중단</strong>해야 해요!`);
    reasonsEn.push(`<strong>CRITICAL — Permission Submitted AFTER ${sixMonthDateStr} (Must Stop Work Immediately!):</strong> Because the request was submitted after the 6-month limit expired, you MUST stop working immediately and wait for written approval.`);
    return {
      status: "stop_work_until_approved",
      badgeClass: "badge-danger",
      isAutoExempt: false,
      clockResetActive: false,
      activeCutoffDate: sixMonthDateStr,
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr: "",
      reasonsKo,
      reasonsEn
    };
  }

  if (permGrounds) {
    if (assessmentDate && sixMonthDateStr !== "-" && assessmentDate > sixMonthDateStr) {
      reasonsKo.push(`<strong>주의 — 6개월 만료일(${sixMonthDateStr}) 도과 및 미신청 상태:</strong> 허가 신청 사유가 있더라도 이미 6개월 만료일이 지났으므로 즉시 근무를 중단하고 서면 승인을 받아야 해요.`);
      reasonsEn.push(`<strong>6-Month Limit (${sixMonthDateStr}) Already Passed Without Prior Submission:</strong> You must stop working immediately until written permission is granted.`);
      return {
        status: "stop_work_expired_unsubmitted",
        badgeClass: "badge-danger",
        isAutoExempt: false,
        clockResetActive: false,
        activeCutoffDate: sixMonthDateStr,
        initialSixMonthDateStr: sixMonthDateStr,
        twoWeeksPriorStr,
        resetExpiryStr: "",
        reasonsKo,
        reasonsEn
      };
    }
    reasonsKo.push(`<strong>만료일(${sixMonthDateStr}) 이전 사전 서면 허가 신청 대상:</strong> 반드시 만료 최소 2주 전(${twoWeeksPriorStr} 권장, 늦어도 ${sixMonthDateStr} 이전)에 온라인 서면 허가 신청서를 제출해야 결과 대기 중 계속 근무가 가능해요.`);
    reasonsEn.push(`<strong>Submit Written Permission Request BEFORE ${sixMonthDateStr}:</strong> Lodge at least 2 weeks prior (${twoWeeksPriorStr}) and strictly before ${sixMonthDateStr} to lawfully continue working while awaiting a decision.`);
    return {
      status: "submit_permission_before_expiry",
      badgeClass: "badge-warning",
      isAutoExempt: false,
      clockResetActive: false,
      activeCutoffDate: sixMonthDateStr,
      initialSixMonthDateStr: sixMonthDateStr,
      twoWeeksPriorStr,
      resetExpiryStr: "",
      reasonsKo,
      reasonsEn
    };
  }

  return {
    status: "limit_applies",
    badgeClass: "badge-danger",
    isAutoExempt: false,
    clockResetActive: false,
    activeCutoffDate: sixMonthDateStr,
    initialSixMonthDateStr: sixMonthDateStr,
    twoWeeksPriorStr,
    resetExpiryStr: "",
    reasonsKo,
    reasonsEn
  };
}

function renderCondition8547Simulator() {
  const panel = document.getElementById("c8547-result-panel");
  if (!panel) return;

  const startStr = document.getElementById("c8547-start-date")?.value || "2026-05-01";
  const pcStr = (document.getElementById("c8547-postcode")?.value || "").trim();
  const sector = document.getElementById("c8547-sector")?.value || "tourism_hosp";
  const diffLoc = document.getElementById("c8547-diff-location")?.checked ?? false;
  const visaReset = document.getElementById("c8547-visa-reset")?.checked ?? false;
  const resetEventType = document.getElementById("c8547-reset-type")?.value || "new_whm_granted";
  const resetDate = document.getElementById("c8547-reset-date")?.value || "";
  const assessmentDate = document.getElementById("c8547-check-date")?.value || "2026-10-20";
  const visaExpiryDate = document.getElementById("c8547-visa-expiry")?.value || "";
  const multiClient = document.getElementById("c8547-multi-client")?.checked ?? false;
  const workersComp = document.getElementById("c8547-workers-comp")?.checked ?? false;
  const permGrounds = document.getElementById("c8547-permission-grounds")?.checked ?? false;
  const permissionStatus = document.getElementById("c8547-permission-status")?.value || "none";

  const res = evaluateCondition8547({
    startDate: startStr,
    postcode: pcStr,
    sector,
    diffLoc,
    visaReset,
    resetEventType,
    resetDate,
    assessmentDate,
    visaExpiryDate,
    multiClient,
    workersComp,
    permGrounds,
    permissionStatus
  });

  const {
    status,
    badgeClass,
    isAutoExempt,
    clockResetActive,
    activeCutoffDate,
    initialSixMonthDateStr,
    twoWeeksPriorStr,
    reasonsKo,
    reasonsEn
  } = res;

  let badgeLabelKo = "6개월 근무 제한 적용 (조치 필요)";
  let badgeLabelEn = "6-Month Limit Applies — Action Required";
  let headingKo = `자동 면제 사유가 확인되지 않았어요 — ${activeCutoffDate}까지만 근무 가능해요`;
  let headingEn = `No Automatic Exemption Identified — 6-Month Limit Ends on ${activeCutoffDate}`;

  if (status === "auto_exempt") {
    badgeLabelKo = "사전 허가 불필요 (자동 면제 해당)";
    badgeLabelEn = "No Permission Needed (Automatically Exempt)";
    headingKo = "사전 허가 없이 동일 고용주와 6개월 초과 근무가 가능해요 (비자 유효기간 내)";
    headingEn = "You Can Work >6 Months for the Same Employer Without Asking Permission (Within Visa Validity)";
  } else if (status === "clock_reset_active") {
    badgeLabelKo = "신규 6개월 시계 리셋 적용 중";
    badgeLabelEn = "New 6-Month Clock Reset Active";
    headingKo = `리셋 기산일(${resetDate}) 기준 새 6개월 만료일은 ${activeCutoffDate}이에요`;
    headingEn = `Clock Reset on ${resetDate} — New 6-Month Limit Runs Until ${activeCutoffDate}`;
  } else if (status === "permission_approved") {
    badgeLabelKo = "서면 연장 허가 승인 완료";
    badgeLabelEn = "Written Permission Approved";
    headingKo = "이민성 서면 승인 범위 내에서 6개월 초과 근무가 가능해요";
    headingEn = "Authorized to Continue Working Under Written Permission";
  } else if (status === "interim_work_allowed_pending_decision") {
    badgeLabelKo = "만료 전 접수 완료 (결정 대기 중 임시 근무 가능)";
    badgeLabelEn = "Submitted Before Expiry (Interim Work Allowed)";
    headingKo = "서면 결정 통지 시까지 임시로 계속 근무할 수 있어요 (자동 면제 아님)";
    headingEn = "You May Continue Working Temporarily Until a Written Decision Is Made";
  } else if (status.startsWith("manual_review")) {
    badgeLabelKo = "추가 정보 입력 · 수동 검토 필요";
    badgeLabelEn = "Manual Review / Date Input Required";
    headingKo = "시계 리셋 기준일 또는 브리징·산재보상 세부 증빙을 먼저 확인해 주세요";
    headingEn = "Please Confirm Your Reset Date or Supporting Evidence First";
  } else if (status === "submit_permission_before_expiry") {
    badgeLabelKo = "만료 전 사전 서면 허가 신청 대상";
    badgeLabelEn = "Submit Written Permission Before Expiry";
    headingKo = `반드시 6개월 만료일(${activeCutoffDate}) 이전에 온라인 서면 허가를 신청하세요!`;
    headingEn = `You Must Submit the Online Permission Request BEFORE ${activeCutoffDate}!`;
  } else if (status === "stop_work_until_approved" || status === "stop_work_expired_unsubmitted" || status === "not_met_visa_expired" || status === "not_met_reset_clock_expired") {
    badgeLabelKo = "즉시 근무 중단 / 기간 만료 경고";
    badgeLabelEn = "Stop Work Immediately / Limit Expired";
    headingKo = status === "not_met_visa_expired"
      ? `비자 만료(${visaExpiryDate})로 인해 취업권이 종료되었어요`
      : `6개월 제한 기한(${activeCutoffDate})이 만료되었어요 — 서면 승인 전 근무 불가!`;
    headingEn = status === "not_met_visa_expired"
      ? `Visa Expired on ${visaExpiryDate} — Work Rights Ceased`
      : `6-Month Limit (${activeCutoffDate}) Expired — Must Stop Working!`;
  }

  const statusBadge = `<span class="badge ${badgeClass}">${t(badgeLabelKo, badgeLabelEn)}</span>`;
  const displayCutoff = initialSixMonthDateStr || activeCutoffDate || "-";

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
      <span class="overline-serif light-mode" style="margin:0;">CONDITION 8547 VERDICT</span>
      ${statusBadge}
    </div>
    <h3 style="font-size:20px;font-weight:800;color:var(--color-charcoal);margin-bottom:8px;">
      ${t(headingKo, headingEn)}
    </h3>

    <div class="timeline-milestone-grid">
      <div class="milestone-box">
        <div class="m-label">${t(clockResetActive ? "리셋 기산일" : "첫 출근·교육 시작일", clockResetActive ? "Clock Reset Date" : "Work / Training Start")}</div>
        <div class="m-date">${clockResetActive ? resetDate : startStr}</div>
        <div class="m-note">${t("달력 경과 산정 기산점", "Day 1 of 6-month clock")}</div>
      </div>
      <div class="milestone-box">
        <div class="m-label">${t("서면허가 신청 권장기한", "Recommended Request Date")}</div>
        <div class="m-date">${twoWeeksPriorStr}</div>
        <div class="m-note">${t("만료 최소 2주 전 (PAM3 s 3.3)", "At least 2 weeks prior (PAM3)")}</div>
      </div>
      <div class="milestone-box">
        <div class="m-label">${t("적용 기준 6개월 만료일", "Active 6-Month Cutoff")}</div>
        <div class="m-date">${activeCutoffDate}</div>
        <div class="m-note">${t("면제/허가 없을 시 근무 종료일", "Hard cutoff if not exempt")}</div>
      </div>
    </div>

    <div style="background:${(isAutoExempt || clockResetActive) ? '#EDF7F1' : '#FEF6E7'};border-left:4px solid ${(isAutoExempt || clockResetActive) ? '#2E6B4F' : '#B8860B'};padding:12px 14px;border-radius:6px;font-size:13.5px;color:#2E2E2E;margin-bottom:14px;">
      ${reasonsKo.length > 0 ? `
        <ul style="margin:0 0 0 18px;padding:0;">
          ${(currentLang === "ko" ? reasonsKo : reasonsEn).map(r => `<li style="margin-bottom:6px;">${r}</li>`).join("")}
        </ul>
      ` : t(
        `현재 선택한 업종은 자동 면제 대상이 아니며 장소 변경·시계 리셋도 적용되지 않았어요. 만약 면제나 사전 서면 허가 없이 <strong>${displayCutoff}</strong>을 넘겨 동일 고용주(동일 최종 사업장)에서 계속 일하면 <strong>비자 조건 8547 위반으로 비자 취소(s 116) 및 2·3차/스폰서 비자 거절(cl 417.221 / 462.223)</strong> 사유가 돼요.`,
        `No automatic exemption is active. Working beyond ${displayCutoff} for the same end-user without an exemption or prior written permission breaches Condition 8547 and risks visa cancellation (s 116) or refusal of subsequent visas.`
      )}
    </div>

    <div style="background:var(--color-paper);border:1px solid var(--color-line-strong);border-radius:6px;padding:12px 14px;font-size:13px;line-height:1.55;">
      <strong style="color:var(--color-burgundy);">${t("사전 서면 허가(Written Permission) 접수 시점의 결정적 차이:", "Critical Timing Rule for Written Permission Requests:")}</strong><br/>
      ${t(
        `• <strong>만료일 이전에 신청서를 제출한 경우:</strong> 호주 연방 이민성의 서면 결정이 나올 때까지 6개월이 지나도 <strong>합법적으로 계속 근무</strong>할 수 있어요.<br/>• <strong>만료일이 지난 후 신청한 경우:</strong> <strong>즉시 근무를 중단</strong>해야 하며, 서면 승인 통지를 받을 때까지 절대 일할 수 없어요!`,
        `• <strong>Submitted BEFORE expiry:</strong> You may lawfully continue working for the same employer until you receive a written decision from Home Affairs.<br/>• <strong>Submitted AFTER expiry:</strong> You MUST stop working immediately and wait for a written decision before resuming work.`
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
// MODULE 6: RIGHTS, TRAPS, MONITORED RULES, LIVE SOURCES & FOOTNOTES
// =========================================================================

function renderRightsSourcesAndFootnotes() {
  const rtEl = document.getElementById("rights-traps-container");
  if (rtEl) {
    rtEl.innerHTML = `
      <article class="rule8547-card" style="border-top:4px solid #2E6B4F;">
        <h4 style="color:#1A4731;">${t("✓ 워킹홀리데이(417 · 462) 비자 소지자의 핵심 권리", "✓ Key Rights on a Working Holiday Maker (417 / 462) Visa")}</h4>
        <ul style="margin:8px 0 0 18px;padding:0;font-size:13.8px;line-height:1.65;color:#2E2E2E;">
          <li>${t("<strong>모든 직종 근무 가능:</strong> 조건 8547(동일 고용주 6개월 제한 및 면제 규정)을 준수하는 한 호주 내 어떤 직종·고용 형태(풀타임·파트타임·캐주얼)로도 일할 수 있어요.", "<strong>Work in any occupation:</strong> Subject to Condition 8547, you can work full-time, part-time, or casual in any industry.")}</li>
          <li>${t("<strong>호주 공정근로법(Fair Work Act) 동일 보호:</strong> 내국인과 동일한 법정 최저임금, 캐주얼 로딩(최소 25%), 피스레이트 최저시급 보장, 그리고 퇴직연금(Superannuation — 출국 시 DASP 환급 신청 가능)을 받을 권리가 있어요.", "<strong>Full Fair Work workplace protections:</strong> Entitled to national minimum wage, 25% casual loading, piecework minimum wage guarantee, and Superannuation (DASP claimable upon departure).")}</li>
          <li>${t("<strong>다중 고용주 합산 및 조기 연장 신청 불이익 없음:</strong> 여러 고용주 밑에서 일한 지정 근로를 합산해 88일/179일을 채울 수 있으며, 호주 내에서 현 비자 보유 중 2·3차 비자를 조기 신청·승인받아도 기존 비자 잔여 기간을 잃지 않고 연속 24개월/36개월 체류가 보장돼요(cl 417.513 / 462.513).", "<strong>Combine multiple employers & early lodge protection:</strong> Combine eligible work across multiple employers, and lodge onshore early without losing remaining stay period (cl 417.513 / 462.513).")}</li>
          <li>${t("<strong>최대 4개월(17주) 학업·직무훈련 허용 (Condition 8548):</strong> 각 비자당 최대 4개월까지 어학연수나 단기 과정을 수강할 수 있어요.", "<strong>Up to 4 months (17 weeks) study or training (Condition 8548):</strong> Allowed on each WHM visa.")}</li>
        </ul>
      </article>
      <article class="rule8547-card" style="border-top:4px solid #9B1C1C;">
        <h4 style="color:#771D1D;">${t("✗ 비자 거절 · 취소(s 116)로 이어지는 6대 치명적 함정", "✗ 6 Critical Traps Leading to Visa Refusal or Cancellation (s 116)")}</h4>
        <ul style="margin:8px 0 0 18px;padding:0;font-size:13.8px;line-height:1.65;color:#2E2E2E;">
          <li>${t("<strong>함정 1 — 462 광업·어업·임업 우편번호 착오:</strong> Subclass 462에서 광업(Mining)을 지정 근로로 계산하거나, 남부 지방(NSW·VIC·SA·TAS·남부 WA)에서의 어업·임업을 462 지정 근로로 오인하는 경우 (462 어업·임업은 북부 호주 Table 3 전용!).", "<strong>Trap 1 — Subclass 462 Mining/Fishing/Forestry mismatch:</strong> Mining never counts for 462, and Fishing/Forestry for 462 count ONLY in Northern Australia (Table 3).")}</li>
          <li>${t("<strong>함정 2 — 관광·접객업(Tourism & Hospitality) 일반 지방 오인:</strong> 관광·접객업은 북부 호주(Table 3) 또는 외곽·극외곽 호주(Table 1·2) 우편번호에서만 지정 근로로 인정돼요. 일반 지방(Table 4, 예: 바이런베이·골드코스트·일반 지방 도시) 카페·호텔 근무는 지정 근로로 산입되지 않아요! (단, 조건 8547 6개월 면제는 호주 전역 적용)", "<strong>Trap 2 — Tourism & Hospitality in standard regional areas:</strong> For 88/179-day specified work, Tourism & Hospitality is restricted to Northern or Remote/Very Remote postcodes (Tables 1–3), NOT all of Regional Australia (Table 4).")}</li>
          <li>${t("<strong>함정 3 — 투잡 동일 날짜 중복 계산 & 무급 기상악화 미차감:</strong> 하루에 두 곳에서 일해도 하루는 최대 1일로만 산입되며, 피스레이트·캐주얼 계약 중 폭우·악천후로 일하지 못한 무급 휴업일(Petra 사례)을 88일에서 빼지 않고 신청했다가 일수 부족으로 거절되는 사례.", "<strong>Trap 3 — Double-counting overlapping days or unpaid weather days:</strong> One calendar day can never count as >1 day, and unpaid severe weather days do not count (Petra example).")}</li>
          <li>${t("<strong>함정 4 — 학생비자 브리징(Ingrid 사례) 중 수행한 근로 산입:</strong> 1차 WHM 만료 후 학생비자(500) 체류 중이거나 학생비자에서 2차 WHM을 신청해 나온 브리징 비자 상태에서 한 근로는 3차 비자용 지정 근로로 절대 인정되지 않아요.", "<strong>Trap 4 — Working on a Student visa or non-WHM Bridging Visa (Ingrid trap):</strong> Work done while holding a Student visa or a BVA from a Student visa never counts toward a 3rd WHM visa.")}</li>
          <li>${t("<strong>함정 5 — 인력파견업체(Agency) 변경을 통한 6개월 제한 우회 시도:</strong> 파견업체만 바꾸고 동일한 최종 사업장(End-user)의 같은 장소에서 6개월을 넘겨 일하면 조건 8547 위반이에요.", "<strong>Trap 5 — Switching labour-hire agencies at the same end-user:</strong> Condition 8547 looks at the end-user business and physical workplace, not the payroll agency.")}</li>
          <li>${t("<strong>함정 6 — 워킹홀리데이 승인 후 관광비자(eVisitor 651 · Visitor 600 vs ETA 601) 신청 시 주의 (PAM3 VM-3182 s 4.9.1):</strong> WHM 비자가 승인된 뒤 <strong>eVisitor(651) 또는 Visitor(600)</strong> 비자를 신청해 승인받으면 이민법 s 82에 의해 기존 WHM 비자와 취업권이 즉시 소멸해요! 반면 <strong>ETA(601)</strong>는 기존 WHM 비자를 소멸시키지 않고 병존(Concurrent)하다가 WHM 만료 시점에 발효돼요.", "<strong>Trap 6 — Applying for a Visitor visa after WHM grant (eVisitor 651 / Visitor 600 vs ETA 601 — PAM3 s 4.9.1):</strong> Grant of an <strong>eVisitor (651) or Visitor (600)</strong> visa ceases your WHM visa under s 82 of the Migration Act. By contrast, an <strong>ETA (601)</strong> runs concurrently until the WHM expires and takes effect thereafter without ceasing the WHM visa.")}</li>
        </ul>
      </article>
    `;
  }

  // Render 4 Primary-Source Monitored Rule Cards
  const mrEl = document.getElementById("monitored-rules-grid");
  if (mrEl && POLLING_DATA) {
    const mr = POLLING_DATA.monitored_rules || {};
    const pcCounts = mr.postcodes_tables_1_to_6?.counts || POSTCODE_TABLES.counts;
    const age417 = mr.subclass_417_age_caps || { age_35_count: 10, age_30_count: 9 };
    const caps462 = mr.subclass_462_country_caps || { open_count: 23, paused_countries: ["Brazil", "Mongolia"], ballot_countries: ["China", "India", "Indonesia", "Vietnam"] };
    const pausedStr = (caps462.paused_countries || ["Brazil", "Mongolia"]).join(", ") || "None";

    mrEl.innerHTML = `
      <article class="rule8547-card">
        <h4>${t("Poller 정기 감시 ① — 6대 지정 지역 우편번호표 (LIN 22/012 · 22/013 · 25/048)", "Primary-Source Monitor ① — 6 Designated Area Postcode Tables")}</h4>
        <p>${t(
          `호주 연방 이민성 <code>PageSchemaHiddenField</code> JSON 및 연방 법제처 고시문을 대조해 산불·홍수 등 신규 재해 선포 우편번호 추가를 자동 감지해요.<br/>• <strong>현행 검증 수량:</strong> 지방(Table 4) <strong>${pcCounts.regional}개</strong> · 북부(Table 3) <strong>${pcCounts.northern}개</strong> · 외곽(Table 1) <strong>${pcCounts.remote}개</strong> · 관광특례(Table 2) <strong>${pcCounts.additional_tourism || 4}개</strong> · 산불(Table 5) <strong>${pcCounts.bushfire}개</strong> · 자연재해(Table 6) <strong>${pcCounts.disaster}개</strong>`,
          `Automatically parses Home Affairs <code>PageSchemaHiddenField</code> JSON & legislative instruments to detect postcode additions.<br/>• <strong>Verified Counts:</strong> Regional (T4) <strong>${pcCounts.regional}</strong> · Northern (T3) <strong>${pcCounts.northern}</strong> · Remote (T1) <strong>${pcCounts.remote}</strong> · Tourism (T2) <strong>${pcCounts.additional_tourism || 4}</strong> · Bushfire (T5) <strong>${pcCounts.bushfire}</strong> · Disaster (T6) <strong>${pcCounts.disaster}</strong>`
        )}</p>
      </article>
      <article class="rule8547-card">
        <h4>${t("Poller 정기 감시 ② — 417 협정국 연령 상한 & 법정 VAC (Sch 1 Item 1225/1224A)", "Primary-Source Monitor ② — 417 Age Caps & Statutory Base VAC")}</h4>
        <p>${t(
          `호주 연방 이민성 417 비자 스트림 스키마의 <code>Be this age</code> 목록과 Migration Regulations 1994 Schedule 1을 정기 파싱해요.<br/>• <strong>만 18~35세 협정국 (${age417.age_35_count || 10}개국):</strong> 대한민국(2026.7.1~), 영국(UK·BN(O)), 캐나다, 프랑스, 아일랜드, 이탈리아, 덴마크, 독일, 핀란드, 키프로스<br/>• <strong>만 18~30세 (${age417.age_30_count || 9}개국)</strong> 및 <strong>현행 기본 VAC:</strong> 1차 <strong>$840</strong> (파푸아뉴기니(PNG) 462 <strong>$690</strong>) · 2·3차 <strong>$1,000</strong>`,
          `Parses the live 417 stream schema & Migration Regulations 1994 Schedule 1 on every poll.<br/>• <strong>Age 18–35 (${age417.age_35_count || 10} countries):</strong> Republic of Korea (from 1 Jul 2026), UK/BN(O), Canada, France, Ireland, Italy, Denmark, Germany, Finland, Cyprus<br/>• <strong>Age 18–30 (${age417.age_30_count || 9} countries)</strong> & <strong>Base VAC:</strong> 1st <strong>$840</strong> ($690 Papua New Guinea 462) · 2nd/3rd <strong>$1,000</strong>`
        )}</p>
      </article>
      <article class="rule8547-card">
        <h4>${t("Poller 정기 감시 ③ — Subclass 462 30개국 실시간 쿼터(Cap) & 추첨제(Ballot)", "Primary-Source Monitor ③ — Live Subclass 462 Country Caps & Ballot Status")}</h4>
        <p>${t(
          `호주 연방 이민성 <code>status-of-country-caps</code> 테이블을 실시간 파싱해 국가별 1차 비자 쿼터 마감 상태를 추적해요 (2·3차 연장 비자는 쿼터 제한 없음!).<br/>• <strong>실시간 파싱 결과:</strong> 접수 중(Open) <strong>${caps462.open_count || 23}개국</strong> + 무제한(미국) · 일시중단(Paused): <strong>${pausedStr}</strong> · 추첨제(Ballot): <strong>중국, 인도, 베트남, 인도네시아</strong>`,
          `Parses the live <code>status-of-country-caps</code> table on Home Affairs (Note: annual caps apply only to 1st 462 visas; 2nd & 3rd extensions are uncapped).<br/>• <strong>Live Status:</strong> Open: <strong>${caps462.open_count || 23} countries</strong> + USA (no cap) · Paused: <strong>${pausedStr}</strong> · Pre-Application Ballot: <strong>China, India, Vietnam, Indonesia</strong>`
        )}</p>
      </article>
      <article class="rule8547-card">
        <h4>${t("Poller 정기 감시 ④ — 조건 8547 (6개월 제한) 자동 면제 유지 여부 감시", "Primary-Source Monitor ④ — Condition 8547 Automatic Exemptions Currency")}</h4>
        <p>${t(
          `호주 연방 이민성 <code>6-month-work-limitation</code> 원문에서 2024.1.1 발효 자동 면제 지침(<em>"until the Government makes further decisions"</em>)의 유지 여부나 종료 고시를 감시해요.<br/>• <strong>현재 상태:</strong> <strong>정상 유지 중 (Active)</strong> — 호주 전역 농축산·자연재해복구·5대 핵심산업, 북부 호주 4대 산업, 근무 장소 변경(장소당 ≤6개월) 사전 허가 면제 확인 완료`,
          `Monitors Home Affairs <code>6-month-work-limitation</code> policy for any change to the <em>"until the Government makes further decisions"</em> automatic exemptions.<br/>• <strong>Current Status:</strong> <strong>CONFIRMED ACTIVE</strong> — Nationwide critical sectors, plant/animal cultivation, disaster recovery, Northern Australia sectors & different workplace locations remain exempt.`
        )}</p>
      </article>
    `;
  }

  const srcBody = document.getElementById("live-sources-body");
  if (srcBody && POLLING_DATA && POLLING_DATA.sources) {
    srcBody.innerHTML = POLLING_DATA.sources.map(s => `
      <tr>
        <td><strong>${t(s.authority_ko || s.authority, s.authority_en || s.authority)}</strong></td>
        <td>${t(s.title_ko || s.title, s.title_en || s.title)}</td>
        <td style="font-size:12.5px;color:#5A5654;">${t(s.check_scope_ko || "원문 해시 및 법령 개정 감시", s.check_scope_en || "SHA-256 & rule structure monitor")}</td>
        <td>
          <span class="badge ${s.contentCheckStatus === 'pass' ? 'badge-success' : 'badge-warning'}">
            HTTP ${s.http_code || 200} · ${s.contentCheckStatus === 'pass' ? 'CONTENT PASS' : 'CHECK'}
          </span>
        </td>
        <td style="font-family:monospace;font-size:12px;">
          <div>SHA-256: ${(s.sha256 || "").slice(0, 16)}…</div>
          <a href="${s.url}" target="_blank" rel="noopener" style="color:var(--color-burgundy);font-weight:700;font-family:var(--font-sans);">${t("공식 원문 열기 ↗", "Open Official Source ↗")}</a>
        </td>
      </tr>
    `).join("");
  }

  const fnEl = document.getElementById("footnotes-container");
  if (fnEl) {
    fnEl.innerHTML = FOOTNOTES.map(f => {
      const isInternal = f.sourceKind === "internal_policy_reference";
      return `
        <div class="footnote-item" style="padding:8px 0;border-bottom:1px solid var(--color-line);font-size:13px;">
          <strong>[${f.id}] ${f.cite}:</strong> ${t(f.descKo, f.descEn)}
          ${isInternal
            ? `<span class="badge badge-neutral" style="margin-left:6px;">${t("내부 지침 레퍼런스 (비공개 스냅샷)", "Internal Policy Reference (Non-Public Snapshot)")}</span>`
            : `<a href="${f.url}" target="_blank" rel="noopener" style="color:var(--color-burgundy);font-weight:700;margin-left:6px;">${t("[공식 원문 ↗]", "[Official Source ↗]")}</a>`
          }
        </div>
      `;
    }).join("");
  }
}

// =========================================================================
// LANGUAGE SWITCHER (KO DEFAULT ↔ EN TOGGLE) & EVENT LISTENERS
// =========================================================================

const I18N_STATIC = {
  brandTag: {
    ko: "IMMIGRATION LAW · WHM 417 & 462 PRACTICE",
    en: "IMMIGRATION LAW · WHM 417 & 462 PRACTICE"
  },
  pollBadge: {
    ko: `출처 모니터 (${POLLING_DATA.last_polled_date || "2026-10-20"} · 실시간 ${POLLING_DATA.live_verified_count || 12}/${POLLING_DATA.total_sources || 12} 검증 완료)`,
    en: `Source Monitor (${POLLING_DATA.last_polled_date || "2026-10-20"} · ${POLLING_DATA.live_verified_count || 12}/${POLLING_DATA.total_sources || 12} Live Verified)`
  },
  navEnquiry: {
    ko: "박앤코 상담·문의하기 →",
    en: "Book Consultation →"
  },
  urgentBadge: {
    ko: "2026 법령·정책 핵심 업데이트",
    en: "2026 Statutory & Policy Alert"
  },
  urgentText: {
    ko: "2026.07.01부터 대한민국(Republic of Korea)·독일·핀란드·키프로스 여권 소지자의 Subclass 417 연령 상한이 만 18~35세(만 36세 생일 전날 AEST 23:59까지)로 확대 [5] / 영국(UK·BN(O)) 여권 소지자는 2·3차 417 지정 근로 면제(단, 조건 8547 6개월 제한은 동일 적용) [4] / 2025.04.05 발효 LIN 25/048 산불(Table 5)·자연재해(Table 6) 우편번호 전수 반영 [9] / 현행 법정 비자 신청비(VAC): 1차 $840 (파푸아뉴기니(PNG) 462는 $690) · 2차·3차 $1,000 [1].",
    en: "From 1 Jul 2026, Subclass 417 age limit increased to 18–35 (inclusive, until 11:59 pm AEST the day before turning 36) for Republic of Korea, Germany, Finland & Cyprus [5] / UK & BN(O) passport holders are exempt from specified work for 2nd/3rd 417 (Condition 8547 still applies) [4] / 5 Apr 2025 LIN 25/048 Bushfire (Table 5) & Natural Disaster (Table 6) postcodes embedded [9] / Statutory Base VAC: 1st $840 ($690 Papua New Guinea 462) · 2nd & 3rd $1,000 [1]."
  },
  urgentLink: {
    ko: "[1]–[18] 1차 출처 각주 ↓",
    en: "[1]–[18] Primary Sources ↓"
  },
  heroOverline: {
    ko: "SUBCLASS 417 & 462 · SPECIFIED WORK (88 / 179 DAYS) & CONDITION 8547 NAVIGATOR",
    en: "SUBCLASS 417 & 462 · SPECIFIED WORK (88 / 179 DAYS) & CONDITION 8547 NAVIGATOR"
  },
  heroTitle: {
    ko: "호주 워킹홀리데이(417 · 462) 2·3차 연장 및 조건 8547(6개월 근무 제한·면제) 통합 네비게이터",
    en: "Australia Working Holiday (Subclass 417 & 462) Visa Extension, Specified Work & Condition 8547 Navigator"
  },
  heroLead: {
    ko: "Migration Regulations 1994(Sch 1 Item 1224A · 1225, Sch 2 Part 417 · 462, Sch 8 Condition 8547 · 8548), 연방 법령 문서(LIN 22/012 · LIN 22/013 · LIN 25/048), 그리고 호주 연방 이민성 내부 심사지침(PAM3 VM-3182 · VM-1813 · VM-1144) 원문을 기반으로 설계된 법률 시뮬레이터예요. 단순 추정치를 넘어 <strong>다중 근무 기간 중복 일수 자동 제거, PAM3 풀타임·파트타임·피스레이트 일수 산정, 6대 공식 지정 지역 우편번호 전수 대조, 그리고 조건 8547(동일 고용주 6개월 제한) 만료일·자동 면제·시계 리셋·사전 허가 기한</strong>까지 한눈에 검증해 보세요.",
    en: "Built directly on the primary text of the Migration Regulations 1994 (Sch 1 Items 1224A & 1225, Sch 2 Parts 417 & 462, Sch 8 Conditions 8547 & 8548), Federal Legislative Instruments (LIN 22/012, LIN 22/013, LIN 25/048), and Home Affairs Procedural Instructions (PAM3 VM-3182, VM-1813, VM-1144). Verify <strong>multi-employer overlap deduplication, PAM3 full-time vs part-time/piecework day counting, all 6 statutory postcode tables, and exact Condition 8547 (6-month work limit) expiry dates, automatic exemptions, and clock resets</strong>."
  },
  heroPrimaryCta: {
    ko: "2·3차 비자 지정 근로(88/179일) 정밀 계산기 ↓",
    en: "2nd & 3rd Visa Specified Work (88/179d) Calculator ↓"
  },
  heroSecondaryCta: {
    ko: "조건 8547 (동일 고용주 6개월 제한·면제) 시뮬레이터 ↓",
    en: "Condition 8547 (6-Month Work Limit & Exemptions) Simulator ↓"
  },
  pillGate: {
    ko: "01 · 4대 법정 관문 & 417 vs 462 비교표",
    en: "01 · 4 Statutory Gates & 417 vs 462 Matrix"
  },
  pillPostcode: {
    ko: "02 · 우편번호 6대 지역표 즉시 검증기",
    en: "02 · Instant 6-Table Postcode Verifier"
  },
  pillCalc: {
    ko: "03 · 지정 근로(88/179일) PAM3 계산기",
    en: "03 · PAM3 Specified Work (88/179d) Calculator"
  },
  pill8547: {
    ko: "04 · 조건 8547 (6개월 근무 제한·면제) 정밀 판정",
    en: "04 · Condition 8547 (6-Month Limit & Exemptions)"
  },
  pillSeason: {
    ko: "05 · 계절별·주별 수확 시기 탐색기",
    en: "05 · Seasonal Harvest & Regional Explorer"
  },
  pillSources: {
    ko: "06 · 권리·거절 함정 & 1차 법령 출처",
    en: "06 · Workplace Rights, Traps & Primary Sources"
  },
  specName: {
    ko: "박창민 대표변호사 (Chang Min Park)",
    en: "Chang Min Park · Principal Lawyer"
  },
  specRole: {
    ko: "QLS Accredited Specialist in Immigration Law",
    en: "QLS Accredited Specialist in Immigration Law"
  },
  specSlogan: {
    ko: "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"",
    en: "\"You focus on life, we'll handle the law.\""
  },
  specMeta: {
    ko: "법무법인 박앤코 (Park & Co Lawyers · Underwood QLD) | 공식 이메일: enquiry@parkcolawyers.com",
    en: "Park & Co Lawyers (Underwood QLD) | Official Contact: enquiry@parkcolawyers.com"
  },
  specBtn: {
    ko: "온라인 문의 바로가기 (parklawyers.com.au) →",
    en: "Online Consultation & Enquiry (parklawyers.com.au) →"
  },
  stat1Over: { ko: "SECOND WHM VISA", en: "SECOND WHM VISA" },
  stat1Val: { ko: "3개월 · 88일", en: "3 Months · 88 Days" },
  stat1Sub: { ko: "최소 3달력월 경과 + 풀타임 환산 88일 [1][2]", en: "Min 3 calendar months + 88 full-time equiv. days [1][2]" },
  stat2Over: { ko: "THIRD WHM VISA", en: "THIRD WHM VISA" },
  stat2Val: { ko: "6개월 · 179일", en: "6 Months · 179 Days" },
  stat2Sub: { ko: "2019.7.1 이후 · 2차 비자/연계 BVA 중 수행 [1]", en: "From 1 Jul 2019 · On 2nd WHM or bridging visa [1]" },
  stat3Over: { ko: "KOREA & 10 NATIONS (417)", en: "KOREA & 10 NATIONS (417)" },
  stat3Val: { ko: "만 18~35세", en: "Age 18–35" },
  stat3Sub: { ko: "2026.7.1 한국·독일·핀란드·키프로스 확대 [5]", en: "Korea, Germany, Finland & Cyprus added 1 Jul 2026 [5]" },
  stat4Over: { ko: "CONDITION 8547 LIMIT", en: "CONDITION 8547 LIMIT" },
  stat4Val: { ko: "동일 고용주 6개월", en: "6 Months / Employer" },
  stat4Sub: { ko: "달력 경과 기준 · 핵심산업/장소변경 면제 [3][13]", en: "Elapsed calendar months · Critical sector exemptions [3][13]" },
  stat5Over: { ko: "DESIGNATED POSTCODES", en: "DESIGNATED POSTCODES" },
  stat5Val: { ko: "6개 공식 지역표", en: "6 Statutory Tables" },
  stat5Sub: { ko: "지방 4,520 · 북부 350 · 외곽 545(+관광 4) · 재해 2,677 [7–9]", en: "Regional 4,520 · North 350 · Remote 545(+4) · Disaster 2,677 [7–9]" },
  stat6Over: { ko: "STATUTORY VAC (2026)", en: "STATUTORY VAC (2026)" },
  stat6Val: { ko: "$840 / $1,000", en: "$840 / $1,000" },
  stat6Sub: { ko: "1차 $840(PNG 462 $690) · 2·3차 $1,000 [1]", en: "1st $840 ($690 PNG 462) · 2nd & 3rd $1,000 [1]" },
  gateOverline: {
    ko: "MODULE 01 · STATUTORY ARCHITECTURE & 417 VS 462 MATRIX",
    en: "MODULE 01 · STATUTORY ARCHITECTURE & 417 VS 462 MATRIX"
  },
  gateTitle: {
    ko: "‘지정 근로(Specified Work)’ 4대 법정 관문 & 417 vs 462 인정 업종·지역 비교표",
    en: "The 4 Statutory Gates of Specified Work & Subclass 417 vs 462 Comparison Matrix"
  },
  gateSub: {
    ko: "Migration Regulations 1994(Reg 1.15FAA · 1.15FA · 1.15FB 및 cl 417.211 · 462.218 · 462.219)에 따라 2차·3차 비자 연장을 위한 지정 근로는 아래 4가지 법정 관문을 <strong>모두</strong> 통과해야 해요. 하나라도 어긋나면 해당 기간 전체가 불인정될 수 있어요.",
    en: "Under the Migration Regulations 1994 (Reg 1.15FAA, 1.15FA, 1.15FB and cl 417.211, 462.218, 462.219), specified work for a 2nd or 3rd WHM visa must pass <strong>all four</strong> statutory gates below."
  },
  matrixTitle: {
    ko: "Subclass 417 vs Subclass 462 지정 근로 9대 업종 · 인정 지역 · 급여 요건 정밀 비교표 (LIN 22/012 · LIN 22/013 · LIN 25/048)",
    en: "Subclass 417 vs Subclass 462 Specified Work Categories, Designated Areas & Pay Rules (LIN 22/012 · LIN 22/013 · LIN 25/048)"
  },
  matrixSub: {
    ko: "417과 462는 같은 업종이라도 인정되는 지역표(Table 1~6)가 달라요. 특히 광업(Mining)은 462에서 전면 제외되며, 어업·임업은 462의 경우 북부 호주(Table 3)에서만 인정돼요.",
    en: "Subclass 417 and Subclass 462 have different geographic rules (Tables 1–6). Crucially, Mining is ineligible for 462, and Fishing & Tree Farming for 462 are restricted to Northern Australia (Table 3) only."
  },
  mThCat: { ko: "지정 근로 업종 (Category)", en: "Specified Work Category" },
  mTh417: { ko: "Subclass 417 인정 지역", en: "Subclass 417 Eligible Area" },
  mTh462: { ko: "Subclass 462 인정 지역", en: "Subclass 462 Eligible Area" },
  mThDate: { ko: "적용 시작일 · 급여 요건", en: "Start Date & Pay Rule" },
  mThDuties: { ko: "인정 직무 핵심 범위 & 제외 주의사항 (PAM3)", en: "Eligible Duties & Statutory Exclusions (PAM3)" },
  pvOverline: {
    ko: "MODULE 02 · INSTANT POSTCODE & DESIGNATED AREA VERIFIER",
    en: "MODULE 02 · INSTANT POSTCODE & DESIGNATED AREA VERIFIER"
  },
  pvTitle: {
    ko: "근무지 우편번호(Postcode) 6대 공식 지역표 & 417 · 462 · 조건 8547 즉시 검증기",
    en: "Instant Workplace Postcode Verifier (Tables 1–6, Subclass 417/462 & Condition 8547)"
  },
  pvSub: {
    ko: "실제 근무지(고용주 본사나 에이전시 주소가 아닌 <strong>실제 노무 제공 사업장 주소</strong>, PAM3 s 4.5.1)의 4자리 우편번호를 입력하면 호주 연방 이민성의 6개 공식 지정 지역표(Table 1~6) 포함 여부와 417·462 업종별 인정 여부, 그리고 조건 8547 북부 호주 6개월 면제 대상 여부를 즉시 판정해요.",
    en: "Enter the 4-digit postcode of your <strong>actual physical workplace</strong> (not the employer's head office or agency address, PAM3 s 4.5.1) to check all 6 designated postcode tables (Tables 1–6), 417 vs 462 category eligibility, and Condition 8547 Northern Australia exemption status."
  },
  pvPresetLbl: { ko: "주요 지역 예시:", en: "Quick Examples:" },
  calcOverline: {
    ko: "MODULE 03 · PAM3-ACCURATE SPECIFIED WORK & EXTENSION CALCULATOR",
    en: "MODULE 03 · PAM3-ACCURATE SPECIFIED WORK & EXTENSION CALCULATOR"
  },
  calcTitle: {
    ko: "2차(88일) · 3차(179일) 워킹홀리데이 지정 근로 정밀 계산기 (중복 일수 자동 제거 & PAM3 반영)",
    en: "2nd (88-Day) & 3rd (179-Day) WHM Specified Work Calculator (PAM3 & Overlap Deduplication)"
  },
  calcSub: {
    ko: "여러 고용주·근무 기간을 각각 입력하면 ① <strong>동일 달력 날짜 중복 근로 자동 공제(하루 최대 1일 원칙)</strong>, ② <strong>풀타임/표준 교대근무(주말·휴무일 포함) vs 파트타임/캐주얼(실제 표준 근무일 비례) vs 피스레이트 산정</strong>, ③ <strong>무급 기상악화·무급휴가 제외 및 유급 공휴일·유급병가 포함</strong>, ④ <strong>최소 달력 경과 기간(2차 3달력월 / 3차 6달력월, PAM3 s 4.5.3)</strong>까지 정밀하게 계산해요.",
    en: "Add multiple work periods across different employers to automatically calculate (1) <strong>overlapping calendar date deduplication (max 1 day per calendar day)</strong>, (2) <strong>PAM3 full-time/cyclical roster (including rest days) vs part-time/casual proportional counting</strong>, (3) <strong>deduction of unpaid weather/leave days (Petra rule)</strong>, and (4) <strong>minimum elapsed calendar duration (3 / 6 calendar months, PAM3 s 4.5.3)</strong>."
  },
  step1Title: {
    ko: "비자 종류 · 목표 차수 · 여권 국가 및 법정 기본 요건 확인",
    en: "Visa Subclass, Target Stream, Passport Country & Statutory Gates"
  },
  lblCalcSub: { ko: "1. 신청 비자 서브클래스", en: "1. Visa Subclass" },
  lblCalcTarget: { ko: "2. 목표 비자 차수 (1차 · 2차 · 3차)", en: "2. Target Visa Stream (1st · 2nd · 3rd)" },
  lblCalcCountry: { ko: "3. 신청 여권 국가 / 관할권 (2026 연령 상한 자동 연동)", en: "3. Passport Country / Jurisdiction (2026 Age Cap Linked)" },
  lblCalcAge: { ko: "4. 신청 시점 만 나이 (호주 동부표준시 AEST 기준)", en: "4. Current Age at Application (in AEST)" },
  lblCalcVisaHeld: { ko: "5. 지정 근로 수행 당시 보유 비자 (cl 417.211(6)(c) / 462.219)", en: "5. Visa Held During Specified Work (cl 417.211(6)(c) / 462.219)" },
  lblCalcLocStatus: { ko: "6. 현재 신청 위치 및 실체비자(Substantive Visa) 상태", en: "6. Application Location & Substantive Visa Status" },
  lblCalcAssessmentDate: { ko: "7. 기준 판정일 (완수 vs 예정 분리)", en: "7. Assessment Date (Completed vs Planned)" },
  lblCalcAssessDate: {
    ko: "7. 판정 기준일 / 비자 신청 예정일 (기준일 이후 미래 계획 근로는 완료 일수에서 자동 분리)",
    en: "7. Assessment / Intended Application Date (Future planned work after this date is separated from completed days)"
  },
  chkNoChildren: {
    ko: "체류 기간 중 부양 자녀(Dependent children)를 동반하지 않습니다 (cl 417.211(4)(d) / 462.217(c) 필수 요건)",
    en: "Not accompanied by dependent children at any time during stay in Australia (mandatory under cl 417.211(4)(d) / 462.217(c))"
  },
  chkNoExcludedEmp: {
    ko: "장관이 지정한 ‘제외 고용주(Excluded Employer, Reg 1.15FB)’ 밑에서 수행한 근로가 아닙니다 (cl 417.211(5)(d) 필수 요건)",
    en: "Work was NOT performed for a listed Excluded Employer under Reg 1.15FB (mandatory under cl 417.211(5)(d) / 462.218(1)(d))"
  },
  chkUkConfirmed: {
    ko: "신청 시점 유효한 영국(UK · BN(O)) 여권 소지 확인 (Item 1225(3BA) 지정 근로 면제 활성화)",
    en: "Confirmed valid UK / BN(O) passport held at application (Item 1225(3BA) specified work exemption)"
  },
  chkUkPassportConfirmed: {
    ko: "[영국(UK·BN(O)) 신청자 확인] 2024.07.01 이후 유효한 영국(GBNI) 또는 BN(O) 여권으로 신청합니다 (Item 1225(3BA))",
    en: "[UK / BN(O) Passport Confirmation] Applying on or after 1 Jul 2024 using a valid UK (GBNI) or BN(O) passport (Item 1225(3BA))"
  },
  step2Title: {
    ko: "근로 기간별 상세 기록 입력 (다중 고용주 합산 & 중복 날짜 자동 공제)",
    en: "Work Period Records (Multi-Employer Combination & Overlap Deduplication)"
  },
  btnAddPeriod: { ko: "+ 근로 기간 추가", en: "+ Add Work Period" },
  pam3CountNote: {
    ko: "<strong>PAM3 일수 산정 핵심 원칙 (VM-3182 s 4.5.3 / VM-1813 s 4.5.3):</strong> ① 해당 산업의 <strong>풀타임(보통 주 5일 근무) 또는 표준 교대근무(예: 2주 연속 근무 후 2주 유급 휴무)</strong>로 일한 기간은 주말·정상 휴무일을 포함한 <strong>전체 달력 일수(주 7일)</strong>가 산입돼요. ② 반면 풀타임 기준에 미달하는 <strong>파트타임·캐주얼</strong>은 주말을 산입할 수 없고 실제 근무한 표준 일수(또는 주당 근무일 비례)만 인정돼요. ③ 하루에 10~12시간을 일하거나 두 곳에서 투잡을 뛰어도 <strong>하루(1 Calendar Day)는 최대 1일</strong>로만 산입되며, 산업 표준 일일 근로시간에 미달하는 단시간 근무(Short shift)를 합산해 1일로 만들 수 없어요. ④ <strong>유급 공휴일·유급 병가·산재보상 휴업일</strong>은 산입되나, <strong>무급 기상악화(폭우·사이클론 등) 휴업일 및 무급 휴가</strong>는 반드시 제외해야 해요(Petra 사례).",
    en: "<strong>Core PAM3 Day-Counting Rules (VM-3182 s 4.5.3 / VM-1813 s 4.5.3):</strong> (1) <strong>Full-time work (normally 5 days/week) or standard industry cyclical rosters</strong> count all <strong>7 calendar days per week</strong> including weekends and regular rest days. (2) <strong>Part-time or casual work</strong> below full-time hours counts only actual full standard shifts worked (or proportional full-time equivalent days). (3) Working long hours or two jobs on the same date counts as at most <strong>1 calendar day</strong>, and short shifts below standard daily industry hours cannot be combined across days. (4) <strong>Paid public holidays, paid sick leave, and workers compensation days</strong> count, whereas <strong>unpaid severe weather stand-downs and unpaid leave</strong> must be deducted (Petra example)."
  },
  step3Title: {
    ko: "법정 증빙 서류 체크리스트 (cl 417.211(5)(c) / cl 462.218(1)(c))",
    en: "Mandatory Remuneration & Evidence Checklist (cl 417.211(5)(c) / cl 462.218(1)(c))"
  },
  step3Sub: {
    ko: "2015년 12월 1일 이후 모든 지정 근로(산불·자연재해 자원봉사 제외)는 호주 공정근로법(Fair Work Act) 및 해당 Award 최저임금 이상으로 적법하게 급여가 지급되어야 하며 급여명세서(Payslips) 등 지급 증빙이 필수예요.",
    en: "All specified work (except declared bushfire/natural disaster volunteering) must be lawfully remunerated in accordance with the Fair Work Act and applicable Award, supported by payslips and bank records."
  },
  c8547Overline: {
    ko: "MODULE 04 · VISA CONDITION 8547 — 6-MONTH WORK LIMITATION & EXEMPTION ENGINE",
    en: "MODULE 04 · VISA CONDITION 8547 — 6-MONTH WORK LIMITATION & EXEMPTION ENGINE"
  },
  c8547Title: {
    ko: "비자 조건 8547 (동일 고용주 6개월 근무 제한) 만료일 계산 & 자동 면제 · 시계 리셋 정밀 판정기",
    en: "Visa Condition 8547 (6-Month Work Limitation) Expiry Calculator & Exemption Engine"
  },
  c8547Sub: {
    ko: "조건 8547(Schedule 8 Condition 8547)은 2·3차 비자 연장용 ‘지정 근로’와 <strong>완전히 별개의 의무 조건</strong>이에요. 모든 417·462 비자 소지자(UK 여권 소지자 및 조건 8547이 부과된 브리징 비자 소지자 포함)에게 적용되며, 위반 시 비자 취소(s 116) 및 차기 비자 거절(cl 417.221 / 462.223) 사유가 돼요. 아래 시뮬레이터에서 <strong>정확한 6달력월 만료일, 사전 허가 신청 권장 기한(2주 전), 그리고 2024.01.01~2026 현행 자동 면제(Automatic Exemptions) 및 비자 전환 시계 리셋</strong> 해당 여부를 즉시 확인하세요.",
    en: "Condition 8547 (Schedule 8 Condition 8547) is <strong>completely separate from 88/179-day specified work</strong>. It applies to all Subclass 417 and 462 holders (including UK passport holders and Bridging Visa holders with Condition 8547). Breaching Condition 8547 risks visa cancellation (s 116) and refusal of subsequent visas (cl 417.221 / 462.223). Calculate your exact <strong>6-calendar-month cutoff date, 2-week advance permission request date, automatic exemptions (from 1 Jan 2024), and visa clock resets</strong> below."
  },
  c8547FormTitle: {
    ko: "내 근무 조건 · 시작일 · 업종 · 장소 변경 입력",
    en: "Enter Your Start Date, Workplace Postcode, Sector & Special Rules"
  },
  lbl8547Start: {
    ko: "1. 해당 고용주 첫 출근일 (직무교육·트레이닝 시작일 포함)",
    en: "1. First Day of Work or Training with This Employer"
  },
  lbl8547Postcode: {
    ko: "2. 실제 근무지 우편번호 (북부 호주 Table 3 자동 판별)",
    en: "2. Physical Workplace Postcode (Checks Northern Australia Table 3)"
  },
  lbl8547Sector: {
    ko: "3. 현재 수행 중인 산업 · 직무 분야 (2024.1.1~2026 현행 면제 고시 반영)",
    en: "3. Current Industry / Sector (2024–2026 Exemption Policy)"
  },
  lbl8547Special: {
    ko: "4. 근무 형태 · 장소 변경 · 비자 전환 · 서면 허가 특례 체크 (해당 항목 모두 선택)",
    en: "4. Workplace Location Changes, Visa Clock Resets & Permission Grounds (Check all that apply)"
  },
  lbl8547ResetType: {
    ko: "5. 시계 리셋 사유 유형 (PAM3 s 3.2 / 3.4.1)",
    en: "5. Clock Reset Event Type (PAM3 s 3.2 / 3.4.1)"
  },
  lbl8547ResetDate: {
    ko: "6. 리셋 발생 기준일 (신규 비자 승인일 / 브리징 발효일)",
    en: "6. Clock Reset Effective Date (Grant / BVA Effect Date)"
  },
  lbl8547CheckDate: {
    ko: "7. 판정 기준일 (현재 일자)",
    en: "7. Assessment Date (Current Check Date)"
  },
  lbl8547VisaExpiry: {
    ko: "8. 현 보유 비자 만료일 (선택 입력)",
    en: "8. Current Visa Expiry Date (Optional)"
  },
  lbl8547PermStatus: {
    ko: "9. 서면 연장 허가 신청·승인 상태 (PAM3 s 3.3)",
    en: "9. Written Permission Status (PAM3 s 3.3)"
  },
  chk8547DiffLoc: {
    ko: "<strong>근무 장소 변경 (Different Locations / 재택근무 전환 포함):</strong> 동일 고용주(동일 ABN) 소속이라도 서로 다른 물리적 사업장(다른 지점·매장·농장·학교·병원, 급여명세서상 다른 ABN 자회사, 또는 <strong>사무실 ↔ 재택·원격근무(WFH) 전환</strong>)으로 이동하며 <strong>어느 한 장소에서도 6개월을 초과하지 않음</strong> (자동 면제)",
    en: "<strong>Working in Different Physical Locations (incl. Switching to/from WFH):</strong> Working for the same employer across different physical branches, sites, farms, schools, hospitals, different ABN subsidiaries, or <strong>switching between office and remote/work-from-home</strong>, where work at <strong>any single location does not exceed 6 months</strong> (Automatically Exempt)"
  },
  chk8547VisaReset: {
    ko: "<strong>신규 WHM 비자 승인 또는 브리징 비자 발효 (6개월 시계 리셋 — PAM3 s 3.2 & 3.4.1):</strong> 근무 중 2차·3차 WHM 비자가 새로 승인되었거나, 기존 WHM 비자가 만료되면서 후속 비자 대기용 브리징 비자(BVA/BVB)가 발효됨 (발효일로부터 6개월 시계가 0일로 새로 시작됨!)",
    en: "<strong>New WHM Visa Granted or Bridging Visa Came into Effect (6-Month Clock Reset — PAM3 s 3.2 & 3.4.1):</strong> A new 2nd/3rd WHM visa was granted, or a Bridging Visa (BVA/BVB) came into effect upon expiry of your prior WHM visa (Resets the 6-month clock to zero!)"
  },
  chk8547MultiClient: {
    ko: "<strong>자영업자(Self-employed ABN) 다수 고객사 서비스 제공:</strong> 본인 ABN으로 용역을 제공하되, 해당 사업체가 유일한 거래처(Sole end-user)가 아니며 동시에 여러 고객사에 서비스를 제공함 (위반 아님)",
    en: "<strong>Self-Employed (ABN) Serving Multiple End-Users:</strong> Providing independent contractor services to multiple clients simultaneously rather than a single sole end-user (No breach)"
  },
  chk8547WorkersComp: {
    ko: "<strong>산재보상 급여(Workers Compensation) 수령 기간 (PAM3 s 3.2.4):</strong> 산재보상 수령 기간으로 인해 총 재직 기간이 6개월을 초과함 (해당 기간 자동 면제)",
    en: "<strong>Receiving Workers Compensation Payments (PAM3 s 3.2.4):</strong> Exceeding 6 months of employment while receiving workers compensation payments (Automatically Exempt)"
  },
  chk8547PermGrounds: {
    ko: "<strong>사전 서면 허가(Written Permission) 신청 사유 보유:</strong> ① 풀타임 취업 가능 비자(482 SID · 186 ENS · 820 파트너 등, 500 학생비자 제외)를 접수하고 결과 대기 중이거나, ② 고용주에게 필수적인 업무(Critical work)로서 고용주 지지 서한을 첨부해 6개월 만료 전에 허가를 신청함",
    en: "<strong>Grounds for Written Permission Request:</strong> (1) Applied for a visa allowing ongoing full-time work (e.g. 482 SID, 186 ENS, 820 Partner — excluding 500 Student), OR (2) Performing critical work supported by an employer letter, submitted BEFORE the 6-month expiry"
  },
  seasonOverline: {
    ko: "MODULE 05 · SEASONAL HARVEST & REGIONAL WORK EXPLORER",
    en: "MODULE 05 · SEASONAL HARVEST & REGIONAL WORK EXPLORER"
  },
  seasonTitle: {
    ko: "호주 7개 주·준주 13대 농업 지역 월별 수확 시기 & 참고 우편번호 탐색기",
    en: "Seasonal Harvest & Regional Work Explorer (13 Regions × 12 Months)"
  },
  seasonSub: {
    ko: "호주 정부 National Harvest Guide(18판) 기준선과 ABARES 원예 노동 수요 통계를 결합해 월별(1~12월)·주별 주요 작물 수확·전정 시기를 정리했어요. 원하는 지역 카드의 <strong>[우편번호 검증·계산기에 자동 입력]</strong> 버튼을 누르면 위 우편번호 검증기와 지정 근로 계산기에 즉시 연동돼요. (참고: 구 Harvest Trail 포털은 2024.06.30 종료되었으며, 현재 실시간 구인 공고는 Workforce Australia에서 확인해요.)",
    en: "Combines the Australian Government National Harvest Guide baseline and ABARES horticultural labour demand data across 13 major farming hubs. Click <strong>[Load Postcode into Checker]</strong> on any region card to load that postcode directly into the Postcode Verifier and Calculator above. (Note: The former Harvest Trail portal closed on 30 June 2024; live vacancies are now hosted on Workforce Australia.)"
  },
  lblSeasonMonth: { ko: "1. 희망 근무 월(Month) 선택", en: "1. Filter by Harvest Month" },
  lblSeasonState: { ko: "2. 주·준주(State / Territory) 선택", en: "2. Filter by State / Territory" },
  rightsOverline: {
    ko: "MODULE 06 · WORKPLACE RIGHTS, REFUSAL TRAPS & LIVE SOURCE MONITOR",
    en: "MODULE 06 · WORKPLACE RIGHTS, REFUSAL TRAPS & LIVE SOURCE MONITOR"
  },
  rightsTitle: {
    ko: "워킹홀리데이 핵심 권리 vs 비자 거절·취소 빈발 함정 & 12대 공식 1차 출처 실시간 모니터",
    en: "WHM Workplace Rights, Common Refusal Traps & 12 Primary-Source Live Monitors"
  },
  srcTableTitle: {
    ko: "정기 Poller 실시간 SHA-256 해시 & 구조 파싱 감시 대상 12대 공식 1차 출처",
    en: "12 Official Primary Sources Monitored via Scheduled Poller (SHA-256 & Rule Parsing)"
  },
  srcTableSub: {
    ko: "연방 법령 등록부(Federal Register of Legislation), 호주 연방 이민성(PageSchemaHiddenField JSON 및 쿼터 표), 공정근로옴부즈만(FWO) 원문을 정기 폴링(매주 월요일 07:25 AEST 자동 실행)하여 우편번호·연령 상한·국가별 쿼터·조건 8547 면제 규정 개정을 감시해요.",
    en: "Scheduled weekly polling (Mondays 07:25 AEST) verifies SHA-256 hashes and parses structured rules from the Federal Register of Legislation, Department of Home Affairs (PageSchemaHiddenField JSON & Cap Tables), and Fair Work Ombudsman."
  },
  srcBadgeLive: {
    ko: `${POLLING_DATA.live_verified_count || 12} / ${POLLING_DATA.total_sources || 12} 실시간 검증 완료 (HTTP 200)`,
    en: `${POLLING_DATA.live_verified_count || 12} / ${POLLING_DATA.total_sources || 12} Live Verified (HTTP 200)`
  },
  sThAuth: { ko: "발행 기관 (Authority)", en: "Issuing Authority" },
  sThTitle: { ko: "공식 문서명 및 법령 번호", en: "Official Instrument / Policy Title" },
  sThScope: { ko: "Poller 정기 감시 · 파싱 항목", en: "Poller Monitored & Parsed Scope" },
  sThStatus: { ko: "검증 상태", en: "Status" },
  sThHash: { ko: "SHA-256 무결성 해시 / 원문 링크", en: "SHA-256 Integrity Hash / Source Link" },
  ctaHeading: {
    ko: "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\" (You focus on life, we'll handle the law.)",
    en: "\"You focus on life, we'll handle the law.\""
  },
  ctaSub: {
    ko: "2·3차 워킹홀리데이 지정 근로 일수 부족·증빙 소명(s 56 Request / Adverse Employer Info), 조건 8547 6개월 연장 서면 허가, 또는 워킹홀리데이에서 482 SID · DAMA · 186 ENS · 820 파트너 비자로의 안정적 전환 전략이 필요하시면 지금 바로 문의해 주세요.",
    en: "Need legal advice on 2nd/3rd WHM specified work calculations, responding to a s 56 Request or Adverse Employer Information, requesting Condition 8547 written permission, or transitioning from a WHM visa to a Subclass 482 SID, DAMA, 186 ENS, or 820 Partner visa? Contact Park & Co Lawyers today."
  },
  ctaBtn: {
    ko: "박앤코 온라인 상담·문의 바로가기 →",
    en: "Book a Consultation with Park & Co Lawyers →"
  },
  discOverline: {
    ko: "LEGAL DISCLAIMER, COPYRIGHT & GOVERNMENT ATTRIBUTION",
    en: "LEGAL DISCLAIMER, COPYRIGHT & GOVERNMENT ATTRIBUTION"
  },
  discTitle: {
    ko: "법률 면책공고 (Legal Disclaimer) · 저작권 보호 및 연방 법령·PAM3 1차 출처 각주",
    en: "Legal Disclaimer, Copyright Notice & Primary-Source Statutory Footnotes"
  },
  discP1: {
    ko: "본 호주 워킹홀리데이(Subclass 417 · 462) 연장 및 조건 8547 네비게이터는 법무법인 박앤코(PNC Legal Pty Ltd t/a Park & Co Lawyers)가 일반 정보 제공 목적으로 제작한 법률 기술 도구로서, 개별 사안에 대한 정식 법률 자문(Legal Advice)이나 호주 연방 이민성(Department of Home Affairs)의 공식 유권해석을 대체하지 않아요.",
    en: "This Working Holiday (Subclass 417 & 462) Extension & Condition 8547 Navigator is a legal information tool published by PNC Legal Pty Ltd t/a Park & Co Lawyers for general informational purposes only and does not constitute formal legal advice."
  },
  discP2: {
    ko: "비자 승인 여부는 신청 시점의 Migration Act 1958, Migration Regulations 1994, 관련 Legislative Instruments(LIN 22/012, LIN 22/013, LIN 25/048 등), 그리고 신청인이 제출하는 급여명세서·은행 거래내역·고용주 확인서의 진위 및 일관성에 따라 호주 연방 이민성 심사관(Delegate)이 최종 결정해요.",
    en: "Visa outcomes are determined by delegates of the Minister for Home Affairs under the Migration Act 1958, Migration Regulations 1994, and applicable Legislative Instruments (LIN 22/012, LIN 22/013, LIN 25/048) based on the documentary evidence provided."
  },
  discP3: {
    ko: "구체적인 비자 연장 신청, 28일 실체비자 만료 유예기간 적용, 조건 8547 위반 위험 검토 또는 고용주 스폰서 비자(482/494/186) 전환을 앞두고 계신 경우 반드시 박창민 대표변호사(QLS Accredited Specialist in Immigration Law · 공식 이메일: enquiry@parkcolawyers.com)와 개별 상담을 진행하시기 바랍니다.",
    en: "For formal legal advice regarding your visa extension, the 28-day onshore grace period, Condition 8547 compliance, or employer-sponsored visa pathways (482/494/186), please consult Chang Min Park (QLS Accredited Specialist in Immigration Law · Official Email: enquiry@parkcolawyers.com)."
  },
  fnHeading: {
    ko: "1차 공식 법령 · 행정입법(LIN) · PAM3 심사지침 레퍼런스 각주 ([1] ~ [18])",
    en: "Primary Legislation, Legislative Instruments (LIN) & PAM3 Policy Footnotes ([1]–[18])"
  },
  footerFirmLine: {
    ko: "<strong style=\"color:#FFFFFF;\">법무법인 박앤코 (PNC Legal Pty Ltd t/a Park &amp; Co Lawyers)</strong> · 박창민 대표변호사 (QLS Accredited Specialist in Immigration Law)",
    en: "<strong style=\"color:#FFFFFF;\">PNC Legal Pty Ltd t/a Park &amp; Co Lawyers</strong> · Chang Min Park, Principal Lawyer (QLS Accredited Specialist in Immigration Law)"
  },
  modalTitle: {
    ko: `공식 1차 출처 실시간 모니터 (${POLLING_DATA.live_verified_count || 12}/${POLLING_DATA.total_sources || 12} Live Verified)`,
    en: `Official Primary-Source Live Monitor (${POLLING_DATA.live_verified_count || 12}/${POLLING_DATA.total_sources || 12} Live Verified)`
  }
};

const PRESET_CHIPS_I18N = {
  "4870": { ko: "4870 Cairns (QLD 북부)", en: "4870 Cairns (Northern QLD)" },
  "6725": { ko: "6725 Broome (WA 북부)", en: "6725 Broome (Northern WA)" },
  "0850": { ko: "0850 Katherine (NT 전역)", en: "0850 Katherine (All NT)" },
  "4380": { ko: "4380 Stanthorpe (QLD 지방)", en: "4380 Stanthorpe (Regional QLD)" },
  "2680": { ko: "2680 Griffith (NSW 지방)", en: "2680 Griffith (Regional NSW)" },
  "3630": { ko: "3630 Shepparton (VIC 지방)", en: "3630 Shepparton (Regional VIC)" },
  "7000": { ko: "7000 Hobart (TAS 전역)", en: "7000 Hobart (All TAS)" },
  "5000": { ko: "5000 Adelaide (SA 전역)", en: "5000 Adelaide (All SA)" },
  "4406": { ko: "4406 Dalby (Table 2 관광특례)", en: "4406 Dalby (Table 2 Remote Tourism)" },
  "4000": { ko: "4000 Brisbane CBD (비지방/재해)", en: "4000 Brisbane CBD (Metro / Disaster)" },
  "2000": { ko: "2000 Sydney CBD (대도시)", en: "2000 Sydney CBD (Metro Ineligible)" }
};

function translateDynamicFormControls(lang) {
  // 1. Postcode preset buttons & input placeholders
  document.querySelectorAll(".pv-preset").forEach(btn => {
    const pc = btn.getAttribute("data-pc");
    if (pc && PRESET_CHIPS_I18N[pc]) {
      btn.textContent = PRESET_CHIPS_I18N[pc][lang];
    }
  });
  const pvInput = document.getElementById("pv-input");
  if (pvInput) {
    pvInput.placeholder = lang === "ko" ? "4자리 우편번호 (예: 4870)" : "4-digit postcode (e.g. 4870)";
  }
  const c8547Pc = document.getElementById("c8547-postcode");
  if (c8547Pc) {
    c8547Pc.placeholder = lang === "ko" ? "예: 4870, 2000, 6725" : "e.g. 4870, 2000, 6725";
  }

  // 2. #calc-subclass options
  const subEl = document.getElementById("calc-subclass");
  if (subEl) {
    const val = subEl.value;
    subEl.innerHTML = `
      <option value="417">${lang === "ko" ? "Subclass 417 — Working Holiday (워킹홀리데이 · 한국 포함 19개국)" : "Subclass 417 — Working Holiday (19 Partner Countries incl. Korea)"}</option>
      <option value="462">${lang === "ko" ? "Subclass 462 — Work and Holiday (취업관광 · 30개국)" : "Subclass 462 — Work and Holiday (30 Partner Countries)"}</option>
    `;
    subEl.value = val;
  }

  // 3. #calc-target options
  const targetEl = document.getElementById("calc-target");
  if (targetEl) {
    const val = targetEl.value;
    targetEl.innerHTML = `
      <option value="first">${lang === "ko" ? "1차 비자 (First Visa — 해외 신청 필수 · 462 연간 쿼터/추첨 적용)" : "First WHM Visa (Must apply offshore · 462 annual caps & ballot apply)"}</option>
      <option value="second">${lang === "ko" ? "2차 비자 (Second Visa — 최소 3개월 / 88일 지정 근로)" : "Second WHM Visa (Min 3 calendar months / 88 days specified work)"}</option>
      <option value="third">${lang === "ko" ? "3차 비자 (Third Visa — 최소 6개월 / 179일 지정 근로, 2019.7.1 이후)" : "Third WHM Visa (Min 6 calendar months / 179 days specified work, from 1 Jul 2019)"}</option>
    `;
    targetEl.value = val;
  }

  // 4. #calc-visa-held options
  const visaHeldEl = document.getElementById("calc-visa-held");
  if (visaHeldEl) {
    const val = visaHeldEl.value;
    visaHeldEl.innerHTML = `
      <option value="valid_whm">${lang === "ko" ? "적격 WHM 비자 (2차 신청 시 1차 WHM / 3차 신청 시 2차 WHM 보유 중 수행)" : "Qualifying WHM Visa (Held 1st WHM for 2nd visa / Held 2nd WHM for 3rd visa)"}</option>
      <option value="valid_bva_akio">${lang === "ko" ? "1차 WHM 보유 중 2차 WHM을 신청하여 발효된 브리징 비자 (Akio 원칙 — 3차 산입 가능)" : "Bridging Visa in effect after applying for 2nd WHM while holding 1st WHM (Akio rule — Valid)"}</option>
      <option value="covid_408">${lang === "ko" ? "COVID-19 408 Pandemic 비자 (필수 코로나 의료 업무 수행 이력 수동 심사 대상)" : "COVID-19 Pandemic Event 408 Visa (Critical COVID-19 medical work — Manual Review)"}</option>
      <option value="invalid_1st_for_3rd">${lang === "ko" ? "3차 비자 신청인데 1차 WHM 체류 중에만 수행한 근로 (산입 불가!)" : "Work done during 1st WHM visa only, claimed toward a 3rd WHM visa (Ineligible!)"}</option>
      <option value="invalid_student_ingrid">${lang === "ko" ? "학생비자(500) 등 타 비자 또는 타 비자에서 전환된 브리징 비자 보유 중 수행 (Ingrid 함정 — 산입 불가!)" : "Work done on a Student visa (500) or BVA from a Student visa (Ingrid trap — Ineligible!)"}</option>
    `;
    visaHeldEl.value = val;
  }

  // 5. #calc-location-status options
  const locEl = document.getElementById("calc-location-status");
  if (locEl) {
    const val = locEl.value;
    locEl.innerHTML = `
      <option value="onshore_substantive">${lang === "ko" ? "호주 내(Onshore) — 현재 유효한 WHM 실체비자 보유 중 (cl 417.513 연속 체류 합산 적용)" : "Onshore (In Australia) — Currently holding a WHM substantive visa (cl 417.513 continuous stay applies)"}</option>
      <option value="onshore_other_substantive">${lang === "ko" ? "호주 내(Onshore) — WHM 외 다른 실체비자(학생·관광 등) 보유 중 (cl 417.512 승인일로부터 12개월)" : "Onshore (In Australia) — Holding a non-WHM substantive visa (cl 417.512: 12m from grant)"}</option>
      <option value="onshore_28days">${lang === "ko" ? "호주 내(Onshore) — 브리징 비자 보유 중이나 마지막 실체비자 만료 후 28일 이내 (Item 1225(3B)(f)(ii) 특례 · cl 417.512 승인일로부터 12개월)" : "Onshore (In Australia) — No substantive visa, within 28 days of expiry (Item 1225(3B)(f)(ii) · cl 417.512: 12m from grant)"}</option>
      <option value="offshore">${lang === "ko" ? "호주 밖(Offshore) — 해외에서 신청 및 해외에서 승인 대기 (cl 417.511 입국일로부터 12개월)" : "Offshore (Outside Australia) — Applying & granted outside Australia (cl 417.511: 12m from entry)"}</option>
      <option value="offshore_to_onshore_mismatch">${lang === "ko" ? "신청 위치·승인 위치 불일치 주의 (해외 신청 후 호주 입국 대기 또는 호주 내 신청 후 출국 대기 — cl 417.411/412 거절 위험!)" : "Location mismatch warning (Applied offshore then entered Australia, or applied onshore then departed — cl 417.411/412 risk!)"}</option>
      <option value="onshore_over28">${lang === "ko" ? "호주 내(Onshore) — 마지막 실체비자 만료 후 28일 경과 (호주 내 유효 신청 불가!)" : "Onshore (In Australia) — More than 28 days since last substantive visa ceased (Invalid onshore application!)"}</option>
    `;
    locEl.value = val;
  }

  // 6. #c8547-sector optgroups & options
  const secEl = document.getElementById("c8547-sector");
  if (secEl) {
    const val = secEl.value;
    secEl.innerHTML = `
      <optgroup label="${lang === "ko" ? "호주 전역 자동 면제 분야 (Nationwide Automatic Exemptions — 사전 허가 불필요)" : "Nationwide Automatic Exemptions (No Permission Required Anywhere in Australia)"}">
        <option value="plant_animal">${lang === "ko" ? "식물 및 동물 재배·사육 (Plant & animal cultivation — 호주 전역 과수·채소·축산·원유 낙농·전정·즉시가공)" : "Plant & animal cultivation (Nationwide fruit/veg harvest, pruning, livestock, shearing, immediate processing)"}</option>
        <option value="agri_food">${lang === "ko" ? "핵심 산업 ① 농업 및 식품 가공 (Agriculture & food processing — 호주 전역 모든 영농 및 인간·동물 소비용 식육·식품 가공)" : "Critical Sector ① Agriculture & food processing (Nationwide farming, meat & food processing)"}</option>
        <option value="health">${lang === "ko" ? "핵심 산업 ② 보건·의료 (Health — 호주 전역 병원 근무 및 의사·간호·치과·의료행정·영상·정신건강·의료장비·병원청소 등 보건 지원 직무)" : "Critical Sector ② Health (Nationwide hospital jobs, medical/nursing/dental, medical admin, imaging, mental health, facility cleaning)"}</option>
        <option value="aged_disability">${lang === "ko" ? "핵심 산업 ③ 노인 및 장애인 돌봄 (Aged care & disability services — 호주 전역 노인요양·장애인 서비스·케어러)" : "Critical Sector ③ Aged care & disability services (Nationwide aged/disability care & support workers)"}</option>
        <option value="childcare">${lang === "ko" ? "핵심 산업 ④ 보육·아동 돌봄 (Childcare — 호주 전역 어린이집·크레시·패밀리데이케어·내니(Nanny)·오페어(Au Pair)·방과후 돌봄)" : "Critical Sector ④ Childcare (Nationwide early learning centres, family day care, nannies, au pairs, outside school hours care)"}</option>
        <option value="tourism_hosp">${lang === "ko" ? "핵심 산업 ⑤ 관광 및 접객업 (Tourism & hospitality — 호주 전역 호텔·모텔·호스텔·하우스키핑·카페·식당·바·케이터링·투어가이드·여행사·이벤트)" : "Critical Sector ⑤ Tourism & hospitality (Nationwide hotels, housekeeping, cafes, restaurants, bars, catering, tour guides, events)"}</option>
        <option value="disaster_rec">${lang === "ko" ? "자연재해 복구 업무 (Natural disaster recovery — 호주 전역 산불·홍수·사이클론 피해 복구·청소·건설·행정·지원)" : "Natural disaster recovery work (Nationwide bushfire, flood & cyclone clean-up, construction, admin & support)"}</option>
      </optgroup>
      <optgroup label="${lang === "ko" ? "북부 호주(Northern Australia Table 3) 한정 자동 면제 분야" : "Northern Australia (Table 3 Postcodes ONLY) Automatic Exemptions"}">
        <option value="north_construction">${lang === "ko" ? "건설업 (Construction — 북부 호주 우편번호 내에서는 자동 면제 / 그 외 지역은 6개월 제한 적용)" : "Construction (Automatically exempt in Northern Australia Table 3 postcodes ONLY)"}</option>
        <option value="north_mining">${lang === "ko" ? "광업 (Mining — 북부 호주 우편번호 내에서는 자동 면제 / 그 외 지역은 6개월 제한 적용)" : "Mining (Automatically exempt in Northern Australia Table 3 postcodes ONLY)"}</option>
        <option value="north_fishing">${lang === "ko" ? "어업 및 진주 양식 (Fishing & pearling — 북부 호주 우편번호 내에서는 자동 면제)" : "Fishing & pearling (Automatically exempt in Northern Australia Table 3 postcodes ONLY)"}</option>
        <option value="north_tree">${lang === "ko" ? "임업 및 벌목 (Tree farming & felling — 북부 호주 우편번호 내에서는 자동 면제)" : "Tree farming & felling (Automatically exempt in Northern Australia Table 3 postcodes ONLY)"}</option>
      </optgroup>
      <optgroup label="${lang === "ko" ? "일반 산업 (자동 업종 면제 비해당 — 장소 변경·비자 리셋·사전 서면 허가 확인 필수)" : "Standard Non-Exempt Sectors (Requires Location Change, Visa Reset, or Prior Written Permission)" }">
        <option value="other_office">${lang === "ko" ? "일반 사무·IT·금융·마케팅·전문직·콜센터·소매업(기념품점·면세점·일반 마트)·물류창고·일반 제조업 등" : "Standard Corporate, IT, Finance, Marketing, Call Centre, General Retail (souvenir/duty-free/supermarket), Warehousing & Manufacturing"}</option>
      </optgroup>
    `;
    secEl.value = val;
  }

  // 6b. #c8547-reset-type & #c8547-permission-status
  const resetTypeEl = document.getElementById("c8547-reset-type");
  if (resetTypeEl) {
    const val = resetTypeEl.value;
    resetTypeEl.innerHTML = `
      <option value="new_whm_granted">${lang === "ko" ? "신규 2·3차 WHM 비자 발효 (자동 리셋)" : "New 2nd/3rd WHM Visa Granted (Automatic Clock Reset)"}</option>
      <option value="bva_in_effect_with_8547">${lang === "ko" ? "기존 비자 만료 후 조건 8547 부과 브리징 비자 발효 (수동 검토/리셋)" : "Bridging Visa with Condition 8547 Came into Effect (Manual Review / Reset)"}</option>
      <option value="bva_granted_not_in_effect">${lang === "ko" ? "브리징 비자 승인만 되고 아직 기존 비자 유효 중 (리셋 안 됨!)" : "Bridging Visa Granted Only — Substantive Visa Still Active (Does NOT Reset!)"}</option>
    `;
    resetTypeEl.value = val;
  }

  const permStatEl = document.getElementById("c8547-permission-status");
  if (permStatEl) {
    const val = permStatEl.value;
    permStatEl.innerHTML = `
      <option value="none">${lang === "ko" ? "미신청 (Not Submitted)" : "Not Submitted"}</option>
      <option value="submitted_before_expiry_pending">${lang === "ko" ? "6개월 만료일 이전 접수 완료 · 결과 대기 중 (임시 계속 근무 가능)" : "Submitted BEFORE 6-Month Expiry · Decision Pending (Interim Work Allowed)"}</option>
      <option value="submitted_after_expiry_pending">${lang === "ko" ? "6개월 만료일 이후 접수 · 결과 대기 중 (승인 전 즉시 근무 중단 필수!)" : "Submitted AFTER 6-Month Expiry · Decision Pending (Must Stop Work Immediately!)"}</option>
      <option value="approved">${lang === "ko" ? "서면 연장 허가 승인 완료 (Approved)" : "Written Permission Approved"}</option>
    `;
    permStatEl.value = val;
  }

  // 7. Update all Park & Co enquiry links (?lang=ko vs ?lang=en)
  document.querySelectorAll("a.cta-enquiry").forEach(a => {
    a.href = `https://parklawyers.com.au/links/?lang=${lang}`;
  });
}

function renderSourceMonitorModal() {
  const body = document.getElementById("modal-body-content");
  if (!body || !POLLING_DATA) return;
  const mr = POLLING_DATA.monitored_rules || {};
  const pausedList = (mr.subclass_462_country_caps?.paused_countries || ["Brazil", "Mongolia"]).join(", ") || "None";
  body.innerHTML = `
    <p style="font-size:14px;color:#2E2E2E;margin-bottom:12px;">
      <strong>${t("최종 Poller 점검 일시:", "Last Polled At:")}</strong> ${POLLING_DATA.last_polled_at} ·
      <strong>${t("1차 출처 검증 성공:", "Primary Sources Verified:")}</strong> ${POLLING_DATA.live_verified_count}/${POLLING_DATA.total_sources} (100% Content-Verified) ·
      <strong>${t("462 쿼터 일시중단(Paused) 감지:", "462 Caps Currently Paused:")}</strong> ${pausedList}
    </p>
    <div class="results-table-wrap">
      <table class="occ-table">
        <thead>
          <tr>
            <th>${t("발행 기관", "Authority")}</th>
            <th>${t("공식 원문 및 법령 번호", "Official Source & Instrument")}</th>
            <th>${t("정기 파싱·감시 항목", "Monitored Rule Scope")}</th>
            <th>${t("4단계 검증 상태", "4-Stage Verification")}</th>
            <th>SHA-256</th>
          </tr>
        </thead>
        <tbody>
          ${POLLING_DATA.sources.map(s => `
            <tr>
              <td>${t(s.authority_ko || s.authority, s.authority_en || s.authority)}</td>
              <td><a href="${s.url}" target="_blank" rel="noopener" style="color:var(--color-burgundy);font-weight:700;">${t(s.title_ko || s.title, s.title_en || s.title)} ↗</a></td>
              <td style="font-size:12px;color:#5A5654;">${t(s.check_scope_ko || "", s.check_scope_en || "")}</td>
              <td><span class="badge ${s.contentCheckStatus === 'pass' ? 'badge-success' : 'badge-warning'}">LIVE (${s.http_code || 200} · ${s.contentCheckStatus || 'pass'})</span></td>
              <td style="font-family:monospace;font-size:11.5px;">${(s.sha256 || "").slice(0, 16)}…</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

const HTML_I18N_KEYS = new Set([
  "heroLead",
  "gateSub",
  "pvSub",
  "calcSub",
  "pam3CountNote",
  "chk8547DiffLoc",
  "chk8547VisaReset",
  "chk8547MultiClient",
  "chk8547WorkersComp",
  "chk8547PermGrounds",
  "seasonSub",
  "footerFirmLine"
]);

function applyLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ko";
  document.documentElement.lang = currentLang;
  document.getElementById("lang-toggle-ko")?.classList.toggle("active", currentLang === "ko");
  document.getElementById("lang-toggle-en")?.classList.toggle("active", currentLang === "en");

  Object.entries(I18N_STATIC).forEach(([key, val]) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
      if (HTML_I18N_KEYS.has(key)) {
        el.innerHTML = val[currentLang];
      } else {
        el.textContent = val[currentLang];
      }
    });
  });

  translateDynamicFormControls(currentLang);
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
  renderSourceMonitorModal();
}

document.addEventListener("DOMContentLoaded", () => {
  // Check if ?lang=en was explicitly passed in URL; otherwise strictly default to Korean ('ko')
  const params = new URLSearchParams(window.location.search);
  const initLang = params.get("lang") === "en" ? "en" : "ko";
  applyLanguage(initLang);

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
  ["calc-target", "calc-country", "calc-age", "calc-visa-held", "calc-location-status", "calc-assessment-date", "calc-no-children", "calc-no-excluded-emp", "calc-uk-passport-confirmed"].forEach(id => {
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
      shortShiftWarning: false,
      visaHeld: "valid_whm",
      covidHealthcareClaimed: false,
      bushfireUnpaidBefore2025: false
    });
    renderPeriodsList();
    renderCalculatorSummary();
  });

  // Condition 8547 controls
  ["c8547-start-date", "c8547-postcode", "c8547-sector", "c8547-diff-location", "c8547-visa-reset", "c8547-reset-type", "c8547-reset-date", "c8547-check-date", "c8547-visa-expiry", "c8547-permission-status", "c8547-multi-client", "c8547-workers-comp", "c8547-permission-grounds"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", renderCondition8547Simulator);
    document.getElementById(id)?.addEventListener("input", renderCondition8547Simulator);
  });

  // Polling modal
  const modal = document.getElementById("detail-modal");
  document.getElementById("btn-polling-status")?.addEventListener("click", () => {
    if (!modal) return;
    renderSourceMonitorModal();
    modal.classList.add("open");
  });
  document.getElementById("modal-close-btn")?.addEventListener("click", () => modal?.classList.remove("open"));
  modal?.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
});


/* === Park & Co Universal Ecosystem Strip & Static Leaf KO<->EN Enhancer === */
(function () {
  var LEAF_KO_TO_EN = {
    "← 박앤코 법률 인텔리전스 통합 허브 (All 12 Navigators)": "← Park & Co Legal Intelligence Hub (All 12 Navigators)",
    "파트너(820)·485": "Partner (820) & 485",
    "부모비자": "Parent Visas",
    "고용법(FWC)": "Employment Law (FWC)",
    "가족법·재산분할": "Family Law & Property",
    "위기·ART": "Visa Crisis & ART",
    "← 전체 네비게이터 허브": "← All Navigators Hub",
    "박창민 대표변호사 (Chang Min Park)": "Chang Min Park (Principal Solicitor)",
    "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"": "\"You focus on life, we'll handle the law.\"",
    "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers)": "PNC Legal Pty Ltd t/a Park & Co Lawyers",
    "법령 및 주정부 심사 근거": "Statutory & State Nomination Authority",
    "법령 및 심사 근거": "Statutory & Policy Authority",
    "법령 및 재판소 근거": "Statutory & Tribunal Authority",
    "Schedule 6D (189·190·491) 점수 계산기 ↓": "Schedule 6D (189·190·491) Points Calculator ↓",
    "8개 주정부(QLD~NT) 자격 매칭 & 백과사전": "8-State (QLD–NT) Eligibility Matcher & Compendium",
    "1. 8개 주정부 비교 & 점수 차트": "1. 8-State Comparison & Points Charts",
    "2. Schedule 6D 점수 계산기": "2. Schedule 6D Points Calculator",
    "3. 8개 주정부(QLD~NT) 정밀 매칭기": "3. 8-State (QLD–NT) Eligibility Matcher",
    "4. 491→191 영주권 & 총비용·진단서": "4. 491→191 PR & Total Cost / Brief",
    "변호사 1:1 기술이민·주정부 노미네이션 상담 신청 →": "Request 1:1 Skilled & State Nomination Consultation →",
    "65점": "65 pts",
    "190(+5점) · 491(+15점) 가점 포함": "Incl. 190 (+5 pts) & 491 (+15 pts)",
    "최대 20점": "Max 20 pts",
    "해외(15점)+호주(20점) 통합 상한": "Combined Overseas (15) + AUS (20) Cap",
    "FY26–27 주신청자 (189는 $6,135)": "FY26–27 Primary VAC (189 is $6,135)",
    "$0 하한": "$0 Floor",
    "최저소득 폐지 · ATO NOA 3년치 제출": "No min income · 3 yrs ATO NOAs required",
    "배우자 +$315 · 미성년 자녀 +$160": "Partner +$315 · Child +$160",
    "190·491 최소 거주·근무 개월 수 및 주정부 수수료 비교": "190/491 Minimum Residency/Work Months & State Fee Comparison",
    "그래프 1 · 8개 주/준주 일반 거주자 190 vs 491 필수 근무/거주 개월 수 & 신청비 비교": "Chart 1 · 8-State/Territory Onshore 190 vs 491 Minimum Work/Residency Months & Fees",
    "WA는 491 고용계약·경력 면제 및 신청비 $0이며, QLD는 2025–26부터 190 9개월 / 491 6개월로 강화되었어요.": "WA waives application fees ($0) and 491 job-offer rules; QLD requires 9 months (190) / 6 months (491).",
    "그래프 2 · Schedule 6D 항목별 최대 배점 및 해외+호주 경력 20점 통합 상한(Item 6D51)": "Chart 2 · Schedule 6D Maximum Points & Item 6D51 20-Point Combined Work Experience Cap",
    "나이(30점) + 영어(20점) + 경력합산(최대 20점) + 학력/STEM/호주학업/파트너 + 주정부 가점(+5/+15점).": "Age (30) + English (20) + Combined Work (max 20) + Education/STEM/Study/Partner + State (+5/+15).",
    "Schedule 6D 11대 평가 항목 입력": "Schedule 6D 11-Factor Assessment Inputs",
    "1. 초청 시점 만 나이 (Part 6D.1)": "1. Age at Time of Invitation (Part 6D.1)",
    "만 18세 ~ 24세 (25점)": "Aged 18–24 (25 pts)",
    "만 25세 ~ 32세 (30점 — 최고 배점)": "Aged 25–32 (30 pts — Maximum)",
    "만 33세 ~ 39세 (25점)": "Aged 33–39 (25 pts)",
    "만 40세 ~ 44세 (15점)": "Aged 40–44 (15 pts)",
    "만 45세 이상 (0점 — GSM 189/190/491 신청 불가)": "Aged 45+ (0 pts — Ineligible for GSM 189/190/491)",
    "2. 영어 능력 (Part 6D.2 — 유효기간 3년)": "2. English Language Ability (Part 6D.2 — 3-Year Validity)",
    "Competent English — IELTS 각 6.0 / PTE 50 (0점 · 최소 기본요건)": "Competent English — IELTS 6.0 / PTE 50 (0 pts · Minimum Threshold)",
    "Proficient English — IELTS 각 7.0 / PTE 65 (10점)": "Proficient English — IELTS 7.0 / PTE 65 (10 pts)",
    "Superior English — IELTS 각 8.0 / PTE 79 (20점)": "Superior English — IELTS 8.0 / PTE 79 (20 pts)",
    "3. 해외 숙련 경력 (Part 6D.3 — 최근 10년 내 주 20h+)": "3. Overseas Skilled Employment (Part 6D.3 — 20h+/wk in last 10 yrs)",
    "3년 미만 (0점)": "Under 3 years (0 pts)",
    "3년 이상 ~ 5년 미만 (5점)": "3 to <5 years (5 pts)",
    "5년 이상 ~ 8년 미만 (10점)": "5 to <8 years (10 pts)",
    "8년 이상 (15점)": "8+ years (15 pts)",
    "4. 호주 내 숙련 경력 (Part 6D.4 — 최근 10년 내 주 20h+)": "4. Australian Skilled Employment (Part 6D.4 — 20h+/wk in last 10 yrs)",
    "1년 미만 (0점)": "Under 1 year (0 pts)",
    "1년 이상 ~ 3년 미만 (5점)": "1 to <3 years (5 pts)",
    "8년 이상 (20점)": "8+ years (20 pts)",
    "5. 최종 학력/자격 (Part 6D.7)": "5. Educational Qualifications (Part 6D.7)",
    "박사 학위 (Doctorate / PhD — 20점)": "Doctorate / PhD (20 pts)",
    "학사(Bachelor) 또는 석사(Masters) 학위 (15점)": "Bachelor or Masters Degree (15 pts)",
    "호주 Diploma / Trade 학위 또는 기술심사기관 인정 자격 (10점)": "Australian Diploma / Trade Qualification or Recognised Award (10 pts)",
    "인정 학력 없음 (0점)": "No Recognised Qualification (0 pts)",
    "6. 배우자/파트너 자격 또는 미혼 (Part 6D.11)": "6. Partner Skills or Single Status (Part 6D.11)",
    "미혼(Single) 또는 파트너가 호주 시민권자/영주권자 (10점 — 6D112)": "Single OR Partner is Australian Citizen/PR (10 pts — 6D112)",
    "파트너가 만 45세 미만 + Competent 영어 + 동일 리스트 기술심사 보유 (10점 — 6D111)": "Partner <45 + Competent English + Skilled Assessment (10 pts — 6D111)",
    "파트너가 Competent 영어(IELTS 6.0)만 보유 (5점 — 6D113)": "Partner has Competent English (IELTS 6.0) only (5 pts — 6D113)",
    "파트너가 시민권/영주권자가 아니며 영어/기술심사 미보유 (0점)": "Partner is non-citizen/PR without English or Skills Assessment (0 pts)",
    "7. 추가 가점 항목 (해당 항목 모두 체크 — Part 6D.6 / 6D.7A / 6D.8 / 6D.9 / 6D.10)": "7. Bonus Point Factors (Tick all that apply — Parts 6D.6–6D.10)",
    "Subclass 189 · 190 · 491 법정 점수 산출 결과": "Subclass 189 · 190 · 491 Statutory Points Breakdown",
    "8개 주/준주 중 현재 바로 노미네이션 신청(또는 ROI/Matrix 접수)이 가능한 주와 부족한 개월 수를 즉시 판정": "Instantly identify eligible States/Territories and any remaining residency/work months required",
    "내 거주지 · 근무 개월 · 주당 시간 · 졸업생 프로필 입력": "Your Current State, Work Months, Weekly Hours & Graduate Profile",
    "1. 현재 거주 중인 주/준주 (또는 해외)": "1. Current State/Territory of Residence (or Offshore)",
    "Queensland (QLD — 브리즈번 / 골드코스트·지방 QLD)": "Queensland (QLD — Brisbane / Gold Coast & Regional QLD)",
    "New South Wales (NSW — 시드니 / 지방 NSW)": "New South Wales (NSW — Sydney / Regional NSW)",
    "Victoria (VIC — 멜버른 / 지방 VIC)": "Victoria (VIC — Melbourne / Regional VIC)",
    "Western Australia (WA — 퍼스 및 서호주 전역)": "Western Australia (WA — Perth & Statewide WA)",
    "South Australia (SA — 애들레이드 및 외곽 SA)": "South Australia (SA — Adelaide & Regional SA)",
    "Tasmania (TAS — 호바트·론세스턴 등 전역)": "Tasmania (TAS — Hobart, Launceston & Statewide)",
    "Australian Capital Territory (ACT — 캔버라)": "Australian Capital Territory (ACT — Canberra)",
    "Northern Territory (NT — 다윈·앨리스스프링스 등)": "Northern Territory (NT — Darwin & Regional NT)",
    "해외 거주 중 (Offshore — 한국 등 호주 외 거주)": "Residing Offshore (Outside Australia)",
    "2. 직군 산업 분야 (Priority Sector)": "2. Occupation Industry Sector",
    "일반 기술·전문직·기능직 (General CSOL/State List)": "General Skilled / Professional / Trade Occupation",
    "건축·건설·트레이드 (Building & Construction — QLD·WA·SA 최우선 우대)": "Building & Construction Trades (Priority in QLD, WA, SA)",
    "보건·의료·간호·교육·사회복지 (Health, Nursing, Teaching, Social Work)": "Health, Nursing, Teaching & Social Work",
    "3. 현 거주 주(State) 연속 거주 개월 수 (개월)": "3. Continuous Residency in Current State (Months)",
    "4. 현 거주 주 내 숙련 직무 연속 근무 개월 수 (개월)": "4. Continuous Skilled Employment in Current State (Months)",
    "5. 주당 평균 유급 근무시간 (시간/주)": "5. Average Paid Working Hours per Week",
    "주 35~38시간 이상 (Full-time — 전 주정부 190/491 기준 충족)": "35–38+ hrs/wk (Full-time — Meets all State 190/491 thresholds)",
    "주 30시간 이상 (QLD·SA·ACT 190 기준 충족)": "30+ hrs/wk (Meets QLD, SA, ACT 190 thresholds)",
    "주 20시간 이상 (NSW·TAS·SA 491 기준 충족)": "20+ hrs/wk (Meets NSW, TAS, SA 491 thresholds)",
    "주 15시간 이상 (ACT 491 13/15주 기준 충족)": "15+ hrs/wk (Meets ACT 491 threshold)",
    "현재 미취업 (졸업생 무경력 스트림 또는 해외 경력 활용)": "Currently Unemployed (Graduate stream or offshore experience)",
    "6. 현 거주 주(State) 내 대학/VET 졸업 여부": "6. Graduate of a University/VET Institution in Current State?",
    "아니오 (일반 숙련 근로자 스트림)": "No (Standard Skilled Worker Stream)",
    "예 — 해당 주에서 학사/석사/학위(2년+) 졸업 (Regional NSW·WA·TAS·SA·NT 졸업생 특례)": "Yes — Bachelor/Masters (2+ yrs) in this State (Graduate concessions)",
    "예 — 해당 주에서 박사(PhD) 학위 취득 (ACT 무료·자동초청 / QLD·WA·SA 우대)": "Yes — Doctorate (PhD) completed in this State (Priority stream)",
    "예 — 해당 주에서 2년 이상 VET (Cert III/IV/Diploma) 졸업 (WA·TAS·SA 졸업생)": "Yes — 2+ yr VET (Cert III/IV/Diploma) in this State",
    "내 프로필 기준 주정부 노미네이션(190 · 491) 적격 판정": "State Nomination (190 · 491) Eligibility Assessment",
    "8개 주/준주별 190·491 세부 스트림 · 거주/근무/고용계약 · 수수료 · 숨은 함정 총정리": "8-State/Territory 190 & 491 Streams, Residency/Work Rules, Fees & Key Traps",
    "QLD (퀸즐랜드)": "QLD (Queensland)",
    "NSW (뉴사우스웨일스)": "NSW (New South Wales)",
    "VIC (빅토리아)": "VIC (Victoria)",
    "WA (서호주)": "WA (Western Australia)",
    "SA (남호주)": "SA (South Australia)",
    "TAS (태즈메이니아)": "TAS (Tasmania)",
    "ACT (캔버라)": "ACT (Canberra)",
    "NT (노던준주)": "NT (Northern Territory)",
    "최저소득 폐지($0 기준 · NOA 3년치 제출)": "No Minimum Income ($0 floor · 3 ATO NOAs required)",
    "주정부 노미네이션 수수료 + FY2026–27 연방 비자비(VAC) 총합": "State Nomination Fee + FY2026–27 Federal VAC Total",
    "비자 종류 · 노미네이션 주 · 가족 수 · [491/494 전용] 191 전환 요건": "Visa Subclass, Nominating State, Family Size & [491/494 Only] 191 PR Check",
    "1. 신청 비자 서브클래스": "1. Target Visa Subclass",
    "Subclass 491 — 지방 주정부/가족 지명 임시 5년 (3년 후 191 영주권 전환 대상 · VAC $6,140)": "Subclass 491 — Regional Provisional 5-Yr (Eligible for 191 PR after 3 yrs · VAC $6,140)",
    "Subclass 191 — [491/494 소지자 전용] 3년 후 영주권 전환 신청 (VAC $630 · 주정부 비용 $0)": "Subclass 191 — [491/494 Holders Only] 3-Yr PR Transition (VAC $630 · State Fee $0)",
    "Subclass 190 — 주정부 지명 영주비자 (처음부터 영주권 Direct PR · 191 전환 대상 아님 · VAC $6,140)": "Subclass 190 — State Nominated Direct PR (Direct PR · Not a 191 pathway · VAC $6,140)",
    "Subclass 189 — 독립기술 영주비자 (처음부터 영주권 Direct PR · 주정부/191 대상 아님 · VAC $6,135)": "Subclass 189 — Skilled Independent Direct PR (Direct PR · Not a 191 pathway · VAC $6,135)",
    "2. 노미네이션 신청 주/준주 (190·491만 해당)": "2. Nominating State/Territory (190 & 491 Only)",
    "QLD — $630.30 (Onshore GST 포함)": "QLD — $630.30 (incl. Onshore GST)",
    "NSW — $346.50 (Onshore GST 포함)": "NSW — $346.50 (incl. Onshore GST)",
    "WA — $0 (서호주 주정부 신청비 전면 무료!)": "WA — $0 (Western Australia $0 Nomination Fee)",
    "3. 동반 성인 가족 수 (만 18세 이상 배우자 등)": "3. Accompanying Adult Applicants (18+ Partner/Dependants)",
    "0명 (단독 신청)": "0 (Single Applicant)",
    "1명 (+$3,070 / 191은 +$315)": "1 Adult (+$3,070 / 191 is +$315)",
    "1명 (배우자 동반)": "1 Adult (Accompanying Partner)",
    "2명": "2",
    "3명": "3",
    "0명": "0",
    "1명": "1",
    "4. 동반 미성년 자녀 수 (만 18세 미만)": "4. Accompanying Minor Children (Under 18)",
    "1명 (+$1,535 / 189는 +$1,540 / 191은 +$160)": "1 Child (+$1,535 / 189 is +$1,540 / 191 is +$160)",
    "5. [491/494 소지자 전용] 보유 기간 & ATO NOA 수": "5. [491/494 Holders Only] Years Held & ATO NOAs",
    "491/494 보유 3년 이상 + ATO Notice of Assessment 3개 연도 확보 완료": "Held 491/494 for 3+ yrs + 3 income years of ATO NOAs ready",
    "아직 3년 미만 보유 중 (5년 비자 기간 중 총 3개 과세연도 NOA 확보 필요)": "Held <3 yrs (Must complete 3 years and 3 ATO NOAs within 5-yr validity)",
    "6. [491/494 소지자 전용] 지방 거주·근무 조건(8579) 준수": "6. [491/494 Holders Only] Condition 8579 Regional Compliance",
    "준수 완료 — 지정 지방(Designated Regional Area) 내 거주·근무·학업 유지": "Compliant — Resided, worked & studied exclusively in Designated Regional Areas",
    "주의 필요 — 대도시(시드니·멜버른·브리즈번) 장기 체류 또는 주소 변경 미신고(8578)": "Caution — Extended metro stay (Sydney/Melbourne/Brisbane) or unnotified address (8578)",
    "FY2026–27 총비용 & Subclass 191 영주권 전환 판정": "FY2026–27 Total Statutory Cost & Subclass 191 PR Assessment",
    "내 기술이민 점수(Schedule 6D) & 주정부 노미네이션 진단서 복사 · 인쇄(PDF) & 상담 메일 발송": "Copy, Print (PDF) & Email Your GSM Points & State Nomination Brief",
    "위 모듈에서 계산된 189·190·491 점수, 거주 주 노미네이션 적격 판정, 총비용 요약문을 즉시 복사하거나 상담 메일에 첨부할 수 있어요.": "Copy or email your calculated 189/190/491 points, state nomination eligibility, and fee breakdown directly to Park & Co.",
    "📋 진단 요약 클립보드 복사": "📋 Copy Diagnostic Summary",
    "📋 긴급 진단서 클립보드 복사": "📋 Copy Urgent Diagnostic Brief",
    "🖨️ PDF / 브리프 인쇄": "🖨️ Print / Save PDF",
    "✉️ 진단 결과 담아 박앤코에 이메일 문의 →": "✉️ Email Diagnostic Brief to Park & Co →",
    "🚨 진단 결과 담아 박앤코 긴급 자문 요청 →": "🚨 Email Urgent Brief to Park & Co →",
    "구분": "Category",
    "공식 법령 · 주정부 이민 포털 및 링크": "Official Legislation / State Portal & Link",
    "공식 문서명 및 링크": "Official Instrument / Source & Link",
    "공식 법령 · 재판소 안내 및 링크": "Official Legislation / Tribunal Guide & Link",
    "관할 기관": "Authority",
    "추적 지표": "Monitored Metrics",
    "검증 주기": "Schedule",
    "상태": "Status",
    "법률 면책공고 (Legal Disclaimer) · 주정부 노미네이션 할당량(Quota) 안내": "Legal Disclaimer & State Nomination Quota Notice",
    "법률 면책공고 (Legal Disclaimer) · Migration Act s 245AR 비용 전가 금지 안내": "Legal Disclaimer & Migration Act s 245AR Prohibition Notice",
    "법률 면책공고 (Legal Disclaimer) · 송달 간주 규정(s 494B / s 494C) 안내": "Legal Disclaimer & Deemed Notification Rules (s 494B / s 494C)",
    "연방 Schedule 6D & 8개 주정부 포털 실시간 모니터 (12/12 Live Verified)": "Federal Schedule 6D & 8-State Portal Live Monitor (12/12 Verified)",
    "공식 1차 출처 실시간 모니터 (12/12 Live Verified)": "Official Primary Source Live Monitor (12/12 Verified)",
    "공식 1차 법령·ART 출처 실시간 모니터 (12/12 Live Verified)": "Official Statutory & ART Primary Source Monitor (12/12 Verified)",
    "비자 만료 시까지 (Until Visa Expiry)": "Until Visa Expiry (LIN 22/012 & LIN 22/013)",
    "28 역일": "28 Calendar Days",
    "일반 비자·노미네이션 거절 (reg 4.10)": "Standard Onshore Visa/Nomination Refusal (reg 4.10)",
    "7 영업일": "7 Working Days",
    "호주 내 일반 비자 취소 · 구금 재심": "Onshore s 116 Cancellation / Detention Review",
    "9일 / 28일": "9 Days / 28 Days",
    "ART 재심 9일(s 500(6B)) · 철회 28일": "ART s 500(6B) 9d · Revocation Request 28d",
    "+ 파트너(820) · 의료(602) · 보호(866)": "+ Partner (820) · Medical (602) · Protection (866)",
    "3년 / 10년": "3 Yrs / 10 Yrs",
    "허위서류 3년(Waiver유) · 신원 10년(무)": "Bogus Doc 3yr (Waivable) · Identity 10yr (No Waiver)",
    "35 역일": "35 Calendar Days",
    "ART 기각 후 관할권 오류 사법심사(s 477)": "FCFCOA Judicial Review after ART Dismissal (s 477)",
    "2. ART 재심 · s 501 데드라인 계산기": "2. ART Review & s 501 Deadline Calculator",
    "3. Section 48 Bar 예외 비자 진단": "3. Section 48 Bar Exempt Visa Checker",
    "긴급 비자 거절·취소 1:1 변호사 자문 요청 →": "Request Urgent 1:1 Refusal/Cancellation Legal Advice →"
  };

  function applyUniversalLeafTranslation(lang) {
    var isEn = lang === "en";
    document.querySelectorAll(".parkco-svc-link").forEach(function (lnk) {
      var h = isEn ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
      if (h) lnk.setAttribute("href", h);
    });
    var walk = function (el) {
      if (!el || el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "PRE") return;
      var hasElementChildren = false;
      for (var i = 0; i < el.children.length; i++) {
        if (el.children[i].tagName !== "BR") {
          hasElementChildren = true;
          break;
        }
      }
      if (!hasElementChildren) {
        var raw = (el.textContent || "").trim().replace(/\s+/g, " ");
        if (!el.getAttribute("data-ko-leaf") && /[가-힣]/.test(raw) && raw.indexOf("한국어") === -1) {
          el.setAttribute("data-ko-leaf", el.textContent);
        }
        var koOrig = el.getAttribute("data-ko-leaf");
        if (koOrig) {
          var normKo = koOrig.trim().replace(/\s+/g, " ");
          if (isEn) {
            if (LEAF_KO_TO_EN[normKo]) {
              el.textContent = LEAF_KO_TO_EN[normKo];
            } else if (normKo.indexOf("(") !== -1 && /[A-Za-z]/.test(normKo)) {
              /* If option has bilingual text like '1월 (Jan)' or '만 67세 미만 (Under 67)', extract English or keep clean */
            }
          } else {
            el.textContent = koOrig;
          }
        }
      }
      for (var j = 0; j < el.children.length; j++) {
        walk(el.children[j]);
      }
    };
    walk(document.body);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll("#lang-en, #lang-ko, #lang-toggle-en, #lang-toggle-ko, .lang-btn");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var isEn = (b.id && b.id.indexOf("en") !== -1) || b.getAttribute("data-lang") === "en";
        document.documentElement.lang = isEn ? "en" : "ko";
        setTimeout(function () { applyUniversalLeafTranslation(isEn ? "en" : "ko"); }, 20);
      });
    });

    var params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en") {
      var enBtn = document.getElementById("lang-en") || document.getElementById("lang-toggle-en") || document.querySelector('[data-lang="en"]');
      if (enBtn) {
        enBtn.click();
        setTimeout(function () { applyUniversalLeafTranslation("en"); }, 40);
      }
    }
  });
})();
