const config = require('../config.json');
const db = require('../_helpers/db');
const Apartment = db.Apartment;

module.exports = {
    getByComblexName,
    createApartment,
    updateApartment,
    deleteApartment
};


async function getByComblexName(strComblexName) {
    return await Apartment.findOne({ strComblexName: strEmail });
}

async function createApartment(ApartmentParam) {
    // validate
    if (await Apartment.findOne({ comblexName: ApartmentParam.comblexName })) {
        throw 'ComblexName "' + ApartmentParam.comblexName + '" is already included';
    }
    const Apartment = new Apartment(ApartmentParam);

    // save Apartment
    await Apartment.save();
}

async function updateApartment(id, ApartmentParam) {
    const Apartment = await Apartment.findById(id);
    // validate
    if (!Apartment) throw 'Apartment not found';
    if (Apartment.comblexName !== ApartmentParam.comblexName && await Apartment.findOne({ comblexName: ApartmentParam.comblexName })) {
        throw 'Email "' + ApartmentParam.comblexName + '" is already included';
    }

    // copy ApartmentParam properties to Apartment
    Object.assign(Apartment, ApartmentParam);

    await Apartment.save();
}

async function deleteApartment(id) {
    await Apartment.findByIdAndRemove(id);
}