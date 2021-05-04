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