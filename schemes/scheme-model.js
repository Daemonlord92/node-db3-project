const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,

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

//ADD ROUTES

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(ids => {
            return findById(ids[0])
        })
}

//UPDATE ROUTES

function update(id, changes){
    return db('schemes')
        .where({id})
        .update(changes);
}

