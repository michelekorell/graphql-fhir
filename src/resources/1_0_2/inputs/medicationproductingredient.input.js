const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Medication.product.ingredient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationProductIngredient_Input',
	description:
		'Identifies a particular constituent of interest in the product.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			item: {
				type: new GraphQLNonNull(require('./reference.input')),
				description:
					'The actual ingredient - either a substance (simple ingredient) or another medication.',
			},
			amount: {
				type: require('./ratio.input'),
				description:
					'Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.',
			},
		}),
});
