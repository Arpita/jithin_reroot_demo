const express = require('express');
const router = express.Router();
const AppartmentService = require('./apartment.service');

// routes
router.post('/create', createAppartment);
router.put('/:id', updateAppartment);
router.delete('/:id', deleteAppartment);

module.exports = router;

function createAppartment(req, res, next) {
    AppartmentService.createAppartment(req.body)
        .then(() => res.json({"strMessage":"CREATED SUCCESSFULY"}))
        .catch(err => next(err));
}

function updateAppartment(req, res, next) {
    AppartmentService.updateAppartment(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function deleteAppartment(req, res, next) {
    AppartmentService.deleteAppartment(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}