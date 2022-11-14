function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message {
    constructor(username, time, text){
      this.username= username;
      this.time = time;
      this.text = text;
    }
    toHTML(){
    let str = document.createElement('p');
    str.innerHTML = `${this.time} ${this.username}: ${this.text}`;
    return str;
    }
}
class Messenger extends Message{
    constructor(){
        super();
        this.history=[];
    }
    send(name,text){
    this.time = gettime();
    this.username = name;
    this.text = text;
    let str1 = this.toHTML();
    this.history.push(str1);
    }
    show_history(){
    this.history.forEach((item)=>{
    document.querySelector('.history').append(item);
    });
    }
}
let user = new Messenger();
document.querySelector('.but').addEventListener('click', () => {
    user.send(document.querySelector('input').value, document.querySelector('textarea').value);
});
document.querySelector('.showHistory').addEventListener('click', () => {
    user.show_history();
});