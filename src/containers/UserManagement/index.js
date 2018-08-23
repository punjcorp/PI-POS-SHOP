import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addUser, userBeingUpdated, clearAll } from '../../modules/user'
const UserManagement = props => (
    <div>
        <div class="row">
            <div class="col-xs-12">
                <label>First Name :</label>
                <input type="text" name="firstName" id="firstName" value={props.firstName} onChange={props.userBeingUpdated} />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <label>Last Name :</label>
                <input type="text" name="lastName" id="lastName" value={props.lastName} onChange={props.userBeingUpdated} />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <button onClick={props.addUser}>Save</button>
            </div>
            <div class="col-xs-6">
                <button onClick={props.clearAll}>Clear</button>
            </div>
        </div>
    </div>

)



const mapStateToProps = ({ user }) => ({
    firstName: user.firstName,
    lastName: user.lastName
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addUser,
    userBeingUpdated,
    clearAll,
    changePage: () => push('/UserManagement')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserManagement)