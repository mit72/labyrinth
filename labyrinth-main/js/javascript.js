//narisi
document.addEventListener("DOMContentLoaded", function (event) {
    let x = 0;
    let y = 1;
    let animating = false;
    let crta = 0;


    function narisi() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        const resitev = [234, 2, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482];
        ctx.strokeStyle = "rgb(127, 172, 255)";
        ctx.lineWidth = 5;

        input = document.querySelector("#myRange").value;
        speed = input;


        if (x < resitev.length - 2) {
            //vzame koordinate 
            const startX = resitev[x];
            const startY = resitev[y];
            const endX = resitev[x + 2];
            const endY = resitev[y + 2];

            //izracun dolzine crte
            const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

            //da crta se enako hitro premika
            crta += speed / dolzinaCrte;
            
            //pr prevelikih hitrostih lahko črta rata prevelika ta linija to prepreči
            if (crta > 1) crta = 1;

            //izračuna nek vmesen x in y, ki bo bil narisan
            const vmesx = startX + (endX - startX) * crta;
            const vmesy = startY + (endY - startY) * crta;
            
            //riše
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(vmesx, vmesy);
            ctx.stroke();
            ctx.closePath();

            //narise kvadratek v kotih da so napolnjeni
            ctx.fillStyle = "rgb(127, 172, 255)";
            ctx.fillRect(startX - ctx.lineWidth / 2, startY - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);

            //ko pride do konca črte jo konča
            if (crta >= 1) {
                x += 2;
                y += 2;
                crta = 0;
            }
            requestAnimationFrame(narisi);
        } else {
            //konec

            /* fix ce na koncu ni dovolj
            const lastX = resitev[x];
            const lastY = resitev[y];
            ctx.fillStyle = "rgb(127, 172, 255)";
            ctx.fillRect(lastX - ctx.lineWidth / 2, lastY - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);*/
            //nazaj enabla gumbe
            animating = false;
            document.getElementById('start').disabled = false;
            document.getElementById('oboje').disabled = false;
            document.getElementById('erase').disabled = false;
            document.getElementById('sprite').disabled = false;
            document.getElementById('slika').disabled = false;
        }
    }

    document.getElementById('start').addEventListener('click', function () {
        //zacetne vrednosti
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        x = 0;
        y = 1;
        crta = 0;
        let input = document.querySelector("#myRange").value;
        speed = input;
        //ko zacne animirat disable gumbe
        if (!animating) {

            animating = true;
            this.disabled = true;
            document.getElementById("erase").disabled = true;
            document.getElementById("oboje").disabled = true;
            document.getElementById("sprite").disabled = true;
            document.getElementById("slika").disabled = true;
            narisi();
        }
    });
});

//izbrisi
document.addEventListener("DOMContentLoaded", function (event) {
    let xdel = 0;
    let ydel = 1;
    let animatingdel = false;
    let crtadel = 0;

    function izbrisi() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        const resitev = [234, 0, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482, 250, 484];

        input = document.querySelector("#myRange").value;
        speed = input;

        if (xdel < resitev.length - 2) {
            const startX = resitev[xdel];
            const startY = resitev[ydel];
            const endX = resitev[xdel + 2];
            const endY = resitev[ydel + 2];

            const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

            crtadel += speed / dolzinaCrte;

            if (crtadel > 1) crtadel = 1;

            const vmesx = startX + (endX - startX) * crtadel;
            const vmesy = startY + (endY - startY) * crtadel;

            //possible fix ce se ze spet break-a
            //to rabim al pa ko enkrat zbrises ne upas narisat vec ubistvu z tem save restore sm nrdu tako da naredi majhno crtico na kateri izbrise vse in nato se tista crtica izbrises, ker ce se ne je vse kar hoces tam narisat nevidno ker uporabljam ctx.globalCompositeOperation = 'destination-out'
            ctx.save();
            ctx.globalCompositeOperation = 'destination-out';


            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(vmesx, vmesy);
            ctx.lineWidth = 6;
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.arc(startX, startY, ctx.lineWidth, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            //povezano z ctx.save
            ctx.restore();

            if (crtadel >= 1) {
                xdel += 2;
                ydel += 2;
                crtadel = 0;
            }

            requestAnimationFrame(izbrisi);
        } else {
            animatingdel = false;
            document.getElementById('start').disabled = false;
            document.getElementById('oboje').disabled = false;
            document.getElementById('sprite').disabled = false;
            document.getElementById('slika').disabled = false;
        }
    }

    document.getElementById('erase').addEventListener('click', function () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        xdel = 0;
        ydel = 1;
        crtadel = 0;
        let input = document.querySelector("#myRange").value;
        speed = input;

        if (!animatingdel) {
            animatingdel = true;
            this.disabled = true;
            document.getElementById("start").disabled = true;
            document.getElementById("oboje").disabled = true;
            document.getElementById("sprite").disabled = true;
            document.getElementById("slika").disabled = true;
            izbrisi();
        }
    });
});

