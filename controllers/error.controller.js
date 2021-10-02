exports.get404 = async (req, res) =>
{
    return res.render("../views/error.ejs");
};