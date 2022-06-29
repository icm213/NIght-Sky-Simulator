const button = document.querySelector('button')
const main = document.querySelector('main')


let setHightOfStar = () => { 
    return (Math.random() * 100) + '%' 
}

let setDirectionOfStar = () => { 
    return (Math.random() * 100) + '%' 
}

let setMeteorPosition = () => { 
    return (Math.ceil(Math.random()*100)) + '%' 
}

class Star {
    constructor(width, height,opacity) {
        this.width = width,
        this.height = height
        this.opacity = opacity
    }
    addStar() {
        let starHeight = setHightOfStar()
        let starDirection = setDirectionOfStar()
        const newStar = document.createElement('div')
        newStar.style.width = this.width
        newStar.style.height = this.height
        newStar.style.opacity = this.opacity
        newStar.style.top = starHeight
        newStar.style.right = starDirection
        newStar.classList.add('starMovement')
        main.append(newStar)
    }
}

const starGenerator = () => {
    const star = new Star('1px', '1px', '0.5')
    const star2 = new Star('1px', '1px','0.9')
    const star3 = new Star('2px','2px', '0.4')
    const star4 = new Star('3px', '3px', '0.4')
    const star5 = new Star('4px','4px', '0.4')
    const star6 = new Star('2px','2px', '0.6')
    const star7 = new Star('3px', '3px','0.8')
    const star8 = new Star('4px','4px','0.8')

    star.addStar()
    star2.addStar()
    star3.addStar()
    star4.addStar()
    star5.addStar()
    star6.addStar()
    star7.addStar()
    star8.addStar()

}

for (let i = 0; i < 100; i++) {
    starGenerator()
}

const  meteorGenerator = () => {
    let startMeteorX = setMeteorPosition()
    let startMeteorY = setMeteorPosition()
    let stopMeteorX = setMeteorPosition()
    let stopMeteorY = setMeteorPosition()
    const meteor = document.createElement('div')
    meteor.classList.add('meteor')
    main.append(meteor)
    meteor.style.top = `${startMeteorY}`
    meteor.style.left = `${startMeteorX}`
    const meteorAnim = () => {
        meteor.style.transition = '0.8s'
        meteor.style.left = `${stopMeteorX}`
        meteor.style.top = `${stopMeteorY}`
    }
    setTimeout(meteorAnim, 1)
    const removeMeteor = () => {
        meteor.remove()
    }
    setTimeout(removeMeteor, 801)
}


setInterval(meteorGenerator,5000)
button.addEventListener('click', meteorGenerator)