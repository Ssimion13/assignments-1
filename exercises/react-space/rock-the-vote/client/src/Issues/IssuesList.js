import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getAllIssues } from '../redux/issues';
import Issue from './Issue';
import AddIssue from './AddIssue';
import EditIssue from './EditIssue';

class IssuesList extends Component {

    componentDidMount() {
        this.props.getAllIssues();
    }

    render() {
        return (
        <div className='issuesList'>
            <h3>IssuesList</h3>
            <AddIssue />
            <EditIssue />
            <div>
                {this.props.issues.map((issue, i) => {
                    return <Issue
                        title={issue.title}
                        description={issue.description}
                        vote={issue.vote}
                    />
                })}
            </div>

        </div>)
    }
}

export default connect(state => state, { getAllIssues,  })(IssuesList);
