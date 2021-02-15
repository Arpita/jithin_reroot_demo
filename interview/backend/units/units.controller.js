const express = require('express');
const router = express.Router();
const UnitsService = require('./units.service');

// routes
router.post('/create', createUnits);
router.put('/:id', updateUnits);
router.delete('/:id', deleteUnits);

module.exports = router;

function createUnits(req, res, next) {
    UnitsService.createUnits(req.body)
        .then(() => res.json({"strMessage":"CREATED SUCCESSFULY"}))
        .catch(err => next(err));
}

function updateUnits(req, res, next) {
    UnitsService.updateUnits(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function deleteUnits(req, res, next) {
    UnitsService.deleteUnits(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}