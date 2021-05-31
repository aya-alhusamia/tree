const prompt = require('prompt-sync')({sigint: true});
class TreeNode{
    constructor(data){
        this.data=data
        this.children=[]
    }
    addChildren=(node)=>{
        if(this.children.length<2){
            this.children.push(node)
            console.log( ` the child has  been added${node.data}`)
        }
        else console.log("chiled is a orphen")
    }

     traverse=()=>{
        let nodes=[this]
        while (nodes.length>0){
            let current = nodes.pop() 
           { console.log(current.data)
            nodes=[...nodes, ...current.children]}
        }
     }
     searchPearnt(childName){
        let nodes=[this]
        while (nodes.length>0){
            let current = nodes.pop()
            if(childName.data.split(" ")[1]===current.data.split(" ")[0]){
            return current
           }
           nodes=[...nodes, ...current.children]
        }
        return" parent does not exist "
     }
}
let sss = prompt("enter child full name (done if finished):")
let root = new TreeNode("family")
while(sss.toUpperCase()!=="DONE"){
    let chiled = new TreeNode(sss)
    let per=root.searchPearnt(chiled)
    if(per!=="parent does not exist"){
        per.addChildren
    }
    else console.log(per)
   
    sss=prompt("enter child full name (done if finished):")
   
    
}
root.traverse()