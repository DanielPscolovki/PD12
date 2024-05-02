// 1. Paskaitų skaičiavimas
function skaiciuotiPaskaitas() {
    const paskaitos = {
        pirmadienis: 5,
        antradienis: 6,
        treciadienis: 4,
        ketvirtadienis: 5,
        penktadienis: 4
    };

    let paskaituSkaicius = 0;
    for (let diena in paskaitos) {
        paskaituSkaicius += paskaitos[diena];
    }

    const paskaituLaikasMinutemis = paskaituSkaicius * 45;
    console.log(`Paskaitų skaičius per savaitę - ${paskaituSkaicius}. Tai sudaro ${paskaituLaikasMinutemis} minučių.`);
}

// 2. Puodelių supakavimas
function supakuotiPuodelius(n) {
    const pilnosDezes = Math.floor(n / 3);
    const likusiosPuodeliai = n % 3;
    console.log(`Pilnų dėžučių skaičius: ${pilnosDezes}. Nesupakuotų puodelių skaičius: ${likusiosPuodeliai}.`);
}

// 3. Plytų skaičiavimas
function skaiciuotiPlytas(a, h, kaina) {
    const sienosPlotas = a * h;
    const plytuKiekis = Math.ceil((sienosPlotas * 10000) / (20 * 10)); // Konvertuojame metrus į centimetrus
    const plytuKaina = (plytuKiekis * kaina).toFixed(2);
    console.log(`Plytų kiekis ${plytuKiekis}. Plytos kainuos ${plytuKaina} Eur.`);
}

// 4. Tunelio pravažiavimas
function pravaziavimoLaikas(greitis) {
    const ilgisMetrais = 264;
    const laikasSekundemis = (ilgisMetrais / (greitis * 1000)) * 3600;
    console.log(`Automobilis tunelį pravažiuos per ${(laikasSekundemis.toFixed(2))} s.`);
}

// 5. Žuvų skaičiavimas
function skaiciuotiZuvas(zuvuSkaicius, kiekPerDiena, laikotarpis) {
    const visoDienų = zuvuSkaicius + (kiekPerDiena * laikotarpis);
    console.log(`Po ${laikotarpis} dienų akvariume gyvens ${visoDienų} žuvų.`);
}

// 6. Eglučių aukščio vidurkis
function vidutinisEglutesAukstis(egliuciuAuksciai) {
    const suma = egluciuAuksciai.reduce((total, aukstis) => total + aukstis, 0);
    const vidurkis = suma / egluciuAuksciai.length;
    console.log(`Eglutės aukščio vidurkis: ${vidurkis} cm`);
}

// 7. Greičiausio bėgiko paieška
function greiciausiasBegikas(begikuLaikai) {
    const greiciausiasLaikas = Math.min(...begikuLaikai);
    const vidutinisLaikas = begikuLaikai.reduce((total, laikas) => total + laikas, 0) / begikuLaikai.length;
    const skirtumas = (vidutinisLaikas - greiciausiasLaikas).toFixed(0);
    console.log(`Greičiausio bėgiko laikas: ${greiciausiasLaikas} sek. Jis buvo ${skirtumas} sek geresnis už vidurkį.`);
}

// 8. Kelionės trukmė su pilnai pripildytu baku
function kelionesTrukme(talpa, sanaudos) {
    const dienos = Math.ceil(talpa / (sanaudos + (sanaudos * 2)));
    console.log(`Keliauti bus galima ${dienos} dienas.`);
}

// 9. Autobusų duomenų apdorojimas
function autobusuInfo(duomenys) {
    let bendrasKeleiviuSkaicius = 0;
    let bendrasLaikasMinutemis = 0;
    let maziauNeiDesimt = 0;

    for (let i = 0; i < duomenys.length; i += 2) {
        const laikasValandomis = duomenys[i].split(' ');
        const laikasMinutemis = parseInt(laikasValandomis[0]) * 60 + parseInt(laikasValandomis[1]);
        bendrasLaikasMinutemis += laikasMinutemis;
        const keleiviai = parseInt(duomenys[i + 1]);

        bendrasKeleiviuSkaicius += keleiviai;

        if (keleiviai < 10) {
            maziauNeiDesimt++;
        }
    }

    const vidutinisLaikas = Math.round(bendrasLaikasMinutemis / (duomenys.length / 2));
    console.log(`Bendrai pervežtų keleivių skaičius = ${bendrasKeleiviuSkaicius}. Vidutinis sugaištas važiavimo laikas (min.): ${vidutinisLaikas}. Autobusų skaičius (keleiviai < 10): ${maziauNeiDesimt}.`);
}

// 10. Donato sporto varžybų rezultatas
function sportoVarzybos(p, pz, a, az, k, t) {
    const nuvaziuotaAtstumas = p * k - a * (k - 1);
    const laikasSekundemis = t * 60;
    const greitis = nuvaziuotaAtstumas / laikasSekundemis;
    console.log(`${nuvaziuotaAtstumas} ${greitis.toFixed(2)}`);
}

// Testavimas
skaiciuotiPaskaitas();
supakuotiPuodelius(7);
skaiciuotiPlytas(4, 3, 0.5);
pravaziavimoLaikas(60);
skaiciuotiZuvas(5, 3, 3);
vidutinisEglutesAukstis([167, 134, 145, 156, 155, 176]);
greiciausiasBegikas([22, 20, 25, 25]);
kelionesTrukme(112, 11);
autobusuInfo(["1 50", "17", "2 0", "25"]);
sportoVarzybos(5, 50, 3, 45, 3, 5);
