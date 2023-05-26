// ASENKRON Problemi

// http istekleri

const users = [
    {
        userId: 5,
        post: "Kübra Post 1"
    },
    {
        userId: 5,
        post: "Kübra Post 2"
    },
    {
        userId: 5,
        post: "Kübra Post 3"
    },
    {
        userId: 6,
        post: "Yusuf Post 1"
    },
    {
        userId: 7,
        post: "Enes Post 1"
    },
]

// user id
// post by user id

function getUserId() {
    setTimeout(() => {
        // Servise gittik ve cevabı aldık   
        return 5;

    }, 1000);  //! Asenkron çalışıyor. 1 saniyede işlem gördüğü için 5 daha geç return olur bu yüzden çalışmaz
}

function getPostByUserId(userId) {
    // gerçekte bir rest api ye istek atılacak
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        })
    }, 500); //! Asenkron çalışır, daha erken çalışsa bile 5 return edilmediği için çalışmaz
}


let userId = getUserId();
getPostByUserId(userId);