var vm = new Vue({
  el: '#boddy',
  data: {
      language: 0,
      tittleBocadillos: ["Entrepans","Bocadillos","Sandwiches","Sandwiches"],
      tittlePlatos: ["Plats","Platos","Dishes","Plats"],
      tittleRaciones:["Racions","Raciones","Assorted","Assorties"],
      tittleVinos:["Vins", "Vinos", "Wines", "Vins"],
      tittlePostres:["Postres", "Postres", "Desserts", "Desserts"],
      tittleAperitivos:["Aperitius", "Aperitivos", "Appetizers", "Apéritifs"],
      tittleFrios: ["ENTREPANS FREDS", "BOCADILLOS FRÍOS", "COLD SANDWICHES", "SANDWICHS FROIDS"],
      tittleCalientes: ["ENTREPANS CALENTS", "BOCADILLOS CALIENTES", "HOT SANDWICHES", "SANDWICHS CHAUDS"],
      tittleIbericas: ["EMBOTITS IBÈRICS DE GLA", "EMBUTIDOS IBÉRICOS DE BELLOTA", "ACORN-FED IBERIAN COLD SAUSAGES", "CHARCUTERIE IBÉRIQUE DE GLAND"],
      tittleNormales: ["RACIONS VARIADES", "RACIONES VARIADAS", "ASSORTED PORTIONS", "PORTIONS ASSORTIES"],
      tittleEnsaladas: ["AMANIDES","ENSALADAS","SALADS","SALADES"],
      tittlePlatosIbericos: ["CARNS IBÈRIQUES","CARNES IBÉRICAS","IBERIAN MEATS","VINADES IBÉRIQUES"],
      tittlePlatosCombinados: ["PLATS COMBINATS", "PLATOS COMBINADOS", "COMBINED DISHES", "PLATS COMBINÉS"],
      tittlePlatosInfantiles: ["PLATS INFANTILS", "PLATOS INFANTILES", "CHILDREN'S DISHES", "PLATS POUR ENFANTS"],
      tittleVinoTinto: ["VINS NEGRES", "VINOS TINTOS", "RED WINES", "VINS ROUGES"],
      tittleVinoBlanco: ["VINS BLANCS", "VINOS BLANCOS", "WHITE WINES", "VINS BLANCS"],
      tittleVinoRosado: ["VINS ROSATS", "VINOS ROSADOS", "ROSÉ WINES", "VINS ROSÉS"],
      tittleCavas: ["CAVES", "CAVAS", "CAVAS", "CAVAS"],
      mini:["mini", "mini", "mini", "mini"],
      mitja:["mitja","media","half","demi"],
      descEmbIberics: ["Racions amb torrades incloses", "Raciones con torradas incluídas", "Rations included toast", "Rations inclus toasts"],
      descEnsaladas: ["Amb verdures fresques", "Con verduras frescas", "Fresh vegetables", "Légumes frais"],
      descPlatosIbericos: ["Carns de porc ibèric de glà<br>No utilitzem patates congelades","Carnes de cerdo ibérico de bellota<br>No utilizamos patatas congeladas","Acorn-fed Iberian pork<br>We do not use frozen chips","Porc ibérique nourri au gland<br>Nous n'utilisons pas de pommes de terre surgelées"],
      descPlatosCombinados: ["No utilitzem patates congelades","No utilizamos patatas congeladas","We do not use frozen chips","Nous n'utilisons pas de pommes de terre surgelées"],
      descPlatosInfantiles: ["Racions adaptades a nens<br>No utilitzem patates congelades","Raciones adaptadas a niños<br>No utilizamos patatas congeladas","Child-friendly portions<br>We do not use frozen chips","Portions adaptées aux enfants<br>Nous n'utilisons pas de pommes de terre surgelées"],
      bocadillos: "noSelected",
      raciones: "noSelected",
      platos: "noSelected",
      postres: "noSelected",
      vinos: "noSelected",
      aperitivos:"noSelected",
      selectMenu: "none",
      bocadillosFrios: [],
      bocadillosCalientes: [],
      racionesIbericas: [],
      racionesNormales: [],
      ensaladas: [],
      platosIbericos: [],
      platosCombinados: [],
      platosInfantiles: [],
      vinosTintos: [],
      vinosBlancos: [],
      vinosRosados: [],
      cavas: [],
      listaAperitivos: [],
      listaPostres: [],
      explicacionBocatas: ["* Si no es diu el contrari<br>Ingredients extra (Formatge, ceba, beicon) <b>+0.50</b>","* Si no se dice lo contrario<br>Ingredientes extra (Queso, cebolla, beicon) <b>+0.50</b>","* Unless otherwise stated<br>Extra ingredients (Cheese, onion, bacon) <b>+0.50</b>","*Sauf indication contraire<br>Suppléments (fromage, oignon, bacon) <b>+0,50</b> "],
      alergias: ["Comuniqui al personal si té alguna intolerància o al·lèrgia alimentària", "Comunique al personal si tiene alguna intolerancia o alergia alimentaria","If you have any food intolerance or allergy let us know", "Si vous avez une intolérance ou allergie alimentaire laissez nous savoir"],
      terraza: ["Suplement en terrassa, events i festius especials <b>+0.20</b>", "Suplemento en terraza, eventos y festivos especiales <b>+0.20</b>", "Terrace, events and special holidays have a supplement <b>+0.20</b>", "Terrasse, événements et especial jours fériés ont un supplément <b>+0.20</b>"]
  },
  
  methods: {
    select: function (name) {
        
        if (name !== this.selectMenu){
            this[this.selectMenu] = "noSelected";
            this[name] = "selected";
            this.selectMenu = name;
        }
        else{
            this[name] = "noSelected";
            this.selectMenu = "none";
        }
            
        window.scrollTo(0, 0);
    },
    changeLanguage: function (langIndex){
        this.language = langIndex;
    }
  },
  mounted() { 
    this.bocadillosFrios.push({
        imatge:"./BocJamon.jpg", 
        nom: ["Pernil", "Jamón", "Ham", "Jambon"], 
        desripcio: ["","","",""],
        preu: ["4.50", "2.75"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocQueso.jpg", 
        nom: ["Formatge", "Queso", "Chheese", "Formage"], 
        desripcio: ["","","",""], 
        preu: ["4.25", "2.75"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocJamonDulce.jpg", 
        nom: ["Pernil dolç", "Jamón dulce", "Cooked ham", "Jambon cuit"], 
        desripcio: ["","","",""],
        preu: ["4.25", "2.75"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocAtun.jpg", 
        nom: ["Tonyina", "Atún", "Tuna", "Thon"], 
        desripcio: ["","","",""], 
        preu: ["4.25", "2.75"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocAnchoas.jpg", 
        nom: ["Anxoves de l'Escala", "Anchoas de la Escala", "Anchovies from La Escala", "Anchois de La Escala"], 
        desripcio: ["","","",""],
        preu: ["6.75", "4.75"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocChorizo.jpg", 
        nom: ["Xoriço ibèric", "Chorizo ibérico", "Iberian chorizo", "Chorizo ibérique"], 
        desripcio: ["","","",""], 
        preu: ["4.25", "2.75"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocSalchichon.jpg", 
        nom: ["Llonganissa ibèrica", "Salchichón ibérico", "Iberian spiced sausage", "Saucisson ibérique"],
        desripcio: ["","","",""],
        preu: ["4.25", "2.75"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocLomoIberico.jpg", 
        nom: ["Llom ibèric de gla", "Lomo ibérico de bellota", "Ibeian acorn-fed pork lion sausage", "Échine ibérique de gland"], 
        desripcio: ["","","",""], 
        preu: ["10.00", "5.50"]
    });
    this.bocadillosFrios.push({
        imatge:"./BocJamonIberico.jpg", 
        nom: ["Pernil ibèric de gla", "Jamón ibérico de bellota", "Acorn-fed iberian ham", "Jambon ibérique de gland"], 
        desripcio: ["Tallat a mà","Cortado a mano","Hand cut","Coupe à la main"], 
        preu: ["11.00", "6.00"]
    });
    
    this.bocadillosCalientes.push({
        imatge:"./BocLomo.jpg", 
        nom: ["Llom", "Lomo", "Pork loin", "Filet de porc"], 
        desripcio: ["","","",""], 
        preu: ["4.50", "3.25"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocBeicon.jpg", 
        nom: ["Bacó", "Beicon", "Bacon", "Bacon"], 
        desripcio: ["","","",""], 
        preu: ["4.50", "3.25"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocHamburguesa.jpg", 
        nom: ["Hamburguesa", "Hamburguesa", "Burger", "Hamburguer"], 
        desripcio: ["Amb ceba<br>En baguette +0.50€","Con cebolla<br>En baguette +0.50€","With onion<br>On baguette +0.50€","Avec oignon<br>Sur baguette +0,50€"], 
        preu: ["4.25", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocHamburguesaEspecial.jpg", 
        nom: ["Hamburguesa espcecial Cèntric", "Hamburguesa especial Cèntric", "Special burger \"Cèntric\"", "Burger spécial \"Cèntric\""], 
        desripcio: ["Amb ceba, formatge, anciam, tomata i beicon<br>En baguette +0.50€","Con cebolla, queso, lechuga, tomate y beicon<br>En baguette +0.50€","With onion, cheese, lettuce, tomato and bacon<br>On baguette +0.50€","Avec oignon, fromage, laitue, tomate et bacon<br>Sur baguette +0,50€"], 
        preu: ["5.50", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocSandwich.jpg", 
        nom: ["Sandvitx", "Sándwich", "Sandwich", "Sandwich"], 
        desripcio: ["Amb pernil dolç i formatge<br>Torrat amb oli d'oliva","Con jamon dulce i queso<br>Torrado con aceite de oliva","With sweet ham and cheese<br>Toasted in olive oil","Avec jambon doux et fromage<br>Grillé à l'huile d'olive"], 
        preu: ["3.75", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocSandwichEspecial.jpg",
        nom: ["Sandvitx especial Cèntric", "Sándwich especial Cèntric", "Special sandwich \"Cèntric\"", "Sandwich spécial \"Cèntric\""], 
        desripcio: ["Amb pernil dolç, formatge, enciam i tomata<br>Torrat en oli d'oliva","Con jamon dulce, queso, lechuga y tomate<br>Torrado con aceite de oliva","With sweet ham, cheese, lettuce and tomato<br>Toasted in olive oil","Avec jambon doux, fromage, laitue et tomate<br>Grillé à l'huile d'olive"], 
        preu: ["5.50", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocFrankfurt.jpg", 
        nom: ["Frankfurt", "Frankfurt", "Frankfurt", "Frankfurt"], 
        desripcio: ["","","",""], preu: ["3.75", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocBrasburt.jpg", 
        nom: ["Brasburt", "Brasburt", "Brasburt", "Brasburt"], 
        desripcio: ["","","",""], preu: ["4.50", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocCalamares.jpg", 
        nom: ["Calamars", "Calamares", "Squids", "Calamars"], 
        desripcio: ["","","",""], 
        preu: ["5.50", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocTortilla.jpg", 
        nom: ["Truita francesa", "Tortilla francesa", "Omelette", "Omelette"], 
        desripcio: ["Formatge o ceba +0.75€<br>Pernil o tonyina +1.75€ &nbsp; &nbsp; Anxoves +3.50€","Queso o cebolla +0.75€<br>Jamón o atún +1.75€ &nbsp; &nbsp; Anchoas +3.50€","Cheese or onion +0.75€<br>Ham or tuna +1.75€ &nbsp; &nbsp; Anchovies + 3.50€","Fromage ou oignon +0,75€<br>Jambon ou thon +1,75€ &nbsp; &nbsp; Anchois +3,50€"], 
        preu: ["4.25", "3.25"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocSalchichas.jpg", 
        nom: ["Saltxitxes", "Salchichas", "Sausages", "Saucisses"], 
        desripcio: ["","","",""], preu: ["4.50", "3.25"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocButifarra.jpg", 
        nom: ["Botifarra del país", 
            "Butifarra del país", 
            "Botifarra (large Catalan pork sausage)", 
            "Botifarra (Longue saucisse de porc catalane)"], 
        desripcio: ["","","",""],
        preu: ["5.00", "0"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocChistorra.jpg", 
        nom: ["Xistorra", "Chistorra", "Thin chorizo", "Chorizo mince"], 
        desripcio: ["","","",""], 
        preu: ["4.50", "3.25"]
    });
    this.bocadillosCalientes.push({
        imatge:"./BocPinchito.jpg", 
        nom: ["Broquetes", "Pinchitos", "Little brochette", "Petit broquette"], 
        desripcio: ["","","",""], 
        preu: ["4.85", "0"]
    });
  
    this.racionesIbericas.push({
        imatge:"./RacionJamon.jpg", 
        nom: ["Pernil", "Jamón", "Ham", "Jambon"], 
        desripcio: ["Tallat a mà","Cortado a mano","Hand cut","Coupe à la main"], 
        preu: ["25.00", "19.00"]
    });
    this.racionesIbericas.push({
        imatge:"./RacionLomo.jpg", 
        nom: ["Llom<br>Llomet", "Lomo<br>Lomito", "Pork loin<br>Pork little loin", "Filet de porc<br>Filet petit de porc"], 
        desripcio: ["","","",""], 
        preu: ["23.00", "17.00"]
    });
    this.racionesIbericas.push({
        imatge:"./RacionSalchichon.jpg", 
        nom: ["Llonganissa", "Salchichón", "Spiced sausage", "Saucisson"], 
        desripcio: ["","","",""], 
        preu: ["14.00", "0"]
    });
    this.racionesIbericas.push({
        imatge:"./RacionChorizo.jpg", 
        nom: ["Xoriço", "Chorizo", "Chorizo", "Chorizo"], 
        desripcio: ["","","",""], 
        preu: ["14.00", "0"]
    });
    this.racionesIbericas.push({
        imatge:"./RacionQueso.jpg", 
        nom: ["Formatge curat", "Queso curado", "Cured cheese", "Fromage affiné"], 
        desripcio: ["Tallat a mà<br>Cabra o ovella segons disponibilitat","Cortado a mano<br>Cabra o oveja según disponibilidad","Hand cut<br>Goat or sheep according to availability","Coupe à la main<br>Chèvre ou mouton selon disponibilité"], 
        preu: ["14.00", "0"]
    });

    this.racionesNormales.push({
        imatge:"./RacionBravas.jpg", 
        nom: ["Patates braves", "Patatas bravas", '"Bravas" fried potatoes in spicy sauce', '"Bravas" pommes te terre naturelles à la sauce piquante'], 
        desripcio: ["Patates naturals<br>Salsa a part","Patatas naturales<br>Salsa a parte","Natural potatoes &nbsp; Sauce separately","Sauce séparément"], 
        preu: ["5.50", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionPatatas.jpg", 
        nom: ["Patates fregides casolanes", "Patatas fritas caseras", "Home made chips", "Pommes te terre frites maison"], 
        desripcio: ["Patates naturals","Patatas naturales","Natural potatoes","Pommes de terre naturelles"], 
        preu: ["5.50", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionSepiaSalsa.jpg", 
        nom: ["Sípia amb salsa", "Sepia con salsa", "Cuttlefish with sauce", "Seiche en sauce"], 
        desripcio: ["","","",""], 
        preu: ["6.75", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionCallos.jpg", 
        nom: ["Tripa", "Callos", "Belly", "Tripes"], 
        desripcio: ["","","",""],
        preu: ["6.50", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionBoquerones.jpg", 
        nom: ["Seitons", "Boquerones", "European anchovies salad", "Anchois frais"], 
        desripcio: ["Amb pa amb tomata","Con pan con tomate","With tomato bread","Avec pain aux tomates"], 
        preu: ["6.75", "4.75"]
    });
    this.racionesNormales.push({
        imatge:"./RacionEnsaladilla.jpg", 
        nom: ["Ensaladilla russa", "Ensaladilla rusa", "Russian salad", "Salade russe"], 
        desripcio: ["","","",""],
        preu: ["5.75", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionCroquetas.jpg",
        nom: ["Croquetes ibèriques", "Croquetas ibéricas", "Iberian croquettes", "Croquettes ibérique"], 
        desripcio: ["5 unitats<br>Amb pa amb tomata","5 unidades<br>Con pan con tomate","5 units<br>With tomato bread","5 unités<br>Avec pain aux tomates"], 
        preu: ["6.85", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionCalamaresRomana.jpg", 
        nom: ["Calamars a la romana", "Calamares a la romana", "Squid rings in batter", "Calamars à la romanie"],
        desripcio: ["Amb pa amb tomata","Con pan con tomate","With tomato bread","Avec pain aux tomates"], 
        preu: ["7.85", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionPincho.jpg", 
        nom: ["Broqueta", "Pinchito", "Little brochette", "Petit broquette"], 
        desripcio: ["Amb pa amb tomata","Con pan con tomate","With tomato bread","Avec pain aux tomates"], 
        preu: ["4.85", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionSepia.jpg",
        nom: ["Sípia a la planxa", "Sepia a la plancha", "Grilled cuttlefish", "Seiche grillée"], 
        desripcio: ["1 unitat<br>Amb pa amb tomata","1 unidad<br>Con pan con tomate","1 unit<br>With tomato bread","1 unité<br>Avec pain aux tomates"],
        preu: ["6.75", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionCalamar.jpg", 
        nom: ["Calamar a la planxa", "Calamar a la plancha", "Grilled squid", "Calmar grillée"], 
        desripcio: ["1 unitat<br>Amb pa amb tomata","1 unidad<br>Con pan con tomate","1 unit<br>With tomato bread","1 unité<br>Avec pain aux tomates"], 
        preu: ["6.75", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionLangostinos.jpg", 
        nom: ["Llagostins cuits", "Langostinos cocidos", "Cooked prawns", "Crevettes cuites"], 
        desripcio: ["","","",""], 
        preu: ["7.85", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionCanaillas.jpg", 
        nom: ["Cargols de punxes frescos", "Cañaillas frescas", "Fresh purple dry murices", "Rochers épineux frais"], 
        desripcio: ["","","",""], 
        preu: ["12.00", "0"]
    });
    this.racionesNormales.push({
        imatge:"./RacionGambas.jpg", 
        nom: ["Gambes a la planxa", "Gambas a la plancha", "Grilled shrimp", "Crevettes grillées"], 
        desripcio: ["10 unitats","10 unidades","10 units","10 unités"], 
        preu: ["12.00", "0"]
    });
  
    this.ensaladas.push({
        imatge:"./PlatoEnsalada.jpg", 
        nom: ["Amanida verda", "Ensalada verde", "Green salad", "Salade verte"], 
        desripcio: ["Enciam, tomata, ceba i tonyina","Lechuga, tomate, cebolla y atún","Lettuce, tomato, onion and tuna","Laitue, tomate, oignon et thon"], 
        preu: ["7,50", "0"]}
    );
    this.ensaladas.push({
        imatge:"./PlatoEnsaladaEspecial.jpg", 
        nom: ["Amanida Cèntric", "Ensalada Cèntric", "Cèntric salad", "Salade Cèntric"], 
        desripcio: ["Enciam, tomata, ceba, tonyina, anxoves, formatge","Lechuga, tomate, cebolla, atun, anchoas, queso","Lettuce, tomato, onion, tuna, anchovies, cheese","Laitue, tomate, oignon, thon, anchois, fromage"], 
        preu: ["11,50", "0"]}
    );
    
    
    this.platosIbericos.push({
        imatge:"./PlatoChuleta.jpg", 
        nom: ["Llonza ibèrica", "Chuleta ibérica", "Iberian pork chop", "Cötelette ibérique"], 
        desripcio: ["Amb patates, amanida i xampinyons","Con patatas, ensalada y champiñones","With chips, salad and mushrooms","Avec frites, salade et champignons"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoLomoIberico.jpg", 
        nom: ["Llom ibèric", "Lomo ibérico", "Iberian loin", "Filet ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoSolomillo.jpg", 
        nom: ["Filet ibèric", "Solomillo ibérico", 'Iberian sirloin', "Aloyau ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoSecreto.jpg", 
        nom: ["Secret ibèric", "Secreto ibérico", 'Iberian slice', "Tranche ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoPresa.jpg", 
        nom: ["Presa ibèrica", "Presa ibérica", 'Iberian catch', "Barrage ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["16,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoPluma.jpg", 
        nom: ["Ploma ibèrica", "Pluma ibérica", 'Iberian pen', '"Pluma" ibérique'], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["16,00", "0"]}
    );
    
    this.platosCombinados.push({
        imatge:"./n1.jpg", 
        nom: ["Nº1", "Nº1", 'Nº1', 'Nº1'], 
        desripcio: ["Pollaste, amanida, ou ferrat i patates", "Poyo, ensalada, huevo frito y patatas", "Chicken, salad, fried egg and potatoes", "Poulet, salade, œuf au plat et pommes de terre"], 
        preu: ["11,00", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n2.jpg", 
        nom: ["Nº2", "Nº2", 'Nº2', 'Nº2'],
        desripcio: ["Llom, ou ferrat i patates","Lomo, huevo frito y patatas","Loin, fried egg and potatoes","Longe, œuf au plat et pommes de terre"], 
        preu: ["9,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n3.jpg", 
        nom: ["Nº3", "Nº3", 'Nº3', 'Nº3'],
        desripcio: ["Hamburguesa, ou ferrat, patates i amanida","Hamburguesa, huevo frito, patatas y ensalada","Hamburger, fried egg, potatoes and salad","Hamburger, œuf au plat, pommes de terre et salade"], 
        preu: ["9,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n4.jpg", 
        nom: ["Nº4", "Nº4", 'Nº4', 'Nº4'],
        desripcio: ["Bistec amb patates","Bistec con patatas","Steak with potatoes","Steak aux pommes de terre"], 
        preu: ["9,75", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n5.jpg", 
        nom: ["Nº5", "Nº5", 'Nº5', 'Nº5'],
        desripcio: ["Bistec, ou ferrat, patates i amanida","Bistec, huevo frito, patatas y ensalada","Steak, fried egg, potatoes and salad","Steak, œuf au plat, pommes de terre et salade"], 
        preu: ["12,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n6.jpg", 
        nom: ["Nº6", "Nº6", 'Nº6', 'Nº6'],
        desripcio: ["Salsitxes amb patates","Salchichas con patatas","Salsitxes amb patates","Saucisses aux pommes de terre"], 
        preu: ["8,85", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n7.jpg", 
        nom: ["Nº7", "Nº7", 'Nº7', 'Nº7'],
        desripcio: ["Truita francesa, amanida i llom","Tortilla francesa, ensalada y lomo","French omelette, salad and loin","Omelette française, salade et longe"], 
        preu: ["10,00", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n8.jpg", 
        nom: ["Nº8", "Nº8", 'Nº8', 'Nº8'],
        desripcio: ["Dues sipies, patates i amanida","Dos sepias, patatas y ensalada","Two squid, potatoes and salad","Deux seiches, pommes de terre et salade"], 
        preu: ["13,85", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n9.jpg", 
        nom: ["Nº9", "Nº9", 'Nº9', 'Nº9'],
        desripcio: ["Dos calamars a la planxa, patates i amanida","Dos calamares a la plancha, patatas y ensalada","Two grilled squid, potatoes and salad","Deux calamars grillés, pommes de terre et salade"], 
        preu: ["13,85", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n10.jpg", 
        nom: ["Nº10", "Nº10", 'Nº10', 'Nº10'],
        desripcio: ["Hamburguesa, frankfurt, ou ferrat, patates i amanida","Hamburguesa, frankfurt, huevo frito, patatas y ensalada","Hamburger, frankfurter, fried egg, potatoes and salad","Hamburger, saucisse de Francfort, œuf au plat, pommes de terre et salade"], 
        preu: ["11,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n11.jpg", 
        nom: ["Nº11", "Nº11", 'Nº11', 'Nº11'],
        desripcio: ["Entrecot, patates i amanida","Entrecot, patatas y ensalada","Entrecote, potatoes and salad","Entrecote, potatoes and salad"], 
        preu: ["16,00", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n12.jpg", 
        nom: ["Nº12", "Nº12", 'Nº12', 'Nº12'],
        desripcio: ["Xoriço, ou ferrat, patates i pebrot","Chorizo, huevo frito, patatas y pimiento","Sausage, fried egg, potatoes and pepper","Saucisse, œuf au plat, pommes de terre et poivre"], 
        preu: ["9,85", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n13.jpg", 
        nom: ["Nº13", "Nº13", 'Nº13', 'Nº13'],
        desripcio: ["Mongetes amb butifarra","Judias con butifarra",'Beans with "Botifarra" (large Catalan pork sausage)','Haricots aux "Botifarra" (Longue saucisse de porc catalane)'], 
        preu: ["9,25", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n14.jpg", 
        nom: ["Nº14", "Nº14", 'Nº14', 'Nº14'], 
        desripcio: ["Ous ferrats amb patates","Huevos fritos con patatas","Fried eggs with potatoes","Oeufs au plat avec pommes de terre"], 
        preu: ["7,85", "0"]}
    );
    
    this.platosInfantiles.push({
        imatge:"./n1infantil.jpg", 
        nom: ["Nº1 Infantil", "Nº1 Infantil", "Nº1 for children", "Nº1 d'enfant"],
        desripcio: ["Salsitxes, croquetes i patates","Salchichas, croquetas y patatas","Sausages, croquettes and potatoes","Saucisses, croquettes et pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n2infantil.jpg", 
        nom: ["Nº2 Infantil", "Nº2 Infantil", "Nº2 for children", "Nº2 d'enfant"],
        desripcio: ["Ou ferrat, baco i patates","Huevo frito, beicon y patatas","Fried egg, bacon and fried potatoes","Oeuf au plat, bacon et pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n3infantil.jpg", 
        nom: ["Nº3 Infantil", "Nº3 Infantil", "Nº3 for children", "Nº3 d'enfant"],
        desripcio: ["Bratwurst amb patates","Bratwurst con patatas","Bratwurst with potatoes","Bratwurst aux pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n4infantil.jpg", 
        nom: ["Nº4 Infantil", "Nº4 Infantil", "Nº4 for children", "Nº4 d'enfant"],
        desripcio: ["Broqueta amb patates","Pinchito con patatas","Skewer with potatoes","Brochette de porc aux pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n5infantil.jpg", 
        nom: ["Nº5 Infantil", "Nº5 Infantil", "Nº5 for children", "Nº5 d'enfant"],
        desripcio: ["Truita francessa, frankfurt i patates","Tortilla francesa, frankfurt y patatas","French omelette, frankfurt and potatoes","Omelette française, Francfort et pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n6infantil.jpg", 
        nom: ["Nº6 Infantil", "Nº6 Infantil", "Nº6 for children", "Nº6 d'enfant"],
        desripcio: ["Hamburguesa, calamars a la romana i patates","Hamburguesa, calamares a la romana y patatas","Burger, squid rings in batter and potatoes","Burger, calamars à la romanie et pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    
    this.vinosTintos.push({
        imatge:"./3fincas.png", 
        marca: "Castell de Peralada 3 Finques",
        denominacio: "D.O. Empordà",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["12,00", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./cigonyes.png", 
        marca: "Cigonyes",
        denominacio: "D.O. Empordà",
        calidad: ["5 messos en barrica", "5 meses en barrica", "5 months in barrel", "5 mois en chêne"],
        preu: ["12,85", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./bancal.png", 
        marca: "Bancal del Bosc",
        denominacio: "D.O. Montsant",
        calidad: ["6 messos en barrica", "6 meses en barrica", "6 months in barrel", "6 mois en chêne"],
        preu: ["15,00", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./boig.png", 
        marca: "Boig per tu",
        denominacio: "D.O. Montsant",
        calidad: ["6 messos en barrica", "6 meses en barrica", "6 months in barrel", "6 mois en chêne"],
        preu: ["16,90", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./rotllan.png", 
        marca: "Rotllan Torra",
        denominacio: "D.O. Priorat",
        calidad: ["Reserva", "Reserva", "Reserve", "Réserver"],
        preu: ["16,00", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./haza.png", 
        marca: "Condado de Haza",
        denominacio: "D.O. Ribera del Duero",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["16,90", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./protos.png", 
        marca: "Protos",
        denominacio: "D.O. Ribera del Duero",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["20,50", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./pesquera.png", 
        marca: "Pesquera",
        denominacio: "D.O. Ribera del Duero",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["21,00", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./ramon.png", 
        marca: "Ramon Bilbao",
        denominacio: "D.O. Rioja",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["13,75", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./pomal.png", 
        marca: "Viña Pomal",
        denominacio: "D.O. Rioja",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["12,75", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./marques.png", 
        marca: "Marqués de Cáceres",
        denominacio: "D.O. Rioja",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["12,85", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./muga.png", 
        marca: "Muga",
        denominacio: "D.O. Rioja",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["21,50", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./riscal.png", 
        marca: "Marqués de Riscal",
        denominacio: "D.O. Rioja",
        calidad: ["Reserva", "Reserva", "Reserve", "Réserver"],
        preu: ["19,50", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./enate.png", 
        marca: "Enate - Cabernet - Merlot",
        denominacio: "D.O. Somontano",
        calidad: ["6 messos en barrica", "6 meses en barrica", "6 months in barrel", "6 mois en chêne"],
        preu: ["12,90", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./barros.png", 
        marca: "Heredad de Barros",
        denominacio: "D.O. Ribera del Guadiana",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["12,90", "0"]}
    );
    this.vinosTintos.push({
        imatge:"./habla.png", 
        marca: "Habla del Silencio",
        denominacio: "D.O. Vinos de la tierra de Extremadura",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["16,50", "0"]}
    );
    
    
    this.vinosBlancos.push({
        imatge:"./mugaBlanco.png", 
        marca: "Muga",
        denominacio: "D.O. Rioja",
        calidad: ["90% Viura 10% Malvasia", "90% Viura 10% Malvasia", "90% Viura 10% Malvasia", "90% Viura 10% Malvasia"],
        preu: ["15,90", "0"]}
    );
    this.vinosBlancos.push({
        imatge:"./protosBlanco.png", 
        marca: "Protos",
        denominacio: "D.O. RUEDA",
        calidad: ["Verdejo 100%", "Verdejo 100%", "Verdejo 100%", "Verdejo 100%"],
        preu: ["12,50", "0"]}
    );
    this.vinosBlancos.push({
        imatge:"./marquesBlanco.png", 
        marca: "Marqués de Vizhoja",
        denominacio: "",
        calidad: ["Vi gallec d'autor", "Vino gallego de autor", "Galician signature wine", "Vin de signature galicien"],
        preu: ["11,00", "0"]}
    );
    
    
    this.vinosRosados.push({
        imatge:"./campanas.png", 
        marca: "Las Campanas",
        denominacio: "D.O. Navarra",
        calidad: ["Garnacha 100%", "Garnacha 100%", "Garnacha 100%", "Garnacha 100%"],
        preu: ["9,75", "0"]}
    );
    this.vinosRosados.push({
        imatge:"./protosClarete.png", 
        marca: "Protos",
        denominacio: "D.O. Ribera del Duero",
        calidad: ["", "", "", ""],
        preu: ["12,50", "0"]}
    );
    this.vinosRosados.push({
        imatge:"./vero.png", 
        marca: "Viñas del Vero",
        denominacio: "D.O. Somontano",
        calidad: ["Merlot i Tempranillo", "Merlot y Tempranillo", "Merlot and Tempranillo", "Merlot et Tempranillo"],
        preu: ["10,50", "0"]}
    );
    
    
    this.listaAperitivos.push({
        imatge:"./berberechos.jpg", 
        nom: ["Escopinyes de llauna", "Berberechos de lata", "Canned cockles", "Coques en conserve"], 
        desripcio: ["","","",""], 
        preu: ["6,85", "0"]}
    );
    this.listaAperitivos.push({
        imatge:"./navajas.jpg", 
        nom: ["Navalles de llauna", "Navajas de lata", "Canned razor clams", "Couteaux de mer en conserve"], 
        desripcio: ["","","",""], 
        preu: ["6,85", "0"]}
    );
    this.listaAperitivos.push({
        imatge:"./mejillones.jpg", 
        nom: ["Musclos de llauna", "Mejollones de lata", "Canned mussels", "Moules en conserve"], 
        desripcio: ["","","",""], 
        preu: ["4,85", "0"]}
    );
    this.listaAperitivos.push({
        imatge:"./sardinas.jpg", 
        nom: ["Sardines de llauna", "Sardinas de lata", "Canned sardines", "Sardines en conserve"], 
        desripcio: ["","","",""], 
        preu: ["4,85", "0"]}
    );
    this.listaAperitivos.push({
        imatge:"./pulpo.jpg", 
        nom: ["Pop en oli d'oliva", "Pulpo en aceite de oliva", "Octopus in olive oil", "Poulpe dans l'huille d'olive"], 
        desripcio: ["","","",""], 
        preu: ["6,00", "0"]}
    );
    this.listaAperitivos.push({
        imatge:"./olivas.jpg", 
        nom: ["Olives farcides", "Olivas rellenas", "Stuffed olives", "Olives farcies"], 
        desripcio: ["","","",""], 
        preu: ["2,00", "1,50"]}
    );
    this.listaAperitivos.push({
        imatge:"./chips.jpg", 
        nom: ["Patatas xips", "Patatas chips", "Chips", "Chips"], 
        desripcio: ["","","",""], 
        preu: ["1,40", "0"]}
    );
    
    
    this.listaPostres.push({
        imatge:"./crema.jpg", 
        nom: ["Crema catalana", "Crema catalana", "Catalan custard", "Crème catalane"], 
        desripcio: ["","","",""], 
        preu: ["4,00", "0"]}
    );
    this.listaPostres.push({
        imatge:"./flan.jpg", 
        nom: ["Flam", "Flan", "Crème caramel", "Crème caramel"], 
        desripcio: ["","","",""], 
        preu: ["1,75", "0"]}
    );
    this.listaPostres.push({
        imatge:"./recuit.jpg", 
        nom: ["Recuit de Fonteta amb mel", "Requesón de Fonteta con miel", "Cattage cheese from Fonteta with honey", "Formage blanc de Fonteta avec miel"], 
        desripcio: ["","","",""], 
        preu: ["4,25", "0"]}
    );
    this.listaPostres.push({
        imatge:"./bombones.jpg", 
        nom: ["Bombons gelats", "Bombones helados", "Iced choccolates", "Crème glacée au chocolat"], 
        desripcio: ["","","",""], 
        preu: ["4,00", "0"]}
    );
    this.listaPostres.push({
        imatge:"./copas.jpg", 
        nom: ["Copa de gelat", "Copa de helado", "Ice cream cup", "Coupe de glace"], 
        desripcio: ["Llimona, vainilla, xocolata o café","Limón, vainilla, chocolate o café","Lemon, vanilla, chocolate or coffee","Citron, vanille, chocolat ou café"], 
        preu: ["2,50", "0"]}
    );
    this.listaPostres.push({
        imatge:"./tarta.jpg", 
        nom: ["Pastís al whisky", "Tarta al whisky", "Whiskey cake", "Gâteau au whisky"], 
        desripcio: ["","","",""], 
        preu: ["6,00", "0"]}
    );
    this.listaPostres.push({
        imatge:"./melon.jpg", 
        nom: ["Meló", "Melón", "Melon", "Melon"], 
        desripcio: ["","","",""], 
        preu: ["3,50", "0"]}
    );
    this.listaPostres.push({
        imatge:"./sandia.jpg", 
        nom: ["Síndria", "Sandía", "Watermelon", "Melon d'eau"], 
        desripcio: ["","","",""], 
        preu: ["3,50", "0"]}
    );
    this.listaPostres.push({
        imatge:"./temporada.jpg", 
        nom: ["Fruita de temporada", "Fruta de temporada", "Seasonal fruit", "Fruit de saison"], 
        desripcio: ["","","",""], 
        preu: ["3,50", "0"]}
    );
    this.listaPostres.push({
        imatge:"./frutosSecos.jpg", 
        nom: ["Fruits secs", "Frutos secos", "Dried fruits and nuts", "Fruits secs"], 
        desripcio: ["","","",""], 
        preu: ["3,00", "0"]}
    );
    
    this.cavas.push({
        imatge:"./peraladaGrande.png", 
        marca: "Castell de Perelada",
        denominacio: "Brut Nature Vintage",
        calidad: ["75cl", "75cl", "75cl", "75cl"],
        preu: ["13,50", "0"]}
    );
        this.cavas.push({
        imatge:"./juveGrande.png", 
        marca: "Juvé & Camps",
        denominacio: "Brut Nature - GRAN RESERVA",
        calidad: ["75cl", "75cl", "75cl", "75cl"],
        preu: ["21,50", "0"]}
    );
    this.cavas.push({
        imatge:"./peraladaPeque.png", 
        marca: "Castell de Perelada",
        denominacio: "Brut",
        calidad: ["375ml", "375ml", "375ml", "375ml"],
        preu: ["8,50", "0"]}
    );
    this.cavas.push({
        imatge:"./juvePeque.png", 
        marca: "Juvé & Camps - Cinta Púrpura",
        denominacio: "Brut - RESERVA",
        calidad: ["375ml", "375ml", "375ml", "375ml"],
        preu: ["11,50", "0"]}
    );
  }
});

