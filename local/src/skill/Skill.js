class Skill {

    constructor(type, name, tags, logo, proportion, link) {
        // this.type = type;
        this.name = name;
        this.tags = tags;
        this.logo = logo;
        this.proportion = proportion;
        this.link = link;
    }

    buildTemplate() {
        const entityDom = document.createElement('div');
        entityDom.setAttribute('data-tag', this.tags.join(', '));
        // console.log(this.tags.join(', '));
        
        const logoDom = document.createElement('img');
        logoDom.setAttribute("src", this.logo);
        logoDom.classList.add("logo-skill");
        logoDom.title = this.name;
        entityDom.appendChild(logoDom);

        
        const proportionDom = document.createElement('div');
        proportionDom.innerText = this.proportion;
        entityDom.appendChild(proportionDom);

        return entityDom;
    }

}