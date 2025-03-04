// START setLanguage() - Funktion för att spara valt språk och initiera språkändring av sidan -------------------------------------
// Byt attributet lang i HTML, sv eller en
function setLanguage(lang, manual = false) {
  if (lang === "sv") {
    document.documentElement.lang = "sv";

    // spara valt språk enbart om man manuellt valde språk, inte när man byter sida eller dylikt
    if (manual) {
      localStorage.setItem("language", "sv");
    }
    updateText("sv"); // avnänd updateText, dynamiskt uppdatera hemsidans text
  } else {
    document.documentElement.lang = "en";

    // spara valt språk enbart om man manuellt valde språk, inte när man byter sida eller dylikt
    if (manual) {
      localStorage.setItem("language", "en");
    }
    updateText("en"); // avnänd updateText, dynamiskt uppdatera hemsidans text
  }
}
// SLUT setLanguage() - Funktion för att spara valt språk och initiera språkändring av sidan -------------------------------------

// START updateText() - Funktion för att dynamiskt uppdatera hemsidans text -------------------------------------------------------
function updateText(lang) {
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
      "menu-item-vitloksbrod-desc":
        "Frasigt bröd med vitlök, parmesan & oregano",
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

      // Menu - dropdownmeny
      "menu-label-dropdown-pesceterian": "Pesceterian",
      "menu-label-dropdown-vegetarian": "Vegeterian",
      "menu-label-dropdown-vegan": "Vegan",
      "menu-label-dropdown-gluten-free": "Glutenfri",
      "menu-label-dropdown-lactose-free": "Laktosfri",
      "menu-label-dropdown-nut-free": "Nötfri",

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
      "menu-item-vitloksbrod-price": "79 SEK",

      "menu-item-charkbricka-name": "Charcuterie Board",
      "menu-item-charkbricka-desc":
        "Italian cold cuts such as salami, prosciutto & bresaola, arugula & mixed antipasti vegetables",
      "menu-item-charkbricka-price": "199 SEK",

      "menu-item-burrata-name": "Burrata",
      "menu-item-burrata-desc":
        "Creamy burrata, cherry tomatoes, basil, arugula, basil pesto & balsamic vinegar",
      "menu-item-burrata-price": "139 SEK",

      "menu-item-carpaccio-name": "Carpaccio",
      "menu-item-carpaccio-desc":
        "Bresaola, arugula, parmesan, balsamic vinegar",
      "menu-item-carpaccio-price": "189 SEK",

      "menu-item-piccola-insalata-name": "Piccola Insalata",
      "menu-item-piccola-insalata-desc":
        "Small side salad with lettuce, tomato, cucumber, feta, onion & arugula",
      "menu-item-piccola-insalata-price": "89 SEK",

      // Menu - INSALATA
      "menu-item-caesar-name": "Caesar",
      "menu-item-caesar-desc":
        "Chicken fillet & smoked bacon from the oven with romaine lettuce, homemade croutons, cucumber, tomato, parmesan & arugula",
      "menu-item-caesar-price": "149 SEK",

      "menu-item-sole-name": "Sole",
      "menu-item-sole-desc":
        "Grilled Italian vegetable mix (bell pepper, tomatoes, eggplant, artichoke & zucchini), fresh tomato, cucumber & olives",
      "menu-item-sole-price": "145 SEK",

      "menu-item-pollo-name": "Pollo",
      "menu-item-pollo-desc":
        "Chicken fillet, cucumber, tomato, red onion, corn, feta & pesto pasta",
      "menu-item-pollo-price": "145 SEK",

      "menu-item-carne-name": "Carne",
      "menu-item-carne-desc":
        "Prosciutto, Salami Milano & Bresaola, cucumber, cherry tomatoes, parmesan, olives, arugula",
      "menu-item-carne-price": "169 SEK",

      // Menu - PIZZA
      "menu-item-margherita-name": "Margherita",
      "menu-item-margherita-desc":
        "A classic enhanced with our homemade basil pesto",
      "menu-item-margherita-price": "135 SEK",

      "menu-item-capri-name": "Capri",
      "menu-item-capri-desc": "Prosciutto, olives & artichokes",
      "menu-item-capri-price": "159 SEK",

      "menu-item-salami-name": "Salami",
      "menu-item-salami-desc":
        "Salami Milano, bell pepper & homemade sundried tomato pesto",
      "menu-item-salami-price": "159 SEK",

      "menu-item-formaggio-name": "Formaggio",
      "menu-item-formaggio-desc":
        "Mozzarella, parmesan, gorgonzola & feta. For the cheese lovers!",
      "menu-item-formaggio-price": "155 SEK",

      "menu-item-bresaola-name": "Bresaola",
      "menu-item-bresaola-desc":
        "Air-dried Bresaola from Black Angus beef, mushrooms, truffle oil & parmesan",
      "menu-item-bresaola-price": "165 SEK",

      "menu-item-vegetale-name": "Vegetale",
      "menu-item-vegetale-desc":
        "Grilled Italian vegetables (zucchini, eggplant, artichoke, bell pepper & sundried tomatoes) topped with basil pesto",
      "menu-item-vegetale-price": "155 SEK",

      "menu-item-di-mare-name": "Di Mare",
      "menu-item-di-mare-desc": "Shrimp, tuna, crayfish tails & fish roe sauce",
      "menu-item-di-mare-price": "159 SEK",

      "menu-item-simone-name": "Simone",
      "menu-item-simone-desc": "Hickory-smoked bacon, red onion & fresh garlic",
      "menu-item-simone-price": "159 SEK",

      // Menu - PASTA
      "menu-item-arrabiata-name": "Arrabiata",
      "menu-item-arrabiata-desc":
        "Cherry tomatoes, tomato sauce, red onion, chili, parsley & garlic",
      "menu-item-arrabiata-price": "129 SEK",

      "menu-item-funghi-name": "Funghi",
      "menu-item-funghi-desc":
        "Mushrooms, portobello, basil, garlic, mushroom pesto & cream",
      "menu-item-funghi-price": "149 SEK",

      "menu-item-carbonara-name": "Carbonara",
      "menu-item-carbonara-desc":
        "Bacon, cream, egg yolk, black pepper, garlic & parmesan",
      "menu-item-carbonara-price": "159 SEK",

      "menu-item-alfredo-name": "Alfredo",
      "menu-item-alfredo-desc":
        "Chicken fillet, cream, parsley, garlic & parmesan",
      "menu-item-alfredo-price": "165 SEK",

      "menu-item-rosso-name": "Rosso",
      "menu-item-rosso-desc":
        "Salami Milano, sundried tomato pesto, cream & tomato sauce, parsley & red onion",
      "menu-item-rosso-price": "159 SEK",

      "menu-item-verde-name": "Verde",
      "menu-item-verde-desc":
        "Chicken fillet, basil pesto, cream, cherry tomatoes & parmesan",
      "menu-item-verde-price": "165 SEK",

      "menu-item-bianco-name": "Bianco",
      "menu-item-bianco-desc":
        "Beef tenderloin, mushroom pesto, cream, red onion, mushrooms & truffle oil",
      "menu-item-bianco-price": "179 SEK",

      "menu-item-scampi-name": "Scampi",
      "menu-item-scampi-desc":
        "Scampi, red onion, parsley, garlic, red pesto, tomato sauce, cream & chili",
      "menu-item-scampi-price": "179 SEK",

      "menu-item-lasagne-name": "Lasagna",
      "menu-item-lasagne-desc":
        "Bolognese with ground beef, served with arugula, parmesan, cherry tomatoes & balsamic vinegar",
      "menu-item-lasagne-price": "149 SEK",

      // Menu - DOLCHI
      "menu-item-cannoli-name": "Cannoli",
      "menu-item-cannoli-desc":
        "Sicilian handmade specialty, crispy croquant tube filled with nut cream",
      "menu-item-cannoli-price": "95 SEK",

      "menu-item-tiramisu-name": "Tiramisu",
      "menu-item-tiramisu-desc": "Homemade Italian classic",
      "menu-item-tiramisu-price": "85 SEK",

      "menu-item-nutellapizza-name": "Nutella Pizza",
      "menu-item-nutellapizza-desc":
        "Crispy and dangerously delicious, decorated with assorted sweets",
      "menu-item-nutellapizza-price": "119 SEK",

      "menu-item-affogato-name": "Affogato",
      "menu-item-affogato-desc": "Espresso & vanilla ice cream",
      "menu-item-affogato-price": "75 SEK",

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

      // Menu - dropdownmeny
      "menu-label-dropdown-pesceterian": "Pesceterian",
      "menu-label-dropdown-vegetarian": "Vegetarian",
      "menu-label-dropdown-vegan": "Vegan",
      "menu-label-dropdown-gluten-free": "Gluten-free",
      "menu-label-dropdown-lactose-free": "Lactose-free",
      "menu-label-dropdown-nut-free": "Nut-free",

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

  // updatera text på alla element som har en ID som matchar något i översättningslistan ovan (translations)
  Object.keys(translations[lang]).forEach((id) => {
    let element = document.getElementById(id);
    if (element) {
      let priceSpan = element.querySelector(".price"); // notera priset
      element.innerHTML = translations[lang][id]; // uppdatera texten (extratexten <span> förloras)
      if (priceSpan) element.appendChild(priceSpan); // lägg tillbaka priset <span>
    }
  });
}
// SLUT updateText() - Funktion för att dynamiskt uppdatera hemsidans text -------------------------------------------------------

