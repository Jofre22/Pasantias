$(document).ready(function(){  
    $(".frutas").hide();

    $("input[name='myCheckbox']").on("click", function(){
        $tagMuestra = $(this);
        $tagOculto= $tagMuestra.closest("tr").find(".frutas");

        if($tagMuestra.is(":checked")){
            $tagOculto.show();
        }else{
            $tagOculto.hide();

        }
    })
    var arreglo = [];
    var objeto_frutas = {}; 

    $(".enviar").on("click", function(){
        $(".frutas").each(function(){
            $valor = $(this).find("input").val();
            $nombre_fruta = $(this).parent().find(".nombre").attr("value");
            if($valor != ''){                
                objeto_frutas[$nombre_fruta] = $valor;
            }
        });
        arreglo.push(objeto_frutas);
        console.log(arreglo);
    })    
});



