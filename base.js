var vm = new Vue({
  el: '#boddy',
  data: {
      language: 0,
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
      mini:["mini", "mini", "mini", "mini"],
      mitja:["mitja","media","half","demi"],
      descEmbIberics: ["Racions amb torrades incloses", "Raciones con torradas incluídas", "Rations included toast", "Rations inclus toasts"],
      descEnsaladas: ["Amb verdures fresques", "Con verduras frescas", "Fresh vegetables", "Légumes frais"],
      descPlatosIbericos: ["Carns de porc ibèric de glà<br>No utilitzem patates congelades","Carnes de cerdo ibérico de bellota<br>No utilizamos patatas congeladas","Acorn-fed Iberian pork<br>We do not use frozen chips","Porc ibérique nourri au gland<br>Nous n'utilisons pas de pommes de terre surgelées"],
      descPlatosCombinados: ["No utilitzem patates congelades","No utilizamos patatas congeladas","We do not use frozen chips","Nous n'utilisons pas de pommes de terre surgelées"],
      descPlatosInfantiles: ["Racions adaptades a nens<br>No utilitzem patates congelades","Raciones adaptadas a niños<br>No utilizamos patatas congeladas","Child-friendly portions<br>We do not use frozen chips","Portions adaptées aux enfants<br>Nous n'utilisons pas de pommes de terre surgelées"],
      bocadillos: "selected",
      raciones: "noSelected",
      platos: "noSelected",
      postres: "noSelected",
      vinos: "noSelected",
      aperitivos:"noSelected",
      selectMenu: "bocadillos",
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
      explicacionBocatas: ["*Ingredients extra (Formatge, ceba, beicon) <b>+0.50</b> si no es diu el contrari","*Ingredientes extra (Queso, cebolla, beicon) <b>+0.50</b> si no se dice lo contrario","Extra ingredients (Cheese, onion, bacon) <b> +0.50 </b> unless otherwise stated","Ingrédients supplémentaires (fromage, oignon, bacon) <b> +0,50 </b> sauf indication contraire"]
  },
  
  methods: {
    select: function (name) {
        this[this.selectMenu] = "noSelected";
        this[name] = "selected";
        this.selectMenu = name;
        window.scrollTo(0, 0);
    },
    changeLanguage: function (langIndex){
        this.language = langIndex;
    }
  },
  mounted() { 
    this.bocadillosFrios.push({imatge:"./BocJamon.png", nom: ["Pernil", "Jamón", "Ham", "Jambon"], desripcio: ["","","",""], preu: ["4.50", "2.75"]});
    this.bocadillosFrios.push({imatge:"./BocQueso.png", nom: ["Formatge", "Queso", "Chheese", "Formage"], desripcio: ["","","",""], preu: ["4.25", "2.75"]});
    this.bocadillosFrios.push({imatge:"./BocJamonDulce.png", nom: ["Pernil dolç", "Jamón dulce", "Cooked ham", "Jambon cuit"], desripcio: ["","","",""], preu: ["4.25", "2.75"]});
    this.bocadillosFrios.push({imatge:"./BocAtun.png", nom: ["Tonyina", "Atún", "Tuna", "Thon"], desripcio: ["","","",""], preu: ["4.25", "2.75"]});
    this.bocadillosFrios.push({imatge:"./BocAnchoas.png", nom: ["Anxoves de l'Escala", "Anchoas de la Escala", "Anchovies from La Escala", "Anchois de La Escala"], desripcio: ["","","",""], preu: ["6.75", "4.75"]});
    this.bocadillosFrios.push({imatge:"./BocChorizo.png", nom: ["Xoriço ibèric", "Chorizo ibérico", "Iberian chorizo", "Chorizo ibérique"], desripcio: ["","","",""], preu: ["4.25", "2.75"]});
    this.bocadillosFrios.push({imatge:"./BocSalchichon.png", nom: ["Llonganissa ibèrica", "Salchichón ibérico", "Iberian spiced sausage", "Saucisson ibérique"], desripcio: ["","","",""], preu: ["4.25", "2.75"]});
    this.bocadillosFrios.push({imatge:"./BocLomoIberico.png", nom: ["Llom ibèric de gla", "Lomo ibérico de bellota", "Ibeian acorn-fed pork lion sausage", "Échine ibérique de gland"], desripcio: ["","","",""], preu: ["10.00", "5.50"]});
    this.bocadillosFrios.push({imatge:"./BocJamonIberico.png", nom: ["Pernil ibèric de gla", "Jamón ibérico de bellota", "Acorn-fed iberian ham", "Jambon ibérique de gland"], desripcio: ["Tallat a mà","Cortado a mano","Hand cut","Coupe à la main"], preu: ["11.00", "6.00"]});
    
    this.bocadillosCalientes.push({imatge:"./BocLomo.png", nom: ["Llom", "Lomo", "Pork loin", "Filet de porc"], desripcio: ["","","",""], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocBeicon.png", nom: ["Bacó", "Beicon", "Bacon", "Bacon"], desripcio: ["","","",""], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocHamburguesa.png", nom: ["Hamburguesa", "Hamburguesa", "Burger", "Hamburguer"], desripcio: ["Amb ceba","Con cebolla","With onion","Avec oignon"], preu: ["4.25", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocHamburguesaEspecial.png", nom: ["Hamburguesa espcecial Cèntric", "Hamburguesa especial Cèntric", "Special burger \"Cèntric\"", "Burger spécial \"Cèntric\""], desripcio: ["Amb ceba, formatge, anciam, tomata i beicon<br>En baguette +0.50€","Con cebolla, queso, lechuga, tomate y beicon<br>En baguette +0.50€","",""], preu: ["5.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocSandwich.png", nom: ["Sandvitx", "Sándwich", "Sandwich", "Sandwich"], desripcio: ["Amb pernil dolç i formatge<br>Torrat amb oli d'oliva","Con jamon dulce i queso<br>Torrado con aceite de oliva","Con jamon dulce y queso<br>Torrado con aceite de oliva","Con jamon dulce y queso<br>Torrado con aceite de oliva"], preu: ["3.75", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocSandwichEspecial.png", nom: ["Sandvitx especial Cèntric", "Sándwich especial Cèntric", "Special sandwich \"Cèntric\"", "Sandwich spécial \"Cèntric\""], desripcio: ["Amb pernil dolç, formatge, anciam i tomata<br>Torrat en oli d'oliva","Con jamon dulce, queso, lechuga y tomate<br>Torrado con aceite de oliva","Amb pernil dolç, formatge, anciam i tomata<br>Torrado con aceite de oliva","Amb pernil dolç, formatge, anciam i tomata<br>Torrado con aceite de oliva"], preu: ["5.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocFrankfurt.png", nom: ["Frankfurt", "Frankfurt", "Frankfurt", "Frankfurt"], desripcio: ["","","",""], preu: ["3.75", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocBrasburt.png", nom: ["Brasburt", "Brasburt", "Brasburt", "Brasburt"], desripcio: ["","","",""], preu: ["4.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocCalamares.png", nom: ["Calamars", "Calamares", "Squids", "Calamars"], desripcio: ["","","",""], preu: ["5.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocTortilla.png", nom: ["Truita francesa", "Tortilla francesa", "Omelette", "Omelette"], desripcio: ["Ingredient extra +0.75€<br>Pernil o tonyina +1.75€ &nbsp; &nbsp; Anxoves +3€","Ingrediente extra +0.75€","Extra ingredient +0.75€","Ingrédient supplémentaire +0.75€"], preu: ["4.25", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocSalchichas.png", nom: ["Saltxitxes", "Salchichas", "Sausages", "Saucisses"], desripcio: ["","","",""], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocButifarra.png", nom: ["Botifarra del país", "Butifarra del país", "Botifarra (large Catalan pork sausage)", "Botifarra (Longue saucisse de porc catalane)"], desripcio: ["","","",""], preu: ["5.00", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocChistorra.png", nom: ["Xistorra", "Chistorra", "Thin chorizo", "Chorizo mince"], desripcio: ["","","",""], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocPinchito.png", nom: ["Broquetes", "Pinchitos", "Little brochette", "Petit broquette"], desripcio: ["","","",""], preu: ["4.85", "3.25"]});
  
    this.racionesIbericas.push({imatge:"./RacionJamon.png", nom: ["Pernil", "Jamón", "Ham", "Jambon"], desripcio: ["Tallat a mà","Cortado a mano","Hand cut","Coupe à la main"], preu: ["25.00", "19.00"]});
    this.racionesIbericas.push({imatge:"./RacionLomo.png", nom: ["Llom<br>Llomet", "Lomo<br>Lomito", "Pork loin<br>Pork little loin", "Filet de porc<br>Filet petit de porc"], desripcio: ["","","",""], preu: ["23.00", "17.00"]});
    this.racionesIbericas.push({imatge:"./RacionSalchichon.png", nom: ["Llonganissa", "Salchichón", "Spiced sausage", "Saucisson"], desripcio: ["","","",""], preu: ["14.00", "0"]});
    this.racionesIbericas.push({imatge:"./RacionChorizo.png", nom: ["Xoriço", "Chorizo", "Chorizo", "Chorizo"], desripcio: ["","","",""], preu: ["14.00", "0"]});
    this.racionesIbericas.push({imatge:"./RacionQueso.png", nom: ["Formatge curat", "Queso curado", "Cured cheese", "Fromage affiné"], desripcio: ["Tallat a mà<br>Cabra o ovella segons disponibilitat","Cortado a mano<br>Cabra o oveja según disponibilidad","Hand cut<br>Goat or sheep according to availability","Coupe à la main<br>Chèvre ou mouton selon disponibilité"], preu: ["14.00", "0"]});

    this.racionesNormales.push({imatge:"./RacionBravas.png", nom: ["Patates braves", "Patatas bravas", '"Bravas" fried potatoes in spicy sauce', '"Bravas" pommes te terre naturelles à la sauce piquante'], desripcio: ["Patates naturals<br>Salsa a part","Patatas naturales<br>Salsa a parte","Natural potatoes &nbsp; Sauce separately","Sauce séparément"], preu: ["5.50", "0"]});
    this.racionesNormales.push({imatge:"./RacionPatatas.png", nom: ["Patates fregides casolanes", "Patatas fritas caseras", "Home made chips", "Pommes te terre frites maison"], desripcio: ["Patates naturals","Patatas naturales","Natural potatoes","Pommes de terre naturelles"], preu: ["5.50", "0"]});
    this.racionesNormales.push({imatge:"./RacionSepiaSalsa.png", nom: ["Sípia amb salsa", "Sepia con salsa", "Cuttlefish with sauce", "Seiche en sauce"], desripcio: ["","","",""], preu: ["6.75", "0"]});
    this.racionesNormales.push({imatge:"./RacionCallos.png", nom: ["Tripa", "Callos", "Belly", "Tripes"], desripcio: ["","","",""], preu: ["6.50", "0"]});
    this.racionesNormales.push({imatge:"./RacionBoquerones.png", nom: ["Seitons", "Boquerones", "European anchovies salad", "Anchois frais"], desripcio: ["Amb pa amb tomata","Con pan con tomate","With tomato bread","Avec pain aux tomates"], preu: ["6.75", "4.75"]});
    this.racionesNormales.push({imatge:"./RacionEnsaladilla.png", nom: ["Ensaladilla russa", "Ensaladilla rusa", "Russian salad", "Salade russe"], desripcio: ["","","",""], preu: ["5.75", "0"]});
    this.racionesNormales.push({imatge:"./RacionCroquetas.png", nom: ["Croquetes ibèriques", "Croquetas ibéricas", "Iberian croquettes", "Croquettes ibérique"], desripcio: ["5 unitats<br>Amb pa amb tomata","5 unidades<br>Con pan con tomate","5 units<br>With tomato bread","5 unités<br>Avec pain aux tomates"], preu: ["6.85", "0"]});
    this.racionesNormales.push({imatge:"./RacionCalamaresRomana.png", nom: ["Calamars a la romana", "Calamares a la romana", "Squid rings in batter", "Calamars à la romanie"], desripcio: ["Amb pa amb tomata","Con pan con tomate","With tomato bread","Avec pain aux tomates"], preu: ["7.85", "0"]});
    this.racionesNormales.push({imatge:"./RacionPincho.png", nom: ["Broqueta", "Pinchito", "Little brochette", "Petit broquette"], desripcio: ["Amb pa amb tomata","Con pan con tomate","With tomato bread","Avec pain aux tomates"], preu: ["4.85", "0"]});
    this.racionesNormales.push({imatge:"./RacionSepia.png", nom: ["Sípia a la planxa", "Sepia a la plancha", "Grilled cuttlefish", "Seiche grillée"], desripcio: ["1 unitat<br>Amb pa amb tomata","1 unidad<br>Con pan con tomate","1 unit<br>With tomato bread","1 unité<br>Avec pain aux tomates"], preu: ["6.75", "0"]});
    this.racionesNormales.push({imatge:"./RacionCalamar.png", nom: ["Calamar a la planxa", "Calamar a la plancha", "Grilled squid", "Calmar grillée"], desripcio: ["1 unitat<br>Amb pa amb tomata","1 unidad<br>Con pan con tomate","1 unit<br>With tomato bread","1 unité<br>Avec pain aux tomates"], preu: ["6.75", "0"]});
    this.racionesNormales.push({imatge:"./RacionLangostinos.png", nom: ["Llagostins cuits", "Langostinos cocidos", "Cooked prawns", "Crevettes cuites"], desripcio: ["","","",""], preu: ["7.85", "0"]});
    this.racionesNormales.push({imatge:"./RacionCanaillas.png", nom: ["Cargols de punxes frescos", "Cañaillas frescas", "Fresh purple dry murices", "Rochers épineux frais"], desripcio: ["","","",""], preu: ["12.00", "0"]});
    this.racionesNormales.push({imatge:"./RacionGambas.png", nom: ["Gambes a la planxa", "Gambas a la plancha", "Grilled shrimp", "Crevettes grillées"], desripcio: ["10 unitats","10 unidades","10 units","10 unités"], preu: ["12.00", "0"]});
  
    this.ensaladas.push({
        imatge:"./PlatoEnsalada.png", 
        nom: ["Amanida verda", "Ensalada verde", "Green salad", "Salade verte"], 
        desripcio: ["Enciam, tomata, ceba","Lechuga, tomate, cebolla","Lettuce, tomato, onion","Laitue, tomate, oignon"], 
        preu: ["7,50", "0"]}
    );
    this.ensaladas.push({
        imatge:"./PlatoEnsaladaEspecial.png", 
        nom: ["Amanida Cèntric", "Ensalada Cèntric", "Cèntric salad", "Salade Cèntric"], 
        desripcio: ["Enciam, tomata, ceba, tonyina, anxoves, formatge","Lechuga, tomate, cebolla, atun, anchoas, queso","Lettuce, tomato, onion, tuna, anchovies, cheese","Laitue, tomate, oignon, thon, anchois, fromage"], 
        preu: ["11,50", "0"]}
    );
    
    
    this.platosIbericos.push({
        imatge:"./PlatoChuleta.png", 
        nom: ["Llonza ibèrica", "Chuleta ibérica", "Iberian pork chop", "Cötelette ibérique"], 
        desripcio: ["Amb patates, amanida i xampinyons","Con patatas, ensalada y champiñones","With chips, salad and mushrooms","Avec frites, salade et champignons"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoLomoIberico.png", 
        nom: ["Llom ibèric", "Lomo ibérico", "Iberian loin", "Filet ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoSolomillo.png", 
        nom: ["Filet ibèric", "Solomillo ibérico", 'Iberian sirloin', "Aloyau ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoSecreto.png", 
        nom: ["Secret ibèric", "Secreto ibérico", 'Iberian slice', "Tranche ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoPresa.png", 
        nom: ["Presa ibèrica", "Presa ibérica", 'Iberian catch', "Barrage ibérique"], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    this.platosIbericos.push({
        imatge:"./PlatoPluma.png", 
        nom: ["Ploma ibèrica", "Pluma ibérica", 'Iberian pen', '"Pluma" ibérique'], 
        desripcio: ["Amb patates i amanida","Con patatas y ensalada","With chips and salad","Avec frites et salade"], 
        preu: ["15,00", "0"]}
    );
    
    this.platosCombinados.push({
        imatge:"./n0.png", 
        nom: ["Nº0", "Nº0", 'Nº0', 'Nº0'], 
        desripcio: ["Ous ferrats amb patates","Huevos fritos con patatas","Fried eggs with potatoes","Oeufs au plat avec pommes de terre"], 
        preu: ["7,85", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n1.png", 
        nom: ["Nº1", "Nº1", 'Nº1', 'Nº1'], 
        desripcio: ["Pollaste, amanida, ou ferrat i patates", "Poyo, ensalada, huevo frito y patatas", "Chicken, salad, fried egg and potatoes", "Poulet, salade, œuf au plat et pommes de terre"], 
        preu: ["11,00", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n2.png", 
        nom: ["Nº2", "Nº2", 'Nº2', 'Nº2'],
        desripcio: ["Llom, ou ferrat i patates","Lomo, huevo frito y patatas","Loin, fried egg and potatoes","Longe, œuf au plat et pommes de terre"], 
        preu: ["9,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n3.png", 
        nom: ["Nº3", "Nº3", 'Nº3', 'Nº3'],
        desripcio: ["Hamburguesa, ou ferrat, patates i amanida","Hamburguesa, huevo frito, patatas y ensalada","Hamburger, fried egg, potatoes and salad","Hamburger, œuf au plat, pommes de terre et salade"], 
        preu: ["9,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n4.png", 
        nom: ["Nº4", "Nº4", 'Nº4', 'Nº4'],
        desripcio: ["Bistec amb patates","Bistec con patatas","Steak with potatoes","Steak aux pommes de terre"], 
        preu: ["9,75", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n5.png", 
        nom: ["Nº5", "Nº5", 'Nº5', 'Nº5'],
        desripcio: ["Bistec, ou ferrat, patates i amanida","Bistec, huevo frito, patatas y ensalada","Steak, fried egg, potatoes and salad","Steak, œuf au plat, pommes de terre et salade"], 
        preu: ["12,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n6.png", 
        nom: ["Nº6", "Nº6", 'Nº6', 'Nº6'],
        desripcio: ["Dues sipies, patates i amanida","Dos sepias, patatas y ensalada","Two squid, potatoes and salad","Deux seiches, pommes de terre et salade"], 
        preu: ["13,85", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n7.png", 
        nom: ["Nº7", "Nº7", 'Nº7', 'Nº7'],
        desripcio: ["Truita francesa, amanida i llom","Tortilla francesa, ensalada y lomo","French omelette, salad and loin","Omelette française, salade et longe"], 
        preu: ["10,00", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n8.png", 
        nom: ["Nº8", "Nº8", 'Nº8', 'Nº8'],
        desripcio: ["Salsitxes amb patates","Salchichas con patatas","Salsitxes amb patates","Saucisses aux pommes de terre"], 
        preu: ["8,85", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n9.png", 
        nom: ["Nº9", "Nº9", 'Nº9', 'Nº9'],
        desripcio: ["Mongetes amb butifarra","Judias con butifarra",'Beans with "Botifarra" (large Catalan pork sausage)','Haricots aux "Botifarra" (Longue saucisse de porc catalane)'], 
        preu: ["9,25", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n10.png", 
        nom: ["Nº10", "Nº10", 'Nº10', 'Nº10'],
        desripcio: ["Hamburguesa, frankfurt, ou ferrat, patates i amanida","Hamburguesa, frankfurt, huevo frito, patatas y ensalada","Hamburger, frankfurter, fried egg, potatoes and salad","Hamburger, saucisse de Francfort, œuf au plat, pommes de terre et salade"], 
        preu: ["11,50", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n11.png", 
        nom: ["Nº11", "Nº11", 'Nº11', 'Nº11'],
        desripcio: ["Entrecot, patates i amanida","Entrecot, patatas y ensalada","Entrecote, potatoes and salad","Entrecote, potatoes and salad"], 
        preu: ["16,00", "0"]}
    );
    this.platosCombinados.push({
        imatge:"./n12.png", 
        nom: ["Nº12", "Nº12", 'Nº12', 'Nº12'],
        desripcio: ["Xoriço, ou ferrat, patates i pebrot","Chorizo, huevo frito, patatas y pimiento","Sausage, fried egg, potatoes and pepper","Saucisse, œuf au plat, pommes de terre et poivre"], 
        preu: ["9,85", "0"]}
    );
    
    
    this.platosInfantiles.push({
        imatge:"./n1infantil.png", 
        nom: ["Nº1 Infantil", "Nº1 Infantil", "Nº1 for children", "Nº1 d'enfant"],
        desripcio: ["Salsitxes, croquetes i patates","Salchichas, croquetas y patatas","Sausages, croquettes and potatoes","Saucisses, croquettes et pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n2infantil.png", 
        nom: ["Nº2 Infantil", "Nº2 Infantil", "Nº2 for children", "Nº2 d'enfant"],
        desripcio: ["Ou ferrat, baco i patates","Huevo frito, beicon y patatas","Fried egg, bacon and fried potatoes","Oeuf au plat, bacon et pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n3infantil.png", 
        nom: ["Nº3 Infantil", "Nº3 Infantil", "Nº3 for children", "Nº3 d'enfant"],
        desripcio: ["Bratwurst amb patates","Bratwurst con patatas","Bratwurst with potatoes","Bratwurst aux pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n4infantil.png", 
        nom: ["Nº4 Infantil", "Nº4 Infantil", "Nº4 for children", "Nº4 d'enfant"],
        desripcio: ["Broqueta amb patates","Pinchito con patatas","Skewer with potatoes","Brochette de porc aux pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n5infantil.png", 
        nom: ["Nº5 Infantil", "Nº5 Infantil", "Nº5 for children", "Nº5 d'enfant"],
        desripcio: ["Truita francessa, frankfurt i patates","Tortilla francesa, frankfurt y patatas","French omelette, frankfurt and potatoes","Omelette française, Francfort et pommes de terre"], 
        preu: ["8,50", "0"]}
    );
    this.platosInfantiles.push({
        imatge:"./n6infantil.png", 
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
    /*
        this.vinosBlancos.push({
        imatge:"./habla.png", 
        marca: "Habla del Silencio",
        denominacio: "D.O. Vinos de la tierra de Extremadura",
        calidad: ["Criança", "Crianza", "Aging ", "Vieillissement"],
        preu: ["16,50", "0"]}
    );*/
  }
});

