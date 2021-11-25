var users = [
    {
        names: "Samandar",
        surname: "Iskandarov"
    },
    {
        names: "Shodiyor",
        surname: "Shomurodov"
    },
    {
        names: "Tohir",
        surname: "Murotboyev"
    },
    {
        names: "Bobur",
        surname: "Tohirov"
    },
    {
        names: "Bosit",
        surname: "Sobitov"
    },
    {
        names: "Murod",
        surname: "Marufjonov"
    },
    {
        names: "Saidazim",
        surname: "O'lmasov"
    },
    {
        names: "Shoazlar",
        surname: "To'laganov"
    }
]
users.forEach(thisUserc);
function thisUserc(item, i, array) {
    var allUsers = `${item.names} ${item.surname}`
    array[i] = allUsers
}

console.log(users);