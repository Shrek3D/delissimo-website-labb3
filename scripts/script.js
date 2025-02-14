// Byt attributet lang i HTML, sv eller en
function setLanguage(lang) {
  if (lang === "sv") {
    document.documentElement.lang = "sv";
    localStorage.setItem("language", "sv"); // Minns språk även efter sidan laddas om etc.
    updateText("sv"); // avnänd updateText, dynamiskt uppdatera hemsidans text
  } else {
    document.documentElement.lang = "en";
    localStorage.setItem("language", "en"); // Minns språk även efter sidan laddas om etc.
    updateText("en"); // avnänd updateText, dynamiskt uppdatera hemsidans text
  }
}

// Textöversättningar
const translations = {
  sv: {
    // Header
    home: "Hem",
    menu: "Meny",
    about: "Om oss",
    booking: "Boka bord",
    job: "Jobb",

    // Homepage Intro Section
    "homepage-intro-title": "ITALIENSKINFLUERAD PÄRLA",
    "homepage-intro-text":
      "Välkomna in på en avkopplande kaffestund med lyxig espresso, ett glas öl eller vin eller mätta era magar med äkta Italiensk surdegspizza á la romana, lasagne, pasta eller färska sallader. Här finns något för alla!",

    // Homepage knappar
    "homepage-order": "BESTÄLL",
    "homepage-menu": "MENY",
    "homepage-booking": "BOKA BORD",

    // Footer
    "footer-location-1": "ÖJERSJÖ",
    "footer-phone-1": "+4670 787 68 02",
    "footer-hours-1": "Sön-Tor 11-20, Fre-Lör 11-22",
    "footer-address-1": "Lars Göks Allé 1, 433 51 Öjersjö",

    "footer-location-2": "PARTILLE",
    "footer-phone-2": "+4670 444 14 04",
    "footer-hours-2": "Mån-Tor 11-20, Fre-Sön 11-22",
    "footer-address-2": "Portgången 3, 433 38 Partille",

    "footer-location-3": "GAMLESTADEN",
    "footer-phone-3": "+4670 339 36 56",
    "footer-hours-3": "Lör-Tor 11-20, Fre 11-22",
    "footer-address-3": "Gamlestads Torg 7, 415 12 Göteborg",

    "footer-follow-us": "Följ oss",

    // Menu
    "menu-title": "Vår Meny",
    "menu-preference-btn": "Matpreferenser",
    // Menu - ANTIPASTI
    "menu-item-vitloksbrod-name": "Vitlöksbröd",
    "menu-item-vitloksbrod-desc": "Frasigt bröd med vitlök, parmesan & oregano",
    "menu-item-vitloksbrod-price": "79 kr",

    "menu-item-charkbricka-name": "Charkbricka",
    "menu-item-charkbricka-desc":
      "Italiensk chark såsom salami, prosciutto & bresaola, ruccola & antipasti mix av grönsaker",
    "menu-item-charkbricka-price": "199 kr",

    "menu-item-burrata-name": "Burrata",
    "menu-item-burrata-desc":
      "Krämig burrata, körsbärstomater, basilika, ruccola, basilikapesto & balsamico",
    "menu-item-burrata-price": "139 kr",

    "menu-item-carpaccio-name": "Carpaccio",
    "menu-item-carpaccio-desc": "Bresaola, ruccola, parmesan, balsamico",
    "menu-item-carpaccio-price": "189 kr",

    "menu-item-piccola-insalata-name": "Piccola Insalata",
    "menu-item-piccola-insalata-desc":
      "Liten sidesallad med sallad, tomat, gurka, feta, lök & ruccola",
    "menu-item-piccola-insalata-price": "89 kr",

    // Menu - INSALATA
    "menu-item-caesar-name": "Ceasar",
    "menu-item-caesar-desc":
      "Kycklingfilé & rökt bacon från ugnen med romansallad, hemmagjorda krutonger, gurka, tomat, parmesan & ruccola",
    "menu-item-caesar-price": "149 kr",

    "menu-item-sole-name": "Sole",
    "menu-item-sole-desc":
      "Grillad italiensk grönsaksröra (paprika, tomater, aubergine, kronärtskocka & zucchini), färsk tomat, gurka & oliver",
    "menu-item-sole-price": "145 kr",

    "menu-item-pollo-name": "Pollo",
    "menu-item-pollo-desc":
      "Kycklingfilé, gurka, tomat, rödlök, majs, feta & pestopasta",
    "menu-item-pollo-price": "145 kr",

    "menu-item-carne-name": "Carne",
    "menu-item-carne-desc":
      "Prosciutto, salami Milano & bresaola, gurka, körsbärstomater, parmesan, oliver, ruccola",
    "menu-item-carne-price": "169 kr",

    // Menu - PIZZA
    "menu-item-margherita-name": "Margherita",
    "menu-item-margherita-desc":
      "Klassiker där vi förhöjer smaken med vår hemmagjorda basilikapesto",
    "menu-item-margherita-price": "135 kr",

    "menu-item-capri-name": "Capri",
    "menu-item-capri-desc": "Prosciutto, oliver & kronärtskocka",
    "menu-item-capri-price": "159 kr",

    "menu-item-salami-name": "Salami",
    "menu-item-salami-desc":
      "Salami Milano, paprika & egengjord pesto av soltorkade tomater",
    "menu-item-salami-price": "159 kr",

    "menu-item-formaggio-name": "Formaggio",
    "menu-item-formaggio-desc":
      "Mozzarella, parmesan, gorgonzola & feta. För ostälskaren!",
    "menu-item-formaggio-price": "155 kr",

    "menu-item-bresaola-name": "Bresaola",
    "menu-item-bresaola-desc":
      "Lufttorkad bresaola av Black Angus kött, champinjoner, tryffelolja & parmesan",
    "menu-item-bresaola-price": "165 kr",

    "menu-item-vegetale-name": "Vegetale",
    "menu-item-vegetale-desc":
      "Grillade italienska grönsaker (zucchini, aubergine, kronärtskocka, paprika & soltorkad tomat) toppas med basilikapesto",
    "menu-item-vegetale-price": "155 kr",

    "menu-item-di-mare-name": "Di Mare",
    "menu-item-di-mare-desc": "Räkor, tonfisk, kräftstjärtar & romsås",
    "menu-item-di-mare-price": "159 kr",

    "menu-item-simone-name": "Simone",
    "menu-item-simone-desc": "Hickoryrökt bacon, rödlök & färsk vitlök",
    "menu-item-simone-price": "159 kr",

    // Menu - PASTA
    "menu-item-arrabiata-name": "Arrabiata",
    "menu-item-arrabiata-desc":
      "Körsbärstomater, tomatsås, rödlök, piri piri, persilja & vitlök",
    "menu-item-arrabiata-price": "129 kr",

    "menu-item-funghi-name": "Funghi",
    "menu-item-funghi-desc":
      "Champinjoner, portabello, basilika, vitlök, funghipesto & grädde",
    "menu-item-funghi-price": "149 kr",

    "menu-item-carbonara-name": "Carbonara",
    "menu-item-carbonara-desc":
      "Bacon, grädde, äggula, svartpeppar, vitlök & parmesan",
    "menu-item-carbonara-price": "159 kr",

    "menu-item-alfredo-name": "Alfredo",
    "menu-item-alfredo-desc":
      "Kycklingfilé, grädde, persilja, vitlök & parmesan",
    "menu-item-alfredo-price": "165 kr",

    "menu-item-rosso-name": "Rosso",
    "menu-item-rosso-desc":
      "Salami Milano, pesto av soltorkade tomater, grädde & tomatsås, persilja & rödlök",
    "menu-item-rosso-price": "159 kr",

    "menu-item-verde-name": "Verde",
    "menu-item-verde-desc":
      "Kycklingfilé, basilikapesto, grädde, körsbärstomater & parmesan",
    "menu-item-verde-price": "165 kr",

    "menu-item-bianco-name": "Bianco",
    "menu-item-bianco-desc":
      "Oxfilé, funghipesto, grädde, rödlök, champinjoner & tryffelolja",
    "menu-item-bianco-price": "179 kr",

    "menu-item-scampi-name": "Scampi",
    "menu-item-scampi-desc":
      "Scampi, rödlök, persilja, vitlök, pesto rosso, tomatsås, grädde & chili",
    "menu-item-scampi-price": "179 kr",

    "menu-item-lasagne-name": "Lasagne",
    "menu-item-lasagne-desc":
      "Bolognese av nötfärs, serveras med ruccola, parmesan, körsbärstomater & balsamico",
    "menu-item-lasagne-price": "149 kr",

    // Menu - DOLCHI
    "menu-item-cannoli-name": "Cannoli",
    "menu-item-cannoli-desc":
      "Siciliansk handgjord specialitet, frasigt krokantrör fylld med nötkräm",
    "menu-item-cannoli-price": "95 kr",

    "menu-item-tiramisu-name": "Tiramisu",
    "menu-item-tiramisu-desc": "Hemmagjord italiensk klassiker",
    "menu-item-tiramisu-price": "85 kr",

    "menu-item-nutellapizza-name": "Nutellapizza",
    "menu-item-nutellapizza-desc":
      "Frasig och farligt god, pyntas med diverse sötsaker",
    "menu-item-nutellapizza-price": "119 kr",

    "menu-item-affogato-name": "Affogato",
    "menu-item-affogato-desc": "Espresso & vaniljglass",
    "menu-item-affogato-price": "75 kr",

    // Menu - Extratext top och bot
    "menu-INSALATA-top-text":
      "På Delissimo finns alltid smarrig sallad med över 30 färska råvaror! Grönsalladbas i alla rätterna. Välj valfri sås!",
    "menu-INSALATA-bot-text":
      "SÅSER: Caesar, Vitlök, Vinägrette, Pesto, Mangocurry, Tryffelmayo & Chillimayo. Passar även perfekt till krispig pizza!",
    "menu-PIZZA-top-text":
      "Surdegspizza, jäst i 72 timmar för en unik frasig upplevelse. Alla pizzor har en bas med tomatsås samt mozzarella och toppas med färsk ruccola. (Vi har även glutenfri pizzadeg +15 kr samt veganost).",
    "menu-PIZZA-bot-text": "LYXA TILL DET?! TOPPA MED EN BURRATA +60:-",
    "menu-PASTA-top-text":
      "Pasta av 100% Italiensk durumvete. Alla våra pastarätter toppas med färsk ruccola samt riven parmesanost. Alla pasta rätterna går att få gluten- samt laktosfria. Finns även veganska/vegetariska alternativ!",

    // About
    "about-title": "Om oss",
    "about-text":
      "På Delissimo är vi stolta över att skapa äkta italiensk mat, inspirerad av Italiens rika smaker och tillagad med de bästa ingredienserna. Oavsett om du längtar efter en perfekt bakad pizza, en smakrik pastarätt eller en härlig dessert, är varje tugga en hyllning till tradition och passion. Vi erbjuder en mysig atmosfär och personlig service – perfekt för familjemiddagar, romantiska kvällar eller trevliga stunder med vänner i Öjersjö, Partille och Gamlestaden. Buon appetito!",
    "about-order": "BESTÄLL",
    "about-menu": "MENY",
    "about-booking": "BOKA BORD",

    // Booking
    "booking-title": "Boka Bord",
    "booking-text": "Vill du boka bord? Fyll i uppgifterna i formuläret.",
    "booking-label-name": "Namn:",
    "booking-label-email": "E-post:",
    "booking-label-phone": "Telefonnummer:",
    "booking-label-requests": "Eventuella önskemål:",
    "booking-submit": "Skicka",

    // Job
    "job-title": "Jobb",
    "job-openings-title": "LEDIGA TJÄNSTER",
    "job-description":
      "Här kan du se våra lediga tjänster och skicka in en ansökan.",
    "job-label-name": "Namn:",
    "job-label-email": "E-post:",
    "job-label-phone": "Telefonnummer:",
    "job-label-message": "Meddelande:",
    "job-label-file": "Välj fil:",
    "job-label-gdpr":
      "Jag samtycker till att mina personuppgifter behandlas enligt integritetspolicyn.",
    "job-submit": "Skicka",
  },
  en: {
    // Header
    home: "Home",
    menu: "Menu",
    about: "About us",
    booking: "Book table",
    job: "Jobs",

    // Homepage Intro Section
    "homepage-intro-title": "ITALIAN-INSPIRED GEM",
    "homepage-intro-text":
      "Welcome in for a relaxing coffee break with luxurious espresso, a glass of beer or wine, or satisfy your hunger with authentic Italian sourdough pizza à la romana, lasagna, pasta, or fresh salads. There's something for everyone!",

    // Homepage Knappar
    "homepage-order": "ORDER",
    "homepage-menu": "MENU",
    "homepage-booking": "BOOK TABLE",

    // Footer
    "footer-location-1": "OJERSJO",
    "footer-phone-1": "+4670 787 68 02",
    "footer-hours-1": "Sun-Thu 11-20, Fri-Sat 11-22",
    "footer-address-1": "Lars Goks Allé 1, 433 51 Ojersjo",

    "footer-location-2": "PARTILLE",
    "footer-phone-2": "+4670 444 14 04",
    "footer-hours-2": "Mon-Thu 11-20, Fri-Sun 11-22",
    "footer-address-2": "Portgangen 3, 433 38 Partille",

    "footer-location-3": "GAMLESTADEN",
    "footer-phone-3": "+4670 339 36 56",
    "footer-hours-3": "Sat-Thu 11-20, Fri 11-22",
    "footer-address-3": "Gamlestads Torg 7, 415 12 Gothenburg",

    "footer-follow-us": "Follow us",

    // Menu
    "menu-title": "Our Menu",
    "menu-preference-btn": "Food Preferences",
    // Menu - ANTIPASTI
    "menu-item-vitloksbrod-name": "Garlic Bread",
    "menu-item-vitloksbrod-desc":
      "Crispy bread with garlic, parmesan & oregano",
    "menu-item-vitloksbrod-price": "79 kr",

    "menu-item-charkbricka-name": "Charcuterie Board",
    "menu-item-charkbricka-desc":
      "Italian cold cuts such as salami, prosciutto & bresaola, arugula & mixed antipasti vegetables",
    "menu-item-charkbricka-price": "199 kr",

    "menu-item-burrata-name": "Burrata",
    "menu-item-burrata-desc":
      "Creamy burrata, cherry tomatoes, basil, arugula, basil pesto & balsamic vinegar",
    "menu-item-burrata-price": "139 kr",

    "menu-item-carpaccio-name": "Carpaccio",
    "menu-item-carpaccio-desc": "Bresaola, arugula, parmesan, balsamic vinegar",
    "menu-item-carpaccio-price": "189 kr",

    "menu-item-piccola-insalata-name": "Piccola Insalata",
    "menu-item-piccola-insalata-desc":
      "Small side salad with lettuce, tomato, cucumber, feta, onion & arugula",
    "menu-item-piccola-insalata-price": "89 kr",

    // Menu - INSALATA
    "menu-item-caesar-name": "Caesar",
    "menu-item-caesar-desc":
      "Chicken fillet & smoked bacon from the oven with romaine lettuce, homemade croutons, cucumber, tomato, parmesan & arugula",
    "menu-item-caesar-price": "149 kr",

    "menu-item-sole-name": "Sole",
    "menu-item-sole-desc":
      "Grilled Italian vegetable mix (bell pepper, tomatoes, eggplant, artichoke & zucchini), fresh tomato, cucumber & olives",
    "menu-item-sole-price": "145 kr",

    "menu-item-pollo-name": "Pollo",
    "menu-item-pollo-desc":
      "Chicken fillet, cucumber, tomato, red onion, corn, feta & pesto pasta",
    "menu-item-pollo-price": "145 kr",

    "menu-item-carne-name": "Carne",
    "menu-item-carne-desc":
      "Prosciutto, Salami Milano & Bresaola, cucumber, cherry tomatoes, parmesan, olives, arugula",
    "menu-item-carne-price": "169 kr",

    // Menu - PIZZA
    "menu-item-margherita-name": "Margherita",
    "menu-item-margherita-desc":
      "A classic enhanced with our homemade basil pesto",
    "menu-item-margherita-price": "135 kr",

    "menu-item-capri-name": "Capri",
    "menu-item-capri-desc": "Prosciutto, olives & artichokes",
    "menu-item-capri-price": "159 kr",

    "menu-item-salami-name": "Salami",
    "menu-item-salami-desc":
      "Salami Milano, bell pepper & homemade sundried tomato pesto",
    "menu-item-salami-price": "159 kr",

    "menu-item-formaggio-name": "Formaggio",
    "menu-item-formaggio-desc":
      "Mozzarella, parmesan, gorgonzola & feta. For the cheese lovers!",
    "menu-item-formaggio-price": "155 kr",

    "menu-item-bresaola-name": "Bresaola",
    "menu-item-bresaola-desc":
      "Air-dried Bresaola from Black Angus beef, mushrooms, truffle oil & parmesan",
    "menu-item-bresaola-price": "165 kr",

    "menu-item-vegetale-name": "Vegetale",
    "menu-item-vegetale-desc":
      "Grilled Italian vegetables (zucchini, eggplant, artichoke, bell pepper & sundried tomatoes) topped with basil pesto",
    "menu-item-vegetale-price": "155 kr",

    "menu-item-di-mare-name": "Di Mare",
    "menu-item-di-mare-desc": "Shrimp, tuna, crayfish tails & fish roe sauce",
    "menu-item-di-mare-price": "159 kr",

    "menu-item-simone-name": "Simone",
    "menu-item-simone-desc": "Hickory-smoked bacon, red onion & fresh garlic",
    "menu-item-simone-price": "159 kr",

    // Menu - PASTA
    "menu-item-arrabiata-name": "Arrabiata",
    "menu-item-arrabiata-desc":
      "Cherry tomatoes, tomato sauce, red onion, chili, parsley & garlic",
    "menu-item-arrabiata-price": "129 kr",

    "menu-item-funghi-name": "Funghi",
    "menu-item-funghi-desc":
      "Mushrooms, portobello, basil, garlic, mushroom pesto & cream",
    "menu-item-funghi-price": "149 kr",

    "menu-item-carbonara-name": "Carbonara",
    "menu-item-carbonara-desc":
      "Bacon, cream, egg yolk, black pepper, garlic & parmesan",
    "menu-item-carbonara-price": "159 kr",

    "menu-item-alfredo-name": "Alfredo",
    "menu-item-alfredo-desc":
      "Chicken fillet, cream, parsley, garlic & parmesan",
    "menu-item-alfredo-price": "165 kr",

    "menu-item-rosso-name": "Rosso",
    "menu-item-rosso-desc":
      "Salami Milano, sundried tomato pesto, cream & tomato sauce, parsley & red onion",
    "menu-item-rosso-price": "159 kr",

    "menu-item-verde-name": "Verde",
    "menu-item-verde-desc":
      "Chicken fillet, basil pesto, cream, cherry tomatoes & parmesan",
    "menu-item-verde-price": "165 kr",

    "menu-item-bianco-name": "Bianco",
    "menu-item-bianco-desc":
      "Beef tenderloin, mushroom pesto, cream, red onion, mushrooms & truffle oil",
    "menu-item-bianco-price": "179 kr",

    "menu-item-scampi-name": "Scampi",
    "menu-item-scampi-desc":
      "Scampi, red onion, parsley, garlic, red pesto, tomato sauce, cream & chili",
    "menu-item-scampi-price": "179 kr",

    "menu-item-lasagne-name": "Lasagna",
    "menu-item-lasagne-desc":
      "Bolognese with ground beef, served with arugula, parmesan, cherry tomatoes & balsamic vinegar",
    "menu-item-lasagne-price": "149 kr",

    // Menu - DOLCHI
    "menu-item-cannoli-name": "Cannoli",
    "menu-item-cannoli-desc":
      "Sicilian handmade specialty, crispy croquant tube filled with nut cream",
    "menu-item-cannoli-price": "95 kr",

    "menu-item-tiramisu-name": "Tiramisu",
    "menu-item-tiramisu-desc": "Homemade Italian classic",
    "menu-item-tiramisu-price": "85 kr",

    "menu-item-nutellapizza-name": "Nutella Pizza",
    "menu-item-nutellapizza-desc":
      "Crispy and dangerously delicious, decorated with assorted sweets",
    "menu-item-nutellapizza-price": "119 kr",

    "menu-item-affogato-name": "Affogato",
    "menu-item-affogato-desc": "Espresso & vanilla ice cream",
    "menu-item-affogato-price": "75 kr",

    // Menu - Extra text top and bottom
    "menu-INSALATA-top-text":
      "At Delissimo, you'll always find delicious salads with over 30 fresh ingredients! All dishes have a green salad base. Choose any sauce!",
    "menu-INSALATA-bot-text":
      "SAUCES: Caesar, Garlic, Vinaigrette, Pesto, Mango Curry, Truffle Mayo & Chili Mayo. Also pairs perfectly with crispy pizza!",
    "menu-PIZZA-top-text":
      "Sourdough pizza, fermented for 72 hours for a uniquely crispy experience. All pizzas have a base of tomato sauce and mozzarella and are topped with fresh arugula. (We also offer gluten-free pizza dough for +15 kr and vegan cheese).",
    "menu-PIZZA-bot-text": "WANT TO UPGRADE?! ADD A BURRATA +60:-",
    "menu-PASTA-top-text":
      "Pasta made from 100% Italian durum wheat. All our pasta dishes are topped with fresh arugula and grated parmesan. All pasta dishes can be made gluten- and lactose-free. Vegan/vegetarian options are also available!",

    // About
    "about-title": "About Us",
    "about-text":
      "At Delissimo, we take pride in creating authentic Italian cuisine, inspired by Italy's rich flavors and prepared with the finest ingredients. Whether you crave a perfectly baked pizza, a flavorful pasta dish, or a delightful dessert, every bite is a tribute to tradition and passion. We offer a cozy atmosphere and personalized service – perfect for family dinners, romantic evenings, or enjoyable moments with friends in OjersjO, Partille, and Gamlestaden. Buon appetito!",
    "about-order": "ORDER",
    "about-menu": "MENU",
    "about-booking": "BOOK TABLE",

    // Booking
    "booking-title": "Book Table",
    "booking-text": "Would you like to book a table? Fill in the form below.",
    "booking-label-name": "Name:",
    "booking-label-email": "Email:",
    "booking-label-phone": "Phone Number:",
    "booking-label-requests": "Special Requests:",
    "booking-submit": "Submit",

    // Job
    "job-title": "Jobs",
    "job-openings-title": "AVAILABLE POSITIONS",
    "job-description":
      "Here you can see our available job positions and submit an application.",
    "job-label-name": "Name:",
    "job-label-email": "Email:",
    "job-label-phone": "Phone Number:",
    "job-label-message": "Message:",
    "job-label-file": "Choose file:",
    "job-label-gdpr":
      "I agree that my personal information will be processed according to the privacy policy.",
    "job-submit": "Send",
  },
};

