/* eslint-disable no-return-assign,react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {authenticationSuccess} from '../actions';

const Authenticate = ({dispatch}) => {
    let username,
        password;

    return (
        <div>
            <h2>{'Sign In'}</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!username.value.trim() || !password.value.trim()) {
                        return;
                    }

                    // todo - call the authentication endpoint
                    dispatch(authenticationSuccess('id-token'));
                    dispatch(push('/todos'));

                    username.value = '';
                    password.value = '';
                }}
            >
                <input ref={(node) => username = node} />
                <input ref={(node) => password = node} />
                <button type="submit">{'Submit'}</button>
            </form>
            <Link to="/register">{'Register'}</Link>
        </div>
    );
};

export default connect()(Authenticate);
/* eslint-enable no-return-assign,react/prop-types */