// START - Task 1 - "Hello, JavaScript!" -----------------------------------------------------------------------------------------
const helloButton = document.getElementById("hello-btn");

// visa alert-meddelande "Hello, JavaScript!" när "Show Message" knapp trycks i extras-page
if (helloButton) {
  helloButton.addEventListener("click", function () {
    alert("Hello, JavaScript!");
  });
}
// SLUT - Task 1 - "Hello, JavaScript!" ------------------------------------------------------------------------------------------

// START - Task 3 - JavaScript into your HTML ------------------------------------------------------------------------------------
// använd mousedown() och mouseup() för att visa att tryck på ett alternativ
// i navigationsmenyn har registrerats
document.querySelectorAll("nav ul li a").forEach((link) => {
  // shifta till mörkröd bakgrund och vit text under 0.05 sekunder när
  // man trycker på ett av alternativen
  link.addEventListener("mousedown", function () {
    this.style.backgroundColor = "#6a3326";
    this.style.color = "#ffffff";
  });

  // byt tillbaka till dom ursprungliga färgerna när man slutar trycka
  link.addEventListener("mouseup", function () {
    this.style.backgroundColor = "";
    this.style.color = "";
  });
});
// SLUT - Task 3 - JavaScript into your HTML -------------------------------------------------------------------------------------

