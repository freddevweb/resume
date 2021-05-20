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
class Experiences {
    constructor(experiences, domExperiences) {
        this.experiences = [];
        this.domExperiences = domExperiences;
        this.build(experiences);
    }

    build(experiencesData) {
        // build experience
        experiencesData.experiences.forEach(expData => {
            this.experiences.push(new Experience(expData.type, expData.emploi, expData.dates, expData.describe, expData.societe, /* expData.logo */));
        });
        
        // build experience params
        this.buildAndDisplayParams(experiencesData.params.types);
        
        // display
        this.display();
    }

    filter(type) {
        console.log(type);
    }

    display() {
        const expsDom = this.domExperiences.querySelector('.content');
        this.experiences.forEach(exp => {
            let expDom = exp.buildTemplate();
            expsDom.appendChild(expDom);
        });
    }

    buildAndDisplayParams(types) {
        const typesDom = this.domExperiences.querySelector('.tags');
        Object.keys(types).forEach(key => {
            const typeBtn = document.createElement('div');
            // typeBtn.addEventListener('click', )
            typeBtn.classList.add(key);
            typeBtn.textContent = types[key];
            typesDom.appendChild(typeBtn);

        });
    }

}
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
class Skills {
    
    constructor(data, dom) {
        this.skills = [];
        this.domSkills = dom;
        this.build(data);
    }

    build(data) {
        data.skills.forEach(skillData => {
            this.skills.push(new Skill(
                skillData.type,
                skillData.name,
                skillData.tags,
                skillData.logo,
                skillData.proportion,
                skillData.link
            ));
        });
        
        // this.buildAndDisplayParams(data.params);
        this.display();
    }

    filter() {
        
    }

    display() {
        const skillsDom = this.domSkills.querySelector('.content');
        this.skills.forEach(skill => {
            let skillDom = skill.buildTemplate();
            skillsDom.appendChild(skillDom);
        })
    }


    buildAndDisplayParams(params) {
        const tagsDom = this.domSkills.querySelector('.tags');
        Object.keys(params.tags).forEach(tag => {
            const btn = document.createElement('div');
            // btn.addEventListener('click');
            btn.classList.add(tag);
            btn.textContent = params.tags[tag];
            tagsDom.appendChild(btn);
        });
    }


}
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
class Trainings {
    constructor(trainings, domTrainings) {
        this.trainings = [];
        this.domTrainings = domTrainings;
        this.build(trainings.trainings);
        this.buildAndDisplayParams(trainings.params);
    }
    
    build(data) {
        const trainingsDom = this.domTrainings.querySelector('.content');
        data.forEach(elt => {
            
            const training = new Training(elt.title, elt.dates, elt.content, elt.school, elt.type);
            const trainingTemplate = training.buildTemplate();
            trainingsDom.appendChild(trainingTemplate);
        });
  
        
        // console.log(this.trainings);
        // console.log(this.domTrainings);
        // console.log(data);
        
    }

    filter(type) {
        console.log(type);
    }

    buildAndDisplayParams(params) {
        // console.log(params);
    }



}
class App {

    buildEntities(data, domElts) {
        const presentation = new Presentation(data.presentation);
        presentation.display(domElts.presentation);

        const experiences = new Experiences({experiences : data.experiencesData.experiences, params: data.experiencesParams }, domElts.experiences);
        const trainnings = new Trainings({trainings: data.trainingData.trainings, params:data.trainingParams}, domElts.trainings);
        // const skills = new Skills({skills: data.skillsData.skills, params:data.skillsParams}, domElts.skills);

    }

    async loadData() {
        const response = await fetch('/public/js/json/db.json');
        const data = await response.json();


        return data;
    }



}
const appDomElts = {
    presentation: {
        photo: [
            document.getElementById('photo')
        ],
        name: document.getElementById('name'),
        age: document.getElementById('age'),
        address: document.getElementById('address'),
        postalCode: document.getElementById('postalCode'),
        city: document.getElementById('city'),
        links : document.getElementById('links'),
        about: document.getElementById('about')
    },
    skills: document.getElementById('skills'),
    trainings: document.getElementById('trainings'),
    experiences: document.getElementById('experiences')
}

