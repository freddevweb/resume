class Experience {
    constructor(type, name, dates, describe, company, logo) {
        this.type = type;
        this.name = name;
        this.dates = dates;
        this.describe = describe;
        this.company = company;
        this.logo = logo;
    }

    buildTemplate() {
        const entityDom = document.createElement('div');
        entityDom.setAttribute('data-tag', this.type);

        const nameDom = document.createElement('div');
        nameDom.innerText = this.name;
        entityDom.appendChild(nameDom);

        const datesDom = document.createElement('div');
        datesDom.innerHTML = "<span class='dates'>" + this.dates.start + " - " + this.dates.end + '</span>';
        entityDom.appendChild(datesDom);

        const describeDom = document.createElement('div');
        describeDom.innerHTML = this.describe;
        console.log(this.describe)
        entityDom.appendChild(describeDom);

        const companyDom = document.createElement('div');
        companyDom.innerText = this.company;
        entityDom.appendChild(companyDom);

        const logoDom = document.createElement('div')
        logoDom.innerHTML = this.logo;
        entityDom.appendChild(logoDom);

        return entityDom;
    }

}