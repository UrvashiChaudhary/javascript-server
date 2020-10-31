export default (config) => (req, res, next)=> {
    console.log("Config",config);
    console.log(req.query);
    //console.log(req.body);
    
    next();
}

const errors=[

    {
    
    key: "skip",
    location: "query",
    errorMessage: "Skip is invalid"
    },
    {
    key: "limit",
    location: "query",
    errorMessage: "Limit is invalid"
    }
]
    
     
