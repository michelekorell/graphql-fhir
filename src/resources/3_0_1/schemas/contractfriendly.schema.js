const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Contract.friendly Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractFriendly',
	description:
		"The 'patient friendly language' versionof the Contract in whole or in parts. 'Patient friendly language' means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.",
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			contentAttachment: {
				type: new GraphQLNonNull(require('./attachment.schema')),
				description:
					'Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.',
			},
			contentReference: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.',
			},
		}),
});
