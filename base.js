var vm = new Vue({
  el: '#boddy',
  data: {
      language: 0,
      tittleFrios: ["ENTREPANS FREDS", "BOCADILLOS FRÍOS", "COLD SANDWICHES", "SANDWICHS FROIDS"],
      tittleCalientes: ["ENTREPANS CALENTS", "BOCADILLOS CALIENTES", "HOT SANDWICHES", "SANDWICHS CHAUDS"],
      tittleIbericas: ["EMBOTITS IBÈRICS DE GLA", "EMBUTIDOS IBÉRICOS DE BELLOTA", "ACORN-FED IBERIAN COLD SAUSAGES", "CHARCUTERIE IBÉRIQUE DE GLAND"],
      tittleNormales: ["RACIONS VARIADES", "RACIONES VARIADAS", "ASSORTED PORTIONS", "PORTIONS ASSORTIES"],
      mini:["mini", "mini", "mini", "mini"],
      mitja:["mitja","media","half","demi"],
      descEmbIberics: ["Racions amb torrades incloses", "Raciones con torradas incluídas", "Rations included toast", "Rations inclus toasts"],
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
      racionesNormales: []
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
    
    this.bocadillosCalientes.push({imatge:"./BocLomo.png", nom: ["Llom", "Lomo", "Pork loin", "Filet de porc"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocBeicon.png", nom: ["Bacó", "Beicon", "Bacon", "Bacon"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocHamburguesa.png", nom: ["Hamburguesa", "Hamburguesa", "Burger", "Hamburguer"], desripcio: ["Amb ceba.<br>Ingredient extra +0.50€","Con cebolla<br>Ingrediente extra +0.50€","With onion<br>Extra ingredient +0.50€","Avec oignon<br>Ingrédient supplémentaire +0.50€"], preu: ["4.25", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocHamburguesaEspecial.png", nom: ["Hamburguesa espcecial Cèntric", "Hamburguesa especial Cèntric", "Special burger \"Cèntric\"", "Burger spécial \"Cèntric\""], desripcio: ["Amb ceba, formatge, anciam, tomata i beicon<br>En baguette o extra ingredient +0.50€","Con cebolla, queso, lechuga, tomate y beicon<br>En baguette o extra ingrediente +0.50€","",""], preu: ["5.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocSandwich.png", nom: ["Sandvitx", "Sándwich", "Sandwich", "Sandwich"], desripcio: ["Amb pernil dolç i formatge. Torrat amb oli<br>Ingredient extra +0.50€","Con jamon dulce i queso. Torrado con aceite<br>Ingrediente extra +0.50€","Con jamon dulce y queso. Torrado con aceite<br>Extra ingredient +0.50€","Con jamon dulce y queso. Torrado con aceite<br>Ingrédient supplémentaire +0.50€"], preu: ["3.75", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocSandwichEspecial.png", nom: ["Sandvitx especial Cèntric", "Sándwich especial Cèntric", "Special sandwich \"Cèntric\"", "Sandwich spécial \"Cèntric\""], desripcio: ["Amb pernil dolç, formatge, anciam i tomata<br>Ingredient extra +0.50€","Con jamon dulce, queso, lechuga y tomate<br>Ingrediente extra +0.50€","Amb pernil dolç, formatge, anciam i tomata<br>Extra ingredient +0.50€","Amb pernil dolç, formatge, anciam i tomata<br>Ingrédient supplémentaire +0.50€"], preu: ["5.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocFrankfurt.png", nom: ["Frankfurt", "Frankfurt", "Frankfurt", "Frankfurt"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["3.75", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocBrasburt.png", nom: ["Brasburt", "Brasburt", "Brasburt", "Brasburt"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["4.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocCalamares.png", nom: ["Calamars", "Calamares", "Squids", "Calamars"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["5.50", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocTortilla.png", nom: ["Truita francesa", "Tortilla francesa", "Omelette", "Omelette"], desripcio: ["Ingredient extra +0.75€<br>Pernil o tonyina +1.75€ &nbsp; &nbsp; Anxoves +3€","Ingrediente extra +0.75€","Extra ingredient +0.75€","Ingrédient supplémentaire +0.75€"], preu: ["4.25", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocSalchichas.png", nom: ["Saltxitxes", "Salchichas", "Sausages", "Saucisses"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocButifarra.png", nom: ["Botifarra del país", "Butifarra del país", "Botifarra (large Catalan pork sausage)", "Botifarra (Longue saucisse de porc catalane)"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["5.00", "0"]});
    this.bocadillosCalientes.push({imatge:"./BocChistorra.png", nom: ["Xistorra", "Chistorra", "Thin chorizo", "Chorizo mince"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["4.50", "3.25"]});
    this.bocadillosCalientes.push({imatge:"./BocPinchito.png", nom: ["Broquetes", "Pinchitos", "Little brochette", "Petit broquette"], desripcio: ["Ingredient extra +0.50€","Ingrediente extra +0.50€","Extra ingredient +0.50€","Ingrédient supplémentaire +0.50€"], preu: ["4.85", "3.25"]});
  
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
    window.scrollTo(0, 0);
  }
});

