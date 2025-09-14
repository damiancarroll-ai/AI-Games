const WORDS = {
  "inside": {
    "simple": [
      [
        "Ширээ",
        "shiree",
        "(shi-REE)",
        "Table"
      ],
      [
        "Сандал",
        "sandal",
        "(SAN-dal)",
        "Chair"
      ],
      [
        "Хаалга",
        "khaalga",
        "(KHAAL-ga)",
        "Door"
      ],
      [
        "Цонх",
        "tsonkh",
        "(TS-ONKH)",
        "Window"
      ],
      [
        "Орон дэвсгэр",
        "oron devsger",
        "(o-RON devs-GER)",
        "Bed"
      ],
      [
        "Дэр",
        "der",
        "(DER)",
        "Pillow"
      ],
      [
        "Хөшиг",
        "khöshig",
        "(KHÖ-shig)",
        "Curtain"
      ],
      [
        "Гэрэл",
        "gerel",
        "(GE-rel)",
        "Light"
      ],
      [
        "Гал тогоо",
        "gal togoo",
        "(gal to-GO-o)",
        "Kitchen"
      ],
      [
        "Хөргөгч",
        "khörgögch",
        "(KHÖR-gögch)",
        "Fridge"
      ],
      [
        "Зурагт",
        "zuragt",
        "(ZU-ragt)",
        "TV"
      ],
      [
        "Ном",
        "nom",
        "(NOM)",
        "Book"
      ],
      [
        "Шүүгээ",
        "shüügée",
        "(SHÜÜ-gee)",
        "Cabinet"
      ],
      [
        "Дэвтэр",
        "devter",
        "(DEV-ter)",
        "Notebook"
      ],
      [
        "Хивс",
        "khivs",
        "(KHIVS)",
        "Carpet"
      ],
      [
        "Толь",
        "tol’",
        "(TOL)",
        "Mirror"
      ],
      [
        "Гар утас",
        "gar utas",
        "(gar U-tas)",
        "Mobile phone"
      ],
      [
        "Компьютер",
        "kompyuter",
        "(kom-PYOO-ter)",
        "Computer"
      ],
      [
        "Цаг",
        "tsag",
        "(TSAG)",
        "Clock"
      ],
      [
        "Аяга",
        "ayaga",
        "(A-ya-ga)",
        "Cup"
      ]
    ],
    "medium": [
      [
        "Ширээний бүтээлэг",
        "shireenii büteelég",
        "(shi-REE-nii bü-TEE-leg)",
        "Tablecloth"
      ],
      [
        "Тавиур",
        "taviar",
        "(TA-viar)",
        "Shelf"
      ],
      [
        "Сойз",
        "soiz",
        "(SOIZ)",
        "Toothbrush"
      ],
      [
        "Шүдний оо",
        "shüdnii oo",
        "(SHÜD-nii oh)",
        "Toothpaste"
      ],
      [
        "Алчуур",
        "alchuur",
        "(AL-choor)",
        "Towel"
      ],
      [
        "Зуух",
        "zuukh",
        "(ZOO-kh)",
        "Oven"
      ],
      [
        "Плита",
        "plita",
        "(PLI-ta)",
        "Stove"
      ],
      [
        "Сэнс",
        "sens",
        "(SENS)",
        "Fan"
      ],
      [
        "Тоос сорогч",
        "toos sorogch",
        "(toos so-ROGCH)",
        "Vacuum"
      ],
      [
        "Хөлдөөгч",
        "khöldööch",
        "(KHÖL-dööch)",
        "Freezer"
      ],
      [
        "Хайч",
        "khaich",
        "(KHAICH)",
        "Scissors"
      ],
      [
        "Зүү",
        "züü",
        "(ZÜÜ)",
        "Needle"
      ],
      [
        "Утас",
        "utas",
        "(U-tas)",
        "Thread"
      ],
      [
        "Хогийн сав",
        "khogiin sav",
        "(KHO-gin sav)",
        "Trash can"
      ],
      [
        "Цахилгаан залгуур",
        "tsakhilgaan zalguur",
        "(tsa-khil-GAAN zal-GOOR)",
        "Power outlet"
      ],
      [
        "Сандлын дэр",
        "sandlyn der",
        "(SAN-dlin DER)",
        "Cushion"
      ],
      [
        "Унтраалга",
        "untraalga",
        "(un-TRAAL-ga)",
        "Light switch"
      ],
      [
        "Сэрээ",
        "seree",
        "(se-REE)",
        "Fork"
      ],
      [
        "Халбага",
        "khalbaga",
        "(KHAL-ba-ga)",
        "Spoon"
      ],
      [
        "Хутга",
        "khutga",
        "(KHUT-ga)",
        "Knife"
      ]
    ],
    "hard": [
      [
        "Гал тогооны хэрэгсэл",
        "gal togoonii heregsel",
        "(gal to-GO-nii he-REG-sel)",
        "Utensils"
      ],
      [
        "Хоолны сав",
        "khoolnii sav",
        "(KHOOL-nii sav)",
        "Cooking pot"
      ],
      [
        "Тагт",
        "tagt",
        "(TAGT)",
        "Balcony"
      ],
      [
        "Цоож",
        "tsooj",
        "(TSOOJ)",
        "Lock"
      ],
      [
        "Түлхүүр",
        "tülkhüür",
        "(TÜL-khü-ür)",
        "Key"
      ],
      [
        "Шкаф",
        "shkaf",
        "(SHKAF)",
        "Wardrobe"
      ],
      [
        "Тавилга",
        "tavilga",
        "(TA-vil-ga)",
        "Furniture"
      ],
      [
        "Цахилгаан зуух",
        "tsakhilgaan zuukh",
        "(tsa-khil-GAAN ZOO-kh)",
        "Electric oven"
      ],
      [
        "Хувцасны өлгүүр",
        "khuvtsasny ölgüür",
        "(KHUV-tsas-ny ÖL-gü-ür)",
        "Clothes hanger"
      ],
      [
        "Тоосны алчуур",
        "toosny alchuur",
        "(TOOS-ny AL-choor)",
        "Duster"
      ],
      [
        "Хөшигний тууз",
        "khöshignii tuuz",
        "(KHÖ-shig-nii TOOZ)",
        "Curtain tie"
      ],
      [
        "Суурь тавиур",
        "suur taviar",
        "(SOOR TA-viar)",
        "Base stand"
      ],
      [
        "Хувцас хатаагч",
        "khuvtsas khataagch",
        "(KHUV-tsas kha-TAA-gch)",
        "Clothes dryer"
      ],
      [
        "Тоос соруулах хошуу",
        "toos soruulakh khoshuu",
        "(toos so-ROO-lakh KHO-shoo)",
        "Vacuum nozzle"
      ],
      [
        "Цахилгаан хэрэгсэл",
        "tsakhilgaan heregsel",
        "(tsa-khil-GAAN he-REG-sel)",
        "Appliance"
      ],
      [
        "Тасалгаа",
        "tasalgaa",
        "(ta-SAL-gaa)",
        "Compartment"
      ],
      [
        "Зургийн жааз",
        "zurguin jaaz",
        "(ZUR-gin JAAZ)",
        "Photo frame"
      ],
      [
        "Түлшинд зуух",
        "tülshind zuukh",
        "(TÜL-shind ZOO-kh)",
        "Wood stove"
      ],
      [
        "Ахуйн хэрэглэл",
        "akhuiin hereglel",
        "(a-KHOOY-n he-REG-lel)",
        "Household items"
      ],
      [
        "Зайны удирдлага",
        "zainy udirdlaga",
        "(ZAI-ny oo-DIRD-la-ga)",
        "Remote control"
      ]
    ]
  },
  "outside": {
    "simple": [
      [
        "Мод",
        "mod",
        "(MOD)",
        "Tree"
      ],
      [
        "Цэцэг",
        "tsetseg",
        "(TSET-seg)",
        "Flower"
      ],
      [
        "Тэнгэр",
        "tenger",
        "(TEN-ger)",
        "Sky"
      ],
      [
        "Нар",
        "nar",
        "(NAR)",
        "Sun"
      ],
      [
        "Сар",
        "sar",
        "(SAR)",
        "Moon"
      ],
      [
        "Бороо",
        "boroo",
        "(bo-ROH)",
        "Rain"
      ],
      [
        "Цас",
        "tsas",
        "(TSAS)",
        "Snow"
      ],
      [
        "Салхи",
        "salkhi",
        "(SAL-khi)",
        "Wind"
      ],
      [
        "Зам",
        "zam",
        "(ZAM)",
        "Road"
      ],
      [
        "Гүүр",
        "güür",
        "(GÜÜR)",
        "Bridge"
      ],
      [
        "Гол",
        "gol",
        "(GOL)",
        "River"
      ],
      [
        "Нуур",
        "nuur",
        "(NUUR)",
        "Lake"
      ],
      [
        "Уул",
        "uul",
        "(UUL)",
        "Mountain"
      ],
      [
        "Цэцэрлэг",
        "tsetserleg",
        "(TSET-ser-leg)",
        "Park"
      ],
      [
        "Тоглоомын талбай",
        "togloomyn talbai",
        "(tog-LOM-in TAL-bai)",
        "Playground"
      ],
      [
        "Суудлын машин",
        "suudlyn mashin",
        "(SOOD-lin ma-SHIN)",
        "Car"
      ],
      [
        "Дугуй",
        "dugui",
        "(DU-gooy)",
        "Bicycle"
      ],
      [
        "Автобус",
        "avtobus",
        "(av-to-BUS)",
        "Bus"
      ],
      [
        "Галт тэрэг",
        "galt tereg",
        "(GALT te-REG)",
        "Train"
      ],
      [
        "Гудамж",
        "gudamj",
        "(GU-damj)",
        "Street"
      ]
    ],
    "medium": [
      [
        "Замын тэмдэг",
        "zamiin temdeg",
        "(ZA-min TEM-deg)",
        "Road sign"
      ],
      [
        "Гэрлэн дохио",
        "gerlen dokhio",
        "(GER-len DO-khi-oh)",
        "Traffic light"
      ],
      [
        "Төв талбай",
        "töv talbai",
        "(TÖV TAL-bai)",
        "Central square"
      ],
      [
        "Трамвай",
        "tramvai",
        "(TRAM-vai)",
        "Tram"
      ],
      [
        "Метро",
        "metro",
        "(ME-tro)",
        "Metro"
      ],
      [
        "Нисэх буудал",
        "niseh buudal",
        "(ni-SEKH BOO-dal)",
        "Airport"
      ],
      [
        "Зогсоол",
        "zogsool",
        "(ZOG-so-ol)",
        "Parking"
      ],
      [
        "Цайз",
        "tsaiz",
        "(TSAIZ)",
        "Fortress"
      ],
      [
        "Сүм",
        "süm",
        "(SÜM)",
        "Temple"
      ],
      [
        "Стадион",
        "stadion",
        "(STA-di-on)",
        "Stadium"
      ],
      [
        "Хөшөө дурсгал",
        "khöshöö dursgal",
        "(KHÖ-shöö DURS-gal)",
        "Monument"
      ],
      [
        "Шат",
        "shat",
        "(SHAT)",
        "Stairs"
      ],
      [
        "Шатахуун түгээх станц",
        "shatakhun tügeekh stants",
        "(sha-ta-KHOON tü-GEEKH stants)",
        "Petrol station"
      ],
      [
        "Зах",
        "zakh",
        "(ZAKH)",
        "Market"
      ],
      [
        "Салхи хэмжигч",
        "salkhi hemjigch",
        "(SAL-khi HEM-jigch)",
        "Wind gauge"
      ],
      [
        "Гэр",
        "ger",
        "(GER)",
        "Yurt (ger)"
      ],
      [
        "Талбай",
        "talbai",
        "(TAL-bai)",
        "Square"
      ],
      [
        "Тал нутаг",
        "tal nutag",
        "(TAL nu-tag)",
        "Steppe"
      ],
      [
        "Усан оргилуур",
        "usan orgiluur",
        "(U-san or-gi-LUUR)",
        "Fountain"
      ],
      [
        "Зүлэг",
        "züleg",
        "(ZÜ-leg)",
        "Lawn"
      ]
    ],
    "hard": [
      [
        "Нүүрсний уурхай",
        "nuursnii uurkhai",
        "(NOOR-snii OOR-khai)",
        "Coal mine"
      ],
      [
        "Эвдэрхий хашлага",
        "evderkhii khashlaga",
        "(EV-der-khee KHA-shla-ga)",
        "Broken railing"
      ],
      [
        "Усны нөөц",
        "usnii nööts",
        "(US-nii NÖÖTS)",
        "Water reserve"
      ],
      [
        "Шороон зам",
        "shoroon zam",
        "(sho-ROON ZAM)",
        "Dirt road"
      ],
      [
        "Ус зайлуулагч",
        "us zailuulagch",
        "(US zai-LUU-lagch)",
        "Drainage"
      ],
      [
        "Далан",
        "dalan",
        "(DA-lan)",
        "Dam"
      ],
      [
        "Сувгийн амсар",
        "suvgiin amsar",
        "(SUV-gin AM-sar)",
        "Channel mouth"
      ],
      [
        "Гүүрний тулгуур",
        "güürnii tulguur",
        "(GÜÜR-nii TUL-guur)",
        "Bridge support"
      ],
      [
        "Хашаа",
        "khashaa",
        "(KHA-shaa)",
        "Fence"
      ],
      [
        "Хар замын шугам",
        "khar zamin shugam",
        "(KHAR ZA-min SHU-gam)",
        "Road marking"
      ],
      [
        "Барьцаалах газар",
        "baritsaalakh gazar",
        "(ba-rits-AA-lakh GA-zar)",
        "Checkpoint"
      ],
      [
        "Шавар",
        "shavar",
        "(SHA-var)",
        "Mud"
      ],
      [
        "Голын тохой",
        "goliin tokhoi",
        "(GO-lin TO-khoi)",
        "River bend"
      ],
      [
        "Цасны шуурга",
        "tsasnii shuurga",
        "(TSAS-nii SHUUR-ga)",
        "Snowstorm"
      ],
      [
        "Салхины чиг",
        "salkhiny chig",
        "(SAL-khi-nee chig)",
        "Wind direction"
      ],
      [
        "Хөрсний эвдрэл",
        "khörsnii evdrel",
        "(KHÖRS-nii EV-drel)",
        "Soil erosion"
      ],
      [
        "Зам таглагдал",
        "zam taglagdal",
        "(ZAM TAG-lag-dal)",
        "Roadblock"
      ],
      [
        "Цементийн тулгуур",
        "tsementiin tulguur",
        "(tse-MEN-tiin TUL-guur)",
        "Concrete pillar"
      ],
      [
        "Харааны шугам",
        "kharaany shugam",
        "(kha-RAA-ny SHU-gam)",
        "Sight line"
      ],
      [
        "Дэд бүтэц",
        "ded büteц",
        "(DED bü-TECH)",
        "Infrastructure"
      ]
    ]
  },
  "shopping": {
    "simple": [
      [
        "Лууван",
        "luuvan",
        "(LUU-wan)",
        "Carrot"
      ],
      [
        "Алим",
        "alim",
        "(A-lim)",
        "Apple"
      ],
      [
        "Төмс",
        "töms",
        "(TÖMS)",
        "Potato"
      ],
      [
        "Сүү",
        "süü",
        "(SÜÜ)",
        "Milk"
      ],
      [
        "Талх",
        "talkh",
        "(TAL-kh)",
        "Bread"
      ],
      [
        "Тахиа",
        "takhia",
        "(TA-khi-ya)",
        "Chicken"
      ],
      [
        "Үхрийн мах",
        "ükhriin makh",
        "(ÜKH-reen makh)",
        "Beef"
      ],
      [
        "Зайрмаг",
        "zairmag",
        "(ZAIR-mag)",
        "Ice cream"
      ],
      [
        "Өндөг",
        "öndög",
        "(ÖN-dög)",
        "Egg"
      ],
      [
        "Цай",
        "tsai",
        "(TSAI)",
        "Tea"
      ],
      [
        "Кофе",
        "kofe",
        "(KO-feh)",
        "Coffee"
      ],
      [
        "Сахар",
        "sakhar",
        "(SA-khar)",
        "Sugar"
      ],
      [
        "Давс",
        "davs",
        "(DAVS)",
        "Salt"
      ],
      [
        "Цөцгийн тос",
        "tsötsgiin tos",
        "(TSÖTS-gin tos)",
        "Butter"
      ],
      [
        "Бяслаг",
        "byaslag",
        "(BYAS-lag)",
        "Cheese"
      ],
      [
        "Гурил",
        "guril",
        "(GU-ril)",
        "Flour"
      ],
      [
        "Гоймон",
        "goimon",
        "(GOY-mon)",
        "Noodles"
      ],
      [
        "Банана",
        "banana",
        "(ba-NA-na)",
        "Banana"
      ],
      [
        "Жүрж",
        "jürj",
        "(JÜRJ)",
        "Orange"
      ],
      [
        "Ус",
        "us",
        "(US)",
        "Water"
      ]
    ],
    "medium": [
      [
        "Лаврын навч",
        "lavryn navch",
        "(LAV-rin NAVCH)",
        "Bay leaf"
      ],
      [
        "Гоньд",
        "gond",
        "(GOND)",
        "Dill"
      ],
      [
        "Ногоон сонгино",
        "nogoon songino",
        "(no-GOON SONG-gi-no)",
        "Spring onion"
      ],
      [
        "Луувангийн шүүс",
        "luuvangiin shüüs",
        "(LUU-van-gin SHÜÜS)",
        "Carrot juice"
      ],
      [
        "Туна загас",
        "tuna zagas",
        "(TOO-na ZA-gas)",
        "Tuna"
      ],
      [
        "Тараг",
        "tarag",
        "(TA-rag)",
        "Yoghurt"
      ],
      [
        "Сүүтэй шоколад",
        "süütéi shokolad",
        "(SÜÜ-tei SHO-ko-lad)",
        "Milk chocolate"
      ],
      [
        "Хар шоколад",
        "khar shokolad",
        "(KHAR SHO-ko-lad)",
        "Dark chocolate"
      ],
      [
        "Бялуу",
        "byaluu",
        "(BYA-loo)",
        "Cake"
      ],
      [
        "Жигнэмэг",
        "jignemeg",
        "(JIG-ne-meg)",
        "Biscuit"
      ],
      [
        "Усан үзэм",
        "usan üzem",
        "(U-san Ü-zem)",
        "Grapes"
      ],
      [
        "Самар",
        "samar",
        "(SA-mar)",
        "Nuts"
      ],
      [
        "Чидун жимс",
        "chidun jims",
        "(CHI-dun JIMS)",
        "Olives"
      ],
      [
        "Оливын тос",
        "oliviin tos",
        "(O-li-VEEN tos)",
        "Olive oil"
      ],
      [
        "Дарс",
        "dars",
        "(DARS)",
        "Wine"
      ],
      [
        "Шар айраг",
        "shar airag",
        "(SHAR AI-rag)",
        "Beer"
      ],
      [
        "Ахуйн цэвэрлэгээний бодис",
        "akhuiin tseverlegeenii bodis",
        "(a-KHOOY-n tse-ver-le-GEH-nii BO-dis)",
        "Detergent"
      ],
      [
        "Саван",
        "savan",
        "(SA-van)",
        "Soap"
      ],
      [
        "Сам",
        "sam",
        "(SAM)",
        "Comb"
      ],
      [
        "Шампунь",
        "shampun",
        "(SHAM-poon)",
        "Shampoo"
      ]
    ],
    "hard": [
      [
        "Даршилсан өргөст хэмх",
        "darshilsan örgöst khemkh",
        "(dar-SHIL-san ÖR-göst KHEMKH)",
        "Pickles"
      ],
      [
        "Нунтаг кофе",
        "nuntag kofe",
        "(NUN-tag KO-feh)",
        "Ground coffee"
      ],
      [
        "Шарсан загас",
        "sharsan zagas",
        "(SHAR-san ZA-gas)",
        "Fried fish"
      ],
      [
        "Хиам",
        "khiam",
        "(KHI-am)",
        "Sausage"
      ],
      [
        "Бяслагны зүсмэл",
        "byaslagnii züsmel",
        "(BYAS-lag-nii ZÜS-mel)",
        "Cheese slices"
      ],
      [
        "Гоймонгийн соус",
        "goimongiin sous",
        "(GOY-mong-in SO-us)",
        "Pasta sauce"
      ],
      [
        "Сироп",
        "sirop",
        "(SI-rop)",
        "Syrup"
      ],
      [
        "Самрын тос",
        "samryn tos",
        "(SAM-rin tos)",
        "Peanut butter"
      ],
      [
        "Эрдэнэ шиш",
        "erdene shish",
        "(ER-de-ne SHISH)",
        "Corn"
      ],
      [
        "Хөлдөөсөн жимс",
        "khöldööson jims",
        "(KHÖL-döö-son JIMS)",
        "Frozen fruit"
      ],
      [
        "Хүнсний ногооны багц",
        "khunsnii nogoonii bagts",
        "(KHOON-snii no-GO-nii BAG-ts)",
        "Veggie pack"
      ],
      [
        "Буурцагт шош",
        "buurtsagt shosh",
        "(BUUR-tsagt SHOSH)",
        "Beans"
      ],
      [
        "Буурцагт кофе",
        "buurtsagt kofe",
        "(BUUR-tsagt KO-feh)",
        "Coffee beans"
      ],
      [
        "Гурилан бүтээгдэхүүн",
        "gurilan buteegdehuun",
        "(GU-ri-lan bu-teeg-de-HÜÜN)",
        "Bakery items"
      ],
      [
        "Дүрдэг цай",
        "dürdeg tsai",
        "(DÜR-deg TSAI)",
        "Tea bag"
      ],
      [
        "Үр тариа",
        "ür taria",
        "(ÜR ta-RIA)",
        "Grains"
      ],
      [
        "Амтлагч",
        "amtlagsch",
        "(AMT-lagch)",
        "Seasoning"
      ],
      [
        "Дарс нээлтэгч",
        "dars neeltech",
        "(DARS NEE-ltech)",
        "Corkscrew"
      ],
      [
        "Хайрцаг",
        "khairtsag",
        "(KHAIR-tsag)",
        "Box"
      ],
      [
        "Сав",
        "sav",
        "(SAV)",
        "Container"
      ]
    ]
  },
  "body": {
    "simple": [
      [
        "Толгой",
        "tolgoi",
        "(TOL-goy)",
        "Head"
      ],
      [
        "Нүд",
        "nüd",
        "(NÜD)",
        "Eye"
      ],
      [
        "Чих",
        "chikh",
        "(CHIKH)",
        "Ear"
      ],
      [
        "Хамар",
        "khamar",
        "(KHA-mar)",
        "Nose"
      ],
      [
        "Ам",
        "am",
        "(AM)",
        "Mouth"
      ],
      [
        "Шүд",
        "shüd",
        "(SHÜD)",
        "Tooth"
      ],
      [
        "Гар",
        "gar",
        "(GAR)",
        "Hand"
      ],
      [
        "Хуруу",
        "khuruu",
        "(KHU-ruu)",
        "Finger"
      ],
      [
        "Хөл",
        "khöl",
        "(KHÖL)",
        "Leg/Foot"
      ],
      [
        "Шагай",
        "shagai",
        "(SHA-gai)",
        "Ankle"
      ],
      [
        "Өвдөг",
        "övdög",
        "(ÖV-dög)",
        "Knee"
      ],
      [
        "Мөр",
        "mör",
        "(MÖR)",
        "Shoulder"
      ],
      [
        "Суулга",
        "suulga",
        "(SOOL-ga)",
        "Hip"
      ],
      [
        "Нуруу",
        "nuru",
        "(NU-ruu)",
        "Back"
      ],
      [
        "Хүзүү",
        "khüzüu",
        "(KHÜ-züü)",
        "Neck"
      ],
      [
        "Зүрх",
        "zürkh",
        "(ZÜRKH)",
        "Heart"
      ],
      [
        "Тархи",
        "tarhi",
        "(TAR-khi)",
        "Brain"
      ],
      [
        "Арьс",
        "aris",
        "(AR-iss)",
        "Skin"
      ],
      [
        "Хэл",
        "khel",
        "(KHEL)",
        "Tongue"
      ],
      [
        "Сахал",
        "sakhal",
        "(SA-khal)",
        "Beard"
      ]
    ],
    "medium": [
      [
        "Сормуй",
        "sormui",
        "(SOR-moy)",
        "Eyelash"
      ],
      [
        "Хөмсөг",
        "khömsög",
        "(KHÖM-sög)",
        "Eyebrow"
      ],
      [
        "Тил",
        "til",
        "(TIL)",
        "Nape"
      ],
      [
        "Суган",
        "sugan",
        "(SU-gan)",
        "Armpit"
      ],
      [
        "Бугуй",
        "bugui",
        "(BU-gui)",
        "Wrist"
      ],
      [
        "Шуу",
        "shuu",
        "(SHOO)",
        "Forearm"
      ],
      [
        "Тохой",
        "tokhoi",
        "(TO-khoi)",
        "Elbow"
      ],
      [
        "Алга",
        "alga",
        "(AL-ga)",
        "Palm"
      ],
      [
        "Тавхай",
        "tavkhai",
        "(TAV-khai)",
        "Sole"
      ],
      [
        "Уруул",
        "uruul",
        "(U-ruul)",
        "Lips"
      ],
      [
        "Хацар",
        "khatsar",
        "(KHA-tsar)",
        "Cheek"
      ],
      [
        "Эрүүн",
        "erüün",
        "(E-ruun)",
        "Jaw"
      ],
      [
        "Хоолой",
        "kholoi",
        "(KHO-loy)",
        "Throat"
      ],
      [
        "Уушиг",
        "uushig",
        "(OO-shig)",
        "Lung"
      ],
      [
        "Элэг",
        "eleg",
        "(E-leg)",
        "Liver"
      ],
      [
        "Ходоод",
        "khodood",
        "(KHO-dood)",
        "Stomach"
      ],
      [
        "Нойр булчирхай",
        "noir bulchirkhai",
        "(NOYR bul-chir-khai)",
        "Pancreas"
      ],
      [
        "Булчин",
        "bulchin",
        "(BUL-chin)",
        "Muscle"
      ],
      [
        "Яс",
        "yas",
        "(YAS)",
        "Bone"
      ],
      [
        "Судас",
        "sudas",
        "(SU-das)",
        "Vein"
      ]
    ],
    "hard": [
      [
        "Талирхай",
        "talirkhai",
        "(TA-lir-khai)",
        "Cartilage"
      ],
      [
        "Гавал",
        "gaval",
        "(GA-val)",
        "Skull"
      ],
      [
        "Дотоод чих",
        "dotoood chikh",
        "(do-TO-od CHIKH)",
        "Inner ear"
      ],
      [
        "Гипофиз",
        "gipofiz",
        "(GI-po-fiz)",
        "Pituitary"
      ],
      [
        "Бөөр",
        "bör",
        "(BÖR)",
        "Kidney"
      ],
      [
        "Дотор мах",
        "dotor makh",
        "(DO-tor MAKH)",
        "Guts"
      ],
      [
        "Судасны хана",
        "sudansnii khana",
        "(SU-das-nii KHA-na)",
        "Vessel wall"
      ],
      [
        "Мөгөөрс",
        "mögröös",
        "(MÖ-görs)",
        "Cartilage (alt)"
      ],
      [
        "Цусан эргэлт",
        "tsusan ergelt",
        "(TSU-san ER-gelt)",
        "Circulation"
      ],
      [
        "Дархлаа",
        "darhlaa",
        "(DAR-khlaa)",
        "Immunity"
      ],
      [
        "Цөсний хүүдий",
        "tsösnii küüdi",
        "(TSÖS-nii KHÜÜ-dee)",
        "Gallbladder"
      ],
      [
        "Шулуун гэдэс",
        "shuluun gedes",
        "(SHU-luun GE-des)",
        "Rectum"
      ],
      [
        "Бөөрний дээд булчирхай",
        "börnii deed bulchirkhai",
        "(BÖR-nii DEED bul-chir-khai)",
        "Adrenal gland"
      ],
      [
        "Хэлэн доорх",
        "khelen doorh",
        "(KHE-len DOR-kh)",
        "Sublingual"
      ],
      [
        "Сонор",
        "sonor",
        "(SO-nor)",
        "Hearing (sense)"
      ],
      [
        "Үсний уутанцар",
        "üsnii uutantsar",
        "(ÜS-nii OO-tan-tsar)",
        "Hair follicle"
      ],
      [
        "Тархины бүрхүүл",
        "tarkhiny börkhüül",
        "(TAR-khi-ny BÖR-khüül)",
        "Meninges"
      ],
      [
        "Мөгөөрсөн хоолой",
        "mögröösön khooloi",
        "(MÖ-gör-sön KHO-loy)",
        "Trachea"
      ],
      [
        "Хөндий",
        "khöndii",
        "(KHÖN-dii)",
        "Cavity"
      ],
      [
        "Эс",
        "es",
        "(ES)",
        "Cell"
      ]
    ]
  }
};