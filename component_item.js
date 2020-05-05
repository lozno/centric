
Vue.component('item', {
    props: ['lang', 'current', 'mini'],
    template: `
    
    
    <div id = "extern">
        <div id="internImatge">
                <img id ="imagen" v-bind:src="current.imatge" alt="Jamón Iberico"/>
        </div>
        <div id="internNom">
            <div id="nombre">
                <span v-html="current.nom[lang]"></span>
            </div>
            <div id="descripcion">
                <span v-html="current.desripcio[lang]"></span>
            </div>
    
        </div>
        <div id="internPreu">
            {{current.preu[0]}}€
            <br>
            <div id="mini" v-show="current.preu[1] != 0">
                {{mini[lang]}}: <b>{{current.preu[1]}}€</b>
            </div>
        </div>

    </div>
    ` 
});