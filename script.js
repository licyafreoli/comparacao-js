// Funções Promises
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "User1" };
            resolve(data);
        }, 2000);
    });
}

function fetchMoreDataPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const moreData = { ...data, age: 25 };
            resolve(moreData);
        }, 2000);
    });
}

// Promises
fetchDataPromise()
    .then((data) => {
        console.log("Dados iniciais com Promise:", data);
        return fetchMoreDataPromise(data);
    })
    .then((finalData) => {
        console.log("Dados finais com Promise:", finalData);
    })
    .catch((error) => {
        console.error("Erro com Promise:", error);
    });

// Funções async/await
async function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "User1" };
            resolve(data);
        }, 2000);
    });
}

async function fetchMoreDataAsync(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const moreData = { ...data, age: 25 };
            resolve(moreData);
        }, 2000);
    });
}

async function processData() {
    try {
        const data = await fetchDataAsync();
        console.log("Dados iniciais com Async/Await:", data);
        const finalData = await fetchMoreDataAsync(data);
        console.log("Dados finais com Async/Await:", finalData);
    } catch (error) {
        console.error("Erro com Async/Await:", error);
    }
}

processData();
