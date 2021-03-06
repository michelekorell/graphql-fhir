const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ScheduleResourceType = new GraphQLEnumType({
	name: 'ScheduleResourceType',
	values: {
		Schedule: { value: 'Schedule' },
	},
});

/**
 * @name exports
 * @summary Schedule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Schedule',
	description: 'Base StructureDefinition for Schedule Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(ScheduleResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.schema')),
				description: 'External Ids for this item.',
			},
			active: {
				type: GraphQLBoolean,
				description:
					'Whether this schedule record is in active use, or should not be used (such as was entered in error).',
			},
			_active: {
				type: require('./element.schema'),
				description:
					'Whether this schedule record is in active use, or should not be used (such as was entered in error).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/service-category
			serviceCategory: {
				type: require('./codeableconcept.schema'),
				description:
					'A broad categorisation of the service that is to be performed during this appointment.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/service-type
			serviceType: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The specific service that is to be performed during this appointment.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
			specialty: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The specialty of a practitioner that would be required to perform the service requested in this appointment.',
			},
			actor: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./reference.schema')),
				),
				description:
					'The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, PractitionerRole, Device, Patient or RelatedPerson.',
			},
			planningHorizon: {
				type: require('./period.schema'),
				description:
					"The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a 'template' for planning outside these dates.",
			},
			comment: {
				type: GraphQLString,
				description:
					'Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.',
			},
			_comment: {
				type: require('./element.schema'),
				description:
					'Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.',
			},
		}),
});
