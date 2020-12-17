class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Bawoup"
            ,"Omae no tamashi itadaku yo"
            ,"Y a pas de sièges ?"
            ,"..."
            ,"Bip Bip Bip Boup"
            ,"Bien reçu ! Bien reçu !"
            ,"Pourquoi la balle passe pas le portail ?"
            ,"5 sur 5 ! 5 sur 5 !"
            ,"Ich bin ein klein vogel"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },2500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}