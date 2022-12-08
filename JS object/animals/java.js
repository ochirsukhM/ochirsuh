let animals = [
    {type: "dog", sound: "woof"}, 
    {type: "cow",sound: "moo"},
    {type: "cat",sound: "meow"},
    {type: "fox",sound:"Ring-ding-ding-ding-dingeringeding"},
    {type: "owl",sound: "who"},
    {type: "human",sound:"haha"}
]
function sound(animal){
    animal=prompt("amitnii ner")
    for(i=0;i<animals.length;i++){
        if(animal==animals[i].type){
            console.log("What does " + animals[i].type + " say?" + ' \"'+animals[i].sound+'\"')
        }
    }
}
sound()
