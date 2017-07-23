import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { orderBy, get } from 'lodash';
import * as classnames from 'classnames';
import Button from '../fragments/button/Button';
import { addContact, updateContact, removeContact } from '../components/contacts/contactsWorkflow';

type DetailProps = {
    contact: Contact;
	isNew?: boolean;
	history: any;
	removeContact: (id: string) => void;
	addContact: (id: string, fullName: string, bio: string, phone: string, mail: string) => void;
	updateContact: (id: string, fullName: string, bio: string, phone: string, mail: string) => void;
};

type DetailState = Partial<{
    isEditing: boolean;
	fullName: string;
	bio: string;
	mail: string;
	phone: string;
	isValidMail: boolean;
}>;

function validateEmail(email: string): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

class Detail extends React.Component<DetailProps, DetailState> {
    state: DetailState = {
		isEditing: this.props.isNew,
		fullName: this.props.isNew ? '' : this.props.contact.fullName,
		bio: this.props.isNew ? '' : this.props.contact.bio,
		mail: this.props.isNew ? '' : this.props.contact.mail,
		phone: this.props.isNew ? '' : this.props.contact.phone,
		isValidMail: validateEmail(this.props.isNew ? '' : this.props.contact.mail)
    }

	setEditMode = () => {
		this.setState({
			isEditing: true
		});
	}

	cancelEditMode = () => {
		this.setState({
			isEditing: false,
			fullName: this.props.isNew ? '' : this.props.contact.fullName,
			bio: this.props.isNew ? '' : this.props.contact.bio,
			mail: this.props.isNew ? '' : this.props.contact.mail,
			phone: this.props.isNew ? '' : this.props.contact.phone
		});
	}

	saveChanges = () => {
		this.setState({
			isEditing: false
		});

		if (this.props.isNew) {
			const newId = Math.random().toString(36).substr(2, 10);
			this.props.addContact(newId, this.state.fullName, this.state.bio, this.state.phone, this.state.mail);

			this.props.history.replace(`/contact/${newId}`);
		} else {
			this.props.updateContact(this.props.contact.id, this.state.fullName, this.state.bio, this.state.phone, this.state.mail);
		}
	}

	deleteItem = () => {
		if (!this.props.isNew) {
			this.props.removeContact(this.props.contact.id);
		}

		this.props.history.replace('/');
	}

	updateField = (field: string, value: string) => {
		let updateState: DetailState = {
			[field]: value
		}

		if (field === 'mail') {
			updateState.isValidMail = validateEmail(value);
		}

        this.setState(updateState);
    }

	isAbleToSave = () => {
		return (
			this.state.isValidMail &&
			this.state.fullName !== '' &&
			this.state.phone !== ''
		);
	}

	goToHomepage = () => {
		if (this.props.isNew) {
			this.props.history.replace('/');
		} else {
			this.props.history.push('/');
		}
	}

	renderFooter() {
		return (
			<div className="Detail__footer">
				{!this.state.isEditing && <Button label="Edit" onClick={this.setEditMode} />}
				{this.state.isEditing && <Button type="positive" label="Save" onClick={this.saveChanges} disabled={!this.isAbleToSave()} />}
				{(this.state.isEditing && !this.props.isNew) && <Button type="negative" label="Cancel Edit" onClick={this.cancelEditMode} />}
				{!this.props.isNew && !this.state.isEditing && <Button type="negative" label="Delete" onClick={this.deleteItem} />}
				{(!this.state.isEditing || this.props.isNew) && <Button label="Back" onClick={this.goToHomepage} />}
			</div>
		);
	}

    render() {
        return (
            <div className="Detail">
				<div className="Detail__header">
					<div className="profile-pic"></div>
					<input
						className="name"
						type="text"
						name=""
						value={this.state.fullName}
						placeholder="Full Name"
						disabled={!this.state.isEditing}
						onChange={event => {this.updateField('fullName', event.target.value)}}
					/>
				</div>
				<div className="Detail__content">
					<div className="input-wrap">
						<label htmlFor="bio">Bio</label>
						<textarea
						name="bio"
						className="bio"
						placeholder="Decsription"
						disabled={!this.state.isEditing}
						value={this.state.bio}
						onChange={event => {this.updateField('bio', event.target.value)}}
					/>
					</div>
					<div className="input-wrap">
						<label htmlFor="tel">Phone</label>
						<input
						type="text"
						name="tel"
						className="tel"
						value={this.state.phone}
						placeholder="+XXX XXX XXX XXX"
						disabled={!this.state.isEditing}
						onChange={event => {this.updateField('phone', event.target.value)}}
					/>
					</div>
					<div className="input-wrap">
						<label htmlFor="email">E-mail {!this.state.isValidMail && "NOT VALID"}</label>
						<input
						type="text"
						className="email"
						value={this.state.mail}
						placeholder="E-mail"
						disabled={!this.state.isEditing}
						onChange={event => {this.updateField('mail', event.target.value)}}
					/>
					</div>
				</div>
				{this.renderFooter()}
			</div>
        );
    }
}

const mapStateToProps = (state: state.Root, ownProps: any): any => {
	if (!!ownProps.match.params.id) {
		return {
			contact: state.contacts.filter(contact => contact.id === ownProps.match.params.id)[0]
		}
	}

	return {
		isNew: true
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return ({
		removeContact: (id: string) => dispatch(removeContact(id)),
		addContact: (id: string, fullName: string, bio: string, phone: string, mail: string) => dispatch(addContact(id, fullName, bio, phone, mail)),
		updateContact: (id: string, fullName: string, bio: string, phone: string, mail: string) => dispatch(updateContact(id, fullName, bio, phone, mail))
	});
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Detail);
