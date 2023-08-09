let songsIndex = 0;

let audioElement = new Audio("3.mp3 ")


// let songItem = Array.from(document.getElementsByClassName("songs"))

let songs = [{
    songName: "Rafta-Rafta", filepath: "1.mp3"
}, {
    songName: "Apna Bana Le", filepath: "2.mp3"
}, {
    songName: "O bedardeya", filepath: "3.mp3"

}, {
    songName: "Phir Kya", filepath: "4.mp3"

}, {
    songName: "Pyaar Hota Hota ", filepath: "5.mp3"

}]



audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    ProgressBar.value = progress;

})

ProgressBar.addEventListener("change", () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100
})

Z.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        Z.classList.remove('fa-play');
        Z.classList.add('fa-pause')
    } else {
        audioElement.pause();
        Z.classList.remove('fa-pause');
        Z.classList.add('fa-play')
    }
})

const Playall = () => {
    Array.from(document.getElementsByClassName("Playbutton")).forEach((element) => {
        element.addEventListener("click", (e) => {

            e.target.classList.remove("fa-pause")
            e.target.classList.add("fa-play")

        })

    });

}

Array.from(document.getElementsByClassName("Playbutton")).forEach((element) => {
    element.addEventListener("click", (e) => {
        Playall();
        songsIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `${songsIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        Z.classList.remove("fa-play");
        Z.classList.add("fa-pause");

    })

});

document.getElementById("Y").addEventListener("click", (e) => {
    if (songsIndex <= 0) {
        songsIndex = 0
    }
    else {
        songsIndex -= 1
    }


    audioElement.src = `${songsIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    Z.classList.remove("fa-play");
    Z.classList.add("fa-pause");

})
document.getElementById("A").addEventListener("click", (e) => {
    if (songsIndex >= 6) {
        songsIndex = 0
    }

    else { songsIndex += 1 }

    audioElement.src = `${songsIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    Z.classList.remove("fa-play");
    Z.classList.add("fa-pause");

})








