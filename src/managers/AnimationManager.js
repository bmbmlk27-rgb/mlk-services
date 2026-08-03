class AnimationManager {

    constructor(){

        this.animations=[];

    }

    add(animation){

        this.animations.push(animation);

    }

    start(){

        this.animations.forEach(animation=>{

            animation();

        });

    }

}

export default new AnimationManager();