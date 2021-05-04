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