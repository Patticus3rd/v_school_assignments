class Player{
    constructor(name){
        this.name = name;
        this.totalCoins = 0;
        this.status = "Small";
        this.star = false;
        this.gameActive = false;
    }
    setName(namePicked) {
        this.namePicked = namePicked;
    }
    gotHit(){
        switch(this.status){
            case "Powered Up":
                this.status = "Big";
                this.star = false;
                break;
            case "Big":
                this.status = "Small";
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
        }
    }
    gotPowerUp(){
        switch(this.status){
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                this.star = true;
        }
    }
    addCoin() {
        this.totalCoins++;
        if(this.totalCoins === 15 ){
            this.gameActive = false;
        }
    }
    print() {
        for( let key in this ){
            console.log(`${key}: ${this[key]}`);
        }
    }
}

function rand(){
    let gameNumber = Math.floor(Math.random() * 3);
}


let pat = new Player("Pat")
pat.setName("Mario");

for(let i = 0; i < 3; i++){
    switch(rand()){
        case 0:
            pat.gotHit();
            break;
        case 1:
            pat.gotPowerUp();
            break;
        case 2:
            pat.addCoin();
    }
    pat.print();
}
