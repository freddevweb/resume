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