//oboje
document.addEventListener("DOMContentLoaded", function (event) {
    let x = 0;
    let y = 1;
    let animating = false;
    let crta = 0;


    function narisi() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        const resitev = [234, 2, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482];
        ctx.strokeStyle = "rgb(127, 172, 255)";
        ctx.lineWidth = 5;

        input = document.querySelector("#myRange").value;
        speed = input;

        if (x < resitev.length - 2) {

            const startX = resitev[x];
            const startY = resitev[y];
            const endX = resitev[x + 2];
            const endY = resitev[y + 2];

            const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

            crta += speed / dolzinaCrte;

            if (crta > 1) crta = 1;

            const vmesx = startX + (endX - startX) * crta;
            const vmesy = startY + (endY - startY) * crta;


            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(vmesx, vmesy);
            ctx.stroke();
            ctx.closePath();


            ctx.fillStyle = "rgb(127, 172, 255)";
            ctx.fillRect(startX - ctx.lineWidth / 2, startY - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);

            if (crta >= 1) {
                x += 2;
                y += 2;
                crta = 0;
            }

            requestAnimationFrame(narisi);
        } else {

            const lastX = resitev[x];
            const lastY = resitev[y];
            ctx.fillStyle = "rgb(127, 172, 255)";
            ctx.fillRect(lastX - ctx.lineWidth / 2, lastY - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);

            animating = false;
        }
    }

    let xdel = 0;
    let ydel = 1;
    let animatingdel = false;
    let crtadel = 0;

    function izbrisi() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        const resitev = [234, 0, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482, 250, 484];

        if (xdel < resitev.length - 2) {
            const startX = resitev[xdel];
            const startY = resitev[ydel];
            const endX = resitev[xdel + 2];
            const endY = resitev[ydel + 2];

            const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

            crtadel += speed / dolzinaCrte;

            if (crtadel > 1) crtadel = 1;

            const vmesx = startX + (endX - startX) * crtadel;
            const vmesy = startY + (endY - startY) * crtadel;

            //shrani trenutno crto
            ctx.save();
            ctx.globalCompositeOperation = 'destination-out';


            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(vmesx, vmesy);
            ctx.lineWidth = 6;
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.arc(startX, startY, ctx.lineWidth, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            //nazaj narise trenutno crto
            ctx.restore();

            if (crtadel >= 1) {
                xdel += 2;
                ydel += 2;
                crtadel = 0;
            }

            requestAnimationFrame(izbrisi);
        } else {
            animatingdel = false;
            document.getElementById('start').disabled = false;
            document.getElementById('oboje').disabled = false;
            document.getElementById('sprite').disabled = false;
            document.getElementById('slika').disabled = false;
        }
    }

    document.getElementById('oboje').addEventListener('click', function () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let input = document.querySelector("#myRange").value;
        speed = input;

        x = 0;
        y = 1;
        crta = 0;
        xdel = 0;
        ydel = 1;
        crtadel = 0;

        if (!animating && !animatingdel) {
            animating = true;
            animatingdel = true;
            this.disabled = true;
            document.getElementById("start").disabled = true;
            document.getElementById("erase").disabled = true;
            document.getElementById("sprite").disabled = true;
            document.getElementById("slika").disabled = true;
            narisi();
            //kliče metodo  izbrisi po 1000ms
            setTimeout(() => izbrisi(), 1000);
        }
    });
});


