class UIManager{

show(){

    document.body.classList.add("loaded");

}

hide(){

    document.body.classList.remove("loaded");

}

}

export default new UIManager();