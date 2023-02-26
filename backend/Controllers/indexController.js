
const index = (req,res) => {
    return res.json({"msg" : 'coinking api was running',status : 200})
};

module.exports = {index};