const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.contact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptContact_Input',
	description:
		'Contacts to assist a user in finding and communicating with the publisher.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			name: {
				type: GraphQLString,
				description:
					'The name of an individual to contact regarding the Test Script.',
			},
			_name: {
				type: require('./element.input'),
				description:
					'The name of an individual to contact regarding the Test Script.',
			},
			telecom: {
				type: new GraphQLList(require('./contactpoint.input')),
				description:
					'Contact details for individual (if a name was provided) or the publisher.',
			},
		}),
});
