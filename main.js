let = document.getElementById('start');
let body = document.body;
let title;
let input;
let preTitle;
let image;
let image1;
let image2;


start.addEventListener('click',()=>{
    start.parentNode.removeChild(start);
    let title = document.createElement('h1');
    let input = document.createElement('input');
    input.autofocus = "autofocus";

    title.textContent = 'Введите Ваше имя:'

    body.append(title);
    body.append(input);
    

    input.addEventListener('keyup', (event)=>{
        if (event.code == 'Enter' && input.value != ''){
            title.textContent = 'Добро пожаловать, ' + input.value + '!'
            input.parentNode.removeChild(input);

            setTimeout(() => {
                title.parentNode.removeChild(title);
                iLoveMath();
            }, 2000);
        }
    })
})

function createTextLvl(question,answer,nextLvl){
    title = document.createElement('h1');
    input = document.createElement('input');
    input.autofocus = "autofocus";
    preTitle = document.createElement('p');

    title.textContent = question;
    body.append(title);
    body.append(input);
    body.append(preTitle);

    input.addEventListener('keyup', (event)=>{
        if (event.code == 'Enter' && input.value != ''){
            if (input.value.toLowerCase() == answer){
                input.parentNode.removeChild(input);
                preTitle.textContent = 'Верно!'

                setTimeout(() => {
                    title.parentNode.removeChild(title);
                    preTitle.parentNode.removeChild(preTitle);
                    if (nextLvl != null){
                        nextLvl();   
                    }
                    
                }, 2000);

            } else{preTitle.textContent = 'Неверно!';
                    input.value = '';}
        }
            
    })
}

function createIMGLvl(question, trueLink, falseLink, nextLvl){
    title = document.createElement('h1');
    preTitle = document.createElement('p');
    image1 = document.createElement('img');
    image2 = document.createElement('img');

    title.textContent = question;
    body.append(title);
    body.append(preTitle);
    body.append(image1);
    body.append(image2);


    image1.src = trueLink;
    image2.src = falseLink;

    image1.addEventListener('click', ()=>{
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        preTitle.textContent = 'Верно!'
        setTimeout(() => {
            title.parentNode.removeChild(title);
            preTitle.parentNode.removeChild(preTitle);
            if (nextLvl != null){
                nextLvl();   
            } 
        }, 2000);
    })

    image2.addEventListener('click', ()=>{
        preTitle.textContent = 'Неверно!';      
    })  
}

function createIandT(question, trueLink, answer, nextLvl){
    title = document.createElement('h1');
    preTitle = document.createElement('p');
    input = document.createElement('input');
    input.autofocus = "autofocus";
    image = document.createElement('img');

    title.textContent = question;
    body.append(title);
    body.append(image);
    body.append(input);
    body.append(preTitle);
    
    image.src = trueLink;

    input.addEventListener('keyup', (event)=>{
        if (event.code == 'Enter' && input.value != ''){
            if (input.value.toLowerCase() == answer){
                input.parentNode.removeChild(input);
                image.parentNode.removeChild(image);
                preTitle.textContent = 'Верно!'

                setTimeout(() => {
                    title.parentNode.removeChild(title);
                    preTitle.parentNode.removeChild(preTitle);
                    if (nextLvl != null){
                        nextLvl();   
                    }
                    
                }, 2000);

            } else{preTitle.textContent = 'Неверно!';
                    input.value = '';}
        }      
    })
}

function createIMGSLvl(question, falseLink, trueLink, falseLink1, nextLvl){
    title = document.createElement('h1');
    preTitle = document.createElement('p');
    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image3 = document.createElement('img');

    title.textContent = question;
    body.append(title);
    body.append(image1);
    body.append(image2);
    body.append(image3);
    body.append(preTitle);

    image1.src = trueLink;
    image2.src = falseLink;
    image3.src = falseLink1;

    image2.addEventListener('click', ()=>{
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        image3.parentNode.removeChild(image3);
        preTitle.textContent = 'Верно!'
        setTimeout(() => {
            title.parentNode.removeChild(title);
            preTitle.parentNode.removeChild(preTitle);
            if (nextLvl != null){
                nextLvl();   
            } 
        }, 2000);
    })

    image1.addEventListener('click', ()=>{
        preTitle.textContent = 'Неверно!';      
    })  
    image3.addEventListener('click', ()=>{
        preTitle.textContent = 'Неверно!';      
    })  
}

function theEnd(){
    title = document.createElement('h1');
    body.append(title);
    title.textContent = 'Спасибо за прохождение!'
}


function iLoveMath(){
    createTextLvl('Сколько будет 2 * 8?', 16, iLoveGeography);
}
function iLoveGeography(){
    createTextLvl('Назовите столицу Бразилии:', 'бразилиа', iLoveBiology);
}
function iLoveBiology(){
    createTextLvl('Из какого дерева делают спички?', 'осина', iLoveMount);
}
function iLoveMount(){
    createIMGLvl('Какая из гор - Эверест?', './img/eve.jpg', './img/elb.jpg', iLoveFlags);
}


function iLoveFlags(){
    createIMGLvl('Какой из флагов - флаг Польши?', './img/pol.png','./img/ind.png', iLoveMath2)
}
function iLoveMath2(){
    createTextLvl('Решите: (1+1+1+1-2+3-2)*2*0 =', '0', iLoveAnimals)
}
function iLoveAnimals(){
    createIandT('Что за животное изображено на фотографии?','./img/slon.jpg' ,'слон', iLoveItem)
}
function iLoveItem(){
    createIandT('Что за предмет изображён на фотографии?','./img/sc.jpg' ,'штангенциркуль', iLoveChisa)
}
function iLoveChisa(){
    createIMGSLvl('Угадайте загадонное мной число:','./img/2.png' ,'./img/1.png', './img/3.png', theEnd)
}
