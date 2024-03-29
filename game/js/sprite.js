class Sprite {
    
    constructor({ 
        width, 
        height, 
        position, 
        imageSrc 
    }) {
        this.isReversed = false
        this.width = width
        this.height = height
        this.position = position

        this.images = new Array()
        this.image = new Image()
        this.imageSrc = imageSrc
        this.oldImageSrc = imageSrc
        this.frame = 0
        this.frames = 0
        this.frameRate = 4

        this.image.src = imageSrc
    }

    /**
     * Draw the sprite onto the canvas.
     * 
     * @param {CanvasRenderingContext2D} context The context of the canvas to draw the sprite onto.
     */

    draw(context) {
        if (this.isReversed) {
            // Reverse image.
            context.translate(this.position.x + this.width, this.position.y)
            context.scale(-1, 1)
            context.drawImage(this.image, this.frame * this.width, 0, this.width, this.height, 0, 0, this.width, this.height)
            context.setTransform(1, 0, 0, 1, 0, 0)
        } else {
            // Draw regular image.
            context.drawImage(this.image, this.frame * this.width, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
        }
    }

    /**
     * Update the sprite's properties
     */

    update() {
        // Update the image if the sprite state has changed.
        if (this.oldImageSrc !== this.imageSrc) {
            this.oldImageSrc = this.imageSrc

            this.images.forEach(image => {
                if (image.currentSrc.includes(this.imageSrc.slice(4))) {
                    this.image = image
                }
            })
            console.log(this.images)
            console.log(this.image)
        }

        const maxFrames = Math.floor(this.image.width / this.width) - 1
        
        // Reset the frame if it reached past the max frames.
        if (maxFrames === 0) {
            this.frame = 0
        } 

        // Increment the frame to animate the spritesheet.     
        if (!(this.frames % (60 / this.frameRate))) {
            if (this.frame < maxFrames) {
                this.frame++
            } else {
                this.frame = 0
            }
        }

        this.frames++
    }

}