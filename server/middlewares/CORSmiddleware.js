module.exports = () => (req, res, next) => {
    //Чрез този първия можем да му кажем само от къде приемаме заявки, така както е сега означава от всякъде!
    //защото бивайки SPA означава че ние не приемаме заявки от браузъра ами се отваряме за широката публика, от всякъде приемам заявки! 
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Authorization, Content-Type')
    next()
}