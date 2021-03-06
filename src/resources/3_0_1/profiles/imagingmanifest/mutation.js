// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImagingManifestSchema = require('../../schemas/imagingmanifest.schema');

// Inputs
const ImagingManifestInput = require('../../inputs/imagingmanifest.input');

// Resolvers
const {
	imagingmanifestCreateResolver,
	imagingmanifestUpdateResolver,
	imagingmanifestDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ImagingManifest',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a ImagingManifest record.',
	},
	resource: {
		type: new GraphQLNonNull(ImagingManifestInput),
		description: 'ImagingManifest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a ImagingManifest record for deletion.',
	},
};

/**
 * @name exports.ImagingManifestCreateMutation
 * @summary ImagingManifestCreate Mutation.
 */
module.exports.ImagingManifestCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImagingManifest',
	resolve: scopeInvariant(scopeOptions, imagingmanifestCreateResolver),
	type: ImagingManifestSchema,
};

/**
 * @name exports.ImagingManifestUpdateMutation
 * @summary ImagingManifestUpdate Mutation.
 */
module.exports.ImagingManifestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImagingManifests',
	resolve: scopeInvariant(scopeOptions, imagingmanifestUpdateResolver),
	type: ImagingManifestSchema,
};

/**
 * @name exports.ImagingManifestDeleteMutation
 * @summary ImagingManifestDelete Mutation.
 */
module.exports.ImagingManifestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImagingManifest',
	resolve: scopeInvariant(scopeOptions, imagingmanifestDeleteResolver),
	type: ImagingManifestSchema,
};
