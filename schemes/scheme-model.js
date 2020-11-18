const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
}

//GET ROUTES

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({id: Number(id)})
        .first();
}

function findSteps(schemeId) {
    return db('steps as st')
        .join('schemes as s', 's.id', 'st.scheme_id')
        .select('s.scheme_name', 'st.step_number', 'st.instructions')
}