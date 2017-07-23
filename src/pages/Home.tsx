import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderBy } from 'lodash';
import * as classnames from 'classnames';

type HomeProps = {
    contacts: Contact[];
};

type HomeState = Partial<{
    sortAz: boolean;
    searchString: string;
}>;

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {
        sortAz: true,
        searchString: ''
    }

    clearSearch = () => {
        this.setState({
            searchString: ''
        });
    }

    handleSearch = (event: any) => {
        this.setState({
            searchString: event.target.value
        });
    }

    setSortingAz = (sortAz: boolean) => {
        this.setState({
            sortAz
        });
    }

    renderSearch() {
        return (
            <div className="Search">
                <div className="Search__clear" onClick={this.clearSearch}>X</div>
                <input
                    className="Search__input"
                    type="text"
                    value={this.state.searchString}
                    placeholder="Search ..."
                    onChange={this.handleSearch}
                />
            </div>
        );
    }

    renderFilter() {
        const azClasses = classnames('Filter__item', this.state.sortAz && 'Filter__item--active');
        const zaClasses = classnames('Filter__item', !this.state.sortAz && 'Filter__item--active');

        return (
            <div className="Filter">
                <div className={azClasses} onClick={() => this.setSortingAz(true)}>A-Z</div>
                <div className={zaClasses} onClick={() => this.setSortingAz(false)}>Z-A</div>
            </div>
        );
    }

    renderContacts() {
        if (!this.props.contacts.length) {
            return (
                <div className="List__content List__content--empty">
                    Contact List is empty
                </div>
            );
        }

        const filteredContacts = this.state.searchString === '' ? this.props.contacts : this.props.contacts.filter(contact =>
            contact.fullName.toLowerCase().indexOf(this.state.searchString) >= 0
        );

        if (!filteredContacts.length) {
            return (
                <div className="List__content List__content--empty">
                    No result for {this.state.searchString} found
                </div>
            );
        }

        const sortType = this.state.sortAz ? 'asc' : 'desc';
        const sortedContacts = orderBy(filteredContacts, [contact => contact.fullName.toLowerCase()], [sortType]);

        return (
            <div className="List__content">
                {
                    sortedContacts.map(contact => (
                        <Link className="ListItem" key={`item${contact.id}`} to={`/contact/${contact.id}`}>
                            <div className="ListItem__image"></div>
                            {contact.fullName}
                        </Link>
                    ))
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="List">
                    <div className="ListHeader">
                        {this.renderSearch()}
                        {this.renderFilter()}
                        <div className="ListHeader__label">Contact List</div>
                    </div>
                    <div className="ListContent">
                        {this.renderContacts()}
                    </div>
                    <div className="ListFooter">
                        <Link to="/new-contact" className="AddNew">
                            <span className="AddNew__icon">+</span>Add new contact
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: state.Root): HomeProps => ({
    contacts: state.contacts
});

export default connect<any, any, any>(mapStateToProps, undefined)(Home);
