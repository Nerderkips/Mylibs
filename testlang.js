function print(content){

      let a = document.createElement("p");

      let t = document.createTextNode(content);

      a.appendChild(t);

      document.querySelector("body").appendChild(a);

}
