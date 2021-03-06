const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SimpleQuantity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SimpleQuantity',
	description: 'A fixed quantity (no comparator).',
	fields: () => extendSchema(require('./quantity.schema')),
});
