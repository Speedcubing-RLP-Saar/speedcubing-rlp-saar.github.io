function calcBudget() {
    const fromUSDtoEUR = 0.96;

    // all inputs
    var tn = document.getElementById("tn");
    var free = document.getElementById("free");
    var guests = document.getElementById("guests");
    var tnFee = document.getElementById("tn-fee");
    var gFee= document.getElementById("g-fee");
    var extraPlus = document.getElementById("extraPlus");

    var venue = document.getElementById("venue");
    var ins = document.getElementById("ins");
    var print = document.getElementById("print");
    var nt = document.getElementById("nt");
    var awards = document.getElementById("awards");
    var dele = document.getElementById("dele");
    var extraMinus = document.getElementById("extraMinus");

    // all outputs
    var allesPlus = document.getElementById("allesPlus");
    var wca = document.getElementById("wca");
    var allesMinus = document.getElementById("allesMinus");
    var bilanz = document.getElementById("bilanz");

    allesPlus.value = ((parseFloat(tn.value) - parseFloat(free.value)) * parseFloat(tnFee.value)
                    + parseFloat(guests.value) * parseFloat(gFee.value)
                    + parseFloat(extraPlus.value)).toFixed(2);

    console.log('Use either', 3 * fromUSDtoEUR, '(via 3$) or', parseFloat(tnFee.value) * 0.15, '(via 15%) as factor.');
    wca.value = (Math.max(parseFloat(tn.value) * 3 * fromUSDtoEUR,
                        parseFloat(tn.value) * parseFloat(tnFee.value) * 0.15)).toFixed(2);

    allesMinus.value = (parseFloat(venue.value)
                     + parseFloat(ins.value)
                     + parseFloat(print.value)
                     + parseFloat(nt.value)
                     + parseFloat(awards.value)
                     + parseFloat(dele.value)
                     + parseFloat(wca.value)
                     + parseFloat(extraMinus.value)).toFixed(2);

     bilanz.value = (parseFloat(allesPlus.value) - parseFloat(allesMinus.value)).toFixed(2);
     if (bilanz.value < 0.0) {
         bilanz.style.backgroundColor = "#F00";
         bilanz.style.color = "#EEE";
         bilanz.value = bilanz.value + ' (Einnahmen erhöhen oder Abstriche bei optionalen Ausgaben machen)';
     } else if (bilanz.value > 0.1 * parseFloat(allesPlus.value)) {
         bilanz.style.backgroundColor = "#EEE";
         bilanz.style.color = "#660";
         bilanz.value = bilanz.value + ' (etwas zu hoher Überschuss, gerne die Einnahmen etwas verringern oder mehr in Goodies etc. investieren)';
     } else {
         bilanz.style.backgroundColor = "#1F1";
         bilanz.style.color = "#222";
     }

     document.getElementById("orgaMailing").href = `mailto:speedcubing.rlp.saar@gmail.com?subject=Competition-Orga%20Anfrage&body=Hallo%20Speedcubing%20RLP%20%2F%20Saar%20Team%2C%0D%0A%0D%0Awir%20planen%20eine%20Competition%20in%20ORT%20am%20DATUMDATUM%20bzw.%20VON%20BIS.%0D%0A%0D%0ABESCHREIBE%20DEINE%20VENUE%0D%0A%0D%0ABESCHREIBE%20DEIN%20TEAM%0D%0A%0D%0AWir%20haben%20das%20Budget%20schon%20probegerechnet%2C%20das%20sind%20die%20Daten%20mit%20denen%20wir%20das%20Formular%20auf%20der%20Website%20ausgef%C3%BCllt%20haben.%0D%0AAnzahl%20Teilnehmer%20${tn.value}%0D%0AAnzahl%20Teilnehmer%20mit%20freiem%20Eintritt%20${free.value}%0D%0AErwartete%20Anzahl%20G%C3%A4ste%20${guests.value}%0D%0ATeilnahmegeb%C3%BChr%20${tnFee.value}%0D%0AEintritt%20G%C3%A4ste%20${gFee.value}%0D%0AWeitere%20Einnahmen%20${extraPlus.value}%0D%0ASumme%20Einnahmen%20${allesPlus.value}%0D%0A%0D%0AAnmietung%20Venue%20${venue.value}%0D%0AVersicherung%20${ins.value}%0D%0ADrucken%20${print.value}%0D%0ANamensschilder%20${nt.value}%0D%0APreise%20${awards.value}%0D%0AReisekosten%20Delegate(s)%20${dele.value}%0D%0AWCA%20Geb%C3%BChren%20${wca.value}%0D%0AWeitere%20Ausgaben%20${extraMinus.value}%0D%0ASumme%20Ausgaben%20${allesMinus.value}%0D%0A%0D%0AEinnahmen%20minus%20Ausgaben%20${bilanz.value}%0D%0A%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0AEURE%20NAMEN`
}

function calcRound() {

    // all inputs
    var nSt = document.getElementById("nSt");
    var nTimer = document.getElementById("nTimer");
    var ev = document.getElementById("ev");
    var tnEv = document.getElementById("tnEv");
    var ownHeat = document.getElementById("ownHeat");
    var ownHeatDur = document.getElementById("ownHeatDur");

    // all outputs
    var outHeat = document.getElementById("outHeat");
    var outSize = document.getElementById("outSize");
    var ownSize = document.getElementById("ownSize");
    var outGSize = document.getElementById("outGSize");
    var ownGSize = document.getElementById("ownGSize");
    var outHeatDur = document.getElementById("outHeatDur");
    var outTime = document.getElementById("outTime");

    const heatDurs = {'222' : 22,
                      '333' : 25,
                      '444' : 30,
                      '555' : 35,
                      '666' : 23,
                      '777' : 35,
                      'oh' : 25,
                      'bld' : 28,
                      'fmc' : 70,
                      'p' : 22,
                      'm' : 30,
                      'sq' : 25,
                      'sk' : 22,
                      'c' : 25,
                      'mb' : 75,
                      '4b' : 55,
                      '5b' : 65}

    if (['222','p','sk'].includes(ev.value)) {
        var ev_factor = 2.0;
    } else {
        var ev_factor = 1.5;
    }

    if (['fmc','mb'].includes(ev.value)) {
        outHeat.value = 1;
    } else {
        outHeat.value = (parseFloat(tnEv.value) / (parseFloat(nTimer.value) * ev_factor)).toFixed(2);
    }
    outHeatDur.value = heatDurs[ev.value];

    outSize.value = (parseFloat(tnEv.value) / parseFloat(outHeat.value)).toFixed(2);
    ownSize.value = (parseFloat(tnEv.value) / parseFloat(ownHeat.value)).toFixed(2);
    outGSize.value = (parseFloat(outSize.value) / parseFloat(nSt.value)).toFixed(2);
    ownGSize.value = (parseFloat(ownSize.value) / parseFloat(nSt.value)).toFixed(2);

    if (parseFloat(ownHeatDur.value) != 0) {
        if (parseFloat(ownHeat.value) != 0) {
            outTime.value = (parseFloat(ownHeatDur.value) * parseFloat(ownHeat.value)).toFixed(2);
        } else {
            outTime.value = (parseFloat(ownHeatDur.value) * parseFloat(outHeat.value)).toFixed(2);
        }
    } else {
        if (parseFloat(ownHeat.value) != 0) {
            outTime.value = (parseFloat(outHeatDur.value) * parseFloat(ownHeat.value)).toFixed(2);
        }
        else {
            outTime.value = (parseFloat(outHeatDur.value) * parseFloat(outHeat.value)).toFixed(2);
        }
    }
}
