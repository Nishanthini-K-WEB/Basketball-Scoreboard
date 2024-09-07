let homeCount = 0
let homePoints = document.getElementById('home-points')
let guestCount = 0
let guestPoints = document.getElementById('guest-points')

function homeAddPoint() {
    homeCount += 1
    homePoints.innerText= homeCount    
}

function homeAddTwoPoints() {
    homeCount += 2
    homePoints.textContent = homeCount
}

function homeAddThreePoints() {
    homeCount += 3
    homePoints.textContent = homeCount
}


function guestAddPoint() {
    guestCount += 1
    guestPoints.textContent = guestCount    
}

function guestAddTwoPoints() {
    guestCount += 2
    guestPoints.textContent = guestCount
}

function guestAddThreePoints() {
    guestCount += 3
    guestPoints.textContent = guestCount
}





