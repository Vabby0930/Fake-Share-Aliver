const Express = require('express')();

Express.get(
    '/' , ( Q , R ) => R.status(200).send("ACT"),
);

Express.use(
    ( Q , R , N ) => R.status(404).send("NF 404"),
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