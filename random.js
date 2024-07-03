(() => {
    const $counter = document.getElementById("js-counter");

    const Lottery = () => {
        const result = Math.random();
        if(result < 0.1){
            $counter.style.backgroundColor = "#e60000";
        }else{
            $counter.style.backgroundColor = "#ffffff";
        }
    }

    document.getElementsByClassName("js-button")[1].addEventListener("click", Lottery);
})();