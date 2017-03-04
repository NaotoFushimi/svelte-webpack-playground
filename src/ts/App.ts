console.log(2000)

const P1 = require("../html/P1.html").default
console.log(P1)

const app = new P1({
    target: document.getElementById("app"),
    data: {
        name: 'world' ,
        unko : 0
    }
});

// change the data associated with the template
app.set({ name: 'everybody' });

// detach the component and clean everything up
//app.teardown();