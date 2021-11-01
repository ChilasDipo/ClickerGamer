
var money = 0
var level = 1
var priceForLevel=10
console.log("Works")
console.log(money)


function yesclick(){
money = money + 1
updateUI()
}

function plusLevel(){

    if(money>priceForLevel){
        level = level+1
        money= money-priceForLevel
        priceForLevel= priceForLevel+2
    }
updateUI()
}

function updateUI(){
    document.getElementById('money').innerHTML= "du har " + money + " £"
    document.getElementById('level').innerHTML= "du er level" + level
    document.getElementById('priceForlevel').innerHTML = "Prisen for at levelup er " + priceForLevel
}

function saveWithLocalStorage(){
    localStorage.setItem("money", money)
    localStorage.setItem("level", level)
    localStorage.setItem("priceForLevel", priceForLevel)
    
}

function saveWithCoockie(){
document.cookie = +money 
}

function saveWithSession(){
    sessionStorage.setItem("money", money)
    sessionStorage.setItem("level", level)
    sessionStorage.setItem("priceForLevel", priceForLevel)
    
}

function loadWithCoockie(){
    money = parseInt(document.cookie)
}
function loadlWithLocalStorage(){
    if(localStorage.getItem("money")!=null){
      money = parseInt(localStorage.getItem("money"))  
    }
    
    if(localStorage.getItem("level")!=null){
        level = parseInt(localStorage.getItem("level"))  
      }
priceForLevel = parseInt(localStorage.getItem("priceForLevel"))
}

function loadlWithSessionStorage(){
    if(sessionStorage.getItem("money")!=null){
      money = parseInt(sessionStorage.getItem("money"))  
    }
    
    if(sessionStorage.getItem("level")!=null){
        level = parseInt(sessionStorage.getItem("level"))  
      }
      if(sessionStorage.getItem("priceForLevel")!=null){
        priceForLevel = parseInt(sessionStorage.getItem("priceForLevel"))  
      }

}

function reset(){
    money = 0
    level = 1
    priceForLevel = 10
    updateUI()
}

function save(){
    saveWithSession()
}

function start(){
    loadlWithSessionStorage()
    updateUI()
}