// START - DOMContentLoaded --------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // kolla om språkval finns sparat
  const savedLanguage = localStorage.getItem("language") || "sv";
  // använd sparat språkval, annars svenska som default
  setLanguage(savedLanguage);

  // START validateForm() - Funktion för formulärvalidering ----------------------------------------------------------------------
  function validateForm(event, formId) {
    let valid = true; // startvärde formulär är valid

    // START showError() - Funktion för att visa felmeddelande -------------------------------------------------------------------
    function showError(inputId, errorMessage) {
      // fyll ursprungligen tomma <span> med felmeddelande
      document.getElementById("error-" + inputId).textContent = errorMessage;
      valid = false; // validering misslyckad, kan ej skicka in formulär
    }
    // SLUT showError() - Funktion för att visa felmeddelande --------------------------------------------------------------------

    // START VALIDATEFORM SEKTION ------------------------------------------------------------------------------------------------
    // booking formulär, validera varje fält
    if (formId === "booking-form") {
      // trim för blanksteg
      let name = document.getElementById("booking-name")?.value.trim();
      let phone = document.getElementById("booking-phone")?.value.trim();
      let email = document.getElementById("booking-email")?.value.trim();

      // error om inget namn angivs
      if (name === "" && savedLanguage == "sv")
        showError("name", "Vänligen ange ditt namn.");
      if (name === "" && savedLanguage == "en")
        showError("name", "Please provide your name.");

      // error om inget @
      if (!email.includes("@") && savedLanguage == "sv")
        showError("email", "Vänligen ange en giltig e-postadress.");
      if (!email.includes("@") && savedLanguage == "en")
        showError("email", "Please provide a viable  email.");

      // error om ogiltigt nummer
      if (!/^[0-9+\s-]{8,15}$/.test(phone)) {
        if (savedLanguage == "sv")
          showError("phone", "Vänligen ange ett giltigt telefonnummer.");
        if (savedLanguage == "en")
          showError("phone", "Please provide a viable phone number.");
      }
    }

    // job formulär, validera varje fält
    if (formId === "job-form") {
      // trim för blanksteg
      let name = document.getElementById("job-name")?.value.trim();
      let email = document.getElementById("job-email")?.value.trim();
      let phone = document.getElementById("job-phone")?.value.trim();

      // error om inget namn angivs
      if (name === "" && savedLanguage == "sv")
        showError("job-name", "Vänligen ange ditt namn.");
      if (name === "" && savedLanguage == "en")
        showError("job-name", "Please provide your name.");

      // error om inget @
      if (!email.includes("@") && savedLanguage == "sv")
        showError("job-email", "Vänligen ange en giltig e-postadress.");
      if (!email.includes("@") && savedLanguage == "en")
        showError("job-email", "Please provide a viable  email.");

      // error om ogiltigt nummer
      if (!/^[0-9+\s-]{8,15}$/.test(phone)) {
        if (savedLanguage == "sv")
          showError("job-phone", "Vänligen ange ett giltigt telefonnummer.");
        if (savedLanguage == "en")
          showError("job-phone", "Please provide a viable phone number.");
      }

      // error om ingen fil uppladdad
      let file = document.getElementById("job-file")?.files.length;
      if (file === 0 && savedLanguage == "sv")
        showError("job-file", "Vänligen ladda upp ett CV.");
      if (file === 0 && savedLanguage == "en")
        showError("job-file", "Please upload a CV.");

      // error om klickbox ej ifylld
      let gdprChecked = document.getElementById("job-gdpr")?.checked;
      if (!gdprChecked && savedLanguage == "sv")
        showError("job-gdpr", "Vänligen godkänn GDPR-villkoren.");
      if (!gdprChecked && savedLanguage == "en")
        showError("job-gdpr", "Please accept the GDPR-conditions.");
    }

    // kan ej skicka in formulär om ett steg i valideringen misslyckats
    if (!valid) {
      // för att stoppa standardformuläret från att skicka
      // så sidan inte laddas om, nödvändigt pga JavaScript
      event.preventDefault();
      return;
    }

    // formuläret som försöktes skickas
    let form = event.target;
    // skapa FormData-objekt för Formspree med alla formulärfält
    let formData = new FormData(form);

    // skicka formulärdata till Formspree
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }, // acceptera JSON-svar från Formspree
    })
      .then((response) => {
        if (response.ok) {
          // visa bekräftelsemeddelande efter lyckad skickning
          document.getElementById("success-message").style.display = "block";
          form.reset(); // töm formuläret efter lyckad skickning
        } else {
          alert("Något gick fel. Försök igen."); // visa felmeddelande om skickning misslyckas
        }
      })
      .catch((error) => {
        // utfall Formspree's sida är nere eller man har nätverksproblem eller liknande
        alert("Nätverksfel. Försök igen.");
      });
  }
  // SLUT validateForm() - Funktion för formulärvalidering ----------------------------------------------------------------------

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
  // SLUT VALIDATEFORM SEKTION ---------------------------------------------------------------------------------------------------

  // START - Task 3 - JavaScript and DOM -----------------------------------------------------------------------------------------
  // använd mousedown() och mouseup() för visa att tryck på alternativ i navigationsfältet registrerats
  document.querySelectorAll("nav ul li a").forEach((link) => {
    // byt till mörkröd bakgrund och vit textfärg när man trycker på ett alternativ i navigationsmenyn (full färgändring efter 0.2s)
    link.addEventListener("mousedown", function () {
      this.style.backgroundColor = "#6a3326";
      this.style.color = "#ffffff";
    });

    // återställ originalfärger för alternativet i navigationsfältet efter man slutat trycka
    link.addEventListener("mouseup", function () {
      setTimeout(() => {
        this.style.backgroundColor = "";
        this.style.color = "";
      }, 200);
    });
  });
  // SLUT - Task 3 - JavaScript and DOM ------------------------------------------------------------------------------------------

  // START - Task 2 - JavaScript into your HTML & Task 4 - jQuery ----------------------------------------------------------------
  // knapp för att toggla dropdownmenyn
  const preferenceBtn = document.getElementById("menu-preference-btn");

  // klickrutorna för olika matpreferenser
  const checkboxes = document.querySelectorAll(".preference-checkbox");

  // lista med menu-items
  const menuItems = document.querySelectorAll(".menu-item");

  // dubbelkolla att vi är på menu-page
  if (preferenceBtn) {
    // jQuery slideToggle() för dropdownmenyn (Task 4)
    $("#menu-preference-btn").click(() => {
      // slide-animation för att visa/dölja dropdownmenyn
      $("#menu-food-preference-dropdown-container").slideToggle(300);
    });

    // START updateMenuItems() - Funktion för att uppdatera menyn och                 --------------------------------------------
    // skildra vilka menu-items som är i linje med ens valda matpreferenses dvs.
    // beroende på vilka klickrutor som är iklickade i dropdownmenyn för matpreferenser
    function updateMenuItems() {
      // skapa en tom lista för dom valda matpreferenserna
      let selectedPreferences = [];

      // för varje matpreferens (klickruta), kolla om matpreferensen är iklickad,
      // om ja -> lägg till i listan selectedPreferences
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          // om matpreferens är iklickad lägg till i slutet av listan
          selectedPreferences.push(checkbox.value);
        }
      });

      // gå igenom alla menu-items och uppdatera utseende beroende på
      // vilka matpreferenser som är valda
      menuItems.forEach((menuItem) => {
        // hämta kategorier från data-category
        let itemCategories = menuItem.dataset.category.split(" ");

        // kolla om alla iklickade matpreferenser stämmer för menu-item
        let isMatching = selectedPreferences.every((pref) =>
          itemCategories.includes(pref)
        );

        // om alla iklickade matpreferenser matchar med menu-item's data-category
        // (isMatching = true) eller om inga matpreferenser är iklickade
        if (isMatching || selectedPreferences.length === 0) {
          // använder animate() funktion (Task 4) för att animera ändring till normalutseende
          // för menu-items går uppenbarligen att ändra färg på texten med jQuery UI trots
          // att det är en icke-numerisk CSS-egenskap
          $(menuItem).animate(
            { opacity: 1, fontSize: "16px", color: "#FFFFFF" },
            300
          );
          // ändra font-stil, kan ej animera icke-numeriska CSS-egenskaper
          menuItem.style.fontStyle = "normal";
        } else {
          // använder animate() funktion (Task 4) för att animera ändring av utseende för
          // menu-items som ej matchar iklickade matpreferenser går uppenbarligen att ändra
          // färg på texten med jQuery UI trots att det är en icke-numerisk CSS-egenskap
          $(menuItem).animate(
            { opacity: 0.5, fontSize: "12px", color: "#E09E9E" },
            300
          );
          // ändra font-stil, kan ej animera icke-numeriska CSS-egenskaper
          menuItem.style.fontStyle = "italic";
        }
      });
    }
    // SLUT updateMenuItems() - Funktion för att uppdatera menyn och                 -----------------------------------------------
    // skildra vilka menu-items som är i linje med ens valda matpreferenses dvs.
    // beroende på vilka klickrutor som är iklickade i dropdownmenyn för matpreferenser

    // START handleExclusiveSelection() - Funktion för att hantera ömsesidigt         -----------------------------------------------
    // uteslutande matpreferenser, specifikt vegeterian, vegan och pesceterian
    function handleExclusiveSelection(event) {
      const clickedValue = event.target.value; // spara value för den senast iklickade klickrutan

      // Om rutan för vegetarian klickas, avmarkera klickrutan för vegan och pesceterian
      if (clickedValue === "vegetarian") {
        document.querySelector('input[value="vegan"]').checked = false;
        document.querySelector('input[value="pesceterian"]').checked = false;
      }
      // Om rutan för vegan klickas, avmarkera klickrutan för vegeterian och pesceterian
      else if (clickedValue === "vegan") {
        document.querySelector('input[value="vegetarian"]').checked = false;
        document.querySelector('input[value="pesceterian"]').checked = false;
      }
      // Om rutan för pesceterian klickas, avmarkera klickrutan för vegeterian och vegan
      else if (clickedValue === "pesceterian") {
        document.querySelector('input[value="vegetarian"]').checked = false;
        document.querySelector('input[value="vegan"]').checked = false;
      }
    }
    // SLUT handleExclusiveSelection() - Funktion för att hantera ömsesidigt         -------------------------------------------------
    // uteslutande matpreferenser, specifikt vegeterian, vegan och pesceterian

    // lägg till event listeners på klickrutorna för att hantera ömsesidigt
    // uteslutande alternativ samt uppdatera utseendet för menu-items
    document.querySelectorAll(".preference-checkbox").forEach((checkbox) => {
      checkbox.addEventListener("change", function (event) {
        handleExclusiveSelection(event); // hantera ömsesidigt uteslutande matpreferenser
        updateMenuItems(); // uppdatera utseendet på menu-items beroende på valda matpreferenser
      });
    });
  }
  // SLUT - Task 2 - JavaScript into your HTML & Task 4 - jQuery --------------------------------------------------------------------

  // START - Task 5 - jQuery UI or <canvas> object in HTML5 -------------------------------------------------------------------------
  // eventuella önskemål på jobb-sidan
  const requestsField = document.getElementById("requests");

  // dubbelkolla at vi är på booking-sidan
  if (requestsField) {
    // använd jQuery UI resizable() funktionen så att man kan göra fältet för "Eventuella önskemål" större
    $("#requests").resizable({
      handles: "s", // enbart kunna ändra storlek genom att dra i bottenkanten av fältet (s för south)
      minHeight: 50,
      maxHeight: 600,
    });
  }
  // SLUT - Task 5 - jQuery UI or <canvas> object in HTML5 --------------------------------------------------------------------------
});
// START - DOMContentLoaded --------------------------------------------------------------------------------------------------------------------------------------
