class Training {
    constructor(title, dates, content, school, tags) {
        this.title = title;
        this.dates = dates;
        this.content = content;
        this.school = school;
        this.tags = tags;
    }

    buildTemplate() {
        const entityDom = document.createElement('div');
        entityDom.setAttribute('data-tag', this.tags);

        const titleDom = document.createElement('div');
        titleDom.innerText = this.title;
        entityDom.appendChild(titleDom);

        const datesDom = document.createElement('span');
        datesDom.classList.add('dates');
        datesDom.textContent = this.dates.start + " - " + this.dates.end;
        entityDom.appendChild(datesDom);
        
        const contentDom = document.createElement('div');
        contentDom.innerHTML = this.content;
        entityDom.appendChild(contentDom);

        const schoolDom = document.createElement('div');
        schoolDom.innerText = this.school;
        entityDom.appendChild(schoolDom);
        
        return entityDom;
    }

}