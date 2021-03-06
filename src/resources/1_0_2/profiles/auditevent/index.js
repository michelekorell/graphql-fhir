const {
	AuditEventQuery,
	AuditEventListQuery,
	AuditEventInstanceQuery,
} = require('./query');

const {
	AuditEventCreateMutation,
	AuditEventUpdateMutation,
	AuditEventDeleteMutation,
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	 * Define Query Schema's here
	 * Each profile will need to define the two queries it supports
	 * and these keys must be unique across the entire application, like routes
	 */
	query: {
		AuditEvent: AuditEventQuery,
		AuditEventList: AuditEventListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		AuditEventCreate: AuditEventCreateMutation,
		AuditEventUpdate: AuditEventUpdateMutation,
		AuditEventDelete: AuditEventDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'AuditEvent',
		path: '/1_0_2/AuditEvent/:id',
		query: AuditEventInstanceQuery,
	},
};
