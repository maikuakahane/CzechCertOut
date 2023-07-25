// JavaScript source code
import { BCQFNAV02 } from "./NavDivs.js"
import { BCDFNAV01A } from "./NavDivs.js"
import { BCDFNAV01B } from "./NavDivs.js"
import { BCDFNAV02A } from "./NavDivs.js"
import { BCDFNAV02B } from "./NavDivs.js"
import { BCDFNAV03A } from "./NavDivs.js"
import { BCDFNAV03B } from "./NavDivs.js"
import { BCDFNAV04A } from "./NavDivs.js"
import { BCDFNAV04B } from "./NavDivs.js"
import { BCDFNAV05 } from "./NavDivs.js"

window.onload = function () {
    let BCBTN = document.getElementById("bcbtn_en")
    let MCBTN = document.getElementById("mcbtn_en")
    let DCBTN = document.getElementById("dcbtn_en")
    var NAVF = document.getElementById("CCqfnav01")

    BCBTN.onclick = function () {
        NAVF.innerHTML = BCQFNAV02
        let NAV02BTN = document.getElementById("nav02btn")
        NAV02BTN.onclick = function () {
            let FORME = document.getElementsByName("forme")
            var FORMED
            if (FORME[0].checked) {
                FORMED = true
                NAVF.innerHTML = BCDFNAV01A
            }
            else {
                FORMED = false
                NAVF.innerHTML = BCDFNAV01B
            }
            let DF01BTN = document.getElementById("df01btn1")
            DF01BTN.onclick = function () {
                let FNAME01 = document.getElementById("Fname01")
                var FNAME01D = FNAME01.value
                let CSNAME01 = document.getElementById("Csname01")
                var CSNAME01D = CSNAME01.value
                let BSNAME01 = document.getElementById("Bsname01")
                var BSNAME01D = BSNAME01.value
                let DOB01 = document.getElementById("Dob01")
                var DOB01D = DOB01.value
                let POB01 = document.getElementById("Pob01")
                var POB01D = POB01.value
                let COB01 = document.getElementById("Cob01")
                var COB01D = COB01.value
                if (FORMED == true) {
                    NAVF.innerHTML = BCDFNAV02A
                }
                else {
                    NAVF.innerHTML = BCDFNAV02B
                }
                let DF02BTN = document.getElementById("df02btn1")
                DF02BTN.onclick = function () {
                    let FNAME03 = document.getElementById("Fname03")
                    var FNAME03D = FNAME03.value
                    let CSNAME03 = document.getElementById("Csname03")
                    var CSNAME03D = CSNAME03.value
                    let BSNAME03 = document.getElementById("Bsname03")
                    var BSNAME03D = BSNAME03.value
                    let FNAME04 = document.getElementById("Fname04")
                    var FNAME04D = FNAME04.value
                    let CSNAME04 = document.getElementById("Csname04")
                    var CSNAME04D = CSNAME04.value
                    let BSNAME04 = document.getElementById("Bsname04")
                    var BSNAME04D = BSNAME04.value
                    if (FORMED == true) {
                        NAVF.innerHTML = BCDFNAV03A
                    }
                    else {
                        NAVF.innerHTML = BCDFNAV03B
                    }
                    let DF03BTN = document.getElementById("df03btn1")
                    DF03BTN.onclick = function () {
                        let RELI = document.getElementsByName("religion")
                        var RELID
                        if (RELI[0].checked) {
                            RELID = "Neuvádí se - narození po 31.12.1945 / Not applicable - born after 31.12.1945"
                        }
                        else if (RELI[1].checked) {
                            RELID = "Katolické / Catholic"
                        }
                        else if (RELI[2].checked) {
                            RELID = "Evangelické / Protestant"
                        }
                        else if (REL[3].checked) {
                            RELID = "Židovské / Jewish"
                        }
                        if (FORMED == true) {
                            NAVF.innerHTML = BCDFNAV04A
                        }
                        else {
                            NAVF.innerHTML = BCDFNAV04B
                        }
                        let DF04BTN = document.getElementById("df04btn1")
                        DF04BTN.onclick = function () {
                            var RELAD
                            if (FORMED == true) {
                                NAVF.innerHTML = BCDFNAV05
                            }
                            else {
                                let RELA = document.getElementsByName("relation")
                                if (RELA[0].checked) {
                                    RELAD = "Dítě / Child"
                                }
                                else if (RELA[1].checked) {
                                    RELAD = "Rodič / Parent"
                                }
                                else if (RELA[2].checked) {
                                    RELAD = "Vnouče / Grandchild"
                                }
                                else if (RELA[3].checked) {
                                    RELAD = "Praodič / Grandparent"
                                }
                                else if (RELA[4].checked) {
                                    RELAD = "Potomek v přímé linii / Descenant in direct line"
                                }
                                else if (RELA[5].checked) {
                                    RELAD = "Manžel/ka / Spouse"
                                }
                                else if (RELA[6].checked) {
                                    RELAD = "Sourozenec / Sibling"
                                }
                                else if (RELA[7].checked) {
                                    RELAD = "Zplnomocněný zástupce / Authorized person"
                                }
                                NAVF.innerHTML = BCDFNAV05
                            }
                            let DF05BTN = document.getElementById("df05btn1")
                            DF05BTN.onclick = function () {
                                let PADD01 = document.getElementById("Padd01")
                                var PADD01D = PADD01.value
                            }
                         
                        }
                    }
                }
            }
        }
    }
}
