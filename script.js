


document.querySelector("a").addEventListener("click", function (){
    if (!document.querySelector("main p")) {
        const paragraph = document.createElement("p");
        paragraph.textContent = `Will you be my valentine? \nChoose your answer:`;
        document.querySelector("main").appendChild(paragraph);
        
        if(document.querySelector("main p")){
            const newDiv = document.createElement("div")
            document.querySelector("main").appendChild(newDiv)

            const secondA = document.createElement("a")
            secondA.textContent = "Yes"
            newDiv.appendChild(secondA)
                if(document.querySelector("div")){
                    document.querySelector("div").addEventListener("click", function (){
                        const paragraph = document.createElement("p");
                        paragraph.textContent = `Yay!💖`;
                        document.querySelector("main div").appendChild(paragraph);  
                    })
                }

            const secondB = document.createElement("a")
            secondB.textContent = "Definitely"
            newDiv.appendChild(secondB)


            document.querySelector("a"). remove()
        }
    }   
}); 