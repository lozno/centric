
Vue.component('item', {
    props: ['lang', 'current', 'mini'],
    template: `
    
    
    <div id = "extern">
        <div v-show="current.big">
            <div id="nombreBig">
                <span v-html="current.nom[lang]"></span>
            </div>
            <br>
            <div id="centralBig">
                <img id ="imagenBig" v-bind:src="current.imatge" alt="Jamón Iberico" v-on:click="$emit('small',current)"/>
                <div id="internPreuBig">
                    {{current.preu[0]}}€
                    <br>
                    <div id="miniBig" v-show="current.preu[1] != 0">
                        {{mini[lang]}}: <b>{{current.preu[1]}}€</b>
                    </div>
                </div>
            </div>
            <br>
            <span id="descripcionBig" v-html="current.desripcio[lang]"></span>
        </div>
    
        <div v-show="!current.big">
                <img id ="imagen" v-bind:src="current.imatge" alt="Jamón Iberico" v-on:click="$emit('big',current)"/>
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
    </div>
    ` 
});