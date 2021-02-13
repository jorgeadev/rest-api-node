const {Router} = require('express');
const router = Router();

router.get('/', (request, response) =>{
    const data = {
        "name": "Jorge Alberto",
        "website": "devvitocode.com"
    };
    response.json(data);
});

module.exports = router;