function MostrarOcultar() {
    if ($("#imagenvaquita").css("display") == "block") {
            $("#imagenvaquita").css("display", "none")
        } else {
            $("#imagenvaquita").css("display", "block")
    }
    }

function CambiarTexto() {
    if ($("#textoTaylor").text() == "Mi mejor amiga y yo nos juntamos por zoom a escuchar a Taylor Swift mientras estudiamos lo cual es uno de mis momentos favoritos de la semana. Ultimamente estamos escuchando la nueva version de fearless que esta buenisima 10/10 recomendada para tardes de estudio.") {
            $("#textoTaylor").text("Mi mejor amiga y yo nos juntamos por discord a escuchar a Taylor Swift mientras cahuineamos lo cual es uno de mis momentos favoritos del día. Ultimamente estamos escuchando la nueva version de fearless que esta buenisima 10/10 recomendada para noches pasando de largo con tecito.")
        } else {
            $("#textoTaylor").text("Mi mejor amiga y yo nos juntamos por zoom a escuchar a Taylor Swift mientras estudiamos lo cual es uno de mis momentos favoritos de la semana. Ultimamente estamos escuchando la nueva version de fearless que esta buenisima 10/10 recomendada para tardes de estudio.")
    }
    }





