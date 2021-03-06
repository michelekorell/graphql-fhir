const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary AuditEvent.source Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventSource_Input',
	description: 'Application systems and processes.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			site: {
				type: GraphQLString,
				description:
					'Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.',
			},
			_site: {
				type: require('./element.input'),
				description:
					'Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.',
			},
			identifier: {
				type: new GraphQLNonNull(require('./identifier.input')),
				description: 'Identifier of the source where the event was detected.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/audit-source-type
			type: {
				type: new GraphQLList(require('./coding.input')),
				description:
					'Code specifying the type of source where event originated.',
			},
		}),
});
