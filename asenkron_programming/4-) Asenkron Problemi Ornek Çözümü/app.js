// ASENKRON Problemi

// http istekleri

const users = [{
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

function getUserId(callback) {
    setTimeout(() => {
        // Servise gittik ve cevabı aldık   
        let userId = 5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId) {
    // gerçekte bir rest api ye istek atılacak
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        })
    }, 500);
}

getUserId(getPostByUserId);

// let userId = getUserId();
// getPostByUserId(userId);