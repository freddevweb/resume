class Competances {

    constructor(zones) {
        this._initObject();
        this.zones = zones;
    }

    filter() {

    }

    displayCompetance() {
        this.all.forEach(element=>{
            if(element.logo !== '') {
                console.log(element);
                this.zones.competences.innerHTML = '<img src="'+element.logo+'" />';
            }
        })
        // this.zones.competance.
    }

    displayTags() {
        let tags = '';
        this.tags.forEach(tag => {
            tags += '<span class="tag-btn">"'+tag+'",</span>';
            // console.log(tag);
            
        });
        this.zones.tags.innerHTML = tags; 
    }

    displayTypes() {
        let types = '';
        this.types.forEach(type => {
            types += '<span class="type-btn">"'+type+'",</span>';
            // console.log(type);
            
        });
        this.zones.types.innerHTML = types; 
    }

    _add(competance) {
        this.all.push(competance);
        competance.tags.forEach(elt => {
            if (!this.tags.includes(elt)) {
                this.tags.push(elt);
            }
        });

        if (!this.types.includes(competance.type)) {
            this.types.push(competance.type);
        }
    }

    _initObject() {
        this.all = [];
        this.displaying = [];
        this.tags = [];
        this.types = [];
    }

}