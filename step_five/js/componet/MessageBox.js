/**
 * Created by psenger on 5/21/16.
 */
import React from 'react';
import { Component } from 'react';

export var MessageBox = React.createClass({
    getInitialState: function() {
        return {nameWithQualifier: 'Mr. ' + this.props.name};
    },
    render: function() {
        return <div>{this.state.nameWithQualifier}</div>;
    }
});

