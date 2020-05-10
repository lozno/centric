
Vue.component('item_vi', {
    props: ['lang', 'current'],
    template: `

    <div id = "extern">
        <div id="nomVi">
                <span v-html="current.marca"></span>
        </div>
        <div id="internImatgeVi">
                <img class="viPicture" v-bind:src="current.imatge" alt="Jamón Iberico"/>
        </div>
        <div id="desc" v-show='current.denominacio != ""'>
                <span v-html="current.denominacio"></span>
        </div>
        <div id="desc">
                <span v-html="current.calidad[lang]"></span>
        </div>
        <div id="internPreuVi">
            {{current.preu[0]}}€
        </div>

    </div>
    ` 
});