//slika
document.addEventListener("DOMContentLoaded", function (event) {
    let x = 0;
    let y = 1;
    let animating = false;
    let crta = 0;

    const img = new Image();
    img.src = 'img/cd_007_small.gif';

    function moveImage() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        const resitev = [234, 2, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482];

        input = document.querySelector("#myRange").value;
        speed = input;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (x < resitev.length - 2) {
            const startX = resitev[x];
            const startY = resitev[y];
            const endX = resitev[x + 2];
            const endY = resitev[y + 2];

            const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
            crta += speed / dolzinaCrte;

            if (crta > 1) crta = 1;

            const vmesx = startX + (endX - startX) * crta;
            const vmesy = startY + (endY - startY) * crta;

            //narise sliko z izracunanim mestom, da je v sredini
            ctx.drawImage(img, vmesx - img.width / 2, vmesy - img.height / 2);

            if (crta >= 1) {
                x += 2;
                y += 2;
                crta = 0;
            }

            requestAnimationFrame(moveImage);
        } else {
            animating = false;
            document.getElementById("start").disabled = false;
            document.getElementById("slika").disabled = false;
            document.getElementById("oboje").disabled = false;
            document.getElementById("sprite").disabled = false;
        }
    }

    document.getElementById('slika').addEventListener('click', function () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        x = 0;
        y = 1;
        crta = 0;

        let input = document.querySelector("#myRange").value;
        speed = input;

        if (!animating) {
            animating = true;
            this.disabled = true;
            document.getElementById("start").disabled = true;
            document.getElementById("sprite").disabled = true;
            document.getElementById("oboje").disabled = true;
            document.getElementById("erase").disabled = true;
            moveImage();
        }
    });
});


//sprite
document.addEventListener("DOMContentLoaded", function () {
    let x = 0;
    let y = 1;
    let animating = false;
    let crta = 0;

    const frameWidth = 16;
    const frameHeight = 16;
    const totalFrames = 8;
    let currentFrame = 0;
    const frameRate = 8;
    let frameCounter = 0;


    const sprite = new Image();
    sprite.src = "img/cd_007_small_sprite.png";

    function animateSprite() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const resitev = [234, 2, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482];

        input = document.querySelector("#myRange").value;
        speed = input;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (x < resitev.length - 2) {
            const startX = resitev[x];
            const startY = resitev[y];
            const endX = resitev[x + 2];
            const endY = resitev[y + 2];

            const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
            crta += speed / dolzinaCrte;

            if (crta > 1) crta = 1;

            const vmesx = startX + (endX - startX) * crta;
            const vmesy = startY + (endY - startY) * crta;

            //koliko hitro se bo spreminjal
            frameCounter++;
            if (frameCounter >= 60 / frameRate) {
                frameCounter = 0;
                currentFrame = (currentFrame + 1) % totalFrames;
            }

            //dobimo pravilen X in Y da bo v sredini
            const frameX = (currentFrame * frameWidth) % sprite.width;
            const frameY = Math.floor((currentFrame * frameWidth) / sprite.width) * frameHeight;


            ctx.drawImage(
                sprite,
                frameX,
                frameY,
                frameWidth,
                frameHeight,
                vmesx - frameWidth / 2,
                vmesy - frameHeight / 2,
                frameWidth,
                frameHeight
            );

            if (crta >= 1) {
                x += 2;
                y += 2;
                crta = 0;
            }

            requestAnimationFrame(animateSprite);
        } else {
            animating = false;
            document.getElementById("start").disabled = false;
            document.getElementById("slika").disabled = false;
            document.getElementById("oboje").disabled = false;
            document.getElementById("sprite").disabled = false;
        }
    }

    document.getElementById("sprite").addEventListener("click", function () {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        x = 0;
        y = 1;
        crta = 0;

        let input = document.querySelector("#myRange").value;
        speed = input;

        if (!animating) {
            animating = true;
            this.disabled = true;
            document.getElementById("start").disabled = true;
            document.getElementById("slika").disabled = true;
            document.getElementById("oboje").disabled = true;
            document.getElementById("erase").disabled = true;
            animateSprite();
        }
    });
});