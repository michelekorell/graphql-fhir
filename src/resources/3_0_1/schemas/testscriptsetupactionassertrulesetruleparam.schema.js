const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.setup.action.assert.ruleset.rule.param Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetupActionAssertRulesetRuleParam',
	description:
		'Each rule template can take one or more parameters for rule evaluation.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'Descriptive name for this parameter that matches the external assert ruleset rule parameter name.',
			},
			_name: {
				type: require('./element.schema'),
				description:
					'Descriptive name for this parameter that matches the external assert ruleset rule parameter name.',
			},
			value: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'The value for the parameter that will be passed on to the external ruleset rule template.',
			},
			_value: {
				type: require('./element.schema'),
				description:
					'The value for the parameter that will be passed on to the external ruleset rule template.',
			},
		}),
});
