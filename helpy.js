/****************************

    Helpy beta 1.0

    Ønskeliste:

        Style()

        Func()

        Text()✅

        

****************************/

class Helpy{

    war(name, value){

        window[name] = value;

    }

    print(name){

        let a = document.createElement("P");

        let b = document.createTextNode(name);

        a.appendChild(b);

        document.querySelector("body").appendChild(a);

    }

    klikk(id, func){

        try{

            document.getElementById(id).addEventListener("click", func());

        }catch{

            console.error("Det oppsto en feil. Sjekk om id-en finnes, og at du har gitt alle argumentene.");

        }

    }

    text(id, txt){

        try{

            document.getElementById(id).innerHTML = txt;

        }catch{

            console.error("Det oppsto en feil. Sjekk om id-en finnes, og at du har gitt alle argumentene.")

        }

    }

}



