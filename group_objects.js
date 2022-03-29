//------------ Grouping Categories ---------
/* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/
const objects = [
    {
    name: "Luke APIWalker",
    category: "Frontend",
    },
    {
    name: "JokesAPI",
    category: "backend",
    },
    {
    name: "Axios Pokemon API",
    category: "frontend",
    },
    {
    name: "Authors",
    category: "full stack",
    },
    {
    name: "FakerAPI",
    category: "Backend",
    },
    {
    name: "Product Manager",
    category: "Full stack",
    },
];


const expected = {
    frontend: [
    {
        name: "Luke APIWalker",
        category: "Frontend",
    },
    {
        name: "Axios Pokemon API",
        category: "frontend",
    },
    ],
    backend: [
    {
        name: "JokesAPI",
        category: "backend",
    },
    {
        name: "FakerAPi",
        category: "Backend",
    },
    ],
    "full Stack": [
    {
        name: "Authors",
        category: "full stack",
    },
    {
        name: "Product Manager",
        category: "Full stack",
    },
    ],
};

function groupObjects(items) {
    let newDict ={};
    for (item of items) {
        if(item['category'].toLowerCase() in newDict){
            // console.log("existng")
            newDict[item['category'].toLowerCase()].push(item)
        }
        else {
            // console.log("new")
            newDict[item['category'].toLowerCase()]=[item];
        }
    }
    return newDict
}
console.log(groupObjects(objects))