// Funktion för att dynamiskt uppdatera hemsidans text
function updateText(lang) {
  // Uppdatera header, OBS OM ÄNDRAR ORDNING PÅ NAVIGATIONSMENYN MÅSTE ÄNDRA ORDNING HÄR OCKSÅ
  document.querySelector("nav ul li:nth-child(1) a").textContent =
    translations[lang].home;
  document.querySelector("nav ul li:nth-child(2) a").textContent =
    translations[lang].menu;
  document.querySelector("nav ul li:nth-child(3) a").textContent =
    translations[lang].about;
  document.querySelector("nav ul li:nth-child(4) a").textContent =
    translations[lang].booking;
  document.querySelector("nav ul li:nth-child(5) a").textContent =
    translations[lang].job;

  // Uppdatera footer
  document.getElementById("footer-location-1").textContent =
    translations[lang]["footer-location-1"];
  document.getElementById("footer-phone-1").textContent =
    translations[lang]["footer-phone-1"];
  document.getElementById("footer-hours-1").textContent =
    translations[lang]["footer-hours-1"];
  document.getElementById("footer-address-1").textContent =
    translations[lang]["footer-address-1"];

  document.getElementById("footer-location-2").textContent =
    translations[lang]["footer-location-2"];
  document.getElementById("footer-phone-2").textContent =
    translations[lang]["footer-phone-2"];
  document.getElementById("footer-hours-2").textContent =
    translations[lang]["footer-hours-2"];
  document.getElementById("footer-address-2").textContent =
    translations[lang]["footer-address-2"];

  document.getElementById("footer-location-3").textContent =
    translations[lang]["footer-location-3"];
  document.getElementById("footer-phone-3").textContent =
    translations[lang]["footer-phone-3"];
  document.getElementById("footer-hours-3").textContent =
    translations[lang]["footer-hours-3"];
  document.getElementById("footer-address-3").textContent =
    translations[lang]["footer-address-3"];

  document.getElementById("footer-follow-us").textContent =
    translations[lang]["footer-follow-us"];

  // Uppdatera text om man är på index-sidan (checkar om första elemetet finns)
  if (document.getElementById("homepage-intro-title")) {
    document.getElementById("homepage-intro-title").textContent =
      translations[lang]["homepage-intro-title"];
    document.getElementById("homepage-intro-text").textContent =
      translations[lang]["homepage-intro-text"];
    document.getElementById("homepage-order").textContent =
      translations[lang]["homepage-order"];
    document.getElementById("homepage-menu").textContent =
      translations[lang]["homepage-menu"];
    document.getElementById("homepage-booking").textContent =
      translations[lang]["homepage-booking"];
  }

  // Uppdatera text om man är på menu-sidan (checkar om första elemetet finns)
  if (document.getElementById("menu-title")) {
    document.getElementById("menu-title").textContent =
      translations[lang]["menu-title"];
    document.getElementById("menu-preference-btn").textContent =
      translations[lang]["menu-preference-btn"];
  }

  // array med id'n på menu items
  const menuItems = [
    "menu-item-vitloksbrod",
    "menu-item-charkbricka",
    "menu-item-burrata",
    "menu-item-carpaccio",
    "menu-item-piccola-insalata",
    "menu-item-caesar",
    "menu-item-sole",
    "menu-item-pollo",
    "menu-item-carne",
    "menu-item-margherita",
    "menu-item-capri",
    "menu-item-salami",
    "menu-item-formaggio",
    "menu-item-bresaola",
    "menu-item-vegetale",
    "menu-item-di-mare",
    "menu-item-simone",
    "menu-item-arrabiata",
    "menu-item-funghi",
    "menu-item-carbonara",
    "menu-item-alfredo",
    "menu-item-rosso",
    "menu-item-verde",
    "menu-item-bianco",
    "menu-item-scampi",
    "menu-item-lasagne",
    "menu-item-cannoli",
    "menu-item-tiramisu",
    "menu-item-nutellapizza",
    "menu-item-affogato",
  ];

  // Använder .some() för att kolla att åtminstone ett menyobjekt finns, tänker utfall man filtrerar bort allt med matpreferens-knappen
  const menuItemsExist = menuItems.some(
    (itemId) =>
      document.getElementById(itemId + "-name") !== null ||
      document.getElementById(itemId + "-desc") !== null ||
      document.getElementById(itemId + "-price") !== null
  );

  // Om åtminstone ett menyobjekt finns, uppdatera språk
  if (menuItemsExist) {
    menuItems.forEach((itemId) => {
      const dtElement = document.getElementById(itemId + "-name"); // Hämta namn <dt>
      const ddElement = document.getElementById(itemId + "-desc"); // Hämta beskrivning <dd>
      const priceElement = document.getElementById(itemId + "-price"); // Hämta pris <span>

      if (dtElement) {
        dtElement.textContent = translations[lang][itemId + "-name"]; // Uppdatera <dt> med namnet
      }
      if (ddElement) {
        const priceText = priceElement ? priceElement.outerHTML : ""; // Behåll <span class="price">
        ddElement.innerHTML = `${
          translations[lang][itemId + "-desc"]
        } ${priceText}`; // Uppdatera <dd> men behåll priset
      }
      if (priceElement) {
        priceElement.textContent = translations[lang][itemId + "-price"]; // Uppdatera priset separat
      }
    });
  }

  // array med id'n på top och bot text i menu
  const sectionTextIds = [
    "menu-INSALATA-top-text",
    "menu-INSALATA-bot-text",
    "menu-PIZZA-top-text",
    "menu-PIZZA-bot-text",
    "menu-PASTA-top-text",
  ];

  // Samma check som ovan, om åtminstonne ett menu item finns, iterera över array med top och bot text och byt språk
  if (menuItemsExist) {
    sectionTextIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = translations[lang][id];
      }
    });
  }

  // Uppdatera text om man är på about-sidan (checkar om första elemetet finns)
  if (document.getElementById("about-title")) {
    document.getElementById("about-title").textContent =
      translations[lang]["about-title"];
    document.getElementById("about-text").textContent =
      translations[lang]["about-text"];
    document.getElementById("about-order").textContent =
      translations[lang]["about-order"];
    document.getElementById("about-menu").textContent =
      translations[lang]["about-menu"];
    document.getElementById("about-booking").textContent =
      translations[lang]["about-booking"];
  }

  // Uppdatera text om man är på booking-sidan (checkar om första elemetet finns)
  if (document.getElementById("booking-title")) {
    document.getElementById("booking-title").textContent =
      translations[lang]["booking-title"];
    document.getElementById("booking-text").textContent =
      translations[lang]["booking-text"];
    document.getElementById("booking-label-name").textContent =
      translations[lang]["booking-label-name"];
    document.getElementById("booking-label-email").textContent =
      translations[lang]["booking-label-email"];
    document.getElementById("booking-label-phone").textContent =
      translations[lang]["booking-label-phone"];
    document.getElementById("booking-label-requests").textContent =
      translations[lang]["booking-label-requests"];
    document.getElementById("booking-submit").textContent =
      translations[lang]["booking-submit"];
  }

  // Uppdatera text om man är på job-sidan (checkar om första elemetet finns)
  if (document.getElementById("job-title")) {
    document.getElementById("job-title").textContent =
      translations[lang]["job-title"];

    // Inga lediga tjänster upplagda -> textContent på null -> bang bom krasch utan if-sats
    if (document.getElementById("job-description")) {
      document.getElementById("job-description").textContent =
        translations[lang]["job-description"];
    }

    document.getElementById("job-label-name").textContent =
      translations[lang]["job-label-name"];
    document.getElementById("job-label-email").textContent =
      translations[lang]["job-label-email"];
    document.getElementById("job-label-phone").textContent =
      translations[lang]["job-label-phone"];
    document.getElementById("job-label-message").textContent =
      translations[lang]["job-label-message"];
    document.getElementById("job-label-file").textContent =
      translations[lang]["job-label-file"];
    document.getElementById("job-label-gdpr").textContent =
      translations[lang]["job-label-gdpr"];
    document.getElementById("job-submit").textContent =
      translations[lang]["job-submit"];
  }
}

