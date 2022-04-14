import tuitsDao from "../tuits-dao.js"

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitID = req.params['tid'];
    const updateTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitID, updateTuit);
    res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
    const tuitID = req.params['tid'];
    const status = await tuitsDao.deleteTuit(tuitID);
    res.sendStatus(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

