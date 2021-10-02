const axios = require('axios');

function shuffleArray(array)
{
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

exports.main = async (req, res) =>
{
    res.render("../views/index.ejs", {});
};

exports.random = async (req, res) =>
{
    let { type } = await req.query;
    if
    (
        !type &&
        type !== 'boy' &&
        type !== 'girl' &&
        type !== 'anime' &&
        type !== 'e-boy' &&
        type !== 'e-girl' &&
        type !== 'animal' &&
        type !== 'couple' &&
        type !== 'landscape'
    ) type = 'random';

    let pics_ = await axios.get(`https://api.hadiazari.repl.co/${type}`),
        pics = shuffleArray(pics_.data[type]);

    res.render("../views/random.ejs",
        {
            pics,
            type
        });
};