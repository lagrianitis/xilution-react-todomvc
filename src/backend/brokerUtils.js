export const buildCommonOptions = () => ({
    headers: {
        'x-api-key': process.env.XilutionSubscriberApiKey
    }
});

export const buildAuthorizedOptions = (request) => ({
    headers: {
        ...buildCommonOptions().headers,
        Authorization: request.parameters.authorization
    }
});

export const buildContextUserAwareOptions = (request, authenticatedUser) => {
    const options = buildAuthorizedOptions(request);

    return {
        ...options,
        headers: {
            ...options.headers,
            'x-xilution-context-user-id': authenticatedUser.id
        }
    };
};

export const buildTypeAwareOptions = (request, authenticatedUser, type) => {
    const options = buildContextUserAwareOptions(request, authenticatedUser);

    return {
        ...options,
        headers: {
            ...options.headers,
            'x-xilution-type': type
        }
    };
};