// Körs när sidan laddas. DOMContentLoaded så att scriptet körs efter HTML laddats klart.
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language"); // Kolla om språkval finns sparat
  setLanguage(savedLanguage || "sv"); // Använd sparat språkval, annars svenska som default

  // Funktion för formulärvalidering
  function validateForm(event, formId) {
    let valid = true; // startvärde formulär är valid

    // Funktion för att visa felmeddelande
    function showError(inputId, errorMessage) {
      document.getElementById("error-" + inputId).textContent = errorMessage; // fyll ursprungligen tomma <span> med felmeddelande
      valid = false; // validering misslyckad, kan ej skicka in formulär
    }

    // booking formulär, validera varje fält
    if (formId === "booking-form") {
      let name = document.getElementById("booking-name")?.value.trim(); // trim för blanksteg
      if (name === "") showError("name", "Vänligen ange ditt namn."); // error om inget namn angivs

      let email = document.getElementById("booking-email")?.value.trim(); // trim för blanksteg
      if (!email.includes("@"))
        showError("email", "Vänligen ange en giltig e-postadress."); // error om inget @

      let phone = document.getElementById("booking-phone")?.value.trim(); // trim för blanksteg
      if (!/^[0-9+\s-]{8,15}$/.test(phone))
        showError("phone", "Vänligen ange ett giltigt telefonnummer."); // error om ogiltigt nummer
    }

    // job formulär, validera varje fält
    if (formId === "job-form") {
      let name = document.getElementById("job-name")?.value.trim(); // trim för blanksteg
      if (name === "") showError("job-name", "Vänligen ange ditt namn."); // error om inget namn angivs

      let email = document.getElementById("job-email")?.value.trim(); // trim för blanksteg
      if (!email.includes("@"))
        showError("job-email", "Vänligen ange en giltig e-postadress."); // error om inget @

      let phone = document.getElementById("job-phone")?.value.trim(); // trim för blanksteg
      if (!/^[0-9+\s-]{8,15}$/.test(phone))
        showError("job-phone", "Vänligen ange ett giltigt telefonnummer."); // error om ogiltigt nummer

      let file = document.getElementById("job-file")?.files.length;
      if (file === 0) showError("job-file", "Du måste ladda upp ett CV."); // error om ingen fil uppladdad

      let gdprChecked = document.getElementById("job-gdpr")?.checked;
      if (!gdprChecked)
        showError("job-gdpr", "Du måste godkänna GDPR-villkoren."); // error om klickbox ej ifylld
    }

    // kan ej skicka in formulär om ett steg i valideringen misslyckats
    if (!valid) {
      event.preventDefault();
      return;
    }

    // Om validering lyckas, skicka formuläret via Formspree istället för mailto
    event.preventDefault(); // stoppa standardformuläret från att skicka så sidan inte laddas om, nödvändigt pga JavaScript
    let form = event.target; // formuläret som försöktes skickas
    let formData = new FormData(form); // skapa FormData-objekt för Formspree med alla formulärfält

    // skicka formulärdata till Formspree
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }, // acceptera JSON-svar från Formspree
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("success-message").style.display = "block"; // visa bekräftelsemeddelande efter lyckad skickning
          form.reset(); // töm formuläret efter lyckad skickning
        } else {
          alert("Något gick fel. Försök igen."); // visa felmeddelande om skickning misslyckas
        }
      })
      .catch((error) => { // utfall Formspree's sida är nere eller man har nätverksproblem eller liknande
        alert("Nätverksfel. Försök igen.");
      });
  }

  // kör validateForm när "Skicka" knapp trycks på i booking formulär
  let bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      validateForm(event, "booking-form");
    });
  }

  // kör validateForm när "Skicka" knapp trycks på i job formulär
  let jobForm = document.getElementById("job-form");
  if (jobForm) {
    jobForm.addEventListener("submit", function (event) {
      validateForm(event, "job-form");
    });
  }
});
