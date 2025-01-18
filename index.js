const Express = require('express')();

Express.get(
    '/' , ( Q , R ) => R.send("ACT").status(200),
);

Express.use(
    ( Q , R , N ) => R.send("NF 404").status(404),
);

Express.listen(
    3001, () => {
        console.log("Fake Share Aliver Started...");
        setInterval(
            async () => {
                await fetch(
                    "https://fake-share.onrender.com",{
                        "method" : "GET"
                    }
                );
            }, 10*60*1000
        );
    }
);