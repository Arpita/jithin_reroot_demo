const config = require('../config.json');
const db = require('../_helpers/db');
const Units = db.Units;

module.exports = {
    createUnits,
    updateUnits,
    deleteUnits
};


async function createUnits(UnitsParam) {
    // validate
    if (await Units.findOne({ unitNo: UnitsParam.unitNo })) {
        throw 'Email "' + UnitsParam.unitNo + '" is already included';
    }
    const Units = new Units(UnitsParam);

    // save Units
    await Units.save();
}

async function updateUnits(id, UnitsParam) {
    const Units = await Units.findById(id);
    // validate
    if (!Units) throw 'Units not found';
    if (Units.unitNo !== UnitsParam.unitNo && await Units.findOne({ unitNo: UnitsParam.unitNo })) {
        throw 'UnitNo "' + UnitsParam.unitNo + '" is already included';
    }

    // copy UnitsParam properties to Units
    Object.assign(Units, UnitsParam);

    await Units.save();
}

async function deleteUnits(id) {
    await Units.findByIdAndRemove(id);
}