(function(){
    let volume = 100;
    let clicks = 0;
    
    const drainAmount = 0.25;
    const drainInterval = 120;
    const boostAmount = 5;

    const barFill    = document.getElementById("bar-fill");
    const barLabel   = document.getElementById("bar-label");
    const statVol    = document.getElementById("stat-vol");
    const statClicks = document.getElementById("stat-clicks");
    const boostBtn   = document.getElementById("boost-btn");

    function getColor(v){
        if(v > 60) return "green";
        if(v > 30) return "orange";
        return "red";
    }

    function render(){
        const pct = Math.max(0, Math.min(100, Math.round(volume)));
        barFill.style.width = pct + "%";
        barFill.style.background = getColor(pct);
        barLabel.textContent = pct + "%";

        statVol.textContent = pct + "%";
        statClicks.textContent = clicks;
    }

    function boost(){
        const before = volume;
        volume = Math.min(100, volume + boostAmount);
        clicks++;
        render();
    }

    function drain(){
        if(volume > 0){
            volume = Math.max(0, volume-drainAmount);
            render();
        }
    }

    boostBtn.addEventListener("click", boost);
    render();
    setInterval(drain, drainInterval);
})();