const app = new App();
app.loadData()
    .then(data => {
        app.buildEntities(data, appDomElts);
    })
    .catch(error => {
        console.error(error);
    });

    


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByZXNlbnRhdGlvbi5qcyIsIkV4cGVyaWVuY2UuanMiLCJFeHBlcmllbmNlcy5qcyIsIlNraWxsLmpzIiwiU2tpbGxzLmpzIiwiVHJhaW5pbmcuanMiLCJUcmFpbmluZ3MuanMiLCJBcHAuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmVzZW50YXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IgKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gcGFyYW1zLmZpcnN0bmFtZTtcclxuICAgICAgICB0aGlzLmxhc3RuYW1lID0gcGFyYW1zLmxhc3RuYW1lO1xyXG4gICAgICAgIHRoaXMucGhvdG9QYXRoID0gcGFyYW1zLnBob3RvUGF0aDtcclxuICAgICAgICB0aGlzLmJpcnRoZGF5ID0gcGFyYW1zLmJpcnRoRGF5O1xyXG4gICAgICAgIHRoaXMuYmlydGhQbGFjZSA9IHBhcmFtcy5iaXJ0aFBsYWNlO1xyXG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IHBhcmFtcy5hZGRyZXNzO1xyXG4gICAgICAgIHRoaXMucG9zdGFsQ29kZSA9IHBhcmFtcy5wb3N0YWxDb2RlO1xyXG4gICAgICAgIHRoaXMuY2l0eSA9IHBhcmFtcy5jaXR5O1xyXG4gICAgICAgIHRoaXMubGlua3MgPSBwYXJhbXMubGlua3M7XHJcbiAgICAgICAgdGhpcy5hYm91dCA9IHBhcmFtcy5hYm91dDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KGRvbUVsZW1lbnRzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9tRWxlbWVudHMucGhvdG8uZm9yRWFjaChlbHQgPT4ge1xyXG4gICAgICAgICAgICBlbHQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFBob3RvKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkb21FbGVtZW50cy5uYW1lKTtcclxuICAgICAgICBkb21FbGVtZW50cy5hZ2UudGV4dENvbnRlbnQgPSB0aGlzLmJ1aWxkQWdlKCk7XHJcbiAgICAgICAgZG9tRWxlbWVudHMuYWRkcmVzcy50ZXh0Q29udGVudCA9IHRoaXMuYWRkcmVzcztcclxuICAgICAgICB0aGlzLmJ1aWxkTmFtZShkb21FbGVtZW50cy5uYW1lKTtcclxuICAgICAgICBkb21FbGVtZW50cy5wb3N0YWxDb2RlLnRleHRDb250ZW50ID0gdGhpcy5wb3N0YWxDb2RlO1xyXG4gICAgICAgIGRvbUVsZW1lbnRzLmNpdHkudGV4dENvbnRlbnQgPSB0aGlzLmNpdHk7XHJcbiAgICAgICAgZG9tRWxlbWVudHMuYWJvdXQuaW5uZXJIVE1MID0gdGhpcy5hYm91dDtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZExpbmtzKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9tRWxlbWVudHMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRvbUVsZW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEFnZSgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXkgPSBuZXcgRGF0ZSh0aGlzLmJpcnRoZGF5KTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIC0gYmlydGhkYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFBob3RvKCkge1xyXG4gICAgICAgIGNvbnN0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgcGhvdG8uc3JjID0gdGhpcy5waG90b1BhdGg7XHJcbiAgICAgICAgcGhvdG8udGl0bGUgPSB0aGlzLmZpcnN0bmFtZSArIFwiIFwiICsgdGhpcy5sYXN0bmFtZTsgXHJcbiAgICAgICAgcGhvdG8uY2xhc3NMaXN0LmFkZCgncHJvZmlsZVBob3RvJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwaG90bztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZExpbmtzKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtzRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMubGlua3MuZ2l0aHViICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5saW5rcy5naXRsYWIgIT09IFwiXCIpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpbmtzLmxpbmtlZGluICE9PSBcIlwiKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlua3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS1cIik7XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMubGlua3MubGlua2VkaW4pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkSWNvbkxpbmsoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTmFtZShkb21OYW1lKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbmFtZURvbS50ZXh0Q29udGVudCA9IHRoaXMuZmlyc3RuYW1lICsgXCIgXCIgKyB0aGlzLmxhc3RuYW1lOyAgIFxyXG4gICAgICAgIGRvbU5hbWUuYXBwZW5kQ2hpbGQobmFtZURvbSk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBFeHBlcmllbmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGRhdGVzLCBkZXNjcmliZSwgY29tcGFueSwgbG9nbykge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVzID0gZGF0ZXM7XHJcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IGRlc2NyaWJlO1xyXG4gICAgICAgIHRoaXMuY29tcGFueSA9IGNvbXBhbnk7XHJcbiAgICAgICAgdGhpcy5sb2dvID0gbG9nbztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFRlbXBsYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVudGl0eURvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJywgdGhpcy50eXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5hbWVEb20uaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChuYW1lRG9tKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZXNEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYXRlc0RvbS5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPSdkYXRlcyc+XCIgKyB0aGlzLmRhdGVzLnN0YXJ0ICsgXCIgLSBcIiArIHRoaXMuZGF0ZXMuZW5kICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChkYXRlc0RvbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaWJlRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVzY3JpYmVEb20uaW5uZXJIVE1MID0gdGhpcy5kZXNjcmliZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaWJlKVxyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChkZXNjcmliZURvbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhbnlEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb21wYW55RG9tLmlubmVyVGV4dCA9IHRoaXMuY29tcGFueTtcclxuICAgICAgICBlbnRpdHlEb20uYXBwZW5kQ2hpbGQoY29tcGFueURvbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvZ29Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxvZ29Eb20uaW5uZXJIVE1MID0gdGhpcy5sb2dvO1xyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChsb2dvRG9tKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0eURvbTtcclxuICAgIH1cclxuXHJcbn0iLCJjbGFzcyBFeHBlcmllbmNlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihleHBlcmllbmNlcywgZG9tRXhwZXJpZW5jZXMpIHtcclxuICAgICAgICB0aGlzLmV4cGVyaWVuY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5kb21FeHBlcmllbmNlcyA9IGRvbUV4cGVyaWVuY2VzO1xyXG4gICAgICAgIHRoaXMuYnVpbGQoZXhwZXJpZW5jZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKGV4cGVyaWVuY2VzRGF0YSkge1xyXG4gICAgICAgIC8vIGJ1aWxkIGV4cGVyaWVuY2VcclxuICAgICAgICBleHBlcmllbmNlc0RhdGEuZXhwZXJpZW5jZXMuZm9yRWFjaChleHBEYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5leHBlcmllbmNlcy5wdXNoKG5ldyBFeHBlcmllbmNlKGV4cERhdGEudHlwZSwgZXhwRGF0YS5lbXBsb2ksIGV4cERhdGEuZGF0ZXMsIGV4cERhdGEuZGVzY3JpYmUsIGV4cERhdGEuc29jaWV0ZSwgLyogZXhwRGF0YS5sb2dvICovKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYnVpbGQgZXhwZXJpZW5jZSBwYXJhbXNcclxuICAgICAgICB0aGlzLmJ1aWxkQW5kRGlzcGxheVBhcmFtcyhleHBlcmllbmNlc0RhdGEucGFyYW1zLnR5cGVzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBkaXNwbGF5XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgIGNvbnN0IGV4cHNEb20gPSB0aGlzLmRvbUV4cGVyaWVuY2VzLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgICAgdGhpcy5leHBlcmllbmNlcy5mb3JFYWNoKGV4cCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBleHBEb20gPSBleHAuYnVpbGRUZW1wbGF0ZSgpO1xyXG4gICAgICAgICAgICBleHBzRG9tLmFwcGVuZENoaWxkKGV4cERvbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRBbmREaXNwbGF5UGFyYW1zKHR5cGVzKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZXNEb20gPSB0aGlzLmRvbUV4cGVyaWVuY2VzLnF1ZXJ5U2VsZWN0b3IoJy50YWdzJyk7XHJcbiAgICAgICAgT2JqZWN0LmtleXModHlwZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAvLyB0eXBlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKVxyXG4gICAgICAgICAgICB0eXBlQnRuLmNsYXNzTGlzdC5hZGQoa2V5KTtcclxuICAgICAgICAgICAgdHlwZUJ0bi50ZXh0Q29udGVudCA9IHR5cGVzW2tleV07XHJcbiAgICAgICAgICAgIHR5cGVzRG9tLmFwcGVuZENoaWxkKHR5cGVCdG4pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJjbGFzcyBTa2lsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdGFncywgbG9nbywgcHJvcG9ydGlvbiwgbGluaykge1xyXG4gICAgICAgIC8vIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xyXG4gICAgICAgIHRoaXMubG9nbyA9IGxvZ287XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uID0gcHJvcG9ydGlvbjtcclxuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW50aXR5RG9tLnNldEF0dHJpYnV0ZSgnZGF0YS10YWcnLCB0aGlzLnRhZ3Muam9pbignLCAnKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50YWdzLmpvaW4oJywgJykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxvZ29Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBsb2dvRG9tLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLmxvZ28pO1xyXG4gICAgICAgIGxvZ29Eb20uY2xhc3NMaXN0LmFkZChcImxvZ28tc2tpbGxcIik7XHJcbiAgICAgICAgbG9nb0RvbS50aXRsZSA9IHRoaXMubmFtZTtcclxuICAgICAgICBlbnRpdHlEb20uYXBwZW5kQ2hpbGQobG9nb0RvbSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb3BvcnRpb25Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9wb3J0aW9uRG9tLmlubmVyVGV4dCA9IHRoaXMucHJvcG9ydGlvbjtcclxuICAgICAgICBlbnRpdHlEb20uYXBwZW5kQ2hpbGQocHJvcG9ydGlvbkRvbSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbnRpdHlEb207XHJcbiAgICB9XHJcblxyXG59IiwiY2xhc3MgU2tpbGxzIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZGF0YSwgZG9tKSB7XHJcbiAgICAgICAgdGhpcy5za2lsbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmRvbVNraWxscyA9IGRvbTtcclxuICAgICAgICB0aGlzLmJ1aWxkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnNraWxscy5mb3JFYWNoKHNraWxsRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxzLnB1c2gobmV3IFNraWxsKFxyXG4gICAgICAgICAgICAgICAgc2tpbGxEYXRhLnR5cGUsXHJcbiAgICAgICAgICAgICAgICBza2lsbERhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIHNraWxsRGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgc2tpbGxEYXRhLmxvZ28sXHJcbiAgICAgICAgICAgICAgICBza2lsbERhdGEucHJvcG9ydGlvbixcclxuICAgICAgICAgICAgICAgIHNraWxsRGF0YS5saW5rXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuYnVpbGRBbmREaXNwbGF5UGFyYW1zKGRhdGEucGFyYW1zKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgpIHtcclxuICAgICAgICBjb25zdCBza2lsbHNEb20gPSB0aGlzLmRvbVNraWxscy5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxzLmZvckVhY2goc2tpbGwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2tpbGxEb20gPSBza2lsbC5idWlsZFRlbXBsYXRlKCk7XHJcbiAgICAgICAgICAgIHNraWxsc0RvbS5hcHBlbmRDaGlsZChza2lsbERvbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnVpbGRBbmREaXNwbGF5UGFyYW1zKHBhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IHRhZ3NEb20gPSB0aGlzLmRvbVNraWxscy5xdWVyeVNlbGVjdG9yKCcudGFncycpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcy50YWdzKS5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAvLyBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snKTtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gcGFyYW1zLnRhZ3NbdGFnXTtcclxuICAgICAgICAgICAgdGFnc0RvbS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJjbGFzcyBUcmFpbmluZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZXMsIGNvbnRlbnQsIHNjaG9vbCwgdGFncykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRhdGVzID0gZGF0ZXM7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnNjaG9vbCA9IHNjaG9vbDtcclxuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW50aXR5RG9tLnNldEF0dHJpYnV0ZSgnZGF0YS10YWcnLCB0aGlzLnRhZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlRG9tLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgZW50aXR5RG9tLmFwcGVuZENoaWxkKHRpdGxlRG9tKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZXNEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZGF0ZXNEb20uY2xhc3NMaXN0LmFkZCgnZGF0ZXMnKTtcclxuICAgICAgICBkYXRlc0RvbS50ZXh0Q29udGVudCA9IHRoaXMuZGF0ZXMuc3RhcnQgKyBcIiAtIFwiICsgdGhpcy5kYXRlcy5lbmQ7XHJcbiAgICAgICAgZW50aXR5RG9tLmFwcGVuZENoaWxkKGRhdGVzRG9tKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb250ZW50RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudERvbS5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgZW50aXR5RG9tLmFwcGVuZENoaWxkKGNvbnRlbnREb20pO1xyXG5cclxuICAgICAgICBjb25zdCBzY2hvb2xEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzY2hvb2xEb20uaW5uZXJUZXh0ID0gdGhpcy5zY2hvb2w7XHJcbiAgICAgICAgZW50aXR5RG9tLmFwcGVuZENoaWxkKHNjaG9vbERvbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVudGl0eURvbTtcclxuICAgIH1cclxuXHJcbn0iLCJjbGFzcyBUcmFpbmluZ3Mge1xyXG4gICAgY29uc3RydWN0b3IodHJhaW5pbmdzLCBkb21UcmFpbmluZ3MpIHtcclxuICAgICAgICB0aGlzLnRyYWluaW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZG9tVHJhaW5pbmdzID0gZG9tVHJhaW5pbmdzO1xyXG4gICAgICAgIHRoaXMuYnVpbGQodHJhaW5pbmdzLnRyYWluaW5ncyk7XHJcbiAgICAgICAgdGhpcy5idWlsZEFuZERpc3BsYXlQYXJhbXModHJhaW5pbmdzLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0cmFpbmluZ3NEb20gPSB0aGlzLmRvbVRyYWluaW5ncy5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbHQgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdHJhaW5pbmcgPSBuZXcgVHJhaW5pbmcoZWx0LnRpdGxlLCBlbHQuZGF0ZXMsIGVsdC5jb250ZW50LCBlbHQuc2Nob29sLCBlbHQudHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWluaW5nVGVtcGxhdGUgPSB0cmFpbmluZy5idWlsZFRlbXBsYXRlKCk7XHJcbiAgICAgICAgICAgIHRyYWluaW5nc0RvbS5hcHBlbmRDaGlsZCh0cmFpbmluZ1RlbXBsYXRlKTtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRyYWluaW5ncyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kb21UcmFpbmluZ3MpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcih0eXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRBbmREaXNwbGF5UGFyYW1zKHBhcmFtcykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJjbGFzcyBBcHAge1xyXG5cclxuICAgIGJ1aWxkRW50aXRpZXMoZGF0YSwgZG9tRWx0cykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbnRhdGlvbiA9IG5ldyBQcmVzZW50YXRpb24oZGF0YS5wcmVzZW50YXRpb24pO1xyXG4gICAgICAgIHByZXNlbnRhdGlvbi5kaXNwbGF5KGRvbUVsdHMucHJlc2VudGF0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZXMgPSBuZXcgRXhwZXJpZW5jZXMoe2V4cGVyaWVuY2VzIDogZGF0YS5leHBlcmllbmNlc0RhdGEuZXhwZXJpZW5jZXMsIHBhcmFtczogZGF0YS5leHBlcmllbmNlc1BhcmFtcyB9LCBkb21FbHRzLmV4cGVyaWVuY2VzKTtcclxuICAgICAgICBjb25zdCB0cmFpbm5pbmdzID0gbmV3IFRyYWluaW5ncyh7dHJhaW5pbmdzOiBkYXRhLnRyYWluaW5nRGF0YS50cmFpbmluZ3MsIHBhcmFtczpkYXRhLnRyYWluaW5nUGFyYW1zfSwgZG9tRWx0cy50cmFpbmluZ3MpO1xyXG4gICAgICAgIC8vIGNvbnN0IHNraWxscyA9IG5ldyBTa2lsbHMoe3NraWxsczogZGF0YS5za2lsbHNEYXRhLnNraWxscywgcGFyYW1zOmRhdGEuc2tpbGxzUGFyYW1zfSwgZG9tRWx0cy5za2lsbHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkRGF0YSgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvcHVibGljL2pzL2pzb24vZGIuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImNvbnN0IGFwcERvbUVsdHMgPSB7XHJcbiAgICBwcmVzZW50YXRpb246IHtcclxuICAgICAgICBwaG90bzogW1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8nKVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKSxcclxuICAgICAgICBhZ2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2UnKSxcclxuICAgICAgICBhZGRyZXNzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpLFxyXG4gICAgICAgIHBvc3RhbENvZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0YWxDb2RlJyksXHJcbiAgICAgICAgY2l0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKSxcclxuICAgICAgICBsaW5rcyA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rcycpLFxyXG4gICAgICAgIGFib3V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKVxyXG4gICAgfSxcclxuICAgIHNraWxsczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NraWxscycpLFxyXG4gICAgdHJhaW5pbmdzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhaW5pbmdzJyksXHJcbiAgICBleHBlcmllbmNlczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGVyaWVuY2VzJylcclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAubG9hZERhdGEoKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgYXBwLmJ1aWxkRW50aXRpZXMoZGF0YSwgYXBwRG9tRWx0cyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuIl19
