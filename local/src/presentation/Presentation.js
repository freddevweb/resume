class Presentation {
    constructor (params) {
        this.firstname = params.firstname;
        this.lastname = params.lastname;
        this.photoPath = params.photoPath;
        this.birthday = params.birthDay;
        this.birthPlace = params.birthPlace;
        this.address = params.address;
        this.postalCode = params.postalCode;
        this.city = params.city;
        this.links = params.links;
        this.about = params.about;
    }

    display(domElements) {
        
        domElements.photo.forEach(elt => {
            elt.appendChild(this.buildPhoto());
        });
        console.log('------------------------');
        console.log(domElements.name);
        domElements.age.textContent = this.buildAge();
        domElements.address.textContent = this.address;
        this.buildName(domElements.name);
        domElements.postalCode.textContent = this.postalCode;
        domElements.city.textContent = this.city;
        domElements.about.innerHTML = this.about;

        this.buildLinks();
        // console.log(domElements);
        // console.log(this);
        // console.log(domElements);
    }

    buildAge() {
        const currentDate = new Date();
        const birthday = new Date(this.birthday);
    
        return currentDate.getFullYear() - birthday.getFullYear();
    }

    buildPhoto() {
        const photo = document.createElement('img');
        photo.src = this.photoPath;
        photo.title = this.firstname + " " + this.lastname; 
        photo.classList.add('profilePhoto');

        return photo;
    }

    buildLinks() {
        const linksDom = document.createElement('div');
        if (this.links.github !== "") {
            
        }
        if (this.links.gitlab !== "") {

        }
        if (this.links.linkedin !== "") {

        }
        console.log("-----");
        console.log(this.links);
        console.log("-----");

        // if(this.links.linkedin)

    }

    buildIconLink() {

    }

    buildName(domName) {
        const nameDom = document.createElement('div')
        nameDom.textContent = this.firstname + " " + this.lastname;   
        domName.appendChild(nameDom);
    }
}