const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Medication.package Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationPackage_Input',
	description: 'Information that only applies to packages (not products).',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-package-form-codes
			container: {
				type: require('./codeableconcept.input'),
				description: 'The kind of container that this package comes as.',
			},
			content: {
				type: new GraphQLList(require('./medicationpackagecontent.input')),
				description:
					'A set of components that go to make up the described item.',
			},
		}),
});
