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