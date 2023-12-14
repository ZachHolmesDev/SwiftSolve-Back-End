/**
 * Builds an update data object from a request body and a mongoose model.
 * Only includes fields present in the request body and not system fields (like '_id' and '__v').
 *
 * @param {Object} requestBody - The request body object.
 * @param {Object} model - The model object.
 * @returns {Object} - The update data object.
 */
function buildUpdateDataFromModel(requestBody, model) {
    const updateData = {};
    const schemaFields = Object.keys(model.schema.paths);

    schemaFields.forEach(field => {
        // Check if the field is present in the request body and not a system field (like '_id')
        if (requestBody.hasOwnProperty(field) && (field !== '_id' || field !== '__v')) {
            updateData[field] = requestBody[field];
        }
    });

    return updateData;
}

module.exports = buildUpdateDataFromModel;