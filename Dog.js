export class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    // METHOD TO RETURN USER HTML
    getUserHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        
        //GET LINK TO BADGE (EMPTY, LIKED, DISLIKED)
        let badgeLink 
        if (!hasBeenLiked && !hasBeenSwiped) {
            badgeLink = ""
        } else if (hasBeenLiked) {
            badgeLink = "src='images/badge-like.png'"
        } else {
            badgeLink = "src='images/badge-nope.png'"
        }
            
        // CHANGE BACKGROUND IMAGE
        let avatarCssString = 'url("' + avatar + '")'
        document.getElementById('main-pic').style.backgroundImage = avatarCssString
        
        // UPDATE HTML OF THE MAIN PIC. IF LIKED OR SWIPED, ADD BADGE
        let userHtml = ''
        if (badgeLink) {
            userHtml = `<img id='badge' class='badge' ${badgeLink}>
                        <div class='main-pic-text-div'>
                            <h1>${name}, ${age}</h1>
                            <h2>${bio}</h2>
                        </div>`
        } else {
            userHtml = `<div></div>
                        <div class='main-pic-text-div'>
                            <h1>${name}, ${age}</h1>
                            <h2>${bio}</h2>
                        </div>`          
        }
        
        
        
        return userHtml
    }
}