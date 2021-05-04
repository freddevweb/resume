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
        // this.
    }

    template() {        
        
    }


}
class Trainings {
    constructor(trainings, domTrainings) {
        this.trainings = [];
        this.domTrainings = domTrainings;
        this.build(trainings.trainings);
    }
    
    build(data) {

        data.forEach(training => {
            this.trainings.push(new Training(training.title, training.dates, training.content, training.school, training.type))
        });
        console.log(this.trainings);
        console.log(this.domTrainings);
        console.log(data);
        
    }

    filter(type) {
        console.log(type);
    }

    display() {

    }

    buildAndDisplayParams(params) {

    }



}
class App {

    buildEntities(data, domElts) {
        // const experiences = new Experiences({experiences : data.experiencesData.experiences, params: data.experiencesParams }, domElts.experiences);
        const trainnings = new Trainings({trainings: data.trainingData.trainings, params:data.trainingParams}, domElts.trainings);
        // const skills = new Skills({skills: data.skillsData.skills, params:data.skillsParams}, domElts.skills);
        
        console.log(data.experiencesParams);
        // console.log(data);
        // console.log(domElts);


    }

    async loadData() {
        const response = await fetch('/public/js/json/db.json');
        const data = await response.json();


        return data;
    }



}
const appDomElts = {
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

    


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cGVyaWVuY2UuanMiLCJFeHBlcmllbmNlcy5qcyIsIlNraWxsLmpzIiwiU2tpbGxzLmpzIiwiVHJhaW5pbmcuanMiLCJUcmFpbmluZ3MuanMiLCJBcHAuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeHBlcmllbmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGRhdGVzLCBkZXNjcmliZSwgY29tcGFueSwgbG9nbykge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVzID0gZGF0ZXM7XHJcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IGRlc2NyaWJlO1xyXG4gICAgICAgIHRoaXMuY29tcGFueSA9IGNvbXBhbnk7XHJcbiAgICAgICAgdGhpcy5sb2dvID0gbG9nbztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFRlbXBsYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVudGl0eURvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJywgdGhpcy50eXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5hbWVEb20uaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChuYW1lRG9tKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZXNEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYXRlc0RvbS5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPSdkYXRlcyc+XCIgKyB0aGlzLmRhdGVzLnN0YXJ0ICsgXCIgLSBcIiArIHRoaXMuZGF0ZXMuZW5kICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChkYXRlc0RvbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaWJlRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVzY3JpYmVEb20uaW5uZXJIVE1MID0gdGhpcy5kZXNjcmliZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaWJlKVxyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChkZXNjcmliZURvbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBhbnlEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb21wYW55RG9tLmlubmVyVGV4dCA9IHRoaXMuY29tcGFueTtcclxuICAgICAgICBlbnRpdHlEb20uYXBwZW5kQ2hpbGQoY29tcGFueURvbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvZ29Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxvZ29Eb20uaW5uZXJIVE1MID0gdGhpcy5sb2dvO1xyXG4gICAgICAgIGVudGl0eURvbS5hcHBlbmRDaGlsZChsb2dvRG9tKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0eURvbTtcclxuICAgIH1cclxuXHJcbn0iLCJjbGFzcyBFeHBlcmllbmNlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihleHBlcmllbmNlcywgZG9tRXhwZXJpZW5jZXMpIHtcclxuICAgICAgICB0aGlzLmV4cGVyaWVuY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5kb21FeHBlcmllbmNlcyA9IGRvbUV4cGVyaWVuY2VzO1xyXG4gICAgICAgIHRoaXMuYnVpbGQoZXhwZXJpZW5jZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKGV4cGVyaWVuY2VzRGF0YSkge1xyXG4gICAgICAgIC8vIGJ1aWxkIGV4cGVyaWVuY2VcclxuICAgICAgICBleHBlcmllbmNlc0RhdGEuZXhwZXJpZW5jZXMuZm9yRWFjaChleHBEYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5leHBlcmllbmNlcy5wdXNoKG5ldyBFeHBlcmllbmNlKGV4cERhdGEudHlwZSwgZXhwRGF0YS5lbXBsb2ksIGV4cERhdGEuZGF0ZXMsIGV4cERhdGEuZGVzY3JpYmUsIGV4cERhdGEuc29jaWV0ZSwgLyogZXhwRGF0YS5sb2dvICovKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYnVpbGQgZXhwZXJpZW5jZSBwYXJhbXNcclxuICAgICAgICB0aGlzLmJ1aWxkQW5kRGlzcGxheVBhcmFtcyhleHBlcmllbmNlc0RhdGEucGFyYW1zLnR5cGVzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBkaXNwbGF5XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgIGNvbnN0IGV4cHNEb20gPSB0aGlzLmRvbUV4cGVyaWVuY2VzLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgICAgdGhpcy5leHBlcmllbmNlcy5mb3JFYWNoKGV4cCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBleHBEb20gPSBleHAuYnVpbGRUZW1wbGF0ZSgpO1xyXG4gICAgICAgICAgICBleHBzRG9tLmFwcGVuZENoaWxkKGV4cERvbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRBbmREaXNwbGF5UGFyYW1zKHR5cGVzKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZXNEb20gPSB0aGlzLmRvbUV4cGVyaWVuY2VzLnF1ZXJ5U2VsZWN0b3IoJy50YWdzJyk7XHJcbiAgICAgICAgT2JqZWN0LmtleXModHlwZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAvLyB0eXBlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKVxyXG4gICAgICAgICAgICB0eXBlQnRuLmNsYXNzTGlzdC5hZGQoa2V5KTtcclxuICAgICAgICAgICAgdHlwZUJ0bi50ZXh0Q29udGVudCA9IHR5cGVzW2tleV07XHJcbiAgICAgICAgICAgIHR5cGVzRG9tLmFwcGVuZENoaWxkKHR5cGVCdG4pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJjbGFzcyBTa2lsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdGFncywgbG9nbywgcHJvcG9ydGlvbiwgbGluaykge1xyXG4gICAgICAgIC8vIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xyXG4gICAgICAgIHRoaXMubG9nbyA9IGxvZ287XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uID0gcHJvcG9ydGlvbjtcclxuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW50aXR5RG9tLnNldEF0dHJpYnV0ZSgnZGF0YS10YWcnLCB0aGlzLnRhZ3Muam9pbignLCAnKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50YWdzLmpvaW4oJywgJykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxvZ29Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBsb2dvRG9tLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLmxvZ28pO1xyXG4gICAgICAgIGxvZ29Eb20uY2xhc3NMaXN0LmFkZChcImxvZ28tc2tpbGxcIik7XHJcbiAgICAgICAgbG9nb0RvbS50aXRsZSA9IHRoaXMubmFtZTtcclxuICAgICAgICBlbnRpdHlEb20uYXBwZW5kQ2hpbGQobG9nb0RvbSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb3BvcnRpb25Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9wb3J0aW9uRG9tLmlubmVyVGV4dCA9IHRoaXMucHJvcG9ydGlvbjtcclxuICAgICAgICBlbnRpdHlEb20uYXBwZW5kQ2hpbGQocHJvcG9ydGlvbkRvbSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbnRpdHlEb207XHJcbiAgICB9XHJcblxyXG59IiwiY2xhc3MgU2tpbGxzIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZGF0YSwgZG9tKSB7XHJcbiAgICAgICAgdGhpcy5za2lsbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmRvbVNraWxscyA9IGRvbTtcclxuICAgICAgICB0aGlzLmJ1aWxkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnNraWxscy5mb3JFYWNoKHNraWxsRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxzLnB1c2gobmV3IFNraWxsKFxyXG4gICAgICAgICAgICAgICAgc2tpbGxEYXRhLnR5cGUsXHJcbiAgICAgICAgICAgICAgICBza2lsbERhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIHNraWxsRGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgc2tpbGxEYXRhLmxvZ28sXHJcbiAgICAgICAgICAgICAgICBza2lsbERhdGEucHJvcG9ydGlvbixcclxuICAgICAgICAgICAgICAgIHNraWxsRGF0YS5saW5rXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuYnVpbGRBbmREaXNwbGF5UGFyYW1zKGRhdGEucGFyYW1zKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgpIHtcclxuICAgICAgICBjb25zdCBza2lsbHNEb20gPSB0aGlzLmRvbVNraWxscy5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxzLmZvckVhY2goc2tpbGwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2tpbGxEb20gPSBza2lsbC5idWlsZFRlbXBsYXRlKCk7XHJcbiAgICAgICAgICAgIHNraWxsc0RvbS5hcHBlbmRDaGlsZChza2lsbERvbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnVpbGRBbmREaXNwbGF5UGFyYW1zKHBhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IHRhZ3NEb20gPSB0aGlzLmRvbVNraWxscy5xdWVyeVNlbGVjdG9yKCcudGFncycpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcy50YWdzKS5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAvLyBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snKTtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodGFnKTtcclxuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gcGFyYW1zLnRhZ3NbdGFnXTtcclxuICAgICAgICAgICAgdGFnc0RvbS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJjbGFzcyBUcmFpbmluZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZXMsIGNvbnRlbnQsIHNjaG9vbCwgdGFncykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRhdGVzID0gZGF0ZXM7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnNjaG9vbCA9IHNjaG9vbDtcclxuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5cclxuICAgIH1cclxuXHJcbiAgICB0ZW1wbGF0ZSgpIHsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJjbGFzcyBUcmFpbmluZ3Mge1xyXG4gICAgY29uc3RydWN0b3IodHJhaW5pbmdzLCBkb21UcmFpbmluZ3MpIHtcclxuICAgICAgICB0aGlzLnRyYWluaW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZG9tVHJhaW5pbmdzID0gZG9tVHJhaW5pbmdzO1xyXG4gICAgICAgIHRoaXMuYnVpbGQodHJhaW5pbmdzLnRyYWluaW5ncyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1aWxkKGRhdGEpIHtcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHRyYWluaW5nID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFpbmluZ3MucHVzaChuZXcgVHJhaW5pbmcodHJhaW5pbmcudGl0bGUsIHRyYWluaW5nLmRhdGVzLCB0cmFpbmluZy5jb250ZW50LCB0cmFpbmluZy5zY2hvb2wsIHRyYWluaW5nLnR5cGUpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJhaW5pbmdzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRvbVRyYWluaW5ncyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZEFuZERpc3BsYXlQYXJhbXMocGFyYW1zKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiY2xhc3MgQXBwIHtcclxuXHJcbiAgICBidWlsZEVudGl0aWVzKGRhdGEsIGRvbUVsdHMpIHtcclxuICAgICAgICAvLyBjb25zdCBleHBlcmllbmNlcyA9IG5ldyBFeHBlcmllbmNlcyh7ZXhwZXJpZW5jZXMgOiBkYXRhLmV4cGVyaWVuY2VzRGF0YS5leHBlcmllbmNlcywgcGFyYW1zOiBkYXRhLmV4cGVyaWVuY2VzUGFyYW1zIH0sIGRvbUVsdHMuZXhwZXJpZW5jZXMpO1xyXG4gICAgICAgIGNvbnN0IHRyYWlubmluZ3MgPSBuZXcgVHJhaW5pbmdzKHt0cmFpbmluZ3M6IGRhdGEudHJhaW5pbmdEYXRhLnRyYWluaW5ncywgcGFyYW1zOmRhdGEudHJhaW5pbmdQYXJhbXN9LCBkb21FbHRzLnRyYWluaW5ncyk7XHJcbiAgICAgICAgLy8gY29uc3Qgc2tpbGxzID0gbmV3IFNraWxscyh7c2tpbGxzOiBkYXRhLnNraWxsc0RhdGEuc2tpbGxzLCBwYXJhbXM6ZGF0YS5za2lsbHNQYXJhbXN9LCBkb21FbHRzLnNraWxscyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5leHBlcmllbmNlc1BhcmFtcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9tRWx0cyk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkRGF0YSgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvcHVibGljL2pzL2pzb24vZGIuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImNvbnN0IGFwcERvbUVsdHMgPSB7XHJcbiAgICBza2lsbHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2lsbHMnKSxcclxuICAgIHRyYWluaW5nczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWluaW5ncycpLFxyXG4gICAgZXhwZXJpZW5jZXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBlcmllbmNlcycpXHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLmxvYWREYXRhKClcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGFwcC5idWlsZEVudGl0aWVzKGRhdGEsIGFwcERvbUVsdHMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuXHJcbiJdfQ==
