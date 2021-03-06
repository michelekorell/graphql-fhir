const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Contract.legal Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractLegal',
	description: 'List of Legal expressions or representations of this Contract.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			contentAttachment: {
				type: new GraphQLNonNull(require('./attachment.schema')),
				description: 'Contract legal text in human renderable form.',
			},
			contentReference: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description: 'Contract legal text in human renderable form.',
			},
		}),
});
